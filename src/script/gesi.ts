/**
 * @OnlyCurrentDoc
 * Google ESI (GESI)
 * /u/blacksmoke16 @ Reddit
 * @Blacksmoke16#0016 @ Discord
 * https://discord.gg/eEAH2et
 */
// eslint-disable-next-line camelcase
import URLFetchRequest = GoogleAppsScript.URL_Fetch.URLFetchRequest;

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

class ESIClient implements IESIClient {
  public constructor(
    private readonly access_token: string,
  ) { }

  public doRequest(request: URLFetchRequest): void {
    Logger.log(this.access_token);
    Logger.log(request);
  }
}

