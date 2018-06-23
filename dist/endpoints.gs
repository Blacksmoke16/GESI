SCOPES = [
  "esi-alliances.read_contacts.v1",
  "esi-assets.read_assets.v1",
  "esi-assets.read_corporation_assets.v1",
  "esi-bookmarks.read_character_bookmarks.v1",
  "esi-bookmarks.read_corporation_bookmarks.v1",
  "esi-calendar.read_calendar_events.v1",
  "esi-characters.read_agents_research.v1",
  "esi-characters.read_blueprints.v1",
  "esi-characters.read_contacts.v1",
  "esi-characters.read_corporation_roles.v1",
  "esi-characters.read_fatigue.v1",
  "esi-characters.read_fw_stats.v1",
  "esi-characters.read_loyalty.v1",
  "esi-characters.read_medals.v1",
  "esi-characters.read_notifications.v1",
  "esi-characters.read_opportunities.v1",
  "esi-characters.read_standings.v1",
  "esi-characters.read_titles.v1",
  "esi-characterstats.read.v1",
  "esi-clones.read_clones.v1",
  "esi-clones.read_implants.v1",
  "esi-contracts.read_character_contracts.v1",
  "esi-contracts.read_corporation_contracts.v1",
  "esi-corporations.read_blueprints.v1",
  "esi-corporations.read_contacts.v1",
  "esi-corporations.read_container_logs.v1",
  "esi-corporations.read_corporation_membership.v1",
  "esi-corporations.read_divisions.v1",
  "esi-corporations.read_facilities.v1",
  "esi-corporations.read_fw_stats.v1",
  "esi-corporations.read_medals.v1",
  "esi-corporations.read_outposts.v1",
  "esi-corporations.read_standings.v1",
  "esi-corporations.read_starbases.v1",
  "esi-corporations.read_structures.v1",
  "esi-corporations.read_titles.v1",
  "esi-corporations.track_members.v1",
  "esi-fittings.read_fittings.v1",
  "esi-fleets.read_fleet.v1",
  "esi-industry.read_character_jobs.v1",
  "esi-industry.read_character_mining.v1",
  "esi-industry.read_corporation_jobs.v1",
  "esi-industry.read_corporation_mining.v1",
  "esi-killmails.read_corporation_killmails.v1",
  "esi-killmails.read_killmails.v1",
  "esi-location.read_location.v1",
  "esi-location.read_online.v1",
  "esi-location.read_ship_type.v1",
  "esi-mail.read_mail.v1",
  "esi-markets.read_character_orders.v1",
  "esi-markets.read_corporation_orders.v1",
  "esi-markets.structure_markets.v1",
  "esi-planets.manage_planets.v1",
  "esi-planets.read_customs_offices.v1",
  "esi-search.search_structures.v1",
  "esi-skills.read_skillqueue.v1",
  "esi-skills.read_skills.v1",
  "esi-universe.read_structures.v1",
  "esi-wallet.read_character_wallet.v1",
  "esi-wallet.read_corporation_wallets.v1"
];

