import { createMock } from 'ts-auto-mock';
import { ESIClient, IEndpointProvider } from '../src/esi_client';
import { IAuthenticatedCharacter, IEndpoint, IFunctionParams, IParameter } from '../src/gesi';
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
        hasEndpoint(_name: string): boolean {
          return true;
        },
        getEndpoint(_name: string): IEndpoint {
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

    describe('without parameters', () => {
      describe('public endpoint', () => {
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

      describe('public endpoint, paginated', () => {
        beforeEach(() => {
          endpoint = {
            path: '/{version}/route/',
            version: 'v1',
            method: 'get',
            parameters: [] as IParameter[],
          } as IEndpoint;
          esiClient.setFunction('foo');
          result = esiClient.buildRequest({ page: 3 } as IFunctionParams);
        });

        it('should return the proper request', () => {
          expect(result).toEqual<URLFetchRequest>({
            method: 'get',
            url: 'https://esi.evetech.net/v1/route/?page=3',
            headers: {
              'user-agent': 'GESI User 2047918291',
            },
            contentType: 'application/json',
            muteHttpExceptions: true
          })
        });
      });

      describe('public endpoint, custom version', () => {
        beforeEach(() => {
          endpoint = {
            path: '/{version}/route/',
            version: 'v1',
            method: 'get',
            parameters: [] as IParameter[],
          } as IEndpoint;
          esiClient.setFunction('foo');
          result = esiClient.buildRequest({ version: 'v3' } as IFunctionParams);
        });

        it('should return the proper request', () => {
          expect(result).toEqual<URLFetchRequest>({
            method: 'get',
            url: 'https://esi.evetech.net/v3/route/',
            headers: {
              'user-agent': 'GESI User 2047918291',
            },
            contentType: 'application/json',
            muteHttpExceptions: true
          })
        });
      });

      describe('private endpoint, placeholders', () => {
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

    describe('with parameters', () => {
      describe('type validation', () => {
        describe('non array', () => {
          describe('required number param without a value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'number',
                    required: true
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest())
                .toThrow('Argument param is required.')
            });
          });

          describe('required number param with boolean', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'number',
                    required: true
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: false, show_column_headings: false } as IFunctionParams))
                .toThrow('Expected required argument param to be a number, but got a boolean.')
            });
          });

          describe('required boolean with false', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'boolean',
                    required: true
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: false, show_column_headings: false } as IFunctionParams))
                .not.toThrow()
            });
          });

          describe('string param with invalid range value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'string',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: '#NAME?', show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string, but got invalid named range. Put the value in double quotes.')
            });
          });

          describe('string param with undefined value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'string',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: undefined, show_column_headings: false } as IFunctionParams))
                .not.toThrow();
            });
          });

          describe('string param with number value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'string',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: 100, show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string, but got a number.')
            });
          });

          describe('number param with invalid range value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'number',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: '#NAME?', show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a number, but got invalid named range.')
            });
          });

          describe('optional bool param that\'s undefined', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'boolean',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: undefined, show_column_headings: false } as IFunctionParams))
                .not.toThrow();
            });
          });
        });

        describe('array type', () => {
          describe('required number array param with boolean', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'number[]',
                    required: true
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: false, show_column_headings: false } as IFunctionParams))
                .toThrow('Expected required argument param to be a number|number[], but got a boolean.')
            });
          });

          describe('string array param with invalid range value', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: '#NAME?', show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string|string[], but got invalid named range. Put the value(s) in double quotes.')
            });
          });

          describe('string array param with number', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: 100, show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string|string[], but got a number.')
            });
          });

          describe('string array param with a number array', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    in: 'body',
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: [1, 2, 3], show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string|string[], but not every item in the array is a string.')
            });
          });

          describe('string array param with a single number', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    in: 'body',
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: ['1', 2, '3'], show_column_headings: false } as IFunctionParams))
                .toThrow('Expected optional argument param to be a string|string[], but not every item in the array is a string.')
            });
          });

          describe('string array param with all strings', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    in: 'body',
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: ['1', '2', '3'], show_column_headings: false } as IFunctionParams))
                .not.toThrow();
            });
          });

          describe('string array param with null', () => {
            it('should throw the proper error', () => {
              endpoint = {
                path: '/{version}/route/',
                parameters: [
                  {
                    in: 'body',
                    name: 'param',
                    type: 'string[]',
                  }
                ],
              } as IEndpoint;
              esiClient.setFunction('foo');

              expect(() => esiClient.buildRequest({ param: null, show_column_headings: false } as IFunctionParams))
                .not.toThrow();
            });
          });
        })
      })
    });
  });
});
