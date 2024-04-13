import React, {useContext, createContext, useState} from 'react'

const AuthenticationContext = createContext();
export const useAuthentication =  ()=> useContext(AuthenticationContext)
const Authentication = ({children}) => {

  const [user,setUser] = useState(null);
  const [isAuthenticated,setIsAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider value={{isAuthenticated, user,setIsAuthenticated,setUser}}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default Authentication;