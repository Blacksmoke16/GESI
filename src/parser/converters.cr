# Helper methods for parsing specific portions of the swagger spec
module Converters
  # Handles parsing an array of T
  # either directly casting a JSON obj into T,
  # or looking up T's $ref definition and casting it from there
  module HandleRefs(T)
    def self.from_json(pull : JSON::PullParser) : Array(T)
      arr = [] of T
      pull.read_array do
        json = JSON.parse(pull.read_raw)
        if ref = json["$ref"]?
          key = EveSwagger.swagger_root.not_nil!
          ref.to_s.lchop("#/").split('/').each { |p| key = key[p] }
          param = T.from_json(key.to_json)
          arr << param unless EveSwagger.rejected_params.includes? param.name
        else
          arr << T.from_json(json.to_json)
        end
      end
      arr
    end
  end

  # Returns the scope of an endpoint from its security definition
  module PathScope
    def self.from_json(pull : JSON::PullParser) : String
      scope = ""
      pull.read_array do
        pull.read_object do |key|
          pull.read_array do
            scope = pull.read_string
          end
        end
      end
      scope
    end
  end
end
