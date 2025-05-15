import { ExtendedDoc } from "../types/OpenLibrarySearchResponse";

export function isExtendedDoc(obj: any): obj is ExtendedDoc {
  return (
    obj &&
    typeof obj === "object" &&
    "edition_count" in obj &&
    "has_fulltext" in obj &&
    "public_scan_b" in obj &&
    "edition_year" in obj
  );
}
//följande funktion tar emot ett obj av vilken typ som helst, och returnerar true om Objectet är Doc, annars false. obj är truthy, alltså att obj är någonting och inte null. obj är av typen object. edition_count, has_fulltext mm finns som nyckel i obj.
