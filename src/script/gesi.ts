/**
 * @OnlyCurrentDoc
 * Google ESI (GESI)
 * /u/blacksmoke16 @ Reddit
 * @Blacksmoke16#0016 @ Discord
 * https://discord.gg/eEAH2et
 */
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import HtmlOutput = GoogleAppsScript.HTML.HtmlOutput;
import User = GoogleAppsScript.Base.User;
import Range = GoogleAppsScript.Spreadsheet.Range;

const CACHE = CacheService.getDocumentCache();
const DOCUMENT_PROPERTIES = PropertiesService.getDocumentProperties();
const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const BASE_URL = SCRIPT_PROPERTIES.getProperty('BASE_URL');

function onInstall(): void {
  onOpen();
}

function onOpen(): void {
  SpreadsheetApp.getUi()
  .createAddonMenu()
  .addItem('Authorize Characters', 'showSSOModal')
  .addToUi();
}

/**
 * Parses array data into more readable format
 * @param {string} endpoint_name (Required) Name of the endpoint data to be parsed is from.
 * @param {string} column_name (Required) Name of the column to be parsed.
 * @param {array} array (Required) Cell that holds the array data to be parsed.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Parsed array data.
 * @customfunction
 */
function parseArray(endpoint_name: string, column_name: string, array: string, opt_headers: boolean): any[][] {
  let result: any[][] = [];
  const endpoint_header: IEndpointHeader = ENDPOINTS[endpoint_name].headers.find((eh: IEndpointHeader) => eh.name === column_name);
  if (opt_headers || undefined === opt_headers) result.push(endpoint_header ? endpoint_header.sub_headers : [column_name.slice(0, -1) + '_id']);

  // Kinda a hack but it works for now :shrug:
  if (!endpoint_header || !endpoint_header.hasOwnProperty('sub_headers')) {
    JSON.parse(array).forEach(function (o) {
      result.push([o]);
    });
  } else {
    JSON.parse(array).forEach((o: object) => {
      let temp: any[] = [];
      endpoint_header.sub_headers.forEach((k: string) => temp.push(Array.isArray(o[k]) ? JSON.stringify(o[k]) : o[k]));
      result.push(temp);
    });
  }

  return result;
}

/**
 * Returns a character's access_token if not expired
 * @param {string} character_name (Required) Who's access_token to fetch.
 * @return Access token
 * @customfunction
 */
function getAccessToken(character_name: string): string {
  return CACHE.get(`${character_name}_access_token`) || 'Expired';
}

/**
 * Returns the sheets' current MAIN_CHARACTERS
 * @return Name of the MAIN_CHARACTER
 * @customfunction
 */
function getMainCharacter(): string {
  return DOCUMENT_PROPERTIES.getProperty('MAIN_CHARACTER');
}

/**
 * Sets the sheets' MAIN_CHARACTER to the given character
 * @param {string} character_name (Required) Name of the character to use as the new MAIN_CHARACTER.
 * @return If it was successful.  Should be deleted if it was.
 * @customfunction
 */
function setMainCharacter(character_name: string): string {
  DOCUMENT_PROPERTIES.setProperty('MAIN_CHARACTER', name);
  return 'Done! Delete me.';
}

/**
 * Gets the raw response from the given ESI endpoint
 * @param {string} endpoint_name (Required) Name of the endpoint to fetch data from.
 * @param {string} params params to use for the request.
 * @return Hash of JSON data and headers
 * @customfunction
 */
function getRawData(endpoint_name: string, params: IFunctionParam = {} as IFunctionParam): IRequestResponse {
  return getData_(endpoint_name, params);
}

/**
 * Refreshes the access token for a given character and returns a new access token
 * @param {string} character_name (Required) Name of the character to refresh the token.
 * @return A new access token for the character
 * @customfunction
 */
function refreshToken(character_name: string): string {
  return refreshToken_(character_name);
}

