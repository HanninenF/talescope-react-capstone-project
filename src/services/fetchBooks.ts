import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Root } from "../types/OpenLibrarySearchResponse";

export async function fetchBooks(
  query: string,
  category: string,
  signal?: AbortSignal
) {
  const url =
    category !== "all"
      ? `https://openlibrary.org/search.json?${category}=${encodeURIComponent(query)}`
      : `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

  console.log("🔍 API URL:", url);

  /*  const response = await fetch(url, { signal }); */

  const response = await new Promise<Response>(
    (resolve) => setTimeout(() => fetch(url, { signal }).then(resolve), 2000) // Simulerar 2 sekunders fördröjning
  );

  console.log(signal);
  if (!response.ok) {
    throw new Error("API-call failed");
  }
  console.log("response", response);
  const data = (await response.json()) as Root;
  console.log("data", data);
  return data.docs;
}
