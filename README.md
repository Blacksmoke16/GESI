# GESI
Google Sheets Script for interacting with EVE ESI

Modified version of Google's https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI

To request new endpoints/changes/etc create issues or mail me in game (Blacksmoke16).

### Setup:
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
   7. Replace the example CLIENT_ID and CLIENT_SECRET variables towards the top with your info from the dev app, and save.
   8. Close the script and refresh the spreadsheet.
   9. There will now be a GESI option in the menu bar.  Click it and then click 'Authorize Sheet'.
   10. Give the script permission to do what it needs.
   11. Click 'Authorize' in the sidenav that opens -> login -> select what character you want to authorize -> Authorize.
   12. Close the sidenav.
   13. Done.

### Functions:

##### Global:
   * =help() - Returns information on current endpoints.

##### Skills:
   * =skillQueue(opt_headers) - Returns the user's current skill queue.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
   * =skills(option, opt_headers) - Returns a list of Skill names, current points in skill and current level or total skill points.
      * 'List': Returns a list of Skill names, current points in skill and current level
      * 'Total': Returns total SP.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
##### Market:
   * =marketPrices(opt_headers) - Returns the average and adjusted prices for various itemIDs.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
   * =characterMarketOrders(opt_headers) - Returns a list of market orders placed by a character.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
   * =structureMarketOrders(structure_id, opt_headers) - Returns all market orders in a given structure.
      * structure_id:  ID of the structure you want to get market orders from.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
   
##### Universe:
   * =itemTypes(ids, opt_headers) - Returns Information about a type.
      * ids: Either a single typeID, or a list of typeIDs.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
      
##### Assets:
   * =characterAssets(opt_headers) - Returns a list of the characters assets.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
      
##### Loyalty:
   * =characterLoyalty(opt_headers) - Returns a list of loyalty points for all corporations the character has worked for.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
   * =corporationLoyalty(corporation_id, opt_headers) - Returns a list of offers from a specific corporation's loyalty store.
      * corporation_id: Corporation ID to get the loyalty point store for.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.     
       
##### Wallet:
   * =characterWallet(opt_headers) - Returns list of your wallets and their balances.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
      
##### Planets:
 * =characterPlanets(opt_headers) - Returns a list of all planetary colonies owned by a character.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
 * =characterPlanetDetails(planet_id) - Returns full details on the layout of a single planetary colony, including links, pins and routes. 
    * planet_id: ID of the planet to get details on.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
 * =planetSchematic(schematic_id, opt_headers) - Returns information on a planetary factory schematic.
    * schematic_id: ID of the schematic to get information on.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
    
##### Character:
   * =characterBlueprints(opt_headers) - Returns a list of blueprints the character has.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
    
##### Industry:
   * =characterIndustryJobs(opt_headers) - Returns a list of industry jobs placed by a character.
      * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
      
##### Contracts:
 * =characterContracts(opt_headers) - Returns a list of a character's contracts.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
 * =characterContractBids(contract_id, opt_headers) - Returns bids on a particular auction contract.
    * contract_id: ID of the contract to get bids for.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
 * =characterContractItems(contract_id, opt_headers) -Returns Items and details of a particular contract.
    * contract_id: ID of the contract to get information on.
    * opt_headers: Optional parameter.  Defaults to true.  Boolean that determines if column headers are shown or not.
      
 ##### GESI Dropdown:
   * Authorize Sheet - Provides the link to navigate to to login and get your access token
   * Reset Auth - Clears the OAuth2 service, making all tokens invalid.
   
### Note:  In order to use new functions, you will have to re-auth your character.
   * Use 'Reset Auth' under GESI dropdown window to clear the old token/auth data.
   * Use 'Authorize Sheet' under GESI dropdown window to re-auth your character with the newly added scopes.

### Contact Info
In-game:  Blacksmoke16  
Discord:  Blacksmoke16#1684

Donations are accepted :)
  
### Copyright
 EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other 
 trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf.    CCP hf. has granted permission to GESI to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, the GESI. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
