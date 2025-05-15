import { AuthorDetails } from "../types/authorresponsetype";

export async function fetchAuthorDetails(
  authorId: string
): Promise<AuthorDetails | null> {
  try {
    console.log("Author ID:", authorId);
    console.log(
      "Fetching:",
      `https://openlibrary.org/authors/${authorId}.json`
    );

    const response = await fetch(
      `https://openlibrary.org/authors/${authorId}.json`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: AuthorDetails = await response.json();
    console.log("authorData: ", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch author details:", error);
    return null;
  }
}
