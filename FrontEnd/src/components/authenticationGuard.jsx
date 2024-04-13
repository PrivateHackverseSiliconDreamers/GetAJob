import { useAuthentication } from '../context/authentication'
import { Navigate} from 'react-router';

const AuthenticationGuard = ({Component}) => {
/*   const location = useLocation();
 */  const {isAuthenticated} = useAuthentication();
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  
}

export default AuthenticationGuard