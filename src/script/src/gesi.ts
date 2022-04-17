/**
 * @OnlyCurrentDoc
 * Google ESI (GESI)
 * /u/blacksmoke16 @ Reddit
 * @Blacksmoke16#0016 @ Discord
 * https://discord.gg/eEAH2et
 */
import AppsScriptHttpRequestEvent = GoogleAppsScript.Events.AppsScriptHttpRequestEvent;
import HtmlOutput = GoogleAppsScript.HTML.HtmlOutput;
import Properties = GoogleAppsScript.Properties.Properties;
import OAuth2Service = GoogleAppsScriptOAuth2.OAuth2Service;
import HttpMethod = GoogleAppsScript.URL_Fetch.HttpMethod;
import { getEndpoints, getScopes } from './endpoints';
import { ESIClient } from './esi_client';
import { TokenStorage } from './token_storage';

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

// @ts-ignore
function onInstall(): void {
  onOpen();
}

// @ts-ignore
function onOpen(): void {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem('Authorize Character', 'showSSOModal')
    .addItem('Deauthorize Character', 'deauthorizeCharacter')
    .addItem('Set Main Character', 'setMainCharacter')
    .addItem('Reset', 'resetGateway')
    .addToUi();
}

// @ts-ignore
function showSSOModal(): void {
  const template = HtmlService.createTemplateFromFile('authorize');
  template.authorizationUrl = getOAuthService_(Utilities.getUuid()).getAuthorizationUrl();
  SpreadsheetApp.getUi().showModalDialog(template.evaluate().setWidth(400).setHeight(250), 'GESI EVE SSO');
}

// @ts-ignore
function deauthorizeCharacter(): void {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Deauthorize Character', 'Enter the name of the character you wish to deauthorize.', ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const character = getCharacterData(response.getResponseText());

  getClient(character.name).reset();

  ui.alert(`Successfully deauthorized ${character.name}.`);
}

// @ts-ignore
function setMainCharacter() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Set Main Character', 'Enter the name of the character you wish to use as your main.', ui.ButtonSet.OK_CANCEL);

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const character = getCharacterData(response.getResponseText());

  setMainCharacter_(character.name);

  ui.alert(`${character.name} is now your main character.`);
}

// @ts-ignore
function resetGateway() {
  var resetPermissions = true;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetOwner = ss.getOwner();
  
  if (sheetOwner)
  {
    // standard case of a sheet in a user folder
    var sheetOwnerEmail = sheetOwner.getEmail();
    var userEmail = Session.getEffectiveUser().getEmail();

    // check that email of sheet owner is the same as the user. if there is an error getting the email it means the script does not have permissions to execute this function and is probably not the owner
    if (sheetOwnerEmail === "" || userEmail === "" || sheetOwnerEmail != userEmail)    
      resetPermissions = false;
  }
  else
  {
      // sheet is in a shared drive and has no owner. alternatively, get the permissions of the first sheet.  if this user is able to edit this sheet then they have permissions to reset
      try
      {
        var firstSheet = ss.getSheets()[0];
        if (firstSheet)
        {
          var protection = firstSheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
          if (protection && !protection.canEdit())
              resetPermissions = false;
        }
      }
      catch (e)
      {
        // throwing an exception means user does not have proper permissions in this sheet
        resetPermissions = false;
      }
  } 
  
  if (!resetPermissions)
  {
    SpreadsheetApp.getUi().alert('Reset is available only to sheet owner');
    return;
  }

  reset();
}
// @ts-ignore
function reset() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert('Reset?', 'Are you sure you want to reset ALL your character data?', ui.ButtonSet.YES_NO);

  if (response !== ui.Button.YES) { ui.alert("Reset aborted"); return; }

  Logger.log("Reset initiated by user " + Session.getEffectiveUser().getEmail()); // audit this reset request 

  Object.keys(getAuthenticatedCharacters()).forEach((characterName: string) => {
    getClient(characterName).reset();
  });

  getDocumentProperties_().deleteAllProperties();
  ui.alert("Reset completed");
}

// endregion

/**
 * Parses array data into more readable format
 *
 * @param {string} endpointName (Required) Name of the endpoint data to be parsed is from.
 * @param {string} columnName (Required) Name of the column to be parsed.
 * @param {string} data (Required) Cell that holds the data to be parsed.
 * @param {boolean} show_column_headers Default: True, Boolean if column headings should be listed or not.
 * @return Parsed array data.
 * @customfunction
 */
