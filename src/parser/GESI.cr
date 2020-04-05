require "option_parser"
require "./eve_swagger"

OptionParser.parse do |parser|
  parser.banner = "Usage: GESI [arguments]"
  parser.on("-h", "--help", "Show this help") { puts parser; exit(0) }
end

# Object mapping of swagger space starting from the root
# excluding non GET requests and non 200 response code responses
base = EveSwagger.load

# pp base.endpoints.last

functions = String.build do |str|
  base.endpoints.join("\n", str) { |endpoint, io| endpoint.to_function io }
end

puts functions
