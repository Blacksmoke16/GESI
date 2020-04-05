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

type ParameterType = 'path' | 'parameters' | 'body' | 'query';

const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const USER_PROPERTIES = PropertiesService.getUserProperties();
const USER_CACHE = CacheService.getUserCache()!;

function onInstall(): void {
  onOpen();
}

function onOpen(): void {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem('Authorize Character', 'showSSOModal')
    .addToUi();
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
  version: string;
  name?: string;
  page?: number;

  [param: string]: any;
}

interface ICharacterData {
  readonly alliance_id: number | null;
  readonly character_id: number;
  readonly corporation_id: number;
}

type SheetsArray = any[][]

function test() {
  console.log(invoke_('alliances_alliance',{alliance_id:99000006,show_column_headings:true,version:"v1"}));
}

function getMainCharacter(): string | null {
  return USER_PROPERTIES.getProperty('MAIN_CHARACTER');
}

function setMainCharacter(character_name: string): void {
  USER_PROPERTIES.setProperty('MAIN_CHARACTER', character_name);
}

function invoke_(endpointName: string, params: IFunctionParam): SheetsArray {
  const oauthService = getOAuthService_(characterNameToId_(params.name || getMainCharacter()));
  const request = new ESIRequest(endpointName, oauthService);

  return request.call(params);
}

class ESIRequest {
  #endpoint: IEndpoint;
  #oauthClient: OAuth2Service;
  #characterData: ICharacterData;

