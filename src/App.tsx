import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import Favorites from "./routes/Favorites";
import BookDetails from "./routes/BookDetails";
import Results from "./routes/Results";
import SearchContextProvider from "./contexts/SearchContext";
import ReadingLists from "./routes/ReadingLists";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "book/:bookId",
          element: <BookDetails />,
        },
        {
          path: "/results",
          element: <Results />,
        },
        {
          path: "/readinglists",
          element: <ReadingLists />,
        },
      ],
    },
  ]);
  return (
    <>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
    </>
  );
}

export default App;
