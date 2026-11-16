import type { Metadata } from "next";
import { Cierre } from "@/components/Cierre";
import { Portafolio } from "@/components/Portafolio";
import { PROYECTOS } from "@/content/proyectos";

export const metadata: Metadata = {
  title: "Portafolio de proyectos",
  description:
    "Tiendas online, webs, sistemas a medida e integraciones desarrolladas por Epictecno.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="contenedor pb-20 pt-12 md:pb-28 md:pt-20">
        <h1 className="titular max-w-4xl">Portafolio.</h1>
        <p className="mt-6 max-w-2xl text-xl text-tinta-suave">
          Una selección de proyectos por tipo de trabajo. Abre cualquiera para
          ver el reto, lo que construimos y con qué.
        </p>
        <div className="mt-10">
          <Portafolio proyectos={PROYECTOS} />
        </div>
      </section>
      <Cierre titulo="El siguiente proyecto de esta página puede ser el tuyo." />
    </>
  );
}
