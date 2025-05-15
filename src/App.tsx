import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import Favorites from "./routes/Favorites";
import BookDetails from "./routes/BookDetails";
import Results from "./routes/Results";
import ReadingLists from "./routes/ReadingList";
import SearchContextProvider from "./contexts/SearchContext";
import WithoutSearchLayout from "./layout/WithoutSearchLayout";
import WithSearchLayout from "./layout/WithSearchLayout";
import { routes } from "./config/routes";
import LoadingContextProvider from "./contexts/LoadingContext";
import { ReadingListContextProvider } from "./contexts/ReadingListContext";
import ReadingList from "./routes/ReadingList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ReadingListContextProvider>
          <LoadingContextProvider>
            <SearchContextProvider>
              <RootLayout />
            </SearchContextProvider>
          </LoadingContextProvider>
        </ReadingListContextProvider>
      ),
      children: [
        {
          path: routes.home,
          element: <WithSearchLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: routes.results,
              element: <Results />,
            },
          ],
        },
        {
          path: "/library",
          element: <WithoutSearchLayout />,
          children: [
            {
              path: routes.favorites,
              element: <Favorites />,
            },
            {
              path: routes.bookDetails,
              element: <BookDetails />,
            },
            {
              path: routes.readingList,
              element: <ReadingList />,
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
