/**
 * @OnlyCurrentDoc
 * Google ESI (GESI)
 * /u/blacksmoke16 @ Reddit
 * @Blacksmoke16#0016 @ Discord
 * https://discord.gg/eEAH2et
 */
import OAuth2Service = GoogleAppsScriptOAuth2.OAuth2Service;
import CacheService = GoogleAppsScript.Cache.CacheService;
import URLFetchRequest = GoogleAppsScript.URL_Fetch.URLFetchRequest;
import HtmlOutput = GoogleAppsScript.HTML.HtmlOutput;
import AppsScriptHttpRequestEvent = GoogleAppsScript.Events.AppsScriptHttpRequestEvent;
import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import Properties = GoogleAppsScript.Properties.Properties;

type ParameterType = 'path' | 'parameters' | 'body' | 'query';

function getScriptProperties_(): Properties {
  return PropertiesService.getScriptProperties();
}

function getDocumentProperties_(): Properties {
  return PropertiesService.getDocumentProperties();
}

function getDocumentCache_(): GoogleAppsScript.Cache.Cache {
  const cache = CacheService.getDocumentCache();

  if (!cache) {
    throw new Error('BUG: Null cache');
  }

  return cache;
}

function setCharacters_(characterMap: ICharacterMap): void {
  getDocumentProperties_().setProperty('characters', JSON.stringify(characterMap));
}

function setMainCharacter_(characterName: string): void {
  getDocumentProperties_().setProperty('MAIN_CHARACTER', characterName);
}

function onInstall(): void {
  onOpen();
}

function onOpen(): void {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem('Authorize Character', 'showSSOModal')
    .addItem('Deauthorize Character', 'deauthorizeCharacter')
    .addItem('Set Main Character', 'setMainCharacter')
    .addToUi();
}

function showSSOModal(): void {
  const template = HtmlService.createTemplateFromFile('authorize');
  template.authorizationUrl = getOAuthService_(Utilities.getUuid()).getAuthorizationUrl();
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
}

function deauthorizeCharacter(): void {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Deauthorize Character', 'Enter the name of the character you wish to deauthorize.', ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const character = getCharacterData(response.getResponseText());
  const characterMap = getAuthenticatedCharacters();

  // Delete their oauth lib
  const oauthClient = getOAuthService_(character.id);
  oauthClient.reset();

  // Remove the character from the characters hash
  delete characterMap[character.name];

  setCharacters_(characterMap);

  ui.alert(`Successfully deauthorized ${character.name}.`);
}

function setMainCharacter() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Set Main Character', 'Enter the name of the character you wish to use as your main.', ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const character = getCharacterData(response.getResponseText());

  setMainCharacter_(character.name);

  ui.alert(`${character.name} is now your main character.`);
}

/**
 * Parses array data into more readable format
 * @param {string} endpoint_name (Required) Name of the endpoint data to be parsed is from.
 * @param {string} column_name (Required) Name of the column to be parsed.
 * @param {string} data (Required) Cell that holds the data to be parsed.
 * @param {boolean} opt_headers Default: True, Boolean if column headings should be listed or not.
 * @return Parsed array data.
 * @customfunction
 */
function parseArray(endpoint_name: string, column_name: string, data: string, opt_headers: boolean): any[][] {
  let result: any[][] = [];
  const endpoint_header: IHeader = ENDPOINTS[endpoint_name].headers.find((eh: IHeader) => eh.name === column_name)!;
  if (opt_headers || undefined === opt_headers) result.push(endpoint_header ? endpoint_header.sub_headers! : [column_name.slice(0, -1) + '_id']);

  // Kinda a hack but it works for now :shrug:
  if (!endpoint_header || !endpoint_header.hasOwnProperty('sub_headers')) {
    JSON.parse(data).forEach((o: any) => result.push([o]));
  } else {
    JSON.parse(data).forEach((o: any) => {
      let temp: any[] = [];
      endpoint_header.sub_headers!.forEach((k: string) => temp.push(Array.isArray(o[k]) ? JSON.stringify(o[k]) : o[k]));
      result.push(temp);
    });
  }

  return result;
}

/**
 * @return The character that will be used by default for authenticated endpoints.
 * @customfunction
 */
function getMainCharacter(): string | null {
  return getDocumentProperties_().getProperty('MAIN_CHARACTER');
}

/**
 * @param {string} characterName The name of the character to get the token for.  Defaults the the main character.
 * @return {string} The access token for the provided characterName
 */
