import { Doc, Root } from "../types/authorresponsetype";

export async function searchAuthorByName(name: string): Promise<Doc | null> {
  try {
    const query = encodeURIComponent(name.trim());
    const response = await fetch(
      `https://openlibrary.org/search/authors.json?q=${query}`
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Failed to search author. Status: ${response.status}. Message: ${text}`
      );
    }
    const data: Root = await response.json();
    console.log(
      "full author datalink",
      `https://openlibrary.org/search/authors.json?q=${query}`
    );
    if (!data.docs || data.docs.length === 0) {
      console.warn("No author found with name:", name);
      return null;
    }

    const match = data.docs.reduce((mostWorks, current) => {
      return current.work_count > (mostWorks?.work_count || 0)
        ? current
        : mostWorks;
    });

    const authorKey = match?.key?.replace("/authors/", "");
    console.log("den här exakta författaren hittades", match);
    console.log("searchAuthorByNameKey: ", authorKey);
    return match ?? null;
  } catch (error) {
    console.error("Error searching for author by name:", error);
    return null;
  }
}
