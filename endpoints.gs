ENDPOINTS = {
  "alliances_alliance": {
    "description": "Public information about an alliance",
    "summary": "Get alliance information",
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
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "alliances_alliance_corporations": {
    "description": "List all current member corporations of an alliance",
    "summary": "List alliance's corporations",
    "request": "get",
    "version": 1,
    "headers": [
      "corporation_ids"
    ],
    "path": "/v1/alliances/{alliance_id}/corporations/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "alliances_names": {
    "description": "Resolve a set of alliance IDs to alliance names",
    "summary": "Get alliance names",
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
    "parameters": [
      {
        "name": "alliance_ids",
        "description": "A comma separated list of alliance IDs",
        "required": true,
        "type": "array"
      }
    ],
    "paginated": false
  },
  "alliances_alliance_icons": {
    "description": "Get the icon urls for a alliance",
    "summary": "Get alliance icon",
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
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "alliances": {
    "description": "List all active player alliances",
    "summary": "List all alliances",
    "request": "get",
    "version": 1,
    "headers": [
      "alliance_ids"
    ],
    "path": "/v1/alliances/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_assets": {
    "description": "Return a list of the characters assets",
    "summary": "Get character assets",
    "request": "get",
    "version": 3,
    "headers": [
      "type_id",
      "quantity",
      "location_id",
      "location_type",
      "item_id",
      "location_flag",
      "is_singleton"
    ],
    "path": "/v3/characters/{character_id}/assets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_assets": {
    "description": "Return a list of the corporation assets",
    "summary": "Get corporation assets",
    "request": "get",
    "version": 2,
    "headers": [
      "type_id",
      "quantity",
      "location_id",
      "location_type",
      "item_id",
      "location_flag",
      "is_singleton"
    ],
    "path": "/v2/corporations/{corporation_id}/assets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "characters_character_bookmarks": {
    "description": "A list of your character's personal bookmarks",
    "summary": "List bookmarks",
    "request": "get",
    "version": 2,
    "headers": [
      "bookmark_id",
      "folder_id",
      "created",
      "label",
      "notes",
      "location_id",
      "creator_id",
      "item",
      "coordinates"
    ],
    "path": "/v2/characters/{character_id}/bookmarks/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "characters_character_bookmarks_folders": {
    "description": "A list of your character's personal bookmark folders",
    "summary": "List bookmark folders",
    "request": "get",
    "version": 2,
    "headers": [
      "folder_id",
      "name"
    ],
    "path": "/v2/characters/{character_id}/bookmarks/folders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_bookmarks": {
    "description": "A list of your corporation's bookmarks",
    "summary": "List corporation bookmarks",
    "request": "get",
    "version": 1,
    "headers": [
      "bookmark_id",
      "creator_id",
      "folder_id",
      "created",
      "label",
      "notes",
      "location_id",
      "item",
      "coordinates"
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_bookmarks_folders": {
    "description": "A list of your corporation's bookmark folders",
    "summary": "List corporation bookmark folders",
    "request": "get",
    "version": 1,
    "headers": [
      "folder_id",
      "name",
      "creator_id"
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/folders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "characters_character_calendar": {
    "description": "Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.",
    "summary": "List calendar event summaries",
    "request": "get",
    "version": 1,
    "headers": [
      "event_id",
      "event_date",
      "title",
      "importance",
      "event_response"
    ],
    "path": "/v1/characters/{character_id}/calendar/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "from_event",
        "description": "The event ID to retrieve events from",
        "required": false,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "characters_character_calendar_event": {
    "description": "Get all the information for a specific event",
    "summary": "Get an event",
    "request": "get",
    "version": 3,
    "headers": [
      "event_id",
      "owner_id",
      "owner_name",
      "date",
      "title",
      "duration",
      "importance",
      "response",
      "text",
      "owner_type"
    ],
    "path": "/v3/characters/{character_id}/calendar/{event_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "event_id",
        "description": "The id of the event requested",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "characters_character_calendar_event_attendees": {
    "description": "Get all invited attendees for a given event",
    "summary": "Get attendees",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "event_response"
    ],
    "path": "/v1/characters/{character_id}/calendar/{event_id}/attendees/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "event_id",
        "description": "The id of the event requested",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "characters_character": {
    "description": "Public information about a character",
    "summary": "Get character's public information",
    "request": "get",
    "version": 4,
    "headers": [
      "name",
      "description",
      "corporation_id",
      "alliance_id",
      "birthday",
      "gender",
      "race_id",
      "bloodline_id",
      "ancestry_id",
      "security_status",
      "faction_id"
    ],
    "path": "/v4/characters/{character_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "post": {
    "description": "Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost\n\n---\n",
    "summary": "Calculate a CSPA charge cost",
    "tags": [
      "Character"
    ],
    "parameters": [
      {
        "$ref": "#/parameters/character_id"
      },
      {
        "name": "characters",
        "in": "body",
        "description": "The target characters to calculate the charge for",
        "required": true,
        "schema": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "maxItems": 100,
          "items": {
            "type": "integer",
            "format": "int32",
            "title": "post_characters_character_id_cspa_character",
            "description": "character integer"
          },
          "title": "post_characters_character_id_cspa_characters",
          "description": "characters array"
        }
      },
      {
        "$ref": "#/parameters/datasource"
      },
      {
        "$ref": "#/parameters/token"
      },
      {
        "$ref": "#/parameters/user_agent"
      },
      {
        "$ref": "#/parameters/X-User-Agent"
      }
    ],
    "responses": {
      "201": {
        "description": "Aggregate cost of sending a mail from the source character to the target characters, in ISK",
        "examples": {
          "application/json": 2950.0
        },
        "schema": {
          "type": "number",
          "format": "float",
          "title": "post_characters_character_id_cspa_created",
          "description": "201 created number"
        }
      },
      "403": {
        "description": "Forbidden",
        "schema": {
          "$ref": "#/definitions/forbidden"
        },
        "examples": {
          "application/json": {
            "error": "Forbidden message"
          }
        }
      },
      "500": {
        "description": "Internal server error",
        "schema": {
          "$ref": "#/definitions/internal_server_error"
        },
        "examples": {
          "application/json": {
            "error": "Internal server error message"
          }
        }
      }
    },
    "security": [
      {
        "evesso": [
          "esi-characters.read_contacts.v1"
        ]
      }
    ],
    "operationId": "post_characters_character_id_cspa",
    "x-alternate-versions": [
      "dev",
      "v4"
    ]
  },
  "characters_names": {
    "description": "Resolve a set of character IDs to character names",
    "summary": "Get character names",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "character_name"
    ],
    "path": "/v1/characters/names/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "character_ids",
        "description": "A comma separated list of character IDs",
        "required": true,
        "type": "array"
      }
    ],
    "paginated": false
  },
  "characters_character_portrait": {
    "description": "Get portrait urls for a character",
    "summary": "Get character portraits",
    "request": "get",
    "version": 2,
    "headers": [
      "px64x64",
      "px128x128",
      "px256x256",
      "px512x512"
    ],
    "path": "/v2/characters/{character_id}/portrait/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_corporationhistory": {
    "description": "Get a list of all the corporations a character has been a member of",
    "summary": "Get corporation history",
    "request": "get",
    "version": 1,
    "headers": [
      "start_date",
      "corporation_id",
      "is_deleted",
      "record_id"
    ],
    "path": "/v1/characters/{character_id}/corporationhistory/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_chat_channels": {
    "description": "Return chat channels that a character is the owner or operator of",
    "summary": "Get chat channels",
    "request": "get",
    "version": 1,
    "headers": [
      "channel_id",
      "name",
      "owner_id",
      "comparison_key",
      "has_password",
      "motd",
      "allowed",
      "operators",
      "blocked",
      "muted"
    ],
    "path": "/v1/characters/{character_id}/chat_channels/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_medals": {
    "description": "Return a list of medals the character has",
    "summary": "Get medals",
    "request": "get",
    "version": 1,
    "headers": [
      "medal_id",
      "title",
      "description",
      "corporation_id",
      "issuer_id",
      "date",
      "reason",
      "status",
      "graphics"
    ],
    "path": "/v1/characters/{character_id}/medals/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_standings": {
    "description": "Return character standings from agents, NPC corporations, and factions",
    "summary": "Get standings",
    "request": "get",
    "version": 1,
    "headers": [
      "from_id",
      "from_type",
      "standing"
    ],
    "path": "/v1/characters/{character_id}/standings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_agents_research": {
    "description": "Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime ",
    "summary": "Get agents research",
    "request": "get",
    "version": 1,
    "headers": [
      "agent_id",
      "skill_type_id",
      "started_at",
      "points_per_day",
      "remainder_points"
    ],
    "path": "/v1/characters/{character_id}/agents_research/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_blueprints": {
    "description": "Return a list of blueprints the character owns",
    "summary": "Get blueprints",
    "request": "get",
    "version": 2,
    "headers": [
      "item_id",
      "type_id",
      "location_id",
      "location_flag",
      "quantity",
      "time_efficiency",
      "material_efficiency",
      "runs"
    ],
    "path": "/v2/characters/{character_id}/blueprints/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "characters_character_fatigue": {
    "description": "Return a character's jump activation and fatigue information",
    "summary": "Get jump fatigue",
    "request": "get",
    "version": 1,
    "headers": [
      "last_jump_date",
      "jump_fatigue_expire_date",
      "last_update_date"
    ],
    "path": "/v1/characters/{character_id}/fatigue/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_notifications_contacts": {
    "description": "Return notifications about having been added to someone's contact list",
    "summary": "Get new contact notifications",
    "request": "get",
    "version": 1,
    "headers": [
      "notification_id",
      "send_date",
      "standing_level",
      "message",
      "sender_character_id"
    ],
    "path": "/v1/characters/{character_id}/notifications/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_notifications": {
    "description": "Return character notifications",
    "summary": "Get character notifications",
    "request": "get",
    "version": 1,
    "headers": [
      "notification_id",
      "type",
      "sender_id",
      "sender_type",
      "timestamp",
      "is_read",
      "text"
    ],
    "path": "/v1/characters/{character_id}/notifications/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_roles": {
    "description": "Returns a character's corporation roles",
    "summary": "Get character corporation roles",
    "request": "get",
    "version": 2,
    "headers": [
      "roles",
      "roles_at_hq",
      "roles_at_base",
      "roles_at_other"
    ],
    "path": "/v2/characters/{character_id}/roles/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_titles": {
    "description": "Returns a character's titles",
    "summary": "Get character corporation titles",
    "request": "get",
    "version": 1,
    "headers": [
      "title_id",
      "name"
    ],
    "path": "/v1/characters/{character_id}/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_stats": {
    "description": "Returns aggregate yearly stats for a character",
    "summary": "Yearly aggregate stats",
    "request": "get",
    "version": 2,
    "headers": [
      "year",
      "character",
      "combat",
      "industry",
      "inventory",
      "isk",
      "market",
      "mining",
      "module",
      "orbital",
      "pve",
      "social",
      "travel"
    ],
    "path": "/v2/characters/{character_id}/stats/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_clones": {
    "description": "A list of the character's clones",
    "summary": "Get clones",
    "request": "get",
    "version": 3,
    "headers": [
      "last_clone_jump_date",
      "home_location",
      "last_station_change_date",
      "jump_clones"
    ],
    "path": "/v3/characters/{character_id}/clones/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_implants": {
    "description": "Return implants on the active clone of a character",
    "summary": "Get active implants",
    "request": "get",
    "version": 1,
    "headers": [
      "implant_ids"
    ],
    "path": "/v1/characters/{character_id}/implants/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "delete": {
    "description": "Bulk delete contacts\n\n---\n",
    "summary": "Delete contacts",
    "tags": [
      "Contacts"
    ],
    "parameters": [
      {
        "$ref": "#/parameters/character_id"
      },
      {
        "name": "contact_ids",
        "in": "query",
        "description": "A list of contacts to delete",
        "required": true,
        "type": "array",
        "minItems": 1,
        "maxItems": 20,
        "items": {
          "type": "integer",
          "format": "int32"
        }
      },
      {
        "$ref": "#/parameters/datasource"
      },
      {
        "$ref": "#/parameters/token"
      },
      {
        "$ref": "#/parameters/user_agent"
      },
      {
        "$ref": "#/parameters/X-User-Agent"
      }
    ],
    "responses": {
      "204": {
        "description": "Contacts deleted"
      },
      "403": {
        "description": "Forbidden",
        "schema": {
          "$ref": "#/definitions/forbidden"
        },
        "examples": {
          "application/json": {
            "error": "Forbidden message"
          }
        }
      },
      "500": {
        "description": "Internal server error",
        "schema": {
          "$ref": "#/definitions/internal_server_error"
        },
        "examples": {
          "application/json": {
            "error": "Internal server error message"
          }
        }
      }
    },
    "security": [
      {
        "evesso": [
          "esi-characters.write_contacts.v1"
        ]
      }
    ],
    "operationId": "delete_characters_character_id_contacts",
    "x-alternate-versions": [
      "dev",
      "v2"
    ]
  },
  "characters_character_contacts": {
    "description": "Return contacts of a character",
    "summary": "Get contacts",
    "request": "get",
    "version": 1,
    "headers": [
      "standing",
      "contact_type",
      "contact_id",
      "is_watched",
      "is_blocked",
      "label_id"
    ],
    "path": "/v1/characters/{character_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_contacts": {
    "description": "Return contacts of a corporation",
    "summary": "Get corporation contacts",
    "request": "get",
    "version": 1,
    "headers": [
      "standing",
      "contact_type",
      "contact_id",
      "is_watched",
      "label_id"
    ],
    "path": "/v1/corporations/{corporation_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "alliances_alliance_contacts": {
    "description": "Return contacts of an alliance",
    "summary": "Get alliance contacts",
    "request": "get",
    "version": 1,
    "headers": [
      "standing",
      "contact_type",
      "contact_id",
      "label_id"
    ],
    "path": "/v1/alliances/{alliance_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "alliance_id",
        "description": "An EVE alliance ID",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": true
  },
  "characters_character_contacts_labels": {
    "description": "Return custom labels for contacts the character defined",
    "summary": "Get contact labels",
    "request": "get",
    "version": 1,
    "headers": [
      "label_id",
      "label_name"
    ],
    "path": "/v1/characters/{character_id}/contacts/labels/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_contracts": {
    "description": "Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "summary": "Get contracts",
    "request": "get",
    "version": 1,
    "headers": [
      "contract_id",
      "issuer_id",
      "issuer_corporation_id",
      "assignee_id",
      "acceptor_id",
      "start_location_id",
      "end_location_id",
      "type",
      "status",
      "title",
      "for_corporation",
      "availability",
      "date_issued",
      "date_expired",
      "date_accepted",
      "days_to_complete",
      "date_completed",
      "price",
      "reward",
      "collateral",
      "buyout",
      "volume"
    ],
    "path": "/v1/characters/{character_id}/contracts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "characters_character_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "summary": "Get contract items",
    "request": "get",
    "version": 1,
    "headers": [
      "record_id",
      "type_id",
      "quantity",
      "raw_quantity",
      "is_singleton",
      "is_included"
    ],
    "path": "/v1/characters/{character_id}/contracts/{contract_id}/items/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "contract_id",
        "description": "ID of a contract",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "characters_character_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "summary": "Get contract bids",
    "request": "get",
    "version": 1,
    "headers": [
      "bid_id",
      "bidder_id",
      "date_bid",
      "amount"
    ],
    "path": "/v1/characters/{character_id}/contracts/{contract_id}/bids/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "contract_id",
        "description": "ID of a contract",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_contracts": {
    "description": "Returns contracts available to a coporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "summary": "Get coporation contracts",
    "request": "get",
    "version": 1,
    "headers": [
      "contract_id",
      "issuer_id",
      "issuer_corporation_id",
      "assignee_id",
      "acceptor_id",
      "start_location_id",
      "end_location_id",
      "type",
      "status",
      "title",
      "for_corporation",
      "availability",
      "date_issued",
      "date_expired",
      "date_accepted",
      "days_to_complete",
      "date_completed",
      "price",
      "reward",
      "collateral",
      "buyout",
      "volume"
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "summary": "Get corporation contract items",
    "request": "get",
    "version": 1,
    "headers": [
      "record_id",
      "type_id",
      "quantity",
      "raw_quantity",
      "is_singleton",
      "is_included"
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/{contract_id}/items/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "contract_id",
        "description": "ID of a contract",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "summary": "Get corporation contract bids",
    "request": "get",
    "version": 1,
    "headers": [
      "bid_id",
      "bidder_id",
      "date_bid",
      "amount"
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "contract_id",
        "description": "ID of a contract",
        "required": true,
        "type": "integer"
      }
    ],
    "paginated": true
  },
  "corporations_corporation": {
    "description": "Public information about a corporation",
    "summary": "Get corporation information",
    "request": "get",
    "version": 4,
    "headers": [
      "name",
      "ticker",
      "member_count",
      "ceo_id",
      "alliance_id",
      "description",
      "tax_rate",
      "date_founded",
      "creator_id",
      "url",
      "faction_id",
      "home_station_id",
      "shares"
    ],
    "path": "/v4/corporations/{corporation_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_alliancehistory": {
    "description": "Get a list of all the alliances a corporation has been a member of",
    "summary": "Get alliance history",
    "request": "get",
    "version": 2,
    "headers": [
      "start_date",
      "alliance_id",
      "is_deleted",
      "record_id"
    ],
    "path": "/v2/corporations/{corporation_id}/alliancehistory/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "params": [
    "{alliance_id}",
    "{language}",
    "{alliance_ids}",
    "{item_ids}",
    "{from_event}",
    "{event_id}",
    "{characters}",
    "{character_ids}",
    "{contract_id}",
    "{character_id}",
    "{corporation_id}"
  ]
};
