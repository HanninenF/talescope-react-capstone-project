# 🔧 Features och implementation

### 📚 **Sökfunktioner och visning**

- 🔍 Sök efter böcker baserat på titel, författare eller allmänt sökord.
- 🔍 Sök efter författare med hjälp av namn.
- 🧾 Visa detaljerad information om en bok via `BookDetails`.
- 🧔‍♂️ Visa detaljerad information om en författare i en modal.
- 📕 Visa bokomslag och metadata (titel, författare) i ett bokkort.
- 🧾 Visa metadata om en bok även i detaljvy, med år och omslag.
- 🔀 Visa olika vyer med React Router (home, results, details, favorites, reading list).

---

### ⭐ **Favorit- och läslistor**

- ❤️ Favoritmarkera en författare.
- 💔 Ta bort en författare från favoriter.
- 📃 Lista alla favoritförfattare.
- 📚 Lägg till en bok i din läslista.
- ❌ Ta bort en bok från läslistan.
- 🎯 Visa alla böcker som finns i läslistan.
- ✅ Markera en bok som "finished".
- ▶️ Markera en bok som "reading".
- 🔄 Ta bort lässtatus från en bok.

---

### 🎯 **Rating & interaktivitet**

- ⭐ Sätt ett betyg mellan 1–5 på en läst bok.
- 🔁 Uppdatera betyget på en bok i läslistan.
- 📊 Visa ett betyg visuellt med stjärnor.
- 📍 Visa statusindikatorer visuellt för varje bok (reading, finished).
- 🔁 Visa statusindikator på både bokkort och detaljvy.

---

### 📈 **Aggregerad data & summering**

- 🧮 Visa antal favoritförfattare.
- 📊 Visa total mängd verk bland favoritförfattare.
- 📉 Visa medelantal verk bland favoritförfattare.

---

### 💾 **State & logik**

- 🌐 Global state-hantering med Context API för:

  - Sökresultat (SearchContext)
  - Laddningstillstånd (LoadingContext)
  - Läslistan (ReadingListContext)
  - Favoritförfattare (AuthorFavoritesContext)

- ⏳ Använder `useDebounce` för att fördröja API-anrop tills användaren slutat skriva.
- 💡 Lagrar sökresultat i `localStorage` för snabbare access.
- ❌ Hanterar abortsignal för att avbryta gamla API-anrop.
- 🚨 Felhantering vid API-anrop med fallback och användarfeedback.

---

### ⚙️ **Övriga features**

- 💅 Alla komponenter är stylade med SCSS-moduler.
- 📱 Responsiv design implementerad med SCSS-mixins och breakpoints.
- 🧠 Koden använder strikt typning med TypeScript överallt.
- 🔁 Utility-funktioner används för att extrahera årtal, mappa data, och identifiera typer.
- 🔄 Återanvändbara komponenter som `BookCard`, `BookMetadata`, `ReadingStatusIndicator`.
- 🧪 Type guards (`isExtendedDoc`) för att validera data från API\:t.
- 🔧 Projektspecifik proxy-konfiguration i `vite.config.ts` för att undvika CORS-problem.
- 📁 Snygg och tydlig mappstruktur med `components`, `widgets`, `hooks`, `contexts`, `services`, `routes`, `config`, `utils`.

* ✨ Hover animations on book cards and header menu items for enhanced interactivity.
* ✨ Smooth transition effects for header and card elements for better user experience.

---
