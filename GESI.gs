  // Google ESI (GESI)
  // Modified version of https://github.com/googlesamples/apps-script-oauth2 to work with EVE SSO/ESI endpoints
  //
  // /u/blacksmoke16 @ Reddit
  // @Blacksmoke16#1684 @ Discord
  app_version = '0.1';
    
  // Setup variables used throughout script
    CLIENT_ID = '...';
    CLIENT_SECRET = '...';
    BASE_URL = 'https://esi.tech.ccp.is/v'
    
  // Setup endpoint and version list
endpoints = 
{
        'skillList': {'version': 3, 'url': '/characters/{character_id}/skills/'} ,
        'skillQueue': {'version': 2, 'url': '/characters/{character_id}/skillqueue/'} 
};
    

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('GESI')
      .addItem('Authorize Sheet','showSidebar')
      .addSeparator()
      .addItem('Reset Auth','clearService')
      .addToUi();
}


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
      .setScope('esi-skills.read_skills.v1')
      
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
    getCharacterDetails();
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}

function getCharacterDetails(){
  var userProperties = PropertiesService.getUserProperties();
  var eveService = getEVEService();
  var response = UrlFetchApp.fetch('https://login.eveonline.com/oauth/verify', {
    headers: {
      Authorization: 'Bearer ' + eveService.getAccessToken()
    }
  });
    response = JSON.parse(response);
    var newProperties = {character_id: response.CharacterID, characterName: response.CharacterName, expires: response.ExpiresOn};
    userProperties.setProperties(newProperties);
}


/**
 * Returns a list of Skill names, current points in skill and current level.
 * @param {option} option LIST for list of skills, TOTAL for total skill points.
 * @return Returns a list of Skill names, current points in skill and current level or total skill points.
 * @customfunction
 */
function skills(option) {
  var userProperties = PropertiesService.getUserProperties();
  var eveService = getEVEService();
  var response = UrlFetchApp.fetch(BASE_URL + endpoints.skillList.version + endpoints.skillList.url.replace("{character_id}",userProperties.getProperty('character_id')), {
    headers: {
      Authorization: 'Bearer ' + eveService.getAccessToken()
    }
  });
  
  var response = JSON.parse(response);
  option = option.toLowerCase();
  
  if(option == 'list'){
    var skills = new Array();
    var ids = new Array();
      for(var i = 0; i < response.skills.length; i++) {
      ids.push(response.skills[i].skill_id);
      skills.push([
        response.skills[i].skill_id,
        response.skills[i].current_skill_level,
        response.skills[i].skillpoints_in_skill
        ]);
    }
    
    var skill_names = id2name(ids);
     
    for(var i = 0; i < skills.length; i++)
    {
      for(var n = 0; n< skill_names.length; n++)
      {
          if(skills[i][0] == skill_names[n].id){
              skills[i][0] = skill_names[n].name
          }
       }
    }  
  }
  else if (option == 'total'){
    skills = response.total_sp;
  }
 
  return skills;
}

/**
 * Returns a list of Skill names, current points in skill and current level.
 * @param {option} option LIST for list of skills, TOTAL for total skill points.
 * @return Returns a list of Skill names, current points in skill and current level or total skill points.
 * @customfunction
 */
function skillsQueue(option) {
  var userProperties = PropertiesService.getUserProperties();
  var eveService = getEVEService();
  var response = UrlFetchApp.fetch(BASE_URL + endpoints.skillList.version + endpoints.skillList.url.replace("{character_id}",userProperties.getProperty('character_id')), {
    headers: {
      Authorization: 'Bearer ' + eveService.getAccessToken()
    }
  });
  
  var response = JSON.parse(response);
  option = option.toLowerCase();
  
  if(option == 'list'){
    var skills = new Array();
    var ids = new Array();
      for(var i = 0; i < response.skills.length; i++) {
      ids.push(response.skills[i].skill_id);
      skills.push(response.skills[i]);
    }
    
    var skill_names = id2name(ids);
     
    for(var i = 0; i < skills.length; i++)
    {
      for(var n = 0; n< skill_names.length; n++)
      {
          if(skills[i][0] == skill_names[n].id){
              skills[i][0] = skill_names[n].name
          }
       }
    }  
  }
  else if (option == 'total'){
    skills = response.total_sp;
  }
 
  return skills;
}

function id2name(ids){
 var options = {'method': 'post','contentType': 'application/json', 'payload': JSON.stringify(ids)}
 var response = UrlFetchApp.fetch('https://esi.tech.ccp.is/v2/universe/names/', options);
 return JSON.parse(response);
}


function clearService(){
  OAuth2.createService('EVE')
  .setPropertyStore(PropertiesService.getUserProperties())
  .reset();
}
