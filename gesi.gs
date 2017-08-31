  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.0.0.1';

  // Setup variables used throughout script
  CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
  CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
  BASE_URL = 'https://esi.tech.ccp.is/v'
  
CHARACTERS = ['Blacksmoke16'];
  
  AUTHING_CHARACTER = CHARACTERS[0];
  
  ENDPOINTS = {
      "characterAssets": {
          "version": 1,
          "url": "/characters/{character_id}/assets/",
          "headers": ['item_id', 'type_id', 'quantity', 'location_id', 'location_type', 'location_flag']
      },
      "characterPlanets": {
          "version": 1,
          "url": "/characters/{character_id}/planets/",
          "name": "characterPlanets",
          "headers": ['planet_id', 'planet_type', 'solar_system_id', 'owner_id', 'upgrade_level', 'last_update', 'num_pins']
      }
  };
  
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Assets
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns a list of the character's assets.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of the characters assets.
   * @customfunction
   */
  function characterAssets(opt_headers) {  
      return getSimpleResponse_(arguments.callee.name, "Blacksmoke16");
  }

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Planets
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  /**
   * Returns a list of all planetary colonies owned by a character.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of all planetary colonies owned by a character.
   * @customfunction
   */
  function characterPlanets(opt_headers) {
    return getSimpleResponse_(arguments.callee.name, "Blacksmoke16");
  }
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Private  Functions
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  function getData_(endpoint_name, name){
      var userProperties = PropertiesService.getUserProperties();
      var eveService = createOAuthForUser(name);
      var url = ENDPOINTS[endpoint_name].url
      
      if(url.indexOf('{character_id') !== -1){ url = url.replace('{character_id}', parseInt(userProperties.getProperty(name))); }

      return UrlFetchApp.fetch(BASE_URL + ENDPOINTS[endpoint_name].version + url, {
          headers: {
              Authorization: 'Bearer ' + eveService.getAccessToken()
          }
      });
  }
  
  function getSimpleResponse_(endpoint_name, name) {
    var response = getData_(endpoint_name, name);
    var data = JSON.parse(response);
    var result = [];
    result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
    
    for (var i = 0; i < data.length; i++) {
    var temp = [];
      for (var k = 0; k < ENDPOINTS[endpoint_name].headers.length; k++) {
        data_value = data[i][ENDPOINTS[endpoint_name].headers[k]];
        temp.push(data_value);
      }
      result.push(temp);
    }

    return result;
  };
  
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  OAth2  Functions
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
   function onOpen() {
       SpreadsheetApp.getUi().createMenu('GESI')
                 .addItem('Authorize Sheet', 'showSidebar')
                 .addSeparator()
                 .addItem('Reset Auth', 'clearService')
                 .addToUi();

   }
  
  function showSidebar() {
    var eveService = createOAuthForUser(AUTHING_CHARACTER);
    if (!eveService.hasAccess()) {
      var authorizationUrl = eveService.getAuthorizationUrl();
      var template = HtmlService.createTemplate(
        '<br><a href="<?= authorizationUrl ?>" target="_blank">Authorize:  <?= character ?></a>.');
      template.authorizationUrl = authorizationUrl;
      template.character = AUTHING_CHARACTER;
      var page = template.evaluate();
      SpreadsheetApp.getUi().showSidebar(page);
    }     
  }

  function authCallback(request) {
      var eveService = createOAuthForUser(AUTHING_CHARACTER);
      var isAuthorized = eveService.handleCallback(request);
      if (isAuthorized) {
          getCharacterDetails_();
          return HtmlService.createHtmlOutput('Success! You can close this tab.');
      } else {
          return HtmlService.createHtmlOutput('Denied. You can close this tab');
      }
  }
  
function createOAuthForUser(user){
 return OAuth2.createService(user)
          .setAuthorizationBaseUrl('https://login.eveonline.com/oauth/authorize/')
          .setTokenUrl('https://login.eveonline.com/oauth/token')
          .setClientId(CLIENT_ID)
          .setClientSecret(CLIENT_SECRET)
          .setCallbackFunction('authCallback')
          .setPropertyStore(PropertiesService.getUserProperties())
          .setScope('esi-contracts.read_character_contracts.v1 esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')
          .setTokenHeaders({
              'Authorization': 'Basic ' + Utilities.base64Encode(CLIENT_ID + ':' + CLIENT_SECRET)
          })  
}

  function clearService() {
    for( var i = 0; i < CHARACTERS.length; i++) {
    Logger.log(CHARACTERS[i]);
      OAuth2.createService(CHARACTERS[i])
          .setPropertyStore(PropertiesService.getUserProperties())
          .reset();
    }
  }

  function getCharacterDetails_() {
      var userProperties = PropertiesService.getUserProperties();
      var eveService = createOAuthForUser(AUTHING_CHARACTER);
      var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/verify', {
          headers: {
              Authorization: 'Bearer ' + eveService.getAccessToken()
          }
      });
      response = JSON.parse(response);
      userProperties.setProperty(AUTHING_CHARACTER, response.CharacterID.toString());
  }
  
  function convertSnakeCase_(headers) {
    var formatted_headers = [];
    for (var h = 0; h < headers.length; h++) {
      str = headers[h].replace(/\_/g,' ');
      formatted_headers.push(str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
    }
    return formatted_headers;
  }
