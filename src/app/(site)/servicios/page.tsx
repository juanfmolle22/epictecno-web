import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Cierre } from "@/components/Cierre";
import { Esquema } from "@/components/Esquema";
import { SERVICIOS, wa } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web y programación",
  description:
    "Tiendas online, webs corporativas, aplicaciones a medida, integraciones con APIs y mantenimiento. Qué incluye cada servicio y con qué tecnologías trabajamos.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="contenedor pb-10 pt-12 md:pt-20">
        <h1 className="titular max-w-4xl">Servicios.</h1>
        <p className="mt-6 max-w-2xl text-xl text-tinta-suave">
          Cinco formas de trabajar contigo. Si tu proyecto mezcla varias, lo
          tratamos como uno solo, con un único interlocutor.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {SERVICIOS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-tinta/20 bg-white px-4 py-2 font-medium hover:border-tinta"
              >
                {s.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="contenedor pb-20 md:pb-28">
        {SERVICIOS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="grid scroll-mt-28 gap-8 border-t border-tinta py-14 md:py-20 lg:grid-cols-2 lg:gap-16"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <h2 className="subtitular">{s.titulo}</h2>
              <p className="mt-5 text-lg">{s.detalle}</p>
              <h3 className="mt-8 font-body text-base font-semibold tracking-normal text-tinta-suave">
                Qué incluye
              </h3>
              <ul className="mt-3 space-y-2.5">
                {s.incluye.map((item) => (
                  <li key={item} className="flex gap-2.5 leading-snug">
                    <Check className="mt-0.5 size-5 shrink-0 text-cobalto" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-body text-base font-semibold tracking-normal text-tinta-suave">
                Tecnologías
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.tecnologias.map((t) => (
                  <li key={t} className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-bruma">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={wa(s.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="boton mt-8 bg-cobalto text-white hover:bg-cobalto-oscuro"
              >
                Pedir presupuesto
              </a>
            </div>
            <Esquema tipo={s.id} className="self-start lg:sticky lg:top-28" />
          </section>
        ))}
      </div>

      <Cierre titulo="¿No sabes en cuál encaja tu proyecto? Lo vemos juntos." />
    </>
  );
}
