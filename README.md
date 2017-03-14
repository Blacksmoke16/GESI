# GESI
Google Sheets Script for interacting with EVE ESI

Modified version of Google's https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI

As of now the only endpoint avaliable is for skills.  Feel free to create issues or mail me in game (Blacksmoke16) with comments/requests etc.

### Setup:
   1. Create a new google sheet or go to the one you want to use the script on.
   2. In the menu bar go to Tools -> Script Editor.
   3. Copy the contents of GESI.gs into the editor window and save the script. You may need to name the project to save it, so use any name.
   4. Go to File -> Project Properties and copy the Script ID.
   4. Make a new app on the devsite https://developers.eveonline.com/applications/create.  
        Content Type:  Authentication & API Access
        PERMISSIONS:   esi-skills.read_skills.v1
        CALLBACK URL:  https://script.google.com/macros/d/{CLIENT_ID_COPIED_IN_STEP_FOUR}/usercallback
   5. Edit the CLIENT_ID and CLIENT_SECRET variables towards the top with your info from the dev app, and save.
   6. Close the script and refresh the spreadsheet.
   7. There will now be a GESI option in the menu bar.  Click it and then click 'Authorize Sheet'.
   8. Give the script permission to do what it needs.
   9. Click 'Authorize' in the sidenav that opens -> login -> select what character you want to authorize -> Authorize.
   10. Close the sidenav.
   11. Done.

     
### Contact Info
In-game:  Blacksmoke16  
Discord:  Blacksmoke16#1684

Donations are accepted :)
  
### Copyright
 EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
 trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to posManager to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the posManager. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
