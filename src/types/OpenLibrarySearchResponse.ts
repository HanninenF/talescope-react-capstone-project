export type Root = {
  numFound: number; // Antal träffar totalt för sökningen
  start: number; // Startindex för träffarna (t.ex. vid paginering)
  numFoundExact: boolean; // Om antalet träffar är exakt (true) eller uppskattat (false)

  documentation_url: string; // URL till API-dokumentationen
  q: string; // Din sökfråga (query)
  offset: any; // Offset för fler träffar (kan vara null)
  docs: Doc[]; // Lista med träffar (böcker)
};

export type Doc = {
  author_key?: string[]; // Unika ID:n för författarna
  author_name?: string[]; // Namn på författarna
  cover_edition_key?: string; // ID för utgåvan som har ett omslag
  cover_i?: number; // ID för att hämta en bild på omslaget
  edition_count: number; // Hur många utgåvor det finns av boken
  first_publish_year?: number; // Första publiceringsåret
  has_fulltext: boolean; // Om det finns en fulltextversion tillgänglig
  ia?: string[]; // Lista med ID:n för Internet Archive-filer
  ia_collection_s?: string; // Namn på Internet Archive-samlingar
  key: string; // Unikt ID för verket (/works/xxxx)
  language?: string[]; // Språk som verket finns tillgängligt på
  lending_edition_s?: string; // Utgåva som kan lånas på Internet Archive
  lending_identifier_s?: string; // Låne-ID på Internet Archive
  public_scan_b: boolean; // Om det är en offentligt inskannad bok
  title: string; // Bokens titel
  subtitle?: string; // Undertitel (om det finns)
};
