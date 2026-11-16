import Link from "next/link";
import { Esquema } from "@/components/Esquema";
import type { Proyecto } from "@/content/proyectos";

export function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/proyectos/${proyecto.slug}`}
      className="group block rounded-3xl bg-white p-3 ring-1 ring-bruma transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(16,22,47,0.5)]"
    >
      <div className="relative">
        {proyecto.imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={proyecto.imagen}
            alt={`Captura de ${proyecto.titulo}`}
            className="aspect-[16/11] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        ) : (
          <Esquema tipo={proyecto.tipo} etiquetas={false} />
        )}
        {proyecto.ejemplo && (
          <span className="absolute right-3 top-3 rounded-full bg-llama px-3 py-1 text-sm font-semibold text-tinta">
            Ejemplo
          </span>
        )}
      </div>
      <div className="px-3 pb-3 pt-5">
        <p className="text-sm text-tinta-suave">{proyecto.sector}</p>
        <h3 className="mt-1 text-2xl font-semibold group-hover:text-cobalto">
          {proyecto.titulo}
        </h3>
        <p className="mt-2 text-tinta-suave">{proyecto.resumen}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {proyecto.tecnologias.map((t) => (
            <li key={t} className="rounded-full bg-papel px-3 py-1 text-sm font-medium">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
