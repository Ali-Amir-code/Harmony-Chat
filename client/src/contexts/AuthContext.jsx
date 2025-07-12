// AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedInStatus] = useState(false);
  const [user, setUser]= useState({});
  const updateLoginStatus = (status) => setLoggedInStatus(status);


  return (
    <AuthContext.Provider value={{ isLoggedIn, updateLoginStatus, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
