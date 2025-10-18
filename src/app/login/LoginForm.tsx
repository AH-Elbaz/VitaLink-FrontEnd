"use client";
import { useState } from "react";
import { useAuth } from "@/app/features/auth/hooks/useAuth";

export default function LoginForm() {
  const { login, loading , error } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name, password);
  };

  return (<div
  className="z-10 shadow-lg rounded-lg w-120 p-10 text-center"
  style={{
    background: "var(--vitaneon-glass-base)",
    backdropFilter: "blur(5px)",
    border: "1px solid var(--vitaneon-blue-glow)",
  }}
>
  <h2
    className="text-lg font-semibold mb-4"
    style={{ color: "var(--vitaneon-text-white)" }}
  >
    Welcome back to your health dashboard
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      className="w-full p-2 rounded-lg border focus:outline-none "
      style={{
        background: "transparent",
        borderColor: "var(--vitaneon-blue-glow)",
        color: "var(--vitaneon-text-input)",
      }}
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      className="w-full p-2 rounded-lg border focus:outline-none"
      style={{
        background: "transparent",
        borderColor: "var(--vitaneon-blue-glow)",
        color: "var(--vitaneon-text-input)",
      }}
      placeholder="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      disabled={loading}
      className="py-2 px-8 rounded-lg font-semibold transition-all duration-300 hover:cursor-pointer"
      style={{
        background: "var(--vitaneon-green-cta)",
        color: "var(--vitaneon-dark-background)",
        boxShadow: "0 0 10px var(--vitaneon-green-cta)",
      }}
    >
      {loading ? "Loading..." : "Login"}
    </button>
    {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
  </form>
</div>

    
  );
}
