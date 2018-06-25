ETAG=$(curl -s --head https://esi.evetech.net/_latest/swagger.json | grep -o '\".*\"'| sed 's/"//g')
VERSION=$(cat src/version.cr)

echo "Current ETag: $VERSION"
echo "ESI ETag: $ETAG"

if [ "$ETAG" != "$VERSION" ]; then
	echo 'New ESI version...updating version.cr'

	# Save new ETag
	sed -i "s/.*/$ETAG/" ./src/version.cr

	# Generate new files
	./bin/GESI-linux-x86_64 -o ./dist/

	# Checkout correct branch
	git checkout $TRAVIS_BRANCH

	# Check if anything actually changed
    if [[ -n $(git diff ./dist/functions.gs) || -n $(git diff ./dist/endpoints.gs) ]]; then
    	echo "endpoints changed...pushing changes to Github"
		git add -A
		git commit -am "$(date '+%B %d') ESI Updates [skip ci]"
		git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git travis-ci
	else
		echo "Nothing actually changed...bump version.cr"
		git commit -am "Bump version.cr [skip ci]"
		git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git travis-ci
	fi
else
	echo "GESI is up-to-date!"
fi
