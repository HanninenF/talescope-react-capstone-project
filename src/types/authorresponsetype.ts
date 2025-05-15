export type AuthorDetails = {
  photos: number[];
  key: string;
  bio: string;
  remote_ids: RemoteIds;
  name: string;
  source_records: string[];
  personal_name: string;
  type: Type;
  alternate_names: string[];
  birth_date: string;
  title: string;
  links: Link[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
};

export type RemoteIds = {
  viaf: string;
  goodreads: string;
  storygraph: string;
  isni: string;
  librarything: string;
  amazon: string;
  wikidata: string;
  inventaire: string;
  gnd: string;
  lc_naf: string;
  bookbrainz: string;
  imdb: string;
  musicbrainz: string;
};

export type Type = {
  key: string;
};

export type Link = {
  title: string;
  url: string;
  type: Type2;
};

export type Type2 = {
  key: string;
};

export type Created = {
  type: string;
  value: string;
};

export type LastModified = {
  type: string;
  value: string;
};
