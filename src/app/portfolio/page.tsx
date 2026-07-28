import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/Navbar";

export default async function PortfolioPage() {
  const proyectos = await prisma.proyecto.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        <h1 className="mb-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Portfolio
        </h1>

        {proyectos.length === 0 ? (
          <p className="text-[#E4E7EC]/60">
            Todavía no hay proyectos cargados.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="rounded-xl border border-white/10 bg-[#12161F] p-6"
              >
                <h3 className="font-display text-lg font-semibold">
                  {proyecto.titulo}
                </h3>
                <p className="mt-2 text-sm text-[#E4E7EC]/60">
                  {proyecto.descripcion}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#5B8CFF]/10 px-3 py-1 font-mono text-xs text-[#5B8CFF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}