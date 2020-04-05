require "json"
require "http/client"
require "json"

module EveSwagger
  # Base url for the swagger spec
  ESI_HOST      = "https://esi.evetech.net"
  IGNORE_PARAMS = %w(user_agent X-User-Agent token If-None-Match Accept-Language datasource)

  class_getter! parameters : Hash(String, Parameter)

  def self.load : Base
    json = HTTP::Client.get("#{ESI_HOST}/_latest/swagger.json").body
    @@parameters = Hash(String, Parameter).from_json json, root: "parameters"
    Base.from_json json
  end

  module RefConverter
    def self.from_json(pull : JSON::PullParser) : Array(Parameter)
      arr = [] of Parameter
      pull.read_array do
        param = JSON.parse(pull.read_raw).as_h

        if param.has_key? "$ref"
          param_name = param["$ref"].as_s.split('/').last
          next if EveSwagger::IGNORE_PARAMS.includes? param_name

          arr << EveSwagger.parameters[param_name]
        else
          arr << Parameter.from_json param.to_json
        end
      end
      arr
    end
  end

  module ScopeConverter
    def self.from_json(pull : JSON::PullParser) : String?
      scope = nil

      pull.read_array do
        pull.read_object do
          pull.read_array do
            if scope.nil?
              scope = pull.read_string
            else
              raise "BUG: Path scope is already set"
            end
          end
        end
      end

      scope
    end
  end

  struct Endpoint
    getter name : String
    getter method : String
    getter description : String
    getter summary : String
    getter path_url : String
    getter version : String
    getter parameters : Array(Parameter)

    def initialize(
      @name : String,
      @method : String,
      @description : String,
      @summary : String,
      @parameters : Array(Parameter),
      @scope : String?,
      path_url : String
    )
      # Extract the endpoint version and replace with placeholder to allow user to define what version they wish to use
      @version = path_url.match(/\/(v\d)\//).not_nil![1]
      @path_url = path_url.sub(/v\d/, "{version}")

      # Remove character/corporation/alliance_id param if they are an authed endpoint
      # They will be auto filled in based on the authing character
      if @scope
        @parameters.reject! { |p| p.name.in? "character_id", "corporation_id", "alliance_id" }
      end

      # Add in common params
      @parameters << Parameter.new "Name of the character used for auth. Defaults to the first authenticated character.", "parameters", "name", "string"
      @parameters << Parameter.new "If column headings should be shown.", "parameters", "show_column_headings", "boolean", required: nil, default_value: "true"
      @parameters << Parameter.new "Which ESI version to use for the request.", "parameters", "version", "string", required: nil, default_value: @version.dump
    end

    def to_function(io : IO)
      io.puts "/**"
      io.puts " * #{@description}"
      @parameters.join("", io) { |param, join_io| param.to_doc_s join_io }
      io.puts " * @customfunction"
      io.puts " */"
      io << "function #{@name}("
      @parameters.join(", ", io) { |param, join_io| param.to_s join_io }
      io.puts "): SheetsArray {"
      io << "  return invoke_('#{@name}', { "

      @parameters.join(", ", io) { |param, join_io| param.name.to_s join_io }

      io << " })"

      io.puts "\n}"
    end
  end

  struct Base
    include JSON::Serializable

    getter paths : Hash(String, Method)

    @[JSON::Field(ignore: true)]
    getter endpoints : Array(Endpoint) = [] of Endpoint

    @[JSON::Field(key: "securityDefinitions")]
    @security_definitions : SecurityDefinitions

    @parameters : Hash(String, Parameter)

    def scopes : Array(String)
      @security_definitions.evesso.scopes.keys
    end

    def parse # : Hash(String, Endpoint)
      @paths.first(10).each do |path_url, responses|
        route = responses.route

        # A non GET/POST route
        next if route.nil?

        endpoint_name = route.operation_id.gsub(/^post_|^get_|_id/, "")

        # Rename search endpoint to not conflict with Sheets' `Search` function
        # Rename universes to universe_ids due to regex matching `_ids`
        endpoint_name = "eve_search" if endpoint_name == "search"
        endpoint_name = "universe_ids" if endpoint_name == "universes"

        @endpoints << Endpoint.new(
          endpoint_name,
          responses.method,
          route.description,
          route.summary,
          route.parameters,
          route.scope,
          path_url
        )
      end
    end

    def after_initialize
      parse
    end
  end

  struct Path
    include JSON::Serializable

    @description : String

    @[JSON::Field(converter: EveSwagger::ScopeConverter, key: "security")]
    getter scope : String?

    @[JSON::Field(converter: EveSwagger::RefConverter)]
    getter parameters : Array(Parameter)

    @[JSON::Field(key: "operationId")]
    getter operation_id : String

    getter summary : String

    def description : String
      @description.each_line.first
    end
  end

  record Method, get : Path?, post : Path? do
    include JSON::Serializable

    def route : Path?
      @post || @get
    end

    def method : String
      @post ? "post" : "get"
    end
  end

  record Parameter, description : String, in : String, name : String, type : String?, schema : Schema? = nil, required : Bool? = false, default_value : String? = nil do
    include JSON::Serializable

    def type : String
      if schema = @schema
        schema.type
      else
        @type == "integer" ? "number" : @type.not_nil!
      end
    end

    def to_s(io : IO) : Nil
      io << @name

      @required.try do |required|
        io << '?' unless required
      end

      io << ": #{self.type}"

      @default_value.try do |default|
        io << ' ' << '=' << ' '

        default.to_s io
      end
    end

    def to_doc_s(io : IO) : Nil
      io << " * @param {#{self.type}} "

      unless @required
        io << "[#{@name}"

        @default_value.try do |default|
          io << "=#{default}"
        end

        io << ']'
      else
        io << "#{@name}"
      end

      io << " - "

      io.puts @description
    end
  end

  record Schema, type : String, items : Item? do
    include JSON::Serializable

    def type : String
      if @type == "array"
        item_type = @items.not_nil!.type
        "#{item_type == "integer" ? "number" : item_type}[]"
      else
        @type
      end
    end
  end

  record Item, type : String do
    include JSON::Serializable
  end

  record EVESSO, scopes : Hash(String, String) do
    include JSON::Serializable
  end

  record SecurityDefinitions, evesso : EVESSO do
    include JSON::Serializable
  end
end
