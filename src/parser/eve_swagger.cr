require "json"
require "http/client"
require "json"

module EveSwagger
  DIST_DIR = "../script"
  # Base url for the swagger spec
  ESI_HOST      = "https://esi.evetech.net"
  IGNORE_PARAMS = %w(user_agent X-User-Agent token If-None-Match Accept-Language datasource page)

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
    include JSON::Serializable
    include Comparable(Endpoint)

    getter description : String
    getter method : String

    @[JSON::Field(ignore: true)]
    getter name : String
    getter parameters : Array(Parameter)
    getter path : String
    getter scope : String?
    getter summary : String
    getter version : String

    def initialize(
      @name : String,
      @method : String,
      @description : String,
      @summary : String,
      parameters : Array(Parameter),
      @scope : String?,
      path_url : String
    )
      # Extract the endpoint version and replace with placeholder to allow user to define what version they wish to use
      @version = path_url.match(/\/(v\d)\//).not_nil![1]
      @path = path_url.sub(/v\d/, "{version}")

      # Prepare the passed parameters, converting types to TS type
      # and removing items/schema so it doesn't get serialized
      @parameters = parameters.compact_map do |param|
        # Remove character/corporation/alliance_id param if they are an authed endpoint
        # They will be auto filled in based on the authing character
        next if @scope && param.name.in? "character_id", "corporation_id", "alliance_id"

        param_type = if schema = param.schema
                       type = schema.type
                       if items = schema.items
                         type = type == "array" ? items.type + "[]" : items.type
                       end
                       type = type.includes?("integer") ? type.sub("integer", "number") : type
                     elsif item = param.items
                       type = item.type
                       if sub_items = item.items
                         type = sub_items.type
                       end
                       type = (type == "integer" ? "number" : type) + "[]"
                     else
                       param.type
                     end

        param.copy_with(type: param_type == "integer" ? "number" : param_type, schema: nil, items: nil)
      end

      # Sort the prams so the required ones are first
      @parameters.sort!
    end

    def to_function(io : IO)
      parameters = @parameters.dup

      # Add in common params
      parameters << Parameter.new "Name of the character used for auth. Defaults to the first authenticated character.", "parameters", "name", "string"
      parameters << Parameter.new "If column headings should be shown.", "parameters", "show_column_headings", "boolean", required: nil, default_value: "true"
      parameters << Parameter.new "Which ESI version to use for the request.", "parameters", "version", "string", required: nil, default_value: @version.dump

      io.puts "/**"
      io.puts " * #{@description}"
      io.puts " *"
      parameters.join("", io) { |param, join_io| param.to_doc_s join_io }
      io.puts " * @customfunction"
      io.puts " */"
      io << "function #{@name}("
      parameters.join(", ", io) { |param, join_io| param.to_s join_io }
      io.puts "): SheetsArray {"
      io << "  return invoke_('#{@name}', { "

      parameters.join(", ", io) { |param, join_io| param.name.to_s join_io }

      io << " })"

      io.puts "\n}"
    end

    def <=>(other : self) : Int32?
      @name <=> other.name
    end
  end

  struct Base
    include JSON::Serializable

    getter paths : Hash(String, Method)

    @[JSON::Field(ignore: true)]
    getter endpoints : Array(Endpoint) = Array(Endpoint).new

    @[JSON::Field(key: "securityDefinitions")]
    @security_definitions : SecurityDefinitions

    @parameters : Hash(String, Parameter)

    def scopes : Array(String)
      @security_definitions.evesso.scopes.keys
    end

    def parse : Nil
      @paths.each do |path_url, responses|
        route = responses.route

        # A non GET/POST route
        next if route.nil?

        # A non 200 status route
        next unless route.responses.success

        endpoint_name = route.operation_id.gsub(/^post_|^get_|_id/, "")

        # Rename search endpoint to not conflict with Sheets' `Search` function
        endpoint_name = "eve_search" if endpoint_name == "search"

        # Rename universes to universe_ids due to regex matching `_ids`
        endpoint_name = "universe_ids" if endpoint_name == "universes"

        # Rename status endpoint to not conflict with lib dom function
        endpoint_name = "eve_status" if endpoint_name == "status"

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
      self.parse
      @endpoints.sort!
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

    getter responses : ResponseCode

    getter? paginated : Bool = false

    def description : String
      @description.each_line.first
    end

    def after_initialize
      @paginated = @parameters.any? &.name.==("page")
    end
  end

  struct ResponseCode
    include JSON::Serializable

    @[JSON::Field(key: "200")]
    getter success : Response?
  end

  record Response, description : String do
    include JSON::Serializable
  end

  record Method, get : Path?, post : Path? do
    include JSON::Serializable

    def route : Path?
      @get || @post
    end

    def method : String
      @get ? "get" : "post"
    end
  end

  record Parameter, description : String, in : String, name : String, type : String?, items : Item? = nil, schema : Schema? = nil, required : Bool? = false, default_value : String? = nil do
    include JSON::Serializable
    include Comparable(Parameter)

    @[JSON::Field(ignore: true)]
    @default_value : String?

    setter type : String?
    setter schema : Schema?
    setter items : Item?

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
      io << " * @param {#{self.type}} #{@name} - "

      io.puts @description
    end

    def <=>(other : self) : Int32?
      @required.try do |required|
        return -1 if required
        return 1 unless required
      end

      0
    end

    def after_initialize : Nil
      @required = !!@required
    end
  end

  record Schema, type : String, items : Item? do
    include JSON::Serializable
  end

  class Item
    include JSON::Serializable

    getter type : String
    getter items : Item? = nil
  end

  record EVESSO, scopes : Hash(String, String) do
    include JSON::Serializable
  end

  record SecurityDefinitions, evesso : EVESSO do
    include JSON::Serializable
  end
end
