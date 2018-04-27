# GESI
Google Sheets Script for interacting with EVE ESI

## Setup:
   1. Create a new google sheet or go to the one you want to use the script on.
   2. In the menu bar go to Tools -> Script Editor.
   3. Copy the GESI files.  You may need to name the project to save it, so use any name.
       * Copy the contents of GESI.gs into the Code.gs script file and save the script.  (Can rename Code.gs to GESI.gs if you want)
       * Create a new script file (File -> New -> Script File) and name it `endpoints`.
           * Copy the contents of `endpoints.gs` into this file and save the script
       * Create a new script file (File -> New -> Script File) and name it `functions`.
           * Copy the contents of `functions.gs` into this file and save the script
   4. Go to File -> Project Properties and copy the Script ID.
   5. Make a new app on the devsite https://developers.eveonline.com/applications/create.  
        * Content Type:  Authentication & API Access
        * PERMISSIONS:   Select all esi-* endpoints.
        * CALLBACK URL:  https://script.google.com/macros/d/{SCRIPT_ID_COPIED_IN_STEP_FOUR}/usercallback
        * Be sure to replace the `{SCRIPT_ID_COPIED_IN_STEP_FOUR}` in the URL with YOUR script ID!
        * Also be sure to **not** include the `{` and `}`.  Url should look something like this, but with your Script ID:
        * `https://script.google.com/macros/d/15lw-cjwWYnHgLU_tmx6KnyHtZ9aR9Q/usercallback`
   6. Replace the CLIENT_ID and CLIENT_SECRET variables towards the top with your info from the dev app, and save the script.
   7. Replace `YOUR_MAIN_CHARACTER_NAME` with the name of your main (the character to default to if no name is given with a function) character in the MAIN_CHARACTER constant, and save the script.
   8. Close the script and refresh the spreadsheet.
   9. There will now be a GESI option in the menu bar.  Click it and then click 'Authorize Sheet'.
   10. Give the script permission to do what it needs.
   11. Click 'Authorize with EVE SSO' in the modal that opens -> login -> select what character you want to authorize -> Authorize.
   12. Close the modal.
   13. (Optional) Repeat step 11 to authorize other characters.
   13. Done.
   
## Usage Tips

### Checking the version
Use the GESI option in the menu bar and click the `Check for updates` option.  Explanations of the types of updates for GESI.gs are below:
* New major version - Indicates a major rework of the script, there will most likely be breaking changes that require reauth/edits of your sheet.
* New minor version - New features/additions to the script that will work with current auths.  Just copy paste new code in.
* New patch version - Bug fixes and minor improvements that will work with current auths.  Just copy paste new code in.

**NOTE:  Changes in the ESI spec, such as adding/removing columns, name changes etc., may still break your app.**


### Parameter datatype samples
| Type    | Description                          | Sample                 |
|---------|--------------------------------------|------------------------|
| array   | A string with comma seperated values | "value1,value2,value3" |
| boolean | True or False                        | true                   |
| integer | An integer                           | 16                     |
| string  | A string                             | "value"                |

### Getting all pages of an endpoint datatype samples
`-1` page param will return all pages, however it'll take longer to return.  See the troubleshooting section if you get the `Internal error when executing the custom function` error.

### Using the parseArray function
As of now if an endpoint returns a property that is an array of objects nested inside the response, I am JSON stringifying it and displaying it in the column.  The `parseArray` allows you to parse that array of values and output it like an endpoint function does, wherever you want to.  You supply it with the name of the function the data is from, the column you are parsing, and the cell with the array data.  See the documentation above the function in GESI.gs right above the private utility functions header below the scopes list. 

### Using functions with multiple characters
A common use case is wanting to get the same data from multiple characters.  For example, getting the industry jobs of multiple characters into a nice, easy to manage format.  Currently this can be achieved by calling `=characters_character_industry_jobs()` once, then leaving some space and adding more for each additional characters with opt_headers disabled.  While it is an ok workaround it is not optimal, since there could be empty rows, not easily expandable/editable, etc.  A better alternative would be to define a new custom function `getJobs(character_names)` that will output the industry jobs of the given characters, in a single function call.

```JavaScript
/**
* Returns the combined industry jobs belonging to the given characters
* @param {array} character_names Character names to get jobs for.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Combined industry job.
* @customfunction
*/
function getJobs(character_names, opt_headers) {
  var characters = character_names.split(",");
  var jobs = characters_character_industry_jobs(false, characters.shift(), opt_headers);
  characters.forEach(function(character) {
    jobs = jobs.concat(characters_character_industry_jobs(false, character.trim(), false));
  });
  return jobs;
}
```

Which would for three characters would be used like `=getJobs("Blacksmoke16, Character2, Character3")`.

This is of course just an example, but the general idea can be used as a template for other endpoint functions and uses.

### Changing order of column headers
   1. Find the corresponding object in the ENDPOINTS array in the `endpoints.gs` file
      * E.x. 
 ```JSON
"alliances_alliance": {
    "description": "Public information about an alliance",
    "summary": "Get alliance information",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "creator_corporation_id",
        "type": "integer"
      },
      {
        "name": "ticker",
        "type": "string"
      },
      {
        "name": "executor_corporation_id",
        "type": "integer"
      },
      {
        "name": "date_founded",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      }
    ],
    "path": "/v3/alliances/{alliance_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  }
 ```
   2. Re order the objects in the `headers` array to the order you want.
      * The first object in the array is the first column on the sheet
   3. If a header has a `sub_headers` array, the first value in that array is first as well.
        
## Troubleshooting

### Login failed. Possible reasons can be: Your login session has expired. Please try again.
* Remove scopes you are not using and try again.  Happens because sometime the state token + scopes is too long and causes issues.

### Internal error when executing the custom function
This happens when a request takes more than 30 seconds to complete, which is the limit for a custom function.  A workaround would be something like:
```JavaScript
function getAssets(startPage, endPage) {
  var assets = [];
  for (var page = startPage; page <= endPage; page++) {
    var a = corporations_corporation_assets(null, page, false);
    assets = assets.concat(a);
    if (a.length < 1000) break;
  }
  return assets;
}
```
and call it like `=getAssets(1, 7)`.

Overall the functionality is exactly the same as the `-1` page param, provided you make enough of the functions to account for the highest possible amount of pages.  I.e call `=getAssets(1, 7)` in cell A1, then in cell A7001 (since the assets endpoint returns 1000 items per page, which varies depending on the endpoint) call the function again for pages 8 thru 14, and repeat until you cover all pages of the response.

For example if on average you get 25 pages and are able to get 7 pages within 30 sec you could use 4 functions:

`=getAssets(1, 7)`
`=getAssets(8, 14)`
`=getAssets(15, 21)`
`=getAssets(22, 28)`

If you really wanted you could add in logic like `if (endPage === page && a.length === 1000) throw 'Need more functions to cover additional pages.';` This way if you end up getting 30 pages the last function would throw an error telling you that you need to add more functions to cover pages 29-35.

## Contact Info
In-game:  Blacksmoke16  
Discord:  Blacksmoke16#0016
  
## Copyright
 EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
 trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