function showSSOModal(): void {
  const redirectUrl = `https://script.google.com/macros/d/${ScriptApp.getScriptId()}/usercallback`;
  const stateToken = ScriptApp.newStateToken().withMethod('authCallback').withTimeout(1200).createToken();
  const authorizationUrl = 'https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=' + redirectUrl + '&client_id=' + SCRIPT_PROPERTIES.getProperty('CLIENT_ID') + '&scope=' + SCOPES.join('+') + '&state=' + stateToken;
  const template = HtmlService.createTemplate(`Click the link below to auth a character for use in GESI<br><br><a href="<?= authorizationUrl ?>" target="_blank"><img alt="Authorize with EVE SSO" src="https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png" /></a>`);
  template.authorizationUrl = authorizationUrl;
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
}

function authCallback(request): HtmlOutput {
  const tokenData = getAccessToken_(request.parameter.code);
  const characterData = parseJWT_(tokenData.access_token);
  const affiliationData = getCharacterAffiliation_(characterData.character_id);
  const userData = Object.assign(tokenData, characterData, affiliationData);
  saveCharacter_([userData.character_name, userData.character_id, userData.corporation_id, userData.alliance_id, userData.refresh_token], userData.access_token);
  return HtmlService.createHtmlOutput('Thank you for using GESI ' + userData.character_name + '.  You can close this tab.');
}

function parseData_(endpoint_name: string, params: IFunctionParam): any[][] {
  const endpoint: IEndpoint = ENDPOINTS[endpoint_name];
  let result = [];
  let data: any = [];

  if (params.opt_headers || undefined === params.opt_headers) result.push(endpoint.headers.map((h: IEndpointHeader) => h.name));

  if (-1 === params.page) {
    params.page = 1;
    let response = getData_(endpoint_name, params);
    data = data.concat(response.data);
    let page = 2;
    while (response.data.length > 0) {
      params.page = page;
      response = getData_(endpoint_name, params);
      data = data.concat(response.data);
      page++;
    }
  } else {
    data = getData_(endpoint_name, params).data;
  }

  if (Array.isArray(data) && typeof(data[0]) === 'number') {
    result = result.concat(data);
  } else if (Array.isArray(data) && typeof(data[0]) === 'object') {
    result = result.concat(
      data.map((obj) => {
        return endpoint.headers.map((header: IEndpointHeader) => typeof(obj[header.name]) === 'object' ? JSON.stringify(obj[header.name]) : obj[header.name])
      })
    )
  } else if (typeof(data) === 'object') {
    result.push(endpoint.headers.map((header: IEndpointHeader) => typeof(data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]))
  } else if (typeof(data) === 'number') {
    result = [data];
  } else {
    throw typeof(data) + ' is an unexpected type.';
  }

  return result;
}

function getData_(endpoint_name: string, params: IFunctionParam): IRequestResponse {
  const endpoint: IEndpoint = ENDPOINTS[endpoint_name];
  const character_name = params.name || DOCUMENT_PROPERTIES.getProperty('MAIN_CHARACTER');
  const character = getCharacterRow_(character_name);
  if (!character) throw character_name + ' is not authed, or is misspelled.';

  let path = endpoint.path;
  let data = null;

  endpoint.parameters.forEach((param: IParameter) => {
    if (param.in === 'path' && params[param.name]) {
      path = path.replace('{' + param.name + '}', params[param.name])
    } else if (param.in === 'query' && params[param.name]) {
      path += path.indexOf('?') !== -1 ? '&' : '?';
      path += param.name + '=' + (Array.isArray(params[param.name]) ? params[param.name].join(',') : params[param.name]);
    } else if (param.in === 'body' && params[param.name]) {
      if (param.type.indexOf('[]') !== -1) {
        data = Array.isArray(params[param.name]) ? params[param.name].filter(function (id) {
          return id[0]
        }).map(function (id) {
          return id[0];
        }) : [params[param.name]];
      } else {
        throw param.type + ' is an unexpected body type.';
      }
    }
  });

  if (path.indexOf('{character_id}') !== -1) path = path.replace('{character_id}', getProperty_(character, CharacterRowData.character_id).getValue() as string);
  if (path.indexOf('{alliance_id}') !== -1) path = path.replace('{alliance_id}', getProperty_(character, CharacterRowData.alliance_id).getValue() as string);
  if (path.indexOf('{corporation_id}') !== -1) path = path.replace('{corporation_id}', getProperty_(character, CharacterRowData.corporation_id).getValue() as string);

  let token = CACHE.get(character_name + '_access_token');
  if (!token && endpoint.scope) token = refreshToken_(character_name);

  const log_data = {
    character: character_name,
    data,
    endpoint_name,
    method: endpoint.method,
    params,
    path
  };

  const hash = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, character_name + endpoint_name + JSON.stringify(params) + JSON.stringify(data)));
  let cached_data = CACHE.get(hash + '_0');
  if (cached_data) {
    let result = [];
    let idx = 1;
    while (cached_data) {
      result = result.concat(JSON.parse(cached_data));
      cached_data = CACHE.get(hash + `_${idx}`);
      idx++;
    }
    return {data: result, headers: {}} as IRequestResponse;
  }

  try {
    const response = doRequest_(BASE_URL + path, endpoint.method, token, data);
    const date = response.headers['Expires'];
    const date_expires = new Date(response.headers['Expires']);
    const cache_time = Math.min(21600, Math.ceil((date_expires.getTime() - (new Date()).getTime()) / 1000));
    try {
      CACHE.put(hash + '_0', JSON.stringify(response.data), cache_time);
    } catch (e) {
      try {
        const chunked_data = chunkArray_(response.data as any[], 350);
        for (let i = 0; i < chunked_data.length; i++) {
          CACHE.put(hash + `_${i}`, JSON.stringify(chunked_data[i]), cache_time);
        }
      } catch (e) {
        const chunked_data = chunkArray_(response.data as any[], 75);
        for (let i = 0; i < chunked_data.length; i++) {
          CACHE.put(hash + `_${i}`, JSON.stringify(chunked_data[i]), cache_time);
        }
      } finally {
        return response;
      }
    } finally {
      return response;
    }
  } catch (e) {
    const error = JSON.parse(e);
    log_data['errors'] = error;
    throw 'ESI response error:  ' + error.error;
  } finally {
    log_(log_data);
  }
}

