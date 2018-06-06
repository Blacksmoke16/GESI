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

  # Default parameters that will not be included in a function's argument list
  # either because they are not useful or they get handled automatically
  @@rejected_params : Array(String) = %w(user_agent X-User-Agent token If-None-Match character_id alliance_id corporation_id)
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
    @scopes = [] of String

    JSON.mapping(
      definitions: {type: Hash(String, Definition), setter: false},
      host: {type: String, setter: false},
      info: {type: Info, setter: false},
      parameters: {type: Hash(String, Parameter), setter: false},
      paths: {type: Hash(String, Method), setter: false},
      securityDefinitions: {type: SecurityDefinitions, setter: false},
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
        @endpoints[path.operationId.gsub(/get_|_id/, "")] = EndpointObj.new(path.description, path.parameters, path_url, path.scope, path.responses.success.description, path.responses.success.schema)
      end
      @endpoints
    end

    # Saves the endpoint hash + scopes array to `endpoints.gs`
    def save
      File.open("endpoints.gs", mode: "w") do |file|
        file.print("SCOPES = ")
        file.print(@scopes.to_pretty_json)
        file.print(";\n\n")
        file.print("ENDPOINTS = ")
        file.print(@endpoints.to_pretty_json)
        file.print(';')
      end
    end
  end

  class Definition
    JSON.mapping(
      description: {type: String, setter: false},
      properties: {type: Hash(String, NamedTuple(description: String, type: String)), setter: false},
      required: {type: Array(String), setter: false},
      title: {type: String, setter: false},
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
      x_cached_secions: {type: Int32, key: "x-cached-seconds", nilable: true, setter: false},
    )
  end

  class EndpointObj
    JSON.mapping(
      description: {type: String, setter: false},
      path: {type: String, setter: false},
      schema: {type: Array(SchemaObj), setter: false},
      parameters: {type: Array(Parameter), setter: false},
      scope: {type: String | Nil, setter: false},
      summary: {type: String, setter: false},
    )

    def initialize(@description : String, @parameters : Array(Parameter), @path : String, @scope : String | Nil, @summary : String, @schema : Array(SchemaObj))
      @description = @description.match(/([\w ]+)[^\n\-\-\-]+/).not_nil![0]
      headers = [] of SchemaObj
      # p @schema.as(Schema).properties.each do |p|
      #   p p.name
      # end
    end
  end

  class SchemaObj
    JSON.mapping(
      name: {type: String, setter: false},
      type: {type: String, setter: false},
    )

    def initialize(@name : String, @type : String)
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
      schema: {type: Schema, setter: false},
    )
  end

  class Schema
    JSON.mapping(
      description: {type: String, setter: false},
      maxItems: {type: Int32, nilable: true, setter: false},
      items: {type: Item, nilable: true, setter: false},
      properties: {type: Hash(String, Item), nilable: true, setter: false},
      title: {type: String, setter: false},
      type: {type: String, setter: false},
    )
  end

  class Item
    JSON.mapping(
      description: {type: String, nilable: true, setter: false},
      format: {type: String, nilable: true, setter: false},
      minimum: {type: Int32, nilable: true, setter: false},
      properties: {type: Hash(String, Item), nilable: true, setter: false},
      title: {type: String, nilable: true, setter: false},
      type: {type: String, nilable: true, setter: false},
      uniqueItems: {type: Bool, nilable: true, setter: false},
    )
  end

  class Property
    JSON.mapping(
      description: {type: String, setter: false},
      format: {type: String, nilable: true, setter: false},
      minimum: {type: Int32, nilable: true, setter: false},
      title: {type: String, setter: false},
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
