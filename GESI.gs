// Google ESI (GESI)
//
// /u/blacksmoke16 @ Reddit
// @Blacksmoke16#1684 @ Discord
app_version = '4.0.0';
BASE_URL = 'https://esi.tech.ccp.is'

// Your email address
// This is used and sent in the User-Agent header on ESI requests so that CCP know who that request came from.
// In the case of a users' specific script is putting too much load on their servers they have a way to contact you.
// I do not see this or use it in any way.
EMAIL = 'YOUR_EMAIL';

// Setup variables used throughout script
// From your dev app https://developers.eveonline.com/applications
CLIENT_ID = 'YOUR_CLIENT_ID';
CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

// From the script editor -> file -> project properties -> Script ID
SCRIPT_ID = 'YOUR_SCRIPT_ID';

// Array of character names
// Used for authing
CHARACTERS = ['YOUR_CHARACTER_NAME'];

// Current 'main' character used when a function is called without a character name as a param
// Also acts as what character from the CHARACTERS array will be authed
AUTHING_CHARACTER = CHARACTERS[0];

// List of scopes to request
SCOPES = [
  "esi-alliances.read_contacts.v1",
  "esi-assets.read_assets.v1",
  "esi-assets.read_corporation_assets.v1",
  "esi-bookmarks.read_character_bookmarks.v1",
  "esi-bookmarks.read_corporation_bookmarks.v1",
  "esi-calendar.read_calendar_events.v1",
  "esi-calendar.respond_calendar_events.v1",
  "esi-characters.read_agents_research.v1",
  "esi-characters.read_blueprints.v1",
  "esi-characters.read_chat_channels.v1",
  "esi-characters.read_contacts.v1",
  "esi-characters.read_corporation_roles.v1",
  "esi-characters.read_fatigue.v1",
  "esi-characters.read_fw_stats.v1",
  "esi-characters.read_loyalty.v1",
  "esi-characters.read_medals.v1",
  "esi-characters.read_notifications.v1",
  "esi-characters.read_opportunities.v1",
  "esi-characters.read_standings.v1",
  "esi-characters.read_titles.v1",
  "esi-characters.write_contacts.v1",
  "esi-characterstats.read.v1",
  "esi-clones.read_clones.v1",
  "esi-clones.read_implants.v1",
  "esi-contracts.read_character_contracts.v1",
  "esi-contracts.read_corporation_contracts.v1",
  "esi-corporations.read_blueprints.v1",
  "esi-corporations.read_contacts.v1",
  "esi-corporations.read_container_logs.v1",
  "esi-corporations.read_corporation_membership.v1",
  "esi-corporations.read_divisions.v1",
  "esi-corporations.read_facilities.v1",
  "esi-corporations.read_fw_stats.v1",
  "esi-corporations.read_medals.v1",
  "esi-corporations.read_outposts.v1",
  "esi-corporations.read_standings.v1",
  "esi-corporations.read_starbases.v1",
  "esi-corporations.read_structures.v1",
  "esi-corporations.read_titles.v1",
  "esi-corporations.track_members.v1",
  "esi-corporations.write_structures.v1",
  "esi-fittings.read_fittings.v1",
  "esi-fittings.write_fittings.v1",
  "esi-fleets.read_fleet.v1",
  "esi-fleets.write_fleet.v1",
  "esi-industry.read_character_jobs.v1",
  "esi-industry.read_character_mining.v1",
  "esi-industry.read_corporation_jobs.v1",
  "esi-industry.read_corporation_mining.v1",
  "esi-killmails.read_corporation_killmails.v1",
  "esi-killmails.read_killmails.v1",
  "esi-location.read_location.v1",
  "esi-location.read_online.v1",
  "esi-location.read_ship_type.v1",
  "esi-mail.organize_mail.v1",
  "esi-mail.read_mail.v1",
  "esi-mail.send_mail.v1",
  "esi-markets.read_character_orders.v1",
  "esi-markets.read_corporation_orders.v1",
  "esi-markets.structure_markets.v1",
  "esi-planets.manage_planets.v1",
  "esi-planets.read_customs_offices.v1",
  "esi-search.search_structures.v1",
  "esi-skills.read_skillqueue.v1",
  "esi-skills.read_skills.v1",
  "esi-ui.open_window.v1",
  "esi-ui.write_waypoint.v1",
  "esi-universe.read_structures.v1",
  "esi-wallet.read_character_wallet.v1",
  "esi-wallet.read_corporation_wallets.v1"
];
 
