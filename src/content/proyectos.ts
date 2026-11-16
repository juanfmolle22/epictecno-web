import type { TipoId } from "./site";

export type Proyecto = {
  slug: string;
  titulo: string;
  tipo: TipoId;
  sector: string;
  resumen: string;
  reto: string;
  solucion: string[];
  tecnologias: string[];
  url?: string;
  /** Imagen en /public/proyectos/. Si falta, se dibuja el esquema del tipo. */
  imagen?: string;
  destacado?: boolean;
  /**
   * true = ficha de muestra, se ve con la etiqueta "Ejemplo".
   * Sustituye estas fichas por proyectos reales y quita la marca.
   */
  ejemplo?: boolean;
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "tienda-moda-woocommerce",
    titulo: "Tienda de moda con WooCommerce",
    tipo: "tienda",
    sector: "Moda y complementos",
    resumen:
      "Catálogo con tallas y colores, pago con tarjeta y envíos calculados por zona.",
    reto: "Vender un catálogo con muchas variantes sin que la gestión de stock se vuelva un trabajo a jornada completa.",
    solucion: [
      "Fichas de producto con variantes de talla y color y stock por variante",
      "Pago con tarjeta y envío calculado según destino",
      "Filtros de catálogo rápidos en móvil",
      "Emails de pedido con la imagen de la marca",
    ],
    tecnologias: ["WordPress", "WooCommerce", "PHP"],
    destacado: true,
    ejemplo: true,
  },
  {
    slug: "sistema-inventario",
    titulo: "Sistema de inventario y ventas",
    tipo: "sistema",
    sector: "Comercio minorista",
    resumen:
      "Panel interno para controlar stock, entradas, salidas y ventas por tienda.",
    reto: "Sustituir varias hojas de cálculo por una sola herramienta que todo el equipo use desde el móvil o el ordenador.",
    solucion: [
      "Alta de productos, entradas y salidas con historial",
      "Usuarios con permisos distintos por tienda",
      "Avisos de stock bajo",
      "Informes de ventas exportables",
    ],
    tecnologias: ["Laravel", "PHP", "MySQL"],
    destacado: true,
    ejemplo: true,
  },
  {
    slug: "web-corporativa-servicios",
    titulo: "Web corporativa para empresa de servicios",
    tipo: "web",
    sector: "Servicios profesionales",
    resumen:
      "Web de presentación con páginas de servicio, formulario y contacto por WhatsApp.",
    reto: "Explicar con claridad una oferta de servicios amplia y conseguir que el visitante pida presupuesto.",
    solucion: [
      "Una página por servicio con su propio formulario",
      "Gestor de contenidos para editar textos y fotos",
      "Optimización de velocidad y SEO técnico",
      "Analítica de contactos recibidos",
    ],
    tecnologias: ["WordPress", "JavaScript"],
    destacado: true,
    ejemplo: true,
  },
  {
    slug: "integracion-pagos-crm",
    titulo: "Integración de pagos y CRM",
    tipo: "integracion",
    sector: "Formación online",
    resumen:
      "Los pagos de la web crean el cliente en el CRM y envían la confirmación sin intervención manual.",
    reto: "Eliminar el paso de copiar a mano cada venta de la pasarela de pago al CRM y al email.",
    solucion: [
      "Webhooks de la pasarela de pago procesados en un servicio propio",
      "Alta y actualización automática del contacto en el CRM",
      "Confirmación por email y WhatsApp",
      "Registro de errores con reintentos",
    ],
    tecnologias: ["Node.js", "REST", "Webhooks"],
    ejemplo: true,
  },
  {
    slug: "migracion-prestashop",
    titulo: "Migración y puesta a punto de PrestaShop",
    tipo: "mejora",
    sector: "Alimentación",
    resumen:
      "Cambio de servidor, actualización de versión y mejora de tiempos de carga.",
    reto: "Una tienda lenta y desactualizada que no podía parar de vender durante el cambio.",
    solucion: [
      "Copia completa y entorno de pruebas antes de tocar nada",
      "Actualización de PrestaShop y de sus módulos",
      "Migración al nuevo servidor sin perder pedidos",
      "Optimización de imágenes y caché",
    ],
    tecnologias: ["PrestaShop", "PHP", "MySQL"],
    ejemplo: true,
  },
  {
    slug: "tienda-shopify",
    titulo: "Tienda Shopify para marca propia",
    tipo: "tienda",
    sector: "Cosmética",
    resumen:
      "Tema personalizado, suscripciones de producto y envíos internacionales.",
    reto: "Lanzar una marca nueva con una tienda que el equipo pudiera gestionar sin perfil técnico.",
    solucion: [
      "Tema adaptado a la identidad de la marca",
      "Compra recurrente por suscripción",
      "Tarifas de envío por país",
      "Formación al equipo en el panel de Shopify",
    ],
    tecnologias: ["Shopify", "Liquid", "JavaScript"],
    ejemplo: true,
  },
];

export function getProyecto(slug: string) {
  return PROYECTOS.find((p) => p.slug === slug);
}
