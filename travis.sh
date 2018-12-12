ETAG=$(curl -Is https://esi.evetech.net/_latest/swagger.json | grep -o '\".*\"'| sed 's/"//g')
VERSION=$(cat src/version.cr)

echo "Current ETag: $VERSION"
echo "ESI ETag: $ETAG"

if [ "$ETAG" != "$VERSION" ]; then
    echo 'New ESI version...updating GESI files'

    # Save new ETag
    sed -i "s/.*/$ETAG/" ./src/version.cr

    # Generate new files for latest ESI version
    ./bin/GESI-linux-x86_64 -v latest

    # Checkout correct branch
    git checkout $TRAVIS_BRANCH

    # Set user settings
    git config --global user.name "GESI Bot"
    git config --global user.email "Blacksmoke16+GESIBot@eve.tools"

    # Check if anything actually changed
    if [[ -n $(git diff ./src/script/) ]]; then
        echo "endpoints changed...pushing changes to Github"

        git add -A
        git commit -am "$(date '+%B %d') ESI Updates"
        PUSH=$(git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git)

        if [[ -z $PUSH ]]; then
            # Cut a new pre release draft
            echo "Creating a new pre release draft"
            curl -s -o /dev/null -X POST \
                https://api.github.com/repos/Blacksmoke16/GESI/releases \
                -H "Authorization: Bearer $GITHUB_TOKEN" \
                -H 'Content-Type: application/json' \
                -d '{
                      "tag_name": "$(date '+%dUpdates')",
                      "target_commitish": "master",
                      "name": "'"$(date '+%B %d') ESI Updates"'",
                      "body": "'"https://github.com/esi/esi-issues/blob/master/changelog.md#$(date +%F)"'",
                      "draft": true,
                      "prerelease": true
                    }'
        fi
    else
        echo "Nothing actually changed...bump version.cr"
        git commit -am "Bump version.cr"
        git push -q https://$GITHUB_TOKEN@github.com/Blacksmoke16/GESI.git
    fi
else
    echo "GESI is up-to-date!"
fi
