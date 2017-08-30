  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.0.0.1';

  // Setup variables used throughout script
  CLIENT_ID = '7c382c66a6c8487d8b64e50daad86f9b';
  CLIENT_SECRET = 'CwcYrVs05AtIbqZkJH8OrBPYps6MAH72qQ1Gf68t';
  BASE_URL = 'https://esi.tech.ccp.is/v'
  
  CHARACTERS = ['Blacksmoke16', 'Sir Johnson Ostus'];
  
  AUTHING_CHARACTER = CHARACTERS[0];

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //                                                                                                  OAth2  Functions
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
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
          return HtmlService.createHtmlOutput('Success! You can close this tab.');
      } else {
          return HtmlService.createHtmlOutput('Denied. You can close this tab');
      }
  }
  
function createOAuthForUser(user){
 return OAuth2.createService(user)
          .setAuthorizationBaseUrl('https://login.eveonline.com/oauth/authorize/')
          .setTokenUrl('https://login.eveonline.com/oauth/token')
          .setClientId(CLIENT_ID)
          .setClientSecret(CLIENT_SECRET)
          .setCallbackFunction('authCallback')
          .setPropertyStore(PropertiesService.getUserProperties())
          .setScope('esi-contracts.read_character_contracts.v1 esi-industry.read_character_jobs.v1 esi-characters.read_blueprints.v1 esi-markets.read_character_orders.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-markets.structure_markets.v1 esi-characters.read_contacts.v1 esi-assets.read_assets.v1 esi-characters.read_loyalty.v1 esi-wallet.read_character_wallet.v1 esi-ui.write_waypoint.v1')
          .setTokenHeaders({
              'Authorization': 'Basic ' + Utilities.base64Encode(CLIENT_ID + ':' + CLIENT_SECRET)
          })  
}

  function clearService() {
    for( var i = 0; i < CHARACTERS.length; i++) {
    Logger.log(CHARACTERS[i]);
      OAuth2.createService(CHARACTERS[i])
          .setPropertyStore(PropertiesService.getUserProperties())
          .reset();
    }
  }
  
  function getCharacterId(name) {
      var userProperties = PropertiesService.getUserProperties();
      var eveService = createOAuthForUser(name);
      var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/verify', {
          headers: {
              Authorization: 'Bearer ' + eveService.getAccessToken()
          }
      });
      response = JSON.parse(response);
      return response.CharacterID;
 }
