"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { Esquema } from "@/components/Esquema";
import { SERVICIOS, wa, type TipoId } from "@/content/site";

/** Selector de la portada: eliges qué necesitas y el boceto se recoloca. */
export function Lanzador() {
  const [tipo, setTipo] = useState<TipoId>("tienda");
  const servicio = SERVICIOS.find((s) => s.id === tipo)!;

  return (
    <div>
      <div
        role="group"
        aria-label="Qué necesitas"
        className="flex flex-wrap items-center gap-2"
      >
        <span className="mr-1 font-display text-xl font-semibold">Necesito</span>
        {SERVICIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={s.id === tipo}
            onClick={() => setTipo(s.id)}
            className="min-h-11 rounded-full border border-tinta/20 bg-white px-4 py-2 font-medium transition-colors hover:border-tinta aria-pressed:border-tinta aria-pressed:bg-tinta aria-pressed:text-white"
          >
            {s.necesito}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <Esquema tipo={tipo} entrada className="shadow-[0_30px_60px_-30px_rgba(16,22,47,0.45)]" />

        <div
          aria-live="polite"
          className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-bruma md:p-7"
        >
          <h2 className="font-display text-2xl font-semibold md:text-[1.75rem]">
            {servicio.titulo}
          </h2>
          <p className="mt-2 text-tinta-suave">{servicio.resumen}</p>
          <ul className="mt-5 space-y-2.5">
            {servicio.incluye.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-2.5 leading-snug">
                <Check className="mt-0.5 size-5 shrink-0 text-cobalto" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-tinta-suave">
            Trabajamos con {servicio.tecnologias.join(", ")}.
          </p>
          <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
            <a
              href={wa(servicio.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="boton bg-cobalto text-white hover:bg-cobalto-oscuro"
            >
              Pedir presupuesto
            </a>
            <Link
              href={`/servicios#${servicio.id}`}
              className="boton border border-tinta/25 hover:bg-papel"
            >
              Ver el servicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
