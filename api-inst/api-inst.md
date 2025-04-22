## 📚 **Översikt: Vad gör varje del?**

| Del                | Ansvar                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔌 `fetchBooks`    | En **ren funktion** som gör själva API-anropet till Open Library                                                                               |
| 🪝 `useFetchBooks` | En **custom hook** som anropar `fetchBooks`, håller koll på loading och error, och returnerar resultaten                                       |
| 🌐 `SearchContext` | En **global state-container** som håller koll på sökordet (`query`) och sparar resultatet (`results`) så att andra komponenter kan använda det |

---

## 🔁 **Vad händer vid en sökning? Steg för steg:**

1. **Användaren skriver något i sökfältet (t.ex. i SearchBar):**

   - `setQuery("hobbit")` anropas
   - `query` i `SearchContext` uppdateras

2. **Eftersom `query` ändras, anropas `useFetchBooks(query)` automatiskt:**

   - Hooken kör sin `useEffect`
   - `fetchBooks("hobbit")` anropas
   - `AbortController` används för att avbryta gammalt anrop om ett nytt kommer in snabbt

3. **I `fetchBooks(query)` sker API-anropet:**

   - URL byggs: `https://openlibrary.org/search.json?q=hobbit`
   - API:et svarar med ett JSON-objekt där resultaten finns i `data.docs`
   - Datan returneras till `useFetchBooks`

4. **`useFetchBooks` uppdaterar sin lokal state:**

   - `setBooks(data.docs)` sparar resultaten lokalt i hooken
   - `setIsLoading(false)` och ev. `setError(...)` uppdateras

5. **I `SearchContext` finns en `useEffect` som lyssnar på `books`:**
   - När `books` ändras i `useFetchBooks`, körs `setResults(books)`
   - Resultaten (`results`) finns nu i `SearchContext` och kan användas globalt i appen

---

## 🔗 **Så här hänger de ihop visuellt:**

```text
SearchBar (användare skriver)
   ↓
setQuery("hobbit") i SearchContext
   ↓
useFetchBooks(query) triggas (i samma SearchContext)
   ↓
fetchBooks() gör API-anrop
   ↓
books → sparas lokalt i useFetchBooks
   ↓
useEffect i SearchContext lyssnar på books
   ↓
setResults(books) → sparas globalt i context
   ↓
Komponenter som använder results kan visa dem (t.ex. <Results />)
```

---

## ✅ Fördelar med detta upplägg:

- 🔁 Reaktiv sökning – varje nytt `query` triggar ny fetch automatiskt
- 🧼 Clean separation – context hanterar state, hook hanterar logik
- 🌍 Global åtkomst till sökresultat – filtrering, delning, återanvändning
- 🧠 Lokal kontroll av loading/error – UI-komponenter kan visa spinners utan att det påverkar hela appen

---

Perfekt, Fredrik! 🙌 Här kommer det du bad om – först en **kommentarsblock** du kan lägga i toppen av `useFetchBooks.ts`, och sedan ett **flödesschema** som visualiserar exakt hur allt hänger ihop från input till API-anrop och global state.

---

## 📝 Kommentar till toppen av `useFetchBooks.ts`

```ts
/**
 * 🔁 useFetchBooks - kopplar ihop ett debounced sökvärde (query)
 * med ett API-anrop till Open Library och returnerar böcker.
 *
 * 👉 Flöde:
 * 1. Tar emot ett sökord (query) som argument – helst ett debounced värde.
 * 2. useEffect triggas när query ändras.
 * 3. Skapar en AbortController för att kunna avbryta gamla anrop.
 * 4. Anropar fetchBooks(query, signal) som gör själva API-anropet.
 * 5. Vid lyckat svar: setBooks(data.docs).
 * 6. Vid fel: hanterar error – men ignorerar aborterade anrop.
 * 7. Avslutar alltid med att sätta isLoading till false.
 * 8. Returnerar { books, isLoading, error } till komponent eller context.
 */
```

---

## 🔁 **Flödesschema: Sökinmatning till contextresultat**

```
[Användare skriver i input]
            ↓
      setQuery("hobbit")  ← (från SearchBar via SearchContext)
            ↓
[query uppdateras i SearchContextProvider]
            ↓
useDebounce(query, 500ms)
            ↓
[debouncedQuery uppdateras]
            ↓
useFetchBooks(debouncedQuery)
            ↓
useEffect i useFetchBooks triggas
            ↓
create AbortController()
            ↓
fetchBooks(query, controller.signal)
            ↓
  ↳ Fetch lyckas?   → setBooks(data.docs)
  ↳ Fetch misslyckas?
     ↳ AbortError?   → ignorera
     ↳ Annat fel?    → setError("Could not fetch books")
            ↓
finally → setIsLoading(false)
            ↓
[books returneras från useFetchBooks]
            ↓
useEffect i SearchContextProvider triggas
            ↓
setResults(books)
            ↓
results är nu globalt tillgängligt i SearchContext
```

---

Vill du att jag lägger in detta flödesschema som kommentar direkt i `SearchContext.tsx` eller hellre som ett separat `.md`-dokument i ditt projekt? 😊
