"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email o contraseña incorrectos");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0E14] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-white/10 bg-[#12161F] p-8"
      >
        <h1 className="mb-6 font-display text-2xl font-semibold text-[#E4E7EC]">
          Acceso admin
        </h1>

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

        <label className="mb-1 block font-mono text-xs text-[#E4E7EC]/60">
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-md border border-white/10 bg-[#0B0E14] px-3 py-2 text-sm text-[#E4E7EC] outline-none focus:border-[#5B8CFF]"
          required
        />

        {error && (
          <p className="mb-4 text-sm text-red-400">{error}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5B8CFF] font-mono hover:bg-[#5B8CFF]/90"
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <p className="mt-4 text-center text-sm text-[#E4E7EC]/60">
  <a href="/forgot-password" className="text-[#5B8CFF] hover:underline">
    ¿Olvidaste tu contraseña?
  </a>
</p>
      </form>
    </main>
  );
}