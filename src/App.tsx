import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import Favorites from "./routes/Favorites";
import BookDetails from "./routes/BookDetails";
import Results from "./routes/Results";
import ReadingLists from "./routes/ReadingLists";
import SearchContextProvider from "./contexts/SearchContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SearchContextProvider>
          <RootLayout />
        </SearchContextProvider>
      ),
      children: [
        {
          path: "/",
          element: <WithSearchLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/results",
              element: <Results />,
            },
          ],
        },
        {
          path: "/library",
          element: <WithoutSearchLayout />,
          children: [
            {
              path: "/favorites",
              element: <Favorites />,
            },
            {
              path: "book/:bookId",
              element: <BookDetails />,
            },
            {
              path: "/readinglists",
              element: <ReadingLists />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
