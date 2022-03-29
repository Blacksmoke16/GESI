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
        expect(documentCacheMock.get).not.toHaveBeenCalled();
        expect(result).toBeNull();
      });
    });

    describe('and there is a invalid JSON value string', () => {
      beforeEach(() => {
        documentPropertiesMock.getProperty = jest.fn().mockReturnValueOnce('bar');
        result = tokenStorage.getProperty('foo');
      });

      it('should return the value as is', function () {
        expect(documentPropertiesMock.getProperty).toHaveBeenCalledWith('foo');
        expect(documentCacheMock.get).not.toHaveBeenCalled();
        expect(result).toBe('bar')
      });
    });

    describe('and the value is not the token object', () => {
      beforeEach(() => {
        documentPropertiesMock.getProperty = jest.fn().mockReturnValueOnce('{"foo":"bar"}');
        result = tokenStorage.getProperty('foo');
      });

      it('should return the JSON string without `access_token`', function () {
        expect(documentPropertiesMock.getProperty).toHaveBeenCalledWith('foo');
        expect(documentCacheMock.get).not.toHaveBeenCalled();
        expect(result).toBe('{"foo":"bar"}')
      });
    });

    describe('and the value is the token object', () => {
      beforeEach(() => {
        documentPropertiesMock.getProperty = jest.fn().mockReturnValueOnce('{"token_type":"Bearer"}');
        documentCacheMock.get = jest.fn().mockReturnValueOnce('TOKEN');
        result = tokenStorage.getProperty('foo');
      });

      it('should return the JSON string without `access_token`', function () {
        expect(documentPropertiesMock.getProperty).toHaveBeenCalledWith('foo');
        expect(documentCacheMock.get).toHaveBeenCalledWith('foo');
        expect(result).toBe('{"token_type":"Bearer","access_token":"TOKEN"}')
      });
    });
  });

  describe('#setProperty', () => {
    describe('and the value is `null`', () => {
      beforeEach(() => {
        // @ts-ignore
        tokenStorage.setProperty('foo', null);
      });

      it('should delegate to decorated properties store', function () {
        expect(documentPropertiesMock.setProperty).toHaveBeenCalledWith('foo', null);
        expect(documentCacheMock.put).not.toHaveBeenCalled();
      });
    });

    describe('and there is a invalid JSON value string', () => {
      beforeEach(() => {
        tokenStorage.setProperty('foo', 'bar');
      });

      it('should delegate to decorated properties store', function () {
        expect(documentPropertiesMock.setProperty).toHaveBeenCalledWith('foo', 'bar');
        expect(documentCacheMock.put).not.toHaveBeenCalled();
      });
    });

    describe('and the value is a JSON string without an `access_token`', () => {
      beforeEach(() => {
        tokenStorage.setProperty('foo', '{"foo":"bar"}');
      });

      it('should delegate to decorated properties store', function () {
        expect(documentPropertiesMock.setProperty).toHaveBeenCalledWith('foo', '{"foo":"bar"}');
        expect(documentCacheMock.put).not.toHaveBeenCalled();
      });
    });

    describe('and the value is a JSON string with an `access_token`', () => {
      beforeEach(() => {
        tokenStorage.setProperty('foo', '{"token_type":"Bearer","access_token":"TOKEN"}');
      });

      it('should delegate to decorated properties store', function () {
        expect(documentPropertiesMock.setProperty).toHaveBeenCalledWith('foo', '{"token_type":"Bearer"}');
        expect(documentCacheMock.put).toHaveBeenCalledWith('foo', 'TOKEN', 1140)
      });
    });
  });
});
