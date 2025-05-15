export default function extractYearFromDate(
  dateString: string | undefined
): number | undefined {
  if (!dateString) return undefined;
  const match = dateString.match(/\b(1[5-9]\d{2}|20\d{2})\b/); // fångar årtal mellan 1500–2099
  return match ? parseInt(match[1], 10) : undefined;
}
