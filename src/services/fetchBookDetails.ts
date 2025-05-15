import extractYearFromDate from "../utils/extractYearFromDate";
import { fetchAuthorNames } from "./fetchAuthorNames";

export type WorkDetails = {
  key: string;
  title: string;
  cover_i?: number;
  author_name: string[];
  first_publish_year?: number; // Från SearchContext
  edition_year?: number; // Från /works/:id
};
export async function fetchBookDetails(bookId: string): Promise<WorkDetails> {
  const url = `/api/works/${bookId}.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch book details");
  }

  const data = await response.json();
  const authorNames = data.authors
    ? await fetchAuthorNames(data.authors)
    : ["Unknown"];

  return {
    key: `/works/${bookId}`,
    title: data.title,
    cover_i: data.covers?.[0],
    author_name: authorNames,
    edition_year: extractYearFromDate(data.first_publish_date),
  };
}