ENDPOINTS = {
  "alliances": {
    "description": "List all active player alliances",
    "headers": [
      {
        "name": "alliance_ids"
      }
    ],
    "path": "/v1/alliances/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "List of Alliance IDs"
  },
  "alliances_alliance_contacts_labels": {
    "description": "Return custom labels for an alliance's contacts",
    "headers": [
      {
        "name": "label_id"
      },
      {
        "name": "label_name"
      }
    ],
    "path": "/v1/alliances/{alliance_id}/contacts/labels/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-alliances.read_contacts.v1",
    "summary": "A list of alliance contact labels"
  },
  "alliances_alliance_corporations": {
    "description": "List all current member corporations of an alliance",
    "headers": [
      {
        "name": "corporation_ids"
      }
    ],
    "path": "/v1/alliances/{alliance_id}/corporations/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "List of corporation IDs"
  },
  "alliances_alliance_icons": {
    "description": "Get the icon urls for a alliance",
    "headers": [
      {
        "name": "px128x128"
      },
      {
        "name": "px64x64"
      }
    ],
    "path": "/v1/alliances/{alliance_id}/icons/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Icon URLs for the given alliance id and server"
  },
  "characters_character_agents_research": {
    "description": "Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime ",
    "headers": [
      {
        "name": "agent_id"
      },
      {
        "name": "skill_type_id"
      },
      {
        "name": "started_at"
      },
      {
        "name": "points_per_day"
      },
      {
        "name": "remainder_points"
      }
    ],
    "path": "/v1/characters/{character_id}/agents_research/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_agents_research.v1",
    "summary": "A list of agents research information"
  },
  "characters_character_attributes": {
    "description": "Return attributes of a character",
    "headers": [
      {
        "name": "charisma"
      },
      {
        "name": "intelligence"
      },
      {
        "name": "memory"
      },
      {
        "name": "perception"
      },
      {
        "name": "willpower"
      },
      {
        "name": "accrued_remap_cooldown_date"
      },
      {
        "name": "bonus_remaps"
      },
      {
        "name": "last_remap_date"
      }
    ],
    "path": "/v1/characters/{character_id}/attributes/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-skills.read_skills.v1",
    "summary": "Attributes of a character"
  },
  "characters_character_calendar": {
    "description": "Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.",
    "headers": [
      {
        "name": "event_date"
      },
      {
        "name": "event_id"
      },
      {
        "name": "event_response"
      },
      {
        "name": "importance"
      },
      {
        "name": "title"
      }
    ],
    "path": "/v1/characters/{character_id}/calendar/",
    "parameters": [
      {
        "description": "The event ID to retrieve events from",
        "in": "query",
        "name": "from_event",
        "type": "integer",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "A collection of event summaries"
  },
  "characters_character_calendar_event_attendees": {
    "description": "Get all invited attendees for a given event",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "event_response"
      }
    ],
    "path": "/v1/characters/{character_id}/calendar/{event_id}/attendees/",
    "parameters": [
      {
        "description": "The id of the event requested",
        "in": "path",
        "name": "event_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "List of attendees"
  },
  "characters_character_contacts_labels": {
    "description": "Return custom labels for a character's contacts",
    "headers": [
      {
        "name": "label_id"
      },
      {
        "name": "label_name"
      }
    ],
    "path": "/v1/characters/{character_id}/contacts/labels/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_contacts.v1",
    "summary": "A list of contact labels"
  },
  "characters_character_contracts": {
    "description": "Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "headers": [
      {
        "name": "contract_id"
      },
      {
        "name": "issuer_id"
      },
      {
        "name": "issuer_corporation_id"
      },
      {
        "name": "assignee_id"
      },
      {
        "name": "acceptor_id"
      },
      {
        "name": "type"
      },
      {
        "name": "status"
      },
      {
        "name": "for_corporation"
      },
      {
        "name": "availability"
      },
      {
        "name": "date_issued"
      },
      {
        "name": "date_expired"
      },
      {
        "name": "title"
      },
      {
        "name": "start_location_id"
      },
      {
        "name": "reward"
      },
      {
        "name": "price"
      },
      {
        "name": "end_location_id"
      },
      {
        "name": "days_to_complete"
      },
      {
        "name": "date_completed"
      },
      {
        "name": "date_accepted"
      },
      {
        "name": "collateral"
      },
      {
        "name": "buyout"
      },
      {
        "name": "volume"
      }
    ],
    "path": "/v1/characters/{character_id}/contracts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "A list of contracts"
  },
  "characters_character_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "headers": [
      {
        "name": "bid_id"
      },
      {
        "name": "bidder_id"
      },
      {
        "name": "date_bid"
      },
      {
        "name": "amount"
      }
    ],
    "path": "/v1/characters/{character_id}/contracts/{contract_id}/bids/",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "A list of bids"
  },
  "characters_character_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "headers": [
      {
        "name": "record_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      },
      {
        "name": "is_singleton"
      },
      {
        "name": "is_included"
      },
      {
        "name": "raw_quantity"
      }
    ],
    "path": "/v1/characters/{character_id}/contracts/{contract_id}/items/",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "A list of items in this contract"
  },
  "characters_character_corporationhistory": {
    "description": "Get a list of all the corporations a character has been a member of",
    "headers": [
      {
        "name": "start_date"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "record_id"
      },
      {
        "name": "is_deleted"
      }
    ],
    "path": "/v1/characters/{character_id}/corporationhistory/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Corporation history for the given character"
  },
  "characters_character_fatigue": {
    "description": "Return a character's jump activation and fatigue information",
    "headers": [
      {
        "name": "jump_fatigue_expire_date"
      },
      {
        "name": "last_jump_date"
      },
      {
        "name": "last_update_date"
      }
    ],
    "path": "/v1/characters/{character_id}/fatigue/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_fatigue.v1",
    "summary": "Jump activation and fatigue information"
  },
  "characters_character_fittings": {
    "description": "Return fittings of a character",
    "headers": [
      {
        "name": "fitting_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "ship_type_id"
      },
      {
        "name": "items",
        "sub_headers": [
          "flag",
          "quantity",
          "type_id"
        ]
      }
    ],
    "path": "/v1/characters/{character_id}/fittings/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-fittings.read_fittings.v1",
    "summary": "A list of fittings"
  },
  "characters_character_fleet": {
    "description": "Return the fleet ID the character is in, if any.",
    "headers": [
      {
        "name": "fleet_id"
      },
      {
        "name": "wing_id"
      },
      {
        "name": "squad_id"
      },
      {
        "name": "role"
      }
    ],
    "path": "/v1/characters/{character_id}/fleet/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Details about the character's fleet"
  },
  "characters_character_fw_stats": {
    "description": "Statistical overview of a character involved in faction warfare",
    "headers": [
      {
        "name": "kills",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      },
      {
        "name": "current_rank"
      },
      {
        "name": "enlisted_on"
      },
      {
        "name": "faction_id"
      },
      {
        "name": "highest_rank"
      }
    ],
    "path": "/v1/characters/{character_id}/fw/stats/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_fw_stats.v1",
    "summary": "Faction warfare statistics for a given character"
  },
  "characters_character_implants": {
    "description": "Return implants on the active clone of a character",
    "headers": [
      {
        "name": "implant_ids"
      }
    ],
    "path": "/v1/characters/{character_id}/implants/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-clones.read_implants.v1",
    "summary": "A list of implant type ids"
  },
  "characters_character_industry_jobs": {
    "description": "List industry jobs placed by a character",
    "headers": [
      {
        "name": "job_id"
      },
      {
        "name": "installer_id"
      },
      {
        "name": "facility_id"
      },
      {
        "name": "station_id"
      },
      {
        "name": "activity_id"
      },
      {
        "name": "blueprint_id"
      },
      {
        "name": "blueprint_type_id"
      },
      {
        "name": "blueprint_location_id"
      },
      {
        "name": "output_location_id"
      },
      {
        "name": "runs"
      },
      {
        "name": "status"
      },
      {
        "name": "duration"
      },
      {
        "name": "start_date"
      },
      {
        "name": "end_date"
      },
      {
        "name": "product_type_id"
      },
      {
        "name": "probability"
      },
      {
        "name": "pause_date"
      },
      {
        "name": "completed_date"
      },
      {
        "name": "licensed_runs"
      },
      {
        "name": "completed_character_id"
      },
      {
        "name": "cost"
      },
      {
        "name": "successful_runs"
      }
    ],
    "path": "/v1/characters/{character_id}/industry/jobs/",
    "parameters": [
      {
        "description": "Whether retrieve completed character industry jobs as well",
        "in": "query",
        "name": "include_completed",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_character_jobs.v1",
    "summary": "Industry jobs placed by a character"
  },
  "characters_character_killmails_recent": {
    "description": "Return a list of a character's kills and losses going back 90 days",
    "headers": [
      {
        "name": "killmail_id"
      },
      {
        "name": "killmail_hash"
      }
    ],
    "path": "/v1/characters/{character_id}/killmails/recent/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-killmails.read_killmails.v1",
    "summary": "A list of killmail IDs and hashes"
  },
  "characters_character_location": {
    "description": "Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.",
    "headers": [
      {
        "name": "solar_system_id"
      },
      {
        "name": "station_id"
      },
      {
        "name": "structure_id"
      }
    ],
    "path": "/v1/characters/{character_id}/location/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-location.read_location.v1",
    "summary": "Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable."
  },
  "characters_character_loyalty_points": {
    "description": "Return a list of loyalty points for all corporations the character has worked for",
    "headers": [
      {
        "name": "corporation_id"
      },
      {
        "name": "loyalty_points"
      }
    ],
    "path": "/v1/characters/{character_id}/loyalty/points/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_loyalty.v1",
    "summary": "A list of loyalty points"
  },
  "characters_character_mail": {
    "description": "Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.",
    "headers": [
      {
        "name": "from"
      },
      {
        "name": "is_read"
      },
      {
        "name": "labels",
        "sub_headers": [
          "mail_labels"
        ]
      },
      {
        "name": "mail_id"
      },
      {
        "name": "recipients",
        "sub_headers": [
          "recipient_id",
          "recipient_type"
        ]
      },
      {
        "name": "subject"
      },
      {
        "name": "timestamp"
      }
    ],
    "path": "/v1/characters/{character_id}/mail/",
    "parameters": [
      {
        "description": "Fetch only mails that match one or more of the given labels",
        "in": "query",
        "name": "labels",
        "type": "array",
        "required": false
      },
      {
        "description": "List only mail with an ID lower than the given ID, if present",
        "in": "query",
        "name": "last_mail_id",
        "type": "integer",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-mail.read_mail.v1",
    "summary": "The requested mail"
  },
  "characters_character_mail_lists": {
    "description": "Return all mailing lists that the character is subscribed to",
    "headers": [
      {
        "name": "mailing_list_id"
      },
      {
        "name": "name"
      }
    ],
    "path": "/v1/characters/{character_id}/mail/lists/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-mail.read_mail.v1",
    "summary": "Mailing lists"
  },
  "characters_character_mail_mail": {
    "description": "Return the contents of an EVE mail",
    "headers": [
      {
        "name": "body"
      },
      {
        "name": "from"
      },
      {
        "name": "labels",
        "sub_headers": [
          "id_labels"
        ]
      },
      {
        "name": "read"
      },
      {
        "name": "recipients",
        "sub_headers": [
          "recipient_id",
          "recipient_type"
        ]
      },
      {
        "name": "subject"
      },
      {
        "name": "timestamp"
      }
    ],
    "path": "/v1/characters/{character_id}/mail/{mail_id}/",
    "parameters": [
      {
        "description": "An EVE mail ID",
        "in": "path",
        "name": "mail_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-mail.read_mail.v1",
    "summary": "Contents of a mail"
  },
  "characters_character_medals": {
    "description": "Return a list of medals the character has",
    "headers": [
      {
        "name": "medal_id"
      },
      {
        "name": "title"
      },
      {
        "name": "description"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "issuer_id"
      },
      {
        "name": "date"
      },
      {
        "name": "reason"
      },
      {
        "name": "status"
      },
      {
        "name": "graphics",
        "sub_headers": [
          "color",
          "graphic",
          "layer",
          "part"
        ]
      }
    ],
    "path": "/v1/characters/{character_id}/medals/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_medals.v1",
    "summary": "A list of medals"
  },
  "characters_character_mining": {
    "description": "Paginated record of all mining done by a character for the past 30 days",
    "headers": [
      {
        "name": "date"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      }
    ],
    "path": "/v1/characters/{character_id}/mining/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_character_mining.v1",
    "summary": "Mining ledger of a character"
  },
  "characters_character_notifications_contacts": {
    "description": "Return notifications about having been added to someone's contact list",
    "headers": [
      {
        "name": "notification_id"
      },
      {
        "name": "send_date"
      },
      {
        "name": "standing_level"
      },
      {
        "name": "message"
      },
      {
        "name": "sender_character_id"
      }
    ],
    "path": "/v1/characters/{character_id}/notifications/contacts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_notifications.v1",
    "summary": "A list of contact notifications"
  },
  "characters_character_opportunities": {
    "description": "Return a list of tasks finished by a character",
    "headers": [
      {
        "name": "task_id"
      },
      {
        "name": "completed_at"
      }
    ],
    "path": "/v1/characters/{character_id}/opportunities/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_opportunities.v1",
    "summary": "A list of opportunities task ids"
  },
  "characters_character_orders_history": {
    "description": "List cancelled and expired market orders placed by a character up to 90 days in the past.",
    "headers": [
      {
        "name": "is_corporation"
      },
      {
        "name": "duration"
      },
      {
        "name": "state"
      },
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "region_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "range"
      },
      {
        "name": "price"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "issued"
      },
      {
        "name": "escrow"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "min_volume"
      }
    ],
    "path": "/v1/characters/{character_id}/orders/history/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-markets.read_character_orders.v1",
    "summary": "Expired and cancelled market orders placed by a character"
  },
  "characters_character_planets": {
    "description": "Returns a list of all planetary colonies owned by a character.",
    "headers": [
      {
        "name": "solar_system_id"
      },
      {
        "name": "planet_id"
      },
      {
        "name": "planet_type"
      },
      {
        "name": "owner_id"
      },
      {
        "name": "last_update"
      },
      {
        "name": "upgrade_level"
      },
      {
        "name": "num_pins"
      }
    ],
    "path": "/v1/characters/{character_id}/planets/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-planets.manage_planets.v1",
    "summary": "List of colonies"
  },
  "characters_character_ship": {
    "description": "Get the current ship type, name and id",
    "headers": [
      {
        "name": "ship_type_id"
      },
      {
        "name": "ship_item_id"
      },
      {
        "name": "ship_name"
      }
    ],
    "path": "/v1/characters/{character_id}/ship/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-location.read_ship_type.v1",
    "summary": "Get the current ship type, name and id"
  },
  "characters_character_standings": {
    "description": "Return character standings from agents, NPC corporations, and factions",
    "headers": [
      {
        "name": "from_id"
      },
      {
        "name": "from_type"
      },
      {
        "name": "standing"
      }
    ],
    "path": "/v1/characters/{character_id}/standings/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_standings.v1",
    "summary": "A list of standings"
  },
  "characters_character_titles": {
    "description": "Returns a character's titles",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "title_id"
      }
    ],
    "path": "/v1/characters/{character_id}/titles/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_titles.v1",
    "summary": "A list of titles"
  },
  "characters_character_wallet": {
    "description": "Returns a character's wallet balance",
    "headers": [],
    "path": "/v1/characters/{character_id}/wallet/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Wallet balance"
  },
  "characters_character_wallet_transactions": {
    "description": "Get wallet transactions of a character",
    "headers": [
      {
        "name": "transaction_id"
      },
      {
        "name": "date"
      },
      {
        "name": "location_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "unit_price"
      },
      {
        "name": "quantity"
      },
      {
        "name": "client_id"
      },
      {
        "name": "is_buy"
      },
      {
        "name": "is_personal"
      },
      {
        "name": "journal_ref_id"
      }
    ],
    "path": "/v1/characters/{character_id}/wallet/transactions/",
    "parameters": [
      {
        "description": "Only show transactions happened before the one referenced by this id",
        "in": "query",
        "name": "from_id",
        "type": "integer",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Wallet transactions"
  },
  "corporation_corporation_mining_extractions": {
    "description": "Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.",
    "headers": [
      {
        "name": "structure_id"
      },
      {
        "name": "moon_id"
      },
      {
        "name": "extraction_start_time"
      },
      {
        "name": "chunk_arrival_time"
      },
      {
        "name": "natural_decay_time"
      }
    ],
    "path": "/v1/corporation/{corporation_id}/mining/extractions/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "A list of chunk timers"
  },
  "corporation_corporation_mining_observers": {
    "description": "Paginated list of all entities capable of observing and recording mining for a corporation",
    "headers": [
      {
        "name": "last_updated"
      },
      {
        "name": "observer_id"
      },
      {
        "name": "observer_type"
      }
    ],
    "path": "/v1/corporation/{corporation_id}/mining/observers/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "Observer list of a corporation"
  },
  "corporation_corporation_mining_observers_observer": {
    "description": "Paginated record of all mining seen by an observer",
    "headers": [
      {
        "name": "last_updated"
      },
      {
        "name": "character_id"
      },
      {
        "name": "recorded_corporation_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      }
    ],
    "path": "/v1/corporation/{corporation_id}/mining/observers/{observer_id}/",
    "parameters": [
      {
        "description": "A mining observer id",
        "in": "path",
        "name": "observer_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "Mining ledger of an observer"
  },
  "corporations_npccorps": {
    "description": "Get a list of npc corporations",
    "headers": [
      {
        "name": "npccorp_ids"
      }
    ],
    "path": "/v1/corporations/npccorps/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of npc corporation ids"
  },
  "corporations_corporation_bookmarks": {
    "description": "A list of your corporation's bookmarks",
    "headers": [
      {
        "name": "bookmark_id"
      },
      {
        "name": "creator_id"
      },
      {
        "name": "created"
      },
      {
        "name": "label"
      },
      {
        "name": "notes"
      },
      {
        "name": "location_id"
      },
      {
        "name": "coordinates",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "folder_id"
      },
      {
        "name": "item",
        "sub_headers": [
          "item_id",
          "type_id"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-bookmarks.read_corporation_bookmarks.v1",
    "summary": "List of corporation owned bookmarks"
  },
  "corporations_corporation_bookmarks_folders": {
    "description": "A list of your corporation's bookmark folders",
    "headers": [
      {
        "name": "folder_id"
      },
      {
        "name": "name"
      },
      {
        "name": "creator_id"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/bookmarks/folders/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-bookmarks.read_corporation_bookmarks.v1",
    "summary": "List of corporation owned bookmark folders"
  },
  "corporations_corporation_contacts_labels": {
    "description": "Return custom labels for a corporation's contacts",
    "headers": [
      {
        "name": "label_id"
      },
      {
        "name": "label_name"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contacts/labels/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_contacts.v1",
    "summary": "A list of corporation contact labels"
  },
  "corporations_corporation_contracts": {
    "description": "Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "headers": [
      {
        "name": "contract_id"
      },
      {
        "name": "issuer_id"
      },
      {
        "name": "issuer_corporation_id"
      },
      {
        "name": "assignee_id"
      },
      {
        "name": "acceptor_id"
      },
      {
        "name": "type"
      },
      {
        "name": "status"
      },
      {
        "name": "for_corporation"
      },
      {
        "name": "availability"
      },
      {
        "name": "date_issued"
      },
      {
        "name": "date_expired"
      },
      {
        "name": "title"
      },
      {
        "name": "start_location_id"
      },
      {
        "name": "reward"
      },
      {
        "name": "price"
      },
      {
        "name": "end_location_id"
      },
      {
        "name": "days_to_complete"
      },
      {
        "name": "date_completed"
      },
      {
        "name": "date_accepted"
      },
      {
        "name": "collateral"
      },
      {
        "name": "buyout"
      },
      {
        "name": "volume"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "A list of contracts"
  },
  "corporations_corporation_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "headers": [
      {
        "name": "bid_id"
      },
      {
        "name": "bidder_id"
      },
      {
        "name": "date_bid"
      },
      {
        "name": "amount"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "A list of bids"
  },
  "corporations_corporation_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "headers": [
      {
        "name": "record_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      },
      {
        "name": "is_singleton"
      },
      {
        "name": "is_included"
      },
      {
        "name": "raw_quantity"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/contracts/{contract_id}/items/",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "A list of items in this contract"
  },
  "corporations_corporation_customs_offices": {
    "description": "List customs offices owned by a corporation",
    "headers": [
      {
        "name": "office_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "reinforce_exit_start"
      },
      {
        "name": "reinforce_exit_end"
      },
      {
        "name": "allow_alliance_access"
      },
      {
        "name": "allow_access_with_standings"
      },
      {
        "name": "alliance_tax_rate"
      },
      {
        "name": "bad_standing_tax_rate"
      },
      {
        "name": "corporation_tax_rate"
      },
      {
        "name": "excellent_standing_tax_rate"
      },
      {
        "name": "good_standing_tax_rate"
      },
      {
        "name": "neutral_standing_tax_rate"
      },
      {
        "name": "standing_level"
      },
      {
        "name": "terrible_standing_tax_rate"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/customs_offices/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-planets.read_customs_offices.v1",
    "summary": "A list of customs offices and their settings"
  },
  "corporations_corporation_divisions": {
    "description": "Return corporation hangar and wallet division names, only show if a division is not using the default name",
    "headers": [
      {
        "name": "hangar",
        "sub_headers": [
          "division",
          "name"
        ]
      },
      {
        "name": "wallet",
        "sub_headers": [
          "division",
          "name"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/divisions/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_divisions.v1",
    "summary": "List of corporation division names"
  },
  "corporations_corporation_facilities": {
    "description": "Return a corporation's facilities",
    "headers": [
      {
        "name": "facility_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "system_id"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/facilities/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_facilities.v1",
    "summary": "List of corporation facilities"
  },
  "corporations_corporation_fw_stats": {
    "description": "Statistics about a corporation involved in faction warfare",
    "headers": [
      {
        "name": "kills",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      },
      {
        "name": "enlisted_on"
      },
      {
        "name": "faction_id"
      },
      {
        "name": "pilots"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/fw/stats/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_fw_stats.v1",
    "summary": "Faction warfare statistics for a given corporation"
  },
  "corporations_corporation_icons": {
    "description": "Get the icon urls for a corporation",
    "headers": [
      {
        "name": "px128x128"
      },
      {
        "name": "px256x256"
      },
      {
        "name": "px64x64"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/icons/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Urls for icons for the given corporation id and server"
  },
  "corporations_corporation_industry_jobs": {
    "description": "List industry jobs run by a corporation",
    "headers": [
      {
        "name": "job_id"
      },
      {
        "name": "installer_id"
      },
      {
        "name": "facility_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "activity_id"
      },
      {
        "name": "blueprint_id"
      },
      {
        "name": "blueprint_type_id"
      },
      {
        "name": "blueprint_location_id"
      },
      {
        "name": "output_location_id"
      },
      {
        "name": "runs"
      },
      {
        "name": "status"
      },
      {
        "name": "duration"
      },
      {
        "name": "start_date"
      },
      {
        "name": "end_date"
      },
      {
        "name": "product_type_id"
      },
      {
        "name": "probability"
      },
      {
        "name": "pause_date"
      },
      {
        "name": "completed_date"
      },
      {
        "name": "licensed_runs"
      },
      {
        "name": "completed_character_id"
      },
      {
        "name": "cost"
      },
      {
        "name": "successful_runs"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/industry/jobs/",
    "parameters": [
      {
        "description": "Whether retrieve completed industry jobs as well",
        "in": "query",
        "name": "include_completed",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-industry.read_corporation_jobs.v1",
    "summary": "A list of corporation industry jobs"
  },
  "corporations_corporation_killmails_recent": {
    "description": "Get a list of a corporation's kills and losses going back 90 days",
    "headers": [
      {
        "name": "killmail_id"
      },
      {
        "name": "killmail_hash"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/killmails/recent/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-killmails.read_corporation_killmails.v1",
    "summary": "A list of killmail IDs and hashes"
  },
  "corporations_corporation_medals": {
    "description": "Returns a corporation's medals",
    "headers": [
      {
        "name": "medal_id"
      },
      {
        "name": "title"
      },
      {
        "name": "description"
      },
      {
        "name": "creator_id"
      },
      {
        "name": "created_at"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/medals/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_medals.v1",
    "summary": "A list of medals"
  },
  "corporations_corporation_medals_issued": {
    "description": "Returns medals issued by a corporation",
    "headers": [
      {
        "name": "medal_id"
      },
      {
        "name": "character_id"
      },
      {
        "name": "reason"
      },
      {
        "name": "status"
      },
      {
        "name": "issuer_id"
      },
      {
        "name": "issued_at"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/medals/issued/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_medals.v1",
    "summary": "A list of issued medals"
  },
  "corporations_corporation_members_limit": {
    "description": "Return a corporation's member limit, not including CEO himself",
    "headers": [],
    "path": "/v1/corporations/{corporation_id}/members/limit/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.track_members.v1",
    "summary": "The corporation's member limit"
  },
  "corporations_corporation_members_titles": {
    "description": "Returns a corporation's members' titles",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "titles",
        "sub_headers": [
          "titles_titles"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/members/titles/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_titles.v1",
    "summary": "A list of members and theirs titles"
  },
  "corporations_corporation_membertracking": {
    "description": "Returns additional information about a corporation's members which helps tracking their activities",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "base_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "logoff_date"
      },
      {
        "name": "logon_date"
      },
      {
        "name": "ship_type_id"
      },
      {
        "name": "start_date"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/membertracking/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.track_members.v1",
    "summary": "List of member character IDs"
  },
  "corporations_corporation_orders_history": {
    "description": "List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.",
    "headers": [
      {
        "name": "wallet_division"
      },
      {
        "name": "duration"
      },
      {
        "name": "state"
      },
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "region_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "range"
      },
      {
        "name": "price"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "issued"
      },
      {
        "name": "escrow"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "min_volume"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/orders/history/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-markets.read_corporation_orders.v1",
    "summary": "Expired and cancelled market orders placed on behalf of a corporation"
  },
  "corporations_corporation_outposts": {
    "description": "Get a list of corporation outpost IDs Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "headers": [
      {
        "name": "outpost_ids"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/outposts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_outposts.v1",
    "summary": "List of corporation outpost IDs"
  },
  "corporations_corporation_outposts_outpost": {
    "description": "Get details about a given outpost. Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev",
    "headers": [
      {
        "name": "owner_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "docking_cost_per_ship_volume"
      },
      {
        "name": "office_rental_cost"
      },
      {
        "name": "type_id"
      },
      {
        "name": "reprocessing_efficiency"
      },
      {
        "name": "reprocessing_station_take"
      },
      {
        "name": "standing_owner_id"
      },
      {
        "name": "coordinates",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "services",
        "sub_headers": [
          "discount_per_good_standing",
          "minimum_standing",
          "service_name",
          "surcharge_per_bad_standing"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/outposts/{outpost_id}/",
    "parameters": [
      {
        "description": "A station (outpost) ID",
        "in": "path",
        "name": "outpost_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_outposts.v1",
    "summary": "Details about the given outpost"
  },
  "corporations_corporation_roles": {
    "description": "Return the roles of all members if the character has the personnel manager role or any grantable role.",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "grantable_roles",
        "sub_headers": [
          "grantable_roles"
        ]
      },
      {
        "name": "grantable_roles_at_base",
        "sub_headers": [
          "at_bases"
        ]
      },
      {
        "name": "grantable_roles_at_hq",
        "sub_headers": [
          "at_hqs"
        ]
      },
      {
        "name": "grantable_roles_at_other",
        "sub_headers": [
          "at_others"
        ]
      },
      {
        "name": "roles",
        "sub_headers": [
          "roles_roles"
        ]
      },
      {
        "name": "roles_at_base",
        "sub_headers": [
          "at_bases"
        ]
      },
      {
        "name": "roles_at_hq",
        "sub_headers": [
          "at_hqs"
        ]
      },
      {
        "name": "roles_at_other",
        "sub_headers": [
          "at_others"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/roles/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "List of member character ID's and roles"
  },
  "corporations_corporation_roles_history": {
    "description": "Return how roles have changed for a coporation's members, up to a month",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "changed_at"
      },
      {
        "name": "issuer_id"
      },
      {
        "name": "role_type"
      },
      {
        "name": "old_roles",
        "sub_headers": [
          "old_roles"
        ]
      },
      {
        "name": "new_roles",
        "sub_headers": [
          "new_roles"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/roles/history/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "List of role changes"
  },
  "corporations_corporation_shareholders": {
    "description": "Return the current shareholders of a corporation.",
    "headers": [
      {
        "name": "shareholder_id"
      },
      {
        "name": "shareholder_type"
      },
      {
        "name": "share_count"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/shareholders/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "List of shareholders"
  },
  "corporations_corporation_standings": {
    "description": "Return corporation standings from agents, NPC corporations, and factions",
    "headers": [
      {
        "name": "from_id"
      },
      {
        "name": "from_type"
      },
      {
        "name": "standing"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/standings/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_standings.v1",
    "summary": "A list of standings"
  },
  "corporations_corporation_starbases": {
    "description": "Returns list of corporation starbases (POSes)",
    "headers": [
      {
        "name": "starbase_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "moon_id"
      },
      {
        "name": "onlined_since"
      },
      {
        "name": "reinforced_until"
      },
      {
        "name": "state"
      },
      {
        "name": "unanchor_at"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/starbases/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_starbases.v1",
    "summary": "List of starbases (POSes)"
  },
  "corporations_corporation_starbases_starbase": {
    "description": "Returns various settings and fuels of a starbase (POS)",
    "headers": [
      {
        "name": "fuel_bay_view"
      },
      {
        "name": "fuel_bay_take"
      },
      {
        "name": "anchor"
      },
      {
        "name": "unanchor"
      },
      {
        "name": "online"
      },
      {
        "name": "offline"
      },
      {
        "name": "allow_corporation_members"
      },
      {
        "name": "allow_alliance_members"
      },
      {
        "name": "use_alliance_standings"
      },
      {
        "name": "attack_if_other_security_status_dropping"
      },
      {
        "name": "attack_if_at_war"
      },
      {
        "name": "attack_security_status_threshold"
      },
      {
        "name": "attack_standing_threshold"
      },
      {
        "name": "fuels",
        "sub_headers": [
          "quantity",
          "type_id"
        ]
      }
    ],
    "path": "/v1/corporations/{corporation_id}/starbases/{starbase_id}/",
    "parameters": [
      {
        "description": "An EVE starbase (POS) ID",
        "in": "path",
        "name": "starbase_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "The solar system this starbase (POS) is located in,",
        "in": "query",
        "name": "system_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_starbases.v1",
    "summary": "List of starbases (POSes)"
  },
  "corporations_corporation_titles": {
    "description": "Returns a corporation's titles",
    "headers": [
      {
        "name": "grantable_roles",
        "sub_headers": [
          "grantable_roles"
        ]
      },
      {
        "name": "grantable_roles_at_base",
        "sub_headers": [
          "at_bases"
        ]
      },
      {
        "name": "grantable_roles_at_hq",
        "sub_headers": [
          "at_hqs"
        ]
      },
      {
        "name": "grantable_roles_at_other",
        "sub_headers": [
          "at_others"
        ]
      },
      {
        "name": "name"
      },
      {
        "name": "roles",
        "sub_headers": [
          "titles_roles"
        ]
      },
      {
        "name": "roles_at_base",
        "sub_headers": [
          "at_bases"
        ]
      },
      {
        "name": "roles_at_hq",
        "sub_headers": [
          "at_hqs"
        ]
      },
      {
        "name": "roles_at_other",
        "sub_headers": [
          "at_others"
        ]
      },
      {
        "name": "title_id"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/titles/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_titles.v1",
    "summary": "A list of titles"
  },
  "corporations_corporation_wallets": {
    "description": "Get a corporation's wallets",
    "headers": [
      {
        "name": "division"
      },
      {
        "name": "balance"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/wallets/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "List of corporation wallets"
  },
  "corporations_corporation_wallets_division_transactions": {
    "description": "Get wallet transactions of a corporation",
    "headers": [
      {
        "name": "transaction_id"
      },
      {
        "name": "date"
      },
      {
        "name": "location_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "unit_price"
      },
      {
        "name": "quantity"
      },
      {
        "name": "client_id"
      },
      {
        "name": "is_buy"
      },
      {
        "name": "journal_ref_id"
      }
    ],
    "path": "/v1/corporations/{corporation_id}/wallets/{division}/transactions/",
    "parameters": [
      {
        "description": "Wallet key of the division to fetch journals from",
        "in": "path",
        "name": "division",
        "type": "integer",
        "required": true
      },
      {
        "description": "Only show journal entries happened before the transaction referenced by this id",
        "in": "query",
        "name": "from_id",
        "type": "integer",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Wallet transactions"
  },
  "dogma_attributes": {
    "description": "Get a list of dogma attribute ids",
    "headers": [
      {
        "name": "attribute_ids"
      }
    ],
    "path": "/v1/dogma/attributes/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of dogma attribute ids"
  },
  "dogma_attributes_attribute": {
    "description": "Get information on a dogma attribute",
    "headers": [
      {
        "name": "attribute_id"
      },
      {
        "name": "default_value"
      },
      {
        "name": "description"
      },
      {
        "name": "display_name"
      },
      {
        "name": "high_is_good"
      },
      {
        "name": "icon_id"
      },
      {
        "name": "name"
      },
      {
        "name": "published"
      },
      {
        "name": "stackable"
      },
      {
        "name": "unit_id"
      }
    ],
    "path": "/v1/dogma/attributes/{attribute_id}/",
    "parameters": [
      {
        "description": "A dogma attribute ID",
        "in": "path",
        "name": "attribute_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a dogma attribute"
  },
  "dogma_dynamic_items_type_item": {
    "description": "Returns info about a dynamic item resulting from mutation with a mutaplasmid.",
    "headers": [
      {
        "name": "dogma_attributes",
        "sub_headers": [
          "attribute_id",
          "value"
        ]
      },
      {
        "name": "dogma_effects",
        "sub_headers": [
          "effect_id",
          "is_default"
        ]
      },
      {
        "name": "created_by"
      },
      {
        "name": "source_type_id"
      },
      {
        "name": "mutator_type_id"
      }
    ],
    "path": "/v1/dogma/dynamic/items/{type_id}/{item_id}/",
    "parameters": [
      {
        "description": "item_id integer",
        "in": "path",
        "name": "item_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "type_id integer",
        "in": "path",
        "name": "type_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Details about a dynamic item"
  },
  "dogma_effects": {
    "description": "Get a list of dogma effect ids",
    "headers": [
      {
        "name": "effect_ids"
      }
    ],
    "path": "/v1/dogma/effects/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of dogma effect ids"
  },
  "fleets_fleet": {
    "description": "Return details about a fleet",
    "headers": [
      {
        "name": "motd"
      },
      {
        "name": "is_free_move"
      },
      {
        "name": "is_registered"
      },
      {
        "name": "is_voice_enabled"
      }
    ],
    "path": "/v1/fleets/{fleet_id}/",
    "parameters": [
      {
        "description": "ID for a fleet",
        "in": "path",
        "name": "fleet_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Details about a fleet"
  },
  "fleets_fleet_members": {
    "description": "Return information about fleet members",
    "headers": [
      {
        "name": "character_id"
      },
      {
        "name": "ship_type_id"
      },
      {
        "name": "wing_id"
      },
      {
        "name": "squad_id"
      },
      {
        "name": "role"
      },
      {
        "name": "role_name"
      },
      {
        "name": "join_time"
      },
      {
        "name": "takes_fleet_warp"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "station_id"
      }
    ],
    "path": "/v1/fleets/{fleet_id}/members/",
    "parameters": [
      {
        "description": "ID for a fleet",
        "in": "path",
        "name": "fleet_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "A list of fleet members"
  },
  "fleets_fleet_wings": {
    "description": "Return information about wings in a fleet",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "id"
      },
      {
        "name": "squads",
        "sub_headers": [
          "id",
          "name"
        ]
      }
    ],
    "path": "/v1/fleets/{fleet_id}/wings/",
    "parameters": [
      {
        "description": "ID for a fleet",
        "in": "path",
        "name": "fleet_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "A list of fleet wings"
  },
  "fw_leaderboards": {
    "description": "Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.",
    "headers": [
      {
        "name": "kills",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      }
    ],
    "path": "/v1/fw/leaderboards/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Corporation leaderboard of kills and victory points within faction warfare."
  },
  "fw_leaderboards_characters": {
    "description": "Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.",
    "headers": [
      {
        "name": "kills",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      }
    ],
    "path": "/v1/fw/leaderboards/characters/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Character leaderboard of kills and victory points within faction warfare."
  },
  "fw_leaderboards_corporations": {
    "description": "Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.",
    "headers": [
      {
        "name": "kills",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "active_total",
          "last_week",
          "yesterday"
        ]
      }
    ],
    "path": "/v1/fw/leaderboards/corporations/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Corporation leaderboard of kills and victory points within faction warfare."
  },
  "fw_stats": {
    "description": "Statistical overviews of factions involved in faction warfare",
    "headers": [
      {
        "name": "faction_id"
      },
      {
        "name": "pilots"
      },
      {
        "name": "systems_controlled"
      },
      {
        "name": "kills",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      },
      {
        "name": "victory_points",
        "sub_headers": [
          "last_week",
          "total",
          "yesterday"
        ]
      }
    ],
    "path": "/v1/fw/stats/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Per faction breakdown of faction warfare statistics"
  },
  "fw_systems": {
    "description": "An overview of the current ownership of faction warfare solar systems",
    "headers": [
      {
        "name": "solar_system_id"
      },
      {
        "name": "occupier_faction_id"
      },
      {
        "name": "owner_faction_id"
      },
      {
        "name": "victory_points"
      },
      {
        "name": "victory_points_threshold"
      },
      {
        "name": "contested"
      }
    ],
    "path": "/v1/fw/systems/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "All faction warfare solar systems"
  },
  "fw_wars": {
    "description": "Data about which NPC factions are at war",
    "headers": [
      {
        "name": "faction_id"
      },
      {
        "name": "against_id"
      }
    ],
    "path": "/v1/fw/wars/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of NPC factions at war"
  },
  "incursions": {
    "description": "Return a list of current incursions",
    "headers": [
      {
        "name": "type"
      },
      {
        "name": "state"
      },
      {
        "name": "influence"
      },
      {
        "name": "has_boss"
      },
      {
        "name": "faction_id"
      },
      {
        "name": "constellation_id"
      },
      {
        "name": "staging_solar_system_id"
      },
      {
        "name": "infested_solar_systems",
        "sub_headers": [
          "solar_systems"
        ]
      }
    ],
    "path": "/v1/incursions/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of incursions"
  },
  "industry_facilities": {
    "description": "Return a list of industry facilities",
    "headers": [
      {
        "name": "facility_id"
      },
      {
        "name": "owner_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "region_id"
      },
      {
        "name": "tax"
      }
    ],
    "path": "/v1/industry/facilities/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of facilities"
  },
  "industry_systems": {
    "description": "Return cost indices for solar systems",
    "headers": [
      {
        "name": "solar_system_id"
      },
      {
        "name": "cost_indices",
        "sub_headers": [
          "activity",
          "cost_index"
        ]
      }
    ],
    "path": "/v1/industry/systems/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of cost indicies"
  },
  "insurance_prices": {
    "description": "Return available insurance levels for all ship types",
    "headers": [
      {
        "name": "type_id"
      },
      {
        "name": "levels",
        "sub_headers": [
          "cost",
          "name",
          "payout"
        ]
      }
    ],
    "path": "/v1/insurance/prices/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of insurance levels for all ship types"
  },
  "killmails_killmail_killmail_hash": {
    "description": "Return a single killmail from its ID and hash",
    "headers": [
      {
        "name": "killmail_id"
      },
      {
        "name": "killmail_time"
      },
      {
        "name": "victim",
        "sub_headers": [
          "alliance_id",
          "character_id",
          "corporation_id",
          "damage_taken",
          "faction_id",
          "items",
          "position",
          "ship_type_id"
        ]
      },
      {
        "name": "attackers",
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
        "name": "solar_system_id"
      },
      {
        "name": "moon_id"
      },
      {
        "name": "war_id"
      }
    ],
    "path": "/v1/killmails/{killmail_id}/{killmail_hash}/",
    "parameters": [
      {
        "description": "The killmail hash for verification",
        "in": "path",
        "name": "killmail_hash",
        "type": "string",
        "required": true
      },
      {
        "description": "The killmail ID to be queried",
        "in": "path",
        "name": "killmail_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A killmail"
  },
  "loyalty_stores_corporation_offers": {
    "description": "Return a list of offers from a specific corporation's loyalty store",
    "headers": [
      {
        "name": "offer_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      },
      {
        "name": "lp_cost"
      },
      {
        "name": "isk_cost"
      },
      {
        "name": "required_items",
        "sub_headers": [
          "quantity",
          "type_id"
        ]
      },
      {
        "name": "ak_cost"
      }
    ],
    "path": "/v1/loyalty/stores/{corporation_id}/offers/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of offers"
  },
  "markets_groups": {
    "description": "Get a list of item groups",
    "headers": [
      {
        "name": "group_ids"
      }
    ],
    "path": "/v1/markets/groups/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of item group ids"
  },
  "markets_groups_market_group": {
    "description": "Get information on an item group",
    "headers": [
      {
        "name": "market_group_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "types",
        "sub_headers": [
          "id_types"
        ]
      },
      {
        "name": "parent_group_id"
      }
    ],
    "path": "/v1/markets/groups/{market_group_id}/",
    "parameters": [
      {
        "description": "An Eve item group ID",
        "in": "path",
        "name": "market_group_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about an item group"
  },
  "markets_prices": {
    "description": "Return a list of prices",
    "headers": [
      {
        "name": "type_id"
      },
      {
        "name": "adjusted_price"
      },
      {
        "name": "average_price"
      }
    ],
    "path": "/v1/markets/prices/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of prices"
  },
  "markets_structures_structure": {
    "description": "Return all orders in a structure",
    "headers": [
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "min_volume"
      },
      {
        "name": "price"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "duration"
      },
      {
        "name": "issued"
      },
      {
        "name": "range"
      }
    ],
    "path": "/v1/markets/structures/{structure_id}/",
    "parameters": [
      {
        "description": "Return orders in this structure",
        "in": "path",
        "name": "structure_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-markets.structure_markets.v1",
    "summary": "A list of orders"
  },
  "markets_region_history": {
    "description": "Return a list of historical market statistics for the specified type in a region",
    "headers": [
      {
        "name": "date"
      },
      {
        "name": "order_count"
      },
      {
        "name": "volume"
      },
      {
        "name": "highest"
      },
      {
        "name": "average"
      },
      {
        "name": "lowest"
      }
    ],
    "path": "/v1/markets/{region_id}/history/",
    "parameters": [
      {
        "description": "Return statistics in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Return statistics for this type",
        "in": "query",
        "name": "type_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of historical market statistics"
  },
  "markets_region_orders": {
    "description": "Return a list of orders in a region",
    "headers": [
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "min_volume"
      },
      {
        "name": "price"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "duration"
      },
      {
        "name": "issued"
      },
      {
        "name": "range"
      }
    ],
    "path": "/v1/markets/{region_id}/orders/",
    "parameters": [
      {
        "description": "Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.",
        "in": "query",
        "name": "order_type",
        "type": "string",
        "required": true
      },
      {
        "description": "Return orders in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Return orders only for this type",
        "in": "query",
        "name": "type_id",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of orders"
  },
  "markets_region_types": {
    "description": "Return a list of type IDs that have active orders in the region, for efficient market indexing.",
    "headers": [
      {
        "name": "type_ids"
      }
    ],
    "path": "/v1/markets/{region_id}/types/",
    "parameters": [
      {
        "description": "Return statistics in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of type IDs"
  },
  "opportunities_groups": {
    "description": "Return a list of opportunities groups",
    "headers": [
      {
        "name": "group_ids"
      }
    ],
    "path": "/v1/opportunities/groups/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of opportunities group ids"
  },
  "opportunities_groups_group": {
    "description": "Return information of an opportunities group",
    "headers": [
      {
        "name": "group_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "notification"
      },
      {
        "name": "required_tasks",
        "sub_headers": [
          "required_tasks"
        ]
      },
      {
        "name": "connected_groups",
        "sub_headers": [
          "connected_groups"
        ]
      }
    ],
    "path": "/v1/opportunities/groups/{group_id}/",
    "parameters": [
      {
        "description": "ID of an opportunities group",
        "in": "path",
        "name": "group_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Details of an opportunities group"
  },
  "opportunities_tasks": {
    "description": "Return a list of opportunities tasks",
    "headers": [
      {
        "name": "task_ids"
      }
    ],
    "path": "/v1/opportunities/tasks/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of opportunities task ids"
  },
  "opportunities_tasks_task": {
    "description": "Return information of an opportunities task",
    "headers": [
      {
        "name": "task_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "notification"
      }
    ],
    "path": "/v1/opportunities/tasks/{task_id}/",
    "parameters": [
      {
        "description": "ID of an opportunities task",
        "in": "path",
        "name": "task_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Details of an opportunities task"
  },
  "route_origin_destination": {
    "description": "Get the systems between origin and destination",
    "headers": [
      {
        "name": "Solar system IDs"
      }
    ],
    "path": "/v1/route/{origin}/{destination}/",
    "parameters": [
      {
        "description": "destination solar system ID",
        "in": "path",
        "name": "destination",
        "type": "integer",
        "required": true
      },
      {
        "description": "origin solar system ID",
        "in": "path",
        "name": "origin",
        "type": "integer",
        "required": true
      },
      {
        "description": "avoid solar system ID(s)",
        "in": "query",
        "name": "avoid",
        "type": "array",
        "required": false
      },
      {
        "description": "connected solar system pairs",
        "in": "query",
        "name": "connections",
        "type": "array",
        "required": false
      },
      {
        "description": "route security preference",
        "in": "query",
        "name": "flag",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Solar systems in route from origin to destination"
  },
  "sovereignty_campaigns": {
    "description": "Shows sovereignty data for campaigns.",
    "headers": [
      {
        "name": "campaign_id"
      },
      {
        "name": "structure_id"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "constellation_id"
      },
      {
        "name": "event_type"
      },
      {
        "name": "start_time"
      },
      {
        "name": "attackers_score"
      },
      {
        "name": "defender_id"
      },
      {
        "name": "defender_score"
      },
      {
        "name": "participants",
        "sub_headers": [
          "alliance_id",
          "score"
        ]
      }
    ],
    "path": "/v1/sovereignty/campaigns/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of sovereignty campaigns"
  },
  "sovereignty_map": {
    "description": "Shows sovereignty information for solar systems",
    "headers": [
      {
        "name": "system_id"
      },
      {
        "name": "alliance_id"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "faction_id"
      }
    ],
    "path": "/v1/sovereignty/map/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of sovereignty information for solar systems in New Eden"
  },
  "sovereignty_structures": {
    "description": "Shows sovereignty data for structures.",
    "headers": [
      {
        "name": "alliance_id"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "structure_id"
      },
      {
        "name": "structure_type_id"
      },
      {
        "name": "vulnerability_occupancy_level"
      },
      {
        "name": "vulnerable_end_time"
      },
      {
        "name": "vulnerable_start_time"
      }
    ],
    "path": "/v1/sovereignty/structures/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of sovereignty structures"
  },
  "status": {
    "description": "EVE Server status",
    "headers": [
      {
        "name": "start_time"
      },
      {
        "name": "players"
      },
      {
        "name": "server_version"
      },
      {
        "name": "vip"
      }
    ],
    "path": "/v1/status/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Server status"
  },
  "universe_ancestries": {
    "description": "Get all character ancestries",
    "headers": [
      {
        "name": "id"
      },
      {
        "name": "name"
      },
      {
        "name": "bloodline_id"
      },
      {
        "name": "description"
      },
      {
        "name": "icon_id"
      },
      {
        "name": "short_description"
      }
    ],
    "path": "/v1/universe/ancestries/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of ancestries"
  },
  "universe_asteroid_belts_asteroid_belt": {
    "description": "Get information on an asteroid belt",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "system_id"
      }
    ],
    "path": "/v1/universe/asteroid_belts/{asteroid_belt_id}/",
    "parameters": [
      {
        "description": "asteroid_belt_id integer",
        "in": "path",
        "name": "asteroid_belt_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about an asteroid belt"
  },
  "universe_bloodlines": {
    "description": "Get a list of bloodlines",
    "headers": [
      {
        "name": "bloodline_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "race_id"
      },
      {
        "name": "ship_type_id"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "perception"
      },
      {
        "name": "willpower"
      },
      {
        "name": "charisma"
      },
      {
        "name": "memory"
      },
      {
        "name": "intelligence"
      }
    ],
    "path": "/v1/universe/bloodlines/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of bloodlines"
  },
  "universe_categories": {
    "description": "Get a list of item categories",
    "headers": [
      {
        "name": "categorie_ids"
      }
    ],
    "path": "/v1/universe/categories/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of item category ids"
  },
  "universe_categories_category": {
    "description": "Get information of an item category",
    "headers": [
      {
        "name": "category_id"
      },
      {
        "name": "name"
      },
      {
        "name": "published"
      },
      {
        "name": "groups",
        "sub_headers": [
          "id_groups"
        ]
      }
    ],
    "path": "/v1/universe/categories/{category_id}/",
    "parameters": [
      {
        "description": "An Eve item category ID",
        "in": "path",
        "name": "category_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about an item category"
  },
  "universe_constellations": {
    "description": "Get a list of constellations",
    "headers": [
      {
        "name": "constellation_ids"
      }
    ],
    "path": "/v1/universe/constellations/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of constellation ids"
  },
  "universe_constellations_constellation": {
    "description": "Get information on a constellation",
    "headers": [
      {
        "name": "constellation_id"
      },
      {
        "name": "name"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "region_id"
      },
      {
        "name": "systems",
        "sub_headers": [
          "id_systems"
        ]
      }
    ],
    "path": "/v1/universe/constellations/{constellation_id}/",
    "parameters": [
      {
        "description": "constellation_id integer",
        "in": "path",
        "name": "constellation_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a constellation"
  },
  "universe_graphics": {
    "description": "Get a list of graphics",
    "headers": [
      {
        "name": "graphic_ids"
      }
    ],
    "path": "/v1/universe/graphics/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of graphic ids"
  },
  "universe_graphics_graphic": {
    "description": "Get information on a graphic",
    "headers": [
      {
        "name": "graphic_id"
      },
      {
        "name": "collision_file"
      },
      {
        "name": "graphic_file"
      },
      {
        "name": "icon_folder"
      },
      {
        "name": "sof_dna"
      },
      {
        "name": "sof_fation_name"
      },
      {
        "name": "sof_hull_name"
      },
      {
        "name": "sof_race_name"
      }
    ],
    "path": "/v1/universe/graphics/{graphic_id}/",
    "parameters": [
      {
        "description": "graphic_id integer",
        "in": "path",
        "name": "graphic_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a graphic"
  },
  "universe_groups": {
    "description": "Get a list of item groups",
    "headers": [
      {
        "name": "group_ids"
      }
    ],
    "path": "/v1/universe/groups/",
    "parameters": [
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of item group ids"
  },
  "universe_groups_group": {
    "description": "Get information on an item group",
    "headers": [
      {
        "name": "group_id"
      },
      {
        "name": "name"
      },
      {
        "name": "published"
      },
      {
        "name": "category_id"
      },
      {
        "name": "types",
        "sub_headers": [
          "id_types"
        ]
      }
    ],
    "path": "/v1/universe/groups/{group_id}/",
    "parameters": [
      {
        "description": "An Eve item group ID",
        "in": "path",
        "name": "group_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about an item group"
  },
  "universe_moons_moon": {
    "description": "Get information on a moon",
    "headers": [
      {
        "name": "moon_id"
      },
      {
        "name": "name"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "system_id"
      }
    ],
    "path": "/v1/universe/moons/{moon_id}/",
    "parameters": [
      {
        "description": "moon_id integer",
        "in": "path",
        "name": "moon_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a moon"
  },
  "universe_planets_planet": {
    "description": "Get information on a planet",
    "headers": [
      {
        "name": "planet_id"
      },
      {
        "name": "name"
      },
      {
        "name": "type_id"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "system_id"
      }
    ],
    "path": "/v1/universe/planets/{planet_id}/",
    "parameters": [
      {
        "description": "planet_id integer",
        "in": "path",
        "name": "planet_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a planet"
  },
  "universe_races": {
    "description": "Get a list of character races",
    "headers": [
      {
        "name": "race_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "alliance_id"
      }
    ],
    "path": "/v1/universe/races/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of character races"
  },
  "universe_regions": {
    "description": "Get a list of regions",
    "headers": [
      {
        "name": "region_ids"
      }
    ],
    "path": "/v1/universe/regions/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of region ids"
  },
  "universe_regions_region": {
    "description": "Get information on a region",
    "headers": [
      {
        "name": "region_id"
      },
      {
        "name": "name"
      },
      {
        "name": "constellations",
        "sub_headers": [
          "id_constellations"
        ]
      },
      {
        "name": "description"
      }
    ],
    "path": "/v1/universe/regions/{region_id}/",
    "parameters": [
      {
        "description": "region_id integer",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a region"
  },
  "universe_schematics_schematic": {
    "description": "Get information on a planetary factory schematic",
    "headers": [
      {
        "name": "schematic_name"
      },
      {
        "name": "cycle_time"
      }
    ],
    "path": "/v1/universe/schematics/{schematic_id}/",
    "parameters": [
      {
        "description": "A PI schematic ID",
        "in": "path",
        "name": "schematic_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Public data about a schematic"
  },
  "universe_stargates_stargate": {
    "description": "Get information on a stargate",
    "headers": [
      {
        "name": "stargate_id"
      },
      {
        "name": "name"
      },
      {
        "name": "type_id"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "system_id"
      },
      {
        "name": "destination",
        "sub_headers": [
          "stargate_id",
          "system_id"
        ]
      }
    ],
    "path": "/v1/universe/stargates/{stargate_id}/",
    "parameters": [
      {
        "description": "stargate_id integer",
        "in": "path",
        "name": "stargate_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a stargate"
  },
  "universe_stars_star": {
    "description": "Get information on a star",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "type_id"
      },
      {
        "name": "age"
      },
      {
        "name": "luminosity"
      },
      {
        "name": "radius"
      },
      {
        "name": "spectral_class"
      },
      {
        "name": "temperature"
      },
      {
        "name": "solar_system_id"
      }
    ],
    "path": "/v1/universe/stars/{star_id}/",
    "parameters": [
      {
        "description": "star_id integer",
        "in": "path",
        "name": "star_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a star"
  },
  "universe_structures": {
    "description": "List all public structures",
    "headers": [
      {
        "name": "structure_ids"
      }
    ],
    "path": "/v1/universe/structures/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "List of public structure IDs"
  },
  "universe_structures_structure": {
    "description": "Returns information on requested structure, if you are on the ACL. Otherwise, returns \"Forbidden\" for all inputs.",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "solar_system_id"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "type_id"
      }
    ],
    "path": "/v1/universe/structures/{structure_id}/",
    "parameters": [
      {
        "description": "An Eve structure ID",
        "in": "path",
        "name": "structure_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-universe.read_structures.v1",
    "summary": "Data about a structure"
  },
  "universe_system_jumps": {
    "description": "Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last",
    "headers": [
      {
        "name": "system_id"
      },
      {
        "name": "ship_jumps"
      }
    ],
    "path": "/v1/universe/system_jumps/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of systems and number of jumps"
  },
  "universe_systems": {
    "description": "Get a list of solar systems",
    "headers": [
      {
        "name": "system_ids"
      }
    ],
    "path": "/v1/universe/systems/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of solar system ids"
  },
  "universe_types": {
    "description": "Get a list of type ids",
    "headers": [
      {
        "name": "type_ids"
      }
    ],
    "path": "/v1/universe/types/",
    "parameters": [
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of type ids"
  },
  "wars": {
    "description": "Return a list of wars",
    "headers": [
      {
        "name": "war_ids"
      }
    ],
    "path": "/v1/wars/",
    "parameters": [
      {
        "description": "Only return wars with ID smaller than this.",
        "in": "query",
        "name": "max_war_id",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of war IDs, in decending order by war_id."
  },
  "wars_war": {
    "description": "Return details about a war",
    "headers": [
      {
        "name": "id"
      },
      {
        "name": "declared"
      },
      {
        "name": "mutual"
      },
      {
        "name": "open_for_allies"
      },
      {
        "name": "aggressor",
        "sub_headers": [
          "alliance_id",
          "corporation_id",
          "isk_destroyed",
          "ships_killed"
        ]
      },
      {
        "name": "defender",
        "sub_headers": [
          "alliance_id",
          "corporation_id",
          "isk_destroyed",
          "ships_killed"
        ]
      },
      {
        "name": "allies",
        "sub_headers": [
          "alliance_id",
          "corporation_id"
        ]
      },
      {
        "name": "finished"
      },
      {
        "name": "retracted"
      },
      {
        "name": "started"
      }
    ],
    "path": "/v1/wars/{war_id}/",
    "parameters": [
      {
        "description": "ID for a war",
        "in": "path",
        "name": "war_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Details about a war"
  },
  "wars_war_killmails": {
    "description": "Return a list of kills related to a war",
    "headers": [
      {
        "name": "killmail_id"
      },
      {
        "name": "killmail_hash"
      }
    ],
    "path": "/v1/wars/{war_id}/killmails/",
    "parameters": [
      {
        "description": "A valid war ID",
        "in": "path",
        "name": "war_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of killmail IDs and hashes"
  },
  "alliances_alliance_contacts": {
    "description": "Return contacts of an alliance",
    "headers": [
      {
        "name": "standing"
      },
      {
        "name": "contact_type"
      },
      {
        "name": "contact_id"
      },
      {
        "name": "label_ids",
        "sub_headers": [
          "label_ids"
        ]
      }
    ],
    "path": "/v2/alliances/{alliance_id}/contacts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-alliances.read_contacts.v1",
    "summary": "A list of contacts"
  },
  "characters_character_blueprints": {
    "description": "Return a list of blueprints the character owns",
    "headers": [
      {
        "name": "item_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "location_flag"
      },
      {
        "name": "quantity"
      },
      {
        "name": "time_efficiency"
      },
      {
        "name": "material_efficiency"
      },
      {
        "name": "runs"
      }
    ],
    "path": "/v2/characters/{character_id}/blueprints/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_blueprints.v1",
    "summary": "A list of blueprints"
  },
  "characters_character_bookmarks": {
    "description": "A list of your character's personal bookmarks",
    "headers": [
      {
        "name": "bookmark_id"
      },
      {
        "name": "created"
      },
      {
        "name": "label"
      },
      {
        "name": "notes"
      },
      {
        "name": "location_id"
      },
      {
        "name": "creator_id"
      },
      {
        "name": "coordinates",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "folder_id"
      },
      {
        "name": "item",
        "sub_headers": [
          "item_id",
          "type_id"
        ]
      }
    ],
    "path": "/v2/characters/{character_id}/bookmarks/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-bookmarks.read_character_bookmarks.v1",
    "summary": "A list of bookmarks"
  },
  "characters_character_bookmarks_folders": {
    "description": "A list of your character's personal bookmark folders",
    "headers": [
      {
        "name": "folder_id"
      },
      {
        "name": "name"
      }
    ],
    "path": "/v2/characters/{character_id}/bookmarks/folders/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-bookmarks.read_character_bookmarks.v1",
    "summary": "List of bookmark folders"
  },
  "characters_character_contacts": {
    "description": "Return contacts of a character",
    "headers": [
      {
        "name": "standing"
      },
      {
        "name": "contact_type"
      },
      {
        "name": "contact_id"
      },
      {
        "name": "is_blocked"
      },
      {
        "name": "is_watched"
      },
      {
        "name": "label_ids",
        "sub_headers": [
          "label_ids"
        ]
      }
    ],
    "path": "/v2/characters/{character_id}/contacts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_contacts.v1",
    "summary": "A list of contacts"
  },
  "characters_character_notifications": {
    "description": "Return character notifications",
    "headers": [
      {
        "name": "notification_id"
      },
      {
        "name": "type"
      },
      {
        "name": "sender_id"
      },
      {
        "name": "sender_type"
      },
      {
        "name": "timestamp"
      },
      {
        "name": "is_read"
      },
      {
        "name": "text"
      }
    ],
    "path": "/v2/characters/{character_id}/notifications/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_notifications.v1",
    "summary": "Returns your recent notifications"
  },
  "characters_character_online": {
    "description": "Checks if the character is currently online",
    "headers": [
      {
        "name": "online"
      },
      {
        "name": "last_login"
      },
      {
        "name": "last_logout"
      },
      {
        "name": "logins"
      }
    ],
    "path": "/v2/characters/{character_id}/online/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-location.read_online.v1",
    "summary": "Object describing the character's online status"
  },
  "characters_character_orders": {
    "description": "List open market orders placed by a character",
    "headers": [
      {
        "name": "is_corporation"
      },
      {
        "name": "duration"
      },
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "region_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "range"
      },
      {
        "name": "price"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "issued"
      },
      {
        "name": "escrow"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "min_volume"
      }
    ],
    "path": "/v2/characters/{character_id}/orders/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-markets.read_character_orders.v1",
    "summary": "Open market orders placed by a character"
  },
  "characters_character_portrait": {
    "description": "Get portrait urls for a character",
    "headers": [
      {
        "name": "px128x128"
      },
      {
        "name": "px256x256"
      },
      {
        "name": "px512x512"
      },
      {
        "name": "px64x64"
      }
    ],
    "path": "/v2/characters/{character_id}/portrait/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Public data for the given character"
  },
  "characters_character_roles": {
    "description": "Returns a character's corporation roles",
    "headers": [
      {
        "name": "roles",
        "sub_headers": [
          "roles_roles"
        ]
      },
      {
        "name": "roles_at_base",
        "sub_headers": [
          "at_bases"
        ]
      },
      {
        "name": "roles_at_hq",
        "sub_headers": [
          "at_hqs"
        ]
      },
      {
        "name": "roles_at_other",
        "sub_headers": [
          "at_others"
        ]
      }
    ],
    "path": "/v2/characters/{character_id}/roles/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characters.read_corporation_roles.v1",
    "summary": "The character's roles in thier corporation"
  },
  "characters_character_skillqueue": {
    "description": "List the configured skill queue for the given character",
    "headers": [
      {
        "name": "skill_id"
      },
      {
        "name": "finished_level"
      },
      {
        "name": "queue_position"
      },
      {
        "name": "finish_date"
      },
      {
        "name": "level_end_sp"
      },
      {
        "name": "level_start_sp"
      },
      {
        "name": "start_date"
      },
      {
        "name": "training_start_sp"
      }
    ],
    "path": "/v2/characters/{character_id}/skillqueue/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-skills.read_skillqueue.v1",
    "summary": "The current skill queue, sorted ascending by finishing time"
  },
  "characters_character_stats": {
    "description": "Returns aggregate yearly stats for a character",
    "headers": [
      {
        "name": "year"
      },
      {
        "name": "character",
        "sub_headers": [
          "days_of_activity",
          "minutes",
          "sessions_started"
        ]
      },
      {
        "name": "combat",
        "sub_headers": [
          "cap_drainedby_npc",
          "cap_drainedby_pc",
          "cap_draining_pc",
          "criminal_flag_set",
          "damage_from_np_cs_amount",
          "damage_from_np_cs_num_shots",
          "damage_from_players_bomb_amount",
          "damage_from_players_bomb_num_shots",
          "damage_from_players_combat_drone_amount",
          "damage_from_players_combat_drone_num_shots",
          "damage_from_players_energy_amount",
          "damage_from_players_energy_num_shots",
          "damage_from_players_fighter_bomber_amount",
          "damage_from_players_fighter_bomber_num_shots",
          "damage_from_players_fighter_drone_amount",
          "damage_from_players_fighter_drone_num_shots",
          "damage_from_players_hybrid_amount",
          "damage_from_players_hybrid_num_shots",
          "damage_from_players_missile_amount",
          "damage_from_players_missile_num_shots",
          "damage_from_players_projectile_amount",
          "damage_from_players_projectile_num_shots",
          "damage_from_players_smart_bomb_amount",
          "damage_from_players_smart_bomb_num_shots",
          "damage_from_players_super_amount",
          "damage_from_players_super_num_shots",
          "damage_from_structures_total_amount",
          "damage_from_structures_total_num_shots",
          "damage_to_players_bomb_amount",
          "damage_to_players_bomb_num_shots",
          "damage_to_players_combat_drone_amount",
          "damage_to_players_combat_drone_num_shots",
          "damage_to_players_energy_amount",
          "damage_to_players_energy_num_shots",
          "damage_to_players_fighter_bomber_amount",
          "damage_to_players_fighter_bomber_num_shots",
          "damage_to_players_fighter_drone_amount",
          "damage_to_players_fighter_drone_num_shots",
          "damage_to_players_hybrid_amount",
          "damage_to_players_hybrid_num_shots",
          "damage_to_players_missile_amount",
          "damage_to_players_missile_num_shots",
          "damage_to_players_projectile_amount",
          "damage_to_players_projectile_num_shots",
          "damage_to_players_smart_bomb_amount",
          "damage_to_players_smart_bomb_num_shots",
          "damage_to_players_super_amount",
          "damage_to_players_super_num_shots",
          "damage_to_structures_total_amount",
          "damage_to_structures_total_num_shots",
          "deaths_high_sec",
          "deaths_low_sec",
          "deaths_null_sec",
          "deaths_pod_high_sec",
          "deaths_pod_low_sec",
          "deaths_pod_null_sec",
          "deaths_pod_wormhole",
          "deaths_wormhole",
          "drone_engage",
          "dscans",
          "duel_requested",
          "engagement_register",
          "kills_assists",
          "kills_high_sec",
          "kills_low_sec",
          "kills_null_sec",
          "kills_pod_high_sec",
          "kills_pod_low_sec",
          "kills_pod_null_sec",
          "kills_pod_wormhole",
          "kills_wormhole",
          "npc_flag_set",
          "probe_scans",
          "pvp_flag_set",
          "repair_armor_by_remote_amount",
          "repair_armor_remote_amount",
          "repair_armor_self_amount",
          "repair_capacitor_by_remote_amount",
          "repair_capacitor_remote_amount",
          "repair_capacitor_self_amount",
          "repair_hull_by_remote_amount",
          "repair_hull_remote_amount",
          "repair_hull_self_amount",
          "repair_shield_by_remote_amount",
          "repair_shield_remote_amount",
          "repair_shield_self_amount",
          "self_destructs",
          "warp_scramble_pc",
          "warp_scrambledby_npc",
          "warp_scrambledby_pc",
          "weapon_flag_set",
          "webifiedby_npc",
          "webifiedby_pc",
          "webifying_pc"
        ]
      },
      {
        "name": "industry",
        "sub_headers": [
          "hacking_successes",
          "jobs_cancelled",
          "jobs_completed_copy_blueprint",
          "jobs_completed_invention",
          "jobs_completed_manufacture",
          "jobs_completed_manufacture_asteroid",
          "jobs_completed_manufacture_asteroid_quantity",
          "jobs_completed_manufacture_charge",
          "jobs_completed_manufacture_charge_quantity",
          "jobs_completed_manufacture_commodity",
          "jobs_completed_manufacture_commodity_quantity",
          "jobs_completed_manufacture_deployable",
          "jobs_completed_manufacture_deployable_quantity",
          "jobs_completed_manufacture_drone",
          "jobs_completed_manufacture_drone_quantity",
          "jobs_completed_manufacture_implant",
          "jobs_completed_manufacture_implant_quantity",
          "jobs_completed_manufacture_module",
          "jobs_completed_manufacture_module_quantity",
          "jobs_completed_manufacture_other",
          "jobs_completed_manufacture_other_quantity",
          "jobs_completed_manufacture_ship",
          "jobs_completed_manufacture_ship_quantity",
          "jobs_completed_manufacture_structure",
          "jobs_completed_manufacture_structure_quantity",
          "jobs_completed_manufacture_subsystem",
          "jobs_completed_manufacture_subsystem_quantity",
          "jobs_completed_material_productivity",
          "jobs_completed_time_productivity",
          "jobs_started_copy_blueprint",
          "jobs_started_invention",
          "jobs_started_manufacture",
          "jobs_started_material_productivity",
          "jobs_started_time_productivity",
          "reprocess_item",
          "reprocess_item_quantity"
        ]
      },
      {
        "name": "inventory",
        "sub_headers": [
          "abandon_loot_quantity",
          "trash_item_quantity"
        ]
      },
      {
        "name": "isk",
        "sub_headers": [
          "in",
          "out"
        ]
      },
      {
        "name": "market",
        "sub_headers": [
          "accept_contracts_courier",
          "accept_contracts_item_exchange",
          "buy_orders_placed",
          "cancel_market_order",
          "create_contracts_auction",
          "create_contracts_courier",
          "create_contracts_item_exchange",
          "deliver_courier_contract",
          "isk_gained",
          "isk_spent",
          "modify_market_order",
          "search_contracts",
          "sell_orders_placed"
        ]
      },
      {
        "name": "mining",
        "sub_headers": [
          "drone_mine",
          "ore_arkonor",
          "ore_bistot",
          "ore_crokite",
          "ore_dark_ochre",
          "ore_gneiss",
          "ore_harvestable_cloud",
          "ore_hedbergite",
          "ore_hemorphite",
          "ore_ice",
          "ore_jaspet",
          "ore_kernite",
          "ore_mercoxit",
          "ore_omber",
          "ore_plagioclase",
          "ore_pyroxeres",
          "ore_scordite",
          "ore_spodumain",
          "ore_veldspar"
        ]
      },
      {
        "name": "module",
        "sub_headers": [
          "activations_armor_hardener",
          "activations_armor_repair_unit",
          "activations_armor_resistance_shift_hardener",
          "activations_automated_targeting_system",
          "activations_bastion",
          "activations_bomb_launcher",
          "activations_capacitor_booster",
          "activations_cargo_scanner",
          "activations_cloaking_device",
          "activations_clone_vat_bay",
          "activations_cynosural_field",
          "activations_damage_control",
          "activations_data_miners",
          "activations_drone_control_unit",
          "activations_drone_tracking_modules",
          "activations_eccm",
          "activations_ecm",
          "activations_ecm_burst",
          "activations_energy_destabilizer",
          "activations_energy_vampire",
          "activations_energy_weapon",
          "activations_festival_launcher",
          "activations_frequency_mining_laser",
          "activations_fueled_armor_repairer",
          "activations_fueled_shield_booster",
          "activations_gang_coordinator",
          "activations_gas_cloud_harvester",
          "activations_hull_repair_unit",
          "activations_hybrid_weapon",
          "activations_industrial_core",
          "activations_interdiction_sphere_launcher",
          "activations_micro_jump_drive",
          "activations_mining_laser",
          "activations_missile_launcher",
          "activations_passive_targeting_system",
          "activations_probe_launcher",
          "activations_projected_eccm",
          "activations_projectile_weapon",
          "activations_propulsion_module",
          "activations_remote_armor_repairer",
          "activations_remote_capacitor_transmitter",
          "activations_remote_ecm_burst",
          "activations_remote_hull_repairer",
          "activations_remote_sensor_booster",
          "activations_remote_sensor_damper",
          "activations_remote_shield_booster",
          "activations_remote_tracking_computer",
          "activations_salvager",
          "activations_sensor_booster",
          "activations_shield_booster",
          "activations_shield_hardener",
          "activations_ship_scanner",
          "activations_siege",
          "activations_smart_bomb",
          "activations_stasis_web",
          "activations_strip_miner",
          "activations_super_weapon",
          "activations_survey_scanner",
          "activations_target_breaker",
          "activations_target_painter",
          "activations_tracking_computer",
          "activations_tracking_disruptor",
          "activations_tractor_beam",
          "activations_triage",
          "activations_warp_disrupt_field_generator",
          "activations_warp_scrambler",
          "link_weapons",
          "overload",
          "repairs"
        ]
      },
      {
        "name": "orbital",
        "sub_headers": [
          "strike_characters_killed",
          "strike_damage_to_players_armor_amount",
          "strike_damage_to_players_shield_amount"
        ]
      },
      {
        "name": "pve",
        "sub_headers": [
          "dungeons_completed_agent",
          "dungeons_completed_distribution",
          "missions_succeeded",
          "missions_succeeded_epic_arc"
        ]
      },
      {
        "name": "social",
        "sub_headers": [
          "add_contact_bad",
          "add_contact_good",
          "add_contact_high",
          "add_contact_horrible",
          "add_contact_neutral",
          "add_note",
          "added_as_contact_bad",
          "added_as_contact_good",
          "added_as_contact_high",
          "added_as_contact_horrible",
          "added_as_contact_neutral",
          "calendar_event_created",
          "chat_messages_alliance",
          "chat_messages_constellation",
          "chat_messages_corporation",
          "chat_messages_fleet",
          "chat_messages_region",
          "chat_messages_solarsystem",
          "chat_messages_warfaction",
          "chat_total_message_length",
          "direct_trades",
          "fleet_broadcasts",
          "fleet_joins",
          "mails_received",
          "mails_sent"
        ]
      },
      {
        "name": "travel",
        "sub_headers": [
          "acceleration_gate_activations",
          "align_to",
          "distance_warped_high_sec",
          "distance_warped_low_sec",
          "distance_warped_null_sec",
          "distance_warped_wormhole",
          "docks_high_sec",
          "docks_low_sec",
          "docks_null_sec",
          "jumps_stargate_high_sec",
          "jumps_stargate_low_sec",
          "jumps_stargate_null_sec",
          "jumps_wormhole",
          "warps_high_sec",
          "warps_low_sec",
          "warps_null_sec",
          "warps_to_bookmark",
          "warps_to_celestial",
          "warps_to_fleet_member",
          "warps_to_scan_result",
          "warps_wormhole"
        ]
      }
    ],
    "path": "/v2/characters/{character_id}/stats/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-characterstats.read.v1",
    "summary": "Character stats"
  },
  "corporations_corporation_alliancehistory": {
    "description": "Get a list of all the alliances a corporation has been a member of",
    "headers": [
      {
        "name": "start_date"
      },
      {
        "name": "record_id"
      },
      {
        "name": "alliance_id"
      },
      {
        "name": "is_deleted"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/alliancehistory/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Alliance history for the given corporation"
  },
  "corporations_corporation_blueprints": {
    "description": "Returns a list of blueprints the corporation owns",
    "headers": [
      {
        "name": "item_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "location_flag"
      },
      {
        "name": "quantity"
      },
      {
        "name": "time_efficiency"
      },
      {
        "name": "material_efficiency"
      },
      {
        "name": "runs"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/blueprints/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_blueprints.v1",
    "summary": "List of corporation blueprints"
  },
  "corporations_corporation_contacts": {
    "description": "Return contacts of a corporation",
    "headers": [
      {
        "name": "standing"
      },
      {
        "name": "contact_type"
      },
      {
        "name": "contact_id"
      },
      {
        "name": "is_watched"
      },
      {
        "name": "label_ids",
        "sub_headers": [
          "label_ids"
        ]
      }
    ],
    "path": "/v2/corporations/{corporation_id}/contacts/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_contacts.v1",
    "summary": "A list of contacts"
  },
  "corporations_corporation_containers_logs": {
    "description": "Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation",
    "headers": [
      {
        "name": "logged_at"
      },
      {
        "name": "container_id"
      },
      {
        "name": "container_type_id"
      },
      {
        "name": "character_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "action"
      },
      {
        "name": "location_flag"
      },
      {
        "name": "new_config_bitmask"
      },
      {
        "name": "old_config_bitmask"
      },
      {
        "name": "password_type"
      },
      {
        "name": "quantity"
      },
      {
        "name": "type_id"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/containers/logs/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_container_logs.v1",
    "summary": "List of corporation ALSC logs"
  },
  "corporations_corporation_orders": {
    "description": "List open market orders placed on behalf of a corporation",
    "headers": [
      {
        "name": "duration"
      },
      {
        "name": "wallet_division"
      },
      {
        "name": "order_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "region_id"
      },
      {
        "name": "location_id"
      },
      {
        "name": "range"
      },
      {
        "name": "price"
      },
      {
        "name": "volume_total"
      },
      {
        "name": "volume_remain"
      },
      {
        "name": "issued"
      },
      {
        "name": "escrow"
      },
      {
        "name": "is_buy_order"
      },
      {
        "name": "min_volume"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/orders/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-markets.read_corporation_orders.v1",
    "summary": "A list of open market orders"
  },
  "corporations_corporation_structures": {
    "description": "Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell",
    "headers": [
      {
        "name": "structure_id"
      },
      {
        "name": "type_id"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "profile_id"
      },
      {
        "name": "reinforce_weekday"
      },
      {
        "name": "reinforce_hour"
      },
      {
        "name": "state"
      },
      {
        "name": "fuel_expires"
      },
      {
        "name": "next_reinforce_apply"
      },
      {
        "name": "next_reinforce_hour"
      },
      {
        "name": "next_reinforce_weekday"
      },
      {
        "name": "services",
        "sub_headers": [
          "name",
          "state"
        ]
      },
      {
        "name": "state_timer_end"
      },
      {
        "name": "state_timer_start"
      },
      {
        "name": "unanchors_at"
      }
    ],
    "path": "/v2/corporations/{corporation_id}/structures/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_structures.v1",
    "summary": "List of corporation structures' information"
  },
  "dogma_effects_effect": {
    "description": "Get information on a dogma effect",
    "headers": [
      {
        "name": "effect_id"
      },
      {
        "name": "description"
      },
      {
        "name": "range_chance"
      },
      {
        "name": "range_attribute_id"
      },
      {
        "name": "published"
      },
      {
        "name": "pre_expression"
      },
      {
        "name": "post_expression"
      },
      {
        "name": "name"
      },
      {
        "name": "modifiers",
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
        "name": "is_warp_safe"
      },
      {
        "name": "is_offensive"
      },
      {
        "name": "is_assistance"
      },
      {
        "name": "icon_id"
      },
      {
        "name": "falloff_attribute_id"
      },
      {
        "name": "electronic_chance"
      },
      {
        "name": "effect_category"
      },
      {
        "name": "duration_attribute_id"
      },
      {
        "name": "display_name"
      },
      {
        "name": "discharge_attribute_id"
      },
      {
        "name": "disallow_auto_repeat"
      },
      {
        "name": "tracking_speed_attribute_id"
      }
    ],
    "path": "/v2/dogma/effects/{effect_id}/",
    "parameters": [
      {
        "description": "A dogma effect ID",
        "in": "path",
        "name": "effect_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a dogma effect"
  },
  "eve_search": {
    "description": "Search for entities that match a given sub",
    "headers": [
      {
        "name": "agent",
        "sub_headers": [
          "agent_agents"
        ]
      },
      {
        "name": "alliance",
        "sub_headers": [
          "alliance_alliances"
        ]
      },
      {
        "name": "character",
        "sub_headers": [
          "character_characters"
        ]
      },
      {
        "name": "constellation",
        "sub_headers": [
          "constellation_constellations"
        ]
      },
      {
        "name": "corporation",
        "sub_headers": [
          "corporation_corporations"
        ]
      },
      {
        "name": "faction",
        "sub_headers": [
          "faction_factions"
        ]
      },
      {
        "name": "inventory_type",
        "sub_headers": [
          "inventory_types"
        ]
      },
      {
        "name": "region",
        "sub_headers": [
          "region_regions"
        ]
      },
      {
        "name": "solar_system",
        "sub_headers": [
          "solar_systems"
        ]
      },
      {
        "name": "station",
        "sub_headers": [
          "station_stations"
        ]
      }
    ],
    "path": "/v2/search/",
    "parameters": [
      {
        "description": "Type of entities to search for",
        "in": "query",
        "name": "categories",
        "type": "array",
        "required": true
      },
      {
        "description": "The string to search on",
        "in": "query",
        "name": "search",
        "type": "string",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Whether the search should be a strict match",
        "in": "query",
        "name": "strict",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of search results"
  },
  "universe_factions": {
    "description": "Get a list of factions",
    "headers": [
      {
        "name": "faction_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "size_factor"
      },
      {
        "name": "station_count"
      },
      {
        "name": "station_system_count"
      },
      {
        "name": "is_unique"
      },
      {
        "name": "corporation_id"
      },
      {
        "name": "militia_corporation_id"
      },
      {
        "name": "solar_system_id"
      }
    ],
    "path": "/v2/universe/factions/",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of factions"
  },
  "universe_stations_station": {
    "description": "Get information on a station",
    "headers": [
      {
        "name": "station_id"
      },
      {
        "name": "name"
      },
      {
        "name": "type_id"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "system_id"
      },
      {
        "name": "reprocessing_efficiency"
      },
      {
        "name": "reprocessing_stations_take"
      },
      {
        "name": "max_dockable_ship_volume"
      },
      {
        "name": "office_rental_cost"
      },
      {
        "name": "services",
        "sub_headers": [
          "id_services"
        ]
      },
      {
        "name": "owner"
      },
      {
        "name": "race_id"
      }
    ],
    "path": "/v2/universe/stations/{station_id}/",
    "parameters": [
      {
        "description": "station_id integer",
        "in": "path",
        "name": "station_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a station"
  },
  "universe_system_kills": {
    "description": "Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last",
    "headers": [
      {
        "name": "system_id"
      },
      {
        "name": "ship_kills"
      },
      {
        "name": "npc_kills"
      },
      {
        "name": "pod_kills"
      }
    ],
    "path": "/v2/universe/system_kills/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "A list of systems and number of ship, pod and NPC kills"
  },
  "alliances_alliance": {
    "description": "Public information about an alliance",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "creator_id"
      },
      {
        "name": "creator_corporation_id"
      },
      {
        "name": "ticker"
      },
      {
        "name": "date_founded"
      },
      {
        "name": "executor_corporation_id"
      },
      {
        "name": "faction_id"
      }
    ],
    "path": "/v3/alliances/{alliance_id}/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Public data about an alliance"
  },
  "characters_character_assets": {
    "description": "Return a list of the characters assets",
    "headers": [
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      },
      {
        "name": "location_id"
      },
      {
        "name": "location_type"
      },
      {
        "name": "item_id"
      },
      {
        "name": "location_flag"
      },
      {
        "name": "is_singleton"
      },
      {
        "name": "is_blueprint_copy"
      }
    ],
    "path": "/v3/characters/{character_id}/assets/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-assets.read_assets.v1",
    "summary": "A flat list of the users assets"
  },
  "characters_character_calendar_event": {
    "description": "Get all the information for a specific event",
    "headers": [
      {
        "name": "event_id"
      },
      {
        "name": "owner_id"
      },
      {
        "name": "owner_name"
      },
      {
        "name": "date"
      },
      {
        "name": "title"
      },
      {
        "name": "duration"
      },
      {
        "name": "importance"
      },
      {
        "name": "response"
      },
      {
        "name": "text"
      },
      {
        "name": "owner_type"
      }
    ],
    "path": "/v3/characters/{character_id}/calendar/{event_id}/",
    "parameters": [
      {
        "description": "The id of the event requested",
        "in": "path",
        "name": "event_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "Full details of a specific event"
  },
  "characters_character_clones": {
    "description": "A list of the character's clones",
    "headers": [
      {
        "name": "jump_clones",
        "sub_headers": [
          "implants",
          "jump_clone_id",
          "location_id",
          "location_type",
          "name"
        ]
      },
      {
        "name": "home_location",
        "sub_headers": [
          "location_id",
          "location_type"
        ]
      },
      {
        "name": "last_clone_jump_date"
      },
      {
        "name": "last_station_change_date"
      }
    ],
    "path": "/v3/characters/{character_id}/clones/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-clones.read_clones.v1",
    "summary": "Clone information for the given character"
  },
  "characters_character_mail_labels": {
    "description": "Return a list of the users mail labels, unread counts for each label and a total unread count.",
    "headers": [
      {
        "name": "labels",
        "sub_headers": [
          "color",
          "label_id",
          "name",
          "unread_count"
        ]
      },
      {
        "name": "total_unread_count"
      }
    ],
    "path": "/v3/characters/{character_id}/mail/labels/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-mail.read_mail.v1",
    "summary": "A list of mail labels and unread counts"
  },
  "characters_character_planets_planet": {
    "description": "Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.",
    "headers": [
      {
        "name": "links",
        "sub_headers": [
          "destination_pin_id",
          "link_level",
          "source_pin_id"
        ]
      },
      {
        "name": "pins",
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
    "parameters": [
      {
        "description": "Planet id of the target planet",
        "in": "path",
        "name": "planet_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-planets.manage_planets.v1",
    "summary": "Colony layout"
  },
  "characters_character_search": {
    "description": "Search for entities that match a given sub",
    "headers": [
      {
        "name": "agent",
        "sub_headers": [
          "agent_agents"
        ]
      },
      {
        "name": "alliance",
        "sub_headers": [
          "alliance_alliances"
        ]
      },
      {
        "name": "character",
        "sub_headers": [
          "character_characters"
        ]
      },
      {
        "name": "constellation",
        "sub_headers": [
          "constellation_constellations"
        ]
      },
      {
        "name": "corporation",
        "sub_headers": [
          "corporation_corporations"
        ]
      },
      {
        "name": "faction",
        "sub_headers": [
          "faction_factions"
        ]
      },
      {
        "name": "inventory_type",
        "sub_headers": [
          "inventory_types"
        ]
      },
      {
        "name": "region",
        "sub_headers": [
          "region_regions"
        ]
      },
      {
        "name": "solar_system",
        "sub_headers": [
          "solar_systems"
        ]
      },
      {
        "name": "station",
        "sub_headers": [
          "station_stations"
        ]
      },
      {
        "name": "structure",
        "sub_headers": [
          "structure_structures"
        ]
      }
    ],
    "path": "/v3/characters/{character_id}/search/",
    "parameters": [
      {
        "description": "Type of entities to search for",
        "in": "query",
        "name": "categories",
        "type": "array",
        "required": true
      },
      {
        "description": "The string to search on",
        "in": "query",
        "name": "search",
        "type": "string",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Whether the search should be a strict match",
        "in": "query",
        "name": "strict",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-search.search_structures.v1",
    "summary": "A list of search results"
  },
  "corporations_corporation_assets": {
    "description": "Return a list of the corporation assets",
    "headers": [
      {
        "name": "type_id"
      },
      {
        "name": "quantity"
      },
      {
        "name": "location_id"
      },
      {
        "name": "location_type"
      },
      {
        "name": "item_id"
      },
      {
        "name": "location_flag"
      },
      {
        "name": "is_singleton"
      },
      {
        "name": "is_blueprint_copy"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/assets/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-assets.read_corporation_assets.v1",
    "summary": "A list of assets"
  },
  "corporations_corporation_members": {
    "description": "Return the current member list of a corporation, the token's character need to be a member of the corporation.",
    "headers": [
      {
        "name": "member_ids"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/members/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "List of member character IDs"
  },
  "corporations_corporation_wallets_division_journal": {
    "description": "Retrieve the given corporation's wallet journal for the given division going 30 days back",
    "headers": [
      {
        "name": "date"
      },
      {
        "name": "id"
      },
      {
        "name": "ref_type"
      },
      {
        "name": "description"
      },
      {
        "name": "amount"
      },
      {
        "name": "balance"
      },
      {
        "name": "context_id"
      },
      {
        "name": "context_id_type"
      },
      {
        "name": "first_party_id"
      },
      {
        "name": "reason"
      },
      {
        "name": "second_party_id"
      },
      {
        "name": "tax"
      },
      {
        "name": "tax_receiver_id"
      }
    ],
    "path": "/v3/corporations/{corporation_id}/wallets/{division}/journal/",
    "parameters": [
      {
        "description": "Wallet key of the division to fetch journals from",
        "in": "path",
        "name": "division",
        "type": "integer",
        "required": true
      },
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Journal entries"
  },
  "universe_systems_system": {
    "description": "Get information on a solar system. NOTE: This route does not work with abyssal systems.",
    "headers": [
      {
        "name": "star_id"
      },
      {
        "name": "system_id"
      },
      {
        "name": "name"
      },
      {
        "name": "position",
        "sub_headers": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "name": "security_status"
      },
      {
        "name": "constellation_id"
      },
      {
        "name": "planets",
        "sub_headers": [
          "asteroid_belts",
          "moons",
          "planet_id"
        ]
      },
      {
        "name": "security_class"
      },
      {
        "name": "stargates",
        "sub_headers": [
          "id_stargates"
        ]
      },
      {
        "name": "stations",
        "sub_headers": [
          "id_stations"
        ]
      }
    ],
    "path": "/v3/universe/systems/{system_id}/",
    "parameters": [
      {
        "description": "system_id integer",
        "in": "path",
        "name": "system_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a solar system"
  },
  "universe_types_type": {
    "description": "Get information on a type",
    "headers": [
      {
        "name": "type_id"
      },
      {
        "name": "name"
      },
      {
        "name": "description"
      },
      {
        "name": "published"
      },
      {
        "name": "group_id"
      },
      {
        "name": "capacity"
      },
      {
        "name": "dogma_attributes",
        "sub_headers": [
          "attribute_id",
          "value"
        ]
      },
      {
        "name": "dogma_effects",
        "sub_headers": [
          "effect_id",
          "is_default"
        ]
      },
      {
        "name": "graphic_id"
      },
      {
        "name": "icon_id"
      },
      {
        "name": "market_group_id"
      },
      {
        "name": "mass"
      },
      {
        "name": "packaged_volume"
      },
      {
        "name": "portion_size"
      },
      {
        "name": "radius"
      },
      {
        "name": "volume"
      }
    ],
    "path": "/v3/universe/types/{type_id}/",
    "parameters": [
      {
        "description": "An Eve item type ID",
        "in": "path",
        "name": "type_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Information about a type"
  },
  "characters_character": {
    "description": "Public information about a character",
    "headers": [
      {
        "name": "corporation_id"
      },
      {
        "name": "birthday"
      },
      {
        "name": "name"
      },
      {
        "name": "gender"
      },
      {
        "name": "race_id"
      },
      {
        "name": "bloodline_id"
      },
      {
        "name": "alliance_id"
      },
      {
        "name": "ancestry_id"
      },
      {
        "name": "description"
      },
      {
        "name": "faction_id"
      },
      {
        "name": "security_status"
      }
    ],
    "path": "/v4/characters/{character_id}/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Public data for the given character"
  },
  "characters_character_skills": {
    "description": "List all trained skills for the given character",
    "headers": [
      {
        "name": "skills",
        "sub_headers": [
          "active_skill_level",
          "skill_id",
          "skillpoints_in_skill",
          "trained_skill_level"
        ]
      },
      {
        "name": "total_sp"
      },
      {
        "name": "unallocated_sp"
      }
    ],
    "path": "/v4/characters/{character_id}/skills/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-skills.read_skills.v1",
    "summary": "Known skills for the character"
  },
  "characters_character_wallet_journal": {
    "description": "Retrieve the given character's wallet journal going 30 days back",
    "headers": [
      {
        "name": "date"
      },
      {
        "name": "id"
      },
      {
        "name": "ref_type"
      },
      {
        "name": "description"
      },
      {
        "name": "amount"
      },
      {
        "name": "balance"
      },
      {
        "name": "context_id"
      },
      {
        "name": "context_id_type"
      },
      {
        "name": "first_party_id"
      },
      {
        "name": "reason"
      },
      {
        "name": "second_party_id"
      },
      {
        "name": "tax"
      },
      {
        "name": "tax_receiver_id"
      }
    ],
    "path": "/v4/characters/{character_id}/wallet/journal/",
    "parameters": [
      {
        "description": "Name of the character used for auth. If none is given, defaults to AUTHING_CHARACTER.",
        "in": "parameters",
        "name": "name",
        "type": "boolean",
        "required": false
      },
      {
        "description": "Which page of results to return",
        "in": "query",
        "name": "page",
        "type": "integer",
        "required": false
      },
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Journal entries"
  },
  "corporations_corporation": {
    "description": "Public information about a corporation",
    "headers": [
      {
        "name": "name"
      },
      {
        "name": "ticker"
      },
      {
        "name": "member_count"
      },
      {
        "name": "ceo_id"
      },
      {
        "name": "tax_rate"
      },
      {
        "name": "creator_id"
      },
      {
        "name": "alliance_id"
      },
      {
        "name": "date_founded"
      },
      {
        "name": "description"
      },
      {
        "name": "faction_id"
      },
      {
        "name": "home_station_id"
      },
      {
        "name": "shares"
      },
      {
        "name": "url"
      }
    ],
    "path": "/v4/corporations/{corporation_id}/",
    "parameters": [
      {
        "description": "Default: True, Boolean if column headings should be listed or not.",
        "in": "parameters",
        "name": "opt_headers",
        "type": "string",
        "required": false
      }
    ],
    "summary": "Public information about a corporation"
  }
};