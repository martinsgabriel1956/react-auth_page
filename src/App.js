import React, { useContext } from "react";

import { GlobalStyles } from "./styles/global";

import { MainHeader } from "./components/MainHeader";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { AuthContext } from "./context/authContext";

export function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <GlobalStyles />
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}
