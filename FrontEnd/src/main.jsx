import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/user/LoginPage.jsx';
import SigninPage from './pages/user/SigninPage.jsx';
import AuthContext from './context/AuthContext.jsx';
import ForgotPassword, {action as ForgotPasswordAction} from './pages/user/ForgotPassword.jsx';
import ResetPassword, {action as resetPasswordAction} from './pages/user/ResetPassword.jsx'

import AuthenticationGuard from './components/authenticationGuard.jsx';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    element: <LoginPage />,
    path: "/login",
    errorElement: <ErrorPage />,
  },
  {
    element: <SigninPage />,
    path: '/signin',
    errorElement: <ErrorPage />,
  },
  {
    element: <ForgotPassword />,
    path: '/request-reset-password',
    action:ForgotPasswordAction,
    errorElement: <ErrorPage />,
  },
  {
    element: <ResetPassword />,
    path: '/confirm-reset-password',
    action:resetPasswordAction
  },
  {
    element: <AuthenticationGuard Component={HomePage} />,
    path: '/home',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
