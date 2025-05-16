export type Root = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
};

export type Doc = {
  alternate_names?: string[];
  birth_date?: string;
  death_date?: string;
  key: string;
  name: string;
  top_subjects?: string[];
  top_work?: string;
  type: string;
  work_count: number;
  ratings_average: number;
  ratings_sortable: number;
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
  want_to_read_count: number;
  already_read_count: number;
  currently_reading_count: number;
  readinglog_count: number;
  _version_: number;
};

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
  work_count: number;
  top_work: string;
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
