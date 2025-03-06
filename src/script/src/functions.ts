/**
 * List all active player alliances
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('alliances', { show_column_headings, version });
}

/**
 * Public information about an alliance
 *
 * @param {number} alliance_id - An EVE alliance ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances_alliance(alliance_id: number, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!alliance_id) throw new Error(`alliance_id is required.`);
  return invoke('alliances_alliance', { alliance_id, show_column_headings, version });
}

/**
 * Return contacts of an alliance
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances_alliance_contacts(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('alliances_alliance_contacts', { name, show_column_headings, version });
}

/**
 * Return custom labels for an alliance's contacts
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances_alliance_contacts_labels(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('alliances_alliance_contacts_labels', { name, show_column_headings, version });
}

/**
 * List all current member corporations of an alliance
 *
 * @param {number} alliance_id - An EVE alliance ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances_alliance_corporations(alliance_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!alliance_id) throw new Error(`alliance_id is required.`);
  return invoke('alliances_alliance_corporations', { alliance_id, show_column_headings, version });
}

/**
 * Get the icon urls for a alliance
 *
 * @param {number} alliance_id - An EVE alliance ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function alliances_alliance_icons(alliance_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!alliance_id) throw new Error(`alliance_id is required.`);
  return invoke('alliances_alliance_icons', { alliance_id, show_column_headings, version });
}

/**
 * Bulk lookup of character IDs to corporation, alliance and faction
 *
 * @param {number|number[]} characters - The character IDs to fetch affiliations for. All characters must exist, or none will be returned
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_affiliation(characters: number|number[], show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!characters) throw new Error(`characters is required.`);
  return invoke('characters_affiliation', { characters, show_column_headings, version });
}

/**
 * Public information about a character
 *
 * @param {number} character_id - An EVE character ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character(character_id: number, show_column_headings: boolean = true, version: string = "v5"): SheetsArray {
  if (!character_id) throw new Error(`character_id is required.`);
  return invoke('characters_character', { character_id, show_column_headings, version });
}

/**
 * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_agents_research(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_agents_research', { name, show_column_headings, version });
}

/**
 * Return a list of the characters assets
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_assets(name?: string, show_column_headings: boolean = true, version: string = "v5"): SheetsArray {
  return invoke('characters_character_assets', { name, show_column_headings, version });
}

/**
 * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 *
 * @param {number|number[]} item_ids - A list of item ids
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_assets_locations(item_ids: number|number[], name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!item_ids) throw new Error(`item_ids is required.`);
  return invoke('characters_character_assets_locations', { item_ids, name, show_column_headings, version });
}

/**
 * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
 *
 * @param {number|number[]} item_ids - A list of item ids
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_assets_names(item_ids: number|number[], name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!item_ids) throw new Error(`item_ids is required.`);
  return invoke('characters_character_assets_names', { item_ids, name, show_column_headings, version });
}

/**
 * Return attributes of a character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_attributes(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_attributes', { name, show_column_headings, version });
}

/**
 * Return a list of blueprints the character owns
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_blueprints(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('characters_character_blueprints', { name, show_column_headings, version });
}

/**
 * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
 *
 * @param {number} from_event - The event ID to retrieve events from
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_calendar(from_event?: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_calendar', { from_event, name, show_column_headings, version });
}

/**
 * Get all the information for a specific event
 *
 * @param {number} event_id - The id of the event requested
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_calendar_event(event_id: number, name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!event_id) throw new Error(`event_id is required.`);
  return invoke('characters_character_calendar_event', { event_id, name, show_column_headings, version });
}

/**
 * Get all invited attendees for a given event
 *
 * @param {number} event_id - The id of the event requested
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_calendar_event_attendees(event_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!event_id) throw new Error(`event_id is required.`);
  return invoke('characters_character_calendar_event_attendees', { event_id, name, show_column_headings, version });
}

/**
 * A list of the character's clones
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_clones(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('characters_character_clones', { name, show_column_headings, version });
}

/**
 * Return contacts of a character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_contacts(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_contacts', { name, show_column_headings, version });
}

/**
 * Return custom labels for a character's contacts
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_contacts_labels(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_contacts_labels', { name, show_column_headings, version });
}

/**
 * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_contracts(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_contracts', { name, show_column_headings, version });
}

/**
 * Lists bids on a particular auction contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_contracts_contract_bids(contract_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('characters_character_contracts_contract_bids', { contract_id, name, show_column_headings, version });
}

/**
 * Lists items of a particular contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_contracts_contract_items(contract_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('characters_character_contracts_contract_items', { contract_id, name, show_column_headings, version });
}

/**
 * Get a list of all the corporations a character has been a member of
 *
 * @param {number} character_id - An EVE character ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_corporationhistory(character_id: number, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!character_id) throw new Error(`character_id is required.`);
  return invoke('characters_character_corporationhistory', { character_id, show_column_headings, version });
}

/**
 * Return a character's jump activation and fatigue information
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_fatigue(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_fatigue', { name, show_column_headings, version });
}

/**
 * Return fittings of a character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_fittings(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_fittings', { name, show_column_headings, version });
}

/**
 * Return the fleet ID the character is in, if any.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_fleet(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_fleet', { name, show_column_headings, version });
}

/**
 * Statistical overview of a character involved in faction warfare
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_fw_stats(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_fw_stats', { name, show_column_headings, version });
}

/**
 * Return implants on the active clone of a character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_implants(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_implants', { name, show_column_headings, version });
}

/**
 * List industry jobs placed by a character
 *
 * @param {boolean} include_completed - Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_industry_jobs(include_completed?: boolean, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_industry_jobs', { include_completed, name, show_column_headings, version });
}

/**
 * Return a list of a character's kills and losses going back 90 days
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_killmails_recent(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_killmails_recent', { name, show_column_headings, version });
}

/**
 * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_location(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_location', { name, show_column_headings, version });
}

/**
 * Return a list of loyalty points for all corporations the character has worked for
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_loyalty_points(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_loyalty_points', { name, show_column_headings, version });
}

/**
 * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
 *
 * @param {number|number[]} labels - Fetch only mails that match one or more of the given labels
 * @param {number} last_mail_id - List only mail with an ID lower than the given ID, if present
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_mail(labels?: number|number[], last_mail_id?: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_mail', { labels, last_mail_id, name, show_column_headings, version });
}

/**
 * Return a list of the users mail labels, unread counts for each label and a total unread count.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_mail_labels(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('characters_character_mail_labels', { name, show_column_headings, version });
}

/**
 * Return all mailing lists that the character is subscribed to
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_mail_lists(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_mail_lists', { name, show_column_headings, version });
}

/**
 * Return the contents of an EVE mail
 *
 * @param {number} mail_id - An EVE mail ID
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_mail_mail(mail_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!mail_id) throw new Error(`mail_id is required.`);
  return invoke('characters_character_mail_mail', { mail_id, name, show_column_headings, version });
}

/**
 * Return a list of medals the character has
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_medals(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_medals', { name, show_column_headings, version });
}

/**
 * Paginated record of all mining done by a character for the past 30 days
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_mining(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_mining', { name, show_column_headings, version });
}

/**
 * Return character notifications
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_notifications(name?: string, show_column_headings: boolean = true, version: string = "v5"): SheetsArray {
  return invoke('characters_character_notifications', { name, show_column_headings, version });
}

/**
 * Return notifications about having been added to someone's contact list
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_notifications_contacts(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_notifications_contacts', { name, show_column_headings, version });
}

/**
 * Checks if the character is currently online
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_online(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_online', { name, show_column_headings, version });
}

/**
 * List open market orders placed by a character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_orders(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_orders', { name, show_column_headings, version });
}

/**
 * List cancelled and expired market orders placed by a character up to 90 days in the past.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_orders_history(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_orders_history', { name, show_column_headings, version });
}

/**
 * Returns a list of all planetary colonies owned by a character.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_planets(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_planets', { name, show_column_headings, version });
}

/**
 * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
 *
 * @param {number} planet_id - Planet id of the target planet
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_planets_planet(planet_id: number, name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!planet_id) throw new Error(`planet_id is required.`);
  return invoke('characters_character_planets_planet', { planet_id, name, show_column_headings, version });
}

/**
 * Get portrait urls for a character
 *
 * @param {number} character_id - An EVE character ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_portrait(character_id: number, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!character_id) throw new Error(`character_id is required.`);
  return invoke('characters_character_portrait', { character_id, show_column_headings, version });
}

/**
 * Returns a character's corporation roles
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_roles(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('characters_character_roles', { name, show_column_headings, version });
}

/**
 * Search for entities that match a given sub-string.
 *
 * @param {string} search - The string to search on
 * @param {string|string[]} categories - Type of entities to search for
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} strict - Whether the search should be a strict match
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_search(search: string, categories: string|string[], language?: string, strict?: boolean, name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!search) throw new Error(`search is required.`);
  if (!categories) throw new Error(`categories is required.`);
  return invoke('characters_character_search', { search, categories, language, strict, name, show_column_headings, version });
}

/**
 * Get the current ship type, name and id
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_ship(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_ship', { name, show_column_headings, version });
}

/**
 * List the configured skill queue for the given character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_skillqueue(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_skillqueue', { name, show_column_headings, version });
}

/**
 * List all trained skills for the given character
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_skills(name?: string, show_column_headings: boolean = true, version: string = "v4"): SheetsArray {
  return invoke('characters_character_skills', { name, show_column_headings, version });
}

/**
 * Return character standings from agents, NPC corporations, and factions
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_standings(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_standings', { name, show_column_headings, version });
}

/**
 * Returns a character's titles
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_titles(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('characters_character_titles', { name, show_column_headings, version });
}

/**
 * Returns a character's wallet balance
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_wallet(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_wallet', { name, show_column_headings, version });
}

/**
 * Retrieve the given character's wallet journal going 30 days back
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_wallet_journal(name?: string, show_column_headings: boolean = true, version: string = "v6"): SheetsArray {
  return invoke('characters_character_wallet_journal', { name, show_column_headings, version });
}

/**
 * Get wallet transactions of a character
 *
 * @param {number} from_id - Only show transactions happened before the one referenced by this id
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function characters_character_wallet_transactions(from_id?: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('characters_character_wallet_transactions', { from_id, name, show_column_headings, version });
}

/**
 * Lists bids on a public auction contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function contracts_public_bids_contract(contract_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('contracts_public_bids_contract', { contract_id, show_column_headings, version });
}

/**
 * Lists items of a public contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function contracts_public_items_contract(contract_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('contracts_public_items_contract', { contract_id, show_column_headings, version });
}

/**
 * Returns a paginated list of all public contracts in the given region
 *
 * @param {number} region_id - An EVE region id
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function contracts_public_region(region_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!region_id) throw new Error(`region_id is required.`);
  return invoke('contracts_public_region', { region_id, show_column_headings, version });
}

/**
 * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporation_corporation_mining_extractions(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporation_corporation_mining_extractions', { name, show_column_headings, version });
}

/**
 * Paginated list of all entities capable of observing and recording mining for a corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporation_corporation_mining_observers(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporation_corporation_mining_observers', { name, show_column_headings, version });
}

/**
 * Paginated record of all mining seen by an observer
 *
 * @param {number} observer_id - A mining observer id
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporation_corporation_mining_observers_observer(observer_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!observer_id) throw new Error(`observer_id is required.`);
  return invoke('corporation_corporation_mining_observers_observer', { observer_id, name, show_column_headings, version });
}

/**
 * Public information about a corporation
 *
 * @param {number} corporation_id - An EVE corporation ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation(corporation_id: number, show_column_headings: boolean = true, version: string = "v5"): SheetsArray {
  if (!corporation_id) throw new Error(`corporation_id is required.`);
  return invoke('corporations_corporation', { corporation_id, show_column_headings, version });
}

/**
 * Get a list of all the alliances a corporation has been a member of
 *
 * @param {number} corporation_id - An EVE corporation ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_alliancehistory(corporation_id: number, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!corporation_id) throw new Error(`corporation_id is required.`);
  return invoke('corporations_corporation_alliancehistory', { corporation_id, show_column_headings, version });
}

/**
 * Return a list of the corporation assets
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_assets(name?: string, show_column_headings: boolean = true, version: string = "v5"): SheetsArray {
  return invoke('corporations_corporation_assets', { name, show_column_headings, version });
}

/**
 * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 *
 * @param {number|number[]} item_ids - A list of item ids
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_assets_locations(item_ids: number|number[], name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!item_ids) throw new Error(`item_ids is required.`);
  return invoke('corporations_corporation_assets_locations', { item_ids, name, show_column_headings, version });
}

/**
 * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
 *
 * @param {number|number[]} item_ids - A list of item ids
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_assets_names(item_ids: number|number[], name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!item_ids) throw new Error(`item_ids is required.`);
  return invoke('corporations_corporation_assets_names', { item_ids, name, show_column_headings, version });
}

/**
 * Returns a list of blueprints the corporation owns
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_blueprints(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('corporations_corporation_blueprints', { name, show_column_headings, version });
}

/**
 * Return contacts of a corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_contacts(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_contacts', { name, show_column_headings, version });
}

/**
 * Return custom labels for a corporation's contacts
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_contacts_labels(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_contacts_labels', { name, show_column_headings, version });
}

/**
 * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_containers_logs(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('corporations_corporation_containers_logs', { name, show_column_headings, version });
}

/**
 * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_contracts(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_contracts', { name, show_column_headings, version });
}

/**
 * Lists bids on a particular auction contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_contracts_contract_bids(contract_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('corporations_corporation_contracts_contract_bids', { contract_id, name, show_column_headings, version });
}

/**
 * Lists items of a particular contract
 *
 * @param {number} contract_id - ID of a contract
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_contracts_contract_items(contract_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!contract_id) throw new Error(`contract_id is required.`);
  return invoke('corporations_corporation_contracts_contract_items', { contract_id, name, show_column_headings, version });
}

/**
 * List customs offices owned by a corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_customs_offices(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_customs_offices', { name, show_column_headings, version });
}

/**
 * Return corporation hangar and wallet division names, only show if a division is not using the default name
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_divisions(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_divisions', { name, show_column_headings, version });
}

/**
 * Return a corporation's facilities
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_facilities(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_facilities', { name, show_column_headings, version });
}

/**
 * Statistics about a corporation involved in faction warfare
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_fw_stats(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_fw_stats', { name, show_column_headings, version });
}

/**
 * Get the icon urls for a corporation
 *
 * @param {number} corporation_id - An EVE corporation ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_icons(corporation_id: number, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!corporation_id) throw new Error(`corporation_id is required.`);
  return invoke('corporations_corporation_icons', { corporation_id, show_column_headings, version });
}

/**
 * List industry jobs run by a corporation
 *
 * @param {boolean} include_completed - Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_industry_jobs(include_completed?: boolean, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_industry_jobs', { include_completed, name, show_column_headings, version });
}

/**
 * Get a list of a corporation's kills and losses going back 90 days
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_killmails_recent(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_killmails_recent', { name, show_column_headings, version });
}

/**
 * Returns a corporation's medals
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_medals(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_medals', { name, show_column_headings, version });
}

/**
 * Returns medals issued by a corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_medals_issued(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_medals_issued', { name, show_column_headings, version });
}

/**
 * Return the current member list of a corporation, the token's character need to be a member of the corporation.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_members(name?: string, show_column_headings: boolean = true, version: string = "v4"): SheetsArray {
  return invoke('corporations_corporation_members', { name, show_column_headings, version });
}

/**
 * Return a corporation's member limit, not including CEO himself
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_members_limit(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_members_limit', { name, show_column_headings, version });
}

/**
 * Returns a corporation's members' titles
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_members_titles(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_members_titles', { name, show_column_headings, version });
}

/**
 * Returns additional information about a corporation's members which helps tracking their activities
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_membertracking(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_membertracking', { name, show_column_headings, version });
}

/**
 * List open market orders placed on behalf of a corporation
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_orders(name?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  return invoke('corporations_corporation_orders', { name, show_column_headings, version });
}

/**
 * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_orders_history(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_orders_history', { name, show_column_headings, version });
}

/**
 * Return the roles of all members if the character has the personnel manager role or any grantable role.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_roles(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_roles', { name, show_column_headings, version });
}

/**
 * Return how roles have changed for a coporation's members, up to a month
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_roles_history(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_roles_history', { name, show_column_headings, version });
}

/**
 * Return the current shareholders of a corporation.
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_shareholders(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_shareholders', { name, show_column_headings, version });
}

/**
 * Return corporation standings from agents, NPC corporations, and factions
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_standings(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_standings', { name, show_column_headings, version });
}

/**
 * Returns list of corporation starbases (POSes)
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_starbases(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_starbases', { name, show_column_headings, version });
}

/**
 * Returns various settings and fuels of a starbase (POS)
 *
 * @param {number} system_id - The solar system this starbase (POS) is located in,
 * @param {number} starbase_id - An EVE starbase (POS) ID
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_starbases_starbase(system_id: number, starbase_id: number, name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!system_id) throw new Error(`system_id is required.`);
  if (!starbase_id) throw new Error(`starbase_id is required.`);
  return invoke('corporations_corporation_starbases_starbase', { system_id, starbase_id, name, show_column_headings, version });
}

/**
 * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_structures(language?: string, name?: string, show_column_headings: boolean = true, version: string = "v4"): SheetsArray {
  return invoke('corporations_corporation_structures', { language, name, show_column_headings, version });
}

/**
 * Returns a corporation's titles
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_titles(name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_corporation_titles', { name, show_column_headings, version });
}

/**
 * Get a corporation's wallets
 *
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_wallets(name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('corporations_corporation_wallets', { name, show_column_headings, version });
}

/**
 * Retrieve the given corporation's wallet journal for the given division going 30 days back
 *
 * @param {number} division - Wallet key of the division to fetch journals from
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_wallets_division_journal(division: number, name?: string, show_column_headings: boolean = true, version: string = "v4"): SheetsArray {
  if (!division) throw new Error(`division is required.`);
  return invoke('corporations_corporation_wallets_division_journal', { division, name, show_column_headings, version });
}

/**
 * Get wallet transactions of a corporation
 *
 * @param {number} division - Wallet key of the division to fetch journals from
 * @param {number} from_id - Only show journal entries happened before the transaction referenced by this id
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_corporation_wallets_division_transactions(division: number, from_id?: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!division) throw new Error(`division is required.`);
  return invoke('corporations_corporation_wallets_division_transactions', { division, from_id, name, show_column_headings, version });
}

/**
 * Get a list of npc corporations
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function corporations_npccorps(show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('corporations_npccorps', { show_column_headings, version });
}

/**
 * Get a list of dogma attribute ids
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function dogma_attributes(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('dogma_attributes', { show_column_headings, version });
}

/**
 * Get information on a dogma attribute
 *
 * @param {number} attribute_id - A dogma attribute ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function dogma_attributes_attribute(attribute_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!attribute_id) throw new Error(`attribute_id is required.`);
  return invoke('dogma_attributes_attribute', { attribute_id, show_column_headings, version });
}

/**
 * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
 *
 * @param {number} type_id - type_id integer
 * @param {number} item_id - item_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function dogma_dynamic_items_type_item(type_id: number, item_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!type_id) throw new Error(`type_id is required.`);
  if (!item_id) throw new Error(`item_id is required.`);
  return invoke('dogma_dynamic_items_type_item', { type_id, item_id, show_column_headings, version });
}

/**
 * Get a list of dogma effect ids
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function dogma_effects(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('dogma_effects', { show_column_headings, version });
}

/**
 * Get information on a dogma effect
 *
 * @param {number} effect_id - A dogma effect ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function dogma_effects_effect(effect_id: number, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!effect_id) throw new Error(`effect_id is required.`);
  return invoke('dogma_effects_effect', { effect_id, show_column_headings, version });
}

/**
 * EVE Server status
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function eve_status(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('eve_status', { show_column_headings, version });
}

/**
 * Return details about a fleet
 *
 * @param {number} fleet_id - ID for a fleet
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fleets_fleet(fleet_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!fleet_id) throw new Error(`fleet_id is required.`);
  return invoke('fleets_fleet', { fleet_id, name, show_column_headings, version });
}

/**
 * Return information about fleet members
 *
 * @param {number} fleet_id - ID for a fleet
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fleets_fleet_members(fleet_id: number, language?: string, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!fleet_id) throw new Error(`fleet_id is required.`);
  return invoke('fleets_fleet_members', { fleet_id, language, name, show_column_headings, version });
}

/**
 * Return information about wings in a fleet
 *
 * @param {number} fleet_id - ID for a fleet
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fleets_fleet_wings(fleet_id: number, language?: string, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!fleet_id) throw new Error(`fleet_id is required.`);
  return invoke('fleets_fleet_wings', { fleet_id, language, name, show_column_headings, version });
}

/**
 * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_leaderboards(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('fw_leaderboards', { show_column_headings, version });
}

/**
 * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_leaderboards_characters(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('fw_leaderboards_characters', { show_column_headings, version });
}

/**
 * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_leaderboards_corporations(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('fw_leaderboards_corporations', { show_column_headings, version });
}

/**
 * Statistical overviews of factions involved in faction warfare
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_stats(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('fw_stats', { show_column_headings, version });
}

/**
 * An overview of the current ownership of faction warfare solar systems
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_systems(show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('fw_systems', { show_column_headings, version });
}

/**
 * Data about which NPC factions are at war
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function fw_wars(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('fw_wars', { show_column_headings, version });
}

/**
 * Return a list of current incursions
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function incursions(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('incursions', { show_column_headings, version });
}

/**
 * Return a list of industry facilities
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function industry_facilities(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('industry_facilities', { show_column_headings, version });
}

/**
 * Return cost indices for solar systems
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function industry_systems(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('industry_systems', { show_column_headings, version });
}

/**
 * Return available insurance levels for all ship types
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function insurance_prices(language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('insurance_prices', { language, show_column_headings, version });
}

/**
 * Return a single killmail from its ID and hash
 *
 * @param {number} killmail_id - The killmail ID to be queried
 * @param {string} killmail_hash - The killmail hash for verification
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function killmails_killmail_killmail_hash(killmail_id: number, killmail_hash: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!killmail_id) throw new Error(`killmail_id is required.`);
  if (!killmail_hash) throw new Error(`killmail_hash is required.`);
  return invoke('killmails_killmail_killmail_hash', { killmail_id, killmail_hash, show_column_headings, version });
}

/**
 * Return a list of offers from a specific corporation's loyalty store
 *
 * @param {number} corporation_id - An EVE corporation ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function loyalty_stores_corporation_offers(corporation_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!corporation_id) throw new Error(`corporation_id is required.`);
  return invoke('loyalty_stores_corporation_offers', { corporation_id, show_column_headings, version });
}

/**
 * Get a list of item groups
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_groups(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('markets_groups', { show_column_headings, version });
}

/**
 * Get information on an item group
 *
 * @param {number} market_group_id - An Eve item group ID
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_groups_market_group(market_group_id: number, language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!market_group_id) throw new Error(`market_group_id is required.`);
  return invoke('markets_groups_market_group', { market_group_id, language, show_column_headings, version });
}

/**
 * Return a list of prices
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_prices(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('markets_prices', { show_column_headings, version });
}

/**
 * Return a list of historical market statistics for the specified type in a region
 *
 * @param {number} type_id - Return statistics for this type
 * @param {number} region_id - Return statistics in this region
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_region_history(type_id: number, region_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!type_id) throw new Error(`type_id is required.`);
  if (!region_id) throw new Error(`region_id is required.`);
  return invoke('markets_region_history', { type_id, region_id, show_column_headings, version });
}

/**
 * Return a list of orders in a region
 *
 * @param {number} region_id - Return orders in this region
 * @param {string} order_type - Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
 * @param {number} type_id - Return orders only for this type
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_region_orders(region_id: number, order_type: string, type_id?: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!region_id) throw new Error(`region_id is required.`);
  if (!order_type) throw new Error(`order_type is required.`);
  return invoke('markets_region_orders', { region_id, order_type, type_id, show_column_headings, version });
}

/**
 * Return a list of type IDs that have active orders in the region, for efficient market indexing.
 *
 * @param {number} region_id - Return statistics in this region
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_region_types(region_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!region_id) throw new Error(`region_id is required.`);
  return invoke('markets_region_types', { region_id, show_column_headings, version });
}

/**
 * Return all orders in a structure
 *
 * @param {number} structure_id - Return orders in this structure
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function markets_structures_structure(structure_id: number, name?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!structure_id) throw new Error(`structure_id is required.`);
  return invoke('markets_structures_structure', { structure_id, name, show_column_headings, version });
}

/**
 * Get the systems between origin and destination
 *
 * @param {number} origin - origin solar system ID
 * @param {number} destination - destination solar system ID
 * @param {number|number[]} avoid - avoid solar system ID(s)
 * @param {number|number[]} connections - connected solar system pairs
 * @param {string} flag - route security preference
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function route_origin_destination(origin: number, destination: number, avoid?: number|number[], connections?: number|number[], flag?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!origin) throw new Error(`origin is required.`);
  if (!destination) throw new Error(`destination is required.`);
  return invoke('route_origin_destination', { origin, destination, avoid, connections, flag, show_column_headings, version });
}

/**
 * Shows sovereignty data for campaigns.
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function sovereignty_campaigns(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('sovereignty_campaigns', { show_column_headings, version });
}

/**
 * Shows sovereignty information for solar systems
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function sovereignty_map(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('sovereignty_map', { show_column_headings, version });
}

/**
 * Shows sovereignty data for structures.
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function sovereignty_structures(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('sovereignty_structures', { show_column_headings, version });
}

/**
 * Get all character ancestries
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_ancestries(language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_ancestries', { language, show_column_headings, version });
}

/**
 * Get information on an asteroid belt
 *
 * @param {number} asteroid_belt_id - asteroid_belt_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_asteroid_belts_asteroid_belt(asteroid_belt_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!asteroid_belt_id) throw new Error(`asteroid_belt_id is required.`);
  return invoke('universe_asteroid_belts_asteroid_belt', { asteroid_belt_id, show_column_headings, version });
}

/**
 * Get a list of bloodlines
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_bloodlines(language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_bloodlines', { language, show_column_headings, version });
}

/**
 * Get a list of item categories
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_categories(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_categories', { show_column_headings, version });
}

/**
 * Get information of an item category
 *
 * @param {number} category_id - An Eve item category ID
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_categories_category(category_id: number, language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!category_id) throw new Error(`category_id is required.`);
  return invoke('universe_categories_category', { category_id, language, show_column_headings, version });
}

/**
 * Get a list of constellations
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_constellations(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_constellations', { show_column_headings, version });
}

/**
 * Get information on a constellation
 *
 * @param {number} constellation_id - constellation_id integer
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_constellations_constellation(constellation_id: number, language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!constellation_id) throw new Error(`constellation_id is required.`);
  return invoke('universe_constellations_constellation', { constellation_id, language, show_column_headings, version });
}

/**
 * Get a list of factions
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_factions(language?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('universe_factions', { language, show_column_headings, version });
}

/**
 * Get a list of graphics
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_graphics(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_graphics', { show_column_headings, version });
}

/**
 * Get information on a graphic
 *
 * @param {number} graphic_id - graphic_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_graphics_graphic(graphic_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!graphic_id) throw new Error(`graphic_id is required.`);
  return invoke('universe_graphics_graphic', { graphic_id, show_column_headings, version });
}

/**
 * Get a list of item groups
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_groups(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_groups', { show_column_headings, version });
}

/**
 * Get information on an item group
 *
 * @param {number} group_id - An Eve item group ID
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_groups_group(group_id: number, language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!group_id) throw new Error(`group_id is required.`);
  return invoke('universe_groups_group', { group_id, language, show_column_headings, version });
}

/**
 * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
 *
 * @param {string|string[]} names - The names to resolve
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_ids(names: string|string[], language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!names) throw new Error(`names is required.`);
  return invoke('universe_ids', { names, language, show_column_headings, version });
}

/**
 * Get information on a moon
 *
 * @param {number} moon_id - moon_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_moons_moon(moon_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!moon_id) throw new Error(`moon_id is required.`);
  return invoke('universe_moons_moon', { moon_id, show_column_headings, version });
}

/**
 * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
 *
 * @param {number|number[]} ids - The ids to resolve
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_names(ids: number|number[], show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!ids) throw new Error(`ids is required.`);
  return invoke('universe_names', { ids, show_column_headings, version });
}

/**
 * Get information on a planet
 *
 * @param {number} planet_id - planet_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_planets_planet(planet_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!planet_id) throw new Error(`planet_id is required.`);
  return invoke('universe_planets_planet', { planet_id, show_column_headings, version });
}

/**
 * Get a list of character races
 *
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_races(language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_races', { language, show_column_headings, version });
}

/**
 * Get a list of regions
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_regions(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_regions', { show_column_headings, version });
}

/**
 * Get information on a region
 *
 * @param {number} region_id - region_id integer
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_regions_region(region_id: number, language?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!region_id) throw new Error(`region_id is required.`);
  return invoke('universe_regions_region', { region_id, language, show_column_headings, version });
}

/**
 * Get information on a planetary factory schematic
 *
 * @param {number} schematic_id - A PI schematic ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_schematics_schematic(schematic_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!schematic_id) throw new Error(`schematic_id is required.`);
  return invoke('universe_schematics_schematic', { schematic_id, show_column_headings, version });
}

/**
 * Get information on a stargate
 *
 * @param {number} stargate_id - stargate_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_stargates_stargate(stargate_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!stargate_id) throw new Error(`stargate_id is required.`);
  return invoke('universe_stargates_stargate', { stargate_id, show_column_headings, version });
}

/**
 * Get information on a star
 *
 * @param {number} star_id - star_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_stars_star(star_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!star_id) throw new Error(`star_id is required.`);
  return invoke('universe_stars_star', { star_id, show_column_headings, version });
}

/**
 * Get information on a station
 *
 * @param {number} station_id - station_id integer
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_stations_station(station_id: number, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!station_id) throw new Error(`station_id is required.`);
  return invoke('universe_stations_station', { station_id, show_column_headings, version });
}

/**
 * List all public structures
 *
 * @param {string} filter - Only list public structures that have this service online
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_structures(filter?: string, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_structures', { filter, show_column_headings, version });
}

/**
 * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
 *
 * @param {number} structure_id - An Eve structure ID
 * @param {string} name - Name of the character used for auth. Defaults to the first authenticated character.
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_structures_structure(structure_id: number, name?: string, show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  if (!structure_id) throw new Error(`structure_id is required.`);
  return invoke('universe_structures_structure', { structure_id, name, show_column_headings, version });
}

/**
 * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_system_jumps(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_system_jumps', { show_column_headings, version });
}

/**
 * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_system_kills(show_column_headings: boolean = true, version: string = "v2"): SheetsArray {
  return invoke('universe_system_kills', { show_column_headings, version });
}

/**
 * Get a list of solar systems
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_systems(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_systems', { show_column_headings, version });
}

/**
 * Get information on a solar system.
 *
 * @param {number} system_id - system_id integer
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_systems_system(system_id: number, language?: string, show_column_headings: boolean = true, version: string = "v4"): SheetsArray {
  if (!system_id) throw new Error(`system_id is required.`);
  return invoke('universe_systems_system', { system_id, language, show_column_headings, version });
}

/**
 * Get a list of type ids
 *
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_types(show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('universe_types', { show_column_headings, version });
}

/**
 * Get information on a type
 *
 * @param {number} type_id - An Eve item type ID
 * @param {string} language - Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function universe_types_type(type_id: number, language?: string, show_column_headings: boolean = true, version: string = "v3"): SheetsArray {
  if (!type_id) throw new Error(`type_id is required.`);
  return invoke('universe_types_type', { type_id, language, show_column_headings, version });
}

/**
 * Return a list of wars
 *
 * @param {number} max_war_id - Only return wars with ID smaller than this
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function wars(max_war_id?: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  return invoke('wars', { max_war_id, show_column_headings, version });
}

/**
 * Return details about a war
 *
 * @param {number} war_id - ID for a war
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function wars_war(war_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!war_id) throw new Error(`war_id is required.`);
  return invoke('wars_war', { war_id, show_column_headings, version });
}

/**
 * Return a list of kills related to a war
 *
 * @param {number} war_id - A valid war ID
 * @param {boolean} show_column_headings - If column headings should be shown.
 * @param {string} version - Which ESI version to use for the request.
 * @customfunction
 */
function wars_war_killmails(war_id: number, show_column_headings: boolean = true, version: string = "v1"): SheetsArray {
  if (!war_id) throw new Error(`war_id is required.`);
  return invoke('wars_war_killmails', { war_id, show_column_headings, version });
}
