import type { MetadataRoute } from "next";
import { PROYECTOS } from "@/content/proyectos";

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? "https://epictecno.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/servicios", "/portfolio", "/nosotros", "/contacto"];
  return [
    ...rutas.map((r) => ({ url: `${BASE}${r}` })),
    ...PROYECTOS.map((p) => ({ url: `${BASE}/proyectos/${p.slug}` })),
  ];
}
