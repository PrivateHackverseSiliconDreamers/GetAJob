import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage,{action as loginAction} from "./pages/LoginPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import Authentication from "./context/authentication.jsx";
import AuthenticationGuard from "./components/authenticationGuard.jsx";

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    element: <LoginPage />,
    path: "/login",
    action:loginAction,
    errorElement: <ErrorPage />,
  },
  {
    element: <AuthenticationGuard component= {SigninPage} />,
    path: "/signin",
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authentication>
    <RouterProvider router={router} />
  </Authentication>
);
