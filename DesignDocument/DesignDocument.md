# 📘 Talescope – Design- och Utvecklingslogg

### 📅 Datum: 2025-04-14

🖌️ **Design / UI**  
_Inget arbete inom detta delområde idag._

💻 **Teknisk implementation**  
_Startade upp projektstrukturen för Talescope i React med TypeScript och Sass._

🔧 **Funktionalitet**  
_Inget arbete inom detta delområde idag._

🐞 **Buggar / Problem**  
_Ingen konkret bugg idag, men testade git rm --cached för en .md-fil som inte fanns – lärde mig att Git ignorerar korrekt om filen inte redan är trackad._

💭 **Reflektion / Lärdomar**  
_Bra att förbereda tomma filer för att snabbt kunna växla till implementation.
Gick igenom och planerade hur projektets struktur ska se ut, inklusive mappar för components/, features/, hooks/, services/, types/ och styles/. Tänkte igenom vilka komponenter som ska finnas i varje del och hur de kan återanvändas. Den här strukturen kommer att hjälpa mig att jobba mer effektivt och få bättre överblick när implementationen drar igång._

✅ **Nästa steg**  
_Designa i Figma_

---

### 📅 Datum: 2025-04-16

🖌️ **Design / UI**  
_Inget arbete inom detta delområde idag._

💻 **Teknisk implementation**  
_Skapade Header.tsx med navigation till Home och Favorites, och lade till den i RootLayout.tsx.
Byggde också upp projektets mappstruktur i src/ med components/, hooks/, services/, types/, styles/, router/ och layout/._

🔧 **Funktionalitet**  
_Navigationen fungerar och växlar vyer enligt routing._

🐞 **Buggar / Problem**  
_Inga problem idag._

💭 **Reflektion / Lärdomar**  
_Känns bra att få en tydlig struktur på plats direkt – det gör det lättare att bygga vidare utan att det blir rörigt. Jag fick också repetera hur <Link> fungerar i react-router-dom._

✅ **Nästa steg**  
_Sätta upp variables.scss med färgtema, spacing och typsnitt samt skapa routes.tsx och koppla ihop routing i App.tsx._

---

### 📅 Datum: 2025-04-17

🖌️ **Design / UI**  
_Satte upp variables.scss med färger, typsnitt och spacing för att skapa en enhetlig, återanvändbar designgrund som följer projektets varumärkesprofil. Använde en varm färgpalett som reflekterar Talescopes boktema._

💻 **Teknisk implementation**  
_Konfigurerade routes.tsx med createBrowserRouter och strukturerade upp sidnavigeringen med en RootLayout. Implementerade RouterProvider i App.tsx för att koppla samman routing med sidkomponenterna._

🔧 **Funktionalitet**  
_Routing mellan startsida, sökresultat, bokdetaljer, favoriter och läslista implementerades. Grunden för navigering är nu på plats._

🐞 **Buggar / Problem**  
_Inga problem uppstod under arbetet._

💭 **Reflektion / Lärdomar**  
_Att skapa en central variables.scss gav tydlig kontroll över designens färg och spacing, vilket gör komponentutveckling snabbare. Routing med createBrowserRouter kändes logiskt och enkelt att följa upp med sidkomponenter._

✅ **Nästa steg**  
_Skriva SearchContext för att hantera global state kring söksträng, resultat, laddning och felmeddelanden_

---

### 📅 Datum: 2025-04-22

🖌️ **Design / UI**  
_Skapade ett tydligt flödesschema i Figma för hela sökflödet – från SearchBar till fetchBooks.
Färgkodade logik för lyckade och misslyckade anrop._

💻 **Teknisk implementation**  
_Skapade fetchBooks i services/ med AbortController och error handling.
Skapade useFetchBooks i hooks/ för att hantera API-anrop och state (books, isLoading, error).
Implementerade useDebounce för att minska onödiga anrop vid varje knapptryck._

🔧 **Funktionalitet**  
_Kopplade ihop debounced söksträng med API-anrop.
Uppdatering av results sker endast om books ändras._

🐞 **Buggar / Problem**  
_Tidigare onödiga API-anrop löstes med debounce._

💭 **Reflektion / Lärdomar**  
_Repeterat hur try/catch/finally påverkar flödet. För att undvika att ett API-anrop triggas vid varje tangentnedslag finns flera tillvägagångssätt, beroende på om man vill ha livesök eller inte. Det här har gett mig möjlighet att fördjupa mig i olika lösningar för effektiv och användarvänlig sökfunktionalitet._

✅ **Nästa steg**  
_Nästa steg blir att fördjupa mig i API:ets dokumentation för att bättre förstå vilka möjligheter och begränsningar som finns, och hur jag kan utnyttja dess endpoints mer effektivt_

---

### 📅 Datum: 2025-04-23

🖌️ **Design / UI**  
_Inget arbete inom detta delområde idag._

💻 **Teknisk implementation**  
_Gick igenom hur man hanterar select-element i React. Implementerade en kontrollerad komponent där värdet styrs av state (category)._

🔧 **Funktionalitet**  
_Dropdownen för kategori fungerar nu som en kontrollerad komponent med korrekt hantering av användarens val._

🐞 **Buggar / Problem**  
_Inga buggar idag, men diskussion om förväxling mellan defaultValue och value förtydligades._

💭 **Reflektion / Lärdomar**  
_Förstod skillnaden mellan kontrollerade och okontrollerade komponenter i React, och hur man korrekt hanterar formulärfält som select._

✅ **Nästa steg**  
_Fortsätta sätta mig in i API-dokumentationen för att förbereda framtida funktionalitet och integration._

---

### 📅 Datum: 2025-04-24

