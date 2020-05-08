# GESI

Google Sheets add-on for interacting with EVE ESI API.  GESI providers an EVE Online SSO flow to authorize your character(s), as well as a wrapper around ESI in order to access your EVE Online data within Google Sheets; much like `=importXML()` worked with the old XML API.

## Setup:

1. Install the add-on.  From within Sheets: Go to `Add-Ons` => `Get add-ons` => Search for `GESI`, click on it, and click `Install`.
1. Give the script access to what it needs.
1. There will now be a GESI option under the `Add-Ons` option in the menu bar.  Click it and then click `GESI => Authorize Character`.
1. Click the EVE SSO button in the modal.  Login => select what character you want to authorize => Authorize.
1. (Optional) Repeat step 4 to authorize other characters.
1. Done.

### Script Editor

By default, one does not have access to GESI functions for use in custom functions in the script editor.  In order to gain access to these functions for custom logic, add GESI as a library to your script:

1. Install the add-on, follow the [setup instructions](./README.md#setup).
1. Within the script editor, click `Resources => Lbraries...`
1. At the bottom paste `MKpdmT9YX4m_dA5qB8ReTppeSVVadBdJf` into the `Add a library` box and click `Add`.
1. Select the latest version from the dropdown, and click `Save`.

In order to use this, functions must be perpended with `GESI`, which maps to the `Identifier` field in the Libraries modal.  For example, `GESI.universe_types();`

**NOTE:** Libraries _do not_ update on their own.  When a new version of GESI is released, you will have to manually update the `version` dropdown in the Libraries modal.

## Usage

GESI works by defining custom functions that map to ESI routes.  For example, if you wanted to get a list of your assets, you would use [this](https://esi.evetech.net/ui/#/Assets/get_characters_character_id_assets) endpoint;  `GET https://esi.evetech.net/v5/characters/{character_id}/assets/`.  In GESI, this would be `=characters_character_assets()` within the sheet.

Arguments can also be passed to the functions, `=universe_types_type(34)`, would return type information for `Tritanium`.  In addition to arguments specific to a function, GESI also defines some arguments that are common between all functions.

* `{string} name` - Name of the character used for authentication. Defaults to the first authenticated character
  * Only present on functions that map to authenticated endpoints
  * See [this](./README.md#how-do-i-get-data-from-a-specific-character) for some additional information
* `{boolean} show_column_headings` - If column headings should be shown.  Defaults to `true`.
  * Mostly for use within the sheet.  Determines if the column headings are displayed, such as `location_id`, or `type_id`, etc.
* `{string} version` - Which ESI version to use for the request.  Defaults to the latest stable version.
  * See [this](./README.md#what-if-i-want-to-use-a-specific-esi-route-version) for some additional information

The common arguments have defaults, you do not need to provide them if your values are the same as the defaults.  I.e. `=characters_character_assets("MyMainCharacter", true, "latest")` is the same as `=characters_character_assets()`.

### Using The Autocomplete/Tooltip Window

Google Sheets includes autocomplete for all custom functions, from both within the sheet and script editor.  This is a super helpful tool for getting an idea of what each function does.

![image-20200507125913620](https://i.imgur.com/tPuD4i8.png)

Each specific function also has a tooltip window that provides a summary of a function, what arguments it takes, etc.

![image-20200507125913620](https://i.imgur.com/9e5c6JW.png)

The `EXAMPLE` section includes a sample function call, with the expected types included.  See [this](./README.md#what-do-the-function-parameter-types-mean) for a breakdown of what those types mean.

> **NOTE:** If the tooltip window is missing, you may need to expand it by clicking the little arrow next to the `X`.

## Advanced Usage

The previous section goes over how to use GESI in its most basic form, getting data from ESI into a spreadsheet; much like `=importXML()` worked with the old XML API.  However, GESI can also be used within Google App Scripts to enable creation of more advanced/complex logic via JavaScript.

> **NOTE:** Be sure to complete the [script editor](./README.md#script-editor) setup instructions.

### Built-In Functions

In addition to the ESI related functions, GESI also provides some methods intended to be used within the script editor.

* `invokeMultiple()`/`invokeMultipleRaw()` - See [this section](./README.md#using-functions-with-multiple-characters) for details.
* `getAuthenticatedCharacters()` - Returns an object representing the characters that have been authenticated.  Keyed by character name, value being an object including their character, corporation, and alliance ids.
* `getAuthenticatedCharacterNames()` - Returns an array of character names that have authenticated, or null if none have been.
* `getCharacterData(characterName: string)` - Returns an object with data related to the given *characterName*.  Essentially is equivalent to ``getAuthenticatedCharacters()[characterName]`.
* `invoke(functionName: string, params: IFunctionParams = { show_column_headings: true })` - Invokes the *functionName* with the given *params*.  Returns sheet formatted data (2D array). E.x. `invoke("universe_types_type", { type_id: 34 })`.  Essentially the same as `universe_types_type(34)` but allows calling functions based on JS variables.
* `invokeRaw(functionName: string, params = { show_column_headings: false } as IFunctionParams)` - Same as `invoke`, but returns the raw JSON data from the ESI request.
* `getClient(characterName?: string)` - Returns an `ESIClient` for the given *characterName*.  Defaults to the main character if no character name is provided.  See the next section for details.

### ESIClient

Internally, each function call results in the creation of an `ESIClient` for a specific character.  The client is used to build and execute the request, parse the response, and format the data to return to the sheet.  The creation of a client has some overhead (~0.3s) when created.  While this normally does not have any noticeable impact when invoking a single request for a single character; it can become a problem when wanting to do a series of requests based for the same character/endpoint.  An example of this could be fetching price history data for a list of `type_ids`.

Normally one would call `markets_region_history(type_id, region_id)` in a loop, adding results to some other array for processing later.  The problem with this is that each invocation of `markets_region_history` would result in the creation of a new `ESIClient`.  Fetching 100 ids would take a minimum of 30 seconds (0.3 * 100), when the total time of making those requests is less than 1 second.

The `ESIClient` can be used by advanced users who are developing advanced/complex sheets in order to increase performance.  It can also be used by those who are building on top of GESI, using GESI more as a way to handle authentication while implementing the ESI interactions on their own.

`getClient` accepts an optional character name argument.  This is the character who the client will be tied to, i.e. who the ESI requests will be made on behalf of.  If no character name is given, it defaults to the main character.  Before the client can be used, it must be initialized with a function name.  For example:

```js
var client = GESI.getClient().setFunction('characters_character_assets');
```

Any future calls to the client will be in the context of this function.

#### execute / executeRaw

These methods are essentially the same as `invoke` and `invokeRaw` mentioned within the [Built-In Functions](./README.md#built-in-functions) section.  However, the API is slightly different.  Since they are methods of the `ESIClient`, only the params need to be provided, since the function name is set directly on the client.

```js
var client = GESI.getClient().setFunction('universe_types_type');
var type_data = client.executeRaw({ type_id: 34 });
```

#### buildRequest

The `ESIClient` also exposes a method that can be used to build a request object given a set of parameters.  The most common use case for this would be to build out an array of requests before executing them manually via [UrlFetchApp.fetchAll](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetchAll(Object)).  This way, the user is able to have full control over the ESI data, while not having to worry about authentication, etc.

> **NOTE:** There is no validation of arguments before executing the requests.  Be sure to provide all required arguments, of the correct types etc.

```js
var client = GESI.getClient().setFunction('markets_region_history');

var type_ids = [34, 35, 36];
var requests = type_ids.map(function(type_id) { return client.buildRequest({ type_id: type_id, region_id: 10000002 }); });

var responses = UrlFetchApp.fetchAll(requests);

// Process the responses
```

## FAQ

### How do I know if I have the latest version of GESI?

GESI will automatically update when a new version is released.  To see what changed visit the [forum thread](https://forums.eveonline.com/t/6-5-0-gesi-google-sheets-esi-library-now-with-some-post-endpoints/13406) or the [Github Releases](https://github.com/Blacksmoke16/GESI/releases) page.

> **NOTE:  Changes in the ESI spec, such as adding/removing columns, name changes etc. may break your sheet.**

### How do I know what functions are available?

Check out [functions.ts](https://github.com/Blacksmoke16/GESI/blob/master/src/script/functions.ts).  This file lists all the available functions, as well as a description of what they return and the available parameters.

### What if I want to use a specific ESI route version?

By default GESI uses the version currently on the `latest` label.  If you wish to use a different version, use the `version` parameter.  `=characters_character_wallet_journal("Blacksmoke16", true, "v10")`.  The version can either be a specific version like `"v4"` or a label: `"dev"`, `"legacy"`, or `"latest"`.

### The `Authorize Character` option in the add-on menu is missing?

This happens when `GESI` is not authorized to run in the current document.  This can be solved by:

1. Go to `Add-Ons => Manage add-ons`
2. Click on the three dots towards the top right of the GESI block
3. Make sure `Use in this document` is checked
4. Refresh the sheet and should be good

### How do I get data from a specific character?

Each authenticated endpoint that has a `name` property that can be used to specify which character's token should be used in that request.

The first character that you authenticate gets set as your main character which will be used if you do not provide a value for the `name` argument for an authenticated endpoint.

For example `=characters_character_assets()` would get the assets for the first character that you authenticated, i.e. your `MAIN_CHARACTER`.  `=characters_character_assets("My Other Character")` would get assets for `My Other Character`.  The `getMainCharacter()` function can be used to get the name of the current main character.  The main character can be updated via `Add-Ons` => `GESI` => `Set Main Character`.

### What do the function parameter types mean?

| Type    | Sample                             |
| ------- | ---------------------------------- |
| boolean | `true` or `false`                  |
| number  | `12`                               |
| string  | `"foo"` Notice the _double_ quotes |

Array types are denoted with a `[]` following the data type of the parameter.  An example of an array type could be `number[]` where a value for that would be `A1:A10` where this range is a column of numbers.

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

A common use case is wanting to get the same data from multiple characters.  For example, getting the industry jobs of multiple characters into a nice, easy to manage format.  This can be achieved by using the `invokeMultiple` method.  `=invokeMultiple("characters_character_assets", characterNames)`.  *characterNames* can either be a comma separated string like `"Character1,Character2"`, a vertical range like `A1:A10`, or the result of `getAuthenticatedCharacterNames()`, or some other array of strings.

This method can be used directly in the sheet.  However, if it requires arguments, then it should be wrapped in a custom function:

```js
function getJobs(characterNames) {
  return GESI.invokeMultiple("characters_character_industry_jobs", characterNames, { include_completed: true })
}
```

`invokeMultipleRaw` is also available.  It works the same as `invokeMultiple`, but returns an array of raw JSON data for the provided *characterNames* instead sheets formatted data (2D array).

### Working with the raw ESI data

Google Sheets uses 2D arrays to represent data within a sheet.  When working on custom functions or scripts, this format is less than ideal to work with.  the `invokeRaw(functionName, params)` function can be used to return the raw ESI JSON data for a given endpoint.  The function accepts a name of a function, and an optional object that includes any arguments that should be used.  Examples:

* `invokeRaw("universe_types")`
* `invokeRaw("universe_types_type", { type_id: 34 })`

This method is meant to be used within custom functions and scripts.

See the [advanced usage](./README.md#advanced-usage) section for more details on working within the script editor.

### Your Login session has expired

See [this issue](https://github.com/esi/esi-issues/issues/519#issuecomment-323892188).

### How do I know my EVE data isn't being misused?

In order to provide GESI, developers have to agree to the [EVE Developer License Agreement](https://developers.eveonline.com/resource/license-agreement).  Section 2.3 explicitly prohibits it.

## Contact Info

In-game:  Blacksmoke16

Discord:  Blacksmoke16#0016

Discord Server: https://discordapp.com/invite/eEAH2et

## Copyright
EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other
trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.

## Privacy Policy
GESI only requires access to spreadsheets it is enabled on in order to operate.  GESI uses the spreadsheet's ID for error logging.
GESI does not store, use, share, or access any other data related to your Google account.