export async function fetchAuthorNames(
  authors: { author: { key: string } }[]
): Promise<string[]> {
  const names = await Promise.all(
    authors.map(async ({ author }) => {
      const res = await fetch(`/api${author.key}.json`);
      if (!res.ok) return "Unknown";
      const data = await res.json();
      return data.name || "Unknown";
    })
  );
  return names;
}
