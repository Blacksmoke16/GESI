import URLFetchRequest = GoogleAppsScript.URL_Fetch.URLFetchRequest;
import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import OAuth2Service = GoogleAppsScriptOAuth2.OAuth2Service;
import Properties = GoogleAppsScript.Properties.Properties;
import { getEndpoints } from './endpoints';
import { getScriptProperties_, IAccessTokenData, IAuthenticatedCharacter, IEndpoint, IFunctionParams, IHeader, IParameter, IToken, SheetsArray } from './gesi';

interface IEndpointProvider {
  hasEndpoint(name: string): boolean;
  getEndpoint(name: string): IEndpoint;
}

interface IHTTPClient {
  fetchAll(requests: URLFetchRequest[]): HTTPResponse[];
}

class ESIClient {
  private static readonly BASE_URL = 'https://esi.evetech.net';
  private static readonly AUDIENCE = 'EVE Online';
  private static readonly ISSUER = 'login.eveonline.com';

  public static addQueryParam(path: string, paramName: string, paramValue: any): string {
    path += path.includes('?') ? '&' : '?';
    path += paramName + '=' + (Array.isArray(paramValue) ? paramValue.join(',') : paramValue);
    return path;
  }

  public static parseToken(access_token: string): IAccessTokenData {
    const jwtToken: IAccessTokenData = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(access_token.split('.')[1])).getDataAsString());
    const clientId: string = getScriptProperties_().getProperty('CLIENT_ID')!;

    if (jwtToken.iss !== ESIClient.ISSUER) throw 'Access token validation error: invalid issuer';
    if (jwtToken.aud !== [clientId, ESIClient.AUDIENCE]) throw 'Access token validation error: invalid audience';
    if (jwtToken.azp !== clientId) throw 'Access token validation error: invalid authorized party';
    return jwtToken;
  }

  #oauthClient: OAuth2Service;
  private endpoint?: IEndpoint;
  private endpointProvider: IEndpointProvider;
  private httpClient: IHTTPClient;

  constructor(
    oauthClient: OAuth2Service,
    private characterData: IAuthenticatedCharacter,
    private documentProperties: Properties,
    endpointProvider?: IEndpointProvider,
    httpClient?: IHTTPClient,
  ) {
    this.#oauthClient = oauthClient;

    if (undefined === endpointProvider) {
      this.endpointProvider = {
        hasEndpoint(name: string): boolean {
          return getEndpoints().hasOwnProperty(name);
        },
        getEndpoint(name: string): IEndpoint {
          return getEndpoints()[name];
        },
      };
    } else {
      this.endpointProvider = endpointProvider;
    }

    if (undefined === httpClient) {
      this.httpClient = {
        fetchAll(requests: URLFetchRequest[]): HTTPResponse[] {
          return UrlFetchApp.fetchAll(requests);
        },
      }
    } else {
      this.httpClient = httpClient;
    }
  }

  /**
   * Sets the endpoint to use for future methods calls.
   *
   * @param {string} functionName The name of the endpoint that should be invoked
   * @return {ESIClient} For chaining
   * @customfunction
   */
  public setFunction(functionName: string): ESIClient {
    if (!this.endpointProvider?.hasEndpoint(functionName)) {
      throw new Error(`Unknown endpoint: '${functionName}'`);
    }

    this.endpoint = this.endpointProvider.getEndpoint(functionName);

    return this;
  }

  /**
   * @return {string} The access_token associated with this ESIClient.
   * @customfunction
   */
  public getAccessToken(): string {
    return this.#oauthClient.getAccessToken();
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
    return this.#oauthClient.getToken() as IToken;
  }

  /**
   * Deauthorizes the character related to this ESIClient.
   *
   * @customfunction
   */
  public reset(): void {
    this.#oauthClient.reset();
    this.documentProperties.deleteProperty(`character.${this.characterData.name}`);
  }

  /**
   * Executes an ESI request with the given params.
   *
   * @return {SheetsArray} The results.
   * @customfunction
   */
  public execute(params: IFunctionParams = {} as IFunctionParams): SheetsArray {
    const endpoint = this.checkEndpoint();
    const data: any = this.doRequest(params);

    let result: SheetsArray = [];

    if (params.show_column_headings !== undefined && typeof params.show_column_headings !== 'boolean') {
      throw new Error(`Expected optional argument show_column_headings to be a boolean, but got a ${typeof params.show_column_headings}.`);
    }

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
  public executeRaw<T>(params: IFunctionParams = {} as IFunctionParams): T {
    this.checkEndpoint();
    return this.doRequest<T>(params);
  }

  /**
   * Builds a URLFetchRequest object with the given params.
   *
   * @return {URLFetchRequest} The built request.
   * @customfunction
   */
  public buildRequest(params: IFunctionParams = {} as IFunctionParams): URLFetchRequest {
    const endpoint = this.checkEndpoint();

    let path = endpoint.path;
    let payload: any = null;

    // Process this endpoint's parameters
    endpoint.parameters.forEach((param: IParameter) => {
      let paramValue = params[param.name];
      const required = param.required ? 'required' : 'optional';

      if (param.required && !paramValue && false !== paramValue) {
        throw new Error(`Argument ${param.name} is required.`);
      } else if (!param.required && !paramValue && false !== paramValue) {
        return;
      }

      let paramType = param.type;
      let paramValueType = typeof paramValue;
      let isArrayType = false;

      if (paramType.endsWith('[]')) {
        paramType = paramType.slice(0, -2);
        isArrayType = true;
      }

      if (isArrayType && 'string' === paramType && '#NAME?' === paramValue) {
        throw new Error(`Expected ${required} argument ${param.name} to be a string|string[], but got invalid named range. Put the value(s) in double quotes.`);
      } else if (!isArrayType && 'string' === paramType && '#NAME?' === paramValue) {
        throw new Error(`Expected ${required} argument ${param.name} to be a string, but got invalid named range. Put the value in double quotes.`);
      } else if (!isArrayType && '#NAME?' === paramValue) {
        throw new Error(`Expected ${required} argument ${param.name} to be a ${param.type}, but got invalid named range.`);
      } else if (isArrayType && (!Array.isArray(paramValue) && paramValueType !== paramType)) {
        throw new Error(`Expected ${required} argument ${param.name} to be a ${paramType}|${paramType}[], but got a ${paramValueType}.`);
      } else if (!isArrayType && (paramValueType !== paramType)) {
        throw new Error(`Expected ${required} argument ${param.name} to be a ${paramType}, but got a ${paramValueType}.`);
      }

      if (isArrayType) {
        paramValue = !Array.isArray(paramValue) ?
          [paramValue] :
          Array.isArray(paramValue[0]) ?
            paramValue.filter((item: any) => item[0]).map((item: any) => item[0]) :
            paramValue;

        if (isArrayType && !paramValue.every((i: any) => typeof i === paramType)) {
          throw new Error(`Expected ${required} argument ${param.name} to be a ${paramType}|${paramType}[], but not every item in the array is a ${paramType}.`);
        }
      }

      if (param.in === 'path') {
        path = path.replace(`{${param.name}}`, paramValue);
      } else if (param.in === 'query') {
        path = ESIClient.addQueryParam(path, param.name, paramValue);
      } else if (param.in === 'body') {
        if (isArrayType) {
          payload = paramValue;
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
      if (this.characterData.alliance_id && path.includes('{alliance_id}')) path = path.replace('{alliance_id}', this.characterData.alliance_id!.toString());
      if (path.includes('{character_id}')) path = path.replace('{character_id}', this.characterData.character_id.toString());
      if (path.includes('{corporation_id}')) path = path.replace('{corporation_id}', this.characterData.corporation_id.toString());
    }

    const request: URLFetchRequest = {
      method: endpoint.method,
      url: `${ESIClient.BASE_URL}${path.replace('{version}', params.version || endpoint.version)}`,
      headers: {
        'user-agent': `GESI User ${this.characterData.character_id}`,
      },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };

    if (payload) request.payload = JSON.stringify(payload);
    if (endpoint.scope) request.headers!['authorization'] = `Bearer ${this.#oauthClient.getAccessToken()}`;

    return request;
  }

  private doRequest<T>(params: IFunctionParams): T {
    const request = this.buildRequest(params);
    const response: HTTPResponse = this.httpClient.fetchAll([request])[0];
    const headers = response.getHeaders() as { [k: string]: string };

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

    return result.concat(...this.httpClient.fetchAll(requests).map((response: HTTPResponse) => {
      if (response.getResponseCode() !== 200) {
        throw new Error(response.getContentText());
      }

      return JSON.parse(response.getContentText())
    }));
  }

  private checkEndpoint(): IEndpoint {
    if (!this.endpoint) {
      throw new Error('Endpoint name has not been set on client.');
    }

    return this.endpoint;
  }
}

export { ESIClient, IEndpointProvider, IHTTPClient };
