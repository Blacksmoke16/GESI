import { createMock } from 'ts-auto-mock';
import { TokenStorage } from '../src/token_storage';
import Properties = GoogleAppsScript.Properties.Properties;
import Cache = GoogleAppsScript.Cache.Cache;

describe('TokenStorage', () => {
  let tokenStorage: TokenStorage;

  let documentPropertiesMock: Properties
  let documentCacheMock: Cache

  beforeEach(() => {
    documentPropertiesMock = createMock<Properties>({
      getKeys: () => ['foo', 'bar'],
    });
    documentCacheMock = createMock<Cache>();

    tokenStorage = new TokenStorage(
      documentPropertiesMock,
      documentCacheMock,
    );
  });

  it('should work', () => {
    expect(tokenStorage.getKeys()).toEqual(['foo', 'bar']);
  });
});
