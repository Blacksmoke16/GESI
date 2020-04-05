const ENDPOINTS: IEndpointList = {
  alliances: {
    description: 'List all active player alliances',
    headers: [
      {
        name: 'alliance_ids',
      },
    ],
    method: 'GET',
    path: '/{version}/alliances/',
    parameters: [
      {
        description: 'Boolean if column headings should be listed or not. Default: true',
        'in': 'parameters',
        name: 'opt_headers',
        type: 'boolean',
        required: false,
      },
      {
        description: 'Which ESI version to use for the request. Default: Current ESI latest stable version.',
        'in': 'path',
        name: 'version',
        type: 'string',
        required: false,
      },
    ],
    paginated: false,
    summary: 'List of Alliance IDs',
    version: 'v1',
  },
  characters_affiliation: {
    description: 'Bulk lookup of character IDs to corporation, alliance and faction',
    headers: [
      {
        name: 'alliance_id',
      },
      {
        name: 'character_id',
      },
      {
        name: 'corporation_id',
      },
      {
        name: 'faction_id',
      },
    ],
    method: 'POST',
    path: '/{version}/characters/affiliation/',
    parameters: [
      {
        description: 'The character IDs to fetch affiliations for. All characters must exist, or none will be returned',
        'in': 'body',
        name: 'characters',
        type: 'number[]',
        required: true,
      },
      {
        description: 'Boolean if column headings should be listed or not. Default: true',
        'in': 'parameters',
        name: 'opt_headers',
        type: 'boolean',
        required: false,
      },
      {
        description: 'Which ESI version to use for the request. Default: Current ESI latest stable version.',
        'in': 'path',
        name: 'version',
        type: 'string',
        required: false,
      },
    ],
    paginated: false,
    summary: 'Character corporation, alliance and faction IDs',
    version: 'v1',
  },
  alliances_alliance: {
    description: "Public information about an alliance",
    headers: [
      {
        name: "creator_corporation_id"
      },
      {
        name: "creator_id"
      },
      {
        name: "date_founded"
      },
      {
        name: "executor_corporation_id"
      },
      {
        name: "faction_id"
      },
      {
        name: "name"
      },
      {
        name: "ticker"
      }
    ],
    method: "GET",
    path: "/{version}/alliances/{alliance_id}/",
    parameters: [
      {
        description: "An EVE alliance ID",
        "in": "path",
        name: "alliance_id",
        type: "number",
        required: true
      },
      {
        description: "Boolean if column headings should be listed or not. Default: true",
        "in": "parameters",
        name: "opt_headers",
        type: "boolean",
        required: false
      },
      {
        description: "Which ESI version to use for the request. Default: Current ESI latest stable version.",
        "in": "path",
        name: "version",
        type: "string",
        required: false
      }
    ],
    paginated: false,
    summary: "Public data about an alliance",
    version: "v3"
  },
  "characters_character_assets": {
    description: "Return a list of the characters assets",
    headers: [
      {
        name: "is_blueprint_copy"
      },
      {
        name: "is_singleton"
      },
      {
        name: "item_id"
      },
      {
        name: "location_flag"
      },
      {
        name: "location_id"
      },
      {
        name: "location_type"
      },
      {
        name: "quantity"
      },
      {
        name: "type_id"
      }
    ],
    method: "GET",
    path: "/{version}/characters/{character_id}/assets/",
    parameters: [
      {
        description: "Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.",
        "in": "parameters",
        name: "name",
        type: "string",
        required: false
      },
      {
        description: "Boolean if column headings should be listed or not. Default: true",
        "in": "parameters",
        name: "opt_headers",
        type: "boolean",
        required: false
      },
      {
        description: "Which ESI version to use for the request. Default: Current ESI latest stable version.",
        "in": "path",
        name: "version",
        type: "string",
        required: false
      }
    ],
    paginated: true,
    scope: "esi-assets.read_assets.v1",
    summary: "A flat list of the users assets",
    version: "v4"
  },
};
