import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("ı have a token ", token);
  }, []);

  return (
    <div className="app">{token ? <h1> ı am logged in</h1> : <Login />}</div>
  );
}

export default App;
