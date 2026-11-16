// Se ejecuta antes de `next build`. Aplica las migraciones pendientes y carga
// los proyectos iniciales. Sin DATABASE_URL no hace nada.
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const raiz = path.resolve(import.meta.dirname, "..");

if (!process.env.DATABASE_URL) {
  console.warn("[preparar-bd] Sin DATABASE_URL: se omiten migraciones e importación.");
  process.exit(0);
}

execSync("npx prisma migrate deploy", { stdio: "inherit", cwd: raiz });

const { PrismaClient } = await import("@prisma/client");
const prisma = new PrismaClient();

try {
  const iniciales = JSON.parse(
    readFileSync(path.join(raiz, "prisma", "proyectos-iniciales.json"), "utf8"),
  );
  const rutaLocal = (slug, tipo) => {
    const archivo = `epictecno-${slug}-${tipo}.webp`;
    return existsSync(path.join(raiz, "public", "proyectos", archivo))
      ? `/proyectos/${archivo}`
      : null;
  };

  // 1. Alta inicial: solo si la tabla está vacía, para no resucitar
  //    proyectos que se hayan borrado desde el panel.
  if ((await prisma.proyecto.count()) === 0) {
    for (const p of iniciales) {
      await prisma.proyecto.create({
        data: {
          slug: p.slug,
          titulo: p.titulo,
          categoria: p.categoria,
          sector: p.sector,
          resumen: p.resumen,
          descripcion: p.descripcion,
          tecnologias: p.tecnologias,
          destacado: p.destacado,
          publicado: p.publicado,
          orden: p.orden,
          imagenUrl: rutaLocal(p.slug, "portada"),
          imagenCompletaUrl: rutaLocal(p.slug, "completa"),
        },
      });
    }
    console.log(`[preparar-bd] ${iniciales.length} proyectos importados.`);
  }

  // 2. Completa las imágenes de los proyectos importados que aún no tengan.
  const sinImagen = await prisma.proyecto.findMany({
    where: { imagenUrl: null, slug: { in: iniciales.map((p) => p.slug) } },
    select: { id: true, slug: true },
  });
  let completados = 0;
  for (const p of sinImagen) {
    const portada = rutaLocal(p.slug, "portada");
    if (!portada) continue;
    await prisma.proyecto.update({
      where: { id: p.id },
      data: { imagenUrl: portada, imagenCompletaUrl: rutaLocal(p.slug, "completa") },
    });
    completados++;
  }
  if (completados) console.log(`[preparar-bd] Imágenes asignadas a ${completados} proyectos.`);
} finally {
  await prisma.$disconnect();
}
