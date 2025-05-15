export const getImageUrl = (
  coverId: number | undefined,
  size: "S" | "M" | "L" = "M"
): string => {
  const fallbackId = 10909258; // Open Librarys "no cover available"-bild
  const idToUse = coverId ?? fallbackId;
  return `https://covers.openlibrary.org/b/id/${idToUse}-${size}.jpg`;
};
