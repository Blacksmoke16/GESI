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
  parser.on("-o param", "--out=param", "Specifiy out directory") { |param| EveSwagger.out_dir = param }
  parser.on("-h", "--help", "Show this help") { puts parser }
end

# Object mapping of swagger space starting from the root
# excluding non GET requests and non 200 response code responses
base = EveSwagger::Base.from_json(EveSwagger.load)

# Parsed mapping of `base` in format of endpoints.gs
endpoints_hash = base.parse

# Generate and save `functions.gs` and `endpoints.gs` files
base.save
