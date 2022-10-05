/* eslint-disable react/prop-types */
import React,{ createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token') || "",
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    isAuthenticated: localStorage.getItem('token')?true:false,
  });
 
  const logout = () => {
    setAuthState({ token: "", userInfo: {} ,isAuthenticated:false});
    localStorage.clear();
    
  };
  return (
    <AuthContext.Provider
      value={{ authState, setAuthState, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
