import type { TipoId } from "./site";

export type Tono = "tinta" | "cobalto" | "llama" | "bruma" | "blanco";

/** [columna, fila, ancho, alto] sobre una rejilla de 12 × 10 */
export type Bloque = {
  pos: [number, number, number, number];
  tono: Tono;
  texto?: string;
};

/**
 * Cada esquema usa los mismos 8 bloques en otra posición, así al cambiar
 * de tipo los bloques se recolocan en lugar de aparecer y desaparecer.
 */
export const ESQUEMAS: Record<TipoId, Bloque[]> = {
  tienda: [
    { pos: [1, 1, 12, 1], tono: "blanco", texto: "Menú y buscador" },
    { pos: [1, 2, 8, 4], tono: "cobalto", texto: "Colección destacada" },
    { pos: [9, 2, 4, 4], tono: "llama", texto: "Oferta" },
    { pos: [1, 6, 3, 4], tono: "blanco", texto: "Producto" },
    { pos: [4, 6, 3, 4], tono: "blanco", texto: "Producto" },
    { pos: [7, 6, 3, 4], tono: "blanco", texto: "Producto" },
    { pos: [10, 6, 3, 2], tono: "bruma", texto: "Envío" },
    { pos: [10, 8, 3, 2], tono: "tinta", texto: "Pagar" },
  ],
  web: [
    { pos: [1, 1, 12, 1], tono: "blanco", texto: "Menú" },
    { pos: [1, 2, 7, 5], tono: "tinta", texto: "Qué haces y para quién" },
    { pos: [8, 2, 5, 5], tono: "cobalto", texto: "Imagen" },
    { pos: [1, 7, 4, 3], tono: "blanco", texto: "Servicio" },
    { pos: [5, 7, 4, 3], tono: "blanco", texto: "Servicio" },
    { pos: [9, 7, 4, 3], tono: "blanco", texto: "Servicio" },
    { pos: [1, 10, 8, 1], tono: "bruma", texto: "Opiniones" },
    { pos: [9, 10, 4, 1], tono: "llama", texto: "Contactar" },
  ],
  sistema: [
    { pos: [1, 1, 2, 10], tono: "tinta", texto: "Menú" },
    { pos: [3, 1, 10, 1], tono: "blanco", texto: "Buscador y usuario" },
    { pos: [3, 2, 3, 2], tono: "blanco", texto: "Pedidos" },
    { pos: [6, 2, 3, 2], tono: "blanco", texto: "Stock" },
    { pos: [9, 2, 4, 2], tono: "cobalto", texto: "Ventas" },
    { pos: [3, 4, 7, 4], tono: "blanco", texto: "Informe mensual" },
    { pos: [10, 4, 3, 4], tono: "llama", texto: "Avisos" },
    { pos: [3, 8, 10, 3], tono: "bruma", texto: "Tabla de registros" },
  ],
  integracion: [
    { pos: [5, 4, 4, 4], tono: "cobalto", texto: "Tu web" },
    { pos: [1, 1, 3, 3], tono: "blanco", texto: "Pagos" },
    { pos: [10, 1, 3, 3], tono: "blanco", texto: "WhatsApp" },
    { pos: [1, 8, 3, 3], tono: "blanco", texto: "CRM" },
    { pos: [10, 8, 3, 3], tono: "blanco", texto: "Facturación" },
    { pos: [1, 5, 3, 2], tono: "llama", texto: "Email" },
    { pos: [10, 5, 3, 2], tono: "tinta", texto: "ERP" },
    { pos: [5, 9, 4, 2], tono: "bruma", texto: "Registro" },
  ],
  mejora: [
    { pos: [1, 1, 12, 1], tono: "blanco", texto: "Tu web actual" },
    { pos: [1, 2, 5, 6], tono: "cobalto", texto: "Velocidad" },
    { pos: [6, 2, 7, 2], tono: "blanco", texto: "Seguridad" },
    { pos: [6, 4, 7, 2], tono: "blanco", texto: "Actualizaciones" },
    { pos: [6, 6, 7, 2], tono: "blanco", texto: "Copias" },
    { pos: [1, 8, 4, 3], tono: "llama", texto: "Errores" },
    { pos: [5, 8, 4, 3], tono: "bruma", texto: "SEO" },
    { pos: [9, 8, 4, 3], tono: "tinta", texto: "Hosting" },
  ],
};
