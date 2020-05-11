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
import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import User = GoogleAppsScript.Base.User;

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

// region UI

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

  // Delete their oauth lib
  getOAuthService_(character.id).reset();
  getDocumentProperties_().deleteProperty(`character.${character.name}`);

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

// endregion

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
 * @return {ICharacterMap} An object representing the characters that have been authenticated
 * @customfunction
 */
function getAuthenticatedCharacters(): ICharacterMap {
  const properties = getDocumentProperties_().getProperties();
  const characterMap: ICharacterMap = {};

  Object.keys(properties).forEach((key: string) => {
    if (key.indexOf('character.') === 0) {
      characterMap[key.replace('character.', '')] = JSON.parse(properties[key]);
    }
  });

  return characterMap;
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

/**
 * Return the sheets formatted data related for the given functionName.
 *
 * @param {string} functionName The name of the endpoint that should be invoked
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return The data from the provided functionName
 * @customfunction
 */
function invoke(functionName: string, params: IFunctionParams = { show_column_headings: true }): SheetsArray {
  return getClient(params.name).setFunction(functionName).execute(params);
}

/**
 * Return the raw JSON data related to an ESI call
 *
 * @param {string} functionName The name of the endpoint that should be invoked
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return The raw JSON response from the provided functionName
 * @customfunction
 */
function invokeRaw<T>(functionName: string, params: IFunctionParams = { show_column_headings: false } as IFunctionParams): any {
  return getClient(params.name).setFunction(functionName).executeRaw<T>(params);
}

/**
 * Returns an ESIClient for the given characterName.
 * Can be used by advanced users for custom functions/scripts.
 *
 * @param characterName
 * @return {ESIClient}
 * @customfunction
 */
function getClient(characterName?: string): ESIClient {
  const characterData = getCharacterData(characterName || getMainCharacter());
  const oauthService = getOAuthService_(characterData.id);
  return new ESIClient(oauthService, characterData);
}

class ESIClient {
  private oauthClient: OAuth2Service;
  private characterData: ICharacterData;
  private readonly baseUrl: string;
  private endpoint?: IEndpoint;

  private static addQueryParam(path: string, paramName: string, paramValue: any): string {
    path += path.includes('?') ? '&' : '?';
    path += paramName + '=' + (Array.isArray(paramValue) ? paramValue.join(',') : paramValue);
    return path;
  }

  public static parseToken(access_token: string): IAccessTokenData {
    const jwtToken: IAccessTokenData = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
    if (jwtToken.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
    if (jwtToken.azp !== getScriptProperties_().getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
    return jwtToken;
  }

  constructor(oauthClient: OAuth2Service, characterData: ICharacterData) {
    this.oauthClient = oauthClient;
    this.characterData = characterData;
    this.baseUrl = getScriptProperties_().getProperty('BASE_URL');
  }

  /**
   * Sets the endpoint to use for future methods calls.
   *
   * @param {string} functionName The name of the endpoint that should be invoked
   * @return {ESIClient} For chaining
   * @customfunction
   */
  public setFunction(functionName: string): ESIClient {
    if (!ENDPOINTS.hasOwnProperty(functionName)) {
      throw new Error(`Unknown endpoint: '${functionName}'`);
    }

    this.endpoint = ENDPOINTS[functionName];

    return this;
  }

  /**
   * @return {string} The access_token associated with this ESIClient.
   * @customfunction
   */
  public getAccessToken(): string {
    return this.oauthClient.getAccessToken();
  }

  /**
   * @return {string} The refresh_token associated with this ESIClient.
   * @customfunction
   */
  public getRefreshToken(): string {
    return this.getToken().refresh_token;
  }

  /**
   * @return {IToken} The full token object related to this ESIClient.
   * @customfunction
   */
  public getToken(): IToken {
    return this.oauthClient.getToken() as IToken;
  }

  /**
   * Executes an ESI request with the given params.
   *
   * @return {SheetsArray} The results.
   * @customfunction
   */
  public execute(params: IFunctionParams): SheetsArray {
    const endpoint = this.checkEndpoint();
    const data: any = this.doRequest(params);

    let result: SheetsArray = [];

    // Add the header row if its not set, or set to true
    if (params.show_column_headings) result.push(endpoint.headers.map((header: IHeader) => header.name));

    if (Array.isArray(data) && isFinite(data[0])) {
      result = result.concat(data);
    } else if (Array.isArray(data) && data instanceof Object) {
      result = result.concat(
        data.map((obj) => {
          return endpoint.headers.map((header: IHeader) => typeof (obj[header.name]) === 'object' ? JSON.stringify(obj[header.name]) : obj[header.name]);
        }),
      );
    } else if (data instanceof Object) {
      result.push(endpoint.headers.map((header: IHeader) => typeof (data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]));
    } else if (isFinite(data)) {
      result.push([data]);
    }

    return result;
  }

  /**
   * Executes an ESI request with the given params.
   *
   * @return {object | object[]} The parsed raw JSON result.
   * @customfunction
   */
  public executeRaw<T>(params: IFunctionParams): T {
    this.checkEndpoint();
    return this.doRequest<T>(params);
  }

  /**
   * Builds a URLFetchRequest object with the given params.
   *
   * @return {URLFetchRequest} The built request.
   * @customfunction
   */
  public buildRequest(params: IFunctionParams): URLFetchRequest {
    const endpoint = this.checkEndpoint();

    let path = endpoint.path;
    let payload: any = null;

    // Process this endpoint's parameters
    endpoint.parameters.forEach((param: IParameter) => {
      const paramValue = params[param.name];

      if (param.in === 'path' && paramValue) {
        path = path.replace(`{${param.name}}`, paramValue);
      } else if (param.in === 'query' && paramValue) {
        path = ESIClient.addQueryParam(path, param.name, paramValue);
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
      path = ESIClient.addQueryParam(path, 'page', params.page);
    }

    if (endpoint.scope) {
      if (this.characterData.alliance_id && path.includes('{alliance_id}')) path = path.replace('{alliance_id}', this.characterData.alliance_id.toString());
      if (path.includes('{character_id}')) path = path.replace('{character_id}', this.characterData.character_id.toString());
      if (path.includes('{corporation_id}')) path = path.replace('{corporation_id}', this.characterData.corporation_id.toString());
    }

    const request: URLFetchRequest = {
      method: endpoint.method,
      url: `${this.baseUrl}${path.replace('{version}', params.version || endpoint.version)}`,
      headers: {
        'user-agent': `GESI User ${this.characterData.character_id}`,
      },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };

    if (payload) request.payload = JSON.stringify(payload);
    if (endpoint.scope) request.headers['authorization'] = `Bearer ${this.oauthClient.getAccessToken()}`;

    return request;
  }

  private doRequest<T>(params: IFunctionParams): T {
    const request = this.buildRequest(params);
    const response: HTTPResponse = UrlFetchApp.fetchAll([request])[0];
    const headers = response.getHeaders();

    // If the request was not successful, raise an error
    if (response.getResponseCode() !== 200) {
      throw new Error(response.getContentText());
    }

    // Log a warning if a route returns a warning
    if (headers.hasOwnProperty('Warning')) console.warn(headers['Warning']);

    // If the route is not paginated, or is paginated but only has one page, just return it
    if (!headers.hasOwnProperty('x-pages') || (headers.hasOwnProperty('x-pages') && parseInt(headers['x-pages']) === 1)) return JSON.parse(response.getContentText());

    // Otherwise, if there are more than 1 page, issue additional requests to fetch all the pages
    const result = JSON.parse(response.getContentText());

    const totalPages = parseInt(headers['x-pages']);
    const requests = [];

    for (let p = 2; p <= totalPages; p++) {
      params.page = p;
      requests.push(this.buildRequest(params));
    }

    return result.concat(...UrlFetchApp.fetchAll(requests).map((response: HTTPResponse) => JSON.parse(response.getContentText())));
  }

  private checkEndpoint(): IEndpoint {
    if (!this.endpoint) {
      throw new Error('Endpoint name has not been set on client.');
    }

    return this.endpoint;
  }
}

/**
 * Returns the data from the provided functionName for each character as one list for use within a sheet.
 *
 * @param {string} functionName The name of the endpoint that should be invoked
 * @param {string | string[]} characterNames A single, comma separated, or vertical range of character names
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return
 * @customfunction
 */
function invokeMultiple(functionName: string, characterNames: string | string[] | string[][], params: IFunctionParams = { show_column_headings: true }): SheetsArray {
  const normalizedNames = normalizeNames_(characterNames);
  const firstCharacter = normalizedNames.shift();

  const result = invoke(functionName, { ...params, name: firstCharacter });

  if (params.show_column_headings) {
    const headers = result[0];
    headers.push('character_name');
  }

  result.forEach((item: any, idx: number) => {
    if (idx > 0 || !params.show_column_headings) item.push(firstCharacter);
  });

  normalizedNames.forEach((name: string) => {
    const subResults = invoke(functionName, { ...params, name, show_column_headings: false });

    subResults.forEach((item: any) => {
      item.push(name);
      result.push(item);
    });
  });

  return result;
}

/**
 * Returns the data from the provided functionName for each character as one list for use within custom functions/scripts.
 *
 * @param {string} functionName The name of the endpoint that should be invoked
 * @param {string | string[]} characterNames A single, comma separated, or vertical range of character names
 * @param {object} params Any extra parameters that should be included in the ESI call
 * @return
 * @customfunction
 */
function invokeMultipleRaw(functionName: string, characterNames: string | string[] | string[][], params: IFunctionParams = { show_column_headings: false }): SheetsArray {
  const normalizedNames = normalizeNames_(characterNames);
  const firstCharacter = normalizedNames.shift();

  const result = normalizeResult_(invokeRaw(functionName, { ...params, name: firstCharacter }));

  result.forEach((item: any) => {
    item.character_name = firstCharacter;
  });

  normalizedNames.forEach((name: string) => {
    const subResults = normalizeResult_(invokeRaw(functionName, { ...params, name: name }));

    subResults.forEach((item: any) => {
      item.character_name = name;
      result.push(item);
    });
  });

  return result;
}

// region oauth

enum CharacterSheetColumns {
  Id,
  AccessToken,
  ExpiresIn,
  RefreshToken,
  GrantedTime,
  TokenType
}

class SheetStorage {
  private static readonly CHARACTER_SHEET = 'Authenticated Characters';
  private static readonly COLUMN_COUNT = Object.keys(CharacterSheetColumns).length / 2;

  private readonly spreadsheet: Spreadsheet;
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
    this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  }

  public setValue(key: string, value: any): void {
    const authedCharactersSheet = this.getCharacterSheet();

    authedCharactersSheet.appendRow(this.tokenToArray(value));

    authedCharactersSheet.autoResizeColumns(1, SheetStorage.COLUMN_COUNT);
  }

  public getValue(key: string, optSkipMemoryCheck: boolean = false): any {
    const characterRow = this.getCharacterRow();

    if (!characterRow) {
      return null;
    }

    return {
      access_token: characterRow[CharacterSheetColumns.AccessToken],
      refresh_token: characterRow[CharacterSheetColumns.RefreshToken],
      expires_in: characterRow[CharacterSheetColumns.ExpiresIn],
      granted_time: characterRow[CharacterSheetColumns.GrantedTime],
      token_type: characterRow[CharacterSheetColumns.TokenType],
    };
  }

  public reset(): void {
    const characterSheet = this.getCharacterSheet();
    const dataRange = characterSheet.getDataRange();

    if (dataRange.getNumRows() === 1) {
      return dataRange.clear();
    }

    let rowIndex = dataRange.getValues().findIndex((row: any[]) => {
      return row[CharacterSheetColumns.Id] === this.id;
    });

    if (rowIndex !== -1) {
      this.getCharacterSheet().deleteRow(rowIndex + 1);
    }
  }

  private createCharacterSheet(): Spreadsheet {
    const characterSheet = this.spreadsheet.insertSheet(SheetStorage.CHARACTER_SHEET).hideSheet();
    characterSheet.deleteRows(1, characterSheet.getMaxRows() - 1);
    characterSheet.deleteColumns(SheetStorage.COLUMN_COUNT, characterSheet.getMaxColumns() - SheetStorage.COLUMN_COUNT);
    const protectedData = characterSheet.protect().setDescription('Only sheet owner can view auth data');
    protectedData.removeEditors(protectedData.getEditors().map((u: User) => u.getEmail()));
    protectedData.addEditor(this.spreadsheet.getOwner()!.getEmail());

    return characterSheet;
  }

  private tokenToArray(token: IToken): any[] {
    const dataArr = [];
    dataArr[CharacterSheetColumns.Id] = this.id;
    dataArr[CharacterSheetColumns.AccessToken] = token.access_token;
    dataArr[CharacterSheetColumns.ExpiresIn] = token.expires_in;
    dataArr[CharacterSheetColumns.RefreshToken] = token.refresh_token;
    dataArr[CharacterSheetColumns.GrantedTime] = token.granted_time;
    dataArr[CharacterSheetColumns.TokenType] = token.token_type;
    return dataArr;
  }

  private getCharacterRow(): any[] | null {
    const authedCharactersSheet = this.getCharacterSheet();

    return authedCharactersSheet.getDataRange().getValues().find((row: any[]) => {
      return row[CharacterSheetColumns.Id] === this.id;
    });
  }

  private getCharacterSheet(): Spreadsheet {
    const characterSheet: Spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SheetStorage.CHARACTER_SHEET);

    if (null === characterSheet) {
      return this.createCharacterSheet();
    }

    return characterSheet;
  }
}

function authCallback(request: AppsScriptHttpRequestEvent): HtmlOutput {
  const id: string = request.parameter.serviceName;

  // Fetch the oauthService used for this flow
  const oauthService = getOAuthService_(id);

  // Complete the OAuth flow
  oauthService.handleCallback(request);

  // Parse the JWT access token for some basic information about this character
  const jwtToken = ESIClient.parseToken(oauthService.getAccessToken());
  const characterId = parseInt(jwtToken.sub.split(':')[2]);

  // Fetch additional data about this character
  const affiliationData = getCharacterAffiliation_(characterId, oauthService);

  // If this character was previously authorized
  // update the ID of this character and reset the old service
  const characterData: string | null = getDocumentProperties_().getProperty(`character.${jwtToken.name}`);

  // If this character is already in the map,
  // Reset previous oauthService and delete character data
  if (characterData) {
    getOAuthService_(JSON.parse(characterData).id).reset();
  }

  setCharacterData(jwtToken.name, {
    id: id,
    alliance_id: affiliationData.alliance_id || null,
    character_id: affiliationData.character_id,
    corporation_id: affiliationData.corporation_id,
    name: jwtToken.name,
  });

  // Set the main character if there is not one already
  if (!getMainCharacter()) setMainCharacter_(jwtToken.name);

  return HtmlService.createHtmlOutput(`Thank you for using GESI ${jwtToken.name}!  You may close this tab.`);
}

function getCharacterAffiliation_(characterId: number, oauthClient: OAuth2Service): ICharacterAffiliation {
  return (new ESIClient(oauthClient, {} as ICharacterData)).setFunction('characters_affiliation').executeRaw<ICharacterAffiliation[]>({ characters: [[characterId]], show_column_headings: false })[0];
}

function getOAuthService_(id: string): OAuth2Service {
  const service = OAuth2.createService(id)
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

  // @ts-ignore
  service.storage_ = new SheetStorage(id);

  return service;
}

// endregion

function setCharacterData(characterName: string, characterData: IAuthenticatedCharacter): void {
  getDocumentProperties_().setProperty(`character.${characterName}`, JSON.stringify(characterData));
}

function setMainCharacter_(characterName: string): void {
  getDocumentProperties_().setProperty('MAIN_CHARACTER', characterName);
}

function normalizeResult_(result: any): any[] {
  return Array.isArray(result) ? result : [result];
}

function normalizeNames_(characterNames: string | string[] | string[][]): string[] {
  let normalizedNames: string[];

  if (Array.isArray(characterNames)) {
    // @ts-ignore
    normalizedNames = Array.isArray(characterNames[0]) ? characterNames.map((row: any) => row[0]) : characterNames;
  } else {
    normalizedNames = characterNames.split(',');
  }

  if (!normalizedNames || normalizedNames.length === 0) {
    throw new Error('characterNames must not be empty.');
  }

  return normalizedNames.map(name => name.trim());
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

interface IFunctionParams {
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

interface IToken {
  readonly token_type: string;
  readonly refresh_token: string;
  readonly granted_time: number;
  readonly expires_in: number;
  readonly access_token: string;
}

interface IAccessTokenData {
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
