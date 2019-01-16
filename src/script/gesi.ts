/**
 * @OnlyCurrentDoc
 * Google ESI (GESI)
 * /u/blacksmoke16 @ Reddit
 * @Blacksmoke16#0016 @ Discord
 * https://discord.gg/eEAH2et
 */
import HtmlOutput = GoogleAppsScript.HTML.HtmlOutput;
import User = GoogleAppsScript.Base.User;
import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

const HEADERS: Object = { 'User-Agent': 'GESI V2', 'Content-Type': 'application/json' };

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
  return CacheService.getDocumentCache().get(`${character_name}_access_token`) || 'Expired';
}

/**
 * Returns the sheets' current MAIN_CHARACTERS
 * @return Name of the MAIN_CHARACTER
 * @customfunction
 */
function getMainCharacter(): string {
  return PropertiesService.getDocumentProperties().getProperty('MAIN_CHARACTER');
}

/**
 * Sets the sheets' MAIN_CHARACTER to the given character
 * @param {string} character_name (Required) Name of the character to use as the new MAIN_CHARACTER.
 * @return If it was successful.  Should be deleted if it was.
 * @customfunction
 */
function setMainCharacter(character_name: string): string {
  PropertiesService.getDocumentProperties().setProperty('MAIN_CHARACTER', character_name);
  return 'Done! Delete me.';
}

/**
 * Refreshes the access token for a given character and returns a new access token
 * @param {string} character_name (Required) Name of the character to refresh the token.
 * @return A new access token for the character
 * @customfunction
 */
function refreshToken(character_name: string): string {
  return refreshToken_(getCharacterRowData_(character_name));
}

function showSSOModal(): void {
  const redirectUrl = `https://script.google.com/macros/d/${ScriptApp.getScriptId()}/usercallback`;
  const stateToken = ScriptApp.newStateToken().withMethod('authCallback').withTimeout(1200).createToken();
  const authorizationUrl = `https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=${redirectUrl}&client_id=${PropertiesService.getScriptProperties().getProperty('CLIENT_ID')}&scope=${SCOPES.join('+')}&state=${stateToken}`;
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
  return HtmlService.createHtmlOutput(`Thank you for using GESI ${userData.character_name}.  You can close this tab.`);
}

function buildRequest_(endpoint: IEndpoint, character: ICharacterRowData | null, params: IFunctionParam, token: string, data: any = null): IRequest {
  let path = endpoint.path;

  endpoint.parameters.forEach((param: IParameter) => {
    if (param.in === 'path' && params[param.name]) {
      path = path.replace('{' + param.name + '}', params[param.name]);
    } else if (param.in === 'query' && params[param.name]) {
      path += path.indexOf('?') !== -1 ? '&' : '?';
      path += param.name + '=' + (Array.isArray(params[param.name]) ? params[param.name].join(',') : params[param.name]);
    } else if (param.in === 'body' && params[param.name]) {
      if (param.type.indexOf('[]') !== -1) {
        data = Array.isArray(params[param.name]) ? params[param.name].filter(function (id) {
          return id[0];
        }).map(function (id) {
          return id[0];
        }) : [params[param.name]];
      } else {
        throw param.type + ' is an unexpected body type.';
      }
    }
  });

  if (path.indexOf('{character_id}') !== -1) path = path.replace('{character_id}', character.character_id.toString());
  if (path.indexOf('{alliance_id}') !== -1) path = path.replace('{alliance_id}', character.alliance_id.toString());
  if (path.indexOf('{corporation_id}') !== -1) path = path.replace('{corporation_id}', character.corporation_id.toString());

  const request = {
    method: endpoint.method,
    url: `${PropertiesService.getScriptProperties().getProperty('BASE_URL')}${path}`,
    headers: HEADERS,
    muteHttpExceptions: true,
  } as IRequest;

  if (data) request['payload'] = JSON.stringify(data);
  if (endpoint.scope) request.headers['authorization'] = `Bearer ${token}`;
  return request;
}

function parseData_(endpoint_name: string, params: IFunctionParam): any[][] {
  const endpoint: IEndpoint = ENDPOINTS[endpoint_name];
  const character_name = (params.name || PropertiesService.getDocumentProperties().getProperty('MAIN_CHARACTER'));
  const character: ICharacterRowData = getCharacterRowData_(character_name);
  if (!character && endpoint.scope) throw `${character_name} is not authed, or is misspelled.`;
  let result: any[][] = [];
  let data: any = [];

  // Add the header row if its not set or set to true
  if (params.opt_headers || undefined === params.opt_headers) result.push(endpoint.headers.map((h: IEndpointHeader) => h.name));

  // Set the token.  Refresh it if it's expired.
  let token = CacheService.getDocumentCache().get(`${character_name}_access_token`);
  if (!token && endpoint.scope) token = refreshToken_(character);
  if (!params.version) params.version = endpoint.version;

  if (params.page === -1) {
    params.page = 1;
    const response = doRequests_([buildRequest_(endpoint, character, params, token)]);
    data = data.concat(response.data);
    const requests: IRequest[] = [];
    const pages = response.headers['x-pages'];

    for (let p = 2; p <= pages; p++) {
      params.page = p;
      requests.push(buildRequest_(endpoint, character, params, token));
    }
    data = data.concat(doRequests_(requests).data);
  } else {
    data = doRequests_([buildRequest_(endpoint, character, params, token)]).data;
  }

  if (Array.isArray(data) && typeof (data[0]) === 'number') {
    result = result.concat(data);
  } else if (Array.isArray(data) && typeof (data[0]) === 'object') {
    result = result.concat(
      data.map((obj) => {
        return endpoint.headers.map((header: IEndpointHeader) => typeof (obj[header.name]) === 'object' ? JSON.stringify(obj[header.name]) : obj[header.name]);
      }),
    );
  } else if (typeof (data) === 'object') {
    result.push(endpoint.headers.map((header: IEndpointHeader) => typeof (data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]));
  } else if (typeof (data) === 'number') {
    result = [data];
  } else {
    throw typeof (data) + ' is an unexpected type.';
  }

  return result;
}

