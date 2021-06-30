import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export function AuthContextProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLogged = localStorage.getItem("isLoggedIn");
    if (userLogged === "2") setIsLoggedIn(true);
  }, []);

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "2");
    setIsLoggedIn(true);
  }
  
  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return(
    <AuthContext.Provider value={{isLoggedIn, onLogout: handleLogout, onLogin: handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
}