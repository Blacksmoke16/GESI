# GESI
Google Sheets Script for interacting with EVE ESI

Modified version of Google's https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI

To request new endpoints/changes/etc create issues or mail me in game (Blacksmoke16).

### Setup for single character use:
   1. Create a new google sheet or go to the one you want to use the script on.
   2. In the menu bar go to Tools -> Script Editor.
   3. Click on the menu item "Resources > Libraries..."
       * In the "Add a Library" text box, enter 1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF and click the "Add" button.
       * Choose a version in the dropdown box (usually best to pick the latest version).
       * Click the "Save" button.
   4. Copy the contents of GESI.gs into the editor window and save the script. You may need to name the project to save it, so use any name.
   5. Go to File -> Project Properties and copy the Script ID.
   6. Make a new app on the devsite https://developers.eveonline.com/applications/create.  
        * Content Type:  Authentication & API Access
        * PERMISSIONS:   Select all ESI endpoints so you wont' have to edit the app each time a new endpoint is added for GESI.
        * CALLBACK URL:  https://script.google.com/macros/d/{SCRIPT_ID_COPIED_IN_STEP_FIVE}/usercallback
        * Be sure to replace the `{SCRIPT_ID_COPIED_IN_STEP_FIVE}` in the URL with YOUR script ID!
        * Also be sure to replace the `{` and `}` as well.  Url should look something like this, but with your Script ID:
        * `https://script.google.com/macros/d/15lw-cjwWYnHgLU_tmx6KnyHtZ9aR9Q/usercallback`
   7. Replace the example CLIENT_ID and CLIENT_SECRET variables towards the top with your info from the dev app, and save.
   8. Close the script and refresh the spreadsheet.
   9. There will now be a GESI option in the menu bar.  Click it and then click 'Authorize Sheet'.
   10. Give the script permission to do what it needs.
   11. Click 'Authorize Sheet' in the sidenav that opens -> login -> select what character you want to authorize -> Authorize.
   12. Close the sidenav.
   13. Done.
   
### Setup for multiple character use:
   1. Complete steps 1-8 in single character use.
   2. In the script there is a constant variable called `CHARACTERS` (line 13) which is an array of objects. 
      * Replace the contents of the array with the names and corporation_ids of the characters you wish to authorize.
      * E.x. `CHARACTERS = [{ character_name:  'character1', corporation_id: 123 }, { character_name:  'character2', corporation_id: 456 }];`
   4. To auth the characters:
      * In the script there is another constant variable `AUTHING_CHARACTER` (line 15).
      * Complete steps 9-13 in single character use. 
      * Add one (1) to the number in brackets.
      * E.x. `AUTHING_CHARACTER = CHARACTERS[1];`
   5. Repeat step 4 until all characters are authorized.
      * `AUTHING_CHARACTER = CHARACTERS[1];` -> authorize `Blacksmoke17` using steps 9-13 in single character use. 
      * `AUTHING_CHARACTER = CHARACTERS[2];` -> authorize `Blacksmoke18` using steps 9-13 in single character use. 
      
### Features for advanced users

##### To change order of column headers
   1. Find the corresponding object in the ENDPOINTS array.
      * E.x. 
 ```
    "allianceNames": {
        "version": 1,
        "url": "/alliances/names/",
        "headers": ['alliance_id', 'alliance_name']
    }
 ```
   2. Re order the values in the `headers` array to the order you want.
      * The value furthest to the left is first
        
### Note:  In order to use functions that use new scopes, you will have to re-auth your character(s).

### Contact Info
In-game:  Blacksmoke16  
Discord:  Blacksmoke16#1684
  
### Copyright
 EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
 trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
