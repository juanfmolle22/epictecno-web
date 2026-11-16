import Link from "next/link";
import { Cierre } from "@/components/Cierre";
import { Lanzador } from "@/components/Lanzador";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";
import { PROYECTOS } from "@/content/proyectos";
import { PROCESO, SERVICIOS, TECNOLOGIAS } from "@/content/site";

export default function Home() {
  const destacados = PROYECTOS.filter((p) => p.destacado).slice(0, 3);

  return (
    <>
      <section className="contenedor pb-20 pt-12 md:pb-28 md:pt-20">
        <h1 className="titular max-w-5xl">
          Desarrollo web y programación a medida.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-tinta-suave">
          Tiendas online, webs y sistemas hechos por un equipo que te responde
          directamente, en América y Europa. Elige qué necesitas y mira cómo lo
          planteamos.
        </p>
        <div className="mt-10">
          <Lanzador />
        </div>
      </section>

      <section className="border-y border-bruma bg-white">
        <div className="contenedor py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="subtitular max-w-2xl">
              Todo lo que hacemos, de la primera página al último pedido.
            </h2>
            <Link href="/servicios" className="boton border border-tinta/25 hover:bg-papel">
              Ver todos los servicios
            </Link>
          </div>
          <ul className="mt-12 border-t border-tinta">
            {SERVICIOS.map((s) => (
              <li key={s.id} className="border-b border-bruma">
                <Link
                  href={`/servicios#${s.id}`}
                  className="group grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_15rem] md:items-baseline md:gap-8 md:py-7"
                >
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-cobalto md:text-[1.75rem]">
                    {s.titulo}
                  </h3>
                  <p className="text-tinta-suave">{s.resumen}</p>
                  <p className="text-sm font-medium md:text-right">
                    {s.tecnologias.slice(0, 3).join(", ")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contenedor py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="subtitular max-w-2xl">Proyectos recientes.</h2>
          <Link href="/portfolio" className="boton border border-tinta/25 hover:bg-white">
            Ver el portafolio
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {destacados.map((p) => (
            <li key={p.slug}>
              <TarjetaProyecto proyecto={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-tinta text-white">
        <div className="contenedor py-20 md:py-28">
          <h2 className="subtitular max-w-3xl">
            Cómo trabajamos: cuatro pasos y siempre sabes en cuál estás.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESO.map((paso, i) => (
              <li key={paso.titulo} className="border-t border-white/25 pt-5">
                <span className="font-display text-5xl font-bold text-llama">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{paso.titulo}</h3>
                <p className="mt-3 text-white/75">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contenedor py-20 md:py-28">
        <h2 className="subtitular max-w-3xl">
          Las plataformas y lenguajes con los que trabajamos a diario.
        </h2>
        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 font-display text-3xl font-semibold text-tinta/35 md:text-5xl">
          {TECNOLOGIAS.map((t) => (
            <li key={t} className="transition-colors hover:text-cobalto">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <Cierre />
    </>
  );
}
