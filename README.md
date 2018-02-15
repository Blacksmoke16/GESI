# GESI
Google Sheets Script for interacting with EVE ESI

### Setup for single character use:
   1. Create a new google sheet or go to the one you want to use the script on.
   2. In the menu bar go to Tools -> Script Editor.
   3. Copy the GESI files.  You may need to name the project to save it, so use any name.
       * Copy the contents of GESI.gs into the Code.gs script file and save the script.  (Can rename Code.gs to GESI.gs if you want)
       * Create a new script file (File -> New -> Script File) and name it `endpoints`.
           * Copy the contents of `endpoints.gs` into this file and save the script
       * Create a new script file (File -> New -> Script File) and name it `functions`.
           * Copy the contents of `functions.gs` into this file and save the script
   4. Go to File -> Project Properties and copy the Script ID.
       * Update the SCRIPT_ID variable towards the top with your copied value.
   5. Make a new app on the devsite https://developers.eveonline.com/applications/create.  
        * Content Type:  Authentication & API Access
        * PERMISSIONS:   Select all ESI endpoints.
        * CALLBACK URL:  https://script.google.com/macros/d/{SCRIPT_ID_COPIED_IN_STEP_FOUR}/usercallback
        * Be sure to replace the `{SCRIPT_ID_COPIED_IN_STEP_FOUR}` in the URL with YOUR script ID!
        * Also be sure to replace the `{` and `}` as well.  Url should look something like this, but with your Script ID:
        * `https://script.google.com/macros/d/15lw-cjwWYnHgLU_tmx6KnyHtZ9aR9Q/usercallback`
   6. Replace the CLIENT_ID and CLIENT_SECRET variables towards the top with your info from the dev app, and save the script.
   7. Replace `YOUR_CHARACTER_NAME` with the name of your character in the CHARACTERS array, and save the script.
   8. Close the script and refresh the spreadsheet.
   9. There will now be a GESI option in the menu bar.  Click it and then click 'Authorize Sheet'.
   10. Give the script permission to do what it needs.
   11. Click 'Authorize Sheet' in the sidenav that opens -> login -> select what character you want to authorize -> Authorize.
   12. Close the sidenav.
   13. Done.
   
### Setup for multiple character use:
   1. Complete steps 1-8 in single character use.
   2. In the script there is a constant variable called `CHARACTERS` towards the top which is an array of strings. 
      * Add the names of the other characters you want to auth to the contents of the array with the names and corporation_ids of the characters you wish to authorize.
      * E.x. `CHARACTERS = ['character1', 'character2', 'character3'];`
   3. To auth the characters:
      * In the script there is another constant variable `AUTHING_CHARACTER` below the `CHARACTERS` constant.
      * Complete steps 9-13 in single character use. 
      * Add one (1) to the number in brackets.
      * E.x. `AUTHING_CHARACTER = CHARACTERS[1];`
   4. Repeat step 3 until all characters are authorized.
      * `AUTHING_CHARACTER = CHARACTERS[1];` -> authorize `character2` using steps 9-13 in single character use. 
      * `AUTHING_CHARACTER = CHARACTERS[2];` -> authorize `character3` using steps 9-13 in single character use. 
      
### Usage Tips

##### Parameter datatype samples
| Type    | Description                          | Sample                 |
|---------|--------------------------------------|------------------------|
| array   | A string with comma seperated values | "value1,value2,value3" |
| boolean | True or False                        | true                   |
| integer | An integer                           | 16                     |
| string  | A string                             | "value"                |

##### Using the parseArray function
As of now if an endpoint returns a property that is an array of objects nested inside the response, I am JSON stringifying it and displaying it in the column.  The `parseArray` allows you to parse that array of values and output it like an endpoint function does, wherever you want to.  You supply it with the name of the function the data is from, the column you are parsing, and the cell with the array data.  See the documentation above the function in GESI.gs right above the private utility functions header below the scopes list. 

##### Changing order of column headers
   1. Find the corresponding object in the ENDPOINTS array in the `endpoints.gs` file
      * E.x. 
 ```
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
        
### Note:  In order to use functions that use new scopes, you will have to re-auth your character(s).

### Contact Info
In-game:  Blacksmoke16  
Discord:  Blacksmoke16#0016
  
### Copyright
 EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
 trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
