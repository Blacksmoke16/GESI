/** 
* Public information about an alliance
* @param {integer} alliance_id (Required) An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance information.
* @customfunction
*/
function alliances_alliance(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return parseData_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

/** 
* List all current member corporations of an alliance
* @param {integer} alliance_id (Required) An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List alliance's corporations.
* @customfunction
*/
function alliances_alliance_corporations(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return parseData_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

/** 
* Resolve a set of alliance IDs to alliance names
* @param {array} alliance_ids (Required) A comma separated list of alliance IDs.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance names.
* @customfunction
*/
function alliances_names(alliance_ids, opt_headers) {
  if(!alliance_ids) throw 'alliance_ids is required';
  return parseData_(arguments.callee.name,{alliance_ids:alliance_ids,opt_headers:opt_headers});
}

/** 
* Get the icon urls for a alliance
* @param {integer} alliance_id (Required) An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance icon.
* @customfunction
*/
function alliances_alliance_icons(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return parseData_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

/** 
* List all active player alliances
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List all alliances.
* @customfunction
*/
function alliances(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return a list of the characters assets
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character assets.
* @customfunction
*/
function characters_character_assets(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return a list of the corporation assets
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation assets.
* @customfunction
*/
function corporations_corporation_assets(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* A list of your character's personal bookmarks
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List bookmarks.
* @customfunction
*/
function characters_character_bookmarks(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* A list of your character's personal bookmark folders
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List bookmark folders.
* @customfunction
*/
function characters_character_bookmarks_folders(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* A list of your corporation's bookmarks
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation bookmarks.
* @customfunction
*/
function corporations_corporation_bookmarks(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* A list of your corporation's bookmark folders
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation bookmark folders.
* @customfunction
*/
function corporations_corporation_bookmarks_folders(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.
* @param {integer} from_event  The event ID to retrieve events from.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List calendar event summaries.
* @customfunction
*/
function characters_character_calendar(from_event, name, opt_headers) {
  return parseData_(arguments.callee.name,{from_event:from_event,name:name,opt_headers:opt_headers});
}

/** 
* Get all the information for a specific event
* @param {integer} event_id (Required) The id of the event requested.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get an event.
* @customfunction
*/
function characters_character_calendar_event(event_id, name, opt_headers) {
  if(!event_id) throw 'event_id is required';
  return parseData_(arguments.callee.name,{event_id:event_id,name:name,opt_headers:opt_headers});
}

/** 
* Get all invited attendees for a given event
* @param {integer} event_id (Required) The id of the event requested.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get attendees.
* @customfunction
*/
function characters_character_calendar_event_attendees(event_id, name, opt_headers) {
  if(!event_id) throw 'event_id is required';
  return parseData_(arguments.callee.name,{event_id:event_id,name:name,opt_headers:opt_headers});
}

/** 
* Returns aggregate yearly stats for a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Yearly aggregate stats.
* @customfunction
*/
function characters_character_stats(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Public information about a character
* @param {integer} character_id (Required) An EVE character ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character's public information.
* @customfunction
*/
function characters_character(character_id, opt_headers) {
  if(!character_id) throw 'character_id is required';
  return parseData_(arguments.callee.name,{character_id:character_id,opt_headers:opt_headers});
}

/** 
* Resolve a set of character IDs to character names
* @param {array} character_ids (Required) A comma separated list of character IDs.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character names.
* @customfunction
*/
function characters_names(character_ids, opt_headers) {
  if(!character_ids) throw 'character_ids is required';
  return parseData_(arguments.callee.name,{character_ids:character_ids,opt_headers:opt_headers});
}

/** 
* Get portrait urls for a character
* @param {integer} character_id (Required) An EVE character ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character portraits.
* @customfunction
*/
function characters_character_portrait(character_id, opt_headers) {
  if(!character_id) throw 'character_id is required';
  return parseData_(arguments.callee.name,{character_id:character_id,opt_headers:opt_headers});
}

/** 
* Get a list of all the corporations a character has been a member of
* @param {integer} character_id (Required) An EVE character ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation history.
* @customfunction
*/
function characters_character_corporationhistory(character_id, opt_headers) {
  if(!character_id) throw 'character_id is required';
  return parseData_(arguments.callee.name,{character_id:character_id,opt_headers:opt_headers});
}

/** 
* Return chat channels that a character is the owner or operator of
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get chat channels.
* @customfunction
*/
function characters_character_chat_channels(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return a list of medals the character has
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get medals.
* @customfunction
*/
function characters_character_medals(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return character standings from agents, NPC corporations, and factions
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get standings.
* @customfunction
*/
function characters_character_standings(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime 
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get agents research.
* @customfunction
*/
function characters_character_agents_research(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return a list of blueprints the character owns
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get blueprints.
* @customfunction
*/
function characters_character_blueprints(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return a character's jump activation and fatigue information
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get jump fatigue.
* @customfunction
*/
function characters_character_fatigue(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return notifications about having been added to someone's contact list
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get new contact notifications.
* @customfunction
*/
function characters_character_notifications_contacts(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return character notifications
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character notifications.
* @customfunction
*/
function characters_character_notifications(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a character's corporation roles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character corporation roles.
* @customfunction
*/
function characters_character_roles(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a character's titles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character corporation titles.
* @customfunction
*/
function characters_character_titles(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* A list of the character's clones
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get clones.
* @customfunction
*/
function characters_character_clones(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return implants on the active clone of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get active implants.
* @customfunction
*/
function characters_character_implants(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return contacts of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contacts.
* @customfunction
*/
function characters_character_contacts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return contacts of a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contacts.
* @customfunction
*/
function corporations_corporation_contacts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return contacts of an alliance
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance contacts.
* @customfunction
*/
function alliances_alliance_contacts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return custom labels for contacts the character defined
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contact labels.
* @customfunction
*/
function characters_character_contacts_labels(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contracts.
* @customfunction
*/
function characters_character_contracts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Lists items of a particular contract
* @param {integer} contract_id (Required) ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contract items.
* @customfunction
*/
function characters_character_contracts_contract_items(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return parseData_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

/** 
* Lists bids on a particular auction contract
* @param {integer} contract_id (Required) ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contract bids.
* @customfunction
*/
function characters_character_contracts_contract_bids(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return parseData_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

/** 
* Returns contracts available to a coporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get coporation contracts.
* @customfunction
*/
function corporations_corporation_contracts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Lists items of a particular contract
* @param {integer} contract_id (Required) ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contract items.
* @customfunction
*/
function corporations_corporation_contracts_contract_items(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return parseData_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

/** 
* Lists bids on a particular auction contract
* @param {integer} contract_id (Required) ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contract bids.
* @customfunction
*/
function corporations_corporation_contracts_contract_bids(contract_id, name, page, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return parseData_(arguments.callee.name,{contract_id:contract_id,name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return the current shareholders of a corporation.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation shareholders.
* @customfunction
*/
function corporations_corporation_shareholders(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Public information about a corporation
* @param {integer} corporation_id (Required) An EVE corporation ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation information.
* @customfunction
*/
function corporations_corporation(corporation_id, opt_headers) {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_(arguments.callee.name,{corporation_id:corporation_id,opt_headers:opt_headers});
}

/** 
* Get a list of all the alliances a corporation has been a member of
* @param {integer} corporation_id (Required) An EVE corporation ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance history.
* @customfunction
*/
function corporations_corporation_alliancehistory(corporation_id, opt_headers) {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_(arguments.callee.name,{corporation_id:corporation_id,opt_headers:opt_headers});
}

/** 
* Resolve a set of corporation IDs to corporation names
* @param {array} corporation_ids (Required) A comma separated list of corporation IDs.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation names.
* @customfunction
*/
function corporations_names(corporation_ids, opt_headers) {
  if(!corporation_ids) throw 'corporation_ids is required';
  return parseData_(arguments.callee.name,{corporation_ids:corporation_ids,opt_headers:opt_headers});
}

/** 
* Return the current member list of a corporation, the token's character need to be a member of the corporation.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation members.
* @customfunction
*/
function corporations_corporation_members(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return the roles of all members if the character has the personnel manager role or any grantable role.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation member roles.
* @customfunction
*/
function corporations_corporation_roles(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return how roles have changed for a coporation's members, up to a month
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation member roles history.
* @customfunction
*/
function corporations_corporation_roles_history(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get the icon urls for a corporation
* @param {integer} corporation_id (Required) An EVE corporation ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation icon.
* @customfunction
*/
function corporations_corporation_icons(corporation_id, opt_headers) {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_(arguments.callee.name,{corporation_id:corporation_id,opt_headers:opt_headers});
}

/** 
* Get a list of npc corporations
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get npc corporations.
* @customfunction
*/
function corporations_npccorps(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell
* @param {string} language  Language to use in the response.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation structures.
* @customfunction
*/
function corporations_corporation_structures(language, name, page, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,name:name,page:page,opt_headers:opt_headers});
}

/** 
* Returns additional information about a corporation's members which helps tracking their activities
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Track corporation members.
* @customfunction
*/
function corporations_corporation_membertracking(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return corporation hangar and wallet division names, only show if a division is not using the default name
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation divisions.
* @customfunction
*/
function corporations_corporation_divisions(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return a corporation's member limit, not including CEO himself
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation member limit.
* @customfunction
*/
function corporations_corporation_members_limit(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a corporation's titles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation titles.
* @customfunction
*/
function corporations_corporation_titles(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a corporation's members' titles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation's members' titles.
* @customfunction
*/
function corporations_corporation_members_titles(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a list of blueprints the corporation owns
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation blueprints.
* @customfunction
*/
function corporations_corporation_blueprints(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return corporation standings from agents, NPC corporations, and factions
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation standings.
* @customfunction
*/
function corporations_corporation_standings(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Returns list of corporation starbases (POSes)
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation starbases (POSes).
* @customfunction
*/
function corporations_corporation_starbases(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Returns various settings and fuels of a starbase (POS)
* @param {integer} starbase_id (Required) An EVE starbase (POS) ID.
* @param {integer} system_id (Required) The solar system this starbase (POS) is located in,.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get starbase (POS) detail.
* @customfunction
*/
function corporations_corporation_starbases_starbase(starbase_id, system_id, name, opt_headers) {
  if(!starbase_id) throw 'starbase_id is required';
  if(!system_id) throw 'system_id is required';
  return parseData_(arguments.callee.name,{starbase_id:starbase_id,system_id:system_id,name:name,opt_headers:opt_headers});
}

/** 
* Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get all corporation ALSC logs.
* @customfunction
*/
function corporations_corporation_containers_logs(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return a corporation's facilities
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation facilities.
* @customfunction
*/
function corporations_corporation_facilities(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a corporation's medals
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation medals.
* @customfunction
*/
function corporations_corporation_medals(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Returns medals issued by a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation issued medals.
* @customfunction
*/
function corporations_corporation_medals_issue(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get a list of corporation outpost IDs Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation outposts.
* @customfunction
*/
function corporations_corporation_outposts(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get details about a given outpost. Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev
* @param {integer} outpost_id (Required) A station (outpost) ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation outpost details.
* @customfunction
*/
function corporations_corporation_outposts_outpost(outpost_id, name, opt_headers) {
  if(!outpost_id) throw 'outpost_id is required';
  return parseData_(arguments.callee.name,{outpost_id:outpost_id,name:name,opt_headers:opt_headers});
}

/** 
* Get a list of dogma attribute ids
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get attributes.
* @customfunction
*/
function dogma_attributes(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a dogma attribute
* @param {integer} attribute_id (Required) A dogma attribute ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get attribute information.
* @customfunction
*/
function dogma_attributes_attribute(attribute_id, opt_headers) {
  if(!attribute_id) throw 'attribute_id is required';
  return parseData_(arguments.callee.name,{attribute_id:attribute_id,opt_headers:opt_headers});
}

/** 
* Get a list of dogma effect ids
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get effects.
* @customfunction
*/
function dogma_effects(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a dogma effect
* @param {integer} effect_id (Required) A dogma effect ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get effect information.
* @customfunction
*/
function dogma_effects_effect(effect_id, opt_headers) {
  if(!effect_id) throw 'effect_id is required';
  return parseData_(arguments.callee.name,{effect_id:effect_id,opt_headers:opt_headers});
}

/** 
* Data about which NPC factions are at war
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Data about which NPC factions are at war.
* @customfunction
*/
function fw_wars(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Statistical overviews of factions involved in faction warfare
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return An overview of statistics about factions involved in faction warfare.
* @customfunction
*/
function fw_stats(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* An overview of the current ownership of faction warfare solar systems
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Ownership of faction warfare systems.
* @customfunction
*/
function fw_systems(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List of the top factions in faction warfare.
* @customfunction
*/
function fw_leaderboards(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List of the top pilots in faction warfare.
* @customfunction
*/
function fw_leaderboards_characters(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List of the top corporations in faction warfare.
* @customfunction
*/
function fw_leaderboards_corporations(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Statistics about a corporation involved in faction warfare
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Overview of a corporation involved in faction warfare.
* @customfunction
*/
function corporations_corporation_fw_stats(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Statistical overview of a character involved in faction warfare
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Overview of a character involved in faction warfare.
* @customfunction
*/
function characters_character_fw_stats(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return fittings of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get fittings.
* @customfunction
*/
function characters_character_fittings(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return details about a fleet
* @param {integer} fleet_id (Required) ID for a fleet.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get fleet information.
* @customfunction
*/
function fleets_fleet(fleet_id, name, opt_headers) {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_(arguments.callee.name,{fleet_id:fleet_id,name:name,opt_headers:opt_headers});
}

/** 
* Return the fleet ID the character is in, if any.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character fleet info.
* @customfunction
*/
function characters_character_fleet(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return information about fleet members
* @param {integer} fleet_id (Required) ID for a fleet.
* @param {string} language  Language to use in the response.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get fleet members.
* @customfunction
*/
function fleets_fleet_members(fleet_id, language, name, opt_headers) {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_(arguments.callee.name,{fleet_id:fleet_id,language:language,name:name,opt_headers:opt_headers});
}

/** 
* Return information about wings in a fleet
* @param {integer} fleet_id (Required) ID for a fleet.
* @param {string} language  Language to use in the response.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get fleet wings.
* @customfunction
*/
function fleets_fleet_wings(fleet_id, language, name, opt_headers) {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_(arguments.callee.name,{fleet_id:fleet_id,language:language,name:name,opt_headers:opt_headers});
}

/** 
* Return a list of current incursions
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List incursions.
* @customfunction
*/
function incursions(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return a list of industry facilities
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List industry facilities.
* @customfunction
*/
function industry_facilities(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return cost indices for solar systems
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List solar system cost indices.
* @customfunction
*/
function industry_systems(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* List industry jobs placed by a character
* @param {boolean} include_completed  Whether retrieve completed character industry jobs as well.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List character industry jobs.
* @customfunction
*/
function characters_character_industry_jobs(include_completed, name, opt_headers) {
  return parseData_(arguments.callee.name,{include_completed:include_completed,name:name,opt_headers:opt_headers});
}

/** 
* Paginated record of all mining done by a character for the past 30 days
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Character mining ledger.
* @customfunction
*/
function characters_character_mining(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Paginated list of all entities capable of observing and recording mining for a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Corporation mining observers.
* @customfunction
*/
function corporation_corporation_mining_observers(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Paginated record of all mining seen by an observer
* @param {integer} observer_id (Required) A mining observer id.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Observed corporation mining.
* @customfunction
*/
function corporation_corporation_mining_observers_observer(observer_id, name, page, opt_headers) {
  if(!observer_id) throw 'observer_id is required';
  return parseData_(arguments.callee.name,{observer_id:observer_id,name:name,page:page,opt_headers:opt_headers});
}

/** 
* List industry jobs run by a corporation
* @param {boolean} include_completed  Whether retrieve completed industry jobs as well.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation industry jobs.
* @customfunction
*/
function corporations_corporation_industry_jobs(include_completed, name, page, opt_headers) {
  return parseData_(arguments.callee.name,{include_completed:include_completed,name:name,page:page,opt_headers:opt_headers});
}

/** 
* Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Moon extraction timers.
* @customfunction
*/
function corporation_corporation_mining_extractions(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return available insurance levels for all ship types
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List insurance levels.
* @customfunction
*/
function insurance_prices(language, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,opt_headers:opt_headers});
}

/** 
* Return a single killmail from its ID and hash
* @param {string} killmail_hash (Required) The killmail hash for verification.
* @param {integer} killmail_id (Required) The killmail ID to be queried.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get a single killmail.
* @customfunction
*/
function killmails_killmail_killmail_hash(killmail_hash, killmail_id, opt_headers) {
  if(!killmail_hash) throw 'killmail_hash is required';
  if(!killmail_id) throw 'killmail_id is required';
  return parseData_(arguments.callee.name,{killmail_hash:killmail_hash,killmail_id:killmail_id,opt_headers:opt_headers});
}

/** 
* Return a list of character's recent kills and losses
* @param {integer} max_count  How many killmails to return at maximum.
* @param {integer} max_kill_id  Only return killmails with ID smaller than this.
.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character kills and losses.
* @customfunction
*/
function characters_character_killmails_recent(max_count, max_kill_id, name, opt_headers) {
  return parseData_(arguments.callee.name,{max_count:max_count,max_kill_id:max_kill_id,name:name,opt_headers:opt_headers});
}

/** 
* Get a list of corporation's recent kills and losses
* @param {integer} max_kill_id  Only return killmails with ID smaller than this.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation kills and losses.
* @customfunction
*/
function corporations_corporation_killmails_recent(max_kill_id, name, opt_headers) {
  return parseData_(arguments.callee.name,{max_kill_id:max_kill_id,name:name,opt_headers:opt_headers});
}

/** 
* Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character location.
* @customfunction
*/
function characters_character_location(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Get the current ship type, name and id
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get current ship.
* @customfunction
*/
function characters_character_ship(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Checks if the character is currently online
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character online.
* @customfunction
*/
function characters_character_online(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return a list of offers from a specific corporation's loyalty store
* @param {integer} corporation_id (Required) An EVE corporation ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List loyalty store offers.
* @customfunction
*/
function loyalty_stores_corporation_offers(corporation_id, opt_headers) {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_(arguments.callee.name,{corporation_id:corporation_id,opt_headers:opt_headers});
}

/** 
* Return a list of loyalty points for all corporations the character has worked for
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get loyalty points.
* @customfunction
*/
function characters_character_loyalty_points(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.
* @param {array} labels  Fetch only mails that match one or more of the given labels.
* @param {integer} last_mail_id  List only mail with an ID lower than the given ID, if present.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Return mail headers.
* @customfunction
*/
function characters_character_mail(labels, last_mail_id, name, opt_headers) {
  return parseData_(arguments.callee.name,{labels:labels,last_mail_id:last_mail_id,name:name,opt_headers:opt_headers});
}

/** 
* Return a list of the users mail labels, unread counts for each label and a total unread count.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get mail labels and unread counts.
* @customfunction
*/
function characters_character_mail_labels(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return all mailing lists that the character is subscribed to
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Return mailing list subscriptions.
* @customfunction
*/
function characters_character_mail_lists(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return the contents of an EVE mail
* @param {integer} mail_id (Required) An EVE mail ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Return a mail.
* @customfunction
*/
function characters_character_mail_mail(mail_id, name, opt_headers) {
  if(!mail_id) throw 'mail_id is required';
  return parseData_(arguments.callee.name,{mail_id:mail_id,name:name,opt_headers:opt_headers});
}

/** 
* Return a list of prices
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List market prices.
* @customfunction
*/
function markets_prices(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return a list of orders in a region
* @param {string} order_type (Required) Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders..
* @param {integer} region_id (Required) Return orders in this region.
* @param {integer} type_id  Return orders only for this type.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List orders in a region.
* @customfunction
*/
function markets_region_orders(order_type, region_id, type_id, page, opt_headers) {
  if(!order_type) throw 'order_type is required';
  if(!region_id) throw 'region_id is required';
  return parseData_(arguments.callee.name,{order_type:order_type,region_id:region_id,type_id:type_id,page:page,opt_headers:opt_headers});
}

/** 
* Return a list of historical market statistics for the specified type in a region
* @param {integer} region_id (Required) Return statistics in this region.
* @param {integer} type_id (Required) Return statistics for this type.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List historical market statistics in a region.
* @customfunction
*/
function markets_region_history(region_id, type_id, opt_headers) {
  if(!region_id) throw 'region_id is required';
  if(!type_id) throw 'type_id is required';
  return parseData_(arguments.callee.name,{region_id:region_id,type_id:type_id,opt_headers:opt_headers});
}

/** 
* Return all orders in a structure
* @param {integer} structure_id (Required) Return orders in this structure.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List orders in a structure.
* @customfunction
*/
function markets_structures_structure(structure_id, name, page, opt_headers) {
  if(!structure_id) throw 'structure_id is required';
  return parseData_(arguments.callee.name,{structure_id:structure_id,name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get a list of item groups
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item groups.
* @customfunction
*/
function markets_groups(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on an item group
* @param {string} language  Language to use in the response.
* @param {integer} market_group_id (Required) An Eve item group ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item group information.
* @customfunction
*/
function markets_groups_market_group(language, market_group_id, opt_headers) {
  if(!market_group_id) throw 'market_group_id is required';
  return parseData_(arguments.callee.name,{language:language,market_group_id:market_group_id,opt_headers:opt_headers});
}

/** 
* List open market orders placed by a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List open orders from a character.
* @customfunction
*/
function characters_character_orders(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* List cancelled and expired market orders placed by a character up to 90 days in the past.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List historical orders by a character.
* @customfunction
*/
function characters_character_orders_history(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return a list of type IDs that have active orders in the region, for efficient market indexing.
* @param {integer} region_id (Required) Return statistics in this region.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List type IDs relevant to a market.
* @customfunction
*/
function markets_region_types(region_id, page, opt_headers) {
  if(!region_id) throw 'region_id is required';
  return parseData_(arguments.callee.name,{region_id:region_id,page:page,opt_headers:opt_headers});
}

/** 
* List open market orders placed on behalf of a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List open orders from a corporation.
* @customfunction
*/
function corporations_corporation_orders(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List historical orders from a corporation.
* @customfunction
*/
function corporations_corporation_orders_history(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Return a list of opportunities groups
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get opportunities groups.
* @customfunction
*/
function opportunities_groups(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return information of an opportunities group
* @param {integer} group_id (Required) ID of an opportunities group.
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get opportunities group.
* @customfunction
*/
function opportunities_groups_group(group_id, language, opt_headers) {
  if(!group_id) throw 'group_id is required';
  return parseData_(arguments.callee.name,{group_id:group_id,language:language,opt_headers:opt_headers});
}

/** 
* Return a list of opportunities tasks
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get opportunities tasks.
* @customfunction
*/
function opportunities_tasks(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Return information of an opportunities task
* @param {integer} task_id (Required) ID of an opportunities task.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get opportunities task.
* @customfunction
*/
function opportunities_tasks_task(task_id, opt_headers) {
  if(!task_id) throw 'task_id is required';
  return parseData_(arguments.callee.name,{task_id:task_id,opt_headers:opt_headers});
}

/** 
* Return a list of tasks finished by a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get a character's completed tasks.
* @customfunction
*/
function characters_character_opportunities(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns a list of all planetary colonies owned by a character.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get colonies.
* @customfunction
*/
function characters_character_planets(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
* @param {integer} planet_id (Required) Planet id of the target planet.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get colony layout.
* @customfunction
*/
function characters_character_planets_planet(planet_id, name, opt_headers) {
  if(!planet_id) throw 'planet_id is required';
  return parseData_(arguments.callee.name,{planet_id:planet_id,name:name,opt_headers:opt_headers});
}

/** 
* Get information on a planetary factory schematic
* @param {integer} schematic_id (Required) A PI schematic ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get schematic information.
* @customfunction
*/
function universe_schematics_schematic(schematic_id, opt_headers) {
  if(!schematic_id) throw 'schematic_id is required';
  return parseData_(arguments.callee.name,{schematic_id:schematic_id,opt_headers:opt_headers});
}

/** 
* List customs offices owned by a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation customs offices.
* @customfunction
*/
function corporations_corporation_customs_offices(name, page, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

/** 
* Get the systems between origin and destination
* @param {array} avoid  avoid solar system ID(s).
* @param {array} connections  connected solar system pairs.
* @param {integer} destination (Required) destination solar system ID.
* @param {string} flag  route security preference.
* @param {integer} origin (Required) origin solar system ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get route.
* @customfunction
*/
function route_origin_destination(avoid, connections, destination, flag, origin, opt_headers) {
  if(!destination) throw 'destination is required';
  if(!origin) throw 'origin is required';
  return parseData_(arguments.callee.name,{avoid:avoid,connections:connections,destination:destination,flag:flag,origin:origin,opt_headers:opt_headers});
}

/** 
* Search for entities that match a given sub
* @param {array} categories (Required) Type of entities to search for.
* @param {string} language  Language to use in the response.
* @param {string} search (Required) The string to search on.
* @param {boolean} strict  Whether the search should be a strict match.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Search on a string.
* @customfunction
*/
function characters_character_search(categories, language, search, strict, name, opt_headers) {
  if(!categories) throw 'categories is required';
  if(!search) throw 'search is required';
  return parseData_(arguments.callee.name,{categories:categories,language:language,search:search,strict:strict,name:name,opt_headers:opt_headers});
}

/** 
* Search for entities that match a given sub
* @param {array} categories (Required) Type of entities to search for.
* @param {string} language  Language to use in the response.
* @param {string} search (Required) The string to search on.
* @param {boolean} strict  Whether the search should be a strict match.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Search on a string.
* @customfunction
*/
function eve_search(categories, language, search, strict, opt_headers) {
  if(!categories) throw 'categories is required';
  if(!search) throw 'search is required';
  return parseData_(arguments.callee.name,{categories:categories,language:language,search:search,strict:strict,opt_headers:opt_headers});
}

/** 
* List the configured skill queue for the given character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character's skill queue.
* @customfunction
*/
function characters_character_skillqueue(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* List all trained skills for the given character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character skills.
* @customfunction
*/
function characters_character_skills(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Return attributes of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character attributes.
* @customfunction
*/
function characters_character_attributes(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Shows sovereignty data for structures.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List sovereignty structures.
* @customfunction
*/
function sovereignty_structures(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Shows sovereignty data for campaigns.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List sovereignty campaigns.
* @customfunction
*/
function sovereignty_campaigns(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Shows sovereignty information for solar systems
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List sovereignty of systems.
* @customfunction
*/
function sovereignty_map(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* EVE Server status
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Retrieve the uptime and player counts.
* @customfunction
*/
function status(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a planet
* @param {integer} planet_id (Required) planet_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get planet information.
* @customfunction
*/
function universe_planets_planet(planet_id, opt_headers) {
  if(!planet_id) throw 'planet_id is required';
  return parseData_(arguments.callee.name,{planet_id:planet_id,opt_headers:opt_headers});
}

/** 
* Get information on a station
* @param {integer} station_id (Required) station_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get station information.
* @customfunction
*/
function universe_stations_station(station_id, opt_headers) {
  if(!station_id) throw 'station_id is required';
  return parseData_(arguments.callee.name,{station_id:station_id,opt_headers:opt_headers});
}

/** 
* Returns information on requested structure, if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
* @param {integer} structure_id (Required) An Eve structure ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get structure information.
* @customfunction
*/
function universe_structures_structure(structure_id, name, opt_headers) {
  if(!structure_id) throw 'structure_id is required';
  return parseData_(arguments.callee.name,{structure_id:structure_id,name:name,opt_headers:opt_headers});
}

/** 
* Get information on a solar system
* @param {string} language  Language to use in the response.
* @param {integer} system_id (Required) system_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get solar system information.
* @customfunction
*/
function universe_systems_system(language, system_id, opt_headers) {
  if(!system_id) throw 'system_id is required';
  return parseData_(arguments.callee.name,{language:language,system_id:system_id,opt_headers:opt_headers});
}

/** 
* Get a list of solar systems
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get solar systems.
* @customfunction
*/
function universe_systems(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a type
* @param {string} language  Language to use in the response.
* @param {integer} type_id (Required) An Eve item type ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get type information.
* @customfunction
*/
function universe_types_type(language, type_id, opt_headers) {
  if(!type_id) throw 'type_id is required';
  return parseData_(arguments.callee.name,{language:language,type_id:type_id,opt_headers:opt_headers});
}

/** 
* Get a list of type ids
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get types.
* @customfunction
*/
function universe_types(page, opt_headers) {
  return parseData_(arguments.callee.name,{page:page,opt_headers:opt_headers});
}

/** 
* Get a list of item groups
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item groups.
* @customfunction
*/
function universe_groups(page, opt_headers) {
  return parseData_(arguments.callee.name,{page:page,opt_headers:opt_headers});
}

/** 
* Get information on an item group
* @param {integer} group_id (Required) An Eve item group ID.
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item group information.
* @customfunction
*/
function universe_groups_group(group_id, language, opt_headers) {
  if(!group_id) throw 'group_id is required';
  return parseData_(arguments.callee.name,{group_id:group_id,language:language,opt_headers:opt_headers});
}

/** 
* Get a list of item categories
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item categories.
* @customfunction
*/
function universe_categories(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information of an item category
* @param {integer} category_id (Required) An Eve item category ID.
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get item category information.
* @customfunction
*/
function universe_categories_category(category_id, language, opt_headers) {
  if(!category_id) throw 'category_id is required';
  return parseData_(arguments.callee.name,{category_id:category_id,language:language,opt_headers:opt_headers});
}

/** 
* List all public structures
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List all public structures.
* @customfunction
*/
function universe_structures(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get a list of character races
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character races.
* @customfunction
*/
function universe_races(language, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,opt_headers:opt_headers});
}

/** 
* Get a list of factions
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get factions.
* @customfunction
*/
function universe_factions(language, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,opt_headers:opt_headers});
}

/** 
* Get a list of bloodlines
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get bloodlines.
* @customfunction
*/
function universe_bloodlines(language, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,opt_headers:opt_headers});
}

/** 
* Get a list of regions
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get regions.
* @customfunction
*/
function universe_regions(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a region
* @param {string} language  Language to use in the response.
* @param {integer} region_id (Required) region_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get region information.
* @customfunction
*/
function universe_regions_region(language, region_id, opt_headers) {
  if(!region_id) throw 'region_id is required';
  return parseData_(arguments.callee.name,{language:language,region_id:region_id,opt_headers:opt_headers});
}

/** 
* Get a list of constellations
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get constellations.
* @customfunction
*/
function universe_constellations(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a constellation
* @param {integer} constellation_id (Required) constellation_id integer.
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get constellation information.
* @customfunction
*/
function universe_constellations_constellation(constellation_id, language, opt_headers) {
  if(!constellation_id) throw 'constellation_id is required';
  return parseData_(arguments.callee.name,{constellation_id:constellation_id,language:language,opt_headers:opt_headers});
}

/** 
* Get information on a moon
* @param {integer} moon_id (Required) moon_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get moon information.
* @customfunction
*/
function universe_moons_moon(moon_id, opt_headers) {
  if(!moon_id) throw 'moon_id is required';
  return parseData_(arguments.callee.name,{moon_id:moon_id,opt_headers:opt_headers});
}

/** 
* Get information on a stargate
* @param {integer} stargate_id (Required) stargate_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get stargate information.
* @customfunction
*/
function universe_stargates_stargate(stargate_id, opt_headers) {
  if(!stargate_id) throw 'stargate_id is required';
  return parseData_(arguments.callee.name,{stargate_id:stargate_id,opt_headers:opt_headers});
}

/** 
* Get a list of graphics
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get graphics.
* @customfunction
*/
function universe_graphics(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a graphic
* @param {integer} graphic_id (Required) graphic_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get graphic information.
* @customfunction
*/
function universe_graphics_graphic(graphic_id, opt_headers) {
  if(!graphic_id) throw 'graphic_id is required';
  return parseData_(arguments.callee.name,{graphic_id:graphic_id,opt_headers:opt_headers});
}

/** 
* Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get system jumps.
* @customfunction
*/
function universe_system_jumps(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get system kills.
* @customfunction
*/
function universe_system_kills(opt_headers) {
  return parseData_(arguments.callee.name,{opt_headers:opt_headers});
}

/** 
* Get information on a star
* @param {integer} star_id (Required) star_id integer.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get star information.
* @customfunction
*/
function universe_stars_star(star_id, opt_headers) {
  if(!star_id) throw 'star_id is required';
  return parseData_(arguments.callee.name,{star_id:star_id,opt_headers:opt_headers});
}

/** 
* Get all character ancestries
* @param {string} language  Language to use in the response.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get ancestries.
* @customfunction
*/
function universe_ancestries(language, opt_headers) {
  return parseData_(arguments.callee.name,{language:language,opt_headers:opt_headers});
}

/** 
* Returns a character's wallet balance
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get a character's wallet balance.
* @customfunction
*/
function characters_character_wallet(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Retrieve character wallet journal
* @param {integer} from_id  Only show journal entries happened before the transaction referenced by this id.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character wallet journal.
* @customfunction
*/
function characters_character_wallet_journal(from_id, name, opt_headers) {
  return parseData_(arguments.callee.name,{from_id:from_id,name:name,opt_headers:opt_headers});
}

/** 
* Get wallet transactions of a character
* @param {integer} from_id  Only show transactions happened before the one referenced by this id.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get wallet transactions.
* @customfunction
*/
function characters_character_wallet_transactions(from_id, name, opt_headers) {
  return parseData_(arguments.callee.name,{from_id:from_id,name:name,opt_headers:opt_headers});
}

/** 
* Get a corporation's wallets
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Returns a corporation's wallet balance.
* @customfunction
*/
function corporations_corporation_wallets(name, opt_headers) {
  return parseData_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

/** 
* Retrieve corporation wallet journal
* @param {integer} division (Required) Wallet key of the division to fetch journals from.
* @param {integer} from_id  Only show journal entries happened before the transaction referenced by this id.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation wallet journal.
* @customfunction
*/
function corporations_corporation_wallets_division_journal(division, from_id, name, opt_headers) {
  if(!division) throw 'division is required';
  return parseData_(arguments.callee.name,{division:division,from_id:from_id,name:name,opt_headers:opt_headers});
}

/** 
* Get wallet transactions of a corporation
* @param {integer} division (Required) Wallet key of the division to fetch journals from.
* @param {integer} from_id  Only show journal entries happened before the transaction referenced by this id.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation wallet transactions.
* @customfunction
*/
function corporations_corporation_wallets_division_transactions(division, from_id, name, opt_headers) {
  if(!division) throw 'division is required';
  return parseData_(arguments.callee.name,{division:division,from_id:from_id,name:name,opt_headers:opt_headers});
}

/** 
* Return a list of wars
* @param {integer} max_war_id  Only return wars with ID smaller than this..
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List wars.
* @customfunction
*/
function wars(max_war_id, opt_headers) {
  return parseData_(arguments.callee.name,{max_war_id:max_war_id,opt_headers:opt_headers});
}

/** 
* Return details about a war
* @param {integer} war_id (Required) ID for a war.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get war information.
* @customfunction
*/
function wars_war(war_id, opt_headers) {
  if(!war_id) throw 'war_id is required';
  return parseData_(arguments.callee.name,{war_id:war_id,opt_headers:opt_headers});
}

/** 
* Return a list of kills related to a war
* @param {integer} war_id (Required) A valid war ID.
* @param {integer} page  Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List kills for a war.
* @customfunction
*/
function wars_war_killmails(war_id, page, opt_headers) {
  if(!war_id) throw 'war_id is required';
  return parseData_(arguments.callee.name,{war_id:war_id,page:page,opt_headers:opt_headers});
}
