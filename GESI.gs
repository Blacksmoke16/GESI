  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.3.7.0';

  // Setup variables used throughout script
  CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
  CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
  BASE_URL = 'https://esi.tech.ccp.is/v'

  // Setup endpoint and version list
  endpoints = {
        "skills": {
          "version": 4,
          "url": "/characters/{character_id}/skills/",
          "name": "skills",
          "description": "Default: LIST, LIST for list of skills, TOTAL for total skill points.",
          "parameters": [
            {
              "name": "option",
              "description": "LIST for list of skills, TOTAL for total skill points."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "skillQueue": {
          "version": 2,
          "url": "/characters/{character_id}/skillqueue/",
          "name": "skillQueue",
          "description": "Returns the user\"s current skill queue.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "marketPrices": {
          "version": 1,
          "url": "/markets/prices/",
          "name": "marketPrices",
          "description": "Returns the avgerage and adjusted prices for various itemIDs.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "structureMarketOrders": {
          "version": 1,
          "url": "/markets/structures/{structure_id}/",
          "name": "structureMarketOrders",
          "description": "Returns all market orders in a given structure.",
          "parameters": [
            {
              "name": "structure_id",
              "description": "StructureID of the structure to get market orders."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "itemTypes": {
          "version": 3,
          "url": "/universe/types/{type_id}/",
          "name": "itemTypes",
          "description": "Returns information about a type.",
          "parameters": [
            {
              "name": "ids",
              "description": "Single typeID or list of typeIDs to lookup."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterAssets": {
          "version": 1,
          "url": "/characters/{character_id}/assets/",
          "name": "characterAssets",
          "description": "Returns a list of the character\"s assets",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterWallet": {
          "version": 1,
          "url": "/characters/{character_id}/wallet/",
          "name": "characterWallet",
          "description": "Returns the balance of your wallet.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterLoyalty": {
          "version": 1,
          "url": "/characters/{character_id}/loyalty/points/",
          "name": "characterLoyalty",
          "description": "Returns a list of loyalty points for all corporations the character has worked for.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "corporationLoyalty": {
          "version": 1,
          "url": "/loyalty/stores/{corporation_id}/offers/",
          "name": "corporationLoyalty",
          "description": "Returns a list of offers from a specific corporation\"s loyalty store.",
          "parameters": [
            {
              "name": "corporation_id",
              "description": "Corporation ID to get the loyalty point store for."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterPlanets": {
          "version": 1,
          "url": "/characters/{character_id}/planets/",
          "name": "characterPlanets",
          "description": "Returns a list of all planetary colonies owned by a character.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterPlanetDetails": {
          "version": 2,
          "url": "/characters/{character_id}/planets/{planet_id}/",
          "name": "characterPlanetDetails",
          "description": "Returns full details on the layout of a single planetary colony, including links, pins and routes. ",
          "parameters": [
            {
              "name": "planet_id",
              "description": "ID of the planet to get details on."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "planetSchematic": {
          "version": 1,
          "url": "/universe/schematics/{schematic_id}/",
          "name": "planetSchematic",
          "description": "Returns information on a planetary factory schematic.",
          "parameters": [
            {
              "name": "schematic_id",
              "description": "ID of the schematic to get information on."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterBlueprints": {
          "version": 1,
          "url": "/characters/{character_id}/blueprints/",
          "name": "characterBlueprints",
          "description": "Returns a list of blueprints the character has.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterIndustryJobs": {
          "version": 1,
          "url": "/characters/{character_id}/industry/jobs/",
          "name": "characterIndustryJobs",
          "description": "Returns a list of industry jobs placed by a character.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterMarketOrders": {
          "version": 1,
          "url": "/characters/{character_id}/orders/",
          "name": "characterMarketOrders",
          "description": "Returns a list of market orders placed by a character.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterWalletJournal": {
          "version": 1,
          "url": "/characters/{character_id}/wallet/journal/",
          "name": "characterWalletJournal",
          "description": "Returns a character\"s wallet journal.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterContracts": {
          "version": 1,
          "url": "/characters/{character_id}/contracts/",
          "name": "characterContracts",
          "description": "Returns a list of a character\"s contracts.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterContractBids": {
          "version": 1,
          "url": "/characters/{character_id}/contracts/{contract_id}/bids/",
          "name": "characterContractBids",
          "description": "Returns bids on a particular auction contract.",
          "parameters": [
            {
              "name": "contract_id",
              "description": "ID of the contract to get bids for."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterContractItems": {
          "version": 1,
          "url": "/characters/{character_id}/contracts/{contract_id}/items/",
          "name": "characterContractItems",
          "description": "Returns Items and details of a particular contract.",
          "parameters": [
            {
              "name": "contract_id",
              "description": "ID of the contract to get information on."
            },
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "characterWalletTransactions": {
          "version": 1,
          "url": "/characters/{character_id}/wallet/transactions/",
          "name": "characterWalletTransactions",
          "description": "Returns a character\"s wallet transactions.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "industryFacilities": {
          "version": 1,
          "url": "/industry/facilities/",
          "name": "industryFacilities",
          "description": "Return a list of industry facilities.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
          ]
        },
        "industrySystems": {
          "version": 1,
          "url": "/industry/systems/",
          "name": "industrySystems",
          "description": "Return cost indices for solar systems.",
          "parameters": [
            {
              "name": "opt_headers",
              "description": "Default: True, Boolean if column headings should be listed or not."
            }
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
          if (opt_headers) { skill_list.push(['Name', 'Active Level', 'Trained Level', 'SP In Skill']); };

          for (var i = 0; i < response.skills.length; i++) {
              ids.push(response.skills[i].skill_id);
              skill_list.push([
                  response.skills[i].skill_id,
                  response.skills[i].active_skill_level,
                  response.skills[i].trained_skill_level,
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
   * Returns the balance of your wallet.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns the balance of your wallet.
   * @customfunction
   */
  function characterWallet(opt_headers) {
      var wallet_data = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) { wallet_data.push(['Balance']); };

      var response = getData_(arguments.callee.name);

      wallet_data.push([parseFloat(response)]);

      return wallet_data;
  }

   /**
   * Retrieve character wallet journal.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Retrieve character wallet journal.
   * @customfunction
   */
  function characterWalletJournal(opt_headers) {
      var entries = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) entries.push(['Ref ID', 'Date', 'Ref Type', 'Amount', 'Balance', 'Description', 'Tax Reciver ID', 'First Party Type', 'First Party ID', 'Second Party Type', 'Second Party ID', 'Extra Info:']);

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          entries.push([
              response[i].ref_id,
              response[i].date,
              response[i].ref_type,
              response[i].amount,
              response[i].balance,
              response[i].reason,
              response[i].tax_reciever_id,
              response[i].first_party_type,
              response[i].first_party_id,
              response[i].second_party_type,
              response[i].second_party_id
          ]);
          if (!(response[i].hasOwnProperty('extra_info'))) continue;
            if (i === 0) entries[i].push('Alliance ID', 'Character ID', 'Corporation ID', 'Contract ID', 'Destroyed Ship Type ID', 'Job ID', 'Location ID', 'NPC ID', 'NPC Name', 'Planet ID', 'System ID', 'Transaction ID');
            entries[i].push(
                '',
                response[i].extra_info.alliance_id,
                response[i].extra_info.character_id,
                response[i].extra_info.corporation_id,
                response[i].extra_info.contract_id,
                response[i].extra_info.destroyed_ship_type_id,
                response[i].extra_info.job_id,
                response[i].extra_info.location_id,
                response[i].extra_info.npc_id,
                response[i].extra_info.npc_name,
                response[i].extra_info.planet_id,
                response[i].extra_info.system_id,
                response[i].extra_info.transaction_id
            );
      }
      return entries;
  }

   /**
   * Retrieve character wallet transactions.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Retrieve character wallet transactions.
   * @customfunction
   */
  function characterWalletTransactions(opt_headers) {
      var transactions = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) transactions.push(['Transaction ID', 'Client ID', 'Date', 'Type ID', 'Quantity', 'Unit Price', 'Location ID', 'Is Buy?', 'Is Personal?', 'Journal Ref ID']);

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          transactions.push([
              response[i].transaction_id,
              response[i].client_id,
              response[i].date,
              response[i].type_id,
              response[i].quantity,
              response[i].unit_price,
              response[i].location_id,
              response[i].is_buy,
              response[i].is_personal,
              response[i].journal_ref_id
          ]);
      }
      return transactions;
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

   /**
   * Return a list of industry facilities.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns a list of industry facilities.
   * @customfunction
   */
  function industryFacilities(opt_headers) {
      var facilities = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { facilities.push(['Facility ID', 'Owner ID', 'Region ID', 'Solar System ID', 'Tax', 'Type ID']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          facilities.push([
              response[i].facility_id ,
              response[i].owner_id ,
              response[i].region_id,
              response[i].solar_system_id,
              response[i].tax,
              response[i].type_id
          ]);
      }
      return facilities;
  }

   /**
   * Return cost indices for solar systems.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Return cost indices for solar systems.
   * @customfunction
   */
  function industrySystems(opt_headers) {
      var cost_indices = new Array();

      if (opt_headers === undefined) { opt_headers = true; };
      if (opt_headers) { cost_indices.push(['Solar System ID']); };

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          cost_indices.push([ response[i].solar_system_id ]);

            cost_indices.push([
                '',
                response[i].cost_indices[0].activity,
                response[i].cost_indices[1].activity,
                response[i].cost_indices[2].activity,
                response[i].cost_indices[3].activity,
                response[i].cost_indices[4].activity
              ]);

            cost_indices.push([
                '',
                response[i].cost_indices[0].cost_index,
                response[i].cost_indices[1].cost_index,
                response[i].cost_indices[2].cost_index,
                response[i].cost_indices[3].cost_index,
                response[i].cost_indices[4].cost_index
              ]);

      }
      return cost_indices;
  }

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  Contracts
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /**
   * Returns contracts available to a character.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress."
   * @customfunction
   */
  function characterContracts(opt_headers) {
      var contracts = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) contracts.push(['Contract ID','Availability','Issuer ID','Status','Title','Type','Volume','Price','Buyout','Reward','Collateral','Start Location ID','End Location ID','Acceptor ID','Assignee ID','Date Issued','Date Accepted','Date Completed','Date Expired','Days To Complete','For Corporation','Issuer Corporation ID']);

      var response = JSON.parse(getData_(arguments.callee.name));

      for (var i = 0; i < response.length; i++) {
          contracts.push([
              response[i].contract_id,
              response[i].availability,
              response[i].issuer_id,
              response[i].status,
              response[i].title,
              response[i].type,
              response[i].volume,
              response[i].price,
              response[i].buyout,
              response[i].reward,
              response[i].collateral,
              response[i].start_location_id,
              response[i].end_location_id,
              response[i].acceptor_id,
              response[i].assignee_id,
              response[i].date_issued,
              response[i].date_accepted,
              response[i].date_completed,
              response[i].date_expired,
              response[i].days_to_complete,
              response[i].for_corporation,
              response[i].issuer_corporation_id
          ]);
      }
      return contracts;

  }

  /**
   * Returns bids on a particular auction contract.
   * @param {integer} contract_id Contract ID to get bids for.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns bids on a particular auction contract.
   * @customfunction
   */
  function characterContractBids(contract_id, opt_headers) {
      var bids = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) bids.push(['Bid ID', 'Date Bid', 'Bidder ID', 'Amount']);

      var response = JSON.parse(getData_(arguments.callee.name,contract_id));

      for (var i = 0; i < response.length; i++) {
          bids.push([
              response[i].bid_id,
              response[i].date_bid,
              response[i].bidder_id,
              response[i].amount
          ]);
      }
      return bids;

  }


  /**
   * Returns items and details of a particular contract.
   * @param {integer} contract_id Contract ID to get items for.
   * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
   * @return Returns items and details of a particular contract.
   * @customfunction
   */
  function characterContractItems(contract_id, opt_headers) {
      var items = new Array();

      if (opt_headers === undefined) opt_headers = true;
      if (opt_headers) items.push(['Record ID', 'Type ID', 'Quantity', 'Is Included?', 'Is Singleton?', 'Raw Quantity']);

      var response = JSON.parse(getData_(arguments.callee.name,contract_id));

      for (var i = 0; i < response.length; i++) {
          items.push([
              response[i].record_id,
              response[i].type_id,
              response[i].quantity,
              response[i].is_included,
              response[i].is_singleton,
              response[i].raw_quantity
          ]);
      }
      return items;

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
          .setScope('esi-contracts.read_character_contracts.v1 esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')

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

      for( var i = 0; i < endpoints[key].parameters.length; i++){
        endpoint_list.push([
          '',
          endpoints[key].parameters[i].name,
          endpoints[key].parameters[i].description
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