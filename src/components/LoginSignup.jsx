import React, { useState } from "react";

export default function LoginSignup({ onSuccess }) {
  const [action, setAction] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function handleSubmit() {
    setErr("");

    if (action === "signup" && name.trim().length < 2) {
      setErr("Digite seu nome.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErr("Email inválido.");
      return;
    }
    if (password.length < 4) {
      setErr("Senha deve ter pelo menos 4 caracteres.");
      return;
    }

    const userName = action === "signup" ? name : email.split("@")[0];
    onSuccess(userName);
  }

  return (
    <div className="container-auth">
      <div className="header-auth">
        <div className="text-auth">{action === "signup" ? "Sign Up" : "Login"}</div>
        <div className="underline-auth"></div>
      </div>

      <div className="inputs-auth">
        {action !== "login" && (
          <div className="input-auth">
            <div className="icon-circle">👤</div>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input-auth">
          <div className="icon-circle">📧</div>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-auth">
          <div className="icon-circle">🔒</div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {err && <div className="error-text">{err}</div>}

      <div className="submit-container-auth">
        <div
          className={`submit-auth ${action === "signup" ? "" : "gray-auth"}`}
          onClick={() => setAction("signup")}
        >
          Sign Up
        </div>
        <div
          className={`submit-auth ${action === "login" ? "" : "gray-auth"}`}
          onClick={() => setAction("login")}
        >
          Login
        </div>
      </div>

      <div className="action-button" onClick={handleSubmit}>
        {action === "signup" ? "Criar conta" : "Entrar"}
      </div>
    </div>
  );
}
