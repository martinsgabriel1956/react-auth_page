import React, { useState, useEffect } from "react";

import { GlobalStyles } from "./styles/global";

import { MainHeader } from "./components/MainHeader";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthContext } from "./context/authContext";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLogged = localStorage.getItem("isLoggedIn");
    if (userLogged === "2") setIsLoggedIn(true);
  }, []);

  function handleLogin(email, password) {
    localStorage.setItem("isLoggedIn", "2");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value = {{ isLoggedIn }}>
      <GlobalStyles />
      <MainHeader isAuthenticated={isLoggedIn} onLogout={handleLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Home onLogout={handleLogout} />}
      </main>
    </AuthContext.Provider>
  );
}
