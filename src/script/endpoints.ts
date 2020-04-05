const ENDPOINTS: IEndpointList = {
  "alliances": {
    "description": "List all active player alliances",
    "method": "get",
    "parameters": [],
    "path": "/{version}/alliances/",
    "summary": "List all alliances",
    "version": "v1"
  },
  "alliances_alliance": {
    "description": "Public information about an alliance",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE alliance ID",
        "in": "path",
        "name": "alliance_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/alliances/{alliance_id}/",
    "summary": "Get alliance information",
    "version": "v3"
  },
  "alliances_alliance_contacts": {
    "description": "Return contacts of an alliance",
    "method": "get",
    "parameters": [],
    "path": "/{version}/alliances/{alliance_id}/contacts/",
    "scope": "esi-alliances.read_contacts.v1",
    "summary": "Get alliance contacts",
    "version": "v2"
  },
  "alliances_alliance_contacts_labels": {
    "description": "Return custom labels for an alliance's contacts",
    "method": "get",
    "parameters": [],
    "path": "/{version}/alliances/{alliance_id}/contacts/labels/",
    "scope": "esi-alliances.read_contacts.v1",
    "summary": "Get alliance contact labels",
    "version": "v1"
  },
  "alliances_alliance_corporations": {
    "description": "List all current member corporations of an alliance",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE alliance ID",
        "in": "path",
        "name": "alliance_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/alliances/{alliance_id}/corporations/",
    "summary": "List alliance's corporations",
    "version": "v1"
  },
  "alliances_alliance_icons": {
    "description": "Get the icon urls for a alliance",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE alliance ID",
        "in": "path",
        "name": "alliance_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/alliances/{alliance_id}/icons/",
    "summary": "Get alliance icon",
    "version": "v1"
  },
  "characters_affiliation": {
    "description": "Bulk lookup of character IDs to corporation, alliance and faction",
    "method": "post",
    "parameters": [
      {
        "description": "The character IDs to fetch affiliations for. All characters must exist, or none will be returned",
        "in": "body",
        "name": "characters",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/characters/affiliation/",
    "summary": "Character affiliation",
    "version": "v1"
  },
  "characters_character": {
    "description": "Public information about a character",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE character ID",
        "in": "path",
        "name": "character_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/",
    "summary": "Get character's public information",
    "version": "v4"
  },
  "characters_character_agents_research": {
    "description": "Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/agents_research/",
    "scope": "esi-characters.read_agents_research.v1",
    "summary": "Get agents research",
    "version": "v1"
  },
  "characters_character_assets": {
    "description": "Return a list of the characters assets",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/assets/",
    "scope": "esi-assets.read_assets.v1",
    "summary": "Get character assets",
    "version": "v4"
  },
  "characters_character_assets_locations": {
    "description": "Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)",
    "method": "post",
    "parameters": [
      {
        "description": "A list of item ids",
        "in": "body",
        "name": "item_ids",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/assets/locations/",
    "scope": "esi-assets.read_assets.v1",
    "summary": "Get character asset locations",
    "version": "v2"
  },
  "characters_character_assets_names": {
    "description": "Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.",
    "method": "post",
    "parameters": [
      {
        "description": "A list of item ids",
        "in": "body",
        "name": "item_ids",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/assets/names/",
    "scope": "esi-assets.read_assets.v1",
    "summary": "Get character asset names",
    "version": "v1"
  },
  "characters_character_attributes": {
    "description": "Return attributes of a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/attributes/",
    "scope": "esi-skills.read_skills.v1",
    "summary": "Get character attributes",
    "version": "v1"
  },
  "characters_character_blueprints": {
    "description": "Return a list of blueprints the character owns",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/blueprints/",
    "scope": "esi-characters.read_blueprints.v1",
    "summary": "Get blueprints",
    "version": "v2"
  },
  "characters_character_bookmarks": {
    "description": "A list of your character's personal bookmarks",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/bookmarks/",
    "scope": "esi-bookmarks.read_character_bookmarks.v1",
    "summary": "List bookmarks",
    "version": "v2"
  },
  "characters_character_bookmarks_folders": {
    "description": "A list of your character's personal bookmark folders",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/bookmarks/folders/",
    "scope": "esi-bookmarks.read_character_bookmarks.v1",
    "summary": "List bookmark folders",
    "version": "v2"
  },
  "characters_character_calendar": {
    "description": "Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event",
    "method": "get",
    "parameters": [
      {
        "description": "The event ID to retrieve events from",
        "in": "query",
        "name": "from_event",
        "type": "integer",
        "required": false
      }
    ],
    "path": "/{version}/characters/{character_id}/calendar/",
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "List calendar event summaries",
    "version": "v1"
  },
  "characters_character_calendar_event": {
    "description": "Get all the information for a specific event",
    "method": "get",
    "parameters": [
      {
        "description": "The id of the event requested",
        "in": "path",
        "name": "event_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/calendar/{event_id}/",
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "Get an event",
    "version": "v3"
  },
  "characters_character_calendar_event_attendees": {
    "description": "Get all invited attendees for a given event",
    "method": "get",
    "parameters": [
      {
        "description": "The id of the event requested",
        "in": "path",
        "name": "event_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/calendar/{event_id}/attendees/",
    "scope": "esi-calendar.read_calendar_events.v1",
    "summary": "Get attendees",
    "version": "v1"
  },
  "characters_character_clones": {
    "description": "A list of the character's clones",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/clones/",
    "scope": "esi-clones.read_clones.v1",
    "summary": "Get clones",
    "version": "v3"
  },
  "characters_character_contacts": {
    "description": "Return contacts of a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/contacts/",
    "scope": "esi-characters.read_contacts.v1",
    "summary": "Get contacts",
    "version": "v2"
  },
  "characters_character_contacts_labels": {
    "description": "Return custom labels for a character's contacts",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/contacts/labels/",
    "scope": "esi-characters.read_contacts.v1",
    "summary": "Get contact labels",
    "version": "v1"
  },
  "characters_character_contracts": {
    "description": "Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/contracts/",
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "Get contracts",
    "version": "v1"
  },
  "characters_character_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/contracts/{contract_id}/bids/",
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "Get contract bids",
    "version": "v1"
  },
  "characters_character_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/contracts/{contract_id}/items/",
    "scope": "esi-contracts.read_character_contracts.v1",
    "summary": "Get contract items",
    "version": "v1"
  },
  "characters_character_corporationhistory": {
    "description": "Get a list of all the corporations a character has been a member of",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE character ID",
        "in": "path",
        "name": "character_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/corporationhistory/",
    "summary": "Get corporation history",
    "version": "v1"
  },
  "characters_character_fatigue": {
    "description": "Return a character's jump activation and fatigue information",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/fatigue/",
    "scope": "esi-characters.read_fatigue.v1",
    "summary": "Get jump fatigue",
    "version": "v1"
  },
  "characters_character_fittings": {
    "description": "Return fittings of a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/fittings/",
    "scope": "esi-fittings.read_fittings.v1",
    "summary": "Get fittings",
    "version": "v2"
  },
  "characters_character_fleet": {
    "description": "Return the fleet ID the character is in, if any.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/fleet/",
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Get character fleet info",
    "version": "v1"
  },
  "characters_character_fw_stats": {
    "description": "Statistical overview of a character involved in faction warfare",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/fw/stats/",
    "scope": "esi-characters.read_fw_stats.v1",
    "summary": "Overview of a character involved in faction warfare",
    "version": "v1"
  },
  "characters_character_implants": {
    "description": "Return implants on the active clone of a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/implants/",
    "scope": "esi-clones.read_implants.v1",
    "summary": "Get active implants",
    "version": "v1"
  },
  "characters_character_industry_jobs": {
    "description": "List industry jobs placed by a character",
    "method": "get",
    "parameters": [
      {
        "description": "Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days",
        "in": "query",
        "name": "include_completed",
        "type": "boolean",
        "required": false
      }
    ],
    "path": "/{version}/characters/{character_id}/industry/jobs/",
    "scope": "esi-industry.read_character_jobs.v1",
    "summary": "List character industry jobs",
    "version": "v1"
  },
  "characters_character_killmails_recent": {
    "description": "Return a list of a character's kills and losses going back 90 days",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/killmails/recent/",
    "scope": "esi-killmails.read_killmails.v1",
    "summary": "Get a character's recent kills and losses",
    "version": "v1"
  },
  "characters_character_location": {
    "description": "Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/location/",
    "scope": "esi-location.read_location.v1",
    "summary": "Get character location",
    "version": "v1"
  },
  "characters_character_loyalty_points": {
    "description": "Return a list of loyalty points for all corporations the character has worked for",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/loyalty/points/",
    "scope": "esi-characters.read_loyalty.v1",
    "summary": "Get loyalty points",
    "version": "v1"
  },
  "characters_character_mail": {
    "description": "Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards",
    "method": "get",
    "parameters": [
      {
        "description": "Fetch only mails that match one or more of the given labels",
        "in": "query",
        "name": "labels",
        "type": "array",
        "items": {
          "type": "integer"
        },
        "required": false
      },
      {
        "description": "List only mail with an ID lower than the given ID, if present",
        "in": "query",
        "name": "last_mail_id",
        "type": "integer",
        "required": false
      }
    ],
    "path": "/{version}/characters/{character_id}/mail/",
    "scope": "esi-mail.read_mail.v1",
    "summary": "Return mail headers",
    "version": "v1"
  },
  "characters_character_mail_labels": {
    "description": "Return a list of the users mail labels, unread counts for each label and a total unread count.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/mail/labels/",
    "scope": "esi-mail.read_mail.v1",
    "summary": "Get mail labels and unread counts",
    "version": "v3"
  },
  "characters_character_mail_lists": {
    "description": "Return all mailing lists that the character is subscribed to",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/mail/lists/",
    "scope": "esi-mail.read_mail.v1",
    "summary": "Return mailing list subscriptions",
    "version": "v1"
  },
  "characters_character_mail_mail": {
    "description": "Return the contents of an EVE mail",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE mail ID",
        "in": "path",
        "name": "mail_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/mail/{mail_id}/",
    "scope": "esi-mail.read_mail.v1",
    "summary": "Return a mail",
    "version": "v1"
  },
  "characters_character_medals": {
    "description": "Return a list of medals the character has",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/medals/",
    "scope": "esi-characters.read_medals.v1",
    "summary": "Get medals",
    "version": "v1"
  },
  "characters_character_mining": {
    "description": "Paginated record of all mining done by a character for the past 30 days",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/mining/",
    "scope": "esi-industry.read_character_mining.v1",
    "summary": "Character mining ledger",
    "version": "v1"
  },
  "characters_character_notifications": {
    "description": "Return character notifications",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/notifications/",
    "scope": "esi-characters.read_notifications.v1",
    "summary": "Get character notifications",
    "version": "v5"
  },
  "characters_character_notifications_contacts": {
    "description": "Return notifications about having been added to someone's contact list",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/notifications/contacts/",
    "scope": "esi-characters.read_notifications.v1",
    "summary": "Get new contact notifications",
    "version": "v1"
  },
  "characters_character_online": {
    "description": "Checks if the character is currently online",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/online/",
    "scope": "esi-location.read_online.v1",
    "summary": "Get character online",
    "version": "v2"
  },
  "characters_character_opportunities": {
    "description": "Return a list of tasks finished by a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/opportunities/",
    "scope": "esi-characters.read_opportunities.v1",
    "summary": "Get a character's completed tasks",
    "version": "v1"
  },
  "characters_character_orders": {
    "description": "List open market orders placed by a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/orders/",
    "scope": "esi-markets.read_character_orders.v1",
    "summary": "List open orders from a character",
    "version": "v2"
  },
  "characters_character_orders_history": {
    "description": "List cancelled and expired market orders placed by a character up to 90 days in the past.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/orders/history/",
    "scope": "esi-markets.read_character_orders.v1",
    "summary": "List historical orders by a character",
    "version": "v1"
  },
  "characters_character_planets": {
    "description": "Returns a list of all planetary colonies owned by a character.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/planets/",
    "scope": "esi-planets.manage_planets.v1",
    "summary": "Get colonies",
    "version": "v1"
  },
  "characters_character_planets_planet": {
    "description": "Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.",
    "method": "get",
    "parameters": [
      {
        "description": "Planet id of the target planet",
        "in": "path",
        "name": "planet_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/planets/{planet_id}/",
    "scope": "esi-planets.manage_planets.v1",
    "summary": "Get colony layout",
    "version": "v3"
  },
  "characters_character_portrait": {
    "description": "Get portrait urls for a character",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE character ID",
        "in": "path",
        "name": "character_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/characters/{character_id}/portrait/",
    "summary": "Get character portraits",
    "version": "v2"
  },
  "characters_character_roles": {
    "description": "Returns a character's corporation roles",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/roles/",
    "scope": "esi-characters.read_corporation_roles.v1",
    "summary": "Get character corporation roles",
    "version": "v2"
  },
  "characters_character_search": {
    "description": "Search for entities that match a given sub-string.",
    "method": "get",
    "parameters": [
      {
        "description": "The string to search on",
        "in": "query",
        "name": "search",
        "type": "string",
        "required": true
      },
      {
        "description": "Type of entities to search for",
        "in": "query",
        "name": "categories",
        "type": "array",
        "items": {
          "type": "string"
        },
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
      }
    ],
    "path": "/{version}/characters/{character_id}/search/",
    "scope": "esi-search.search_structures.v1",
    "summary": "Search on a string",
    "version": "v3"
  },
  "characters_character_ship": {
    "description": "Get the current ship type, name and id",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/ship/",
    "scope": "esi-location.read_ship_type.v1",
    "summary": "Get current ship",
    "version": "v1"
  },
  "characters_character_skillqueue": {
    "description": "List the configured skill queue for the given character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/skillqueue/",
    "scope": "esi-skills.read_skillqueue.v1",
    "summary": "Get character's skill queue",
    "version": "v2"
  },
  "characters_character_skills": {
    "description": "List all trained skills for the given character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/skills/",
    "scope": "esi-skills.read_skills.v1",
    "summary": "Get character skills",
    "version": "v4"
  },
  "characters_character_standings": {
    "description": "Return character standings from agents, NPC corporations, and factions",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/standings/",
    "scope": "esi-characters.read_standings.v1",
    "summary": "Get standings",
    "version": "v1"
  },
  "characters_character_stats": {
    "description": "Returns aggregate yearly stats for a character",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/stats/",
    "scope": "esi-characterstats.read.v1",
    "summary": "Yearly aggregate stats",
    "version": "v2"
  },
  "characters_character_titles": {
    "description": "Returns a character's titles",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/titles/",
    "scope": "esi-characters.read_titles.v1",
    "summary": "Get character corporation titles",
    "version": "v1"
  },
  "characters_character_wallet": {
    "description": "Returns a character's wallet balance",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/wallet/",
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Get a character's wallet balance",
    "version": "v1"
  },
  "characters_character_wallet_journal": {
    "description": "Retrieve the given character's wallet journal going 30 days back",
    "method": "get",
    "parameters": [],
    "path": "/{version}/characters/{character_id}/wallet/journal/",
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Get character wallet journal",
    "version": "v6"
  },
  "characters_character_wallet_transactions": {
    "description": "Get wallet transactions of a character",
    "method": "get",
    "parameters": [
      {
        "description": "Only show transactions happened before the one referenced by this id",
        "in": "query",
        "name": "from_id",
        "type": "integer",
        "required": false
      }
    ],
    "path": "/{version}/characters/{character_id}/wallet/transactions/",
    "scope": "esi-wallet.read_character_wallet.v1",
    "summary": "Get wallet transactions",
    "version": "v1"
  },
  "contracts_public_bids_contract": {
    "description": "Lists bids on a public auction contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/contracts/public/bids/{contract_id}/",
    "summary": "Get public contract bids",
    "version": "v1"
  },
  "contracts_public_items_contract": {
    "description": "Lists items of a public contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/contracts/public/items/{contract_id}/",
    "summary": "Get public contract items",
    "version": "v1"
  },
  "contracts_public_region": {
    "description": "Returns a paginated list of all public contracts in the given region",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE region id",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/contracts/public/{region_id}/",
    "summary": "Get public contracts",
    "version": "v1"
  },
  "corporation_corporation_mining_extractions": {
    "description": "Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporation/{corporation_id}/mining/extractions/",
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "Moon extraction timers",
    "version": "v1"
  },
  "corporation_corporation_mining_observers": {
    "description": "Paginated list of all entities capable of observing and recording mining for a corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporation/{corporation_id}/mining/observers/",
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "Corporation mining observers",
    "version": "v1"
  },
  "corporation_corporation_mining_observers_observer": {
    "description": "Paginated record of all mining seen by an observer",
    "method": "get",
    "parameters": [
      {
        "description": "A mining observer id",
        "in": "path",
        "name": "observer_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporation/{corporation_id}/mining/observers/{observer_id}/",
    "scope": "esi-industry.read_corporation_mining.v1",
    "summary": "Observed corporation mining",
    "version": "v1"
  },
  "corporations_corporation": {
    "description": "Public information about a corporation",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE corporation ID",
        "in": "path",
        "name": "corporation_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/",
    "summary": "Get corporation information",
    "version": "v4"
  },
  "corporations_corporation_alliancehistory": {
    "description": "Get a list of all the alliances a corporation has been a member of",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE corporation ID",
        "in": "path",
        "name": "corporation_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/alliancehistory/",
    "summary": "Get alliance history",
    "version": "v2"
  },
  "corporations_corporation_assets": {
    "description": "Return a list of the corporation assets",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/assets/",
    "scope": "esi-assets.read_corporation_assets.v1",
    "summary": "Get corporation assets",
    "version": "v4"
  },
  "corporations_corporation_assets_locations": {
    "description": "Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)",
    "method": "post",
    "parameters": [
      {
        "description": "A list of item ids",
        "in": "body",
        "name": "item_ids",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/assets/locations/",
    "scope": "esi-assets.read_corporation_assets.v1",
    "summary": "Get corporation asset locations",
    "version": "v2"
  },
  "corporations_corporation_assets_names": {
    "description": "Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships",
    "method": "post",
    "parameters": [
      {
        "description": "A list of item ids",
        "in": "body",
        "name": "item_ids",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/assets/names/",
    "scope": "esi-assets.read_corporation_assets.v1",
    "summary": "Get corporation asset names",
    "version": "v1"
  },
  "corporations_corporation_blueprints": {
    "description": "Returns a list of blueprints the corporation owns",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/blueprints/",
    "scope": "esi-corporations.read_blueprints.v1",
    "summary": "Get corporation blueprints",
    "version": "v2"
  },
  "corporations_corporation_bookmarks": {
    "description": "A list of your corporation's bookmarks",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/bookmarks/",
    "scope": "esi-bookmarks.read_corporation_bookmarks.v1",
    "summary": "List corporation bookmarks",
    "version": "v1"
  },
  "corporations_corporation_bookmarks_folders": {
    "description": "A list of your corporation's bookmark folders",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/bookmarks/folders/",
    "scope": "esi-bookmarks.read_corporation_bookmarks.v1",
    "summary": "List corporation bookmark folders",
    "version": "v1"
  },
  "corporations_corporation_contacts": {
    "description": "Return contacts of a corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/contacts/",
    "scope": "esi-corporations.read_contacts.v1",
    "summary": "Get corporation contacts",
    "version": "v2"
  },
  "corporations_corporation_contacts_labels": {
    "description": "Return custom labels for a corporation's contacts",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/contacts/labels/",
    "scope": "esi-corporations.read_contacts.v1",
    "summary": "Get corporation contact labels",
    "version": "v1"
  },
  "corporations_corporation_containers_logs": {
    "description": "Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/containers/logs/",
    "scope": "esi-corporations.read_container_logs.v1",
    "summary": "Get all corporation ALSC logs",
    "version": "v2"
  },
  "corporations_corporation_contracts": {
    "description": "Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \"in_progress\".",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/contracts/",
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "Get corporation contracts",
    "version": "v1"
  },
  "corporations_corporation_contracts_contract_bids": {
    "description": "Lists bids on a particular auction contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/contracts/{contract_id}/bids/",
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "Get corporation contract bids",
    "version": "v1"
  },
  "corporations_corporation_contracts_contract_items": {
    "description": "Lists items of a particular contract",
    "method": "get",
    "parameters": [
      {
        "description": "ID of a contract",
        "in": "path",
        "name": "contract_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/contracts/{contract_id}/items/",
    "scope": "esi-contracts.read_corporation_contracts.v1",
    "summary": "Get corporation contract items",
    "version": "v1"
  },
  "corporations_corporation_customs_offices": {
    "description": "List customs offices owned by a corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/customs_offices/",
    "scope": "esi-planets.read_customs_offices.v1",
    "summary": "List corporation customs offices",
    "version": "v1"
  },
  "corporations_corporation_divisions": {
    "description": "Return corporation hangar and wallet division names, only show if a division is not using the default name",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/divisions/",
    "scope": "esi-corporations.read_divisions.v1",
    "summary": "Get corporation divisions",
    "version": "v1"
  },
  "corporations_corporation_facilities": {
    "description": "Return a corporation's facilities",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/facilities/",
    "scope": "esi-corporations.read_facilities.v1",
    "summary": "Get corporation facilities",
    "version": "v1"
  },
  "corporations_corporation_fw_stats": {
    "description": "Statistics about a corporation involved in faction warfare",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/fw/stats/",
    "scope": "esi-corporations.read_fw_stats.v1",
    "summary": "Overview of a corporation involved in faction warfare",
    "version": "v1"
  },
  "corporations_corporation_icons": {
    "description": "Get the icon urls for a corporation",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE corporation ID",
        "in": "path",
        "name": "corporation_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/icons/",
    "summary": "Get corporation icon",
    "version": "v1"
  },
  "corporations_corporation_industry_jobs": {
    "description": "List industry jobs run by a corporation",
    "method": "get",
    "parameters": [
      {
        "description": "Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days",
        "in": "query",
        "name": "include_completed",
        "type": "boolean",
        "required": false
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/industry/jobs/",
    "scope": "esi-industry.read_corporation_jobs.v1",
    "summary": "List corporation industry jobs",
    "version": "v1"
  },
  "corporations_corporation_killmails_recent": {
    "description": "Get a list of a corporation's kills and losses going back 90 days",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/killmails/recent/",
    "scope": "esi-killmails.read_corporation_killmails.v1",
    "summary": "Get a corporation's recent kills and losses",
    "version": "v1"
  },
  "corporations_corporation_medals": {
    "description": "Returns a corporation's medals",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/medals/",
    "scope": "esi-corporations.read_medals.v1",
    "summary": "Get corporation medals",
    "version": "v1"
  },
  "corporations_corporation_medals_issued": {
    "description": "Returns medals issued by a corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/medals/issued/",
    "scope": "esi-corporations.read_medals.v1",
    "summary": "Get corporation issued medals",
    "version": "v1"
  },
  "corporations_corporation_members": {
    "description": "Return the current member list of a corporation, the token's character need to be a member of the corporation.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/members/",
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "Get corporation members",
    "version": "v3"
  },
  "corporations_corporation_members_limit": {
    "description": "Return a corporation's member limit, not including CEO himself",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/members/limit/",
    "scope": "esi-corporations.track_members.v1",
    "summary": "Get corporation member limit",
    "version": "v1"
  },
  "corporations_corporation_members_titles": {
    "description": "Returns a corporation's members' titles",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/members/titles/",
    "scope": "esi-corporations.read_titles.v1",
    "summary": "Get corporation's members' titles",
    "version": "v1"
  },
  "corporations_corporation_membertracking": {
    "description": "Returns additional information about a corporation's members which helps tracking their activities",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/membertracking/",
    "scope": "esi-corporations.track_members.v1",
    "summary": "Track corporation members",
    "version": "v1"
  },
  "corporations_corporation_orders": {
    "description": "List open market orders placed on behalf of a corporation",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/orders/",
    "scope": "esi-markets.read_corporation_orders.v1",
    "summary": "List open orders from a corporation",
    "version": "v3"
  },
  "corporations_corporation_orders_history": {
    "description": "List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/orders/history/",
    "scope": "esi-markets.read_corporation_orders.v1",
    "summary": "List historical orders from a corporation",
    "version": "v2"
  },
  "corporations_corporation_roles": {
    "description": "Return the roles of all members if the character has the personnel manager role or any grantable role.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/roles/",
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "Get corporation member roles",
    "version": "v1"
  },
  "corporations_corporation_roles_history": {
    "description": "Return how roles have changed for a coporation's members, up to a month",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/roles/history/",
    "scope": "esi-corporations.read_corporation_membership.v1",
    "summary": "Get corporation member roles history",
    "version": "v1"
  },
  "corporations_corporation_shareholders": {
    "description": "Return the current shareholders of a corporation.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/shareholders/",
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Get corporation shareholders",
    "version": "v1"
  },
  "corporations_corporation_standings": {
    "description": "Return corporation standings from agents, NPC corporations, and factions",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/standings/",
    "scope": "esi-corporations.read_standings.v1",
    "summary": "Get corporation standings",
    "version": "v1"
  },
  "corporations_corporation_starbases": {
    "description": "Returns list of corporation starbases (POSes)",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/starbases/",
    "scope": "esi-corporations.read_starbases.v1",
    "summary": "Get corporation starbases (POSes)",
    "version": "v1"
  },
  "corporations_corporation_starbases_starbase": {
    "description": "Returns various settings and fuels of a starbase (POS)",
    "method": "get",
    "parameters": [
      {
        "description": "The solar system this starbase (POS) is located in,",
        "in": "query",
        "name": "system_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "An EVE starbase (POS) ID",
        "in": "path",
        "name": "starbase_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/starbases/{starbase_id}/",
    "scope": "esi-corporations.read_starbases.v1",
    "summary": "Get starbase (POS) detail",
    "version": "v1"
  },
  "corporations_corporation_structures": {
    "description": "Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/structures/",
    "scope": "esi-corporations.read_structures.v1",
    "summary": "Get corporation structures",
    "version": "v3"
  },
  "corporations_corporation_titles": {
    "description": "Returns a corporation's titles",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/titles/",
    "scope": "esi-corporations.read_titles.v1",
    "summary": "Get corporation titles",
    "version": "v1"
  },
  "corporations_corporation_wallets": {
    "description": "Get a corporation's wallets",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/{corporation_id}/wallets/",
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Returns a corporation's wallet balance",
    "version": "v1"
  },
  "corporations_corporation_wallets_division_journal": {
    "description": "Retrieve the given corporation's wallet journal for the given division going 30 days back",
    "method": "get",
    "parameters": [
      {
        "description": "Wallet key of the division to fetch journals from",
        "in": "path",
        "name": "division",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/wallets/{division}/journal/",
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Get corporation wallet journal",
    "version": "v4"
  },
  "corporations_corporation_wallets_division_transactions": {
    "description": "Get wallet transactions of a corporation",
    "method": "get",
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
      }
    ],
    "path": "/{version}/corporations/{corporation_id}/wallets/{division}/transactions/",
    "scope": "esi-wallet.read_corporation_wallets.v1",
    "summary": "Get corporation wallet transactions",
    "version": "v1"
  },
  "corporations_npccorps": {
    "description": "Get a list of npc corporations",
    "method": "get",
    "parameters": [],
    "path": "/{version}/corporations/npccorps/",
    "summary": "Get npc corporations",
    "version": "v1"
  },
  "dogma_attributes": {
    "description": "Get a list of dogma attribute ids",
    "method": "get",
    "parameters": [],
    "path": "/{version}/dogma/attributes/",
    "summary": "Get attributes",
    "version": "v1"
  },
  "dogma_attributes_attribute": {
    "description": "Get information on a dogma attribute",
    "method": "get",
    "parameters": [
      {
        "description": "A dogma attribute ID",
        "in": "path",
        "name": "attribute_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/dogma/attributes/{attribute_id}/",
    "summary": "Get attribute information",
    "version": "v1"
  },
  "dogma_dynamic_items_type_item": {
    "description": "Returns info about a dynamic item resulting from mutation with a mutaplasmid.",
    "method": "get",
    "parameters": [
      {
        "description": "type_id integer",
        "in": "path",
        "name": "type_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "item_id integer",
        "in": "path",
        "name": "item_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/dogma/dynamic/items/{type_id}/{item_id}/",
    "summary": "Get dynamic item information",
    "version": "v1"
  },
  "dogma_effects": {
    "description": "Get a list of dogma effect ids",
    "method": "get",
    "parameters": [],
    "path": "/{version}/dogma/effects/",
    "summary": "Get effects",
    "version": "v1"
  },
  "dogma_effects_effect": {
    "description": "Get information on a dogma effect",
    "method": "get",
    "parameters": [
      {
        "description": "A dogma effect ID",
        "in": "path",
        "name": "effect_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/dogma/effects/{effect_id}/",
    "summary": "Get effect information",
    "version": "v2"
  },
  "eve_search": {
    "description": "Search for entities that match a given sub-string.",
    "method": "get",
    "parameters": [
      {
        "description": "The string to search on",
        "in": "query",
        "name": "search",
        "type": "string",
        "required": true
      },
      {
        "description": "Type of entities to search for",
        "in": "query",
        "name": "categories",
        "type": "array",
        "items": {
          "type": "string"
        },
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
      }
    ],
    "path": "/{version}/search/",
    "summary": "Search on a string",
    "version": "v2"
  },
  "eve_status": {
    "description": "EVE Server status",
    "method": "get",
    "parameters": [],
    "path": "/{version}/status/",
    "summary": "Retrieve the uptime and player counts",
    "version": "v1"
  },
  "fleets_fleet": {
    "description": "Return details about a fleet",
    "method": "get",
    "parameters": [
      {
        "description": "ID for a fleet",
        "in": "path",
        "name": "fleet_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/fleets/{fleet_id}/",
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Get fleet information",
    "version": "v1"
  },
  "fleets_fleet_members": {
    "description": "Return information about fleet members",
    "method": "get",
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
      }
    ],
    "path": "/{version}/fleets/{fleet_id}/members/",
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Get fleet members",
    "version": "v1"
  },
  "fleets_fleet_wings": {
    "description": "Return information about wings in a fleet",
    "method": "get",
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
      }
    ],
    "path": "/{version}/fleets/{fleet_id}/wings/",
    "scope": "esi-fleets.read_fleet.v1",
    "summary": "Get fleet wings",
    "version": "v1"
  },
  "fw_leaderboards": {
    "description": "Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/leaderboards/",
    "summary": "List of the top factions in faction warfare",
    "version": "v1"
  },
  "fw_leaderboards_characters": {
    "description": "Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/leaderboards/characters/",
    "summary": "List of the top pilots in faction warfare",
    "version": "v1"
  },
  "fw_leaderboards_corporations": {
    "description": "Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/leaderboards/corporations/",
    "summary": "List of the top corporations in faction warfare",
    "version": "v1"
  },
  "fw_stats": {
    "description": "Statistical overviews of factions involved in faction warfare",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/stats/",
    "summary": "An overview of statistics about factions involved in faction warfare",
    "version": "v1"
  },
  "fw_systems": {
    "description": "An overview of the current ownership of faction warfare solar systems",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/systems/",
    "summary": "Ownership of faction warfare systems",
    "version": "v2"
  },
  "fw_wars": {
    "description": "Data about which NPC factions are at war",
    "method": "get",
    "parameters": [],
    "path": "/{version}/fw/wars/",
    "summary": "Data about which NPC factions are at war",
    "version": "v1"
  },
  "incursions": {
    "description": "Return a list of current incursions",
    "method": "get",
    "parameters": [],
    "path": "/{version}/incursions/",
    "summary": "List incursions",
    "version": "v1"
  },
  "industry_facilities": {
    "description": "Return a list of industry facilities",
    "method": "get",
    "parameters": [],
    "path": "/{version}/industry/facilities/",
    "summary": "List industry facilities",
    "version": "v1"
  },
  "industry_systems": {
    "description": "Return cost indices for solar systems",
    "method": "get",
    "parameters": [],
    "path": "/{version}/industry/systems/",
    "summary": "List solar system cost indices",
    "version": "v1"
  },
  "insurance_prices": {
    "description": "Return available insurance levels for all ship types",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/insurance/prices/",
    "summary": "List insurance levels",
    "version": "v1"
  },
  "killmails_killmail_killmail_hash": {
    "description": "Return a single killmail from its ID and hash",
    "method": "get",
    "parameters": [
      {
        "description": "The killmail ID to be queried",
        "in": "path",
        "name": "killmail_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "The killmail hash for verification",
        "in": "path",
        "name": "killmail_hash",
        "type": "string",
        "required": true
      }
    ],
    "path": "/{version}/killmails/{killmail_id}/{killmail_hash}/",
    "summary": "Get a single killmail",
    "version": "v1"
  },
  "loyalty_stores_corporation_offers": {
    "description": "Return a list of offers from a specific corporation's loyalty store",
    "method": "get",
    "parameters": [
      {
        "description": "An EVE corporation ID",
        "in": "path",
        "name": "corporation_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/loyalty/stores/{corporation_id}/offers/",
    "summary": "List loyalty store offers",
    "version": "v1"
  },
  "markets_groups": {
    "description": "Get a list of item groups",
    "method": "get",
    "parameters": [],
    "path": "/{version}/markets/groups/",
    "summary": "Get item groups",
    "version": "v1"
  },
  "markets_groups_market_group": {
    "description": "Get information on an item group",
    "method": "get",
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
      }
    ],
    "path": "/{version}/markets/groups/{market_group_id}/",
    "summary": "Get item group information",
    "version": "v1"
  },
  "markets_prices": {
    "description": "Return a list of prices",
    "method": "get",
    "parameters": [],
    "path": "/{version}/markets/prices/",
    "summary": "List market prices",
    "version": "v1"
  },
  "markets_region_history": {
    "description": "Return a list of historical market statistics for the specified type in a region",
    "method": "get",
    "parameters": [
      {
        "description": "Return statistics for this type",
        "in": "query",
        "name": "type_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Return statistics in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/markets/{region_id}/history/",
    "summary": "List historical market statistics in a region",
    "version": "v1"
  },
  "markets_region_orders": {
    "description": "Return a list of orders in a region",
    "method": "get",
    "parameters": [
      {
        "description": "Return orders in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      },
      {
        "description": "Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders",
        "in": "query",
        "name": "order_type",
        "type": "string",
        "required": true
      },
      {
        "description": "Return orders only for this type",
        "in": "query",
        "name": "type_id",
        "type": "integer",
        "required": false
      }
    ],
    "path": "/{version}/markets/{region_id}/orders/",
    "summary": "List orders in a region",
    "version": "v1"
  },
  "markets_region_types": {
    "description": "Return a list of type IDs that have active orders in the region, for efficient market indexing.",
    "method": "get",
    "parameters": [
      {
        "description": "Return statistics in this region",
        "in": "path",
        "name": "region_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/markets/{region_id}/types/",
    "summary": "List type IDs relevant to a market",
    "version": "v1"
  },
  "markets_structures_structure": {
    "description": "Return all orders in a structure",
    "method": "get",
    "parameters": [
      {
        "description": "Return orders in this structure",
        "in": "path",
        "name": "structure_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/markets/structures/{structure_id}/",
    "scope": "esi-markets.structure_markets.v1",
    "summary": "List orders in a structure",
    "version": "v1"
  },
  "opportunities_groups": {
    "description": "Return a list of opportunities groups",
    "method": "get",
    "parameters": [],
    "path": "/{version}/opportunities/groups/",
    "summary": "Get opportunities groups",
    "version": "v1"
  },
  "opportunities_groups_group": {
    "description": "Return information of an opportunities group",
    "method": "get",
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
      }
    ],
    "path": "/{version}/opportunities/groups/{group_id}/",
    "summary": "Get opportunities group",
    "version": "v1"
  },
  "opportunities_tasks": {
    "description": "Return a list of opportunities tasks",
    "method": "get",
    "parameters": [],
    "path": "/{version}/opportunities/tasks/",
    "summary": "Get opportunities tasks",
    "version": "v1"
  },
  "opportunities_tasks_task": {
    "description": "Return information of an opportunities task",
    "method": "get",
    "parameters": [
      {
        "description": "ID of an opportunities task",
        "in": "path",
        "name": "task_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/opportunities/tasks/{task_id}/",
    "summary": "Get opportunities task",
    "version": "v1"
  },
  "route_origin_destination": {
    "description": "Get the systems between origin and destination",
    "method": "get",
    "parameters": [
      {
        "description": "origin solar system ID",
        "in": "path",
        "name": "origin",
        "type": "integer",
        "required": true
      },
      {
        "description": "destination solar system ID",
        "in": "path",
        "name": "destination",
        "type": "integer",
        "required": true
      },
      {
        "description": "avoid solar system ID(s)",
        "in": "query",
        "name": "avoid",
        "type": "array",
        "items": {
          "type": "integer"
        },
        "required": false
      },
      {
        "description": "connected solar system pairs",
        "in": "query",
        "name": "connections",
        "type": "array",
        "items": {
          "type": "array"
        },
        "required": false
      },
      {
        "description": "route security preference",
        "in": "query",
        "name": "flag",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/route/{origin}/{destination}/",
    "summary": "Get route",
    "version": "v1"
  },
  "sovereignty_campaigns": {
    "description": "Shows sovereignty data for campaigns.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/sovereignty/campaigns/",
    "summary": "List sovereignty campaigns",
    "version": "v1"
  },
  "sovereignty_map": {
    "description": "Shows sovereignty information for solar systems",
    "method": "get",
    "parameters": [],
    "path": "/{version}/sovereignty/map/",
    "summary": "List sovereignty of systems",
    "version": "v1"
  },
  "sovereignty_structures": {
    "description": "Shows sovereignty data for structures.",
    "method": "get",
    "parameters": [],
    "path": "/{version}/sovereignty/structures/",
    "summary": "List sovereignty structures",
    "version": "v1"
  },
  "universe_ancestries": {
    "description": "Get all character ancestries",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/ancestries/",
    "summary": "Get ancestries",
    "version": "v1"
  },
  "universe_asteroid_belts_asteroid_belt": {
    "description": "Get information on an asteroid belt",
    "method": "get",
    "parameters": [
      {
        "description": "asteroid_belt_id integer",
        "in": "path",
        "name": "asteroid_belt_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/asteroid_belts/{asteroid_belt_id}/",
    "summary": "Get asteroid belt information",
    "version": "v1"
  },
  "universe_bloodlines": {
    "description": "Get a list of bloodlines",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/bloodlines/",
    "summary": "Get bloodlines",
    "version": "v1"
  },
  "universe_categories": {
    "description": "Get a list of item categories",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/categories/",
    "summary": "Get item categories",
    "version": "v1"
  },
  "universe_categories_category": {
    "description": "Get information of an item category",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/categories/{category_id}/",
    "summary": "Get item category information",
    "version": "v1"
  },
  "universe_constellations": {
    "description": "Get a list of constellations",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/constellations/",
    "summary": "Get constellations",
    "version": "v1"
  },
  "universe_constellations_constellation": {
    "description": "Get information on a constellation",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/constellations/{constellation_id}/",
    "summary": "Get constellation information",
    "version": "v1"
  },
  "universe_factions": {
    "description": "Get a list of factions",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/factions/",
    "summary": "Get factions",
    "version": "v2"
  },
  "universe_graphics": {
    "description": "Get a list of graphics",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/graphics/",
    "summary": "Get graphics",
    "version": "v1"
  },
  "universe_graphics_graphic": {
    "description": "Get information on a graphic",
    "method": "get",
    "parameters": [
      {
        "description": "graphic_id integer",
        "in": "path",
        "name": "graphic_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/graphics/{graphic_id}/",
    "summary": "Get graphic information",
    "version": "v1"
  },
  "universe_groups": {
    "description": "Get a list of item groups",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/groups/",
    "summary": "Get item groups",
    "version": "v1"
  },
  "universe_groups_group": {
    "description": "Get information on an item group",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/groups/{group_id}/",
    "summary": "Get item group information",
    "version": "v1"
  },
  "universe_ids": {
    "description": "Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours",
    "method": "post",
    "parameters": [
      {
        "description": "The names to resolve",
        "in": "body",
        "name": "names",
        "schema": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "required": true
      },
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/ids/",
    "summary": "Bulk names to IDs",
    "version": "v1"
  },
  "universe_moons_moon": {
    "description": "Get information on a moon",
    "method": "get",
    "parameters": [
      {
        "description": "moon_id integer",
        "in": "path",
        "name": "moon_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/moons/{moon_id}/",
    "summary": "Get moon information",
    "version": "v1"
  },
  "universe_names": {
    "description": "Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions",
    "method": "post",
    "parameters": [
      {
        "description": "The ids to resolve",
        "in": "body",
        "name": "ids",
        "schema": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        },
        "required": true
      }
    ],
    "path": "/{version}/universe/names/",
    "summary": "Get names and categories for a set of IDs",
    "version": "v3"
  },
  "universe_planets_planet": {
    "description": "Get information on a planet",
    "method": "get",
    "parameters": [
      {
        "description": "planet_id integer",
        "in": "path",
        "name": "planet_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/planets/{planet_id}/",
    "summary": "Get planet information",
    "version": "v1"
  },
  "universe_races": {
    "description": "Get a list of character races",
    "method": "get",
    "parameters": [
      {
        "description": "Language to use in the response, takes precedence over Accept-Language",
        "in": "query",
        "name": "language",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/races/",
    "summary": "Get character races",
    "version": "v1"
  },
  "universe_regions": {
    "description": "Get a list of regions",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/regions/",
    "summary": "Get regions",
    "version": "v1"
  },
  "universe_regions_region": {
    "description": "Get information on a region",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/regions/{region_id}/",
    "summary": "Get region information",
    "version": "v1"
  },
  "universe_schematics_schematic": {
    "description": "Get information on a planetary factory schematic",
    "method": "get",
    "parameters": [
      {
        "description": "A PI schematic ID",
        "in": "path",
        "name": "schematic_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/schematics/{schematic_id}/",
    "summary": "Get schematic information",
    "version": "v1"
  },
  "universe_stargates_stargate": {
    "description": "Get information on a stargate",
    "method": "get",
    "parameters": [
      {
        "description": "stargate_id integer",
        "in": "path",
        "name": "stargate_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/stargates/{stargate_id}/",
    "summary": "Get stargate information",
    "version": "v1"
  },
  "universe_stars_star": {
    "description": "Get information on a star",
    "method": "get",
    "parameters": [
      {
        "description": "star_id integer",
        "in": "path",
        "name": "star_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/stars/{star_id}/",
    "summary": "Get star information",
    "version": "v1"
  },
  "universe_stations_station": {
    "description": "Get information on a station",
    "method": "get",
    "parameters": [
      {
        "description": "station_id integer",
        "in": "path",
        "name": "station_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/stations/{station_id}/",
    "summary": "Get station information",
    "version": "v2"
  },
  "universe_structures": {
    "description": "List all public structures",
    "method": "get",
    "parameters": [
      {
        "description": "Only list public structures that have this service online",
        "in": "query",
        "name": "filter",
        "type": "string",
        "required": false
      }
    ],
    "path": "/{version}/universe/structures/",
    "summary": "List all public structures",
    "version": "v1"
  },
  "universe_structures_structure": {
    "description": "Returns information on requested structure if you are on the ACL. Otherwise, returns \"Forbidden\" for all inputs.",
    "method": "get",
    "parameters": [
      {
        "description": "An Eve structure ID",
        "in": "path",
        "name": "structure_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/universe/structures/{structure_id}/",
    "scope": "esi-universe.read_structures.v1",
    "summary": "Get structure information",
    "version": "v2"
  },
  "universe_system_jumps": {
    "description": "Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/system_jumps/",
    "summary": "Get system jumps",
    "version": "v1"
  },
  "universe_system_kills": {
    "description": "Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/system_kills/",
    "summary": "Get system kills",
    "version": "v2"
  },
  "universe_systems": {
    "description": "Get a list of solar systems",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/systems/",
    "summary": "Get solar systems",
    "version": "v1"
  },
  "universe_systems_system": {
    "description": "Get information on a solar system.",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/systems/{system_id}/",
    "summary": "Get solar system information",
    "version": "v4"
  },
  "universe_types": {
    "description": "Get a list of type ids",
    "method": "get",
    "parameters": [],
    "path": "/{version}/universe/types/",
    "summary": "Get types",
    "version": "v1"
  },
  "universe_types_type": {
    "description": "Get information on a type",
    "method": "get",
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
      }
    ],
    "path": "/{version}/universe/types/{type_id}/",
    "summary": "Get type information",
    "version": "v3"
  },
  "wars": {
    "description": "Return a list of wars",
    "method": "get",
    "parameters": [
      {
        "description": "Only return wars with ID smaller than this",
        "in": "query",
        "name": "max_war_id",
        "type": "integer",
        "required": false
      }
    ],
    "path": "/{version}/wars/",
    "summary": "List wars",
    "version": "v1"
  },
  "wars_war": {
    "description": "Return details about a war",
    "method": "get",
    "parameters": [
      {
        "description": "ID for a war",
        "in": "path",
        "name": "war_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/wars/{war_id}/",
    "summary": "Get war information",
    "version": "v1"
  },
  "wars_war_killmails": {
    "description": "Return a list of kills related to a war",
    "method": "get",
    "parameters": [
      {
        "description": "A valid war ID",
        "in": "path",
        "name": "war_id",
        "type": "integer",
        "required": true
      }
    ],
    "path": "/{version}/wars/{war_id}/killmails/",
    "summary": "List kills for a war",
    "version": "v1"
  }
}