function getAccessToken(characterName?: string): string {
  return getOAuthService_(characterNameToId_(characterName || getMainCharacter())).getAccessToken();
}

/**
 * @return {ICharacterMap} An object representing the characters that have been authenticated
 */
function getAuthenticatedCharacters(): ICharacterMap {
  return JSON.parse(getDocumentProperties_().getProperty('characters') || '{}');
}

/**
 * @return {string[] | null} An array of character names that have authenticated, or null if none have been.
 * @customfunction
 */
function getAuthenticatedCharacterNames(): string[] | null {
  const characters = Object.keys(getAuthenticatedCharacters());
  return characters.length === 0 ? null : characters;
}

/**
 * @param {string} characterName The name of the character
 * @return {IAuthenticatedCharacter} A metadata object for this character
 * @customfunction
 */
function getCharacterData(characterName: string | null): IAuthenticatedCharacter {
  const characterMap = getAuthenticatedCharacters();
  if (!characterName) throw new Error('No characters have been authenticated.  Visit Add-ons => GEST => Authorize Character to do so.');
  if (!characterMap.hasOwnProperty(characterName)) throw new Error(`${characterName} is not authed, or is misspelled.`);
  return characterMap[characterName];
}

function invoke_(endpointName: string, params: IFunctionParam): SheetsArray {
  return prepareRequest_(endpointName, params).call(params);
}

/**
 * Returns the data from the provided endpointName for each character as one list
 *
 * @param {string} endpointName The name of the endpoint that should be invoked
 * @param {string | string[]} characterNames A single, comma separated, or vertical range of character names
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return
 * @customfunction
 */
function invokeMultiple(endpointName: string, characterNames: string | string[] | string[][], params: IFunctionParam = { show_column_headings: true }): SheetsArray {
  let normalizedNames: string[];

  if (Array.isArray(characterNames)) {
    // @ts-ignore
    normalizedNames = Array.isArray(characterNames[0]) ? characterNames.map((row: any) => row[0]) : characterNames;
  } else {
    normalizedNames = characterNames.split(',');
  }

  const firstCharacter = normalizedNames.shift();

  const result = invoke_(endpointName, { ...params, name: firstCharacter });

  const headers = result[0];
  headers.push('character_name');

  result.forEach((item: any, idx: number) => {
    if (idx > 0) item.push(firstCharacter);
  });

  normalizedNames.forEach((name: string) => {
    const subResults = invoke_(endpointName, { ...params, name, show_column_headings: false });

    subResults.forEach((item: any) => {
      item.push(name);
      result.push(item);
    });
  });

  return result;
}

/**
 * Return the raw JSON data related to an ESI call
 *
 * @param {string} endpointName The name of the endpoint that should be invoked
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return The raw JSON response from the provided endpointName
 * @customfunction
 */
function invokeRaw(endpointName: string, params: IFunctionParam = {} as IFunctionParam): any {
  return prepareRequest_(endpointName, params).callRaw(params);
}

function prepareRequest_(endpointName: string, params: IFunctionParam) {
  const characterData = getCharacterData(params.name || getMainCharacter());
  const oauthService = getOAuthService_(characterData.id);
  return new ESIRequest(endpointName, oauthService, characterData);
}

class ESIRequest {
  private endpoint: IEndpoint;
  private oauthClient: OAuth2Service;
  private characterData: ICharacterData;

