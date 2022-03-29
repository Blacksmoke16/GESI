import { createMock } from 'ts-auto-mock';
import { ESIClient, IEndpointProvider } from '../src/esi_client';
import { IAuthenticatedCharacter, IEndpoint, IParameter } from '../src/gesi';
import OAuth2Service = GoogleAppsScriptOAuth2.OAuth2Service;
import Properties = GoogleAppsScript.Properties.Properties;
import URLFetchRequest = GoogleAppsScript.URL_Fetch.URLFetchRequest;

describe('EsiClient', () => {
  let esiClient: ESIClient;

  let oauthServiceMock: OAuth2Service;
  let mockCharacterData: IAuthenticatedCharacter;
  let documentProperties: Properties;
  let endpointProvider: IEndpointProvider;

  let endpoint: IEndpoint;

  beforeEach(() => {
    oauthServiceMock = createMock<OAuth2Service>();
    mockCharacterData = createMock<IAuthenticatedCharacter>({
      name: 'Blacksmoke16',
      character_id: 2047918291,
      corporation_id: 98019139,
      alliance_id: 1900696668
    });
    documentProperties = createMock<Properties>();

    esiClient = new ESIClient(
      oauthServiceMock,
      mockCharacterData,
      documentProperties,
      endpointProvider = {
        hasEndpoint(name: string): boolean {
          return true;
        },
        getEndpoint(name: string): IEndpoint {
          return endpoint;
        },
      },
    );
  });

  describe('#setFunction', () => {
    beforeEach(() => {
      endpointProvider.hasEndpoint = jest.fn().mockReturnValueOnce(false);
    });

    it('it should raise when the function does not exist work', () => {
      expect(() => esiClient.setFunction('foo')).toThrow('Unknown endpoint: \'foo\'');
    });
  });

  describe('#reset', () => {
    beforeEach(() => {
      esiClient.reset();
    });

    it('should clear the underlying property and oauth service', () => {
      expect(oauthServiceMock.reset).toHaveBeenCalled();
      expect(documentProperties.deleteProperty).toHaveBeenCalledWith('character.Blacksmoke16');
    });
  });

  describe('#buildRequest', () => {
    let result: URLFetchRequest;

    describe('simple no parameters, public endpoint', () => {
      beforeEach(() => {
        endpoint = {
          path: '/{version}/route/',
          version: 'v1',
          method: 'get',
          parameters: [] as IParameter[],
        } as IEndpoint;
        esiClient.setFunction('foo');
        result = esiClient.buildRequest();
      });

      it('should return the proper request', () => {
        expect(result).toEqual<URLFetchRequest>({
          method: 'get',
          url: 'https://esi.evetech.net/v1/route/',
          headers: {
            'user-agent': 'GESI User 2047918291',
          },
          contentType: 'application/json',
          muteHttpExceptions: true
        })
      });
    });

    describe('no parameters, private endpoint, placeholders', () => {
      beforeEach(() => {
        oauthServiceMock.getAccessToken = jest.fn().mockReturnValueOnce('TOKEN');

        endpoint = {
          path: '/{version}/route/{character_id}/{corporation_id}/{alliance_id}/',
          scope: 'SCOPE',
          version: 'v1',
          method: 'get',
          parameters: [] as IParameter[],
        } as IEndpoint;
        esiClient.setFunction('foo');
        result = esiClient.buildRequest();
      });

      it('should return the proper request', () => {
        expect(result).toEqual<URLFetchRequest>({
          method: 'get',
          url: 'https://esi.evetech.net/v1/route/2047918291/98019139/1900696668/',
          headers: {
            'user-agent': 'GESI User 2047918291',
            'authorization': 'Bearer TOKEN',
          },
          contentType: 'application/json',
          muteHttpExceptions: true
        })
      });
    });
  });
});
