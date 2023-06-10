import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const authen = localStorage.getItem("isAuthenticated");
    if (authen) setAuthentication(authen);
  }, []);

  const toggleLogin = () => {
    setAuthentication(!isAuthenticated);
    localStorage.setItem("isAuthenticated", isAuthenticated);
  };

  const authContextData = {
    isAuthenticated,
    toggleLogin,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