function onOpen() {
    SpreadsheetApp.getUi().createMenu('GESI')
        .addItem('Authorize Sheet', 'showSidebar')
        .addSeparator()
        .addItem('Reset Auth', 'resetAuth')
        .addToUi();

}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Private Utility Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getData_(endpoint_name, params) {
    var authed = ENDPOINTS[endpoint_name].authed;
    var documentProperties = PropertiesService.getDocumentProperties();
    var path = ENDPOINTS[endpoint_name].path;
    var cache = CacheService.getDocumentCache();
    var name = params.name;
    if (!name) name = AUTHING_CHARACTER;
    
    ENDPOINTS[endpoint_name].parameters.forEach(function(param) {
        if (param['in'] === 'path' && params[param.name]) {
          path = path.replace('{' + param.name + '}', params[param.name])
        } else if (param['in'] === 'query' && params[param.name]) {
          path += path.indexOf('?') !== -1 ? '&' : '?';
          path += param.name + '=' + (Array.isArray(params[param.name]) ? params[param.name].join(',') : params[param.name]);
        }
    });
    
    if (path.indexOf('{character_id}') !== -1) path = path.replace('{character_id}', parseInt(documentProperties.getProperty(name + '_character_id')));
    if (path.indexOf('{alliance_id}') !== -1) path = path.replace('{alliance_id}', parseInt(documentProperties.getProperty(name + '_alliance_id')));
    if (path.indexOf('{corporation_id}') !== -1 && endpoint_name !== 'corporationLoyalty') path = path.replace('{corporation_id}', parseInt(documentProperties.getProperty(name + '_corporation_id')));

    if (!authed) return JSON.parse(UrlFetchApp.fetch(BASE_URL + path));
    
    var token = cache.get(name + '_access_token');
    if (!token) token = refreshToken_(name);

    var response = UrlFetchApp.fetch(BASE_URL + path, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
        
    return JSON.parse(response);
}

function parseData_(endpoint_name, params) {
    var data = getData_(endpoint_name, params);
    var endpoint = ENDPOINTS[endpoint_name];
    var result = [];
    
    var opt_headers = params.opt_headers;
    if (opt_headers || undefined === opt_headers) result.push(endpoint.headers)
    
    if (endpoint.response_type === 'array' && endpoint.item_type === 'object') {
        data.forEach(function(obj) {
            var temp = [];
            ENDPOINTS[endpoint_name].headers.forEach(function(header) {
                temp.push(obj[header]);
            });
           result.push(temp);
        });
    } else if (endpoint.response_type === 'object' && endpoint.item_type === 'object') {
        var temp = [];
        endpoint.headers.forEach(function(header) {
            temp.push(data[header]);
        });
      result.push(temp);
    } else if (endpoint.response_type === 'array' && endpoint.item_type === 'integer') {
        data.forEach(function(dp) {
            result.push(dp);
        });
    } else if (endpoint.response_type === 'integer' || endpoint.response_type === 'number') {
        result.push(data);        
    }
      
    return result;
}

function extend_(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Auth  Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function authCallback(request) {
    var tokenData = getAccessToken_(request.parameter.code);
    var characterData = extend_(tokenData, getCharacterDetails_(tokenData['access_token']));
    var affiliationData = getCharacterAffiliation_(characterData['CharacterID'])[0];
    var userData =   extend_(characterData, affiliationData);
    cacheData_(userData);
    return HtmlService.createHtmlOutput('Thank you for using GESI ' + userData['CharacterName']);
}

function showSidebar() {
    var scriptUrl = 'https://script.google.com/macros/d/' + SCRIPT_ID + '/usercallback';
    var stateToken = ScriptApp.newStateToken().withMethod('authCallback').withTimeout(3600).createToken();
    var authorizationUrl = 'https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=' + scriptUrl + '&client_id=' + CLIENT_ID + '&scope=' + SCOPES.join('+') + '&state=' + stateToken;
    var template = HtmlService.createTemplate('<br><a href="<?= authorizationUrl ?>" target="_blank">Authorize:  <?= character ?></a>.');
    template.authorizationUrl = authorizationUrl;
    template.character = AUTHING_CHARACTER;
    SpreadsheetApp.getUi().showSidebar(template.evaluate());
}

function doRequest_(path, method, token, data) {
    var auth = token ? 'Bearer ' + token : 'Basic ' + Utilities.base64EncodeWebSafe(CLIENT_ID + ':' + CLIENT_SECRET)
    var options = {'method': method, headers: {'User-Agent': 'GESI user ' + EMAIL,'Content-Type': 'application/json','Authorization': auth}};
    if (data) options['payload'] = JSON.stringify(data);
    return JSON.parse(UrlFetchApp.fetch(path, options));
}

function getAccessToken_(code) {
    return doRequest_('https://login.eveonline.com/oauth/token', 'post', null, {"grant_type":"authorization_code", "code": code});
}

function getCharacterDetails_(token) {
    return doRequest_('https://login.eveonline.com/oauth/verify', 'get', token);
}

function getCharacterAffiliation_(character_id) {
    var character_ids = [character_id];
    return doRequest_(BASE_URL + '/v1/characters/affiliation/', 'post', null, character_ids);
}

function refreshToken_(name) {
    var documentProperties = PropertiesService.getDocumentProperties();
    var cache = CacheService.getDocumentCache();
    var response = JSON.parse(doRequest('https://login.eveonline.com/oauth/token', 'post', null, {"grant_type":"refresh_token", "refresh_token": documentProperties.getProperty(name + '_refresh_token')}));
    cache.put(name + '_access_token', response['access_token'], 900);
    return response;
}

function cacheData_(userData) {
    var documentProperties = PropertiesService.getDocumentProperties();
    var cache = CacheService.getDocumentCache();
    var userProperties = {};
    prefix = userData['CharacterName'] + '_';
    ['character_id', 'corporation_id', 'alliance_id', 'CharacterName', 'refresh_token']
      .forEach(function(param) { userProperties[prefix + param] = userData[param]; });
    cache.put(prefix + 'access_token', userData['access_token'], 900);
    documentProperties.setProperties(userProperties );
}

function resetAuth() {
    var documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.deleteAllProperties();
}