function getAccessToken_(code: string): IAccessToken {
  return doRequest_('https://login.eveonline.com/v2/oauth/token', 'post', null, {
    grant_type: "authorization_code",
    code
  }).data as IAccessToken;
}

function getCharacterAffiliation_(character_id: number): ICharacterAffiliation {
  return doRequest_(BASE_URL + '/v1/characters/affiliation/', 'post', null, [character_id]).data[0] as ICharacterAffiliation;
}

function parseJWT_(access_token: string): ICharacterData {
  const jwt = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
  if (jwt.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
  if (jwt.azp !== SCRIPT_PROPERTIES.getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
  return {character_name: jwt.name, character_id: jwt.sub.split(':')[2]}
}

function refreshToken_(character_name: string): string {
  const refresh_token = getProperty_(getCharacterRow_(character_name), CharacterRowData.refresh_token);
  const response = doRequest_('https://login.eveonline.com/v2/oauth/token', 'post', null, {
    grant_type: "refresh_token",
    refresh_token: refresh_token.getValue()
  }).data as IAccessToken;
  // !TODO Rotate refresh_tokens refresh_token.setValue(response.refresh_token);
  CACHE.put(character_name + '_access_token', response.access_token, 1080);
  return response.access_token;
}

function saveCharacter_(character_data: any[], access_token: string): void {
  if (!character_data[0] || !character_data[1] || !character_data[4] || !access_token) throw 'Required data is missing: ' + JSON.stringify(character_data.slice(1, -1));

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let authSheet = ss.getSheetByName('Auth Data');
  if (null === authSheet) {
    authSheet = ss.insertSheet('Auth Data').hideSheet();
    authSheet.deleteRows(1, authSheet.getMaxRows() - 1);
    authSheet.deleteColumns(6, authSheet.getMaxColumns() - 5);
    const protectedData = authSheet.protect().setDescription('Only sheet owner can view auth data');
    protectedData.removeEditors(protectedData.getEditors().map((u: User) => u.getEmail()));
    protectedData.addEditor(ss.getOwner().getEmail());
  }

  const character_row = getCharacterRow_(character_data[0]);
  character_row ? character_row.setValues([character_data]) : authSheet.appendRow(character_data);
  authSheet.autoResizeColumns(1, 5);
  if (!getMainCharacter()) setMainCharacter(character_data[0]);
  CACHE.put(character_data[0] + '_access_token', access_token, 1080)
}

function getCharacterRow_(character_name: string): Range {
  const auth_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auth Data');
  const row_index = auth_sheet.getDataRange().getValues().map(function (r) {
    return r[CharacterRowData.character_name];
  }).indexOf(character_name);
  try {
    return auth_sheet.getRange(row_index + 1, 1, 1, 5);
  } catch (e) {
    return null;
  }
}

function getProperty_(character: Range, property: number): Range {
  return character.getCell(1, property + 1);
}

function chunkArray_(array: any[], chunk_size: number): any[][] {
  return array.reduce((a, b, i, g) => !(i % chunk_size) ? a.concat([g.slice(i, i + chunk_size)]) : a, []);
}

function doRequest_(path: string, method: string, token: string, data: any): IRequestResponse {
  const auth = token ? 'Bearer ' + token : 'Basic ' + Utilities.base64EncodeWebSafe(SCRIPT_PROPERTIES.getProperty('CLIENT_ID') + ':' + SCRIPT_PROPERTIES.getProperty('CLIENT_SECRET'));
  const options = {
    method,
    muteHttpExceptions: true,
    headers: {'User-Agent': 'GESI V2', 'Content-Type': 'application/json', 'Authorization': auth}
  } as URLFetchRequestOptions;
  if (data) options['payload'] = JSON.stringify(data);
  const response = UrlFetchApp.fetch(path, options);
  if (response.getResponseCode() !== 200) {
    const error_body = JSON.parse(response.getContentText());
    if (path.indexOf('login.eveonline.com') !== -1) {
      log_({
        endpoint_name: 'Auth',
        errors: error_body,
        method,
        params: {},
        path
      });
    }
    throw JSON.stringify({
      error: error_body['error'],
      code: response.getResponseCode(),
      error_description: error_body['error_description'],
      sso_status: error_body['sso_status']
    });
  }
  return {data: JSON.parse(response.getContentText()), headers: response.getHeaders()};
}

function log_(object) {
  const user = SCRIPT_PROPERTIES.getProperty('DB_USER');
  const userPwd = SCRIPT_PROPERTIES.getProperty('DB_PASSWORD');
  const dbUrl = 'jdbc:mysql://' + SCRIPT_PROPERTIES.getProperty('DB_URL');

  try {
    const conn = Jdbc.getConnection(dbUrl, user, userPwd);
  } catch (e) {
    return;
  }

  const stmt = conn.prepareStatement('INSERT INTO gesi_log (endpoint_name, `character`, main_character, sheet_id, method, `path`, params, data, errors) VALUES (?,?,?,?,?,?,?,?,?);');
  stmt.setString(1, object.endpoint_name);
  stmt.setString(2, object.character);
  DOCUMENT_PROPERTIES.getProperty('MAIN_CHARACTER') ? stmt.setString(3, DOCUMENT_PROPERTIES.getProperty('MAIN_CHARACTER')) : stmt.setNull(3, 0);
  stmt.setString(4, SpreadsheetApp.getActiveSpreadsheet().getId());
  stmt.setString(5, object.method);
  stmt.setString(6, object.path);
  stmt.setString(7, JSON.stringify(object.params));
  object.data ? stmt.setString(8, JSON.stringify(object.data)) : stmt.setNull(8, 0);
  object.errors ? stmt.setString(9, JSON.stringify(object.errors)) : stmt.setNull(9, 0);
  stmt.execute();
  stmt.close();
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Metadata
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

enum CharacterRowData { character_name, character_id, corporation_id, alliance_id, refresh_token }

interface IEndpoint {
  description: string;
  headers: IEndpointHeader[];
  method: string;
  path: string;
  parameters: IParameter[];
  scope?: string;
  summary: string;
}

interface IParameter {
  description: string;
  in: string;
  name: string;
  type: string
  required: boolean;
}

interface IEndpointHeader {
  name: string;
  sub_headers?: string[];
}

interface IRequestResponse {
  data: IAccessToken | ICharacterAffiliation | string;
  headers: object
}

interface IAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
}

interface ICharacterData {
  character_id: number;
  character_name: number;
}

interface ICharacterAffiliation {
  alliance_id: number;
  corporation_id: number;
  character_id: number;
  faction_id?: number;
}

interface IFunctionParam {
  opt_headers: boolean;
  name?: string;
  page?: number;

  [param: string]: any;
}
