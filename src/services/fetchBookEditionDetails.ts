export async function fetchBookEditionDetails(
  editionId: string
): Promise<number | null> {
  try {
    const response = await fetch(`/api/books/${editionId}.json`);
    console.log("fetchBookEditionDetails-url", `/api/books/${editionId}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch edition details");
    }
    const data = await response.json();
    console.log("fetchBookEditionDetails-data: ", data);
    return typeof data.number_of_pages === "number"
      ? data.number_of_pages
      : null;
  } catch (err) {
    console.error("Error fetching number_of_pages:", err);
    return null;
  }
}
