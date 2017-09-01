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
      // Alliances
      
      "allianceIds":{
          "version": 1,
          "url": "/alliances/",
          "headers": ['alliance_ids']
      }, 
      "allianceNames":{
          "version": 1,
          "url": "/alliances/names/",
          "headers": ['alliance_id', 'alliance_name']
      },
      "allianceId":{
          "version": 2,
          "url": "/alliances/{alliance_id}/",
          "headers": ['alliance_name', 'ticker', 'executor_corp', 'date_founded']
      },
      "allianceCorporations":{
          "version": 1,
          "url": "/alliances/{alliance_id}/corporations/",
          "headers": ['corporation_ids']
      },
      "allianceIcons":{
          "version": 1,
          "url": "/alliances/{alliance_id}/icons/",
          "headers": ['px128x128', 'px64x64']
      },
            
      // Assets
      
      "characterAssets": {
          "version": 1,
          "url": "/characters/{character_id}/assets/",
          "headers": ['item_id', 'type_id', 'quantity', 'location_id', 'location_type', 'location_flag']
      },
      
      // Bookmarks
      
      "characterBookmarks": {
        "version": 1,
        "url": "/characters/{character_id}/bookmarks/",
        "headers": ['bookmark_id', 'target-location_id', 'memo', 'create_date', 'creator_id', 'note', 'owner_id', 'folder_id', 'target-item-item_id', 'target-item-type_id']
      },
      "characterBookmarkFolders": {
        "version": 1,
        "url": "/characters/{character_id}/bookmarks/folders",
        "headers": ['folder_id', 'name', 'owner_id']
      },
      
      // Calendar
      
      "characterEvents": {
        "version": 1,
        "url": "/characters/{character_id}/calendar/",
        "headers": ['event_id', 'title', 'event_date', 'event_response', 'importance']
      },
      "characterEvent": {
        "version": 3,
        "url": "/characters/{character_id}/calendar/{event_id}/",
        "headers": ['event_id', 'date', 'title', 'text', 'duration', 'owner_id', 'owner_name', 'owner_type', 'response', 'importance']
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      // Planets
      
      "characterPlanets": {
          "version": 1,
          "url": "/characters/{character_id}/planets/",
          "headers": ['planet_id', 'planet_type', 'solar_system_id', 'owner_id', 'upgrade_level', 'last_update', 'num_pins']
      },
      "planetSchematic": {
          "version": 1,
          "url": "/universe/schematics/{schematic_id}/",
          "headers": ['cycle_time', 'schematic_name'] 
      }
  };
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Alliances
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns a list of Alliance IDs
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of Alliance IDs.
   * @customfunction
   */
  function allianceIds(opt_headers) {  
      return getArrayResponse_(arguments.callee.name, '', opt_headers);
  }
  
  /**
   * Resolve a set of alliance IDs to alliance names
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of id/name associations.
   * @customfunction
   */
  function allianceNames(alliance_ids, opt_headers) {  
      if(!alliance_ids) throw 'A range of alliance ids is required';
      return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, alliance_ids);
  }
  
   /**
   * Public information about an alliance
   * @param {number} alliance_id ID of the alliance to get information on
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Public data about an alliance
   * @customfunction
   */
  function allianceId(alliance_id, opt_headers) {  
      if(!alliance_id) throw 'An alliance id is required';
      return getObjectResponse_(arguments.callee.name, '', opt_headers, alliance_id);
  }
  
  /**
   * List all current member corporations of an alliance
   * @param {number} alliance_id ID of the alliance to get corporations for
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return List of corporation IDs
   * @customfunction
   */
  function allianceCorporations(alliance_id, opt_headers) {  
      if(!alliance_id) throw 'An alliance id is required';  
      return getArrayResponse_(arguments.callee.name, '', opt_headers, alliance_id);
  }
  
  /**
   * Get the icon urls for a alliance
   * @param {number} alliance_id ID of the alliance to get icons for
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Urls for icons for the given alliance id and server
   * @customfunction
   */
  function allianceIcons(alliance_id, opt_headers) {  
      if(!alliance_id) throw 'An alliance id is required';  
      return getObjectResponse_(arguments.callee.name, '', opt_headers, alliance_id);
  }
  
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Assets
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns a list of the character's assets.
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of the characters assets.
   * @customfunction
   */
  function characterAssets(name, opt_headers) {  
      return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
  }
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Bookmarks
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * List your character's personal bookmarks
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return A list of bookmarks
   * @customfunction
   */
  function characterBookmarks(name, opt_headers) {  
      return  getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true, true);
  }
  
  /**
   * List your character's personal bookmark folders
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return List of bookmark folders
   * @customfunction
   */
  function characterBookmarkFolders(name, opt_headers) {  
      return  getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
  }
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Calendar
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Get 50 event summaries from the calendar.
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return A collection of event summaries
   * @customfunction
   */
  function characterEvents(name, opt_headers) {  
      return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
  }
  
  /**
   * Get all the information for a specific event
   * @param {number} event_id ID of the event to get information for
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Full details of a specific event
   * @customfunction
   */
  function characterEvent(event_id, name, opt_headers) {  
    if(!event_id) throw 'An event id is required';  
    return getObjectResponse_(arguments.callee.name, name, opt_headers, event_id, true);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Planets
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  /**
   * Returns a list of all planetary colonies owned by a character.
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of all planetary colonies owned by a character.
   * @customfunction
   */
  function characterPlanets(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
  }
  
   /**
   * Returns information on a planetary factory schematic.
   * @param {number} schematic_id ID of the schematic to get information on.
   * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns information on a planetary factory schematic.
   * @customfunction
   */
  function planetSchematic(schematic_id, name, opt_headers) {
    if(!schematic_id) throw 'Schematic ID is required';
    return getObjectResponse_(arguments.callee.name, name, opt_headers, schematic_id)
  }
    
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Private  Functions
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  function getData_(endpoint_name, name, params){
      var userProperties = PropertiesService.getUserProperties();
      var eveService = createOAuthForUser(name);
      var url = ENDPOINTS[endpoint_name].url
      
      if(url.indexOf('{character_id}') !== -1){ url = url.replace('{character_id}', parseInt(userProperties.getProperty(name))); }
      if(url.indexOf('{schematic_id}') !== -1){ url = url.replace('{schematic_id}', params); }
      if(url.indexOf('{event_id}') !== -1){ url = url.replace('{event_id}', params); }

      

      var response = UrlFetchApp.fetch(BASE_URL + ENDPOINTS[endpoint_name].version + url, {
          headers: {
              Authorization: 'Bearer ' + eveService.getAccessToken()
          }
      });
      
      if(!response) throw 'Error getting ESI data';
      
      return JSON.parse(response);
  }
  
  function getUnauthedData_(endpoint_name, name, params){
      var url = BASE_URL + ENDPOINTS[endpoint_name].version + ENDPOINTS[endpoint_name].url;
   
      if(endpoint_name === 'allianceNames') url = url + '?alliance_ids=' + params.join();
      if(url.indexOf('{alliance_id}') !== -1){ url = url.replace('{alliance_id}', params); }
      
      var response = UrlFetchApp.fetch(url);
      
      if(!response) throw 'Error getting public ESI data';
      
      return JSON.parse(response);
  }
  
  function getArrayObjectResponse_(endpoint_name, name, opt_headers, params, authed, isNested) {
    if(!name) name = AUTHING_CHARACTER;
    if(authed) {
      var data = getData_(endpoint_name, name, params);
    } else {
      var data = getUnauthedData_(endpoint_name, name, params);
    } 
    var result = [];
    if(opt_headers === undefined) opt_headers = true;
    if(opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
            
    for (var i = 0; i < data.length; i++) {
    var temp = [];
      if(isNested) data[i] = flatten_(data[i]);
      for (var k = 0; k < ENDPOINTS[endpoint_name].headers.length; k++) {
        data_value = data[i][ENDPOINTS[endpoint_name].headers[k]];
        temp.push(data_value);
      }
      result.push(temp);
    }
  
    return result;
  };
  
  function getObjectResponse_(endpoint_name, name, opt_headers, params, authed) {
    if(!name) name = AUTHING_CHARACTER;
    if(authed) {
      var data = getData_(endpoint_name, name, params);   
    } else {
      var data = getUnauthedData_(endpoint_name, name, params);
    } 
    var result = [];
    if(opt_headers === undefined) opt_headers = true;
    if(opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
    
    var temp = [];
    for (var k = 0; k < ENDPOINTS[endpoint_name].headers.length; k++) {
      temp.push(data[ENDPOINTS[endpoint_name].headers[k]]);
    }
    result.push(temp);

    return result;
  };
  
  
  // Private function for basic array of value responses
  function getArrayResponse_(endpoint_name, name, opt_headers, params, authed) {
    if(!name) name = AUTHING_CHARACTER;
    if(authed) {
      var data = getData_(endpoint_name, name, params);   
    } else {
      var data = getUnauthedData_(endpoint_name, name, params);
    }
    
    var result = [];
    if(opt_headers === undefined) opt_headers = true;
    if(opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
    
    for (var i = 0; i < data.length; i++) {
      result.push(data[i]);
    };

    return result;
  };
  
  
  function flatten_(ob) {
	var toReturn = {};
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flatten_(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '-' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
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
          .setScope('esi-calendar.read_calendar_events.v1 esi-bookmarks.read_character_bookmarks.v1 esi-contracts.read_character_contracts.v1 esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')
          .setParam('access_type', 'offline')
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
