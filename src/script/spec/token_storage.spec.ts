import { createMock } from 'ts-auto-mock';
import { TokenStorage } from '../src/token_storage';
import Properties = GoogleAppsScript.Properties.Properties;
import Cache = GoogleAppsScript.Cache.Cache;

describe('TokenStorage', () => {
  let tokenStorage: TokenStorage;

  let documentPropertiesMock: Properties;
  let documentCacheMock: Cache;

  beforeEach(() => {
    documentPropertiesMock = createMock<Properties>();
    documentCacheMock = createMock<Cache>();

    tokenStorage = new TokenStorage(
      documentPropertiesMock,
      documentCacheMock,
    );
  });

  describe('#deleteAllProperties', () => {
    beforeEach(() => {
      tokenStorage.deleteAllProperties();
    });

    it('delegates to decorated properties store', () => {
      expect(documentPropertiesMock.deleteAllProperties).toHaveBeenCalled();
    });
  });

  describe('#deleteProperty', () => {
    beforeEach(() => {
      tokenStorage.deleteProperty('foo');
    });

    it('delegates to decorated properties and cache stores', () => {
      expect(documentPropertiesMock.deleteProperty).toHaveBeenCalledWith('foo');
      expect(documentCacheMock.remove).toHaveBeenCalledWith('foo');
    });
  });

  describe('#getKeys', () => {
    let result: string[];

    beforeEach(() => {
      documentPropertiesMock.getKeys = jest.fn().mockReturnValueOnce(['foo', 'bar']);
      result = tokenStorage.getKeys();
    });

    it('delegates to decorated properties store', () => {
      expect(result).toEqual(['foo', 'bar']);
    });
  });

  describe('#getProperties', () => {
    let result: { [p: string]: string };

    beforeEach(() => {
      documentPropertiesMock.getProperties = jest.fn().mockReturnValueOnce({ foo: 'bar' });
      result = tokenStorage.getProperties();
    });

    it('delegates to decorated properties store', () => {
      expect(result).toEqual({ foo: 'bar' });
    });
  });

  describe('#getProperty', () => {
    let result: string | null;

    describe('and there is no property with that key', () => {
      beforeEach(() => {
        documentPropertiesMock.getProperty = jest.fn().mockReturnValueOnce(null);
        result = tokenStorage.getProperty('foo');
      });

      it('should return null', function () {
        expect(documentPropertiesMock.getProperty).toHaveBeenCalledWith('foo');
        expect(result).toBeNull();
      });
    });
  });
});
