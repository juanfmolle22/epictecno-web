import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Cierre } from "@/components/Cierre";
import { Esquema } from "@/components/Esquema";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";
import { getProyecto, PROYECTOS } from "@/content/proyectos";
import { SERVICIOS } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROYECTOS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) return {};
  return { title: proyecto.titulo, description: proyecto.resumen };
}

export default async function ProyectoPage({ params }: Props) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) notFound();

  const servicio = SERVICIOS.find((s) => s.id === proyecto.tipo)!;
  const otros = PROYECTOS.filter((p) => p.slug !== proyecto.slug).slice(0, 2);

  return (
    <>
      <article className="contenedor pb-20 pt-10 md:pb-28 md:pt-14">
        <Link
          href="/portfolio"
          className="inline-flex min-h-11 items-center gap-2 font-medium text-tinta-suave hover:text-tinta"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Volver al portafolio
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link
            href={`/servicios#${servicio.id}`}
            className="rounded-full bg-tinta px-3 py-1 text-sm font-semibold text-white"
          >
            {servicio.titulo}
          </Link>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-bruma">
            {proyecto.sector}
          </span>
          {proyecto.ejemplo && (
            <span className="rounded-full bg-llama px-3 py-1 text-sm font-semibold text-tinta">
              Ejemplo
            </span>
          )}
        </div>

        <h1 className="titular mt-5 max-w-5xl">{proyecto.titulo}</h1>
        <p className="mt-6 max-w-2xl text-xl text-tinta-suave">
          {proyecto.resumen}
        </p>

        <div className="mt-12">
          {proyecto.imagen ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={proyecto.imagen}
              alt={`Captura de ${proyecto.titulo}`}
              className="w-full rounded-3xl ring-1 ring-bruma"
            />
          ) : (
            <Esquema tipo={proyecto.tipo} className="mx-auto max-w-4xl" />
          )}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr_0.8fr]">
          <section>
            <h2 className="text-2xl font-semibold">El reto</h2>
            <p className="mt-4">{proyecto.reto}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Lo que construimos</h2>
            <ul className="mt-4 space-y-2.5">
              {proyecto.solucion.map((item) => (
                <li key={item} className="flex gap-2.5 leading-snug">
                  <Check className="mt-0.5 size-5 shrink-0 text-cobalto" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Tecnologías</h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {proyecto.tecnologias.map((t) => (
                <li key={t} className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-bruma">
                  {t}
                </li>
              ))}
            </ul>
            {proyecto.url && (
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="boton mt-6 bg-tinta text-white"
              >
                Visitar el proyecto
              </a>
            )}
          </section>
        </div>

        <section className="mt-20 border-t border-tinta pt-12">
          <h2 className="subtitular">Más proyectos.</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {otros.map((p) => (
              <li key={p.slug}>
                <TarjetaProyecto proyecto={p} />
              </li>
            ))}
          </ul>
        </section>
      </article>

      <Cierre
        titulo="¿Necesitas algo parecido? Lo hablamos."
        mensaje={`Hola Epictecno, he visto el proyecto "${proyecto.titulo}" y necesito algo parecido.`}
      />
    </>
  );
}
