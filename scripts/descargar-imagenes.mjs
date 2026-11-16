// Descarga las capturas del portafolio antiguo y las guarda optimizadas en
// public/proyectos con nombres propios: epictecno-<slug>-portada.webp y
// epictecno-<slug>-completa.webp. Solo procesa las que faltan.
//   node scripts/descargar-imagenes.mjs
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const raiz = path.resolve(import.meta.dirname, "..");
const destino = path.join(raiz, "public", "proyectos");
const proyectos = JSON.parse(
  readFileSync(path.join(raiz, "prisma", "proyectos-iniciales.json"), "utf8"),
);

const ANCHO = 1200;
const ALTO_PORTADA = 900;
const ALTO_MAXIMO = 7000;

mkdirSync(destino, { recursive: true });
let hechas = 0;
let fallidas = 0;

for (const p of proyectos) {
  const portada = path.join(destino, `epictecno-${p.slug}-portada.webp`);
  const completa = path.join(destino, `epictecno-${p.slug}-completa.webp`);
  if (existsSync(portada) && existsSync(completa)) continue;

  try {
    const res = await fetch(p.origen);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const original = Buffer.from(await res.arrayBuffer());

    const base = await sharp(original, { limitInputPixels: false })
      .resize({ width: ANCHO, withoutEnlargement: true })
      .toBuffer({ resolveWithObject: true });
    const { width, height } = base.info;

    await sharp(base.data)
      .extract({ left: 0, top: 0, width, height: Math.min(height, ALTO_MAXIMO) })
      .webp({ quality: 76 })
      .toFile(completa);

    const altoPortada = Math.round((width * ALTO_PORTADA) / ANCHO);
    await sharp(base.data)
      .extract({ left: 0, top: 0, width, height: Math.min(height, altoPortada) })
      .resize({ width, height: altoPortada, fit: "cover", position: "top" })
      .webp({ quality: 80 })
      .toFile(portada);

    hechas++;
    console.log(`ok     ${p.slug}`);
  } catch (e) {
    fallidas++;
    console.error(`error  ${p.slug}: ${e.message}`);
  }
}

console.log(`\n${hechas} descargadas, ${fallidas} con error.`);
// Un fallo aislado no debe tumbar el proceso: la web dibuja un boceto
// cuando un proyecto no tiene imagen.
