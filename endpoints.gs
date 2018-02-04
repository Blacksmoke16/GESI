ENDPOINTS = {
  "alliances_alliance": {
    "description": "Public information about an alliance",
    "request": "get",
    "version": 3,
    "headers": [
      "name",
      "creator_id",
      "creator_corporation_id",
      "ticker",
      "executor_corporation_id",
      "date_founded",
      "faction_id"
    ],
    "path": "/v3/alliances/{alliance_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "return_description": "200 ok object",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ]
  },
  "alliances_alliance_corporations": {
    "description": "List all current member corporations of an alliance",
    "request": "get",
    "version": 1,
    "headers": [
      "corporation_ids"
    ],
    "path": "/v1/alliances/{alliance_id}/corporations/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "return_description": "200 ok array",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ]
  },
  "alliances_names": {
    "description": "Resolve a set of alliance IDs to alliance names",
    "request": "get",
    "version": 2,
    "headers": [
      "alliance_id",
      "alliance_name"
    ],
    "path": "/v2/alliances/names/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "return_description": "200 ok array",
    "parameters": [
      {
        "name": "alliance_ids",
        "description": "A comma separated list of alliance IDs",
        "required": true,
        "type": "array"
      }
    ]
  },
  "alliances_alliance_icons": {
    "description": "Get the icon urls for a alliance",
    "request": "get",
    "version": 1,
    "headers": [
      "px64x64",
      "px128x128"
    ],
    "path": "/v1/alliances/{alliance_id}/icons/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "return_description": "200 ok object",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ]
  },
  "alliances": {
    "description": "List all active player alliances",
    "request": "get",
    "version": 1,
    "headers": [
      "alliance_ids"
    ],
    "path": "/v1/alliances/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "return_description": "200 ok array",
    "parameters": [

    ]
  },
  "params": [
    "{page}",
    "{character_id}",
    "{corporation_id}",
    "{alliance_id}",
    "{language}",
    "{alliance_ids}"
  ]
};
