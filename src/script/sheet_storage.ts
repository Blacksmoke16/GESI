import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import User = GoogleAppsScript.Base.User;

type CharacterRow = [string, string, string];

enum CharacterSheetColumns {
  Id,
  RefreshToken,
  CharacterName
}

class SheetStorage {
  private static readonly CHARACTER_SHEET = 'Authenticated Characters';
  private static readonly COLUMN_COUNT = Object.keys(CharacterSheetColumns).length / 2;
  private static readonly TOKEN_LIFESPAN = 1080;
  private static readonly TOKEN_TYPE = 'Bearer';

  private readonly id: string;
  private readonly cache: GoogleAppsScript.Cache.Cache;

  private readonly authedCharactersSheet: Spreadsheet;
  private refreshToken?: string;

  constructor(id: string, cache: GoogleAppsScript.Cache.Cache, refreshToken?: string) {
    this.id = id;
    this.cache = cache;

    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let authedCharactersSheet = ss.getSheetByName(SheetStorage.CHARACTER_SHEET);

    // Create the auth sheet if it does not already exist
    if (null === authedCharactersSheet) {
      authedCharactersSheet = ss.insertSheet(SheetStorage.CHARACTER_SHEET).hideSheet();
      authedCharactersSheet.deleteRows(1, authedCharactersSheet.getMaxRows() - 1);
      authedCharactersSheet.deleteColumns(SheetStorage.COLUMN_COUNT, authedCharactersSheet.getMaxColumns() - SheetStorage.COLUMN_COUNT);
      const protectedData = authedCharactersSheet.protect().setDescription('Only sheet owner can view auth data');
      protectedData.removeEditors(protectedData.getEditors().map((u: User) => u.getEmail()));
      protectedData.addEditor(ss.getOwner()!.getEmail());
    }

    this.authedCharactersSheet = authedCharactersSheet;

    if (refreshToken) {
      this.refreshToken = refreshToken;
    } else {
      this.refreshToken = this.resolveRefreshToken();
    }
  }

  public setValue(_key: string, value: IToken): void {
    if (!this.refreshToken) {
      this.authedCharactersSheet.appendRow(this.tokenToArray(value));
      this.refreshToken = value.refresh_token;
    }

    this.cache.put(this.id, `${value.granted_time}|${value.access_token!}`, SheetStorage.TOKEN_LIFESPAN);
  }

  public getValue(_key: string, _optSkipMemoryCheck: boolean = false): IToken | null {
    if (!this.refreshToken) {
      return null;
    }

    const token = this.cache.get(this.id);
    let access_token = null;
    let granted_time = 0;

    if (token) {
      const data = token.split('|');
      granted_time = Number(data[0]);
      access_token = data[1];
    }

    return {
      access_token,
      refresh_token: this.refreshToken!, // Should be resolved by this point
      expires_in: SheetStorage.TOKEN_LIFESPAN,
      granted_time,
      token_type: SheetStorage.TOKEN_TYPE,
    };
  }

  public reset(): void {
    const dataRange = this.authedCharactersSheet.getDataRange();

    // Just clear the row if there is only 1 character authed
    // since you cant delete all the rows in a sheet
    if (dataRange.getNumRows() === 1) {
      return dataRange.clear();
    }

    // Otherwise, delete the row related to this character
    this.authedCharactersSheet.deleteRow(this.getRowIndex() + 1);
  }

  private tokenToArray(token: IToken): CharacterRow {
    return [
      this.id,
      token.refresh_token,
      ESIClient.parseToken(token.access_token!).name,
    ];
  }

  private resolveRefreshToken(): string | undefined {
    // Resolve the row, if any, for the current character
    const authedCharacterRowIndex = this.getRowIndex();

    if (authedCharacterRowIndex !== -1) {
      // Cache the refresh token to avoid sheet lookups every time getValue is called
      return this.authedCharactersSheet.getRange(authedCharacterRowIndex + 1, 1, 1, SheetStorage.COLUMN_COUNT).getCell(1, CharacterSheetColumns.RefreshToken + 1).getValue();
    }
  }

  private getRowIndex(): number {
    return this.authedCharactersSheet.getDataRange().getValues().findIndex((row: CharacterRow) => row[CharacterSheetColumns.Id] === this.id);
  }
}
