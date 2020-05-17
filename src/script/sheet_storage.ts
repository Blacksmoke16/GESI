import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import User = GoogleAppsScript.Base.User;

type CharacterRow = [string, string];

enum CharacterSheetColumns {
  Id,
  RefreshToken,
}

class SheetStorage {
  private static readonly CHARACTER_SHEET = 'Authenticated Characters';
  private static readonly COLUMN_COUNT = Object.keys(CharacterSheetColumns).length / 2;
  private static readonly TOKEN_LIFESPAN = 1080;
  private static readonly TOKEN_TYPE = 'Bearer';

  private readonly authedCharactersSheet: Spreadsheet;
  private authedCharacterRow?: GoogleAppsScript.Spreadsheet.Range;
  private readonly id: string;
  private readonly cache: GoogleAppsScript.Cache.Cache;

  constructor(id: string, cache: GoogleAppsScript.Cache.Cache) {
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
    this.resolveCharacterRow();
  }

  public setValue(_key: string, value: IToken): void {
    if (!this.authedCharacterRow) {
      this.authedCharactersSheet.appendRow(this.tokenToArray(value));
      this.resolveCharacterRow();
    }

    this.cache.put(this.id, value.access_token!, SheetStorage.TOKEN_LIFESPAN);
  }

  public getValue(_key: string, _optSkipMemoryCheck: boolean = false): IToken | null {
    if (!this.authedCharacterRow) {
      return null;
    }

    return {
      access_token: this.cache.get(this.id),
      refresh_token: this.authedCharacterRow.getCell(1, CharacterSheetColumns.RefreshToken + 1).getValue(),
      expires_in: 1200,
      granted_time: 0,
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
    this.authedCharactersSheet.deleteRow(this.authedCharacterRow!.getRow());
  }

  private tokenToArray(token: IToken): CharacterRow {
    return [
      this.id,
      token.refresh_token,
    ];
  }

  private resolveCharacterRow(): void {
    // Resolve the row, if any, for the current character
    const authedCharacterRowIndex = this.authedCharactersSheet.getDataRange().getValues().findIndex((row: CharacterRow) => row[CharacterSheetColumns.Id] === this.id);

    if (authedCharacterRowIndex !== -1) {
      this.authedCharacterRow = this.authedCharactersSheet.getRange(authedCharacterRowIndex + 1, 1, 1, SheetStorage.COLUMN_COUNT);
    }
  }
}
