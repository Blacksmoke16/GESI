require "./eve_swagger"

# Load and parse the swagger spec
base = EveSwagger.load

# Save the function list
File.open("#{EveSwagger::DIST_DIR}/functions.ts", "w") do |file|
  base.endpoints.join("\n", file) { |endpoint, io| endpoint.to_function io }
end

# Save the endpoint list
File.open("#{EveSwagger::DIST_DIR}/endpoints.ts", "w") do |file|
  keys = base.endpoints.map &.name
  file << "const ENDPOINTS: IEndpointList = "

  Hash.zip(keys, base.endpoints).to_pretty_json file
end