  public static parseToken(access_token: string): IToken {
    const jwtToken: IToken = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
    if (jwtToken.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
    if (jwtToken.azp !== getScriptProperties_().getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
    return jwtToken;
  }

  private static addQueryParam(path: string, paramName: string, paramValue: any): string {
    path += path.includes('?') ? '&' : '?';
    path += paramName + '=' + (Array.isArray(paramValue) ? paramValue.join(',') : paramValue);
    return path;
  }

  constructor(endpointName: string, oauthClient: OAuth2Service, characterData: ICharacterData) {
    if (!ENDPOINTS.hasOwnProperty(endpointName)) {
      throw new Error(`Unknown endpoint: '${endpointName}'`);
    }

    this.endpoint = ENDPOINTS[endpointName];
    this.oauthClient = oauthClient;
    this.characterData = characterData;
  }

  public call(params: IFunctionParam, payload: any = null): SheetsArray {
    const data: any = this.doRequest(params, payload);

    let result: SheetsArray = [];

    // Add the header row if its not set, or set to true
    if (params.show_column_headings) this.appendHeaders(result);

    if (Array.isArray(data) && isFinite(data[0])) {
      result = result.concat(data);
    } else if (Array.isArray(data) && data instanceof Object) {
      result = result.concat(
        data.map((obj) => {
          return this.endpoint.headers.map((header: IHeader) => typeof (obj[header.name]) === 'object' ? JSON.stringify(obj[header.name]) : obj[header.name]);
        }),
      );
    } else if (data instanceof Object) {
      result.push(this.endpoint.headers.map((header: IHeader) => typeof (data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]));
    } else if (isFinite(data)) {
      result.push([data]);
    }

    return result;
  }

  public callRaw<T>(params: IFunctionParam, payload: any = null): T | T[] {
    return this.doRequest<T>(params, payload);
  }

  private appendHeaders(result: SheetsArray): void {
    result.push(this.endpoint.headers.map((header: IHeader) => header.name));
  }

  private doRequest<T>(params: IFunctionParam, payload: any = null): T | T[] {
    const request = this.buildRequest(params, payload);

    const response: HTTPResponse = UrlFetchApp.fetchAll([request])[0];
    const headers = response.getHeaders();

    // If the request was not successful, raise an error
    if (response.getResponseCode() !== 200) {
      throw new Error(response.getContentText());
    }

    // Log a warning if a route returns a warning
    if (headers.hasOwnProperty('Warning')) console.warn(headers['Warning']);

    // If the route is not paginated, just return the first response
    if (!this.endpoint.paginated) return JSON.parse(response.getContentText());

    // If the route is paginated but only has one page, just return it
    if (headers.hasOwnProperty('x-pages') && parseInt(headers['x-pages']) === 1) return JSON.parse(response.getContentText());

    // Otherwise, if there are more than 1 page, issue additional requests to fetch all the pages
    const result = JSON.parse(response.getContentText());

    const totalPages = parseInt(headers['x-pages']);
    const requests = [];

    for (let p = 2; p <= totalPages; p++) {
      params.page = p;
      requests.push(this.buildRequest(params, payload));
    }

    return result.concat(...UrlFetchApp.fetchAll(requests).map((response: HTTPResponse) => JSON.parse(response.getContentText())));
  }

  private buildRequest(params: IFunctionParam, payload: any = null): URLFetchRequest {
    let path = this.endpoint.path;

    // Process this endpoint's parameters
    this.endpoint.parameters.forEach((param: IParameter) => {
      const paramValue = params[param.name];

      if (param.in === 'path' && paramValue) {
        path = path.replace(`{${param.name}}`, paramValue);
      } else if (param.in === 'query' && paramValue) {
        path = ESIRequest.addQueryParam(path, param.name, paramValue);
      } else if (param.in === 'body' && paramValue) {
        if (param.type.includes('[]')) {
          payload = !Array.isArray(paramValue) ?
            [paramValue] :
            paramValue.filter((item: any) => item[0]).map((item: any) => item[0]);
        } else {
          throw param.type + ' is an unexpected body type.';
        }
      }
    });

    // Add the page param if set
    if (params.page) {
      path = ESIRequest.addQueryParam(path, 'page', params.page);
    }

    if (this.endpoint.scope) {
      if (this.characterData.alliance_id && path.includes('{alliance_id}')) path = path.replace('{alliance_id}', this.characterData.alliance_id.toString());
      if (path.includes('{character_id}')) path = path.replace('{character_id}', this.characterData.character_id.toString());
      if (path.includes('{corporation_id}')) path = path.replace('{corporation_id}', this.characterData.corporation_id.toString());
    }

    const request: URLFetchRequest = {
      method: this.endpoint.method,
      url: `${getScriptProperties_().getProperty('BASE_URL')}${path.replace('{version}', params.version || this.endpoint.version)}`,
      headers: {
        'user-agent': `GESI User ${this.characterData.character_id}`,
      },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };

    if (payload) request.payload = JSON.stringify(payload);
    if (this.endpoint.scope) request.headers['authorization'] = `Bearer ${this.oauthClient.getAccessToken()}`;

    return request;
  }
}

function authCallback(request: AppsScriptHttpRequestEvent): HtmlOutput {
  const id: string = request.parameter.serviceName;

  // Fetch the oauthService used for this flow
  const oauthService = getOAuthService_(id);

  // Complete the OAuth flow
  oauthService.handleCallback(request);

  // Parse the JWT access token for some basic information about this character
  const jwtToken = ESIRequest.parseToken(oauthService.getAccessToken());
  const characterId = parseInt(jwtToken.sub.split(':')[2]);

  // @ts-ignore
  // TODO: Make a PR to update @types/google-apps-script-oauth2
  const storage: IStorage = oauthService.getStorage();

  // Fetch additional data about this character
  const affiliationData = getCharacterAffiliation_(characterId, oauthService);

  // If this character was previously authorized
  // update the ID of this character and reset the old service
  const characterMap = getAuthenticatedCharacters();

  // If this character is already in the map,
  // Reset/clear out data related to previous oauthService
  if (characterMap.hasOwnProperty(jwtToken.name)) {
    getOAuthService_(characterMap[jwtToken.name].id).reset();
  }

  // Update the user object
  characterMap[jwtToken.name] = {
    alliance_id: affiliationData.alliance_id || null,
    character_id: affiliationData.character_id,
    corporation_id: affiliationData.corporation_id,
    id,
    name: jwtToken.name,
  };
  setCharacters_(characterMap);

  // Set the main character if there is not one already
  if (!getMainCharacter()) setMainCharacter_(jwtToken.name);

  return HtmlService.createHtmlOutput(`Thank you for using GESI ${jwtToken.name}!  You may close this tab.`);
}

function getCharacterAffiliation_(characterId: number, oauthClient: OAuth2Service): ICharacterAffiliation {
  return (new ESIRequest('characters_affiliation', oauthClient, {} as ICharacterData)).callRaw<ICharacterAffiliation[]>({} as IFunctionParam, [characterId])[0] as ICharacterAffiliation;
}

function characterNameToId_(characterName: string | null): string {
  return getCharacterData(characterName).id;
}

function getOAuthService_(id: string): OAuth2Service {
  return OAuth2.createService(id)
    .setAuthorizationBaseUrl(getScriptProperties_().getProperty('AUTHORIZE_URL')!)
    .setTokenUrl(getScriptProperties_().getProperty('TOKEN_URL')!)
    .setClientId(getScriptProperties_().getProperty('CLIENT_ID')!)
    .setClientSecret(getScriptProperties_().getProperty('CLIENT_SECRET')!)
    .setCallbackFunction('authCallback')
    .setPropertyStore(getDocumentProperties_())
    .setCache(getDocumentCache_())
    .setScope(SCOPES)
    .setParam('access_type', 'offline')
    .setParam('prompt', 'consent');
}

interface IHeader {
  readonly name: string;
  readonly sub_headers?: string[];
}

interface IParameter {
  readonly description: string;
  readonly in: ParameterType;
  readonly name: string;
  readonly type: string;
  readonly required: boolean;
}

interface IEndpoint {
  /** @description Long description of the endpoint */
  readonly description: string;

  /** @description The column headers that endpoint returns.  Are ordered alphabetically */
  readonly headers: IHeader[];

  /** @description The HTTP method this endpoint uses */
  readonly method: string;

  /** @description Whether this endpoint is paginated */
  readonly paginated: boolean;

  /** @description The parameters this endpoint accepts */
  readonly parameters: IParameter[];

  /** @description The path, including parameters, of this endpoint */
  readonly path: string;

  /** @description An optional required scope if this endpoint is authenticated */
  readonly scope?: string;

  /** @description Short description of the endpoint */
  readonly summary: string;

  /** @description The default version of this endpoint */
  readonly version: string;
}

interface IEndpointList {
  [key: string]: IEndpoint;
}

interface IFunctionParam {
  show_column_headings: boolean;
  version?: string;
  name?: string;
  page?: number;

  [param: string]: any;
}

interface ICharacterData {
  readonly alliance_id: number | null;
  readonly character_id: number;
  readonly corporation_id: number;
}

interface IAuthenticatedCharacter extends ICharacterData {
  readonly id: string;
  readonly name: string;
}

interface ICharacterMap {
  [characterName: string]: IAuthenticatedCharacter;
}

type SheetsArray = any[][]

interface IESIToken {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token: string;
  readonly token_type: string;
}

interface IToken {
  readonly azp: string;
  readonly exp: number;
  readonly iss: string;
  readonly name: string;
  readonly owner: string;
  readonly sub: string;
}

interface ICharacterAffiliation {
  readonly alliance_id?: number;
  readonly character_id: number;
  readonly corporation_id: number;
  readonly faction_id?: number;
}

interface IStorage {
  getValue(key: string, optSkipMemoryCheck?: boolean): any;

  setValue(key: string, value: any): void;

  removeValue(key: string): void;
}
