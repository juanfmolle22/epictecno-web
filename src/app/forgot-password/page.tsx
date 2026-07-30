"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    setEnviado(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0E14] px-6">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#12161F] p-8">
        <h1 className="mb-6 font-display text-2xl font-semibold text-[#E4E7EC]">
          Recuperar contraseña
        </h1>

        {enviado ? (
          <p className="text-sm text-[#4ADE9C]">
            Si el email existe, te enviamos un link para restablecer tu
            contraseña. Revisa tu bandeja (y spam).
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="mb-1 block font-mono text-xs text-[#E4E7EC]/60">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full rounded-md border border-white/10 bg-[#0B0E14] px-3 py-2 text-sm text-[#E4E7EC] outline-none focus:border-[#5B8CFF]"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B8CFF] font-mono hover:bg-[#5B8CFF]/90"
            >
              {loading ? "Enviando..." : "Enviar link"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}