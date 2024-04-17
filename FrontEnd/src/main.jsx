import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/User/LoginPage.jsx';
import SigninPage from './pages/User/SigninPage.jsx';
import AuthContext from './context/AuthContext.jsx';
import ForgotPassword from './pages/User/ForgotPassword.jsx';
import ResetPassword from './pages/User/ResetPassword.jsx';
import CompleteProfile from './pages/User/CompleteProfile.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';

import AuthenticationGuard from './components/authenticationGuard.jsx';

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    element: <LoginPage />,
    path: '/login',
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
    errorElement: <ErrorPage />,
  },
  {
    element: <ResetPassword />,
    path: '/confirm-reset-password',
  },
  {
    element: <CompleteProfile />,
    path: '/user-complete-profile',
  },
  {
    element: <AdminLogin />,
    path: '/adminAuth',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
