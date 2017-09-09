// Google ESI (GESI)
// Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
//
// /u/blacksmoke16 @ Reddit
// @Blacksmoke16#1684 @ Discord
app_version = '2.2.0';

// Setup variables used throughout script
CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
BASE_URL = 'https://esi.tech.ccp.is/v'

CHARACTERS = ['Blacksmoke16'];

AUTHING_CHARACTER = CHARACTERS[0];

URL_PARAMS = ['{event_id}', '{alliance_id}', '{schematic_id}', '{corporation_id}', '{division}', '{war_id}', '{planet_id}', '{type_id}', '{contract_id}', '{structure_id}', '{region_id}'];

ENDPOINTS = {
    // Alliances

    "allianceIds": {
        "version": 1,
        "url": "/alliances/",
        "headers": ['alliance_ids']
    },
    "allianceNames": {
        "version": 1,
        "url": "/alliances/names/",
        "headers": ['alliance_id', 'alliance_name']
    },
    "allianceId": {
        "version": 2,
        "url": "/alliances/{alliance_id}/",
        "headers": ['alliance_name', 'ticker', 'executor_corp', 'date_founded']
    },
    "allianceCorporations": {
        "version": 1,
        "url": "/alliances/{alliance_id}/corporations/",
        "headers": ['corporation_ids']
    },
    "allianceIcons": {
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

    "calenderEvents": {
        "version": 1,
        "url": "/characters/{character_id}/calendar/",
        "headers": ['event_id', 'title', 'event_date', 'event_response', 'importance']
    },
    "calenderEvent": {
        "version": 3,
        "url": "/characters/{character_id}/calendar/{event_id}/",
        "headers": ['event_id', 'date', 'title', 'text', 'duration', 'owner_id', 'owner_name', 'owner_type', 'response', 'importance']
    },

    // Characters

    "characterBlueprints": {
        "version": 2,
        "url": "/characters/{character_id}/blueprints/",
        "headers": ['item_id', 'type_id', 'location_id', 'location_flag', 'material_efficiency', 'time_efficiency', 'runs', 'quantity']
    },

    // Contracts

    "characterContracts": {
        "version": 1,
        "url": "/characters/{character_id}/contracts/",
        "headers": ['contract_id', 'issuer_id', 'assignee_id', 'acceptor_id', 'availability', 'type', 'title', 'status', 'issuer_corporation_id', 'for_corporation', 'date_issued', 'date_accepted', 'date_completed', 'date_expired', 'price', 'buyout', 'reward', 'collateral', 'volume', 'days_to_complete', 'start_location_id', 'end_location_id']
    },
    "characterContractsBids": {
        "version": 1,
        "url": "/characters/{character_id}/contracts/{contract_id}/bids/",
        "headers": ['bid_id', 'date_bid', 'bidder_id', 'amount']
    },
    "characterContractItems": {
        "version": 1,
        "url": "/characters/{character_id}/contracts/{contract_id}/items/",
        "headers": ['record_id', 'type_id', 'quantity', 'raw_quantity', 'is_included', 'is_singleton']
    },


    // Industry

    "characterIndustryJobs": {
        "version": 1,
        "url": "/characters/{character_id}/industry/jobs/",
        "headers": ['job_id', 'activity_id', 'blueprint_id', 'blueprint_location_id', 'blueprint_type_id', 'completed_character_id', 'completed_date', 'cost', 'duration', 'end_date', 'facility_id', 'installer_id', 'licensed_runs', 'output_location_id', 'pause_date', 'probability', 'product_type_id', 'runs', 'start_date', 'station_id', 'status', 'successful_runs']
    },
    "industryFacilities": {
        "version": 1,
        "url": "/industry/facilities/",
        "headers": ['facility_id', 'type_id', 'solar_system_id', 'region_id', 'tax', 'owner_id']
    },
    "industrySystems": {
        "version": 1,
        "url": "/industry/systems/",
        "headers": ['solar_system_id', 'manufacturing', 'researching_material_efficiency', 'researching_time_efficiency', 'copying', 'invention']
    },

    // Loyalty

    "characterLoyalty": {
        "version": 1,
        "url": "/characters/{character_id}/loyalty/points/",
        "headers": ['corporation_id', 'loyalty_points']
    },
    "corporationLoyalty": {
        "version": 1,
        "url": "/loyalty/stores/{corporation_id}/offers/",
        "headers": ['offer_id', 'type_id', 'lp_cost', 'isk_cost', 'quantity']
    },

    // Market

    "characterOrders": {
        "version": 1,
        "url": "/characters/{character_id}/orders/",
        "headers": ['order_id', 'type_id', 'state', 'location_id', 'issued', 'is_buy_order', 'is_corp', 'account_id', 'price', 'escrow', 'range', 'volume_remain', 'volume_total', 'min_volume', 'duration']
    },
    "marketPrices": {
        "version": 1,
        "url": "/markets/prices/",
        "headers": ['type_id', 'average_price', 'adjusted_price']
    },
    "structureOrders": {
        "version": 1,
        "url": "/markets/structures/{structure_id}/",
        "headers": ['order_id', 'type_id', 'location_id', 'issued', 'is_buy_order', 'price', 'range', 'volume_remain', 'volume_total', 'min_volume', 'duration']
    },
    "itemHistory": {
        "version": 1,
        "url": "/markets/{region_id}/history/",
        "headers": ['date', 'average', 'hightest', 'lowest', 'order_count', 'volume']
    },
    "regionOrders": {
        "version": 1,
        "url": "/markets/{region_id}/orders/",
        "headers": ['order_id', 'type_id', 'location_id', 'issued', 'is_buy_order', 'price', 'range', 'volume_remain', 'volume_total', 'min_volume', 'duration']
    },

    // Planets

    "characterPlanets": {
        "version": 1,
        "url": "/characters/{character_id}/planets/",
        "headers": ['planet_id', 'planet_type', 'solar_system_id', 'owner_id', 'upgrade_level', 'last_update', 'num_pins']
    },
    "characterPlanetDetails": {
        "version": 3,
        "url": "/characters/{character_id}/planets/{planet_id}/"
    },
    "planetSchematic": {
        "version": 1,
        "url": "/universe/schematics/{schematic_id}/",
        "headers": ['schematic_name', 'cycle_time']
    },

    // Skills

    "characterAttributes": {
        "version": 1,
        "url": "/characters/{character_id}/attributes/",
        "headers": ['charisma', 'intelligence', 'perception', 'memory', 'willpower']
    },
    "skillQueue": {
        "version": 2,
        "url": "/characters/{character_id}/skillqueue/",
        "headers": ['skill_id', 'queue_position', 'finished_level', 'start_date', 'finish_date']
    },
    "characterSkills": {
        "version": 4,
        "url": "/characters/{character_id}/skills/",
        "headers": ['skill_id', 'active_skill_level', 'trained_skill_level', 'skillpoints_in_skill']
    },

    // Sovereignty
    
    "sovereigntyCampaigns": {
        "version": 1,
        "url": "/sovereignty/campaigns/",
        "headers": ['campaign_id', 'structure_id', 'solar_system_id', 'constellation_id', 'event_type', 'defender_id', 'defender_score', 'attackers_score', 'start_time']
    },
    "sovereigntyMap": {
        "version": 1,
        "url": "/sovereignty/map/",
        "headers": ['system_id', 'corporation_id', 'alliance_id', 'faction_id']
    },
    "sovereigntyStructures": {
        "version": 1,
        "url": "/sovereignty/structures/",
        "headers": ['solar_system_id', 'structure_id', 'structure_type_id', 'alliance_id', 'vulnerability_occupancy_level', 'vulnerable_start_time', 'vulnerable_end_time']
    },
    
    // Universe     
    
    "typeId": {
        "version": 3,
        "url": "/universe/types/{type_id}/",
        "headers": ['type_id', 'name', 'group_id', 'description', 'capacity', 'volume', 'packaged_volume', 'portion_size', 'radius', 'mass', 'market_group_id', 'icon_id', 'graphic_id', 'published']
    },

    // Wallet

    "characterWallet": {
        "version": 1,
        "url": "/characters/{character_id}/wallet/",
        "headers": ['balance']
    },
    "characterWalletJournal": {
        "version": 1,
        "url": "/characters/{character_id}/wallet/journal",
        "headers": ['ref_id', 'date', 'amount', 'balance', 'first_party_id', 'first_party_type', 'reason', 'ref_type', 'second_party_id ', 'second_party_type', 'tax', 'tax_reciever_id', 'extra_info-alliance_id', 'extra_info-character_id', 'extra_info-contract_id', 'extra_info-destroyed_ship_type_id', 'extra_info-job_id', 'extra_info-location_id', 'extra_info-npc_id', 'extra_info-npc_name', 'extra_info-planet_id', 'extra_info-system_id', 'extra_info-transaction_id']
    },
    "characterWalletTransactions": {
        "version": 1,
        "url": "/characters/{character_id}/wallet/transactions/",
        "headers": ['transaction_id', 'date', 'quantity', 'type_id', 'unit_price', 'location_id', 'journal_ref_id', 'client_id', 'is_buy', 'is_personal']
    },
    "corporationWallets": {
        "version": 1,
        "url": "/corporations/{corporation_id}/wallets/",
        "headers": ['division', 'balance']
    },
    "corporationWalletJournal": {
        "version": 1,
        "url": "/corporations/{corporation_id}/wallets/{division}/journal/",
        "headers": ['ref_id', 'date', 'amount', 'balance', 'first_party_id', 'first_party_type', 'reason', 'ref_type', 'second_party_id ', 'second_party_type', 'tax', 'tax_reciever_id', 'extra_info-alliance_id', 'extra_info-character_id', 'extra_info-contract_id', 'extra_info-destroyed_ship_type_id', 'extra_info-job_id', 'extra_info-location_id', 'extra_info-npc_id', 'extra_info-npc_name', 'extra_info-planet_id', 'extra_info-system_id', 'extra_info-transaction_id']
    },

    // Wars

    "wars": {
        "version": 1,
        "url": "/wars",
        "headers": ['war_ids']
    },
    "war": {
        "version": 1,
        "url": "/wars/{war_id}/",
        "headers": ['id', 'mutual', 'open_for_allies', 'declared', 'started', 'finished', 'aggressor-corporation_id', 'aggressor-alliance_id', 'aggressor-isk_destroyed', 'aggressor-ships_killed', 'defender-corporation_id', 'defender-alliance_id', 'defender-isk_destroyed', 'defender-ships_killed', 'ally-alliance_id', 'ally-corporation_id']
    },
    "warKillmails": {
        "version": 1,
        "url": "/wars/{war_id}/killmails",
        "headers": ['killmail_id', 'killmail_hash']
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
    if (!alliance_ids) throw 'A range of alliance ids is required';
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {alliance_ids: alliance_ids});
}

/**
 * Public information about an alliance
 * @param {number} alliance_id ID of the alliance to get information on
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Public data about an alliance
 * @customfunction
 */
function allianceId(alliance_id, opt_headers) {
    if (!alliance_id) throw 'alliance_id is required';
    return getObjectResponse_(arguments.callee.name, '', opt_headers, {alliance_id: alliance_id});
}

/**
 * List all current member corporations of an alliance
 * @param {number} alliance_id ID of the alliance to get corporations for
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return List of corporation IDs
 * @customfunction
 */
function allianceCorporations(alliance_id, opt_headers) {
    if (!alliance_id) throw 'alliance_id is required';
    return getArrayResponse_(arguments.callee.name, '', opt_headers, {alliance_id: alliance_id});
}

/**
 * Get the icon urls for a alliance
 * @param {number} alliance_id ID of the alliance to get icons for
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Urls for icons for the given alliance id and server
 * @customfunction
 */
function allianceIcons(alliance_id, opt_headers) {
    if (!alliance_id) throw 'alliance_id is required';
    return getObjectResponse_(arguments.callee.name, '', opt_headers, {alliance_id: alliance_id});
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
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true, true);
}