function getAccessToken_(code: string): IAccessToken {
  const headers = HEADERS;
  headers['authorization'] = 'Basic ' + Utilities.base64EncodeWebSafe(PropertiesService.getScriptProperties().getProperty('CLIENT_ID') + ':' + PropertiesService.getScriptProperties().getProperty('CLIENT_SECRET'));
  const request: IRequest = {
    url: 'https://login.eveonline.com/v2/oauth/token',
    method: 'POST',
    headers: headers,
    payload: JSON.stringify({ grant_type: 'authorization_code', code }),
    muteHttpExceptions: true,
  };

  return doRequests_([request]).data[0] as IAccessToken;
}

function getCharacterAffiliation_(character_id: number): ICharacterAffiliation {
  const request: IRequest = {
    url: `${PropertiesService.getScriptProperties().getProperty('BASE_URL')}/v1/characters/affiliation/`,
    method: 'POST',
    headers: HEADERS,
    payload: JSON.stringify([character_id]),
    muteHttpExceptions: true,

  };
  return doRequests_([request]).data[0] as ICharacterAffiliation;
}

function parseJWT_(access_token: string): ICharacterData {
  const jwt = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
  if (jwt.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
  if (jwt.azp !== PropertiesService.getScriptProperties().getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
  return { character_name: jwt.name, character_id: jwt.sub.split(':')[2] };
}

function refreshToken_(character: ICharacterRowData | null): string {
  if (!character) throw buildError_({ body: 'Can\'t refresh token of character that isn\'t authed.' });
  const headers = HEADERS;
  headers['authorization'] = 'Basic ' + Utilities.base64EncodeWebSafe(PropertiesService.getScriptProperties().getProperty('CLIENT_ID') + ':' + PropertiesService.getScriptProperties().getProperty('CLIENT_SECRET'));
  const request: IRequest = {
    url: 'https://login.eveonline.com/v2/oauth/token',
    method: 'POST',
    headers: headers,
    payload: JSON.stringify({ grant_type: 'refresh_token', refresh_token: character.refresh_token }),
    muteHttpExceptions: true,
  };
  const response = doRequests_([request]).data[0] as IAccessToken;
  CacheService.getDocumentCache().put(character.character_name + '_access_token', response.access_token, 1080);
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
  CacheService.getDocumentCache().put(character_data[0] + '_access_token', access_token, 1080);
}

function getCharacterRowData_(character_name: string): ICharacterRowData | null {
  const character_range = getCharacterRow_(character_name);
  if (!character_range) return null;
  return {
    character_id: character_range.getCell(1, CharacterRowData.character_id + 1).getValue() as number,
    character_name: character_range.getCell(1, CharacterRowData.character_name + 1).getValue() as string,
    corporation_id: character_range.getCell(1, CharacterRowData.corporation_id + 1).getValue() as number,
    alliance_id: character_range.getCell(1, CharacterRowData.alliance_id + 1).getValue() as number,
    refresh_token: character_range.getCell(1, CharacterRowData.refresh_token + 1).getValue() as string,
  };
}

function getCharacterRow_(character_name: string): GoogleAppsScript.Spreadsheet.Range {
  const auth_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Auth Data');
  if (null === auth_sheet) return null;
  const row_index = auth_sheet.getDataRange().getValues().map(function (r) {
    return r[CharacterRowData.character_name];
  }).indexOf(character_name);
  if (-1 === row_index) return null;
  return auth_sheet.getRange(row_index + 1, 1, 1, 5);
}

function doRequests_(requests: IRequest[]): any | any[] {
  let data = [];
  const responses = UrlFetchApp.fetchAll(requests);

  responses.forEach((response: HTTPResponse, idx: number) => {
    if (response.getResponseCode() !== 200) {
      throw buildError_({
        body: response.getContentText(),
        code: response.getResponseCode(),
        path: requests[idx].url,
      });
    }

    data = data.concat(JSON.parse(response.getContentText()));
  });

  return {
    headers: responses[0] === undefined ? null : responses[0].getAllHeaders(),
    data,
  };
}

function buildError_(error: Partial<IError>): string {
  error.sheet_id = SpreadsheetApp.getActiveSpreadsheet().getId();
  error.character = getMainCharacter();
  return JSON.stringify(error);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                  Metadata
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

enum CharacterRowData { character_name, character_id, corporation_id, alliance_id, refresh_token }

interface IError {
  body: string;
  code: number;
  character: string;
  sheet_id: string;
  path?: string;
  method?: string;
}

interface IEndpoint {
  description: string;
  headers: IEndpointHeader[];
  method: string;
  path: string;
  parameters: IParameter[];
  scope?: string;
  summary: string;
  version: string;
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
  version?: string;
  name?: string;
  page?: number;

  [param: string]: any;
}

interface ICharacterRowData {
  character_id: number;
  character_name: string;
  corporation_id: number;
  alliance_id: number;
  refresh_token: string;
}

interface IRequest {
  url: string;
  method: string;
  payload?: string;
  headers: Object;
  muteHttpExceptions: boolean;
}
