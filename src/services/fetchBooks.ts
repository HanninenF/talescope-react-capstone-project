export async function fetchBooks(query: string, signal?: AbortSignal) {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

  const response = await fetch(url, { signal });
  console.log(signal);
  if (!response.ok) {
    throw new Error("API-call failed");
  }
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  return data.docs;
}