🖌️ **Design / UI**  
_Stylat sökfältet (searchBar) i projektet. Implementerat en @mixin kallad searchBarBase i SCSS för att kunna återanvända samma stylingmönster på flera delar av sökfältet, såsom select, input och sökknappen. Använde SCSS-variabler från variables.scss för färger och fontstorlek._

💻 **Teknisk implementation**  
_Inget arbete inom detta delområde idag._

🔧 **Funktionalitet**  
_Inget arbete inom detta delområde idag._

🐞 **Buggar / Problem**  
_Inga buggar idag._

💭 **Reflektion / Lärdomar**  
_Lärde mig att för att få till rätt border-radius och rundade hörn visuellt, måste man styla border och border-radius direkt på komponenterna (select, input, button) istället för på wrappern runt dem._

✅ **Nästa steg**

##### 📚 Skapa BookCard.tsx

- _Skapa en visuell komponent som visar bokdata i ett kort._
- _Lägga BookCard.tsx i widgets/._
- _Visa titel, författare och bild-placeholder._
- _Typa propsen korrekt med Book._
- _Styla komponenten med en card-liknande design._

---

### 📅 Datum: 2025-04-28

🖌️ **Design / UI**  
_Arbetade med strukturen för att skapa en enhetlig layout, men inga större designförändringar gjordes för tillfället._

💻 **Teknisk implementation**  
_Skapade BookCard- och BookList-komponenterna för att visa böcker och länka till deras detaljsidor, samt uppdaterade URL-strukturen i routes. La till ResultsWrapper för att styla sökresultaten. Dynamiska URL:er och rutter implementerades för att länka till varje bokdetalj._

🔧 **Funktionalitet**  
_BookCard-komponenten länkar till varje bokdetalj baserat på en dynamisk URL. BookList-komponenten renderar böckerna i en lista. URL:erna är dynamiska och varje bok har en unik länk till sin detaljsida._

🐞 **Buggar / Problem**  
_useSearchParams gav ett fel eftersom min SearchContextProvider låg utanför en Router. Jag löste det genom att wrappa min RootLayout-komponent med SearchContextProvider för att säkerställa att kontexten kapslades in inom routern._

💭 **Reflektion / Lärdomar**  
_Arbetade med att strukturera om URL:erna och gjorde dem dynamiska för att stödja unika detaljsidor per bok. Lärde mig mer om hantering av dynamiska rutter och URL-parametrar._

✅ **Nästa steg**  
_Skapa BookInfo-komponenten som visar detaljerad information på BookDetails, som är en dedikerad detaljsida för varje bok med en unik URL._

---

### 📅 Datum: 2025-04-29

🖌️ **Design / UI**  
_Inget arbete inom detta delområde idag._

💻 **Teknisk implementation**  
_Gjort klart BookInfo-komponenten samt skapat en LoadingContext. Har implementerat contexten i BookInfo, men ännu inte kopplat den till själva API-anropet._

🔧 **Funktionalitet**  
_Förberett global hantering av laddningstillstånd genom LoadingContext._

🐞 **Buggar / Problem**  
_Bråkade med att min context försvann när jag laddade om den unika URL:en för ett specifikt bokkort. Fick lära mig att det beror på brist på persistens i frontend-state, och att jag behöver implementera localStorage för att lösa det._

💭 **Reflektion / Lärdomar**  
_Förstått att globalt state försvinner vid sidladdning om det inte finns persistens. localStorage är en bra lösning när man inte har en backend._

✅ **Nästa steg**  
_Implementera LoadingContext i själva API-anropet för att hantera laddningstillstånd globalt._

---

### 📅 Datum: 2025-04-30

🖌️ **Design / UI**  
_Inget arbete inom detta delområde idag._

💻 **Teknisk implementation**  
_Förbättrade `BookInfo` så den söker efter boken i tre steg:_

1. _`SearchContext.results`,_
2. _`localStorage` (per query och kategori),_
3. _(förberett men avkommenterat) API-fallback._  
   _Flyttade även `LoadingContextProvider` runt hela appen för att säkerställa global tillgång till loading-state._

🔧 **Funktionalitet**  
_Gjorde `BookInfo` mer robust så den inte förlitar sig enbart på `SearchContext`, vilket löste buggar som uppstod vid direktnavigering till detaljsidan._

🐞 **Buggar / Problem**  
_Upptäckte att `SearchContext.results` ibland var tomt vid direktladdning eller bakåt-navigering. Problemet låg i att `useFetchBooks` inte hunnit hämta data än p.g.a. `debouncedQuery`. Loader flashade till onödigt vid back-navigering._

💭 **Reflektion / Lärdomar**  
_Insåg att problemet inte låg i `BookInfo`, utan i `SearchContext`-timingen. Blev en bra påminnelse om hur asynkron state och mount-timing kan orsaka subtila buggar. Genom att använda `localStorage` per query/kategori kunde jag undvika onödiga nätverksanrop och visa data snabbare._

✅ **Nästa steg**  
_reflektion och testning_

---

### 📅 Datum: 2025-05-01

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-02

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-03

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-04

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-05

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-06

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-07

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-08

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-09

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-10

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-11

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-12

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-13

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-14

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-15

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---

### 📅 Datum: 2025-05-16

🖌️ **Design / UI**  
_Beskriv vad du gjort designmässigt den här dagen._

💻 **Teknisk implementation**  
_Beskriv vad du kodat eller strukturerat._

🔧 **Funktionalitet**  
_Vilka funktioner har du byggt eller förberett?_

🐞 **Buggar / Problem**  
_Problem du stött på – och ev. lösningar._

💭 **Reflektion / Lärdomar**  
_Vad tänkte du på? Vad lärde du dig?_

✅ **Nästa steg**  
_Vad tänker du göra imorgon eller nästa gång?_

---
