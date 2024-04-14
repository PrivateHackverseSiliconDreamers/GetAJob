import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage,{action as loginAction} from './pages/LoginPage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import AuthContext from './context/AuthContext.jsx';
import ForgotPassword, {action as ForgotPasswordAction} from './pages/ForgotPassword.jsx';
import ResetPassword, {action as resetPasswordAction} from './pages/ResetPassword.jsx'

import AuthenticationGuard from './components/authenticationGuard.jsx';

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    element: <LoginPage />,
    path: "/login",
    action:loginAction,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
