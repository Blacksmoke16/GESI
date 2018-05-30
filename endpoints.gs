ENDPOINTS = {
  "alliances": {
    "description": "List all active player alliances",
    "summary": "List all alliances",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "alliance_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/alliances/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "alliances_alliance_contacts": {
    "description": "Return contacts of an alliance",
    "summary": "Get alliance contacts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "contact_id",
        "type": "integer"
      },
      {
        "name": "contact_type",
        "type": "string"
      },
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "standing",
        "type": "number"
      }
    ],
    "path": "/v1/alliances/{alliance_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "alliances_alliance_contacts_labels": {
    "description": "Return custom labels for an alliance's contacts",
    "summary": "Get alliance contact labels",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "label_name",
        "type": "string"
      }
    ],
    "path": "/v1/alliances/{alliance_id}/contacts/labels/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "alliances_alliance_corporations": {
    "description": "List all current member corporations of an alliance",
    "summary": "List alliance's corporations",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "corporation_ids",
        "type": "integer"
      }
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
    ]
  },
  "alliances_alliance_icons": {
    "description": "Get the icon urls for a alliance",
    "summary": "Get alliance icon",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "px128x128",
        "type": "string"
      },
      {
        "name": "px64x64",
        "type": "string"
      }
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
    ]
  },
  "characters_names": {
    "description": "Resolve a set of character IDs to character names",
    "summary": "Get character names",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "character_name",
        "type": "string"
      }
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
    ]
  },
  "characters_character_agents_research": {
    "description": "Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime ",
    "summary": "Get agents research",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "agent_id",
        "type": "integer"
      },
      {
        "name": "points_per_day",
        "type": "number"
      },
      {
        "name": "remainder_points",
        "type": "number"
      },
      {
        "name": "skill_type_id",
        "type": "integer"
      },
      {
        "name": "started_at",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/agents_research/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_attributes": {
    "description": "Return attributes of a character",
    "summary": "Get character attributes",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "accrued_remap_cooldown_date",
        "type": "string"
      },
      {
        "name": "bonus_remaps",
        "type": "integer"
      },
      {
        "name": "charisma",
        "type": "integer"
      },
      {
        "name": "intelligence",
        "type": "integer"
      },
      {
        "name": "last_remap_date",
        "type": "string"
      },
      {
        "name": "memory",
        "type": "integer"
      },
      {
        "name": "perception",
        "type": "integer"
      },
      {
        "name": "willpower",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/attributes/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_calendar": {
    "description": "Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.",
    "summary": "List calendar event summaries",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "event_date",
        "type": "string"
      },
      {
        "name": "event_id",
        "type": "integer"
      },
      {
        "name": "event_response",
        "type": "string"
      },
      {
        "name": "importance",
        "type": "integer"
      },
      {
        "name": "title",
        "type": "string"
      }
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
    ]
  },
  "characters_character_calendar_event_attendees": {
    "description": "Get all invited attendees for a given event",
    "summary": "Get attendees",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "event_response",
        "type": "string"
      }
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
    ]
  },
  "characters_character_contacts": {
    "description": "Return contacts of a character",
    "summary": "Get contacts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "contact_id",
        "type": "integer"
      },
      {
        "name": "contact_type",
        "type": "string"
      },
      {
        "name": "is_blocked",
        "type": "boolean"
      },
      {
        "name": "is_watched",
        "type": "boolean"
      },
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "standing",
        "type": "number"
      }
    ],
    "path": "/v1/characters/{character_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_contacts_labels": {
    "description": "Return custom labels for a character's contacts",
    "summary": "Get contact labels",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "label_name",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/contacts/labels/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_contracts": {
    "description": "Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "summary": "Get contracts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "acceptor_id",
        "type": "integer"
      },
      {
        "name": "assignee_id",
        "type": "integer"
      },
      {
        "name": "availability",
        "type": "string"
      },
      {
        "name": "buyout",
        "type": "number"
      },
      {
        "name": "collateral",
        "type": "number"
      },
      {
        "name": "contract_id",
        "type": "integer"
      },
      {
        "name": "date_accepted",
        "type": "string"
      },
      {
        "name": "date_completed",
        "type": "string"
      },
      {
        "name": "date_expired",
        "type": "string"
      },
      {
        "name": "date_issued",
        "type": "string"
      },
      {
        "name": "days_to_complete",
        "type": "integer"
      },
      {
        "name": "end_location_id",
        "type": "integer"
      },
      {
        "name": "for_corporation",
        "type": "boolean"
      },
      {
        "name": "issuer_corporation_id",
        "type": "integer"
      },
      {
        "name": "issuer_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "reward",
        "type": "number"
      },
      {
        "name": "start_location_id",
        "type": "integer"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "type",
        "type": "string"
      },
      {
        "name": "volume",
        "type": "number"
      }
    ],
    "path": "/v1/characters/{character_id}/contracts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "summary": "Get contract bids",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "amount",
        "type": "number"
      },
      {
        "name": "bid_id",
        "type": "integer"
      },
      {
        "name": "bidder_id",
        "type": "integer"
      },
      {
        "name": "date_bid",
        "type": "string"
      }
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
    ]
  },
  "characters_character_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "summary": "Get contract items",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "is_included",
        "type": "boolean"
      },
      {
        "name": "is_singleton",
        "type": "boolean"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "raw_quantity",
        "type": "integer"
      },
      {
        "name": "record_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "characters_character_corporationhistory": {
    "description": "Get a list of all the corporations a character has been a member of",
    "summary": "Get corporation history",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "is_deleted",
        "type": "boolean"
      },
      {
        "name": "record_id",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/corporationhistory/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "character_id",
        "description": "An EVE character ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "characters_character_fatigue": {
    "description": "Return a character's jump activation and fatigue information",
    "summary": "Get jump fatigue",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "jump_fatigue_expire_date",
        "type": "string"
      },
      {
        "name": "last_jump_date",
        "type": "string"
      },
      {
        "name": "last_update_date",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/fatigue/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_fittings": {
    "description": "Return fittings of a character",
    "summary": "Get fittings",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "fitting_id",
        "type": "integer"
      },
      {
        "name": "items",
        "type": "array",
        "sub_headers": [
          "flag",
          "quantity",
          "type_id"
        ]
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "ship_type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/fittings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_fleet": {
    "description": "Return the fleet ID the character is in, if any.",
    "summary": "Get character fleet info",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "fleet_id",
        "type": "integer"
      },
      {
        "name": "role",
        "type": "string"
      },
      {
        "name": "squad_id",
        "type": "integer"
      },
      {
        "name": "wing_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/fleet/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_fw_stats": {
    "description": "Statistical overview of a character involved in faction warfare",
    "summary": "Overview of a character involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "current_rank",
        "type": "integer"
      },
      {
        "name": "enlisted_on",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "highest_rank",
        "type": "integer"
      },
      {
        "name": "kills-last_week",
        "type": "integer"
      },
      {
        "name": "kills-total",
        "type": "integer"
      },
      {
        "name": "kills-yesterday",
        "type": "integer"
      },
      {
        "name": "victory_points-last_week",
        "type": "integer"
      },
      {
        "name": "victory_points-total",
        "type": "integer"
      },
      {
        "name": "victory_points-yesterday",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/fw/stats/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_implants": {
    "description": "Return implants on the active clone of a character",
    "summary": "Get active implants",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "implant_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/implants/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "characters_character_industry_jobs": {
    "description": "List industry jobs placed by a character",
    "summary": "List character industry jobs",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "activity_id",
        "type": "integer"
      },
      {
        "name": "blueprint_id",
        "type": "integer"
      },
      {
        "name": "blueprint_location_id",
        "type": "integer"
      },
      {
        "name": "blueprint_type_id",
        "type": "integer"
      },
      {
        "name": "completed_character_id",
        "type": "integer"
      },
      {
        "name": "completed_date",
        "type": "string"
      },
      {
        "name": "cost",
        "type": "number"
      },
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "end_date",
        "type": "string"
      },
      {
        "name": "facility_id",
        "type": "integer"
      },
      {
        "name": "installer_id",
        "type": "integer"
      },
      {
        "name": "job_id",
        "type": "integer"
      },
      {
        "name": "licensed_runs",
        "type": "integer"
      },
      {
        "name": "output_location_id",
        "type": "integer"
      },
      {
        "name": "pause_date",
        "type": "string"
      },
      {
        "name": "probability",
        "type": "number"
      },
      {
        "name": "product_type_id",
        "type": "integer"
      },
      {
        "name": "runs",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      },
      {
        "name": "station_id",
        "type": "integer"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "successful_runs",
        "type": "integer"
      }
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
    ]
  },
  "characters_character_killmails_recent": {
    "description": "Return a list of a character's kills and losses going back 90 days",
    "summary": "Get a character's recent kills and losses",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "killmail_hash",
        "type": "string"
      },
      {
        "name": "killmail_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/killmails/recent/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_location": {
    "description": "Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.",
    "summary": "Get character location",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "station_id",
        "type": "integer"
      },
      {
        "name": "structure_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/location/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_loyalty_points": {
    "description": "Return a list of loyalty points for all corporations the character has worked for",
    "summary": "Get loyalty points",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "loyalty_points",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/loyalty/points/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_mail": {
    "description": "Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.",
    "summary": "Return mail headers",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "from",
        "type": "integer"
      },
      {
        "name": "is_read",
        "type": "boolean"
      },
      {
        "name": "labels",
        "type": "array"
      },
      {
        "name": "mail_id",
        "type": "integer"
      },
      {
        "name": "recipients",
        "type": "array",
        "sub_headers": [
          "recipient_id",
          "recipient_type"
        ]
      },
      {
        "name": "subject",
        "type": "string"
      },
      {
        "name": "timestamp",
        "type": "string"
      }
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
    ]
  },
  "characters_character_mail_lists": {
    "description": "Return all mailing lists that the character is subscribed to",
    "summary": "Return mailing list subscriptions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "mailing_list_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/mail/lists/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_mail_mail": {
    "description": "Return the contents of an EVE mail",
    "summary": "Return a mail",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "body",
        "type": "string"
      },
      {
        "name": "from",
        "type": "integer"
      },
      {
        "name": "labels",
        "type": "array"
      },
      {
        "name": "read",
        "type": "boolean"
      },
      {
        "name": "recipients",
        "type": "array",
        "sub_headers": [
          "recipient_id",
          "recipient_type"
        ]
      },
      {
        "name": "subject",
        "type": "string"
      },
      {
        "name": "timestamp",
        "type": "string"
      }
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
    ]
  },
  "characters_character_medals": {
    "description": "Return a list of medals the character has",
    "summary": "Get medals",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "graphics",
        "type": "array",
        "sub_headers": [
          "color",
          "graphic",
          "layer",
          "part"
        ]
      },
      {
        "name": "issuer_id",
        "type": "integer"
      },
      {
        "name": "medal_id",
        "type": "integer"
      },
      {
        "name": "reason",
        "type": "string"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "title",
        "type": "string"
      }
    ],
    "path": "/v1/characters/{character_id}/medals/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_mining": {
    "description": "Paginated record of all mining done by a character for the past 30 days",
    "summary": "Character mining ledger",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/mining/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_notifications_contacts": {
    "description": "Return notifications about having been added to someone's contact list",
    "summary": "Get new contact notifications",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "message",
        "type": "string"
      },
      {
        "name": "notification_id",
        "type": "integer"
      },
      {
        "name": "send_date",
        "type": "string"
      },
      {
        "name": "sender_character_id",
        "type": "integer"
      },
      {
        "name": "standing_level",
        "type": "number"
      }
    ],
    "path": "/v1/characters/{character_id}/notifications/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_opportunities": {
    "description": "Return a list of tasks finished by a character",
    "summary": "Get a character's completed tasks",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "completed_at",
        "type": "string"
      },
      {
        "name": "task_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/opportunities/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_orders_history": {
    "description": "List cancelled and expired market orders placed by a character up to 90 days in the past.",
    "summary": "List historical orders by a character",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "escrow",
        "type": "number"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "is_corporation",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "state",
        "type": "string"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/orders/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_planets": {
    "description": "Returns a list of all planetary colonies owned by a character.",
    "summary": "Get colonies",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "last_update",
        "type": "string"
      },
      {
        "name": "num_pins",
        "type": "integer"
      },
      {
        "name": "owner_id",
        "type": "integer"
      },
      {
        "name": "planet_id",
        "type": "integer"
      },
      {
        "name": "planet_type",
        "type": "string"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "upgrade_level",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/planets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_ship": {
    "description": "Get the current ship type, name and id",
    "summary": "Get current ship",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "ship_item_id",
        "type": "integer"
      },
      {
        "name": "ship_name",
        "type": "string"
      },
      {
        "name": "ship_type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/ship/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_standings": {
    "description": "Return character standings from agents, NPC corporations, and factions",
    "summary": "Get standings",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "from_id",
        "type": "integer"
      },
      {
        "name": "from_type",
        "type": "string"
      },
      {
        "name": "standing",
        "type": "number"
      }
    ],
    "path": "/v1/characters/{character_id}/standings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_titles": {
    "description": "Returns a character's titles",
    "summary": "Get character corporation titles",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "title_id",
        "type": "integer"
      }
    ],
    "path": "/v1/characters/{character_id}/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_wallet": {
    "description": "Returns a character's wallet balance",
    "summary": "Get a character's wallet balance",
    "request": "get",
    "version": 1,
    "headers": [

    ],
    "path": "/v1/characters/{character_id}/wallet/",
    "authed": true,
    "response_type": "number",
    "item_type": "number",
    "parameters": [

    ]
  },
  "characters_character_wallet_transactions": {
    "description": "Get wallet transactions of a character",
    "summary": "Get wallet transactions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "client_id",
        "type": "integer"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "is_buy",
        "type": "boolean"
      },
      {
        "name": "is_personal",
        "type": "boolean"
      },
      {
        "name": "journal_ref_id",
        "type": "integer"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "transaction_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "unit_price",
        "type": "number"
      }
    ],
    "path": "/v1/characters/{character_id}/wallet/transactions/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "from_id",
        "description": "Only show transactions happened before the one referenced by this id",
        "required": false,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporation_corporation_mining_extractions": {
    "description": "Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.",
    "summary": "Moon extraction timers",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "chunk_arrival_time",
        "type": "string"
      },
      {
        "name": "extraction_start_time",
        "type": "string"
      },
      {
        "name": "moon_id",
        "type": "integer"
      },
      {
        "name": "natural_decay_time",
        "type": "string"
      },
      {
        "name": "structure_id",
        "type": "integer"
      }
    ],
    "path": "/v1/corporation/{corporation_id}/mining/extractions/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporation_corporation_mining_observers": {
    "description": "Paginated list of all entities capable of observing and recording mining for a corporation",
    "summary": "Corporation mining observers",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "last_updated",
        "type": "string"
      },
      {
        "name": "observer_id",
        "type": "integer"
      },
      {
        "name": "observer_type",
        "type": "string"
      }
    ],
    "path": "/v1/corporation/{corporation_id}/mining/observers/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporation_corporation_mining_observers_observer": {
    "description": "Paginated record of all mining seen by an observer",
    "summary": "Observed corporation mining",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "last_updated",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "recorded_corporation_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
      },
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_npccorps": {
    "description": "Get a list of npc corporations",
    "summary": "Get npc corporations",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "npccorp_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/npccorps/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "corporations_corporation_bookmarks": {
    "description": "A list of your corporation's bookmarks",
    "summary": "List corporation bookmarks",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "bookmark_id",
        "type": "integer"
      },
      {
        "name": "coordinates-x",
        "type": "number"
      },
      {
        "name": "coordinates-y",
        "type": "number"
      },
      {
        "name": "coordinates-z",
        "type": "number"
      },
      {
        "name": "created",
        "type": "string"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "folder_id",
        "type": "integer"
      },
      {
        "name": "item-item_id",
        "type": "integer"
      },
      {
        "name": "item-type_id",
        "type": "integer"
      },
      {
        "name": "label",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "notes",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_bookmarks_folders": {
    "description": "A list of your corporation's bookmark folders",
    "summary": "List corporation bookmark folders",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "folder_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/folders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_contacts": {
    "description": "Return contacts of a corporation",
    "summary": "Get corporation contacts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "contact_id",
        "type": "integer"
      },
      {
        "name": "contact_type",
        "type": "string"
      },
      {
        "name": "is_watched",
        "type": "boolean"
      },
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "standing",
        "type": "number"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contacts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_contacts_labels": {
    "description": "Return custom labels for a corporation's contacts",
    "summary": "Get corporation contact labels",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "label_id",
        "type": "integer"
      },
      {
        "name": "label_name",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contacts/labels/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_contracts": {
    "description": "Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "summary": "Get corporation contracts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "acceptor_id",
        "type": "integer"
      },
      {
        "name": "assignee_id",
        "type": "integer"
      },
      {
        "name": "availability",
        "type": "string"
      },
      {
        "name": "buyout",
        "type": "number"
      },
      {
        "name": "collateral",
        "type": "number"
      },
      {
        "name": "contract_id",
        "type": "integer"
      },
      {
        "name": "date_accepted",
        "type": "string"
      },
      {
        "name": "date_completed",
        "type": "string"
      },
      {
        "name": "date_expired",
        "type": "string"
      },
      {
        "name": "date_issued",
        "type": "string"
      },
      {
        "name": "days_to_complete",
        "type": "integer"
      },
      {
        "name": "end_location_id",
        "type": "integer"
      },
      {
        "name": "for_corporation",
        "type": "boolean"
      },
      {
        "name": "issuer_corporation_id",
        "type": "integer"
      },
      {
        "name": "issuer_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "reward",
        "type": "number"
      },
      {
        "name": "start_location_id",
        "type": "integer"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "type",
        "type": "string"
      },
      {
        "name": "volume",
        "type": "number"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "summary": "Get corporation contract bids",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "amount",
        "type": "number"
      },
      {
        "name": "bid_id",
        "type": "integer"
      },
      {
        "name": "bidder_id",
        "type": "integer"
      },
      {
        "name": "date_bid",
        "type": "string"
      }
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
      },
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "summary": "Get corporation contract items",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "is_included",
        "type": "boolean"
      },
      {
        "name": "is_singleton",
        "type": "boolean"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "raw_quantity",
        "type": "integer"
      },
      {
        "name": "record_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "corporations_corporation_customs_offices": {
    "description": "List customs offices owned by a corporation",
    "summary": "List corporation customs offices",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "alliance_tax_rate",
        "type": "number"
      },
      {
        "name": "allow_access_with_standings",
        "type": "boolean"
      },
      {
        "name": "allow_alliance_access",
        "type": "boolean"
      },
      {
        "name": "bad_standing_tax_rate",
        "type": "number"
      },
      {
        "name": "corporation_tax_rate",
        "type": "number"
      },
      {
        "name": "excellent_standing_tax_rate",
        "type": "number"
      },
      {
        "name": "good_standing_tax_rate",
        "type": "number"
      },
      {
        "name": "neutral_standing_tax_rate",
        "type": "number"
      },
      {
        "name": "office_id",
        "type": "integer"
      },
      {
        "name": "reinforce_exit_end",
        "type": "integer"
      },
      {
        "name": "reinforce_exit_start",
        "type": "integer"
      },
      {
        "name": "standing_level",
        "type": "string"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "terrible_standing_tax_rate",
        "type": "number"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/customs_offices/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_divisions": {
    "description": "Return corporation hangar and wallet division names, only show if a division is not using the default name",
    "summary": "Get corporation divisions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "hangar",
        "type": "array",
        "sub_headers": [
          "division",
          "name"
        ]
      },
      {
        "name": "wallet",
        "type": "array",
        "sub_headers": [
          "division",
          "name"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/divisions/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_facilities": {
    "description": "Return a corporation's facilities",
    "summary": "Get corporation facilities",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "facility_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/facilities/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_fw_stats": {
    "description": "Statistics about a corporation involved in faction warfare",
    "summary": "Overview of a corporation involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "enlisted_on",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "kills-last_week",
        "type": "integer"
      },
      {
        "name": "kills-total",
        "type": "integer"
      },
      {
        "name": "kills-yesterday",
        "type": "integer"
      },
      {
        "name": "pilots",
        "type": "integer"
      },
      {
        "name": "victory_points-last_week",
        "type": "integer"
      },
      {
        "name": "victory_points-total",
        "type": "integer"
      },
      {
        "name": "victory_points-yesterday",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/fw/stats/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_icons": {
    "description": "Get the icon urls for a corporation",
    "summary": "Get corporation icon",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "px128x128",
        "type": "string"
      },
      {
        "name": "px256x256",
        "type": "string"
      },
      {
        "name": "px64x64",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/icons/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "corporation_id",
        "description": "An EVE corporation ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "corporations_corporation_industry_jobs": {
    "description": "List industry jobs run by a corporation",
    "summary": "List corporation industry jobs",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "activity_id",
        "type": "integer"
      },
      {
        "name": "blueprint_id",
        "type": "integer"
      },
      {
        "name": "blueprint_location_id",
        "type": "integer"
      },
      {
        "name": "blueprint_type_id",
        "type": "integer"
      },
      {
        "name": "completed_character_id",
        "type": "integer"
      },
      {
        "name": "completed_date",
        "type": "string"
      },
      {
        "name": "cost",
        "type": "number"
      },
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "end_date",
        "type": "string"
      },
      {
        "name": "facility_id",
        "type": "integer"
      },
      {
        "name": "installer_id",
        "type": "integer"
      },
      {
        "name": "job_id",
        "type": "integer"
      },
      {
        "name": "licensed_runs",
        "type": "integer"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "output_location_id",
        "type": "integer"
      },
      {
        "name": "pause_date",
        "type": "string"
      },
      {
        "name": "probability",
        "type": "number"
      },
      {
        "name": "product_type_id",
        "type": "integer"
      },
      {
        "name": "runs",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "successful_runs",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/industry/jobs/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "include_completed",
        "description": "Whether retrieve completed industry jobs as well",
        "required": false,
        "type": "boolean",
        "in": "query"
      },
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_killmails_recent": {
    "description": "Get a list of a corporation's kills and losses going back 90 days",
    "summary": "Get a corporation's recent kills and losses",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "killmail_hash",
        "type": "string"
      },
      {
        "name": "killmail_id",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/killmails/recent/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_medals": {
    "description": "Returns a corporation's medals",
    "summary": "Get corporation medals",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "created_at",
        "type": "string"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "medal_id",
        "type": "integer"
      },
      {
        "name": "title",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/medals/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_medals_issue": {
    "description": "Returns medals issued by a corporation",
    "summary": "Get corporation issued medals",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "issued_at",
        "type": "string"
      },
      {
        "name": "issuer_id",
        "type": "integer"
      },
      {
        "name": "medal_id",
        "type": "integer"
      },
      {
        "name": "reason",
        "type": "string"
      },
      {
        "name": "status",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/medals/issued/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_members_limit": {
    "description": "Return a corporation's member limit, not including CEO himself",
    "summary": "Get corporation member limit",
    "request": "get",
    "version": 1,
    "headers": [

    ],
    "path": "/v1/corporations/{corporation_id}/members/limit/",
    "authed": true,
    "response_type": "integer",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "corporations_corporation_members_titles": {
    "description": "Returns a corporation's members' titles",
    "summary": "Get corporation's members' titles",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "titles",
        "type": "array"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/members/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_membertracking": {
    "description": "Returns additional information about a corporation's members which helps tracking their activities",
    "summary": "Track corporation members",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "base_id",
        "type": "integer"
      },
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "logoff_date",
        "type": "string"
      },
      {
        "name": "logon_date",
        "type": "string"
      },
      {
        "name": "ship_type_id",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/membertracking/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_orders_history": {
    "description": "List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.",
    "summary": "List historical orders from a corporation",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "escrow",
        "type": "number"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "state",
        "type": "string"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      },
      {
        "name": "wallet_division",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/orders/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_outposts": {
    "description": "Get a list of corporation outpost IDs Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "summary": "Get corporation outposts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "outpost_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/outposts/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_outposts_outpost": {
    "description": "Get details about a given outpost. Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "summary": "Get corporation outpost details",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "coordinates-x",
        "type": "number"
      },
      {
        "name": "coordinates-y",
        "type": "number"
      },
      {
        "name": "coordinates-z",
        "type": "number"
      },
      {
        "name": "docking_cost_per_ship_volume",
        "type": "number"
      },
      {
        "name": "office_rental_cost",
        "type": "integer"
      },
      {
        "name": "owner_id",
        "type": "integer"
      },
      {
        "name": "reprocessing_efficiency",
        "type": "number"
      },
      {
        "name": "reprocessing_station_take",
        "type": "number"
      },
      {
        "name": "services",
        "type": "array",
        "sub_headers": [
          "discount_per_good_standing",
          "minimum_standing",
          "service_name",
          "surcharge_per_bad_standing"
        ]
      },
      {
        "name": "standing_owner_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "corporations_corporation_roles": {
    "description": "Return the roles of all members if the character has the personnel manager role or any grantable role.",
    "summary": "Get corporation member roles",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "grantable_roles",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_base",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_hq",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_other",
        "type": "array"
      },
      {
        "name": "roles",
        "type": "array"
      },
      {
        "name": "roles_at_base",
        "type": "array"
      },
      {
        "name": "roles_at_hq",
        "type": "array"
      },
      {
        "name": "roles_at_other",
        "type": "array"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/roles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_roles_history": {
    "description": "Return how roles have changed for a coporation's members, up to a month",
    "summary": "Get corporation member roles history",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "changed_at",
        "type": "string"
      },
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "issuer_id",
        "type": "integer"
      },
      {
        "name": "new_roles",
        "type": "array"
      },
      {
        "name": "old_roles",
        "type": "array"
      },
      {
        "name": "role_type",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/roles/history/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_shareholders": {
    "description": "Return the current shareholders of a corporation.",
    "summary": "Get corporation shareholders",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "share_count",
        "type": "integer"
      },
      {
        "name": "shareholder_id",
        "type": "integer"
      },
      {
        "name": "shareholder_type",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/shareholders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_standings": {
    "description": "Return corporation standings from agents, NPC corporations, and factions",
    "summary": "Get corporation standings",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "from_id",
        "type": "integer"
      },
      {
        "name": "from_type",
        "type": "string"
      },
      {
        "name": "standing",
        "type": "number"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/standings/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_starbases": {
    "description": "Returns list of corporation starbases (POSes)",
    "summary": "Get corporation starbases (POSes)",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "moon_id",
        "type": "integer"
      },
      {
        "name": "onlined_since",
        "type": "string"
      },
      {
        "name": "reinforced_until",
        "type": "string"
      },
      {
        "name": "starbase_id",
        "type": "integer"
      },
      {
        "name": "state",
        "type": "string"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "unanchor_at",
        "type": "string"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/starbases/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_starbases_starbase": {
    "description": "Returns various settings and fuels of a starbase (POS)",
    "summary": "Get starbase (POS) detail",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "allow_alliance_members",
        "type": "boolean"
      },
      {
        "name": "allow_corporation_members",
        "type": "boolean"
      },
      {
        "name": "anchor",
        "type": "string"
      },
      {
        "name": "attack_if_at_war",
        "type": "boolean"
      },
      {
        "name": "attack_if_other_security_status_dropping",
        "type": "boolean"
      },
      {
        "name": "attack_security_status_threshold",
        "type": "number"
      },
      {
        "name": "attack_standing_threshold",
        "type": "number"
      },
      {
        "name": "fuel_bay_take",
        "type": "string"
      },
      {
        "name": "fuel_bay_view",
        "type": "string"
      },
      {
        "name": "fuels",
        "type": "array",
        "sub_headers": [
          "quantity",
          "type_id"
        ]
      },
      {
        "name": "offline",
        "type": "string"
      },
      {
        "name": "online",
        "type": "string"
      },
      {
        "name": "unanchor",
        "type": "string"
      },
      {
        "name": "use_alliance_standings",
        "type": "boolean"
      }
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
    ]
  },
  "corporations_corporation_titles": {
    "description": "Returns a corporation's titles",
    "summary": "Get corporation titles",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "grantable_roles",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_base",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_hq",
        "type": "array"
      },
      {
        "name": "grantable_roles_at_other",
        "type": "array"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "roles",
        "type": "array"
      },
      {
        "name": "roles_at_base",
        "type": "array"
      },
      {
        "name": "roles_at_hq",
        "type": "array"
      },
      {
        "name": "roles_at_other",
        "type": "array"
      },
      {
        "name": "title_id",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/titles/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_wallets": {
    "description": "Get a corporation's wallets",
    "summary": "Returns a corporation's wallet balance",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "balance",
        "type": "number"
      },
      {
        "name": "division",
        "type": "integer"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/wallets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_corporation_wallets_division_transactions": {
    "description": "Get wallet transactions of a corporation",
    "summary": "Get corporation wallet transactions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "client_id",
        "type": "integer"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "is_buy",
        "type": "boolean"
      },
      {
        "name": "journal_ref_id",
        "type": "integer"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "transaction_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "unit_price",
        "type": "number"
      }
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
    ]
  },
  "dogma_attributes": {
    "description": "Get a list of dogma attribute ids",
    "summary": "Get attributes",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "attribute_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/dogma/attributes/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "dogma_attributes_attribute": {
    "description": "Get information on a dogma attribute",
    "summary": "Get attribute information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "attribute_id",
        "type": "integer"
      },
      {
        "name": "default_value",
        "type": "number"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "display_name",
        "type": "string"
      },
      {
        "name": "high_is_good",
        "type": "boolean"
      },
      {
        "name": "icon_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "published",
        "type": "boolean"
      },
      {
        "name": "stackable",
        "type": "boolean"
      },
      {
        "name": "unit_id",
        "type": "integer"
      }
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
    ]
  },
  "dogma_dynamic_items_type_item": {
    "description": "Returns info about a dynamic item resulting from mutation with a mutaplasmid.",
    "summary": "Get dynamic item information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "created_by",
        "type": "integer"
      },
      {
        "name": "dogma_attributes",
        "type": "array",
        "sub_headers": [
          "attribute_id",
          "value"
        ]
      },
      {
        "name": "dogma_effects",
        "type": "array",
        "sub_headers": [
          "effect_id",
          "is_default"
        ]
      },
      {
        "name": "mutator_type_id",
        "type": "integer"
      },
      {
        "name": "source_type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/dogma/dynamic/items/{type_id}/{item_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "item_id",
        "description": "item_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "type_id",
        "description": "type_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "dogma_effects": {
    "description": "Get a list of dogma effect ids",
    "summary": "Get effects",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "effect_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/dogma/effects/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "fleets_fleet": {
    "description": "Return details about a fleet",
    "summary": "Get fleet information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "is_free_move",
        "type": "boolean"
      },
      {
        "name": "is_registered",
        "type": "boolean"
      },
      {
        "name": "is_voice_enabled",
        "type": "boolean"
      },
      {
        "name": "motd",
        "type": "string"
      }
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
    ]
  },
  "fleets_fleet_members": {
    "description": "Return information about fleet members",
    "summary": "Get fleet members",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "join_time",
        "type": "string"
      },
      {
        "name": "role",
        "type": "string"
      },
      {
        "name": "role_name",
        "type": "string"
      },
      {
        "name": "ship_type_id",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "squad_id",
        "type": "integer"
      },
      {
        "name": "station_id",
        "type": "integer"
      },
      {
        "name": "takes_fleet_warp",
        "type": "boolean"
      },
      {
        "name": "wing_id",
        "type": "integer"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "fleets_fleet_wings": {
    "description": "Return information about wings in a fleet",
    "summary": "Get fleet wings",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "squads",
        "type": "array",
        "sub_headers": [
          "id",
          "name"
        ]
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "fw_leaderboards": {
    "description": "Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top factions in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "kills-active_total",
        "type": "array"
      },
      {
        "name": "kills-last_week",
        "type": "array"
      },
      {
        "name": "kills-yesterday",
        "type": "array"
      },
      {
        "name": "victory_points-active_total",
        "type": "array"
      },
      {
        "name": "victory_points-last_week",
        "type": "array"
      },
      {
        "name": "victory_points-yesterday",
        "type": "array"
      }
    ],
    "path": "/v1/fw/leaderboards/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "fw_leaderboards_characters": {
    "description": "Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top pilots in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "kills-active_total",
        "type": "array"
      },
      {
        "name": "kills-last_week",
        "type": "array"
      },
      {
        "name": "kills-yesterday",
        "type": "array"
      },
      {
        "name": "victory_points-active_total",
        "type": "array"
      },
      {
        "name": "victory_points-last_week",
        "type": "array"
      },
      {
        "name": "victory_points-yesterday",
        "type": "array"
      }
    ],
    "path": "/v1/fw/leaderboards/characters/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "fw_leaderboards_corporations": {
    "description": "Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.",
    "summary": "List of the top corporations in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "kills-active_total",
        "type": "array"
      },
      {
        "name": "kills-last_week",
        "type": "array"
      },
      {
        "name": "kills-yesterday",
        "type": "array"
      },
      {
        "name": "victory_points-active_total",
        "type": "array"
      },
      {
        "name": "victory_points-last_week",
        "type": "array"
      },
      {
        "name": "victory_points-yesterday",
        "type": "array"
      }
    ],
    "path": "/v1/fw/leaderboards/corporations/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "fw_stats": {
    "description": "Statistical overviews of factions involved in faction warfare",
    "summary": "An overview of statistics about factions involved in faction warfare",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "kills-last_week",
        "type": "integer"
      },
      {
        "name": "kills-total",
        "type": "integer"
      },
      {
        "name": "kills-yesterday",
        "type": "integer"
      },
      {
        "name": "pilots",
        "type": "integer"
      },
      {
        "name": "systems_controlled",
        "type": "integer"
      },
      {
        "name": "victory_points-last_week",
        "type": "integer"
      },
      {
        "name": "victory_points-total",
        "type": "integer"
      },
      {
        "name": "victory_points-yesterday",
        "type": "integer"
      }
    ],
    "path": "/v1/fw/stats/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "fw_systems": {
    "description": "An overview of the current ownership of faction warfare solar systems",
    "summary": "Ownership of faction warfare systems",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "contested",
        "type": "boolean"
      },
      {
        "name": "occupier_faction_id",
        "type": "integer"
      },
      {
        "name": "owner_faction_id",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "victory_points",
        "type": "integer"
      },
      {
        "name": "victory_points_threshold",
        "type": "integer"
      }
    ],
    "path": "/v1/fw/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "fw_wars": {
    "description": "Data about which NPC factions are at war",
    "summary": "Data about which NPC factions are at war",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "against_id",
        "type": "integer"
      },
      {
        "name": "faction_id",
        "type": "integer"
      }
    ],
    "path": "/v1/fw/wars/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "incursions": {
    "description": "Return a list of current incursions",
    "summary": "List incursions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "constellation_id",
        "type": "integer"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "has_boss",
        "type": "boolean"
      },
      {
        "name": "infested_solar_systems",
        "type": "array"
      },
      {
        "name": "influence",
        "type": "number"
      },
      {
        "name": "staging_solar_system_id",
        "type": "integer"
      },
      {
        "name": "state",
        "type": "string"
      },
      {
        "name": "type",
        "type": "string"
      }
    ],
    "path": "/v1/incursions/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "industry_facilities": {
    "description": "Return a list of industry facilities",
    "summary": "List industry facilities",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "facility_id",
        "type": "integer"
      },
      {
        "name": "owner_id",
        "type": "integer"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "tax",
        "type": "number"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/industry/facilities/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "industry_systems": {
    "description": "Return cost indices for solar systems",
    "summary": "List solar system cost indices",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "cost_indices",
        "type": "array",
        "sub_headers": [
          "activity",
          "cost_index"
        ]
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      }
    ],
    "path": "/v1/industry/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "insurance_prices": {
    "description": "Return available insurance levels for all ship types",
    "summary": "List insurance levels",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "levels",
        "type": "array",
        "sub_headers": [
          "cost",
          "name",
          "payout"
        ]
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/insurance/prices/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "killmails_killmail_killmail_hash": {
    "description": "Return a single killmail from its ID and hash",
    "summary": "Get a single killmail",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "attackers",
        "type": "array",
        "sub_headers": [
          "alliance_id",
          "character_id",
          "corporation_id",
          "damage_done",
          "faction_id",
          "final_blow",
          "security_status",
          "ship_type_id",
          "weapon_type_id"
        ]
      },
      {
        "name": "killmail_id",
        "type": "integer"
      },
      {
        "name": "killmail_time",
        "type": "string"
      },
      {
        "name": "moon_id",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "victim-alliance_id",
        "type": "integer"
      },
      {
        "name": "victim-character_id",
        "type": "integer"
      },
      {
        "name": "victim-corporation_id",
        "type": "integer"
      },
      {
        "name": "victim-damage_taken",
        "type": "integer"
      },
      {
        "name": "victim-faction_id",
        "type": "integer"
      },
      {
        "name": "victim-items",
        "type": "array"
      },
      {
        "name": "victim-position",
        "type": "object"
      },
      {
        "name": "victim-ship_type_id",
        "type": "integer"
      },
      {
        "name": "war_id",
        "type": "integer"
      }
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
    ]
  },
  "loyalty_stores_corporation_offers": {
    "description": "Return a list of offers from a specific corporation's loyalty store",
    "summary": "List loyalty store offers",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "ak_cost",
        "type": "integer"
      },
      {
        "name": "isk_cost",
        "type": "integer"
      },
      {
        "name": "lp_cost",
        "type": "integer"
      },
      {
        "name": "offer_id",
        "type": "integer"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "required_items",
        "type": "array",
        "sub_headers": [
          "quantity",
          "type_id"
        ]
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/loyalty/stores/{corporation_id}/offers/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "corporation_id",
        "description": "An EVE corporation ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "markets_groups": {
    "description": "Get a list of item groups",
    "summary": "Get item groups",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "group_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/markets/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "markets_groups_market_group": {
    "description": "Get information on an item group",
    "summary": "Get item group information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "market_group_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "parent_group_id",
        "type": "integer"
      },
      {
        "name": "types",
        "type": "array"
      }
    ],
    "path": "/v1/markets/groups/{market_group_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
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
    ]
  },
  "markets_prices": {
    "description": "Return a list of prices",
    "summary": "List market prices",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "adjusted_price",
        "type": "number"
      },
      {
        "name": "average_price",
        "type": "number"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/markets/prices/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "markets_structures_structure": {
    "description": "Return all orders in a structure",
    "summary": "List orders in a structure",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      }
    ],
    "path": "/v1/markets/structures/{structure_id}/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      },
      {
        "name": "structure_id",
        "description": "Return orders in this structure",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "markets_region_history": {
    "description": "Return a list of historical market statistics for the specified type in a region",
    "summary": "List historical market statistics in a region",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "average",
        "type": "number"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "highest",
        "type": "number"
      },
      {
        "name": "lowest",
        "type": "number"
      },
      {
        "name": "order_count",
        "type": "integer"
      },
      {
        "name": "volume",
        "type": "integer"
      }
    ],
    "path": "/v1/markets/{region_id}/history/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "region_id",
        "description": "Return statistics in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "type_id",
        "description": "Return statistics for this type",
        "required": true,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "markets_region_orders": {
    "description": "Return a list of orders in a region",
    "summary": "List orders in a region",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      }
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
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
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
    ]
  },
  "markets_region_types": {
    "description": "Return a list of type IDs that have active orders in the region, for efficient market indexing.",
    "summary": "List type IDs relevant to a market",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "type_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/markets/{region_id}/types/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      },
      {
        "name": "region_id",
        "description": "Return statistics in this region",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "opportunities_groups": {
    "description": "Return a list of opportunities groups",
    "summary": "Get opportunities groups",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "group_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/opportunities/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "opportunities_groups_group": {
    "description": "Return information of an opportunities group",
    "summary": "Get opportunities group",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "connected_groups",
        "type": "array"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "group_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "notification",
        "type": "string"
      },
      {
        "name": "required_tasks",
        "type": "array"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "opportunities_tasks": {
    "description": "Return a list of opportunities tasks",
    "summary": "Get opportunities tasks",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "task_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/opportunities/tasks/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "opportunities_tasks_task": {
    "description": "Return information of an opportunities task",
    "summary": "Get opportunities task",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "notification",
        "type": "string"
      },
      {
        "name": "task_id",
        "type": "integer"
      }
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
    ]
  },
  "route_origin_destination": {
    "description": "Get the systems between origin and destination",
    "summary": "Get route",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "integer",
        "type": "integer"
      }
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
    ]
  },
  "sovereignty_campaigns": {
    "description": "Shows sovereignty data for campaigns.",
    "summary": "List sovereignty campaigns",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "attackers_score",
        "type": "number"
      },
      {
        "name": "campaign_id",
        "type": "integer"
      },
      {
        "name": "constellation_id",
        "type": "integer"
      },
      {
        "name": "defender_id",
        "type": "integer"
      },
      {
        "name": "defender_score",
        "type": "number"
      },
      {
        "name": "event_type",
        "type": "string"
      },
      {
        "name": "participants",
        "type": "array",
        "sub_headers": [
          "alliance_id",
          "score"
        ]
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "start_time",
        "type": "string"
      },
      {
        "name": "structure_id",
        "type": "integer"
      }
    ],
    "path": "/v1/sovereignty/campaigns/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "sovereignty_map": {
    "description": "Shows sovereignty information for solar systems",
    "summary": "List sovereignty of systems",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
    ],
    "path": "/v1/sovereignty/map/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "sovereignty_structures": {
    "description": "Shows sovereignty data for structures.",
    "summary": "List sovereignty structures",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "structure_id",
        "type": "integer"
      },
      {
        "name": "structure_type_id",
        "type": "integer"
      },
      {
        "name": "vulnerability_occupancy_level",
        "type": "number"
      },
      {
        "name": "vulnerable_end_time",
        "type": "string"
      },
      {
        "name": "vulnerable_start_time",
        "type": "string"
      }
    ],
    "path": "/v1/sovereignty/structures/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "status": {
    "description": "EVE Server status",
    "summary": "Retrieve the uptime and player counts",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "players",
        "type": "integer"
      },
      {
        "name": "server_version",
        "type": "string"
      },
      {
        "name": "start_time",
        "type": "string"
      },
      {
        "name": "vip",
        "type": "boolean"
      }
    ],
    "path": "/v1/status/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "universe_ancestries": {
    "description": "Get all character ancestries",
    "summary": "Get ancestries",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "bloodline_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "icon_id",
        "type": "integer"
      },
      {
        "name": "id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "short_description",
        "type": "string"
      }
    ],
    "path": "/v1/universe/ancestries/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_asteroid_belts_asteroid_belt": {
    "description": "Get information on an asteroid belt",
    "summary": "Get asteroid belt information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/asteroid_belts/{asteroid_belt_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "asteroid_belt_id",
        "description": "asteroid_belt_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "universe_bloodlines": {
    "description": "Get a list of bloodlines",
    "summary": "Get bloodlines",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "bloodline_id",
        "type": "integer"
      },
      {
        "name": "charisma",
        "type": "integer"
      },
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "intelligence",
        "type": "integer"
      },
      {
        "name": "memory",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "perception",
        "type": "integer"
      },
      {
        "name": "race_id",
        "type": "integer"
      },
      {
        "name": "ship_type_id",
        "type": "integer"
      },
      {
        "name": "willpower",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/bloodlines/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_categories": {
    "description": "Get a list of item categories",
    "summary": "Get item categories",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "categorie_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/categories/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_categories_category": {
    "description": "Get information of an item category",
    "summary": "Get item category information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "category_id",
        "type": "integer"
      },
      {
        "name": "groups",
        "type": "array"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "published",
        "type": "boolean"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_constellations": {
    "description": "Get a list of constellations",
    "summary": "Get constellations",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "constellation_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/constellations/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_constellations_constellation": {
    "description": "Get information on a constellation",
    "summary": "Get constellation information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "constellation_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "systems",
        "type": "array"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_graphics": {
    "description": "Get a list of graphics",
    "summary": "Get graphics",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "graphic_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/graphics/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_graphics_graphic": {
    "description": "Get information on a graphic",
    "summary": "Get graphic information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "collision_file",
        "type": "string"
      },
      {
        "name": "graphic_file",
        "type": "string"
      },
      {
        "name": "graphic_id",
        "type": "integer"
      },
      {
        "name": "icon_folder",
        "type": "string"
      },
      {
        "name": "sof_dna",
        "type": "string"
      },
      {
        "name": "sof_fation_name",
        "type": "string"
      },
      {
        "name": "sof_hull_name",
        "type": "string"
      },
      {
        "name": "sof_race_name",
        "type": "string"
      }
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
    ]
  },
  "universe_groups": {
    "description": "Get a list of item groups",
    "summary": "Get item groups",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "group_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/groups/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "universe_groups_group": {
    "description": "Get information on an item group",
    "summary": "Get item group information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "category_id",
        "type": "integer"
      },
      {
        "name": "group_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "published",
        "type": "boolean"
      },
      {
        "name": "types",
        "type": "array"
      }
    ],
    "path": "/v1/universe/groups/{group_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "group_id",
        "description": "An Eve item group ID",
        "required": true,
        "type": "integer",
        "in": "path"
      },
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_moons_moon": {
    "description": "Get information on a moon",
    "summary": "Get moon information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "moon_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
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
    ]
  },
  "universe_planets_planet": {
    "description": "Get information on a planet",
    "summary": "Get planet information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "planet_id",
        "type": "integer"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/planets/{planet_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "planet_id",
        "description": "planet_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "universe_races": {
    "description": "Get a list of character races",
    "summary": "Get character races",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "race_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/races/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_regions": {
    "description": "Get a list of regions",
    "summary": "Get regions",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "region_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/regions/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_regions_region": {
    "description": "Get information on a region",
    "summary": "Get region information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "constellations",
        "type": "array"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "region_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/regions/{region_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "region_id",
        "description": "region_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "universe_schematics_schematic": {
    "description": "Get information on a planetary factory schematic",
    "summary": "Get schematic information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "cycle_time",
        "type": "integer"
      },
      {
        "name": "schematic_name",
        "type": "string"
      }
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
    ]
  },
  "universe_stargates_stargate": {
    "description": "Get information on a stargate",
    "summary": "Get stargate information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "destination-stargate_id",
        "type": "integer"
      },
      {
        "name": "destination-system_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "stargate_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "universe_stars_star": {
    "description": "Get information on a star",
    "summary": "Get star information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "age",
        "type": "integer"
      },
      {
        "name": "luminosity",
        "type": "number"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "radius",
        "type": "integer"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "spectral_class",
        "type": "string"
      },
      {
        "name": "temperature",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "universe_structures": {
    "description": "List all public structures",
    "summary": "List all public structures",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "structure_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/structures/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_structures_structure": {
    "description": "Returns information on requested structure, if you are on the ACL. Otherwise, returns \"Forbidden\" for all inputs.",
    "summary": "Get structure information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/structures/{structure_id}/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "structure_id",
        "description": "An Eve structure ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "universe_system_jumps": {
    "description": "Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last",
    "summary": "Get system jumps",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "ship_jumps",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/system_jumps/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "universe_systems": {
    "description": "Get a list of solar systems",
    "summary": "Get solar systems",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "system_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/systems/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "universe_types": {
    "description": "Get a list of type ids",
    "summary": "Get types",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "type_ids",
        "type": "integer"
      }
    ],
    "path": "/v1/universe/types/",
    "authed": false,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "wars": {
    "description": "Return a list of wars",
    "summary": "List wars",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "war_ids",
        "type": "integer"
      }
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
    ]
  },
  "wars_war": {
    "description": "Return details about a war",
    "summary": "Get war information",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "aggressor-alliance_id",
        "type": "integer"
      },
      {
        "name": "aggressor-corporation_id",
        "type": "integer"
      },
      {
        "name": "aggressor-isk_destroyed",
        "type": "number"
      },
      {
        "name": "aggressor-ships_killed",
        "type": "integer"
      },
      {
        "name": "allies",
        "type": "array",
        "sub_headers": [
          "alliance_id",
          "corporation_id"
        ]
      },
      {
        "name": "declared",
        "type": "string"
      },
      {
        "name": "defender-alliance_id",
        "type": "integer"
      },
      {
        "name": "defender-corporation_id",
        "type": "integer"
      },
      {
        "name": "defender-isk_destroyed",
        "type": "number"
      },
      {
        "name": "defender-ships_killed",
        "type": "integer"
      },
      {
        "name": "finished",
        "type": "string"
      },
      {
        "name": "id",
        "type": "integer"
      },
      {
        "name": "mutual",
        "type": "boolean"
      },
      {
        "name": "open_for_allies",
        "type": "boolean"
      },
      {
        "name": "retracted",
        "type": "string"
      },
      {
        "name": "started",
        "type": "string"
      }
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
    ]
  },
  "wars_war_killmails": {
    "description": "Return a list of kills related to a war",
    "summary": "List kills for a war",
    "request": "get",
    "version": 1,
    "headers": [
      {
        "name": "killmail_hash",
        "type": "string"
      },
      {
        "name": "killmail_id",
        "type": "integer"
      }
    ],
    "path": "/v1/wars/{war_id}/killmails/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      },
      {
        "name": "war_id",
        "description": "A valid war ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "alliances_names": {
    "description": "Resolve a set of alliance IDs to alliance names",
    "summary": "Get alliance names",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "alliance_name",
        "type": "string"
      }
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
    ]
  },
  "characters_character_blueprints": {
    "description": "Return a list of blueprints the character owns",
    "summary": "Get blueprints",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "item_id",
        "type": "integer"
      },
      {
        "name": "location_flag",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "material_efficiency",
        "type": "integer"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "runs",
        "type": "integer"
      },
      {
        "name": "time_efficiency",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v2/characters/{character_id}/blueprints/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_bookmarks": {
    "description": "A list of your character's personal bookmarks",
    "summary": "List bookmarks",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "bookmark_id",
        "type": "integer"
      },
      {
        "name": "coordinates-x",
        "type": "number"
      },
      {
        "name": "coordinates-y",
        "type": "number"
      },
      {
        "name": "coordinates-z",
        "type": "number"
      },
      {
        "name": "created",
        "type": "string"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "folder_id",
        "type": "integer"
      },
      {
        "name": "item-item_id",
        "type": "integer"
      },
      {
        "name": "item-type_id",
        "type": "integer"
      },
      {
        "name": "label",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "notes",
        "type": "string"
      }
    ],
    "path": "/v2/characters/{character_id}/bookmarks/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_bookmarks_folders": {
    "description": "A list of your character's personal bookmark folders",
    "summary": "List bookmark folders",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "folder_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "path": "/v2/characters/{character_id}/bookmarks/folders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_notifications": {
    "description": "Return character notifications",
    "summary": "Get character notifications",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "is_read",
        "type": "boolean"
      },
      {
        "name": "notification_id",
        "type": "integer"
      },
      {
        "name": "sender_id",
        "type": "integer"
      },
      {
        "name": "sender_type",
        "type": "string"
      },
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "timestamp",
        "type": "string"
      },
      {
        "name": "type",
        "type": "string"
      }
    ],
    "path": "/v2/characters/{character_id}/notifications/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_online": {
    "description": "Checks if the character is currently online",
    "summary": "Get character online",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "last_login",
        "type": "string"
      },
      {
        "name": "last_logout",
        "type": "string"
      },
      {
        "name": "logins",
        "type": "integer"
      },
      {
        "name": "online",
        "type": "boolean"
      }
    ],
    "path": "/v2/characters/{character_id}/online/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_orders": {
    "description": "List open market orders placed by a character",
    "summary": "List open orders from a character",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "escrow",
        "type": "number"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "is_corporation",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      }
    ],
    "path": "/v2/characters/{character_id}/orders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_portrait": {
    "description": "Get portrait urls for a character",
    "summary": "Get character portraits",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "px128x128",
        "type": "string"
      },
      {
        "name": "px256x256",
        "type": "string"
      },
      {
        "name": "px512x512",
        "type": "string"
      },
      {
        "name": "px64x64",
        "type": "string"
      }
    ],
    "path": "/v2/characters/{character_id}/portrait/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "character_id",
        "description": "An EVE character ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "characters_character_roles": {
    "description": "Returns a character's corporation roles",
    "summary": "Get character corporation roles",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "roles",
        "type": "array"
      },
      {
        "name": "roles_at_base",
        "type": "array"
      },
      {
        "name": "roles_at_hq",
        "type": "array"
      },
      {
        "name": "roles_at_other",
        "type": "array"
      }
    ],
    "path": "/v2/characters/{character_id}/roles/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_skillqueue": {
    "description": "List the configured skill queue for the given character",
    "summary": "Get character's skill queue",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "finish_date",
        "type": "string"
      },
      {
        "name": "finished_level",
        "type": "integer"
      },
      {
        "name": "level_end_sp",
        "type": "integer"
      },
      {
        "name": "level_start_sp",
        "type": "integer"
      },
      {
        "name": "queue_position",
        "type": "integer"
      },
      {
        "name": "skill_id",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      },
      {
        "name": "training_start_sp",
        "type": "integer"
      }
    ],
    "path": "/v2/characters/{character_id}/skillqueue/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_stats": {
    "description": "Returns aggregate yearly stats for a character",
    "summary": "Yearly aggregate stats",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "character-days_of_activity",
        "type": "integer"
      },
      {
        "name": "character-minutes",
        "type": "integer"
      },
      {
        "name": "character-sessions_started",
        "type": "integer"
      },
      {
        "name": "combat-cap_drainedby_npc",
        "type": "integer"
      },
      {
        "name": "combat-cap_drainedby_pc",
        "type": "integer"
      },
      {
        "name": "combat-cap_draining_pc",
        "type": "integer"
      },
      {
        "name": "combat-criminal_flag_set",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_np_cs_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_np_cs_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_bomb_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_bomb_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_combat_drone_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_combat_drone_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_energy_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_energy_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_fighter_bomber_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_fighter_bomber_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_fighter_drone_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_fighter_drone_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_hybrid_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_hybrid_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_missile_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_missile_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_projectile_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_projectile_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_smart_bomb_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_smart_bomb_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_super_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_players_super_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_structures_total_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_from_structures_total_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_bomb_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_bomb_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_combat_drone_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_combat_drone_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_energy_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_energy_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_fighter_bomber_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_fighter_bomber_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_fighter_drone_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_fighter_drone_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_hybrid_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_hybrid_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_missile_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_missile_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_projectile_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_projectile_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_smart_bomb_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_smart_bomb_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_super_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_players_super_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_structures_total_amount",
        "type": "integer"
      },
      {
        "name": "combat-damage_to_structures_total_num_shots",
        "type": "integer"
      },
      {
        "name": "combat-deaths_high_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_low_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_null_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_pod_high_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_pod_low_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_pod_null_sec",
        "type": "integer"
      },
      {
        "name": "combat-deaths_pod_wormhole",
        "type": "integer"
      },
      {
        "name": "combat-deaths_wormhole",
        "type": "integer"
      },
      {
        "name": "combat-drone_engage",
        "type": "integer"
      },
      {
        "name": "combat-dscans",
        "type": "integer"
      },
      {
        "name": "combat-duel_requested",
        "type": "integer"
      },
      {
        "name": "combat-engagement_register",
        "type": "integer"
      },
      {
        "name": "combat-kills_assists",
        "type": "integer"
      },
      {
        "name": "combat-kills_high_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_low_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_null_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_pod_high_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_pod_low_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_pod_null_sec",
        "type": "integer"
      },
      {
        "name": "combat-kills_pod_wormhole",
        "type": "integer"
      },
      {
        "name": "combat-kills_wormhole",
        "type": "integer"
      },
      {
        "name": "combat-npc_flag_set",
        "type": "integer"
      },
      {
        "name": "combat-probe_scans",
        "type": "integer"
      },
      {
        "name": "combat-pvp_flag_set",
        "type": "integer"
      },
      {
        "name": "combat-repair_armor_by_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_armor_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_armor_self_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_capacitor_by_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_capacitor_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_capacitor_self_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_hull_by_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_hull_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_hull_self_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_shield_by_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_shield_remote_amount",
        "type": "integer"
      },
      {
        "name": "combat-repair_shield_self_amount",
        "type": "integer"
      },
      {
        "name": "combat-self_destructs",
        "type": "integer"
      },
      {
        "name": "combat-warp_scramble_pc",
        "type": "integer"
      },
      {
        "name": "combat-warp_scrambledby_npc",
        "type": "integer"
      },
      {
        "name": "combat-warp_scrambledby_pc",
        "type": "integer"
      },
      {
        "name": "combat-weapon_flag_set",
        "type": "integer"
      },
      {
        "name": "combat-webifiedby_npc",
        "type": "integer"
      },
      {
        "name": "combat-webifiedby_pc",
        "type": "integer"
      },
      {
        "name": "combat-webifying_pc",
        "type": "integer"
      },
      {
        "name": "industry-hacking_successes",
        "type": "integer"
      },
      {
        "name": "industry-jobs_cancelled",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_copy_blueprint",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_invention",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_asteroid",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_asteroid_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_charge",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_charge_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_commodity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_commodity_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_deployable",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_deployable_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_drone",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_drone_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_implant",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_implant_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_module",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_module_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_other",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_other_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_ship",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_ship_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_structure",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_structure_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_subsystem",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_manufacture_subsystem_quantity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_material_productivity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_completed_time_productivity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_started_copy_blueprint",
        "type": "integer"
      },
      {
        "name": "industry-jobs_started_invention",
        "type": "integer"
      },
      {
        "name": "industry-jobs_started_manufacture",
        "type": "integer"
      },
      {
        "name": "industry-jobs_started_material_productivity",
        "type": "integer"
      },
      {
        "name": "industry-jobs_started_time_productivity",
        "type": "integer"
      },
      {
        "name": "industry-reprocess_item",
        "type": "integer"
      },
      {
        "name": "industry-reprocess_item_quantity",
        "type": "integer"
      },
      {
        "name": "inventory-abandon_loot_quantity",
        "type": "integer"
      },
      {
        "name": "inventory-trash_item_quantity",
        "type": "integer"
      },
      {
        "name": "isk-in",
        "type": "integer"
      },
      {
        "name": "isk-out",
        "type": "integer"
      },
      {
        "name": "market-accept_contracts_courier",
        "type": "integer"
      },
      {
        "name": "market-accept_contracts_item_exchange",
        "type": "integer"
      },
      {
        "name": "market-buy_orders_placed",
        "type": "integer"
      },
      {
        "name": "market-cancel_market_order",
        "type": "integer"
      },
      {
        "name": "market-create_contracts_auction",
        "type": "integer"
      },
      {
        "name": "market-create_contracts_courier",
        "type": "integer"
      },
      {
        "name": "market-create_contracts_item_exchange",
        "type": "integer"
      },
      {
        "name": "market-deliver_courier_contract",
        "type": "integer"
      },
      {
        "name": "market-isk_gained",
        "type": "integer"
      },
      {
        "name": "market-isk_spent",
        "type": "integer"
      },
      {
        "name": "market-modify_market_order",
        "type": "integer"
      },
      {
        "name": "market-search_contracts",
        "type": "integer"
      },
      {
        "name": "market-sell_orders_placed",
        "type": "integer"
      },
      {
        "name": "mining-drone_mine",
        "type": "integer"
      },
      {
        "name": "mining-ore_arkonor",
        "type": "integer"
      },
      {
        "name": "mining-ore_bistot",
        "type": "integer"
      },
      {
        "name": "mining-ore_crokite",
        "type": "integer"
      },
      {
        "name": "mining-ore_dark_ochre",
        "type": "integer"
      },
      {
        "name": "mining-ore_gneiss",
        "type": "integer"
      },
      {
        "name": "mining-ore_harvestable_cloud",
        "type": "integer"
      },
      {
        "name": "mining-ore_hedbergite",
        "type": "integer"
      },
      {
        "name": "mining-ore_hemorphite",
        "type": "integer"
      },
      {
        "name": "mining-ore_ice",
        "type": "integer"
      },
      {
        "name": "mining-ore_jaspet",
        "type": "integer"
      },
      {
        "name": "mining-ore_kernite",
        "type": "integer"
      },
      {
        "name": "mining-ore_mercoxit",
        "type": "integer"
      },
      {
        "name": "mining-ore_omber",
        "type": "integer"
      },
      {
        "name": "mining-ore_plagioclase",
        "type": "integer"
      },
      {
        "name": "mining-ore_pyroxeres",
        "type": "integer"
      },
      {
        "name": "mining-ore_scordite",
        "type": "integer"
      },
      {
        "name": "mining-ore_spodumain",
        "type": "integer"
      },
      {
        "name": "mining-ore_veldspar",
        "type": "integer"
      },
      {
        "name": "module-activations_armor_hardener",
        "type": "integer"
      },
      {
        "name": "module-activations_armor_repair_unit",
        "type": "integer"
      },
      {
        "name": "module-activations_armor_resistance_shift_hardener",
        "type": "integer"
      },
      {
        "name": "module-activations_automated_targeting_system",
        "type": "integer"
      },
      {
        "name": "module-activations_bastion",
        "type": "integer"
      },
      {
        "name": "module-activations_bomb_launcher",
        "type": "integer"
      },
      {
        "name": "module-activations_capacitor_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_cargo_scanner",
        "type": "integer"
      },
      {
        "name": "module-activations_cloaking_device",
        "type": "integer"
      },
      {
        "name": "module-activations_clone_vat_bay",
        "type": "integer"
      },
      {
        "name": "module-activations_cynosural_field",
        "type": "integer"
      },
      {
        "name": "module-activations_damage_control",
        "type": "integer"
      },
      {
        "name": "module-activations_data_miners",
        "type": "integer"
      },
      {
        "name": "module-activations_drone_control_unit",
        "type": "integer"
      },
      {
        "name": "module-activations_drone_tracking_modules",
        "type": "integer"
      },
      {
        "name": "module-activations_eccm",
        "type": "integer"
      },
      {
        "name": "module-activations_ecm",
        "type": "integer"
      },
      {
        "name": "module-activations_ecm_burst",
        "type": "integer"
      },
      {
        "name": "module-activations_energy_destabilizer",
        "type": "integer"
      },
      {
        "name": "module-activations_energy_vampire",
        "type": "integer"
      },
      {
        "name": "module-activations_energy_weapon",
        "type": "integer"
      },
      {
        "name": "module-activations_festival_launcher",
        "type": "integer"
      },
      {
        "name": "module-activations_frequency_mining_laser",
        "type": "integer"
      },
      {
        "name": "module-activations_fueled_armor_repairer",
        "type": "integer"
      },
      {
        "name": "module-activations_fueled_shield_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_gang_coordinator",
        "type": "integer"
      },
      {
        "name": "module-activations_gas_cloud_harvester",
        "type": "integer"
      },
      {
        "name": "module-activations_hull_repair_unit",
        "type": "integer"
      },
      {
        "name": "module-activations_hybrid_weapon",
        "type": "integer"
      },
      {
        "name": "module-activations_industrial_core",
        "type": "integer"
      },
      {
        "name": "module-activations_interdiction_sphere_launcher",
        "type": "integer"
      },
      {
        "name": "module-activations_micro_jump_drive",
        "type": "integer"
      },
      {
        "name": "module-activations_mining_laser",
        "type": "integer"
      },
      {
        "name": "module-activations_missile_launcher",
        "type": "integer"
      },
      {
        "name": "module-activations_passive_targeting_system",
        "type": "integer"
      },
      {
        "name": "module-activations_probe_launcher",
        "type": "integer"
      },
      {
        "name": "module-activations_projected_eccm",
        "type": "integer"
      },
      {
        "name": "module-activations_projectile_weapon",
        "type": "integer"
      },
      {
        "name": "module-activations_propulsion_module",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_armor_repairer",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_capacitor_transmitter",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_ecm_burst",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_hull_repairer",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_sensor_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_sensor_damper",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_shield_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_remote_tracking_computer",
        "type": "integer"
      },
      {
        "name": "module-activations_salvager",
        "type": "integer"
      },
      {
        "name": "module-activations_sensor_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_shield_booster",
        "type": "integer"
      },
      {
        "name": "module-activations_shield_hardener",
        "type": "integer"
      },
      {
        "name": "module-activations_ship_scanner",
        "type": "integer"
      },
      {
        "name": "module-activations_siege",
        "type": "integer"
      },
      {
        "name": "module-activations_smart_bomb",
        "type": "integer"
      },
      {
        "name": "module-activations_stasis_web",
        "type": "integer"
      },
      {
        "name": "module-activations_strip_miner",
        "type": "integer"
      },
      {
        "name": "module-activations_super_weapon",
        "type": "integer"
      },
      {
        "name": "module-activations_survey_scanner",
        "type": "integer"
      },
      {
        "name": "module-activations_target_breaker",
        "type": "integer"
      },
      {
        "name": "module-activations_target_painter",
        "type": "integer"
      },
      {
        "name": "module-activations_tracking_computer",
        "type": "integer"
      },
      {
        "name": "module-activations_tracking_disruptor",
        "type": "integer"
      },
      {
        "name": "module-activations_tractor_beam",
        "type": "integer"
      },
      {
        "name": "module-activations_triage",
        "type": "integer"
      },
      {
        "name": "module-activations_warp_disrupt_field_generator",
        "type": "integer"
      },
      {
        "name": "module-activations_warp_scrambler",
        "type": "integer"
      },
      {
        "name": "module-link_weapons",
        "type": "integer"
      },
      {
        "name": "module-overload",
        "type": "integer"
      },
      {
        "name": "module-repairs",
        "type": "integer"
      },
      {
        "name": "orbital-strike_characters_killed",
        "type": "integer"
      },
      {
        "name": "orbital-strike_damage_to_players_armor_amount",
        "type": "integer"
      },
      {
        "name": "orbital-strike_damage_to_players_shield_amount",
        "type": "integer"
      },
      {
        "name": "pve-dungeons_completed_agent",
        "type": "integer"
      },
      {
        "name": "pve-dungeons_completed_distribution",
        "type": "integer"
      },
      {
        "name": "pve-missions_succeeded",
        "type": "integer"
      },
      {
        "name": "pve-missions_succeeded_epic_arc",
        "type": "integer"
      },
      {
        "name": "social-add_contact_bad",
        "type": "integer"
      },
      {
        "name": "social-add_contact_good",
        "type": "integer"
      },
      {
        "name": "social-add_contact_high",
        "type": "integer"
      },
      {
        "name": "social-add_contact_horrible",
        "type": "integer"
      },
      {
        "name": "social-add_contact_neutral",
        "type": "integer"
      },
      {
        "name": "social-add_note",
        "type": "integer"
      },
      {
        "name": "social-added_as_contact_bad",
        "type": "integer"
      },
      {
        "name": "social-added_as_contact_good",
        "type": "integer"
      },
      {
        "name": "social-added_as_contact_high",
        "type": "integer"
      },
      {
        "name": "social-added_as_contact_horrible",
        "type": "integer"
      },
      {
        "name": "social-added_as_contact_neutral",
        "type": "integer"
      },
      {
        "name": "social-calendar_event_created",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_alliance",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_constellation",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_corporation",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_fleet",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_region",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_solarsystem",
        "type": "integer"
      },
      {
        "name": "social-chat_messages_warfaction",
        "type": "integer"
      },
      {
        "name": "social-chat_total_message_length",
        "type": "integer"
      },
      {
        "name": "social-direct_trades",
        "type": "integer"
      },
      {
        "name": "social-fleet_broadcasts",
        "type": "integer"
      },
      {
        "name": "social-fleet_joins",
        "type": "integer"
      },
      {
        "name": "social-mails_received",
        "type": "integer"
      },
      {
        "name": "social-mails_sent",
        "type": "integer"
      },
      {
        "name": "travel-acceleration_gate_activations",
        "type": "integer"
      },
      {
        "name": "travel-align_to",
        "type": "integer"
      },
      {
        "name": "travel-distance_warped_high_sec",
        "type": "integer"
      },
      {
        "name": "travel-distance_warped_low_sec",
        "type": "integer"
      },
      {
        "name": "travel-distance_warped_null_sec",
        "type": "integer"
      },
      {
        "name": "travel-distance_warped_wormhole",
        "type": "integer"
      },
      {
        "name": "travel-docks_high_sec",
        "type": "integer"
      },
      {
        "name": "travel-docks_low_sec",
        "type": "integer"
      },
      {
        "name": "travel-docks_null_sec",
        "type": "integer"
      },
      {
        "name": "travel-jumps_stargate_high_sec",
        "type": "integer"
      },
      {
        "name": "travel-jumps_stargate_low_sec",
        "type": "integer"
      },
      {
        "name": "travel-jumps_stargate_null_sec",
        "type": "integer"
      },
      {
        "name": "travel-jumps_wormhole",
        "type": "integer"
      },
      {
        "name": "travel-warps_high_sec",
        "type": "integer"
      },
      {
        "name": "travel-warps_low_sec",
        "type": "integer"
      },
      {
        "name": "travel-warps_null_sec",
        "type": "integer"
      },
      {
        "name": "travel-warps_to_bookmark",
        "type": "integer"
      },
      {
        "name": "travel-warps_to_celestial",
        "type": "integer"
      },
      {
        "name": "travel-warps_to_fleet_member",
        "type": "integer"
      },
      {
        "name": "travel-warps_to_scan_result",
        "type": "integer"
      },
      {
        "name": "travel-warps_wormhole",
        "type": "integer"
      },
      {
        "name": "year",
        "type": "integer"
      }
    ],
    "path": "/v2/characters/{character_id}/stats/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "corporations_names": {
    "description": "Resolve a set of corporation IDs to corporation names",
    "summary": "Get corporation names",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "corporation_name",
        "type": "string"
      }
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
    ]
  },
  "corporations_corporation_alliancehistory": {
    "description": "Get a list of all the alliances a corporation has been a member of",
    "summary": "Get alliance history",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "is_deleted",
        "type": "boolean"
      },
      {
        "name": "record_id",
        "type": "integer"
      },
      {
        "name": "start_date",
        "type": "string"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/alliancehistory/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "corporation_id",
        "description": "An EVE corporation ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "corporations_corporation_blueprints": {
    "description": "Returns a list of blueprints the corporation owns",
    "summary": "Get corporation blueprints",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "item_id",
        "type": "integer"
      },
      {
        "name": "location_flag",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "material_efficiency",
        "type": "integer"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "runs",
        "type": "integer"
      },
      {
        "name": "time_efficiency",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/blueprints/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_containers_logs": {
    "description": "Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation",
    "summary": "Get all corporation ALSC logs",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "action",
        "type": "string"
      },
      {
        "name": "character_id",
        "type": "integer"
      },
      {
        "name": "container_id",
        "type": "integer"
      },
      {
        "name": "container_type_id",
        "type": "integer"
      },
      {
        "name": "location_flag",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "logged_at",
        "type": "string"
      },
      {
        "name": "new_config_bitmask",
        "type": "integer"
      },
      {
        "name": "old_config_bitmask",
        "type": "integer"
      },
      {
        "name": "password_type",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/containers/logs/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_orders": {
    "description": "List open market orders placed on behalf of a corporation",
    "summary": "List open orders from a corporation",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "escrow",
        "type": "number"
      },
      {
        "name": "is_buy_order",
        "type": "boolean"
      },
      {
        "name": "issued",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "min_volume",
        "type": "integer"
      },
      {
        "name": "order_id",
        "type": "integer"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "range",
        "type": "string"
      },
      {
        "name": "region_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume_remain",
        "type": "integer"
      },
      {
        "name": "volume_total",
        "type": "integer"
      },
      {
        "name": "wallet_division",
        "type": "integer"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/orders/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_structures": {
    "description": "Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell",
    "summary": "Get corporation structures",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "fuel_expires",
        "type": "string"
      },
      {
        "name": "next_reinforce_apply",
        "type": "string"
      },
      {
        "name": "next_reinforce_hour",
        "type": "integer"
      },
      {
        "name": "next_reinforce_weekday",
        "type": "integer"
      },
      {
        "name": "profile_id",
        "type": "integer"
      },
      {
        "name": "reinforce_hour",
        "type": "integer"
      },
      {
        "name": "reinforce_weekday",
        "type": "integer"
      },
      {
        "name": "services",
        "type": "array",
        "sub_headers": [
          "name",
          "state"
        ]
      },
      {
        "name": "state",
        "type": "string"
      },
      {
        "name": "state_timer_end",
        "type": "string"
      },
      {
        "name": "state_timer_start",
        "type": "string"
      },
      {
        "name": "structure_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "unanchors_at",
        "type": "string"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/structures/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "dogma_effects_effect": {
    "description": "Get information on a dogma effect",
    "summary": "Get effect information",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "disallow_auto_repeat",
        "type": "boolean"
      },
      {
        "name": "discharge_attribute_id",
        "type": "integer"
      },
      {
        "name": "display_name",
        "type": "string"
      },
      {
        "name": "duration_attribute_id",
        "type": "integer"
      },
      {
        "name": "effect_category",
        "type": "integer"
      },
      {
        "name": "effect_id",
        "type": "integer"
      },
      {
        "name": "electronic_chance",
        "type": "boolean"
      },
      {
        "name": "falloff_attribute_id",
        "type": "integer"
      },
      {
        "name": "icon_id",
        "type": "integer"
      },
      {
        "name": "is_assistance",
        "type": "boolean"
      },
      {
        "name": "is_offensive",
        "type": "boolean"
      },
      {
        "name": "is_warp_safe",
        "type": "boolean"
      },
      {
        "name": "modifiers",
        "type": "array",
        "sub_headers": [
          "domain",
          "effect_id",
          "func",
          "modified_attribute_id",
          "modifying_attribute_id",
          "operator"
        ]
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "post_expression",
        "type": "integer"
      },
      {
        "name": "pre_expression",
        "type": "integer"
      },
      {
        "name": "published",
        "type": "boolean"
      },
      {
        "name": "range_attribute_id",
        "type": "integer"
      },
      {
        "name": "range_chance",
        "type": "boolean"
      },
      {
        "name": "tracking_speed_attribute_id",
        "type": "integer"
      }
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
    ]
  },
  "eve_search": {
    "description": "Search for entities that match a given sub",
    "summary": "Search on a string",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "agent",
        "type": "array"
      },
      {
        "name": "alliance",
        "type": "array"
      },
      {
        "name": "character",
        "type": "array"
      },
      {
        "name": "constellation",
        "type": "array"
      },
      {
        "name": "corporation",
        "type": "array"
      },
      {
        "name": "faction",
        "type": "array"
      },
      {
        "name": "inventory_type",
        "type": "array"
      },
      {
        "name": "region",
        "type": "array"
      },
      {
        "name": "solar_system",
        "type": "array"
      },
      {
        "name": "station",
        "type": "array"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
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
    ]
  },
  "universe_factions": {
    "description": "Get a list of factions",
    "summary": "Get factions",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "is_unique",
        "type": "boolean"
      },
      {
        "name": "militia_corporation_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "size_factor",
        "type": "number"
      },
      {
        "name": "solar_system_id",
        "type": "integer"
      },
      {
        "name": "station_count",
        "type": "integer"
      },
      {
        "name": "station_system_count",
        "type": "integer"
      }
    ],
    "path": "/v2/universe/factions/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      }
    ]
  },
  "universe_stations_station": {
    "description": "Get information on a station",
    "summary": "Get station information",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "max_dockable_ship_volume",
        "type": "number"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "office_rental_cost",
        "type": "number"
      },
      {
        "name": "owner",
        "type": "integer"
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "race_id",
        "type": "integer"
      },
      {
        "name": "reprocessing_efficiency",
        "type": "number"
      },
      {
        "name": "reprocessing_stations_take",
        "type": "number"
      },
      {
        "name": "services",
        "type": "array"
      },
      {
        "name": "station_id",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
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
    ]
  },
  "universe_system_kills": {
    "description": "Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last",
    "summary": "Get system kills",
    "request": "get",
    "version": 2,
    "headers": [
      {
        "name": "npc_kills",
        "type": "integer"
      },
      {
        "name": "pod_kills",
        "type": "integer"
      },
      {
        "name": "ship_kills",
        "type": "integer"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
    ],
    "path": "/v2/universe/system_kills/",
    "authed": false,
    "response_type": "array",
    "item_type": "object",
    "parameters": [

    ]
  },
  "alliances_alliance": {
    "description": "Public information about an alliance",
    "summary": "Get alliance information",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "creator_corporation_id",
        "type": "integer"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "date_founded",
        "type": "string"
      },
      {
        "name": "executor_corporation_id",
        "type": "integer"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "ticker",
        "type": "string"
      }
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
    ]
  },
  "characters_character_assets": {
    "description": "Return a list of the characters assets",
    "summary": "Get character assets",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "is_blueprint_copy",
        "type": "boolean"
      },
      {
        "name": "is_singleton",
        "type": "boolean"
      },
      {
        "name": "item_id",
        "type": "integer"
      },
      {
        "name": "location_flag",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "location_type",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v3/characters/{character_id}/assets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "characters_character_calendar_event": {
    "description": "Get all the information for a specific event",
    "summary": "Get an event",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "duration",
        "type": "integer"
      },
      {
        "name": "event_id",
        "type": "integer"
      },
      {
        "name": "importance",
        "type": "integer"
      },
      {
        "name": "owner_id",
        "type": "integer"
      },
      {
        "name": "owner_name",
        "type": "string"
      },
      {
        "name": "owner_type",
        "type": "string"
      },
      {
        "name": "response",
        "type": "string"
      },
      {
        "name": "text",
        "type": "string"
      },
      {
        "name": "title",
        "type": "string"
      }
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
    ]
  },
  "characters_character_clones": {
    "description": "A list of the character's clones",
    "summary": "Get clones",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "home_location-location_id",
        "type": "integer"
      },
      {
        "name": "home_location-location_type",
        "type": "string"
      },
      {
        "name": "jump_clones",
        "type": "array",
        "sub_headers": [
          "implants",
          "jump_clone_id",
          "location_id",
          "location_type",
          "name"
        ]
      },
      {
        "name": "last_clone_jump_date",
        "type": "string"
      },
      {
        "name": "last_station_change_date",
        "type": "string"
      }
    ],
    "path": "/v3/characters/{character_id}/clones/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_mail_labels": {
    "description": "Return a list of the users mail labels, unread counts for each label and a total unread count.",
    "summary": "Get mail labels and unread counts",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "labels",
        "type": "array",
        "sub_headers": [
          "color",
          "label_id",
          "name",
          "unread_count"
        ]
      },
      {
        "name": "total_unread_count",
        "type": "integer"
      }
    ],
    "path": "/v3/characters/{character_id}/mail/labels/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_planets_planet": {
    "description": "Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.",
    "summary": "Get colony layout",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "links",
        "type": "array",
        "sub_headers": [
          "destination_pin_id",
          "link_level",
          "source_pin_id"
        ]
      },
      {
        "name": "pins",
        "type": "array",
        "sub_headers": [
          "contents",
          "expiry_time",
          "extractor_details",
          "factory_details",
          "install_time",
          "last_cycle_start",
          "latitude",
          "longitude",
          "pin_id",
          "schematic_id",
          "type_id"
        ]
      },
      {
        "name": "routes",
        "type": "array",
        "sub_headers": [
          "content_type_id",
          "destination_pin_id",
          "quantity",
          "route_id",
          "source_pin_id",
          "waypoints"
        ]
      }
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
    ]
  },
  "characters_character_search": {
    "description": "Search for entities that match a given sub",
    "summary": "Search on a string",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "agent",
        "type": "array"
      },
      {
        "name": "alliance",
        "type": "array"
      },
      {
        "name": "character",
        "type": "array"
      },
      {
        "name": "constellation",
        "type": "array"
      },
      {
        "name": "corporation",
        "type": "array"
      },
      {
        "name": "faction",
        "type": "array"
      },
      {
        "name": "inventory_type",
        "type": "array"
      },
      {
        "name": "region",
        "type": "array"
      },
      {
        "name": "solar_system",
        "type": "array"
      },
      {
        "name": "station",
        "type": "array"
      },
      {
        "name": "structure",
        "type": "array"
      }
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
        "description": "Language to use in the response, takes precedence over Accept-Language",
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
    ]
  },
  "corporations_corporation_assets": {
    "description": "Return a list of the corporation assets",
    "summary": "Get corporation assets",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "is_blueprint_copy",
        "type": "boolean"
      },
      {
        "name": "is_singleton",
        "type": "boolean"
      },
      {
        "name": "item_id",
        "type": "integer"
      },
      {
        "name": "location_flag",
        "type": "string"
      },
      {
        "name": "location_id",
        "type": "integer"
      },
      {
        "name": "location_type",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "integer"
      },
      {
        "name": "type_id",
        "type": "integer"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/assets/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation_members": {
    "description": "Return the current member list of a corporation, the token's character need to be a member of the corporation.",
    "summary": "Get corporation members",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "member_ids",
        "type": "integer"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/members/",
    "authed": true,
    "response_type": "array",
    "item_type": "integer",
    "parameters": [

    ]
  },
  "corporations_corporation_wallets_division_journal": {
    "description": "Retrieve the given corporation's wallet journal for the given division going 30 days back",
    "summary": "Get corporation wallet journal",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "amount",
        "type": "number"
      },
      {
        "name": "balance",
        "type": "number"
      },
      {
        "name": "context_id",
        "type": "integer"
      },
      {
        "name": "context_id_type",
        "type": "string"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "first_party_id",
        "type": "integer"
      },
      {
        "name": "id",
        "type": "integer"
      },
      {
        "name": "reason",
        "type": "string"
      },
      {
        "name": "ref_type",
        "type": "string"
      },
      {
        "name": "second_party_id",
        "type": "integer"
      },
      {
        "name": "tax",
        "type": "number"
      },
      {
        "name": "tax_receiver_id",
        "type": "integer"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/wallets/{division}/journal/",
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
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "universe_systems_system": {
    "description": "Get information on a solar system. NOTE: This route does not work with abyssal systems.",
    "summary": "Get solar system information",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "constellation_id",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "planets",
        "type": "array",
        "sub_headers": [
          "asteroid_belts",
          "moons",
          "planet_id"
        ]
      },
      {
        "name": "position-x",
        "type": "number"
      },
      {
        "name": "position-y",
        "type": "number"
      },
      {
        "name": "position-z",
        "type": "number"
      },
      {
        "name": "security_class",
        "type": "string"
      },
      {
        "name": "security_status",
        "type": "number"
      },
      {
        "name": "star_id",
        "type": "integer"
      },
      {
        "name": "stargates",
        "type": "array"
      },
      {
        "name": "stations",
        "type": "array"
      },
      {
        "name": "system_id",
        "type": "integer"
      }
    ],
    "path": "/v3/universe/systems/{system_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "system_id",
        "description": "system_id integer",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "universe_types_type": {
    "description": "Get information on a type",
    "summary": "Get type information",
    "request": "get",
    "version": 3,
    "headers": [
      {
        "name": "capacity",
        "type": "number"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "dogma_attributes",
        "type": "array",
        "sub_headers": [
          "attribute_id",
          "value"
        ]
      },
      {
        "name": "dogma_effects",
        "type": "array",
        "sub_headers": [
          "effect_id",
          "is_default"
        ]
      },
      {
        "name": "graphic_id",
        "type": "integer"
      },
      {
        "name": "group_id",
        "type": "integer"
      },
      {
        "name": "icon_id",
        "type": "integer"
      },
      {
        "name": "market_group_id",
        "type": "integer"
      },
      {
        "name": "mass",
        "type": "number"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "packaged_volume",
        "type": "number"
      },
      {
        "name": "portion_size",
        "type": "integer"
      },
      {
        "name": "published",
        "type": "boolean"
      },
      {
        "name": "radius",
        "type": "number"
      },
      {
        "name": "type_id",
        "type": "integer"
      },
      {
        "name": "volume",
        "type": "number"
      }
    ],
    "path": "/v3/universe/types/{type_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "language",
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "required": null,
        "type": "string",
        "in": "query"
      },
      {
        "name": "type_id",
        "description": "An Eve item type ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "characters_character": {
    "description": "Public information about a character",
    "summary": "Get character's public information",
    "request": "get",
    "version": 4,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "ancestry_id",
        "type": "integer"
      },
      {
        "name": "birthday",
        "type": "string"
      },
      {
        "name": "bloodline_id",
        "type": "integer"
      },
      {
        "name": "corporation_id",
        "type": "integer"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "gender",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "race_id",
        "type": "integer"
      },
      {
        "name": "security_status",
        "type": "number"
      }
    ],
    "path": "/v4/characters/{character_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "character_id",
        "description": "An EVE character ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  },
  "characters_character_skills": {
    "description": "List all trained skills for the given character",
    "summary": "Get character skills",
    "request": "get",
    "version": 4,
    "headers": [
      {
        "name": "skills",
        "type": "array",
        "sub_headers": [
          "active_skill_level",
          "skill_id",
          "skillpoints_in_skill",
          "trained_skill_level"
        ]
      },
      {
        "name": "total_sp",
        "type": "integer"
      },
      {
        "name": "unallocated_sp",
        "type": "integer"
      }
    ],
    "path": "/v4/characters/{character_id}/skills/",
    "authed": true,
    "response_type": "object",
    "item_type": "object",
    "parameters": [

    ]
  },
  "characters_character_wallet_journal": {
    "description": "Retrieve the given character's wallet journal going 30 days back",
    "summary": "Get character wallet journal",
    "request": "get",
    "version": 4,
    "headers": [
      {
        "name": "amount",
        "type": "number"
      },
      {
        "name": "balance",
        "type": "number"
      },
      {
        "name": "context_id",
        "type": "integer"
      },
      {
        "name": "context_id_type",
        "type": "string"
      },
      {
        "name": "date",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "first_party_id",
        "type": "integer"
      },
      {
        "name": "id",
        "type": "integer"
      },
      {
        "name": "reason",
        "type": "string"
      },
      {
        "name": "ref_type",
        "type": "string"
      },
      {
        "name": "second_party_id",
        "type": "integer"
      },
      {
        "name": "tax",
        "type": "number"
      },
      {
        "name": "tax_receiver_id",
        "type": "integer"
      }
    ],
    "path": "/v4/characters/{character_id}/wallet/journal/",
    "authed": true,
    "response_type": "array",
    "item_type": "object",
    "parameters": [
      {
        "name": "page",
        "description": "Which page of results to return",
        "required": null,
        "type": "integer",
        "in": "query"
      }
    ]
  },
  "corporations_corporation": {
    "description": "Public information about a corporation",
    "summary": "Get corporation information",
    "request": "get",
    "version": 4,
    "headers": [
      {
        "name": "alliance_id",
        "type": "integer"
      },
      {
        "name": "ceo_id",
        "type": "integer"
      },
      {
        "name": "creator_id",
        "type": "integer"
      },
      {
        "name": "date_founded",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "faction_id",
        "type": "integer"
      },
      {
        "name": "home_station_id",
        "type": "integer"
      },
      {
        "name": "member_count",
        "type": "integer"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "shares",
        "type": "integer"
      },
      {
        "name": "tax_rate",
        "type": "number"
      },
      {
        "name": "ticker",
        "type": "string"
      },
      {
        "name": "url",
        "type": "string"
      }
    ],
    "path": "/v4/corporations/{corporation_id}/",
    "authed": false,
    "response_type": "object",
    "item_type": "object",
    "parameters": [
      {
        "name": "corporation_id",
        "description": "An EVE corporation ID",
        "required": true,
        "type": "integer",
        "in": "path"
      }
    ]
  }
};
