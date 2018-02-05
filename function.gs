/** 
* Public information about an alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance information.
* @customfunction
*/
function alliances_alliance(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return getObjectResponse_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

				 
/** 
* List all current member corporations of an alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List alliance's corporations.
* @customfunction
*/
function alliances_alliance_corporations(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return getArrayResponse_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

				 
/** 
* Resolve a set of alliance IDs to alliance names
* @param {array} alliance_ids A comma separated list of alliance IDs.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance names.
* @customfunction
*/
function alliances_names(alliance_ids, opt_headers) {
  if(!alliance_ids) throw 'alliance_ids is required';
  return getArrayObjectResponse_(arguments.callee.name,{alliance_ids:alliance_ids,opt_headers:opt_headers});
}

				 
/** 
* Get the icon urls for a alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance icon.
* @customfunction
*/
function alliances_alliance_icons(alliance_id, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return getObjectResponse_(arguments.callee.name,{alliance_id:alliance_id,opt_headers:opt_headers});
}

				 
/** 
* List all active player alliances
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List all alliances.
* @customfunction
*/
function alliances(opt_headers) {
  return getArrayResponse_(arguments.callee.name,{opt_headers:opt_headers});
}

				 
/** 
* Return a list of the characters assets
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character assets.
* @customfunction
*/
function characters_character_assets(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Return a list of the corporation assets
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation assets.
* @customfunction
*/
function corporations_corporation_assets(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* A list of your character's personal bookmarks
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List bookmarks.
* @customfunction
*/
function characters_character_bookmarks(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* A list of your character's personal bookmark folders
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List bookmark folders.
* @customfunction
*/
function characters_character_bookmarks_folders(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* A list of your corporation's bookmarks
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation bookmarks.
* @customfunction
*/
function corporations_corporation_bookmarks(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* A list of your corporation's bookmark folders
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List corporation bookmark folders.
* @customfunction
*/
function corporations_corporation_bookmarks_folders(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.
* @param {integer} from_event The event ID to retrieve events from.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return List calendar event summaries.
* @customfunction
*/
function characters_character_calendar(from_event, name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{from_event:from_event,name:name,opt_headers:opt_headers});
}

				 
/** 
* Get all the information for a specific event
* @param {integer} event_id The id of the event requested.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get an event.
* @customfunction
*/
function characters_character_calendar_event(event_id, name, opt_headers) {
  if(!event_id) throw 'event_id is required';
  return getObjectResponse_(arguments.callee.name,{event_id:event_id,name:name,opt_headers:opt_headers});
}

				 
/** 
* Get all invited attendees for a given event
* @param {integer} event_id The id of the event requested.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get attendees.
* @customfunction
*/
function characters_character_calendar_event_attendees(event_id, name, opt_headers) {
  if(!event_id) throw 'event_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{event_id:event_id,name:name,opt_headers:opt_headers});
}

				 
/** 
* Public information about a character
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character's public information.
* @customfunction
*/
function characters_character(opt_headers) {
  return getObjectResponse_(arguments.callee.name,{opt_headers:opt_headers});
}

				 
/** 
* Resolve a set of character IDs to character names
* @param {array} character_ids A comma separated list of character IDs.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character names.
* @customfunction
*/
function characters_names(character_ids, opt_headers) {
  if(!character_ids) throw 'character_ids is required';
  return getArrayObjectResponse_(arguments.callee.name,{character_ids:character_ids,opt_headers:opt_headers});
}

				 
/** 
* Get portrait urls for a character
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character portraits.
* @customfunction
*/
function characters_character_portrait(opt_headers) {
  return getObjectResponse_(arguments.callee.name,{opt_headers:opt_headers});
}

				 
/** 
* Get a list of all the corporations a character has been a member of
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation history.
* @customfunction
*/
function characters_character_corporationhistory(opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{opt_headers:opt_headers});
}

				 
/** 
* Return chat channels that a character is the owner or operator of
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get chat channels.
* @customfunction
*/
function characters_character_chat_channels(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return a list of medals the character has
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get medals.
* @customfunction
*/
function characters_character_medals(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return character standings from agents, NPC corporations, and factions
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get standings.
* @customfunction
*/
function characters_character_standings(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime 
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get agents research.
* @customfunction
*/
function characters_character_agents_research(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return a list of blueprints the character owns
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get blueprints.
* @customfunction
*/
function characters_character_blueprints(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Return a character's jump activation and fatigue information
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get jump fatigue.
* @customfunction
*/
function characters_character_fatigue(name, opt_headers) {
  return getObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return notifications about having been added to someone's contact list
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get new contact notifications.
* @customfunction
*/
function characters_character_notifications_contacts(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return character notifications
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character notifications.
* @customfunction
*/
function characters_character_notifications(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Returns a character's corporation roles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character corporation roles.
* @customfunction
*/
function characters_character_roles(name, opt_headers) {
  return getObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Returns a character's titles
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get character corporation titles.
* @customfunction
*/
function characters_character_titles(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Returns aggregate yearly stats for a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Yearly aggregate stats.
* @customfunction
*/
function characters_character_stats(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* A list of the character's clones
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get clones.
* @customfunction
*/
function characters_character_clones(name, opt_headers) {
  return getObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return implants on the active clone of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get active implants.
* @customfunction
*/
function characters_character_implants(name, opt_headers) {
  return getArrayResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Return contacts of a character
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contacts.
* @customfunction
*/
function characters_character_contacts(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Return contacts of a corporation
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contacts.
* @customfunction
*/
function corporations_corporation_contacts(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Return contacts of an alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance contacts.
* @customfunction
*/
function alliances_alliance_contacts(alliance_id, name, page, opt_headers) {
  if(!alliance_id) throw 'alliance_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{alliance_id:alliance_id,name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Return custom labels for contacts the character defined
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contact labels.
* @customfunction
*/
function characters_character_contacts_labels(name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,opt_headers:opt_headers});
}

				 
/** 
* Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contracts.
* @customfunction
*/
function characters_character_contracts(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Lists items of a particular contract
* @param {integer} contract_id ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contract items.
* @customfunction
*/
function characters_character_contracts_contract_items(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

				 
/** 
* Lists bids on a particular auction contract
* @param {integer} contract_id ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get contract bids.
* @customfunction
*/
function characters_character_contracts_contract_bids(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

				 
/** 
* Returns contracts available to a coporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get coporation contracts.
* @customfunction
*/
function corporations_corporation_contracts(name, page, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Lists items of a particular contract
* @param {integer} contract_id ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contract items.
* @customfunction
*/
function corporations_corporation_contracts_contract_items(contract_id, name, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{contract_id:contract_id,name:name,opt_headers:opt_headers});
}

				 
/** 
* Lists bids on a particular auction contract
* @param {integer} contract_id ID of a contract.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {integer} page Which page of results to return.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation contract bids.
* @customfunction
*/
function corporations_corporation_contracts_contract_bids(contract_id, name, page, opt_headers) {
  if(!contract_id) throw 'contract_id is required';
  return getArrayObjectResponse_(arguments.callee.name,{contract_id:contract_id,name:name,page:page,opt_headers:opt_headers});
}

				 
/** 
* Public information about a corporation
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get corporation information.
* @customfunction
*/
function corporations_corporation(opt_headers) {
  return getObjectResponse_(arguments.callee.name,{opt_headers:opt_headers});
}

				 
/** 
* Get a list of all the alliances a corporation has been a member of
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Get alliance history.
* @customfunction
*/
function corporations_corporation_alliancehistory(opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name,{opt_headers:opt_headers});
}
