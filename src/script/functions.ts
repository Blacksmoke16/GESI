function alliances(show_column_headings: boolean = true, version?: string): SheetsArray {
  return invoke_('alliances', { show_column_headings, version });
}

function alliances_alliance(alliance_id: number, show_column_headings: boolean = true, version?: string): SheetsArray {
  return invoke_('alliances_alliance', { alliance_id, show_column_headings, version });
}

function characters_character_assets(name?: string, show_column_headings: boolean = true, version?: string): any[][] {
  return invoke_('characters_character_assets', { name, show_column_headings, version });
}
