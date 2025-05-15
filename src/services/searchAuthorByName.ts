export async function searchAuthorByName(name: string): Promise<string | null> {
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
    const data = await response.json();

    if (!data.docs || data.docs.length === 0) {
      console.warn("No author found with name:", name);
      return null;
    }

    const firstMatch = data.docs[0];
    const authorKey = firstMatch.key?.replace("/authors/", ""); // Säkerställ att du får bara ID:t

    console.log("searchAuthorByNameKey: ", authorKey);
    return authorKey ?? null;
  } catch (error) {
    console.error("Error searching for author by name:", error);
    return null;
  }
}
