import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import AuthContext from './context/AuthContext.jsx';
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
    element: <SigninPage/>,
    path: '/signin',
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
