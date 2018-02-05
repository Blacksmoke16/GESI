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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
        "type": "array",
        "in": "query"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "query"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
        "type": "array",
        "in": "query"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
        "type": "integer",
        "in": "path"
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
  "corporations_names": {
    "description": "Resolve a set of corporation IDs to corporation names",
    "summary": "Get corporation names",
    "request": "get",
    "version": 2,
    "headers": [
      "corporation_id",
      "corporation_name"
    ],
    "path": "/v2/corporations/names/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "corporation_ids",
        "description": "A comma separated list of corporation IDs",
        "required": true,
        "type": "array",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_members": {
    "description": "Return the current member list of a corporation, the token's character need to be a member of the corporation.",
    "summary": "Get corporation members",
    "request": "get",
    "version": 3,
    "headers": [
      "member_ids"
    ],
    "path": "/v3/corporations/{corporation_id}/members/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_roles": {
    "description": "Return the roles of all members if the character has the personnel manager role or any grantable role.",
    "summary": "Get corporation member roles",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "roles",
      "grantable_roles",
      "roles_at_hq",
      "grantable_roles_at_hq",
      "roles_at_base",
      "grantable_roles_at_base",
      "roles_at_other",
      "grantable_roles_at_other"
    ],
    "path": "/v1/corporations/{corporation_id}/roles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_roles_history": {
    "description": "Return how roles have changed for a coporation's members, up to a month",
    "summary": "Get corporation member roles history",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "changed_at",
      "issuer_id",
      "role_type",
      "old_roles",
      "new_roles"
    ],
    "path": "/v1/corporations/{corporation_id}/roles/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_icons": {
    "description": "Get the icon urls for a corporation",
    "summary": "Get corporation icon",
    "request": "get",
    "version": 1,
    "headers": [
      "px64x64",
      "px128x128",
      "px256x256"
    ],
    "path": "/v1/corporations/{corporation_id}/icons/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_npccorps": {
    "description": "Get a list of npc corporations",
    "summary": "Get npc corporations",
    "request": "get",
    "version": 1,
    "headers": [
      "npccorp_ids"
    ],
    "path": "/v1/corporations/npccorps/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_structures": {
    "description": "Get a list of corporation structures",
    "summary": "Get corporation structures",
    "request": "get",
    "version": 1,
    "headers": [
      "structure_id",
      "type_id",
      "corporation_id",
      "system_id",
      "profile_id",
      "current_vul",
      "next_vul",
      "fuel_expires",
      "services",
      "state_timer_start",
      "state_timer_end",
      "unanchors_at"
    ],
    "path": "/v1/corporations/{corporation_id}/structures/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": true
  },
  "corporations_corporation_membertracking": {
    "description": "Returns additional information about a corporation's members which helps tracking their activities",
    "summary": "Track corporation members",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "start_date",
      "base_id",
      "logon_date",
      "logoff_date",
      "location_id",
      "ship_type_id"
    ],
    "path": "/v1/corporations/{corporation_id}/membertracking/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_divisions": {
    "description": "Return corporation hangar and wallet division names, only show if a division is not using the default name",
    "summary": "Get corporation divisions",
    "request": "get",
    "version": 1,
    "headers": [
      "hangar",
      "wallet"
    ],
    "path": "/v1/corporations/{corporation_id}/divisions/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_members_limit": {
    "description": "Return a corporation's member limit, not including CEO himself",
    "summary": "Get corporation member limit",
    "request": "get",
    "version": 1,
    "headers": [
      "object"
    ],
    "path": "/v1/corporations/{corporation_id}/members/limit/",
    "authed": true,
    "response_type": "integer",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_titles": {
    "description": "Returns a corporation's titles",
    "summary": "Get corporation titles",
    "request": "get",
    "version": 1,
    "headers": [
      "title_id",
      "name",
      "roles",
      "grantable_roles",
      "roles_at_hq",
      "grantable_roles_at_hq",
      "roles_at_base",
      "grantable_roles_at_base",
      "roles_at_other",
      "grantable_roles_at_other"
    ],
    "path": "/v1/corporations/{corporation_id}/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_members_titles": {
    "description": "Returns a corporation's members' titles",
    "summary": "Get corporation's members' titles",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "titles"
    ],
    "path": "/v1/corporations/{corporation_id}/members/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_blueprints": {
    "description": "Returns a list of blueprints the corporation owns",
    "summary": "Get corporation blueprints",
    "request": "get",
    "version": 1,
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
    "path": "/v1/corporations/{corporation_id}/blueprints/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_standings": {
    "description": "Return corporation standings from agents, NPC corporations, and factions",
    "summary": "Get corporation standings",
    "request": "get",
    "version": 1,
    "headers": [
      "from_id",
      "from_type",
      "standing"
    ],
    "path": "/v1/corporations/{corporation_id}/standings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_starbases": {
    "description": "Returns list of corporation starbases (POSes)",
    "summary": "Get corporation starbases (POSes)",
    "request": "get",
    "version": 1,
    "headers": [
      "starbase_id",
      "type_id",
      "system_id",
      "moon_id",
      "state",
      "unanchor_at",
      "reinforced_until",
      "onlined_since"
    ],
    "path": "/v1/corporations/{corporation_id}/starbases/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_starbases_starbase": {
    "description": "Returns various settings and fuels of a starbase (POS)",
    "summary": "Get starbase (POS) detail",
    "request": "get",
    "version": 1,
    "headers": [
      "fuel_bay_view",
      "fuel_bay_take",
      "anchor",
      "unanchor",
      "online",
      "offline",
      "allow_corporation_members",
      "allow_alliance_members",
      "use_alliance_standings",
      "attack_standing_threshold",
      "attack_security_status_threshold",
      "attack_if_other_security_status_dropping",
      "attack_if_at_war",
      "fuels"
    ],
    "path": "/v1/corporations/{corporation_id}/starbases/{starbase_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "starbase_id",
        "description": "An EVE starbase (POS) ID",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "system_id",
        "description": "The solar system this starbase (POS) is located in,",
        "required": true,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_containers_logs": {
    "description": "Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation",
    "summary": "Get all corporation ALSC logs",
    "request": "get",
    "version": 1,
    "headers": [
      "logged_at",
      "container_id",
      "container_type_id",
      "character_id",
      "location_id",
      "location_flag",
      "action",
      "password_type",
      "type_id",
      "quantity",
      "old_config_bitmask",
      "new_config_bitmask"
    ],
    "path": "/v1/corporations/{corporation_id}/containers/logs/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_facilities": {
    "description": "Return a corporation's facilities",
    "summary": "Get corporation facilities",
    "request": "get",
    "version": 1,
    "headers": [
      "facility_id",
      "type_id",
      "system_id"
    ],
    "path": "/v1/corporations/{corporation_id}/facilities/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_medals": {
    "description": "Returns a corporation's medals",
    "summary": "Get corporation medals",
    "request": "get",
    "version": 1,
    "headers": [
      "medal_id",
      "title",
      "description",
      "creator_id",
      "created_at"
    ],
    "path": "/v1/corporations/{corporation_id}/medals/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_medals_issue": {
    "description": "Returns medals issued by a corporation",
    "summary": "Get corporation issued medals",
    "request": "get",
    "version": 1,
    "headers": [
      "medal_id",
      "character_id",
      "reason",
      "status",
      "issuer_id",
      "issued_at"
    ],
    "path": "/v1/corporations/{corporation_id}/medals/issued/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_outposts": {
    "description": "Get a list of corporation outpost IDs Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "summary": "Get corporation outposts",
    "request": "get",
    "version": 1,
    "headers": [
      "outpost_ids"
    ],
    "path": "/v1/corporations/{corporation_id}/outposts/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_outposts_outpost": {
    "description": "Get details about a given outpost. Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "summary": "Get corporation outpost details",
    "request": "get",
    "version": 1,
    "headers": [
      "owner_id",
      "system_id",
      "docking_cost_per_ship_volume",
      "office_rental_cost",
      "type_id",
      "reprocessing_efficiency",
      "reprocessing_station_take",
      "standing_owner_id",
      "coordinates",
      "services"
    ],
    "path": "/v1/corporations/{corporation_id}/outposts/{outpost_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "outpost_id",
        "description": "A station (outpost) ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_shareholders": {
    "description": "Return the current shareholders of a corporation.",
    "summary": "Get corporation shareholders",
    "request": "get",
    "version": 1,
    "headers": [
      "shareholder_id",
      "shareholder_type",
      "share_count"
    ],
    "path": "/v1/corporations/{corporation_id}/shareholders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "dogma_attributes": {
    "description": "Get a list of dogma attribute ids",
    "summary": "Get attributes",
    "request": "get",
    "version": 1,
    "headers": [
      "attribute_ids"
    ],
    "path": "/v1/dogma/attributes/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "dogma_attributes_attribute": {
    "description": "Get information on a dogma attribute",
    "summary": "Get attribute information",
    "request": "get",
    "version": 1,
    "headers": [
      "attribute_id",
      "name",
      "description",
      "icon_id",
      "default_value",
      "published",
      "display_name",
      "unit_id",
      "stackable",
      "high_is_good"
    ],
    "path": "/v1/dogma/attributes/{attribute_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "attribute_id",
        "description": "A dogma attribute ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "dogma_effects": {
    "description": "Get a list of dogma effect ids",
    "summary": "Get effects",
    "request": "get",
    "version": 1,
    "headers": [
      "effect_ids"
    ],
    "path": "/v1/dogma/effects/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "dogma_effects_effect": {
    "description": "Get information on a dogma effect",
    "summary": "Get effect information",
    "request": "get",
    "version": 2,
    "headers": [
      "effect_id",
      "name",
      "display_name",
      "description",
      "icon_id",
      "effect_category",
      "pre_expression",
      "post_expression",
      "is_offensive",
      "is_assistance",
      "disallow_auto_repeat",
      "published",
      "is_warp_safe",
      "range_chance",
      "electronic_chance",
      "duration_attribute_id",
      "tracking_speed_attribute_id",
      "discharge_attribute_id",
      "range_attribute_id",
      "falloff_attribute_id",
      "modifiers"
    ],
    "path": "/v2/dogma/effects/{effect_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "effect_id",
        "description": "A dogma effect ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "fw_wars": {
    "description": "Data about which NPC factions are at war",
    "summary": "Data about which NPC factions are at war",
    "request": "get",
    "version": 1,
    "headers": [
      "faction_id",
      "against_id"
    ],
    "path": "/v1/fw/wars/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fw_stats": {
    "description": "Statistical overviews of factions involved in faction warfare",
    "summary": "An overview of statistics about factions involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "faction_id",
      "pilots",
      "systems_controlled",
      "kills",
      "victory_points"
    ],
    "path": "/v1/fw/stats/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fw_systems": {
    "description": "An overview of the current ownership of faction warfare solar systems",
    "summary": "Ownership of faction warfare systems",
    "request": "get",
    "version": 1,
    "headers": [
      "solar_system_id",
      "owner_faction_id",
      "occupier_faction_id",
      "victory_points",
      "victory_points_threshold",
      "contested"
    ],
    "path": "/v1/fw/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fw_leaderboards": {
    "description": "Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top factions in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "kills",
      "victory_points"
    ],
    "path": "/v1/fw/leaderboards/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fw_leaderboards_characters": {
    "description": "Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top pilots in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "kills",
      "victory_points"
    ],
    "path": "/v1/fw/leaderboards/characters/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fw_leaderboards_corporations": {
    "description": "Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top corporations in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "kills",
      "victory_points"
    ],
    "path": "/v1/fw/leaderboards/corporations/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_fw_stats": {
    "description": "Statistics about a corporation involved in faction warfare",
    "summary": "Overview of a corporation involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "faction_id",
      "enlisted_on",
      "pilots",
      "kills",
      "victory_points"
    ],
    "path": "/v1/corporations/{corporation_id}/fw/stats/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_fw_stats": {
    "description": "Statistical overview of a character involved in faction warfare",
    "summary": "Overview of a character involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      "faction_id",
      "enlisted_on",
      "current_rank",
      "highest_rank",
      "kills",
      "victory_points"
    ],
    "path": "/v1/characters/{character_id}/fw/stats/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_fittings": {
    "description": "Return fittings of a character",
    "summary": "Get fittings",
    "request": "get",
    "version": 1,
    "headers": [
      "fitting_id",
      "name",
      "description",
      "ship_type_id",
      "items"
    ],
    "path": "/v1/characters/{character_id}/fittings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fleets_fleet": {
    "description": "Return details about a fleet",
    "summary": "Get fleet information",
    "request": "get",
    "version": 1,
    "headers": [
      "motd",
      "is_free_move",
      "is_registered",
      "is_voice_enabled"
    ],
    "path": "/v1/fleets/{fleet_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "fleet_id",
        "description": "ID for a fleet",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_fleet": {
    "description": "Return the fleet ID the character is in, if any.",
    "summary": "Get character fleet info",
    "request": "get",
    "version": 1,
    "headers": [
      "fleet_id",
      "wing_id",
      "squad_id",
      "role"
    ],
    "path": "/v1/characters/{character_id}/fleet/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "fleets_fleet_members": {
    "description": "Return information about fleet members",
    "summary": "Get fleet members",
    "request": "get",
    "version": 1,
    "headers": [
      "character_id",
      "ship_type_id",
      "wing_id",
      "squad_id",
      "role",
      "role_name",
      "join_time",
      "takes_fleet_warp",
      "solar_system_id",
      "station_id"
    ],
    "path": "/v1/fleets/{fleet_id}/members/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "fleet_id",
        "description": "ID for a fleet",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "fleets_fleet_wings": {
    "description": "Return information about wings in a fleet",
    "summary": "Get fleet wings",
    "request": "get",
    "version": 1,
    "headers": [
      "name",
      "id",
      "squads"
    ],
    "path": "/v1/fleets/{fleet_id}/wings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "fleet_id",
        "description": "ID for a fleet",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "incursions": {
    "description": "Return a list of current incursions",
    "summary": "List incursions",
    "request": "get",
    "version": 1,
    "headers": [
      "type",
      "state",
      "influence",
      "has_boss",
      "faction_id",
      "constellation_id",
      "staging_solar_system_id",
      "infested_solar_systems"
    ],
    "path": "/v1/incursions/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "industry_facilities": {
    "description": "Return a list of industry facilities",
    "summary": "List industry facilities",
    "request": "get",
    "version": 1,
    "headers": [
      "facility_id",
      "tax",
      "owner_id",
      "type_id",
      "solar_system_id",
      "region_id"
    ],
    "path": "/v1/industry/facilities/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "industry_systems": {
    "description": "Return cost indices for solar systems",
    "summary": "List solar system cost indices",
    "request": "get",
    "version": 1,
    "headers": [
      "solar_system_id",
      "cost_indices"
    ],
    "path": "/v1/industry/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_industry_jobs": {
    "description": "List industry jobs placed by a character",
    "summary": "List character industry jobs",
    "request": "get",
    "version": 1,
    "headers": [
      "job_id",
      "installer_id",
      "facility_id",
      "station_id",
      "activity_id",
      "blueprint_id",
      "blueprint_type_id",
      "blueprint_location_id",
      "output_location_id",
      "runs",
      "cost",
      "licensed_runs",
      "probability",
      "product_type_id",
      "status",
      "duration",
      "start_date",
      "end_date",
      "pause_date",
      "completed_date",
      "completed_character_id",
      "successful_runs"
    ],
    "path": "/v1/characters/{character_id}/industry/jobs/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "include_completed",
        "description": "Whether retrieve completed character industry jobs as well",
        "required": false,
        "type": "boolean",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "characters_character_mining": {
    "description": "Paginated record of all mining done by a character for the past 30 days",
    "summary": "Character mining ledger",
    "request": "get",
    "version": 1,
    "headers": [
      "date",
      "solar_system_id",
      "type_id",
      "quantity"
    ],
    "path": "/v1/characters/{character_id}/mining/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporation_corporation_mining_observers": {
    "description": "Paginated list of all entities capable of observing and recording mining for a corporation",
    "summary": "Corporation mining observers",
    "request": "get",
    "version": 1,
    "headers": [
      "last_updated",
      "observer_id",
      "observer_type"
    ],
    "path": "/v1/corporation/{corporation_id}/mining/observers/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporation_corporation_mining_observers_observer": {
    "description": "Paginated record of all mining seen by an observer",
    "summary": "Observed corporation mining",
    "request": "get",
    "version": 1,
    "headers": [
      "last_updated",
      "character_id",
      "recorded_corporation_id",
      "type_id",
      "quantity"
    ],
    "path": "/v1/corporation/{corporation_id}/mining/observers/{observer_id}/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "observer_id",
        "description": "A mining observer id",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": true
  },
  "corporations_corporation_industry_jobs": {
    "description": "List industry jobs run by a corporation",
    "summary": "List corporation industry jobs",
    "request": "get",
    "version": 1,
    "headers": [
      "job_id",
      "installer_id",
      "facility_id",
      "location_id",
      "activity_id",
      "blueprint_id",
      "blueprint_type_id",
      "blueprint_location_id",
      "output_location_id",
      "runs",
      "cost",
      "licensed_runs",
      "probability",
      "product_type_id",
      "status",
      "duration",
      "start_date",
      "end_date",
      "pause_date",
      "completed_date",
      "completed_character_id",
      "successful_runs"
    ],
    "path": "/v1/corporations/{corporation_id}/industry/jobs/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "include_completed",
        "description": "Whether retrieve completed character industry jobs as well",
        "required": false,
        "type": "boolean",
        "in": "query"
      }
    ],
    "paginated": true
  },
  "corporation_corporation_mining_extractions": {
    "description": "Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.",
    "summary": "Moon extraction timers",
    "request": "get",
    "version": 1,
    "headers": [
      "structure_id",
      "moon_id",
      "extraction_start_time",
      "chunk_arrival_time",
      "natural_decay_time"
    ],
    "path": "/v1/corporation/{corporation_id}/mining/extractions/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "insurance_prices": {
    "description": "Return available insurance levels for all ship types",
    "summary": "List insurance levels",
    "request": "get",
    "version": 1,
    "headers": [
      "type_id",
      "levels"
    ],
    "path": "/v1/insurance/prices/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "killmails_killmail_killmail_hash": {
    "description": "Return a single killmail from its ID and hash",
    "summary": "Get a single killmail",
    "request": "get",
    "version": 1,
    "headers": [
      "killmail_id",
      "killmail_time",
      "victim",
      "attackers",
      "solar_system_id",
      "moon_id",
      "war_id"
    ],
    "path": "/v1/killmails/{killmail_id}/{killmail_hash}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "killmail_hash",
        "description": "The killmail hash for verification",
        "required": true,
        "type": "string",
        "in": "path"
      },
      {
        "name": "killmail_id",
        "description": "The killmail ID to be queried",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_killmails_recent": {
    "description": "Return a list of character's recent kills and losses",
    "summary": "Get character kills and losses",
    "request": "get",
    "version": 1,
    "headers": [
      "killmail_id",
      "killmail_hash"
    ],
    "path": "/v1/characters/{character_id}/killmails/recent/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "max_count",
        "description": "How many killmails to return at maximum",
        "required": false,
        "type": "integer",
        "in": "query"
      },
      {
        "name": "max_kill_id",
        "description": "Only return killmails with ID smaller than this.\n",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_killmails_recent": {
    "description": "Get a list of corporation's recent kills and losses",
    "summary": "Get corporation kills and losses",
    "request": "get",
    "version": 1,
    "headers": [
      "killmail_id",
      "killmail_hash"
    ],
    "path": "/v1/corporations/{corporation_id}/killmails/recent/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "max_kill_id",
        "description": "Only return killmails with ID smaller than this.\n",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "characters_character_location": {
    "description": "Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.",
    "summary": "Get character location",
    "request": "get",
    "version": 1,
    "headers": [
      "solar_system_id",
      "station_id",
      "structure_id"
    ],
    "path": "/v1/characters/{character_id}/location/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_ship": {
    "description": "Get the current ship type, name and id",
    "summary": "Get current ship",
    "request": "get",
    "version": 1,
    "headers": [
      "ship_type_id",
      "ship_item_id",
      "ship_name"
    ],
    "path": "/v1/characters/{character_id}/ship/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_online": {
    "description": "Checks if the character is currently online",
    "summary": "Get character online",
    "request": "get",
    "version": 2,
    "headers": [
      "online",
      "last_login",
      "last_logout",
      "logins"
    ],
    "path": "/v2/characters/{character_id}/online/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "loyalty_stores_corporation_offers": {
    "description": "Return a list of offers from a specific corporation's loyalty store",
    "summary": "List loyalty store offers",
    "request": "get",
    "version": 1,
    "headers": [
      "offer_id",
      "type_id",
      "quantity",
      "lp_cost",
      "isk_cost",
      "ak_cost",
      "required_items"
    ],
    "path": "/v1/loyalty/stores/{corporation_id}/offers/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_loyalty_points": {
    "description": "Return a list of loyalty points for all corporations the character has worked for",
    "summary": "Get loyalty points",
    "request": "get",
    "version": 1,
    "headers": [
      "corporation_id",
      "loyalty_points"
    ],
    "path": "/v1/characters/{character_id}/loyalty/points/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_mail": {
    "description": "Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.",
    "summary": "Return mail headers",
    "request": "get",
    "version": 1,
    "headers": [
      "mail_id",
      "subject",
      "from",
      "timestamp",
      "labels",
      "recipients",
      "is_read"
    ],
    "path": "/v1/characters/{character_id}/mail/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "labels",
        "description": "Fetch only mails that match one or more of the given labels",
        "required": false,
        "type": "array",
        "in": "query"
      },
      {
        "name": "last_mail_id",
        "description": "List only mail with an ID lower than the given ID, if present",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "characters_character_mail_labels": {
    "description": "Return a list of the users mail labels, unread counts for each label and a total unread count.",
    "summary": "Get mail labels and unread counts",
    "request": "get",
    "version": 3,
    "headers": [
      "total_unread_count",
      "labels"
    ],
    "path": "/v3/characters/{character_id}/mail/labels/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_mail_lists": {
    "description": "Return all mailing lists that the character is subscribed to",
    "summary": "Return mailing list subscriptions",
    "request": "get",
    "version": 1,
    "headers": [
      "mailing_list_id",
      "name"
    ],
    "path": "/v1/characters/{character_id}/mail/lists/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_mail_mail": {
    "description": "Return the contents of an EVE mail",
    "summary": "Return a mail",
    "request": "get",
    "version": 1,
    "headers": [
      "subject",
      "from",
      "timestamp",
      "recipients",
      "body",
      "labels",
      "read"
    ],
    "path": "/v1/characters/{character_id}/mail/{mail_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "mail_id",
        "description": "An EVE mail ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "markets_prices": {
    "description": "Return a list of prices",
    "summary": "List market prices",
    "request": "get",
    "version": 1,
    "headers": [
      "type_id",
      "average_price",
      "adjusted_price"
    ],
    "path": "/v1/markets/prices/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "markets_region_orders": {
    "description": "Return a list of orders in a region",
    "summary": "List orders in a region",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "location_id",
      "volume_total",
      "volume_remain",
      "min_volume",
      "price",
      "is_buy_order",
      "duration",
      "issued",
      "range"
    ],
    "path": "/v1/markets/{region_id}/orders/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "order_type",
        "description": "Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.",
        "required": true,
        "type": "string",
        "in": "query"
      },
      {
        "name": "region_id",
        "description": "Return orders in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "type_id",
        "description": "Return orders only for this type",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": true
  },
  "markets_region_history": {
    "description": "Return a list of historical market statistics for the specified type in a region",
    "summary": "List historical market statistics in a region",
    "request": "get",
    "version": 1,
    "headers": [
      "date",
      "order_count",
      "volume",
      "highest",
      "average",
      "lowest"
    ],
    "path": "/v1/markets/{region_id}/history/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "region_id",
        "description": "Return orders in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "type_id",
        "description": "Return orders only for this type",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "markets_structures_structure": {
    "description": "Return all orders in a structure",
    "summary": "List orders in a structure",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "location_id",
      "volume_total",
      "volume_remain",
      "min_volume",
      "price",
      "is_buy_order",
      "duration",
      "issued",
      "range"
    ],
    "path": "/v1/markets/structures/{structure_id}/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "structure_id",
        "description": "Return orders in this structure",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": true
  },
  "markets_groups": {
    "description": "Get a list of item groups",
    "summary": "Get item groups",
    "request": "get",
    "version": 1,
    "headers": [
      "group_ids"
    ],
    "path": "/v1/markets/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "markets_groups_market_group": {
    "description": "Get information on an item group",
    "summary": "Get item group information",
    "request": "get",
    "version": 1,
    "headers": [
      "market_group_id",
      "name",
      "description",
      "types",
      "parent_group_id"
    ],
    "path": "/v1/markets/groups/{market_group_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "market_group_id",
        "description": "An Eve item group ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_orders": {
    "description": "List market orders placed by a character",
    "summary": "List open orders from a character",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "region_id",
      "location_id",
      "range",
      "is_buy_order",
      "price",
      "volume_total",
      "volume_remain",
      "issued",
      "state",
      "min_volume",
      "account_id",
      "duration",
      "is_corp",
      "escrow"
    ],
    "path": "/v1/characters/{character_id}/orders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_orders_history": {
    "description": "List cancelled and expired market orders placed by a character up to 90 days in the past.",
    "summary": "List historical orders by a character",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "region_id",
      "location_id",
      "range",
      "price",
      "volume_total",
      "volume_remain",
      "issued",
      "is_buy_order",
      "min_volume",
      "escrow",
      "duration",
      "state",
      "is_corporation"
    ],
    "path": "/v1/characters/{character_id}/orders/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "markets_region_types": {
    "description": "Return a list of type IDs that have active orders in the region, for efficient market indexing.",
    "summary": "List type IDs relevant to a market",
    "request": "get",
    "version": 1,
    "headers": [
      "type_ids"
    ],
    "path": "/v1/markets/{region_id}/types/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "region_id",
        "description": "Return orders in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": true
  },
  "corporations_corporation_orders": {
    "description": "List open market orders placed on behalf of a corporation",
    "summary": "List open orders from a corporation",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "region_id",
      "location_id",
      "range",
      "is_buy_order",
      "price",
      "volume_total",
      "volume_remain",
      "issued",
      "state",
      "min_volume",
      "wallet_division",
      "duration",
      "escrow"
    ],
    "path": "/v1/corporations/{corporation_id}/orders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "corporations_corporation_orders_history": {
    "description": "List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.",
    "summary": "List historical orders from a corporation",
    "request": "get",
    "version": 1,
    "headers": [
      "order_id",
      "type_id",
      "region_id",
      "location_id",
      "range",
      "price",
      "volume_total",
      "volume_remain",
      "issued",
      "is_buy_order",
      "min_volume",
      "escrow",
      "duration",
      "state",
      "wallet_division"
    ],
    "path": "/v1/corporations/{corporation_id}/orders/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "opportunities_groups": {
    "description": "Return a list of opportunities groups",
    "summary": "Get opportunities groups",
    "request": "get",
    "version": 1,
    "headers": [
      "group_ids"
    ],
    "path": "/v1/opportunities/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "opportunities_groups_group": {
    "description": "Return information of an opportunities group",
    "summary": "Get opportunities group",
    "request": "get",
    "version": 1,
    "headers": [
      "group_id",
      "name",
      "description",
      "notification",
      "required_tasks",
      "connected_groups"
    ],
    "path": "/v1/opportunities/groups/{group_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "group_id",
        "description": "ID of an opportunities group",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "opportunities_tasks": {
    "description": "Return a list of opportunities tasks",
    "summary": "Get opportunities tasks",
    "request": "get",
    "version": 1,
    "headers": [
      "task_ids"
    ],
    "path": "/v1/opportunities/tasks/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "opportunities_tasks_task": {
    "description": "Return information of an opportunities task",
    "summary": "Get opportunities task",
    "request": "get",
    "version": 1,
    "headers": [
      "task_id",
      "name",
      "description",
      "notification"
    ],
    "path": "/v1/opportunities/tasks/{task_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "task_id",
        "description": "ID of an opportunities task",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_opportunities": {
    "description": "Return a list of tasks finished by a character",
    "summary": "Get a character's completed tasks",
    "request": "get",
    "version": 1,
    "headers": [
      "task_id",
      "completed_at"
    ],
    "path": "/v1/characters/{character_id}/opportunities/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_planets": {
    "description": "Returns a list of all planetary colonies owned by a character.",
    "summary": "Get colonies",
    "request": "get",
    "version": 1,
    "headers": [
      "solar_system_id",
      "planet_id",
      "owner_id",
      "upgrade_level",
      "num_pins",
      "last_update",
      "planet_type"
    ],
    "path": "/v1/characters/{character_id}/planets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_planets_planet": {
    "description": "Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.",
    "summary": "Get colony layout",
    "request": "get",
    "version": 3,
    "headers": [
      "links",
      "pins",
      "routes"
    ],
    "path": "/v3/characters/{character_id}/planets/{planet_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "planet_id",
        "description": "Planet id of the target planet",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_schematics_schematic": {
    "description": "Get information on a planetary factory schematic",
    "summary": "Get schematic information",
    "request": "get",
    "version": 1,
    "headers": [
      "schematic_name",
      "cycle_time"
    ],
    "path": "/v1/universe/schematics/{schematic_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "schematic_id",
        "description": "A PI schematic ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_customs_offices": {
    "description": "List customs offices owned by a corporation",
    "summary": "List corporation customs offices",
    "request": "get",
    "version": 1,
    "headers": [
      "office_id",
      "system_id",
      "reinforce_exit_start",
      "reinforce_exit_end",
      "corporation_tax_rate",
      "allow_alliance_access",
      "alliance_tax_rate",
      "allow_access_with_standings",
      "standing_level",
      "excellent_standing_tax_rate",
      "good_standing_tax_rate",
      "neutral_standing_tax_rate",
      "bad_standing_tax_rate",
      "terrible_standing_tax_rate"
    ],
    "path": "/v1/corporations/{corporation_id}/customs_offices/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": true
  },
  "route_origin_destination": {
    "description": "Get the systems between origin and destination",
    "summary": "Get route",
    "request": "get",
    "version": 1,
    "headers": [
      "integer"
    ],
    "path": "/v1/route/{origin}/{destination}/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "avoid",
        "description": "avoid solar system ID(s)",
        "required": null,
        "type": "array",
        "in": "query"
      },
      {
        "name": "connections",
        "description": "connected solar system pairs",
        "required": null,
        "type": "array",
        "in": "query"
      },
      {
        "name": "destination",
        "description": "destination solar system ID",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "flag",
        "description": "route security preference",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "origin",
        "description": "origin solar system ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_search": {
    "description": "Search for entities that match a given sub",
    "summary": "Search on a string",
    "request": "get",
    "version": 3,
    "headers": [
      "agent",
      "alliance",
      "character",
      "constellation",
      "corporation",
      "faction",
      "inventory_type",
      "region",
      "solar_system",
      "station",
      "structure"
    ],
    "path": "/v3/characters/{character_id}/search/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "categories",
        "description": "Type of entities to search for",
        "required": true,
        "type": "array",
        "in": "query"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "search",
        "description": "The string to search on",
        "required": true,
        "type": "string",
        "in": "query"
      },
      {
        "name": "strict",
        "description": "Whether the search should be a strict match",
        "required": null,
        "type": "boolean",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "eve_search": {
    "description": "Search for entities that match a given sub",
    "summary": "Search on a string",
    "request": "get",
    "version": 2,
    "headers": [
      "agent",
      "alliance",
      "character",
      "constellation",
      "corporation",
      "faction",
      "inventory_type",
      "region",
      "solar_system",
      "station"
    ],
    "path": "/v2/search/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "categories",
        "description": "Type of entities to search for",
        "required": true,
        "type": "array",
        "in": "query"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "search",
        "description": "The string to search on",
        "required": true,
        "type": "string",
        "in": "query"
      },
      {
        "name": "strict",
        "description": "Whether the search should be a strict match",
        "required": null,
        "type": "boolean",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "characters_character_skillqueue": {
    "description": "List the configured skill queue for the given character",
    "summary": "Get character's skill queue",
    "request": "get",
    "version": 2,
    "headers": [
      "skill_id",
      "finish_date",
      "start_date",
      "finished_level",
      "queue_position",
      "training_start_sp",
      "level_end_sp",
      "level_start_sp"
    ],
    "path": "/v2/characters/{character_id}/skillqueue/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_skills": {
    "description": "List all trained skills for the given character",
    "summary": "Get character skills",
    "request": "get",
    "version": 4,
    "headers": [
      "skills",
      "total_sp",
      "unallocated_sp"
    ],
    "path": "/v4/characters/{character_id}/skills/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_attributes": {
    "description": "Return attributes of a character",
    "summary": "Get character attributes",
    "request": "get",
    "version": 1,
    "headers": [
      "charisma",
      "intelligence",
      "memory",
      "perception",
      "willpower",
      "bonus_remaps",
      "last_remap_date",
      "accrued_remap_cooldown_date"
    ],
    "path": "/v1/characters/{character_id}/attributes/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "sovereignty_structures": {
    "description": "Shows sovereignty data for structures.",
    "summary": "List sovereignty structures",
    "request": "get",
    "version": 1,
    "headers": [
      "alliance_id",
      "solar_system_id",
      "structure_id",
      "structure_type_id",
      "vulnerability_occupancy_level",
      "vulnerable_start_time",
      "vulnerable_end_time"
    ],
    "path": "/v1/sovereignty/structures/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "sovereignty_campaigns": {
    "description": "Shows sovereignty data for campaigns.",
    "summary": "List sovereignty campaigns",
    "request": "get",
    "version": 1,
    "headers": [
      "campaign_id",
      "structure_id",
      "solar_system_id",
      "constellation_id",
      "event_type",
      "start_time",
      "defender_id",
      "defender_score",
      "attackers_score",
      "participants"
    ],
    "path": "/v1/sovereignty/campaigns/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "sovereignty_map": {
    "description": "Shows sovereignty information for solar systems",
    "summary": "List sovereignty of systems",
    "request": "get",
    "version": 1,
    "headers": [
      "system_id",
      "alliance_id",
      "corporation_id",
      "faction_id"
    ],
    "path": "/v1/sovereignty/map/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "status": {
    "description": "EVE Server status",
    "summary": "Retrieve the uptime and player counts",
    "request": "get",
    "version": 1,
    "headers": [
      "start_time",
      "players",
      "server_version",
      "vip"
    ],
    "path": "/v1/status/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_planets_planet": {
    "description": "Get information on a planet",
    "summary": "Get planet information",
    "request": "get",
    "version": 1,
    "headers": [
      "planet_id",
      "name",
      "type_id",
      "position",
      "system_id"
    ],
    "path": "/v1/universe/planets/{planet_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "planet_id",
        "description": "Planet id of the target planet",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_stations_station": {
    "description": "Get information on a station",
    "summary": "Get station information",
    "request": "get",
    "version": 2,
    "headers": [
      "station_id",
      "name",
      "owner",
      "type_id",
      "race_id",
      "position",
      "system_id",
      "reprocessing_efficiency",
      "reprocessing_stations_take",
      "max_dockable_ship_volume",
      "office_rental_cost",
      "services"
    ],
    "path": "/v2/universe/stations/{station_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "station_id",
        "description": "station_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_structures_structure": {
    "description": "Returns information on requested structure, if you are on the ACL. Otherwise, returns \"Forbidden\" for all inputs.",
    "summary": "Get structure information",
    "request": "get",
    "version": 1,
    "headers": [
      "name",
      "solar_system_id",
      "type_id",
      "position"
    ],
    "path": "/v1/universe/structures/{structure_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "structure_id",
        "description": "Return orders in this structure",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_systems_system": {
    "description": "Get information on a solar system",
    "summary": "Get solar system information",
    "request": "get",
    "version": 3,
    "headers": [
      "star_id",
      "system_id",
      "name",
      "position",
      "security_status",
      "security_class",
      "constellation_id",
      "planets",
      "stargates",
      "stations"
    ],
    "path": "/v3/universe/systems/{system_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "system_id",
        "description": "The solar system this starbase (POS) is located in,",
        "required": true,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_systems": {
    "description": "Get a list of solar systems",
    "summary": "Get solar systems",
    "request": "get",
    "version": 1,
    "headers": [
      "system_ids"
    ],
    "path": "/v1/universe/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_types_type": {
    "description": "Get information on a type",
    "summary": "Get type information",
    "request": "get",
    "version": 3,
    "headers": [
      "type_id",
      "name",
      "description",
      "published",
      "group_id",
      "market_group_id",
      "radius",
      "volume",
      "packaged_volume",
      "icon_id",
      "capacity",
      "portion_size",
      "mass",
      "graphic_id",
      "dogma_attributes",
      "dogma_effects"
    ],
    "path": "/v3/universe/types/{type_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "type_id",
        "description": "Return orders only for this type",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_types": {
    "description": "Get a list of type ids",
    "summary": "Get types",
    "request": "get",
    "version": 1,
    "headers": [
      "type_ids"
    ],
    "path": "/v1/universe/types/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": true
  },
  "universe_groups": {
    "description": "Get a list of item groups",
    "summary": "Get item groups",
    "request": "get",
    "version": 1,
    "headers": [
      "group_ids"
    ],
    "path": "/v1/universe/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": true
  },
  "universe_groups_group": {
    "description": "Get information on an item group",
    "summary": "Get item group information",
    "request": "get",
    "version": 1,
    "headers": [
      "group_id",
      "name",
      "published",
      "category_id",
      "types"
    ],
    "path": "/v1/universe/groups/{group_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "group_id",
        "description": "ID of an opportunities group",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_categories": {
    "description": "Get a list of item categories",
    "summary": "Get item categories",
    "request": "get",
    "version": 1,
    "headers": [
      "categorie_ids"
    ],
    "path": "/v1/universe/categories/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_categories_category": {
    "description": "Get information of an item category",
    "summary": "Get item category information",
    "request": "get",
    "version": 1,
    "headers": [
      "category_id",
      "name",
      "published",
      "groups"
    ],
    "path": "/v1/universe/categories/{category_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "category_id",
        "description": "An Eve item category ID",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_structures": {
    "description": "List all public structures",
    "summary": "List all public structures",
    "request": "get",
    "version": 1,
    "headers": [
      "structure_ids"
    ],
    "path": "/v1/universe/structures/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_races": {
    "description": "Get a list of character races",
    "summary": "Get character races",
    "request": "get",
    "version": 1,
    "headers": [
      "race_id",
      "name",
      "description",
      "alliance_id"
    ],
    "path": "/v1/universe/races/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_factions": {
    "description": "Get a list of factions",
    "summary": "Get factions",
    "request": "get",
    "version": 2,
    "headers": [
      "faction_id",
      "name",
      "description",
      "solar_system_id",
      "corporation_id",
      "militia_corporation_id",
      "size_factor",
      "station_count",
      "station_system_count",
      "is_unique"
    ],
    "path": "/v2/universe/factions/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_bloodlines": {
    "description": "Get a list of bloodlines",
    "summary": "Get bloodlines",
    "request": "get",
    "version": 1,
    "headers": [
      "bloodline_id",
      "name",
      "description",
      "race_id",
      "ship_type_id",
      "corporation_id",
      "perception",
      "willpower",
      "charisma",
      "memory",
      "intelligence"
    ],
    "path": "/v1/universe/bloodlines/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_regions": {
    "description": "Get a list of regions",
    "summary": "Get regions",
    "request": "get",
    "version": 1,
    "headers": [
      "region_ids"
    ],
    "path": "/v1/universe/regions/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_regions_region": {
    "description": "Get information on a region",
    "summary": "Get region information",
    "request": "get",
    "version": 1,
    "headers": [
      "region_id",
      "name",
      "description",
      "constellations"
    ],
    "path": "/v1/universe/regions/{region_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "region_id",
        "description": "Return orders in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_constellations": {
    "description": "Get a list of constellations",
    "summary": "Get constellations",
    "request": "get",
    "version": 1,
    "headers": [
      "constellation_ids"
    ],
    "path": "/v1/universe/constellations/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_constellations_constellation": {
    "description": "Get information on a constellation",
    "summary": "Get constellation information",
    "request": "get",
    "version": 1,
    "headers": [
      "constellation_id",
      "name",
      "position",
      "region_id",
      "systems"
    ],
    "path": "/v1/universe/constellations/{constellation_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "constellation_id",
        "description": "constellation_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "universe_moons_moon": {
    "description": "Get information on a moon",
    "summary": "Get moon information",
    "request": "get",
    "version": 1,
    "headers": [
      "moon_id",
      "name",
      "position",
      "system_id"
    ],
    "path": "/v1/universe/moons/{moon_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "moon_id",
        "description": "moon_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_stargates_stargate": {
    "description": "Get information on a stargate",
    "summary": "Get stargate information",
    "request": "get",
    "version": 1,
    "headers": [
      "stargate_id",
      "name",
      "type_id",
      "position",
      "system_id",
      "destination"
    ],
    "path": "/v1/universe/stargates/{stargate_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "stargate_id",
        "description": "stargate_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_graphics": {
    "description": "Get a list of graphics",
    "summary": "Get graphics",
    "request": "get",
    "version": 1,
    "headers": [
      "graphic_ids"
    ],
    "path": "/v1/universe/graphics/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_graphics_graphic": {
    "description": "Get information on a graphic",
    "summary": "Get graphic information",
    "request": "get",
    "version": 1,
    "headers": [
      "graphic_id",
      "graphic_file",
      "sof_race_name",
      "sof_fation_name",
      "sof_dna",
      "sof_hull_name",
      "collision_file",
      "icon_folder"
    ],
    "path": "/v1/universe/graphics/{graphic_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "graphic_id",
        "description": "graphic_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "universe_system_jumps": {
    "description": "Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last",
    "summary": "Get system jumps",
    "request": "get",
    "version": 1,
    "headers": [
      "system_id",
      "ship_jumps"
    ],
    "path": "/v1/universe/system_jumps/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_system_kills": {
    "description": "Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last",
    "summary": "Get system kills",
    "request": "get",
    "version": 2,
    "headers": [
      "system_id",
      "ship_kills",
      "npc_kills",
      "pod_kills"
    ],
    "path": "/v2/universe/system_kills/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "universe_stars_star": {
    "description": "Get information on a star",
    "summary": "Get star information",
    "request": "get",
    "version": 1,
    "headers": [
      "name",
      "solar_system_id",
      "type_id",
      "age",
      "luminosity",
      "radius",
      "spectral_class",
      "temperature"
    ],
    "path": "/v1/universe/stars/{star_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "star_id",
        "description": "star_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "characters_character_wallet": {
    "description": "Returns a character's wallet balance",
    "summary": "Get a character's wallet balance",
    "request": "get",
    "version": 1,
    "headers": [
      "object"
    ],
    "path": "/v1/characters/{character_id}/wallet/",
    "authed": true,
    "response_type": "number",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "characters_character_wallet_journal": {
    "description": "Retrieve character wallet journal",
    "summary": "Get character wallet journal",
    "request": "get",
    "version": 3,
    "headers": [
      "date",
      "ref_id",
      "ref_type",
      "first_party_id",
      "first_party_type",
      "second_party_id",
      "second_party_type",
      "amount",
      "balance",
      "reason",
      "tax_receiver_id",
      "tax",
      "extra_info"
    ],
    "path": "/v3/characters/{character_id}/wallet/journal/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "from_id",
        "description": "Only show journal entries happened before the transaction referenced by this id",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "characters_character_wallet_transactions": {
    "description": "Get wallet transactions of a character",
    "summary": "Get wallet transactions",
    "request": "get",
    "version": 1,
    "headers": [
      "transaction_id",
      "date",
      "type_id",
      "location_id",
      "unit_price",
      "quantity",
      "client_id",
      "is_buy",
      "is_personal",
      "journal_ref_id"
    ],
    "path": "/v1/characters/{character_id}/wallet/transactions/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "from_id",
        "description": "Only show journal entries happened before the transaction referenced by this id",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_wallets": {
    "description": "Get a corporation's wallets",
    "summary": "Returns a corporation's wallet balance",
    "request": "get",
    "version": 1,
    "headers": [
      "division",
      "balance"
    ],
    "path": "/v1/corporations/{corporation_id}/wallets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ],
    "paginated": false
  },
  "corporations_corporation_wallets_division_journal": {
    "description": "Retrieve corporation wallet journal",
    "summary": "Get corporation wallet journal",
    "request": "get",
    "version": 2,
    "headers": [
      "date",
      "ref_id",
      "ref_type",
      "first_party_id",
      "first_party_type",
      "second_party_id",
      "second_party_type",
      "amount",
      "balance",
      "reason",
      "tax_receiver_id",
      "tax",
      "extra_info"
    ],
    "path": "/v2/corporations/{corporation_id}/wallets/{division}/journal/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "division",
        "description": "Wallet key of the division to fetch journals from",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "from_id",
        "description": "Only show journal entries happened before the transaction referenced by this id",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "corporations_corporation_wallets_division_transactions": {
    "description": "Get wallet transactions of a corporation",
    "summary": "Get corporation wallet transactions",
    "request": "get",
    "version": 1,
    "headers": [
      "transaction_id",
      "date",
      "type_id",
      "location_id",
      "unit_price",
      "quantity",
      "client_id",
      "is_buy",
      "journal_ref_id"
    ],
    "path": "/v1/corporations/{corporation_id}/wallets/{division}/transactions/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "division",
        "description": "Wallet key of the division to fetch journals from",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "from_id",
        "description": "Only show journal entries happened before the transaction referenced by this id",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "wars": {
    "description": "Return a list of wars",
    "summary": "List wars",
    "request": "get",
    "version": 1,
    "headers": [
      "war_ids"
    ],
    "path": "/v1/wars/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "max_war_id",
        "description": "Only return wars with ID smaller than this.",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ],
    "paginated": false
  },
  "wars_war": {
    "description": "Return details about a war",
    "summary": "Get war information",
    "request": "get",
    "version": 1,
    "headers": [
      "id",
      "declared",
      "started",
      "retracted",
      "finished",
      "mutual",
      "open_for_allies",
      "aggressor",
      "defender",
      "allies"
    ],
    "path": "/v1/wars/{war_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "war_id",
        "description": "ID for a war",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": false
  },
  "wars_war_killmails": {
    "description": "Return a list of kills related to a war",
    "summary": "List kills for a war",
    "request": "get",
    "version": 1,
    "headers": [
      "killmail_id",
      "killmail_hash"
    ],
    "path": "/v1/wars/{war_id}/killmails/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "war_id",
        "description": "ID for a war",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ],
    "paginated": true
  }
};
