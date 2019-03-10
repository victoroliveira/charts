export interface CrimeserverData {
  attributes: CrimeserverAttributes;
  id: string;
  links: CrimeserverLinks;
  relantionships: CrimeserverRelationships;
  type: string;
}

export interface CrimeserverAttributes {
  at_feed: string;
  at_free_feed: string;
  bots_count: number;
  credentials_count: number;
  credit_cards_count: number;
  crime_server_url: string;
  first_seen: string;
  is_false_positive: boolean;
  last_seen: string;
  main_type: string;
  status: string;
  subtype_name: string;
}

export interface CrimeserverLinks {
  self: string;
}

export interface CrimeserverRelationships {
  fqdn: {
    data: {
      id: string;
      type: string;
    },
    links: {
      related: string;
    }
  };
}
