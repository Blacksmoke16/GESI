function alliances(opt_headers: boolean = true, version?: string): SheetsArray {
  return invoke('alliances', { opt_headers, version });
}

function alliances_alliance(alliance_id: number, opt_headers: boolean = true, version?: string): SheetsArray {
  return invoke('alliances_alliance', { alliance_id, opt_headers, version });
}

function characters_character_assets(name?: string, opt_headers: boolean = true, version?: string): any[][] {
  return invoke('characters_character_assets', { name, opt_headers, version });
}
