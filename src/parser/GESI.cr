require "./eve_swagger"

# Load and parse the swagger spec
base = EveSwagger.load

# Save the function list
File.open("#{EveSwagger::DIST_DIR}/functions.ts", "w") do |file|
  base.endpoints.join("\n", file) { |endpoint, io| endpoint.to_function io }
end

# Save the endpoint list
File.open("#{EveSwagger::DIST_DIR}/endpoints.ts", "w") do |file|
  file.puts "function getScopes(): string[] {"
  file << "  return "

  base.scopes.to_pretty_json file

  file.puts

  file.print "}\n\n"

  keys = base.endpoints.map &.name
  file.puts "function getEndpoints(): IEndpointList {"
  file << "  return "

  Hash.zip(keys, base.endpoints).to_pretty_json file

  file.puts

  file.puts "}"
end