/**
 * List your character's personal bookmark folders
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return List of bookmark folders
 * @customfunction
 */
function characterBookmarkFolders(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
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
function calenderEvents(name, opt_headers) {
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
function calenderEvent(event_id, name, opt_headers) {
    if (!event_id) throw 'An event id is required';
    return getObjectResponse_(arguments.callee.name, name, opt_headers, {event_id: event_id}, true);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Character
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Return a list of blueprints the character has
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {number} page page number of response to fetch.  Defauts to page 1
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of blueprints
 * @customfunction
 */
function characterBlueprints(name, page, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true, false, page);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Contracts
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Returns contracts available to a character, only if the character is issuer, acceptor or assignee.
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of contracts
 * @customfunction
 */
function characterContracts(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Return cost indices for solar systems
 * @param {number} contract_id of the contract to get bids for
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of bids
 * @customfunction
 */
function characterContractBids(contract_id, name, opt_headers) {
    if (!contract_id) throw 'contract_id is required';
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {contract_id: contract_id}, true);
}

/**
 * Lists Items and details of a particular contract
 * @param {number} contract_id of the contract to get items for
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of items
 * @customfunction
 */
function characterContractItems(contract_id, name, opt_headers) {
    if (!contract_id) throw 'contract_id is required';
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {contract_id: contract_id}, true);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Industry
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * List industry jobs placed by a character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Industry jobs placed by a character
 * @customfunction
 */
function characterIndustryJobs(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Return a list of industry facilities
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of facilities
 * @customfunction
 */
function industryFacilities(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {});
}

/**
 * Return cost indices for solar systems
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of cost indicies
 * @customfunction
 */
function industrySystems(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {}, false, true);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Loyalty
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Return a list of loyalty points for all corporations the character has worked for
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of loyalty points
 * @customfunction
 */
function characterLoyalty(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Return a list of offers from a specific corporation's loyalty store
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of offers
 * @customfunction
 */
function corporationLoyalty(corporation_id, opt_headers) {
    if (!corporation_id) throw 'corporation_id is required';
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {corporation_id: corporation_id}, false);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Market
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * List market orders placed by a character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Market orders placed by a character
 * @customfunction
 */
function characterOrders(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Return a list of prices
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of prices
 * @customfunction
 */
function marketPrices(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {});
}

/**
 * Return a list of prices
 * @param {number} structure_id id of structure to get orders from
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {number} page page number of response to fetch.  Defauts to page 1
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of orders
 * @customfunction
 */
function structureOrders(structure_id, name, page, opt_headers) {
    if (!structure_id) throw 'structure_id is required';
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {structure_id: structure_id}, true, false, page);
}

/**
 * Return a list of historical market statistics for the specified type in a region
 * @param {number} region_id id of region to get orders from
 * @param {number} type_id Optional id to limit type_id of orders
 * @param {number} page page number of response to fetch.  Defauts to page 1
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of historical market statistics
 * @customfunction
 */
function itemHistory(region_id, type_id, opt_headers) {
    if (!region_id) throw 'region_id is required';
    if (!type_id) throw 'type_id is required';
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {region_id: region_id, type_id: type_id});
}

/**
 * Return a list of orders in a region
 * @param {number} region_id id of region to get orders from
 * @param {number} type_id Optional id to limit type_id of orders
 * @param {number} page page number of response to fetch.  Defauts to page 1
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of prices
 * @customfunction
 */
function regionOrders(region_id, type_id, page, opt_headers) {
    if (!region_id) throw 'region_id is required';
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {region_id: region_id, type_id: type_id}, false, false, page);
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
 * Returns full details on the layout of a single planetary colony, including links, pins and routes.
 * @param {number} planet_id of the planet to get details on
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Colony layout
 * @customfunction
 */
function characterPlanetDetails(planet_id, name, opt_headers) {
    if (!planet_id) throw 'planet_id is required';
    return characterPlanetDetails_({planet_id: planet_id}, name, opt_headers, true);
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
    if (!schematic_id) throw 'schematic_id is required';
    return getObjectResponse_(arguments.callee.name, name, opt_headers, {schematic_id: schematic_id})
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Skills
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Return attributes of a character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Attributes of a character
 * @customfunction
 */
function characterAttributes(name, opt_headers) {
    return getObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * List the configured skill queue for the given character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return The current skill queue, sorted ascending by finishing time
 * @customfunction
 */
function skillQueue(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * List all trained skills for the given character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Known skills for the character
 * @customfunction
 */
function characterSkills(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Sovereignty
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Shows sovereignty data for campaigns.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of sovereignty campaigns
 * @customfunction
 */
function sovereigntyCampaigns(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers);
 }
 
/**
 * Shows sovereignty information for solar systems
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of sovereignty information for solar systems in New Eden
 * @customfunction
 */
function sovereigntyMap(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers);
 }
 
/**
 * Shows sovereignty data for structures.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of sovereignty structures
 * @customfunction
 */
function sovereigntyStructures(opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers);
 }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Universe
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Get information on a type
 * @param {string} type_id type_id of item to get information on
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Information about a type
 * @customfunction
 */
function typeId(type_id, opt_headers) {
    if (!type_id) throw 'type_id is required';
    return getObjectResponse_(arguments.callee.name, '', opt_headers, {type_id: type_id});
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Wallet
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Returns a character's wallet balance
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return balance
 * @customfunction
 */
function characterWallet(name, opt_headers) {
    return getSingleResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Retrieve character wallet journal
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Journal entries
 * @customfunction
 */
function characterWalletJournal(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Get wallet transactions of a character
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Wallet transactions
 * @customfunction
 */
function characterWalletTransactions(name, opt_headers) {
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {}, true);
}

/**
 * Get a corporation's wallets
 * @param {number} corporation_id ID of the corporation to get wallets for
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return List of corporation wallets
 * @customfunction
 */
function corporationWallets(corporation_id, name, opt_headers) {
    if (!corporation_id) throw 'corporation_id is required';
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {corporation_id: corporation_id}, true);
}

/**
 * Retrieve corporation wallet journal
 * @param {number} corporation_id ID of the corporation to get wallet journal for
 * @param {number} division ID of the division to get wallet journal from
 * @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Journal entries
 * @customfunction
 */
function corporationWalletJournal(corporation_id, division, name, opt_headers) {
    if (!corporation_id) throw 'corporation_id is required';
    if (!division) throw 'division is required';
    corporation_id = 98019139;
    division = 1;
    return getArrayObjectResponse_(arguments.callee.name, name, opt_headers, {
        corporation_id: corporation_id,
        division: division
    }, true, true);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Wars
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Return a list of wars
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of war IDs, in decending order by war_id.
 * @customfunction
 */
function wars(opt_headers) {
    return getArrayResponse_(arguments.callee.name, '', opt_headers);
}


/**
 * Return details about a war
 * @param {number} war_id ID of the war to get information on
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Details about a war
 * @customfunction
 */
function war(war_id, opt_headers) { // 291410 RVB War ID
    if (!war_id) throw 'war_id is required';
    return getObjectResponse_(arguments.callee.name, '', opt_headers, {war_id: war_id}, false, true);
}

/**
 * Return a list of kills related to a war
 * @param {number} war_id ID of the war to get killmails for
 * @param {number} page page number of response to fetch.  Defauts to page 1
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return A list of killmail IDs and hashes
 * @customfunction
 */
function warKillmails(war_id, page, opt_headers) {
    if (!war_id) throw 'war_id is required';
    return getArrayObjectResponse_(arguments.callee.name, '', opt_headers, {war_id: war_id}, false, false, page);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Private  Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getData_(endpoint_name, name, page, params) {
    var userProperties = PropertiesService.getUserProperties();
    var eveService = createOAuthForUser(name);
    var url = ENDPOINTS[endpoint_name].url

    if (url.indexOf('{character_id}') !== -1) {
        url = url.replace('{character_id}', parseInt(userProperties.getProperty(name)));
    }

    for (var p = 0; p < URL_PARAMS.length; p++) {
        if (url.indexOf(URL_PARAMS[p]) !== -1) {
            url = url.replace(URL_PARAMS[p], params[URL_PARAMS[p].replace('{', '').replace('}', '')]);
        }
    }
    
    url = url + '?page=' + page;
    
    Logger.log(url);

    var response = UrlFetchApp.fetch(BASE_URL + ENDPOINTS[endpoint_name].version + url, {
        headers: {
            Authorization: 'Bearer ' + eveService.getAccessToken()
        }
    });

    if (!response) throw 'Error getting ESI data';

    return JSON.parse(response);
}

function getUnauthedData_(endpoint_name, name, page, params) {
    var url = BASE_URL + ENDPOINTS[endpoint_name].version + ENDPOINTS[endpoint_name].url + '?page=' + page + '&';

    if (endpoint_name === 'allianceNames') url = url + '?alliance_ids=' + params.join();
    if ((endpoint_name === 'regionOrders' || endpoint_name === 'itemHistory') && typeof(params.type_id) ==='number') url = url + 'type_id=' + params.type_id

    for (var p = 0; p < URL_PARAMS.length; p++) {
        if (url.indexOf(URL_PARAMS[p]) !== -1) {
            url = url.replace(URL_PARAMS[p], params[URL_PARAMS[p].replace('{', '').replace('}', '')]);
        }
    }
    
    var response = UrlFetchApp.fetch(url);

    if (!response) throw 'Error getting public ESI data';

    return JSON.parse(response);
}

function getArrayObjectResponse_(endpoint_name, name, opt_headers, params, authed, isNested, page) {
    if (!name) name = AUTHING_CHARACTER;
    if (!page) page = 1;
    if (authed) {
        var data = getData_(endpoint_name, name, page, params);
    } else {
        var data = getUnauthedData_(endpoint_name, name, page, params);
    }
    if (endpoint_name === 'industrySystems') data = deArrayIndex_(data);
    var result = [];
    if (opt_headers === undefined) opt_headers = true;
    if (opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));

    for (var i = 0; i < data.length; i++) {
        var temp = [];
        if (isNested) data[i] = flatten_(data[i]);
        for (var k = 0; k < ENDPOINTS[endpoint_name].headers.length; k++) {
            data_value = data[i][ENDPOINTS[endpoint_name].headers[k]];
            temp.push(data_value);
        }
        result.push(temp);
    }

    return result;
};

function getObjectResponse_(endpoint_name, name, opt_headers, params, authed, isNested) {
    if (!name) name = AUTHING_CHARACTER;
    if (authed) {
        var data = getData_(endpoint_name, name, params);
    } else {
        var data = getUnauthedData_(endpoint_name, name, params);
    }
    var result = [];
    if (opt_headers === undefined) opt_headers = true;
    if (opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
    if (isNested) data = flatten_(data);

    var temp = [];
    for (var k = 0; k < ENDPOINTS[endpoint_name].headers.length; k++) {
        temp.push(data[ENDPOINTS[endpoint_name].headers[k]]);
    }
    result.push(temp);

    return result;
};


// Private function for basic array of value responses
function getArrayResponse_(endpoint_name, name, opt_headers, params, authed) {
    if (!name) name = AUTHING_CHARACTER;
    if (authed) {
        var data = getData_(endpoint_name, name, params);
    } else {
        var data = getUnauthedData_(endpoint_name, name, params);
    }

    var result = [];
    if (opt_headers === undefined) opt_headers = true;
    if (opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));

    for (var i = 0; i < data.length; i++) {
        result.push(data[i]);
    }
    ;

    return result;
};

// Private function for basic array of value responses
function getSingleResponse_(endpoint_name, name, opt_headers, params, authed) {
    if (!name) name = AUTHING_CHARACTER;
    if (authed) {
        var data = getData_(endpoint_name, name, params);
    } else {
        var data = getUnauthedData_(endpoint_name, name, params);
    }

    var result = [];
    if (opt_headers === undefined) opt_headers = true;
    if (opt_headers) result.push(convertSnakeCase_(ENDPOINTS[endpoint_name].headers));
    result.push(data);

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

function getToken() {
    return createOAuthForUser(AUTHING_CHARACTER).getAccessToken();
}

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

function createOAuthForUser(user) {
    return OAuth2.createService(user)
        .setAuthorizationBaseUrl('https://login.eveonline.com/oauth/authorize/')
        .setTokenUrl('https://login.eveonline.com/oauth/token')
        .setClientId(CLIENT_ID)
        .setClientSecret(CLIENT_SECRET)
        .setCallbackFunction('authCallback')
        .setPropertyStore(PropertiesService.getUserProperties())
        .setScope('esi-universe.read_structures.v1 esi-wallet.read_corporation_wallets.v1 esi-calendar.read_calendar_events.v1 esi-bookmarks.read_character_bookmarks.v1 esi-contracts.read_character_contracts.v1 esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')
        .setParam('access_type', 'offline')
        .setTokenHeaders({
            'Authorization': 'Basic ' + Utilities.base64Encode(CLIENT_ID + ':' + CLIENT_SECRET)
        })
}

function clearService() {
    for (var i = 0; i < CHARACTERS.length; i++) {
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
        str = headers[h].replace(/\_/g, ' ');
        formatted_headers.push(str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }));
    }
    return formatted_headers;
}

function deArrayIndex_(data) {
    for (var o = 0; o < data.length; o++) {
        for (var a in data[o].cost_indices) {
            data[o][data[o].cost_indices[a].activity] = data[o].cost_indices[a].cost_index;
        }
        delete data[o].cost_indices;
    }
    return data;
}

function characterPlanetDetails_(params, name, opt_headers) {
    var planets = new Array();
    if (!name) name = AUTHING_CHARACTER;

    var response = getData_('characterPlanetDetails', name, params);

    // Inserting header for Links
    planets.push(['Links']);

    // Insert data values for links
    planets.push(['', 'Source Pin ID', 'Dest Pin ID', 'Link Level']);

    for (var i = 0; i < response.links.length; i++) {
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
    planets.push(['', 'Pin ID', 'Type ID', 'Schematic ID', 'Type Id', 'Install Time', 'Last Cycle Start', 'Latitude', 'Longitude']);

    for (var i = 0; i < response.pins.length; i++) {
        planets.push([
            '',
            response.pins[i].pin_id,
            response.pins[i].type_id,
            response.pins[i].schematic_id,
            response.pins[i].type_id,
            response.pins[i].install_time,
            response.pins[i].last_cycle_start,
            response.pins[i].latitude,
            response.pins[i].longitude
        ]);
    }

    // Inserting header for Extractors
    planets.push(['Extractors']);

    // Insert data values for Extractors
    planets.push(['', 'Pin ID', 'Product Type ID', 'Cycle Time', 'Head Radius', 'Quantity Per Cycle']);

    for (var i = 0; i < response.pins.length; i++) {
        if (!("extractor_details" in response.pins[i])) {
            continue;
        }
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

    for (var i = 0; i < response.routes.length; i++) {
        planets.push(['',
            response.routes[i].route_id,
            response.routes[i].source_pin_id,
            response.routes[i].destination_pin_id,
            response.routes[i].content_type_id,
            response.routes[i].quantity
        ]);
    }


    return planets
    ;
}
