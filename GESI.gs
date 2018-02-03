// Google ESI (GESI)
//
// /u/blacksmoke16 @ Reddit
// @Blacksmoke16#1684 @ Discord
app_version = '4.0.0';
BASE_URL = 'https://esi.tech.ccp.is/v'

// Setup variables used throughout script
// From your dev app https://developers.eveonline.com/applications
CLIENT_ID = 'YOUR_CLIENT_ID';
CLIENT_SECRET = 'YOUR_CLIENT_SECRET;

// From the script editor -> file -> project properties -> Script ID
SCRIPT_ID = 'YOUR_SCRIPT_ID';

// Array of character names
// Used for authing
CHARACTERS = ['Blacksmoke16'];

// Current 'main' character used when a function is called without a character name as a param
// Also acts as what character from the CHARACTERS array will be authed
AUTHING_CHARACTER = CHARACTERS[0];

// List of scopes to request
SCOPES = [
  'esi-corporations.read_standings.v1',
  'esi-corporations.read_corporation_membership.v1',
  'esi-corporations.track_members.v1',
  'esi-industry.read_corporation_jobs.v1',
  'esi-corporations.read_structures.v1',
  'esi-industry.read_corporation_mining.v1',
  'esi-industry.read_character_mining.v1',
  'esi-assets.read_corporation_assets.v1',
  'esi-universe.read_structures.v1',
  'esi-wallet.read_corporation_wallets.v1',
  'esi-calendar.read_calendar_events.v1',
  'esi-bookmarks.read_character_bookmarks.v1',
  'esi-contracts.read_character_contracts.v1',
  'esi-industry.read_character_jobs.v1',
  'esi-characters.read_blueprints.v1',
  'esi-markets.read_character_orders.v1',
  'esi-planets.manage_planets.v1',
  'esi-skills.read_skills.v1',
  'esi-skills.read_skillqueue.v1',
  'esi-markets.structure_markets.v1',
  'esi-characters.read_contacts.v1',
  'esi-assets.read_assets.v1',
  'esi-characters.read_loyalty.v1',
  'esi-wallet.read_character_wallet.v1',
  'esi-ui.write_waypoint.v1',
  'esi-bookmarks.read_corporation_bookmarks.v1',
  'esi-contracts.read_corporation_contracts.v1',
  'esi-alliances.read_contacts.v1'
];

function onOpen() {
    SpreadsheetApp.getUi().createMenu('GESI')
        .addItem('Authorize Sheet', 'showSidebar')
        .addSeparator()
        .addItem('Reset Auth', 'clearService')
        .addToUi();

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
  var scriptUrl = 'https://script.google.com/macros/d/1Lw-OdHtIxbokIng4ZcjwWYnHgLU_tmx6KnyHtZ9aR9QaT7TH6Ru9eQZv/usercallback';
  var stateToken = ScriptApp.newStateToken().withMethod('authCallback').withTimeout(3600).createToken();
  var authorizationUrl = 'https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=' + scriptUrl + '&client_id=' + CLIENT_ID + '&scope=' + SCOPES.join('+') + '&state=' + stateToken;
  var template = HtmlService.createTemplate('<br><a href="<?= authorizationUrl ?>" target="_blank">Authorize:  <?= character ?></a>.');
  template.authorizationUrl = authorizationUrl;
  template.character = AUTHING_CHARACTER;
  SpreadsheetApp.getUi().showSidebar(template.evaluate());
}

function getAccessToken_(code) {
  var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/token', {
    'method' : 'post',
    headers: {
      'User-Agent': 'GESI ' + Session.getEffectiveUser().getEmail(),
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Utilities.base64EncodeWebSafe(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    'payload' : JSON.stringify({"grant_type":"authorization_code", "code": code})
  });
  return JSON.parse(response);
}

function getCharacterDetails_(token) {
  var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/verify', {
      headers: {
        'User-Agent': 'GESI user: ' + Session.getEffectiveUser().getEmail(),
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
  });
  return JSON.parse(response);
}

function getCharacterAffiliation_(character_id) {
  var character_ids = [];
  character_ids.push(character_id);
  var response = UrlFetchApp.fetch(BASE_URL + '1/characters/affiliation/', {
    'method' : 'post',
    headers: {
      'User-Agent': 'GESI ' + Session.getEffectiveUser().getEmail(),
      'Content-Type': 'application/json',
      },
     'payload' : JSON.stringify(character_ids)
  });
  return JSON.parse(response);
}

function cacheData_(userData) {
  var documentProperties = PropertiesService.getDocumentProperties();
  var cache = CacheService.getDocumentCache();
  var userProperties = {};
  prefix = userData['CharacterName'] + '_';
  ['character_id', 'corporation_id', 'alliance_id', 'CharacterName', 'refresh_token']
    .forEach(function(param) { userProperties[prefix + param] = userData[param]; });
  cache.put(prefix + 'access_token', userData['access_token'], 1200);
  documentProperties.setProperties(userProperties );
}

function resetAuth() {
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.deleteAllProperties();
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Utility Private  Functions
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function extend_(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}
