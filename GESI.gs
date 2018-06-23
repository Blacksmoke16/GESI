// Google ESI (GESI)
//
// /u/blacksmoke16 @ Reddit
// @Blacksmoke16#0016 @ Discord
// https://discord.gg/eEAH2et
APP_VERSION = '6.0.0';
BASE_URL = 'https://esi.evetech.net'

// Setup variables used throughout script
// From your dev app https://developers.eveonline.com/applications
CLIENT_ID = 'YOUR_CLIENT_ID';
CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

// Name of your 'main' character to use when a function is called without a character name as a param
MAIN_CHARACTER = "YOUR_MAIN_CHARACTER_NAME";

CACHE = CacheService.getDocumentCache();

function onOpen() {
  SpreadsheetApp.getUi().createMenu('GESI')
    .addItem('Authorize Sheet', 'showSidebar')
    .addSeparator()
    .addItem('Check for updates', 'checkForUpdates')
    .addToUi();
}

/** 
* Parses array data into more readable format
* @param {string} endpoint_name Name of the endpoint data to be parsed is from.
* @param {string} column_name Name of the column to be parsed.
* @param {array} array Cell that holds the array data to be parsed.
* @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
* @return Parsed array data.
* @customfunction
*/
function parseArray(endpoint_name, column_name, array, opt_headers) {
  var headers = [];
  var result = [];
  var endpoint = findObjectByKey_(ENDPOINTS[endpoint_name].headers, 'name', column_name);
  if (opt_headers || undefined === opt_headers) result.push(endpoint.sub_headers.map(function(h) { return h }));

  JSON.parse(array).forEach(function(a) {
    var temp = [];
    endpoint.sub_headers.forEach(function(k) { temp.push(typeof(a) !== 'object' ? a : a[k]); });
    result.push(temp);
  });
  return result;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Private Utility Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getData_(endpoint_name, params) {
  var endpoint = ENDPOINTS[endpoint_name]
  var path = endpoint.path;
  var name = params.name;
  if (!name) name = MAIN_CHARACTER;
  
  endpoint.parameters.forEach(function(param) {
    if (param['in'] === 'path' && params[param.name]) {
      path = path.replace('{' + param.name + '}', params[param.name])
    } else if (param['in'] === 'query' && params[param.name]) {
      path += path.indexOf('?') !== -1 ? '&' : '?';
      path += param.name + '=' + (Array.isArray(params[param.name]) ? params[param.name].join(',') : params[param.name]);
    }
  });
  
  if (path.indexOf('{character_id}') !== -1) path = path.replace('{character_id}', getProperty_(name, 'character_id'));
  if (path.indexOf('{alliance_id}') !== -1) path = path.replace('{alliance_id}', getProperty_(name, 'alliance_id'));
  if (path.indexOf('{corporation_id}') !== -1) path = path.replace('{corporation_id}', getProperty_(name, 'corporation_id'));
  
  var token = CACHE.get(name + '_access_token');
  if (!token && endpoint.scope) token = refreshToken_(name);

  return doRequest_(BASE_URL + path, 'get', token);
}

function parseData_(endpoint_name, params) {
  var endpoint = ENDPOINTS[endpoint_name];
  var data = [];
  var result = [];

  var opt_headers = params.opt_headers;
  if (opt_headers || undefined === opt_headers) result.push(endpoint.headers.map(function(h) { return h.name }));

  if (params.page === -1) {
    params.page = 1;
    var response = getData_(endpoint_name, params)
    data = data.concat(response.data);

    var pages = parseInt(response.headers['x-pages']);
    for (var p = 2; p <= pages; p++) {
      params.page = p;
      data = data.concat(getData_(endpoint_name, params).data);
    }      
  } else {
   data = getData_(endpoint_name, params).data;
 }
  
 if (Array.isArray(data) && typeof(data[0]) === 'number') {
   data.forEach(function(dp) {
     result.push(dp);
   });
 } else if (Array.isArray(data) && typeof(data[0]) === 'object') {
     data.forEach(function(obj) {
       var temp = [];
       endpoint.headers.forEach(function(header) {
         temp.push(Array.isArray(obj[header.name]) ? JSON.stringify(obj[header.name]) : obj[header.name]);
       });
       result.push(temp);
     });
 } else if (typeof(data) === 'object') {
     var temp = [];
     endpoint.headers.forEach(function(header) {
       temp.push(typeof(data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]);
     });
     result.push(temp);
 } else if (typeof(data) === 'number') {
     result = [data];
 } else {
     throw new "Unexepcted data type.  Please report this on Github.";
 }
  
  return result;
}

function doRequest_(path, method, token, data) {
  var auth = token ? 'Bearer ' + token : 'Basic ' + Utilities.base64EncodeWebSafe(CLIENT_ID + ':' + CLIENT_SECRET)
  var options = {'method': method, 'muteHttpExceptions': true, headers: {'User-Agent': 'GESI user ' + SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail(),'Content-Type': 'application/json','Authorization': auth}};
  if (data) options['payload'] = JSON.stringify(data)
    var response = UrlFetchApp.fetch(path, options);
  if (response.getResponseCode() !== 200) {
    var error_body = JSON.parse(response.getContentText());
    var error = {};
    error['error'] = error_body['error'];
    error['error_description'] = error_body['error_description'];
    error['sso_status'] = error_body['sso_status'];
    error['code'] = response.getResponseCode();
    throw 'ESI response error:  ' + JSON.stringify(error);
  }
  return {data: JSON.parse(response), headers: response.getHeaders()};
}

function getProperty_(character_name, property) {
  var character_row = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auth Data').getDataRange().getValues().filter(function(r) { return r[0] === character_name });
  if (character_row.length === 0) throw character_name + " is not authed, or is misspelled.";
  return character_row[0][getValue_(property)];
}

function getValue_(property) {
  return {character_name: 0, character_id: 1, corporation_id: 2, alliance_id: 3, refresh_token: 4}[property];
}

function extend_(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

function findObjectByKey_(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Auth Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function authCallback(request) {
  var tokenData = getAccessToken_(request.parameter.code);
  var characterData = extend_(tokenData, getCharacterDetails_(tokenData['access_token']));
  var affiliationData = getCharacterAffiliation_(characterData['CharacterID'])[0];
  var userData =   extend_(characterData, affiliationData);
  cacheData_({character_name: userData['CharacterName'],character_id: userData['character_id'],corporation_id: userData['corporation_id'],alliance_id: userData['alliance_id'],refresh_token: userData['refresh_token']}, userData['access_token']);
  return HtmlService.createHtmlOutput('Thank you for using GESI ' + userData['CharacterName']);
}

function showSidebar() {
  var scriptUrl = 'https://script.google.com/macros/d/' + ScriptApp.getScriptId() + '/usercallback';
  var stateToken = ScriptApp.newStateToken().withMethod('authCallback').withTimeout(120).createToken();
  var authorizationUrl = 'https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=' + scriptUrl + '&client_id=' + CLIENT_ID + '&scope=' + SCOPES.join('+') + '&state=' + stateToken;
  var template = HtmlService.createTemplate('Click the link below to auth a character for use in GESI<br><br><a href="<?= authorizationUrl ?>" target="_blank"><img alt="Authorize with EVE SSO" src="https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png" /></a>');  
  template.authorizationUrl = authorizationUrl;
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
}

function getAccessToken_(code) {
  return doRequest_('https://login.eveonline.com/oauth/token', 'post', null, {"grant_type":"authorization_code", "code": code}).data;
}

function getCharacterDetails_(token) {
  return doRequest_('https://login.eveonline.com/oauth/verify', 'get', token).data;
}

function getCharacterAffiliation_(character_id) {
  var character_ids = [character_id];
  return doRequest_(BASE_URL + '/v1/characters/affiliation/', 'post', null, character_ids).data;
}

function refreshToken_(name) {
  var response = doRequest_('https://login.eveonline.com/oauth/token', 'post', null, {"grant_type":"refresh_token", "refresh_token": getProperty_(name, 'refresh_token')}).data;
  CACHE.put(name + '_access_token', response['access_token'], 900);
  return response['access_token'];
}

function cacheData_(userData, access_token) {
  if (!Object.keys(userData).every(function(k) { return ['character_id','corporation_id','alliance_id','character_name','refresh_token', 'access_token'].indexOf(k) !== -1 })) throw 'Required data is missing.';
  var user_data = Object.keys(userData).map(function(p) { return userData[p] });
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var authSheet = ss.getSheetByName('Auth Data');
  if (authSheet === null) {
    authSheet = ss.insertSheet('Auth Data').hideSheet();
    authSheet.deleteRows(1, authSheet.getMaxRows()-1);
    authSheet.deleteColumns(6, authSheet.getMaxColumns()-5);
    var protectedData = authSheet.protect().setDescription('Only sheet owner can view auth data');
    protectedData.removeEditors(protectedData.getEditors());
    protectedData.addEditor(ss.getOwner().getEmail());
  }
  
  var savedChars = authSheet.getDataRange().getValues().map(function(r) { return r[0] });
  var character_name = userData['character_name'];
  savedChars.indexOf(character_name) === -1 ? authSheet.appendRow(user_data) : authSheet.getRange((savedChars.indexOf(character_name) + 1), 1, 1, 5).setValues([user_data]);
  [1,2,3,4,5].forEach(function(c) { authSheet.autoResizeColumn(c) });
  CACHE.put(character_name + '_access_token', access_token, 1080);
}

function checkForUpdates()
{
  var newVersion = JSON.parse(UrlFetchApp.fetch('https://api.github.com/repos/Blacksmoke16/GESI/releases/latest'))['tag_name'];
  if (newVersion != null) {
    var message = 'You are using the latest version of GESI.';
    var title = 'No updates found';
    if (newVersion > APP_VERSION) {
      message = 'A new ';
      var newSplit = newVersion.split('.');
      var currentSplit = APP_VERSION.split('.');
      if (newSplit[0] > currentSplit[0]) { message += 'major'; } else if (newSplit[1] > currentSplit[1]) { message += 'minor'; } else if (newSplit[2] > currentSplit[2]) { message += 'patch'; }
      message += ' version of GESI is available on GitHub.';
      title = 'GESI version ' + newVersion + ' is available!';
    }
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 5);
  }
}
