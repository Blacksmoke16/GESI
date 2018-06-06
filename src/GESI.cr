require "option_parser"
require "./eve_swagger"

OptionParser.parse! do |parser|
  parser.banner = "Usage: GESI [arguments]"
  parser.on("-v version", "--version=version", "Change the ESI version.  Allowed versions: #{EveSwagger::ALLOWED_VERSIONS.join(", ")}") do |version|
    raise OptionParser::InvalidOption.new(version) unless EveSwagger::ALLOWED_VERSIONS.includes? version
    EveSwagger.version = version
  end
  parser.on("-i param", "--ignore=param", "Ignore a given parameter") { |param| EveSwagger.ignore_param(param) }
  parser.on("-a param", "--allow=param", "Allow a given parameter") { |param| EveSwagger.allow_param(param) }
  parser.on("-h", "--help", "Show this help") { puts parser }
end

# Object mapping of swagger space starting from the root
base = EveSwagger::Base.from_json(EveSwagger.load)

# Hash of generated JSON in the format of endpoints.gs
endpoints_hash = base.parse

# Saves the endpoint hash + scopes array to `endpoints.gs`
# base.save

p endpoints_hash["alliances_alliance_contacts"]

# alliances/ - array_integer (items)
# alliances/alliance/ - type (properties)
# alliances/alliance/contacts/ - array_object items -> properties
# corporation/corporation/member/limit/ - integer
# wallet limit - number
