import { ExtendedDoc, WorkDetails } from "../types/OpenLibrarySearchResponse";

export function mapDocToWorkDetails(doc: ExtendedDoc): WorkDetails {
  return {
    key: doc.key,
    title: doc.title,
    cover_i: doc.cover_i,
    author_name: doc.author_name ?? ["Unknown"],
    first_publish_year:
      typeof doc.first_publish_year === "number"
        ? doc.first_publish_year
        : undefined,
    edition_year:
      typeof doc.edition_year === "number" ? doc.edition_year : undefined,
    cover_edition_key:
      typeof doc.cover_edition_key === "string"
        ? doc.cover_edition_key
        : undefined,
  };
}
