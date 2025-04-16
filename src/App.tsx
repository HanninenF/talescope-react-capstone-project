import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      /* children:[{
      index:true,
      element:<Home/>
    }] */
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
