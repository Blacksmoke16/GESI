import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import User = GoogleAppsScript.Base.User;

type CharacterRow = [string, string, number, string, number, string];

enum CharacterSheetColumns {
  Id,
  AccessToken,
  ExpiresIn,
  RefreshToken,
  GrantedTime,
  TokenType
}

class SheetStorage {
  private static readonly CHARACTER_SHEET = 'Authenticated Characters';
  private static readonly COLUMN_COUNT = Object.keys(CharacterSheetColumns).length / 2;

  private readonly authedCharactersSheet: Spreadsheet;
  private authedCharacterRow?: GoogleAppsScript.Spreadsheet.Range;
  private readonly id: string;

  constructor(id: string) {
    this.id = id;

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
  }

  public setValue(key: string, value: any): void {
    this.resolveCharacterRow();

    // Just append a new row if this character does not already exist
    if (!this.authedCharacterRow) {
      this.authedCharactersSheet.appendRow(this.tokenToArray(value));
    } else {
      // Otherwise update the values
      this.authedCharacterRow.setValues(this.tokenToArray(value));
    }

    // Resize the sheet to fit the new values
    this.authedCharactersSheet.autoResizeColumns(1, SheetStorage.COLUMN_COUNT);
  }

  public getValue(key: string, optSkipMemoryCheck: boolean = false): IToken | null {
    this.resolveCharacterRow();

    if (!this.authedCharacterRow) {
      return null;
    }

    return {
      access_token: this.authedCharacterRow.getCell(1, CharacterSheetColumns.AccessToken + 1).getValue(),
      refresh_token: this.authedCharacterRow.getCell(1, CharacterSheetColumns.RefreshToken + 1).getValue(),
      expires_in: this.authedCharacterRow.getCell(1, CharacterSheetColumns.ExpiresIn + 1).getValue(),
      granted_time: this.authedCharacterRow.getCell(1, CharacterSheetColumns.GrantedTime + 1).getValue(),
      token_type: this.authedCharacterRow.getCell(1, CharacterSheetColumns.TokenType + 1).getValue()
    };
  }

  public reset(): void {
    const dataRange = this.authedCharactersSheet.getDataRange();

    // Just clear the row if there is only 1 character authed
    // since you cant delete all the rows in a sheet
    if (dataRange.getNumRows() === 1) {
      return dataRange.clear();
    }

    this.resolveCharacterRow();

    if (!this.authedCharacterRow) {
      return;
    }

    // Otherwise, delete the row related to this character
    this.authedCharactersSheet.deleteRow(this.authedCharacterRow.getRow());
  }

  private tokenToArray(token: IToken): CharacterRow {
    return [
      this.id,
      token.access_token,
      token.expires_in,
      token.refresh_token,
      token.granted_time,
      token.token_type
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
