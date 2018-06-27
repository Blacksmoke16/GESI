ETAG=$(curl -s --head https://esi.evetech.net/_latest/swagger.json | grep -o '\".*\"'| sed 's/"//g')
VERSION=$(cat src/version.cr)

echo "Current ETag: $VERSION"
echo "ESI ETag: $ETAG"

if [ "$ETAG" != "$VERSION" ]; then
	echo 'New ESI version...updating GESI files'

	# Save new ETag
	sed -i "s/.*/$ETAG/" ./src/version.cr

	# Generate new files
	./bin/GESI-linux-x86_64 -o ./dist/

	# Checkout correct branch
	git checkout $TRAVIS_BRANCH
	
	# Set user settings
	git config --global user.name "GESI Bot" 
	git config --global user.email "Blacksmoke16+GESIBot@eve.tools"

	# Check if anything actually changed
    	if [[ -n $(git diff ./dist/) ]]; then
    		echo "endpoints changed...pushing changes to Github"
		git add -A
		git commit -am "$(date '+%B %d') ESI Updates [skip ci]"
		git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git
	else
		echo "Nothing actually changed...bump version.cr"
		git commit -am "Bump version.cr [skip ci]"
		git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git
	fi
else
	echo "GESI is up-to-date!"
fi
