"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/login"), 2000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0E14] px-6">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#12161F] p-8">
        <h1 className="mb-6 font-display text-2xl font-semibold text-[#E4E7EC]">
          Nueva contraseña
        </h1>

        {success ? (
          <p className="text-sm text-[#4ADE9C]">
            Contraseña actualizada. Redirigiendo al login...
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="mb-1 block font-mono text-xs text-[#E4E7EC]/60">
              Nueva contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 w-full rounded-md border border-white/10 bg-[#0B0E14] px-3 py-2 text-sm text-[#E4E7EC] outline-none focus:border-[#5B8CFF]"
              required
              minLength={8}
            />
            {error && <p className="mb-4 text-sm text-red-400">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B8CFF] font-mono hover:bg-[#5B8CFF]/90"
            >
              {loading ? "Guardando..." : "Guardar contraseña"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}