  public static parseToken(access_token: string): IToken {
    const jwtToken: IToken = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
    if (jwtToken.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
    if (jwtToken.azp !== SCRIPT_PROPERTIES.getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
    return jwtToken;
  }

  private static addQueryParam(path: string, paramName: string, paramValue: any): string {
    path += path.includes('?') ? '&' : '?';
    path += paramName + '=' + (Array.isArray(paramValue) ? paramValue.join(',') : paramValue);
    return path;
  }

  constructor(endpointName: string, oauthClient: OAuth2Service) {
    if (!ENDPOINTS.hasOwnProperty(endpointName)) {
      throw new Error(`Unknown endpoint: '${endpointName}'`);
    }

    this.#endpoint = ENDPOINTS[endpointName];
    this.#oauthClient = oauthClient;
    this.#characterData = {
      alliance_id: this.getStorage().getValue('alliance_id'),
      character_id: this.getStorage().getValue('character_id'),
      corporation_id: this.getStorage().getValue('corporation_id'),
    };
  }

  public call(params: IFunctionParam, payload: any = null): SheetsArray {
    const data: any = this.doRequest(params, payload);

    let result: SheetsArray = [];

    // Add the header row if its not set, or set to true
    if (params.show_column_headings) this.appendHeaders(result);

    if (Array.isArray(data) && Number.isFinite(data[0])) {
      result = result.concat(data);
    } else if (Array.isArray(data) && data instanceof Object) {
      result = result.concat(
        data.map((obj) => {
          return this.#endpoint.headers.map((header: IHeader) => typeof (obj[header.name]) === 'object' ? JSON.stringify(obj[header.name]) : obj[header.name]);
        }),
      );
    } else if (data instanceof Object) {
      result.push(this.#endpoint.headers.map((header: IHeader) => typeof (data[header.name]) === 'object' ? JSON.stringify(data[header.name]) : data[header.name]));
    }

    return result;
  }

  public callRaw<T>(params: IFunctionParam, payload: any = null): T | T[] {
    return this.doRequest<T>(params, payload);
  }

  private appendHeaders(result: SheetsArray): void {
    result.push(this.#endpoint.headers.map((header: IHeader) => header.name));
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
    if (!this.#endpoint.paginated) return JSON.parse(response.getContentText());

    // If the route is paginated but only has one page, just return it
    if (headers.hasOwnProperty('x-pages') && parseInt(headers['x-pages']) === 1) return JSON.parse(response.getContentText());

    // Otherwise, if there are more than 1 page, issue additional requests to fetch all the pages
    const result = JSON.parse(response.getContentText());

    const totalPages = parseInt(headers['x-pages']);
    const requests = [];

    for (let p = 2; p <= totalPages; p++) {
      params.page = p;
      requests.push(this.buildRequest(params, payload))
    }

    return result.concat(...UrlFetchApp.fetchAll(requests).map((response: HTTPResponse) => JSON.parse(response.getContentText())));
  }

  private buildRequest(params: IFunctionParam, payload: any = null): URLFetchRequest {
    let path = this.#endpoint.path;

    console.log(params);

    // Process this endpoint's parameters
    this.#endpoint.parameters.forEach((param: IParameter) => {
      const paramValue = params[param.name];

      if (param.in === "path" && paramValue) {
        path = path.replace(`{${param.name}}`, paramValue);
      } else if (param.in === "query" && paramValue) {
        path = ESIRequest.addQueryParam(path, param.name, paramValue);
      }
    });

    // Add the page param if set
    if (params.page) {
      path = ESIRequest.addQueryParam(path, 'page', params.page)
    }

    if (this.#endpoint.scope) {
      if (this.#characterData.alliance_id && path.includes('{alliance_id}')) path = path.replace('{alliance_id}', this.#characterData.alliance_id.toString());
      if (path.includes('{character_id}')) path = path.replace('{character_id}', this.#characterData.character_id.toString());
      if (path.includes('{corporation_id}')) path = path.replace('{corporation_id}', this.#characterData.corporation_id.toString());
    }

    const request: URLFetchRequest = {
      method: this.#endpoint.method,
      url: `${SCRIPT_PROPERTIES.getProperty('BASE_URL')}${path.replace('{version}', params.version || this.#endpoint.version)}`,
      headers: {
        'user-agent': `GESI User ${this.#characterData.character_id}`,
      },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };

    if (payload) request.payload = JSON.stringify(payload);
    if (this.#endpoint.scope) request.headers['authorization'] = `Bearer ${this.#oauthClient.getAccessToken()}`;

    console.log(request);

    return request;
  }

  private getStorage(): IStorage {
    // @ts-ignore
    return this.#oauthClient.getStorage();
  }
}

// SSO Methods
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

interface ICharacterMap {
  [characterName: string]: string;
}

interface IStorage {
  getValue(key: string, optSkipMemoryCheck?: boolean): any;

  setValue(key: string, value: any): void;

  removeValue(key: string): void;
}

function showSSOModal(): void {
  const template = HtmlService.createTemplate(`Click the link below to auth a character for use in GESI<br><br><a href="<?= authorizationUrl ?>" target="_blank"><img onclick="google.script.host.close();" alt="Authorize with EVE SSO" src="https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png" /></a>`);
  template.authorizationUrl = getOAuthService_(Utilities.getUuid()).getAuthorizationUrl();
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
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

  // Save data about this character with its oauth service
  storage.setValue('alliance_id', affiliationData.alliance_id);
  storage.setValue('corporation_id', affiliationData.corporation_id);
  storage.setValue('character_id', affiliationData.character_id);

  // If this character was previously authorized
  // update the ID of this character and reset the old service
  const characterMap: ICharacterMap = JSON.parse(USER_PROPERTIES.getProperty('characters') || '{}');

  // If this character is already in the map,
  // Reset/clear out data related to previous oauthService
  if (characterMap.hasOwnProperty(jwtToken.name)) {
    const previousService = getOAuthService_(characterMap[jwtToken.name]);
    previousService.reset();
    // @ts-ignore
    const previousStorage: IStorage = previousService.getStorage();
    previousStorage.removeValue('alliance_id');
    previousStorage.removeValue('corporation_id');
    previousStorage.removeValue('character_id');
  }

  // Update the UUID for this character
  characterMap[jwtToken.name] = id;
  USER_PROPERTIES.setProperty('characters', JSON.stringify(characterMap));

  // Set the main character if there is not one already
  if (!getMainCharacter()) setMainCharacter(jwtToken.name);

  return HtmlService.createHtmlOutput(`Thank you for using GESI ${jwtToken.name}!  You may close this tab.`);
}

function getCharacterAffiliation_(characterId: number, oauthClient: OAuth2Service): ICharacterAffiliation {
  return (new ESIRequest('characters_affiliation', oauthClient)).callRaw<ICharacterAffiliation[]>({} as IFunctionParam, [characterId])[0] as ICharacterAffiliation;
}

function characterNameToId_(characterName: string | null): string {
  const characters: ICharacterMap = JSON.parse(USER_PROPERTIES.getProperty('characters') || '{}');
  if (!characterName) throw new Error('No characters have been authenticated.  Visit Add-ons => GEST => Authorize Character to do so.');
  if (!characters.hasOwnProperty(characterName)) throw new Error(`${characterName} is not authed, or is misspelled.`);
  return characters[characterName];
}

function getOAuthService_(id: string): OAuth2Service {
  return OAuth2.createService(id)
    .setAuthorizationBaseUrl(SCRIPT_PROPERTIES.getProperty('AUTHORIZE_URL')!)
    .setTokenUrl(SCRIPT_PROPERTIES.getProperty('TOKEN_URL')!)
    .setClientId(SCRIPT_PROPERTIES.getProperty('CLIENT_ID')!)
    .setClientSecret(SCRIPT_PROPERTIES.getProperty('CLIENT_SECRET')!)
    .setCallbackFunction('authCallback')
    .setPropertyStore(USER_PROPERTIES)
    .setCache(USER_CACHE)
    .setScope(SCOPES)
    .setParam('access_type', 'offline')
    .setParam('prompt', 'consent');
}

