import React, { useState } from "react";
import LoginSignup from "./components/LoginSignup";
import Quiz from "./components/Quiz";

export default function App() {
  const [view, setView] = useState("auth");
  const [user, setUser] = useState(null);

  function handleLogin(name) {
    setUser(name);
    setView("quiz");
  }

  function handleLogout() {
    setUser(null);
    setView("auth");
  }

  return (
    <div className="app-root">
      {view === "auth" ? (
        <LoginSignup onSuccess={handleLogin} />
      ) : (
        <Quiz onLogout={handleLogout} user={user} />
      )}
    </div>
  );
}