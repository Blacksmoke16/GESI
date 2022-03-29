/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.properties.d.ts" />

import Properties = GoogleAppsScript.Properties.Properties;
import Cache = GoogleAppsScript.Cache.Cache;

class TokenStorage implements Properties {
  static readonly TOKEN_TTL = 1140; // 19 minutes in seconds

  public constructor(
    private documentProperties: Properties,
    private documentCache: Cache
  ) { }

  public deleteAllProperties(): Properties {
    this.documentProperties.deleteAllProperties();
    return this;
  }

  public deleteProperty(key: string): Properties {
    this.documentProperties.deleteProperty(key);
    this.documentCache.remove(key);

    return this;
  }

  public getKeys(): string[] {
    return this.documentProperties.getKeys();
  }

  public getProperties(): { [p: string]: string } {
   return this.documentProperties.getProperties();
  }

  public getProperty(key: string): string | null {
    const data = this.documentProperties.getProperty(key);

    if (null === data) {
      return null;
    }

    let jsonData;

    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      // Stored value wasn't JSON encoded
      if (e instanceof SyntaxError) {
        return data;
      }

      throw e;
    }

    // If the fetch value is our token object, add back the access token from cache.
    if (jsonData.hasOwnProperty('token_type')) {
      jsonData.access_token = this.documentCache.get(key);
    }

    return JSON.stringify(jsonData);
  }

  public setProperties(properties: { [p: string]: string }): Properties;
  public setProperties(properties: { [p: string]: string }, deleteAllOthers: boolean): Properties;
  public setProperties(_properties: { [p: string]: string }, _deleteAllOthers?: boolean): Properties {
    throw new Error('setProperties is not implemented.');
  }

  public setProperty(key: string, value: string): Properties {

    if (null === value) {
      return this.documentProperties.setProperty(key, value);
    }

    let jsonData;

    try {
      jsonData = JSON.parse(value);
    } catch (e) {
      // Stored value wasn't JSON encoded
      if (e instanceof SyntaxError) {
        return this.documentProperties.setProperty(key, value);
      }

      throw e;
    }

    if (!jsonData.hasOwnProperty('access_token')) {
      return this.documentProperties.setProperty(key, value);
    }


    const token = jsonData.access_token;
    delete jsonData.access_token;

    this.documentProperties.setProperty(key, JSON.stringify(jsonData));
    this.documentCache.put(key!, token, TokenStorage.TOKEN_TTL);

    return this;
  }
}

export { TokenStorage }
