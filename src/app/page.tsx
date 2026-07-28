import { Navbar } from "@/components/Navbar";
import { CodeWindow } from "@/components/CodeWindow";
import { buttonVariants } from "@/components/ui/button";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-16 px-6 pt-24 md:flex-row md:gap-12">
        <div className="max-w-xl">
          <p className="mb-4 font-mono text-sm text-[#4ADE9C]">
            // desarrollo web &amp; apis
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Construimos la presencia digital de tu negocio,{" "}
            <span className="text-[#5B8CFF]">
              línea por línea
            </span>.
          </h1>

          <p className="mt-6 text-lg text-[#E4E7EC]/70">
            Sitios web modernos, tiendas virtuales e integración de APIs,
            hechos a medida — con soporte directo en América y Europa.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://wa.me/34604934086"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                className: "bg-[#5B8CFF] font-mono hover:bg-[#5B8CFF]/90",
              })}
            >
              Cuéntame tu proyecto
            </a>

            <a
              href="/portfolio"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-white/10 font-mono text-[#E4E7EC] hover:bg-white/5",
              })}
            >
              Ver portfolio
            </a>
          </div>
        </div>

        <CodeWindow />
      </main>
       <Services />
    </>
  );
}