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
import HttpMethod = GoogleAppsScript.URL_Fetch.HttpMethod;
import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const USER_PROPERTIES = PropertiesService.getUserProperties();
const USER_CACHE = CacheService.getUserCache()!;
const SCOPES: string[] = [];

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

interface IESIClient {
  doRequest(request: URLFetchRequest): void;
}

interface IHeader {
  readonly name: string;
  readonly sub_headers?: string[];
}

enum ParameterType {
  Path,
  Parameter,
  Body,
  Query
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

  /** @description The path, including parameters, of this endpoint */
  readonly path: string;

  /** @description The parameters this endpoint accepts */
  readonly parameters: IParameter[];

  /** @description Short description of the endpoint */
  readonly summary: string;

  /** @description The default version of this endpoint */
  readonly version: string;

  /** @description An optional required scope if this endpoint is authenticated */
  readonly scope?: string;
}

interface IEndpointList {
  [key: string]: IEndpoint;
}

type SheetsArray = any[][]

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
  character_id: number;
}

interface ICharacterAffiliation {
  readonly alliance_id?: number;
  readonly character_id: number;
  readonly corporation_id: number;
  readonly faction_id?: number;
}

interface IStorage {
  getValue(key: string, optSkipMemoryCheck: boolean): any;

  setValue(key: string, value: any): void;

  removeValue(key: string): void;
}

function showSSOModal(): void {
  const template = HtmlService.createTemplate(`Click the link below to auth a character for use in GESI<br><br><a href="<?= authorizationUrl ?>" target="_blank"><img alt="Authorize with EVE SSO" src="https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png" /></a>.`);
  template.authorizationUrl = getOAuthService_('GESI').getAuthorizationUrl();
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
}

function authCallback(request: AppsScriptHttpRequestEvent): HtmlOutput {
  const oauthService: OAuth2Service = getOAuthService_('GESI');
  // @ts-ignore
  const esiToken = oauthService.handleCallbackWithToken(request);
  const jwtToken: IToken = parseToken_(esiToken);
  // @ts-ignore
  oauthService.setServiceName(jwtToken.name);
  // @ts-ignore
  const storage: IStorage = oauthService.getStorage();
  storage.setValue('', esiToken);
  const affiliationData = getCharacterAffiliation_(jwtToken);

  // Save affiliation data with this character
  storage.setValue('alliance_id', affiliationData.alliance_id);
  storage.setValue('corporation_id', affiliationData.corporation_id);

  return HtmlService.createHtmlOutput(`Thank you for using GESI ${jwtToken.name}!  You may close this tab.`);
}

function parseToken_(token: IESIToken): IToken {
  const jwtToken: IToken = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(token.access_token.split('.')[1])).getDataAsString());
  if (jwtToken.iss !== 'login.eveonline.com') throw 'Access token validation error: invalid issuer';
  if (jwtToken.azp !== SCRIPT_PROPERTIES.getProperty('CLIENT_ID')) throw 'Access token validation error: invalid authorized party';
  jwtToken.character_id = parseInt(jwtToken.sub.split(':')[2]);
  return jwtToken;
}

function getCharacterAffiliation_(token: IToken): ICharacterAffiliation {
  return doRequest_<ICharacterAffiliation>(
    buildRequest_('post', '/v1/characters/affiliation/', [token.character_id])
  );
}

function doRequest_<T>(request: URLFetchRequest): T {
  return doRequests_<T>([request])[0];
}

function doRequests_<T>(requests: URLFetchRequest[]): T[] {
  return [].concat(...UrlFetchApp.fetchAll(requests).map((response: HTTPResponse) => JSON.parse(response.getContentText())));
}

function buildRequest_(method: HttpMethod, path: string, payload: any): URLFetchRequest {
  return {
    method: method,
    url: `${SCRIPT_PROPERTIES.getProperty('BASE_URL')}${path}`,
    payload: JSON.stringify(payload),
    contentType: 'application/json',
    muteHttpExceptions: true
  }
}

function getOAuthService_(characterName: string): OAuth2Service {
  return OAuth2.createService(characterName)
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

