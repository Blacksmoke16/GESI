# GESI

Google Sheets add-on for interacting with EVE ESI API.  GESI providers an EVE Online SSO flow to authorize your character(s), as well as a wrapper around ESI in order to access your EVE Online data within Google Sheets; much like `=importXML()` worked with the old XML API.

## Setup:

1. Install the add-on.  From within Sheets: Go to, `Add-Ons` => `Get add-ons` => Search for `GESI`, and click the `+ Free`.
2. Give the script access to what it needs.
3. There will now be a GESI option under the `Add-Ons` option in the menu bar.  Click it and then click `GESI => Authorize Characters`.
4. Click the EVE SSO button in the modal.  Login => select what character you want to authorize => Authorize.
5. Close the modal.
6. (Optional) Repeat step 4 to authorize other characters.
7. Done.

### Script Editor

By default, one does not have access to GESI functions for use in custom functions in the script editor.  In order to gain access to these functions for custom logic, add GESI as a library to your script:

1. Install the add-on, following the instructions above.
2. Within the script editor, click `Resources => Lbraries...` 
3. At the bottom paste `MKpdmT9YX4m_dA5qB8ReTppeSVVadBdJf` into the `Add a library` box and click `Add`.
4. Select the latest version from the dropdown, and click `Save`.

In order to use this, functions must be perpended with `GESI`, which maps to the `Identifier` field in the Libraries modal.  For example, `GESI.universe_types();`

**NOTE:** Libraries _do not_ update on their own.  When a new version of GESI is released, you will have to manually update the `version` dropdown in the Libraries modal.

## FAQ

### How do I know if I have the latest version of GESI?

GESI will automatically update when a new version is released.  To see what changed visit the [forum thread](https://forums.eveonline.com/t/6-5-0-gesi-google-sheets-esi-library-now-with-some-post-endpoints/13406) or the [Github Releases](https://github.com/Blacksmoke16/GESI/releases) page.

**NOTE:  Changes in the ESI spec, such as adding/removing columns, name changes etc. may break your sheet.**

### How do I know what functions are available?

Check out [functions.ts](https://github.com/Blacksmoke16/GESI/blob/master/src/script/functions.ts).  This file lists all the available functions, as well as a description of what they return and the avaliable parameters.

### What if I want to use a specific ESI route version?

By default GESI uses the version currently on the `latest` label.  If you wish to use a different version, use the `version` parameter.  `=characters_character_wallet_journal("Blacksmoke16", 1, true, "v5")`.  The version can either be a specific version like `"v4"` or a label: `dev`, `legacy`, or `latest`.

### The `Authorize Characters` option in the add-on menu is missing?

This happens when `GESI` is not authorized to run in the current document.  This can be solved by:

1. Go to `Add-Ons => Manage add-ons`
2. Click on `manage` on the `GESI` row
3. Make sure `Use in this document` is checked
4. Refresh the sheet and should be good

### How do I get data from a specific character?

Each authed endpoint that has a `name` property that can be used to specify which character's token should be used in that request.

The first character that you auth gets set as your `MAIN_CHARACTER` which will be used if you do not provide a value for the `name` param for an authed endpoint.

For example `=characters_character_assets()` would get the assets for the first character that you authed, i.e. your `MAIN_CHARACTER`.  `=characters_character_assets("My Other Character")` would get assets for `My Other Character`.

- `=getMainCharacter()` will return your current `MAIN_CHARACTER`.
- `=setMainCharacter("Blacksmoke16")` would update your `MAIN_CHARACTER` to be `Blacksmoke16`.

### Why is my data not updating?

In order to improve performance, and reduce the number of requests to ESI (a user can only make 20,000 requests per day between all their sheets), GESI implements caching on the data returned from ESI.  The length of time that data will be cached depends on the function and when the data is expected to refresh on ESI's side.  

### How can I get more than 1 page of data at a time?

Use `-1` as the value for the page parameter.  This will return all pages, however it may take longer to return, depending on how many pages there are.

### What do the function parameter types mean?

| Type    | Sample                             |
| ------- | ---------------------------------- |
| boolean | `true` or `false`                  |
| number  | `12`                               |
| string  | `"foo"` Notice the _double_ quotes |

Array types are denoted with a `[]` following the data type of the parameter.  An example of an array type could be `number[]` where a value for that would be `A1:A1` where this range is a column of numbers.

### Why does this cell contain all this random data?

As of now if an endpoint returns a property that is an array of objects nested inside the response, I am JSON stringifying it and displaying it in the column.  The `parseArray` allows you to parse that array of values and output it like an endpoint function does, wherever you want to.  You supply it with the name of the function the data is from, the column you are parsing, and the cell with the array data.

An example of this would be `parseArray("characters_character_skills", "skills", B2)` where `B2` is the cell that contains the data.

### How can I limit what scopes are used?

There is not built-in way to do this currently, however it is possible.

1. Open the `Authorize Characters` modal
2. Right click on the SSO button and click `Copy link address`
3. Paste this link into notepad or some text editor
4. Within the URL there is query param like `&scopes=`, which is set to a list of all ESI scopes separated by  `+` signs
5. Remove all the scopes that you do not want, or add ones that are not added by default
6. Copy the URL and paste it into your browser
7. Follow SSO flow as normal
8. Characters authed using this modified URL will not be able to use any function that requires a scope that was not requested.
9. Repeat for additional characters if desired

### Using functions with multiple characters

A common use case is wanting to get the same data from multiple characters.  For example, getting the industry jobs of multiple characters into a nice, easy to manage format.  Currently this can be achieved by calling `=characters_character_industry_jobs()` once, then leaving some space and adding more for each additional characters with opt_headers disabled.  While it is an ok workaround it is not optimal, since there could be empty rows, not easily expandable/editable, etc.  A better alternative would be to define a new custom function `getJobs(character_names)` that will output the industry jobs of the given characters, in a single function call.

```JavaScript
/**
* Returns the combined industry jobs belonging to the given characters
* @param {string[]} character_names Character names to get jobs for.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Combined industry job.
* @customfunction
*/
function getJobs(character_names, opt_headers) {
  var characters = character_names.split(",");
  var jobs = GESI.characters_character_industry_jobs(false, characters.shift(), opt_headers);
  characters.forEach(function(character) {
    jobs = jobs.concat(GESI.characters_character_industry_jobs(false, character.trim(), false));
  });
  return jobs;
}
```

Which would for three characters would be used like `=getJobs("Blacksmoke16, Character2, Character3")`.

This is of course just an example, but the general idea can be used as a template for other endpoint functions and uses.

### How do I know my EVE data isn't being misued?

In order to provide GESI, developers have to agree to the [EVE Developer License Agreement](https://developers.eveonline.com/resource/license-agreement).  Section 2.3 explicitly prohibits it.

## Contact Info

In-game:  Blacksmoke16
Discord:  Blacksmoke16#0016
Discord Server: https://discordapp.com/invite/eEAH2et

## Copyright
EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.

## Google Privacy Policy
GESI only requires access to spreadsheets it is enabled on in order to operate.  GESI uses the spreadsheet's ID for error logging.
GESI does not store, use, share, or access any other data related to your Google account.  The source code is available at https://github.com/Blacksmoke16/GESI.
