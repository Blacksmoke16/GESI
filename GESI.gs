  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.3.2.1';

  // Setup variables used throughout script
  CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
  CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
  BASE_URL = 'https://esi.tech.ccp.is/v'

     // Setup endpoint and version list
     endpoints = {
         'skillList': {
             'version': 3,
             'url': '/characters/{character_id}/skills/'
         },
         'skillQueue': {
             'version': 2,
             'url': '/characters/{character_id}/skillqueue/'
         },
         'marketPrices': {
             'version': 1,
             'url': '/markets/prices/'
         },
         'CitadelMarketOrders': {
             'version': 1,
             'url': '/markets/structures/{structure_id}/'
         },
         'itemTypes': {
             'version': 3,
             'url': '/universe/types/{type_id}/'
         },
         'characterAssets': {
             'version': 1,
             'url': '/characters/{character_id}/assets/'
         },
         'characterWallet': {
             'version': 1,
             'url': '/characters/{character_id}/wallets/'
         },
         'characterLoyalty': {
             'version': 1,
             'url': '/characters/{character_id}/loyalty/points/'
         },
         'corporationLoyalty': {
             'version': 1,
             'url': '/loyalty/stores/{corporation_id}/offers/'
         },
         'characterPlanets': {
             'version': 1,
             'url': '/characters/{character_id}/planets/'
         },
         'characterPlanetDetails': {
             'version': 2,
             'url': '/characters/{character_id}/planets/{planet_id}/'
         }
     };


     function onOpen() {
         var ui = SpreadsheetApp.getUi();
         // Or DocumentApp or FormApp.
         ui.createMenu('GESI')
             .addItem('Authorize Sheet', 'showSidebar')
             .addSeparator()
             .addItem('Reset Auth', 'clearService')
             .addSeparator()
             .addItem('Help', 'showHelp')
             .addToUi();
     }


     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Skills
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


     /**
      * Returns a list of Skill names, current points in skill and current level or total skill points.
      * @param {option} option LIST for list of skills, TOTAL for total skill points.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns a list of Skill names, current points in skill and current level or total skill points.
      * @customfunction
      */
     function skills(option, opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var skills = new Array();
         var ids = new Array();

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.skillList.version + endpoints.skillList.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });

         var response = JSON.parse(response);
         option = option.toLowerCase();

         if (option == 'list') {
             if (opt_headers === undefined) {
                 opt_headers = true;
             };
             if (opt_headers) {
                 skills.push(['Name', 'Level', 'SP In Skill']);
             };

             for (var i = 0; i < response.skills.length; i++) {
                 ids.push(response.skills[i].skill_id);
                 skills.push([
                     response.skills[i].skill_id,
                     response.skills[i].current_skill_level,
                     response.skills[i].skillpoints_in_skill
                 ]);
             }

             var skill_names = id2name_(ids);

             for (var i = 0; i < skills.length; i++) {
                 for (var n = 0; n < skill_names.length; n++) {
                     if (skills[i][0] == skill_names[n].id) {
                         skills[i][0] = skill_names[n].name
                     }
                 }
             }
         } else if (option == 'total') {
             if (opt_headers === undefined) {
                 opt_headers = true;
             };
             if (opt_headers) {
                 skills.push('Total SP');
             };
             skills.push(response.total_sp);
         }
         return skills;
     }

     /**
      * Returns the user's current skill queue.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns the users' current skill queue.
      * @customfunction
      */
     function skillsQueue(opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var skills = new Array();
         var ids = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             skills.push(['Name', 'Finished Level', 'Start Date', 'Finish Date', 'Position']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.skillQueue.version + endpoints.skillQueue.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });

         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             ids.push(response[i].skill_id);
             skills.push([
                 response[i].skill_id,
                 response[i].finished_level,
                 response[i].start_date,
                 response[i].finish_date,
                 response[i].queue_position
             ]);
         }

         var skill_names = id2name_(ids);

         for (var i = 0; i < skills.length; i++) {
             for (var n = 0; n < skill_names.length; n++) {
                 if (skills[i][0] == skill_names[n].id) {
                     skills[i][0] = skill_names[n].name
                 }
             }
         }

         return skills;
     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Market
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * Returns the avgerage and adjusted prices for various itemIDs.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns the avgerage and adjusted prices for various itemIDs.
      * @customfunction
      */
     function marketPrices(opt_headers) {
         var eveService = getEVEService();
         var items = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             items.push(['typeID', 'Adjusted Price', 'Average Price']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.marketPrices.version + endpoints.marketPrices.url);
         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             items.push([
                 response[i].type_id,
                 response[i].adjusted_price,
                 response[i].average_price
             ]);
         }

         return items;
     }

     /**
      * Returns all market orders in a given structure.
      * @param {structure_id} structure_id ID of the structure to get market orders.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns all market orders in a given structure.
      * @customfunction
      */
     function structureMarketOrders(structure_id, opt_headers) {
         var eveService = getEVEService();
         var items = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             items.push(['Order ID', 'Buy Order?', 'Type ID', 'Location ID', 'Price', 'issued', 'Range', 'Duration', 'Min Volume', 'Remaining Volume', 'Total Volume']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.CitadelMarketOrders.version + endpoints.CitadelMarketOrders.url.replace("{structure_id}", structure_id), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             items.push([
                 response[i].order_id,
                 response[i].is_buy_order,
                 response[i].type_id,
                 response[i].location_id,
                 response[i].price,
                 response[i].issued,
                 response[i].range,
                 response[i].duration,
                 response[i].min_volume,
                 response[i].volume_remain,
                 response[i].volume_total
             ]);
         }

         return items;
     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Universe
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * Returns information about a type.
      * @param {ids} ids Single typeID or list of typeIDs to lookup.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns information about a type.
      * @customfunction
      */
     function itemTypes(ids, opt_headers) {
         var eveService = getEVEService();
         var items = new Array();
         var typeIDs = new Array();
         var array_length = ids.length;

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             items.push(['Type ID', 'Type Name', 'Volume', 'Group ID', 'Market Group ID', 'Published?']);
         };
         if (!Array.isArray(ids)) {
             typeIDs.push(ids);
             array_length = 1;
         } else {
             typeIDs = ids;
         };

         for (var i = 0; i < array_length; i++) {
             var response = UrlFetchApp.fetch(BASE_URL + endpoints.itemTypes.version + endpoints.itemTypes.url.replace("{type_id}", typeIDs[i]));
             var response = JSON.parse(response);
             items.push([
                 response.type_id,
                 response.name,
                 response.volume,
                 response.group_id,
                 response.market_group_id,
                 response.published
             ]);
         }

         return items;;
     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Assets
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * Returns a list of the characters assets
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns a list of the characters assets
      * @customfunction
      */
     function characterAssets(opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var items = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             items.push(['ItemID', 'TypeID', 'Quantity', 'LocationID', 'Location Type', 'Location Flag']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.characterAssets.version + endpoints.characterAssets.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             var quantity = 1;
             if (!response[i].is_singleton) {
                 quantity = response[i].quantity
             };
             items.push([
                 response[i].item_id,
                 response[i].type_id,
                 quantity,
                 response[i].location_id,
                 response[i].location_type,
                 response[i].location_flag
             ]);
         }
         return items;
     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Loyalty
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * Returns a list of loyalty points for all corporations the character has worked for.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns a list of loyalty points for all corporations the character has worked for.
      * @customfunction
      */
     function characterLoyalty(opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var points = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             points.push(['Corporation ID', 'Loyalty Points']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.characterLoyalty.version + endpoints.characterLoyalty.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);
         for (var i = 0; i < response.length; i++) {
             points.push([
                 response[i].corporation_id,
                 response[i].loyalty_points
             ]);
         }
         return points;
     }

     /**
      * Returns a list of offers from a specific corporation's loyalty store.
      * @param {corporation_id} corporation_id Corporation ID to get the loyalty point store for.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns a list of offers from a specific corporation's loyalty store.
      * @customfunction
      */
     function corporationLoyalty(corporation_id, opt_headers) {
         var items = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             items.push(['Type ID', 'Quantity', 'ISK Cost', 'LP Cost', 'Offer ID', 'Required Item', 'Required Quantity']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.corporationLoyalty.version + endpoints.corporationLoyalty.url.replace("{corporation_id}", corporation_id));
         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             for (var r = 0; r < response[i].required_items.length; r++) {

                 items.push([
                     response[i].type_id,
                     response[i].quantity,
                     response[i].isk_cost,
                     response[i].lp_cost,
                     response[i].offer_id,
                     response[i].required_items[r].type_id,
                     response[i].required_items[r].quantity
                 ]);
             };
         };
         return items;
     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Wallet
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * List of your wallets and their balances. Characters typically have only one wallet, with Wallet ID 1000 being the master wallet.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return List of your wallets and their balances.
      * @customfunction
      */
     function characterWallet(opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var wallet_data = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             wallet_data.push(['Wallet ID', 'Balance']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.characterWallet.version + endpoints.characterWallet.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);

         var balance = response[0].balance / 100

         wallet_data.push([response[0].wallet_id, balance]);

         return wallet_data;
     }


     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                             Planets
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     /**
      * Returns a list of all planetary colonies owned by a character.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns a list of all planetary colonies owned by a character.
      * @customfunction
      */
     function characterPlanets(opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var planets = new Array();

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             planets.push(['Planet ID', 'Type', 'System ID', 'Owner ID', 'Upgrade Level', 'Last Updated', '# Pins']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.characterPlanets.version + endpoints.characterPlanets.url.replace("{character_id}", userProperties.getProperty('character_id')), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);

         for (var i = 0; i < response.length; i++) {
             planets.push([
                 response[i].planet_id,
                 capitalize_(response[i].planet_type),
                 response[i].solar_system_id,
                 response[i].owner_id,
                 response[i].upgrade_level,
                 response[i].last_update,
                 response[i].num_pins
             ]);
         }
         return planets;
     }


     /**
      * Returns full details on the layout of a single planetary colony, including links, pins and routes.
      * @param {planet_id} ID of the planet to get details on.
      * @param {opt_headers} opt_headers Default: True, Boolean if column headings should be listed or not.
      * @return Returns full details on the layout of a single planetary colony, including links, pins and routes.
      * @customfunction
      */
     function characterPlanetDetails_(planet_id, opt_headers) {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var planet = new Array();

         if (planet_id === undefined) {
             throw new Error("No planet ID specified.")
         };

         if (opt_headers === undefined) {
             opt_headers = true;
         };
         if (opt_headers) {
             planet.push(['Planet ID', 'Type', 'System ID', 'Owner ID', 'Upgrade Level', 'Last Updated', '# Pins']);
         };

         var response = UrlFetchApp.fetch(BASE_URL + endpoints.characterPlanetDetails.version + endpoints.characterPlanetDetails.url.replace("{character_id}", userProperties.getProperty('character_id')).replace("{planet_id}", planet_id), {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         var response = JSON.parse(response);

         return response;
     }




     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  OAth2  Functions
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     function getEVEService() {
         // Create a new service with the given name. The name will be used when
         // persisting the authorized token, so ensure it is unique within the
         // scope of the property store.
         return OAuth2.createService('EVE')

             // Set the endpoint URLs, which are the same for all Google services.
             .setAuthorizationBaseUrl('https://login.eveonline.com/oauth/authorize/')
             .setTokenUrl('https://login.eveonline.com/oauth/token')

             // Set the client ID and secret, from the EVE Dev site.
             .setClientId(CLIENT_ID)
             .setClientSecret(CLIENT_SECRET)

             // Set the name of the callback function in the script referenced
             // above that should be invoked to complete the OAuth flow.
             .setCallbackFunction('authCallback')

             // Set the property store where authorized tokens should be persisted.
             .setPropertyStore(PropertiesService.getUserProperties())

             // Set the scopes to request (space-separated).
             .setScope('esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')

             // Requests offline access.  Allows token to be refreshed when it expires
             .setParam('access_type', 'offline')

             .setTokenHeaders({
                 'Authorization': 'Basic ' + Utilities.base64Encode(CLIENT_ID + ':' + CLIENT_SECRET)
             })
     }

     function showSidebar() {
         var eveService = getEVEService();
         if (!eveService.hasAccess()) {
             var authorizationUrl = eveService.getAuthorizationUrl();
             var template = HtmlService.createTemplate(
                 '<a href="<?= authorizationUrl ?>" target="_blank">Authorize</a>.');
             template.authorizationUrl = authorizationUrl;
             var page = template.evaluate();
             SpreadsheetApp.getUi().showSidebar(page);
         }
     }

     function authCallback(request) {
         var eveService = getEVEService();
         var isAuthorized = eveService.handleCallback(request);
         if (isAuthorized) {
             getCharacterDetails_();
             return HtmlService.createHtmlOutput('Success! You can close this tab.');
         } else {
             return HtmlService.createHtmlOutput('Denied. You can close this tab');
         }
     }

     function clearService() {
         OAuth2.createService('EVE')
             .setPropertyStore(PropertiesService.getUserProperties())
             .reset();
     }

     function showHelp() {

     }

     /**
      * Returns the active access token.
      * @return the active access token.
      * @customfunction
      */
     function getAccessToken() {
         return getEVEService().getAccessToken();

     }

     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //                                                                                                  Private Functions
     // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     function getCharacterDetails_() {
         var userProperties = PropertiesService.getUserProperties();
         var eveService = getEVEService();
         var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/verify', {
             headers: {
                 Authorization: 'Bearer ' + eveService.getAccessToken()
             }
         });
         response = JSON.parse(response);
         var newProperties = {
             character_id: response.CharacterID,
             characterName: response.CharacterName,
             expires: response.ExpiresOn
         };
         userProperties.setProperties(newProperties);
     }

     function id2name_(ids) {
         var unique_ids = ids.filter(function(item, pos) {
             return ids.indexOf(item) == pos;
         });

         var options = {
             'method': 'post',
             'contentType': 'application/json',
             'payload': JSON.stringify(unique_ids)
         }
         var response = UrlFetchApp.fetch('https://esi.tech.ccp.is/v2/universe/names/', options);
         return JSON.parse(response);
     }

     function capitalize_(string) {
         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
     }