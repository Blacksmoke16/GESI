require "json"
require "http/client"
require "./converters"

module EveSwagger
  # Base url for the swagger spec
  ESI_HOST = "https://esi.evetech.net"
  # Array of allowed swagger versions
  ALLOWED_VERSIONS = %w(legacy latest dev)

  alias PathObj = Hash(String, Hash(String, PathObjBody))
  alias PathObjBody = String | Int32 | Array(Parameter)

  # Default swagger version
  class_setter version = "latest"
  # Output directory for generated files
  class_property out_dir = "./"

  # Default parameters that will not be included in a function's argument list
  # either because they are not useful or they get handled automatically
  @@rejected_params : Array(String) = %w(user_agent X-User-Agent token If-None-Match Accept-Language datasource character_id corporation_id alliance_id)
  @@swagger_root : JSON::Any | Nil

  # Returns the swagger spec for the desired version
  def self.load
    @@swagger_root = JSON.parse(HTTP::Client.get("#{ESI_HOST}/_#{@@version}/swagger.json").body)
    @@swagger_root.to_json
  end

  # Getter for swagger_root
  def self.swagger_root
    @@swagger_root
  end

  # Getter for rejected_params
  def self.rejected_params
    @@rejected_params
  end

  # Ignore a given param so that it won't show up in a function's parameter list
  def self.ignore_param(param : String)
    @@rejected_params << param unless @@rejected_params.includes? param
  end

  # Allow a given param to show up in a function's parameter list
  def self.allow_param(param : String)
    @@rejected_params.delete param if @@rejected_params.includes? param
  end

  class Base
    @endpoints = {} of String => EndpointObj
    getter scopes = [] of String

    JSON.mapping(
      consumes: {type: Array(String), setter: false},
      definitions: {type: Definitions, setter: false},
      host: {type: String, setter: false},
      info: {type: Info, setter: false},
      parameters: {type: Hash(String, Parameter), setter: false},
      paths: {type: Hash(String, Method), setter: false},
      produces: {type: Array(String), setter: false},
      schemes: {type: Array(String), setter: false},
      securityDefinitions: {type: SecurityDefinitions, setter: false},
      swagger: {type: String, setter: false},
    )

    # Parses the Swagger spec object into GESI endpoints.gs
    # format to build functions.gs off of
    def parse
      @paths.each do |(path_url, responses)|
        # Skip non-get endpoints for now still
        path = responses.get
        next if path.nil?
        if scope = path.scope
          @scopes << scope unless @scopes.includes? scope
        end

        endpoint_name = path.operationId.gsub(/get_|_id/, "")

        # Rename search endpoint to not conflict with Sheets' `Search` function
        endpoint_name = "eve_search" if endpoint_name == "search"

        @endpoints[endpoint_name] = EndpointObj.new(
          path.description,
          path.responses.success.schema,
          path.parameters,
          path_url,
          path.scope,
          path.responses.success.description
        )
      end
      @endpoints
    end

    # Saves the endpoint hash + scopes array to `EveSwagger.out_dir` + endpoints.gs`
    # Saves the functions list to `EveSwagger.out_dir` + functions.gs
    def save
      save_endpoints
      save_functions
    end

    private def save_functions
      functions = String.build do |str|
        @endpoints.each do |endpoint_name, endpoint_data|
          str << "/**\n"
          str << "* #{endpoint_data.description}\n"
          endpoint_data.parameters.each { |p| str << "* @param {#{p.type}} #{p.name} #{p.required ? "(Required)" : ""} #{p.description}\n" }
          str << "* @return #{endpoint_data.summary}\n"
          str << "* @customfunction\n"
          str << "*/\n"
          str << "function #{endpoint_name}(#{endpoint_data.parameters.map { |p| p.name }.join(", ")}) {\n"
          endpoint_data.parameters.each { |p| str << "  if(!#{p.name}) throw '#{p.name} is required';\n" if p.required }
          str << "  return parseData_(arguments.callee.name,{#{endpoint_data.parameters.map { |p| "#{p.name}:#{p.name}" }.join(',')}})\n"
          str << "}\n\n"
        end
      end

      File.open(EveSwagger.out_dir + "functions.gs", mode: "w") do |file|
        file.print(functions)
      end
    end

    private def save_endpoints
      File.open(EveSwagger.out_dir + "endpoints.gs", mode: "w") do |file|
        file.print("SCOPES = ")
        file.print(@scopes.sort!.to_pretty_json)
        file.print(";\n\n")
        file.print("ENDPOINTS = ")
        file.print(@endpoints.to_pretty_json)
        file.print(';')
      end
    end
  end

  class Definitions
    JSON.mapping(
      bad_request: {type: Definition, setter: false},
      error_limited: {type: Definition, setter: false},
      forbidden: {type: Definition, setter: false},
      gateway_timeout: {type: Definition, setter: false},
      internal_server_error: {type: Definition, setter: false},
      service_unavailable: {type: Definition, setter: false},
      unauthorized: {type: Definition, setter: false},
    )
  end

  class Definition
    JSON.mapping(
      description: {type: String, setter: false},
      properties: {type: DefinitionProperties, setter: false},
      required: {type: Array(String), setter: false},
      title: {type: String, setter: false},
      type: {type: String, setter: false},
    )
  end

  class DefinitionProperties
    JSON.mapping(
      error: {type: DefinitionProperty, setter: false},
      sso_status: {type: DefinitionProperty, nilable: true, setter: false},
    )
  end

  class DefinitionProperty
    JSON.mapping(
      description: {type: String, setter: false},
      type: {type: String, setter: false},
    )
  end

  class Info
    JSON.mapping(
      description: {type: String, setter: false},
      title: {type: String, setter: false},
      version: {type: String, setter: false},
    )
  end

  class Parameter
    JSON.mapping(
      description: {type: String, setter: false},
      in: {type: String, setter: false},
      name: {type: String, setter: false},
      type: {type: String, setter: false},
      required: {type: Bool, nilable: false, default: false, setter: false},
    )
  end

  class Path
    JSON.mapping(
      description: {type: String, setter: false},
      operationId: {type: String, setter: false},
      parameters: {type: Array(Parameter), converter: Converters::HandleRefs(Parameter), setter: false},
      responses: {type: ResponseCode, setter: false},
      scope: {type: String, key: "security", converter: Converters::PathScope, nilable: true, setter: false},
      summary: {type: String, setter: false},
      tags: {type: Array(String), setter: false},
      x_alternate_versions: {type: Array(String), key: "x-alternate-versions", setter: false},
      x_cached_secions: {type: Int32, key: "x-cached-seconds", nilable: true, setter: false},
    )
  end

  class Header
    JSON.mapping(
      name: {type: String, setter: false},
      sub_headers: {type: Array(String), nilable: true, setter: false},
    )

    def initialize(@name : String, @sub_headers : Array(String) | Nil = nil); end
  end

  class EndpointObj
    JSON.mapping(
      description: {type: String, setter: false},
      headers: {type: Array(Header), setter: false},
      path: {type: String, setter: false},
      parameters: {type: Array(Parameter), setter: false},
      scope: {type: String | Nil, setter: false},
      summary: {type: String, setter: false},
    )

    def initialize(@description : String, schema : Schema | Nil, @parameters : Array(Parameter), @path : String, @scope : String | Nil, @summary : String)
      @description = @description.match(/([\w ]+)[^\n\-\-\-]+/).not_nil![0]
      @headers = get_headers(schema)
      @parameters.sort_by! { |p| p.required ? 0 : 1 }

      # Add name parameter if function requires auth
      name = Parameter.from_json({name: "name", in: "parameters", type: "boolean", description: "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER."}.to_json)

      # Make `name` param come before `page` param because reasons
      if @scope && !EveSwagger.rejected_params.includes? "name"
        if page = @parameters.find { |p| p.name == "page" }
          @parameters.delete page
          @parameters << name
          @parameters << page
        else
          @parameters << name
        end
      end

      # Add opt_headers parameter
      @parameters << Parameter.from_json({name: "opt_headers", in: "parameters", type: "string", description: "Default: True, Boolean if column headings should be listed or not."}.to_json) unless EveSwagger.rejected_params.includes? "opt_headers"
    end

    private def get_headers(schema : Schema | Nil)
      headers = [] of Header

      return headers if schema.nil?

      # Array
      if items = schema.items
        # of objects
        if properties = items.properties
          properties.each do |k, v|
            # sub array
            sub_headers = parse_items(v.items.not_nil!) if v.type == "array"
            # sub object
            sub_headers = v.properties.not_nil!.keys if v.type == "object"
            headers << Header.new(k, sub_headers)
          end
        else
          # of single type
          title = items.title
          headers << Header.new(title.includes?('_') ? title.match(/.*_(.*)_200_ok/).not_nil![1].chomp('s') + "_ids" : title + 's')
        end
        if required = items.required
          headers.sort_by! { |h| required.index(h.name) || Float64::INFINITY }
        end
        # Single object
      elsif properties = schema.properties
        properties.each do |k, v|
          # sub array
          sub_headers = parse_items(v.items.not_nil!) if v.type == "array"
          # sub object
          sub_headers = v.properties.not_nil!.keys if v.type == "object"
          headers << Header.new(k, sub_headers)
        end
        if required = schema.required
          headers.sort_by! { |h| required.index(h.name) || Float64::INFINITY }
        end
      end
      headers
    end

    private def parse_items(item : Item)
      item.properties.nil? ? [item.title.match(/.*_(.*_.*)/).not_nil![1] + 's'] : item.properties.not_nil!.keys
    end
  end

  class Method
    JSON.mapping(
      get: {type: Path, nilable: true, setter: false},
    )
  end

  class ResponseCode
    JSON.mapping(
      success: {type: Response, key: "200", nilable: false, setter: false},
    )
  end

  class Response
    JSON.mapping(
      description: {type: String, setter: false},
      schema: {type: Schema, nilable: true, setter: false},
    )
  end

  class Schema
    JSON.mapping(
      description: {type: String, setter: false},
      maxItems: {type: Int32, nilable: true, setter: false},
      items: {type: Item, nilable: true, setter: false},
      properties: {type: Hash(String, Item), nilable: true, setter: false},
      required: {type: Array(String), nilable: true, setter: false},
      title: {type: String, setter: false},
      type: {type: String, setter: false},
    )
  end

  class Item
    JSON.mapping(
      description: {type: String, nilable: true, setter: false},
      format: {type: String, nilable: true, setter: false},
      minimum: {type: Int32, nilable: true, setter: false},
      items: {type: Item, nilable: true, setter: false},
      properties: {type: Hash(String, Item), nilable: true, setter: false},
      required: {type: Array(String), nilable: true, setter: false},
      title: {type: String, nilable: false, setter: false},
      type: {type: String, nilable: false, setter: false},
      uniqueItems: {type: Bool, nilable: true, setter: false},
    )
  end

  class Property
    JSON.mapping(
      description: {type: String, setter: false},
      format: {type: String, nilable: true, setter: false},
      minimum: {type: Int32, nilable: true, setter: false},
      title: {type: String, nilable: true, setter: false},
      type: {type: String, setter: false},
    )
  end

  class SecurityDefinitions
    JSON.mapping(
      evesso: {type: EveSso, setter: false},
    )
  end

  class EveSso
    JSON.mapping(
      authorizationUrl: {type: String, setter: false},
      flow: {type: String, setter: false},
      type: {type: String, setter: false},
      scopes: {type: Hash(String, String), setter: false},
    )
  end
end
