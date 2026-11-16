"use client";

import { useState } from "react";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";
import type { Proyecto } from "@/content/proyectos";
import { SERVICIOS, type TipoId } from "@/content/site";

export function Portafolio({ proyectos }: { proyectos: Proyecto[] }) {
  const [filtro, setFiltro] = useState<TipoId | "todos">("todos");
  const tipos = SERVICIOS.filter((s) => proyectos.some((p) => p.tipo === s.id));
  const visibles =
    filtro === "todos" ? proyectos : proyectos.filter((p) => p.tipo === filtro);

  const chip =
    "min-h-11 rounded-full border border-tinta/20 bg-white px-4 py-2 font-medium transition-colors hover:border-tinta aria-pressed:border-tinta aria-pressed:bg-tinta aria-pressed:text-white";

  return (
    <>
      <div role="group" aria-label="Filtrar por tipo de proyecto" className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={filtro === "todos"}
          onClick={() => setFiltro("todos")}
          className={chip}
        >
          Todos
        </button>
        {tipos.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={filtro === s.id}
            onClick={() => setFiltro(s.id)}
            className={chip}
          >
            {s.titulo}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-tinta-suave">
        {visibles.length === 1 ? "1 proyecto" : `${visibles.length} proyectos`}
      </p>

      <ul className="mt-4 grid gap-6 md:grid-cols-2">
        {visibles.map((p) => (
          <li key={p.slug}>
            <TarjetaProyecto proyecto={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
