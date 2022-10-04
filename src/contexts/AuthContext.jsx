import React,{ createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "",
    userInfo: {}
  });
  const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setAuthState({ token: "", userInfo: {} });
  };
  return (
    <AuthContext.Provider
      value={{ authState, setAuthState, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
