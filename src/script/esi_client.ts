import URLFetchRequest = GoogleAppsScript.URL_Fetch.URLFetchRequest;
import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

class ESIClient {
  #oauthClient: OAuth2Service;
  private characterData: IAuthenticatedCharacter;
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

  constructor(oauthClient: OAuth2Service, characterData: IAuthenticatedCharacter) {
    this.#oauthClient = oauthClient;
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
    if (!getEndpoints().hasOwnProperty(functionName)) {
      throw new Error(`Unknown endpoint: '${functionName}'`);
    }

    this.endpoint = getEndpoints()[functionName];

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
    getDocumentProperties_().deleteProperty(`character.${this.characterData.name}`);
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
        })
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
        'user-agent': `GESI User ${this.characterData.character_id}`
      },
      contentType: 'application/json',
      muteHttpExceptions: true
    };

    if (payload) request.payload = JSON.stringify(payload);
    if (endpoint.scope) request.headers['authorization'] = `Bearer ${this.#oauthClient.getAccessToken()}`;

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
