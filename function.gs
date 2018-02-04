/** 
* Public information about an alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @customfunction
*/
function alliances_alliance(alliance_id, name, opt_headers) {
  return getObjectResponse_(arguments.callee.name, {alliance_id:alliance_id}, name, opt_headers)
}

				 
/** 
* List all current member corporations of an alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @customfunction
*/
function alliances_alliance_corporations(alliance_id, name, opt_headers) {
  return getArrayResponse_(arguments.callee.name, {alliance_id:alliance_id}, name, opt_headers)
}

				 
/** 
* Resolve a set of alliance IDs to alliance names
* @param {array} alliance_ids A comma separated list of alliance IDs.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @customfunction
*/
function alliances_names(alliance_ids, name, opt_headers) {
  return getArrayObjectResponse_(arguments.callee.name, {alliance_ids:alliance_ids}, name, opt_headers)
}

				 
/** 
* Get the icon urls for a alliance
* @param {integer} alliance_id An EVE alliance ID.
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @customfunction
*/
function alliances_alliance_icons(alliance_id, name, opt_headers) {
  return getObjectResponse_(arguments.callee.name, {alliance_id:alliance_id}, name, opt_headers)
}

				 
/** 
* List all active player alliances
* @param {string} name Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @customfunction
*/
function alliances(name, opt_headers) {
  return getArrayResponse_(arguments.callee.name, name, opt_headers)
}

				 
