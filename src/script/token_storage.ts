class TokenStorage implements GoogleAppsScript.Properties.Properties {
  static readonly TOKEN_TTL = 1140; // 19 minutes in seconds

  public constructor(
    private documentProperties: GoogleAppsScript.Properties.Properties,
    private documentCache: GoogleAppsScript.Cache.Cache
  ) { }

  public deleteAllProperties(): GoogleAppsScript.Properties.Properties {
    throw new Error('deleteAllProperties is not implemented.');
  }

  public deleteProperty(key: string): GoogleAppsScript.Properties.Properties {
    this.documentProperties.deleteProperty(key);
    this.documentCache.remove(key);

    return this;
  }

  public getKeys(): string[] {
    throw new Error('getKeys is not implemented.');
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

  public setProperties(properties: { [p: string]: string }): GoogleAppsScript.Properties.Properties;
  public setProperties(properties: { [p: string]: string }, deleteAllOthers: boolean): GoogleAppsScript.Properties.Properties;
  public setProperties(properties: { [p: string]: string }, deleteAllOthers?: boolean): GoogleAppsScript.Properties.Properties {
    throw new Error('setProperties is not implemented.');
  }

  public setProperty(key: string, value: string|null): GoogleAppsScript.Properties.Properties {

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
