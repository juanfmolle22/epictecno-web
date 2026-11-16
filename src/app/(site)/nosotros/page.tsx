import type { Metadata } from "next";
import { Cierre } from "@/components/Cierre";
import { PROCESO, TECNOLOGIAS } from "@/content/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Epictecno es un equipo de desarrolladores y programadores que construye webs, tiendas y sistemas a medida para negocios de América y Europa.",
};

const COMPROMISOS = [
  {
    titulo: "Hablas con quien programa",
    texto:
      "No hay comerciales ni intermediarios. La persona que te atiende por WhatsApp es la que conoce tu proyecto por dentro.",
  },
  {
    titulo: "Precio y fechas por escrito",
    texto:
      "Antes de empezar sabes qué entra, qué no, cuánto cuesta y cuándo lo recibes. Si algo cambia, lo acordamos antes de hacerlo.",
  },
  {
    titulo: "El proyecto es tuyo",
    texto:
      "Código, dominios, cuentas y accesos quedan a tu nombre. Si un día quieres seguir con otro equipo, te lo llevas todo.",
  },
  {
    titulo: "Seguimos ahí después de publicar",
    texto:
      "Una web necesita cuidados. Ofrecemos soporte y mantenimiento para que siga rápida, segura y actualizada.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="contenedor pb-16 pt-12 md:pb-24 md:pt-20">
        <h1 className="titular max-w-5xl">
          Un equipo pequeño de desarrollo, cerca de tu negocio.
        </h1>
        <div className="mt-10 grid gap-8 text-lg md:grid-cols-2 md:gap-14">
          <p>
            Epictecno es un equipo de desarrolladores y programadores. Nos
            dedicamos a una cosa: que los negocios tengan en internet
            herramientas que funcionan, ya sea una tienda que vende, una web que
            trae clientes o un sistema que ahorra horas de trabajo.
          </p>
          <p>
            Trabajamos en remoto con clientes de América y Europa. Elegimos la
            tecnología según el proyecto, no al revés: a veces lo mejor es un
            WordPress bien montado y otras veces hace falta programar desde
            cero.
          </p>
        </div>
      </section>

      <section className="border-y border-bruma bg-white">
        <div className="contenedor py-20 md:py-28">
          <h2 className="subtitular max-w-2xl">
            Lo que puedes esperar de nosotros.
          </h2>
          <ul className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {COMPROMISOS.map((c) => (
              <li key={c.titulo} className="border-t border-tinta pt-5">
                <h3 className="text-2xl font-semibold">{c.titulo}</h3>
                <p className="mt-3 text-tinta-suave">{c.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contenedor py-20 md:py-28">
        <h2 className="subtitular max-w-2xl">Así es un proyecto con Epictecno.</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESO.map((paso, i) => (
            <li key={paso.titulo} className="border-t border-tinta pt-5">
              <span className="font-display text-5xl font-bold text-cobalto">
                {i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{paso.titulo}</h3>
              <p className="mt-3 text-tinta-suave">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-tinta text-white">
        <div className="contenedor py-20 md:py-24">
          <h2 className="subtitular max-w-2xl">Con qué trabajamos.</h2>
          <ul className="mt-10 flex flex-wrap gap-2">
            {TECNOLOGIAS.map((t) => (
              <li key={t} className="rounded-full border border-white/30 px-4 py-2 font-medium">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <Cierre titulo="Pon cara al equipo: escríbenos y hablamos de tu proyecto." />
      </div>
    </>
  );
}
