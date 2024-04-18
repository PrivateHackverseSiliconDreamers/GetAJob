import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/User/LoginPage';
import SigninPage from './pages/User/SigninPage';
import AuthContext from './context/AuthContext';
import ForgotPassword, {action as ForgotPasswordAction} from './pages/User/ForgotPassword';
import ResetPassword, {action as resetPasswordAction} from './pages/User/ResetPassword'

import AuthenticationGuard from './components/authenticationGuard';
import HomePage from './pages/HomePage';
import CompleteProfile from './pages/User/CompleteProfile';
import AdminLogin from './pages/Admin/AdminLogin';

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
    element: <AdminLogin />,
    path: '/adminAuth',
    action:resetPasswordAction
  },
  {
    element: <AuthenticationGuard Component={HomePage} />,
    path: '/home',
  },
  {
    element: <AuthenticationGuard Component={CompleteProfile} />,
    path: '/user-complete-profile',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
