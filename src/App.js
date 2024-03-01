import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Body from "./components/Body";
import Countries from "./pages/Countris";
import { Navbar } from "./components/Navbar";
import Ecom from "./pages/Ecom";

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "ecom",
        element: <Ecom />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={defaultRouter}></RouterProvider>;
}

export default App;
