import { useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SigninPage from "./pages/SigninPage.jsx"

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    element:<LoginPage />,
    path:"/login",
    errorElement : <ErrorPage />
  },
  {
    element:<SigninPage />,
    path:"/signgin",
    errorElement : <ErrorPage />
  },
]);

const [user,setUser] = useState("");


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
