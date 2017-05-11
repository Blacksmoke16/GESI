  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.3.4.0';

  // Setup variables used throughout script
  CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
  CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
  BASE_URL = 'https://esi.tech.ccp.is/v'

  // Setup endpoint and version list
  endpoints = {
      'skills': {
          'version': 3,
          'url': '/characters/{character_id}/skills/',
          'name': 'skills',
          'description': 'Default: LIST, LIST for list of skills, TOTAL for total skill points.',
          'paramaters': [
                {'name': 'option', 'description': 'LIST for list of skills, TOTAL for total skill points.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'skillQueue': {
          'version': 2,
          'url': '/characters/{character_id}/skillqueue/',
          'name': 'skillQueue',
          'description': 'Returns the user\'s current skill queue.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'marketPrices': {
          'version': 1,
          'url': '/markets/prices/',
          'name': 'marketPrices',
          'description': 'Returns the avgerage and adjusted prices for various itemIDs.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'structureMarketOrders': {
          'version': 1,
          'url': '/markets/structures/{structure_id}/',
          'name': 'structureMarketOrders',
          'description': 'Returns all market orders in a given structure.',
          'paramaters': [
                {'name': 'structure_id', 'description': 'StructureID of the structure to get market orders.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'itemTypes': {
          'version': 3,
          'url': '/universe/types/{type_id}/',
          'name': 'itemTypes',
          'description': 'Returns information about a type.',
          'paramaters': [
                {'name': 'ids', 'description': 'Single typeID or list of typeIDs to lookup.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterAssets': {
          'version': 1,
          'url': '/characters/{character_id}/assets/',
          'name': 'characterAssets',
          'description': 'Returns a list of the character\'s assets',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterWallet': {
          'version': 1,
          'url': '/characters/{character_id}/wallets/',
          'name': 'characterWallet',
          'description': 'List of your wallets and their balances. Characters typically have only one wallet, with Wallet ID 1000 being the master wallet.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterLoyalty': {
          'version': 1,
          'url': '/characters/{character_id}/loyalty/points/',
          'name': 'characterLoyalty',
          'description': 'Returns a list of loyalty points for all corporations the character has worked for.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'corporationLoyalty': {
          'version': 1,
          'url': '/loyalty/stores/{corporation_id}/offers/',
          'name': 'corporationLoyalty',
          'description': 'Returns a list of offers from a specific corporation\'s loyalty store.',
          'paramaters': [
                {'name': 'corporation_id', 'description': 'Corporation ID to get the loyalty point store for.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterPlanets': {
          'version': 1,
          'url': '/characters/{character_id}/planets/',
          'name': 'characterPlanets',
          'description': 'Returns a list of all planetary colonies owned by a character.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterPlanetDetails': {
          'version': 2,
          'url': '/characters/{character_id}/planets/{planet_id}/',
          'name': 'characterPlanetDetails',
          'description': 'Returns full details on the layout of a single planetary colony, including links, pins and routes. ',
          'paramaters': [
                {'name': 'planet_id', 'description': 'ID of the planet to get details on.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'planetSchematic': {
          'version': 1,
          'url': '/universe/schematics/{schematic_id}/',
          'name': 'planetSchematic',
          'description': 'Returns information on a planetary factory schematic.',
          'paramaters': [
                {'name': 'schematic_id', 'description': 'ID of the schematic to get information on.'},
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterBlueprints': {
          'version': 1,
          'url': '/characters/{character_id}/blueprints/',
          'name': 'characterBlueprints',
          'description': 'Returns a list of blueprints the character has.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterIndustryJobs': {
          'version': 1,
          'url': '/characters/{character_id}/industry/jobs/',
          'name': 'characterIndustryJobs',
          'description': 'Returns a list of industry jobs placed by a character.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      },
      'characterMarketOrders': {
          'version': 1,
          'url': '/characters/{character_id}/orders/',
          'name': 'characterMarketOrders',
          'description': 'Returns a list of market orders placed by a character.',
          'paramaters': [
                {'name': 'opt_headers', 'description': 'Default: True, Boolean if column headings should be listed or not.'}
              ]
      }
  };

   function onOpen() {
       SpreadsheetApp.getUi().createMenu('GESI')
                 .addItem('Authorize Sheet', 'showSidebar')
                 .addSeparator()
                 .addItem('Reset Auth', 'clearService')
                 .addToUi();

   }



  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Skills
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  /**
   * Returns a list of Skill names, current points in skill and current level or total skill points.
   * @param {string} option Default: LIST, LIST for list of skills, TOTAL for total skill points.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of Skill names, current points in skill and current level or total skill points.
   * @customfunction
   */
  function skills(option, opt_headers) {
      var skill_list = new Array();
      var ids = new Array();

      var response = JSON.parse(getData_(arguments.callee.name));

      if (option === undefined) { option = "LIST"; };
      option = option.toLowerCase();

      if (option == 'list') {
          if (opt_headers === undefined) { opt_headers = true; };
          if (opt_headers) { skill_list.push(['Name', 'Level', 'SP In Skill']); };

          for (var i = 0; i < response.skills.length; i++) {
              ids.push(response.skills[i].skill_id);
              skill_list.push([
                  response.skills[i].skill_id,
                  response.skills[i].current_skill_level,
                  response.skills[i].skillpoints_in_skill
              ]);
          }

          var skill_names = id2name_(ids);

          for (var i = 0; i < skill_list.length; i++) {
              for (var n = 0; n < skill_names.length; n++) {
                  if (skill_list[i][0] == skill_names[n].id) {
                      skill_list[i][0] = skill_names[n].name
                  }
              }
          }
      } else if (option == 'total') {
          if (opt_headers === undefined) { opt_headers = true; };
          if (opt_headers) { skill_list.push('Total SP'); };
          skill_list.push(response.total_sp);
      }
      return skill_list;
  }

  /**
   * Returns the user's current skill queue.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns the users' current skill queue.
   * @customfunction
   */
  function skillQueue(opt_headers) {
      var skills = new Array();
      var ids = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { skills.push(['Name', 'Finished Level', 'Start Date', 'Finish Date', 'Position']); };

      var response = JSON.parse(getData_(arguments.callee.name));

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
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns the avgerage and adjusted prices for various itemIDs.
   * @customfunction
   */
  function marketPrices(opt_headers) {
      var items = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { items.push(['typeID', 'Adjusted Price', 'Average Price']); };

      var response = JSON.parse(getData_(arguments.callee.name));

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
   * @param {number} structure_id ID of the structure to get market orders for.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns all market orders in a given structure.
   * @customfunction
   */
  function structureMarketOrders(structure_id, opt_headers) {
      var items = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { items.push(['Order ID', 'Buy Order?', 'Type ID', 'Location ID', 'Price', 'issued', 'Range', 'Duration', 'Min Volume', 'Remaining Volume', 'Total Volume']); };

      var response = JSON.parse(getData_(arguments.callee.name,structure_id));

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

   /**
   * List of market orders placed by a character.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a ist of market orders placed by a character.
   * @customfunction
   */
  function characterMarketOrders(opt_headers) {
      var orders_list = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { orders_list.push(['Order ID', 'Buy Order?', 'Type ID', 'State', 'Location ID', 'Station ID', 'Price', 'issued', 'Range', 'Escrow', 'Region ID', 'Duration', 'Is Corp?', 'Min Volume', 'Remaining Volume', 'Total Volume']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          orders_list.push([
              response[i].order_id,
              response[i].is_buy_order,
              response[i].type_id,
              response[i].state,
              response[i].location_id,
              response[i].station_id,
              response[i].price,
              response[i].issued,
              response[i].range,
              response[i].escrow,
              response[i].region_id,
              response[i].duration,
              response[i].is_corp,
              response[i].min_volume,
              response[i].volume_remain,
              response[i].volume_total
          ]);
      }
      return orders_list;
  }

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Universe
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns information about a type.
   * @param {number/array} ids Single typeID or list of typeIDs to lookup.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns information about a type.
   * @customfunction
   */
  function itemTypes(ids, opt_headers) {
      var items = new Array();
      var typeIDs = new Array();
      var array_length = ids.length;

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { items.push(['Type ID', 'Type Name', 'Volume', 'Group ID', 'Market Group ID', 'Published?']); };
      if (!Array.isArray(ids)) { typeIDs.push(ids);
          array_length = 1; } else { typeIDs = ids; };

      for (var i = 0; i < array_length; i++) {
          var response = JSON.parse(getData_(arguments.callee.name, typeIDs[i]));
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
   * Returns a list of the character's assets.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of the characters assets.
   * @customfunction
   */
  function characterAssets(opt_headers) {
      var items = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { items.push(['ItemID', 'TypeID', 'Quantity', 'LocationID', 'Location Type', 'Location Flag']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          var quantity = 1;
          if (!response[i].is_singleton) { quantity = response[i].quantity };
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
   * Returns Returns a list of loyalty points for all corporations the character has worked for.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of loyalty points for all corporations the character has worked for.
   * @customfunction
   */
  function characterLoyalty(opt_headers) {
      var points = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { points.push(['Corporation ID', 'Loyalty Points']); };

      var response = JSON.parse(getData_(arguments.callee.name));
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
   * @param {number} corporation_id ID of the corporation to get the loyalty point store for.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of offers from a specific corporation's loyalty store.
   * @customfunction
   */
  function corporationLoyalty(corporation_id, opt_headers) {
      var items = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { items.push(['Type ID', 'Quantity', 'ISK Cost', 'LP Cost', 'Offer ID', 'Required Item', 'Required Quantity']); };

      var response = JSON.parse(getData_(arguments.callee.name, corporation_id));

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
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of your wallets and their balances.
   * @customfunction
   */
  function characterWallet(opt_headers) {
      var wallet_data = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { wallet_data.push(['Wallet ID', 'Balance']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      var balance = response[0].balance/100

      wallet_data.push([response[0].wallet_id, balance]);

      return wallet_data;
  }


    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                             Planets
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns a list of all planetary colonies owned by a character.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of all planetary colonies owned by a character.
   * @customfunction
   */
  function characterPlanets(opt_headers) {
      var planets = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { planets.push(['Planet ID', 'Type', 'System ID', 'Owner ID', 'Upgrade Level', 'Last Updated', '# Pins']); };

      var response = JSON.parse(getData_(arguments.callee.name));

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
     * @param {number} planet_id ID of the planet to get details on.
     * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
     * @return Returns full details on the layout of a single planetary colony, including links, pins and routes.
     * @customfunction
     */
    function characterPlanetDetails(planet_id, opt_headers) {
      var planets = new Array();

      if (planet_id === undefined) {throw new Error("No planet ID specified." )};

      var response = JSON.parse(getData_(arguments.callee.name, planet_id));

      // Inserting header for Links
      planets.push(['Links']);

      // Insert data values for links
      planets.push(['', 'Source Pin ID', 'Dest Pin ID', 'Link Level']);

      for(var i = 0; i < response.links.length;i++){
           planets.push([
              '',
              response.links[i].source_pin_id,
              response.links[i].destination_pin_id,
              response.links[i].link_level
          ]);
      }

      // Inserting header for Pins
      planets.push(['Pins']);

      // Insert data values for Pins
      planets.push(['', 'Pin ID', 'Type ID', 'Latitude', 'Longitude', 'Schematic ID', 'Last Cycle Start']);

      var schematic = null;
      var last_start_time = null;

      for(var i = 0; i < response.pins.length;i++){
        if(!(response.pins[i].hasOwnProperty("schematic_id"))){schematic = "N/A"} else {schematic = response.pins[i].schematic_id}
        if(!(response.pins[i].hasOwnProperty("last_cycle_start"))){last_start_time = "N/A"} else {last_start_time = response.pins[i].last_cycle_start}

           planets.push([
              '',
              response.pins[i].pin_id,
              response.pins[i].type_id,
              response.pins[i].latitude,
              response.pins[i].longitude,
              schematic,
              last_start_time
          ]);
      }

      // Inserting header for Pins
      planets.push(['Extractors']);

      // Insert data values for Pins
      planets.push(['', 'Pin ID','Product Type ID', 'Cycle Time', 'Head Radius', 'Quantity Per Cycle']);

      for(var i = 0; i < response.pins.length;i++){
      if( !("extractor_details" in response.pins[i])){ continue;}
           planets.push(['',
             response.pins[i].pin_id,
             response.pins[i].extractor_details.product_type_id,
             response.pins[i].extractor_details.cycle_time,
             response.pins[i].extractor_details.head_radius,
             response.pins[i].extractor_details.qty_per_cycle
             ]);
      }

      // Inserting header for Routes
      planets.push(['Routes']);

      // Insert data values for Routes
      planets.push(['', 'Route ID', 'Source Pin ID', 'Dest Pin ID', 'Content Type ID', 'Quantity']);

      for(var i = 0; i < response.routes.length;i++){
           planets.push(['',
             response.routes[i].route_id,
             response.routes[i].source_pin_id,
             response.routes[i].destination_pin_id,
             response.routes[i].content_type_id,
             response.routes[i].quantity
             ]);
      }


      return planets;
  }

    /**
   * Returns information on a planetary factory schematic.
   * @param {number} schematic_id ID of the schematic to get information on.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns information on a planetary factory schematic.
   * @customfunction
   */
  function planetSchematic(schematic_id, opt_headers) {
      var schematic_data = new Array();

      if (schematic_id === undefined) {throw new Error("No schematic ID specified." )};

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { schematic_data.push(['Name', 'Cycle Time']); };

      var response = JSON.parse(getData_(arguments.callee.name, schematic_id));

      schematic_data.push([response.schematic_name, response.cycle_time]);

      return schematic_data;
  }

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Character
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * List of blueprints the character has.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of blueprints the character has.
   * @customfunction
   */
  function characterBlueprints(opt_headers) {
      var blueprint_list = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { blueprint_list.push(['Item ID', 'Type ID', 'Runs', 'ME', 'TE', 'Quantity', 'Location ID', 'Location Flag']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          blueprint_list.push([
              response[i].item_id,
              response[i].type_id,
              response[i].runs,
              response[i].material_efficiency,
              response[i].time_efficiency,
              response[i].quantity,
              response[i].location_id,
              response[i].location_flag
          ]);
      }
      return blueprint_list;
  }


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Industry
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * List of industry jobs placed by a character.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of industry jobs placed by a character.
   * @customfunction
   */
  function characterIndustryJobs(opt_headers) {
      var job_list = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { job_list.push(['Job ID','Type ID', 'Activity ID', 'Runs', 'Cost', 'Status', 'Duration', 'Licensed Runs', 'Installer ID', 'Facility ID', 'Start Date', 'End Date', 'Blueprint ID', 'Blueprint Location ID', 'Output Location ID', 'Station ID']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          job_list.push([
              response[i].job_id,
              response[i].blueprint_type_id,
              response[i].activity_id,
              response[i].runs,
              response[i].cost,
              response[i].status,
              response[i].duration,
              response[i].licensed_runs,
              response[i].installer_id,
              response[i].facility_id,
              response[i].start_date,
              response[i].end_date,
              response[i].blueprint_id,
              response[i].blueprint_location_id,
              response[i].output_location_id,
              response[i].station_id
          ]);
      }
      return job_list;
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
          .setScope('esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')

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

   /**
   * Returns the active access token.
   * @return the active access token.
   * @customfunction
   */
  function getAccessToken() {
    return getEVEService().getAccessToken();
  }

   /**
   * Returns details on current endpoints.
   * @Returns details on current endpoints.
   * @customfunction
   */
  function help() {
    endpoint_list = [];

    for(var key in endpoints){
      endpoint_list.push([
        endpoints[key].name,
        endpoints[key].description
      ]);

      for( var i = 0; i < endpoints[key].paramaters.length; i++){
        endpoint_list.push([
          '',
          endpoints[key].paramaters[i].name,
          endpoints[key].paramaters[i].description
        ]);
      }

      endpoint_list.push(['']);

    }

    return endpoint_list;

  }


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Private Functions
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  function getData_(endpoint_name, param){
      var userProperties = PropertiesService.getUserProperties();
      var eveService = getEVEService();
      var url = endpoints[endpoint_name].url

      if(url.indexOf('{character_id') !== -1){ url = url.replace('{character_id}', userProperties.getProperty('character_id')); }
      if(param != undefined) { url = url.replace(url.match(/{.+}/g)[0], param); }

      var response = UrlFetchApp.fetch(BASE_URL + endpoints[endpoint_name].version + url, {
          headers: {
              Authorization: 'Bearer ' + eveService.getAccessToken()
          }
      });
      return response;
  }

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