function parseArray(endpointName: string, columnName: string, data: string, show_column_headers: boolean = true): SheetsArray {
  let result: SheetsArray = [];
  const endpoint_header: IHeader = getEndpoints()[endpointName].headers.find((eh: IHeader) => eh.name === columnName)!;
  if (show_column_headers) result.push(endpoint_header ? endpoint_header.sub_headers! : [columnName.slice(0, -1) + '_id']);

  // Kinda a hack but it works for now :shrug:
  if (!endpoint_header || !endpoint_header.hasOwnProperty('sub_headers')) {
    JSON.parse(data).forEach((o: any) => result.push([o]));
  } else {
    JSON.parse(data).forEach((o: any) => {
      result.push(
        endpoint_header.sub_headers!.map((k: string) => {
          return Array.isArray(o[k]) ? JSON.stringify(o[k]) : o[k];
        }),
      );
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
    if (key.startsWith('character.')) {
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
  if (characterName !== undefined && typeof characterName !== 'string') {
    throw new Error(`Expected optional argument name to be a string, but got ${typeof characterName}.`);
  }

  const characterData = getCharacterData(characterName || getMainCharacter());
  const oauthService = getOAuthService_(characterData.id);
  return new ESIClient(oauthService, characterData, getDocumentProperties_());
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

// @ts-ignore
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
    getClient(jwtToken.name).reset()
  }

  setCharacterData_(jwtToken.name, {
    id,
    alliance_id: affiliationData.alliance_id || null,
    character_id: affiliationData.character_id,
    corporation_id: affiliationData.corporation_id,
    name: jwtToken.name,
  });

  // Set the main character if there is not one already
  if (!getMainCharacter()) setMainCharacter_(jwtToken.name);

  return HtmlService.createHtmlOutput(`Thank you for using GESI ${jwtToken.name}!  You may close this tab.`);
}

// @ts-ignore
function getCharacterAffiliation_(characterId: number, oauthClient: OAuth2Service): ICharacterAffiliation {
  return (new ESIClient(oauthClient, {} as IAuthenticatedCharacter, getDocumentProperties_())).setFunction('characters_affiliation').executeRaw<ICharacterAffiliation[]>({ characters: [[characterId]], show_column_headings: false })[0];
}

// @ts-ignore
function getOAuthService_(id: string): OAuth2Service {
  return OAuth2.createService(id)
    .setAuthorizationBaseUrl(getScriptProperties_().getProperty('AUTHORIZE_URL')!)
    .setTokenUrl(getScriptProperties_().getProperty('TOKEN_URL')!)
    .setClientId(getScriptProperties_().getProperty('CLIENT_ID')!)
    .setClientSecret(getScriptProperties_().getProperty('CLIENT_SECRET')!)
    .setCallbackFunction('authCallback')
    .setParam('access_type', 'offline')
    .setParam('prompt', 'consent')
    .setScope(getScopes())
    .setPropertyStore(
      new TokenStorage(getDocumentProperties_(), getDocumentCache_())
    );
}

// endregion

// @ts-ignore
function setCharacterData_(characterName: string, characterData: IAuthenticatedCharacter): void {
  getDocumentProperties_().setProperty(`character.${characterName}`, JSON.stringify(characterData));
}

// @ts-ignore
function setMainCharacter_(characterName: string): void {
  getDocumentProperties_().setProperty('MAIN_CHARACTER', characterName);
}

// @ts-ignore
function normalizeResult_(result: any): any[] {
  return Array.isArray(result) ? result : [result];
}

// @ts-ignore
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

type ParameterType = 'path' | 'parameters' | 'body' | 'query';

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
  readonly method: HttpMethod;

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
  readonly access_token: string | null;
}

interface IAccessTokenData {
  readonly azp: string;
  readonly aud: string;
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

export { IAuthenticatedCharacter, IFunctionParams, SheetsArray, IToken, IHeader, IEndpoint, IAccessTokenData, IParameter, IEndpointList, parseArray, getScriptProperties_, getClient, invoke, invokeRaw, invokeMultiple, invokeMultipleRaw, getAuthenticatedCharacters, getAuthenticatedCharacterNames }
