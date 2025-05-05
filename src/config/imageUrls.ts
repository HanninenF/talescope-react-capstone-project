export const getImageUrl = (
  coverId: number | undefined,
  size: "S" | "M" | "L" = "M"
) => {
  return coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
    : "https://covers.openlibrary.org/b/id/10909258-L.jpg";
};
