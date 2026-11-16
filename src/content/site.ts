export const WHATSAPP = "34604934086";
export const WHATSAPP_VISIBLE = "+34 604 934 086";
export const INSTAGRAM = "https://www.instagram.com/epic.tecno";

export function wa(texto = "Hola Epictecno, quiero contaros mi proyecto.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

export const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/nosotros", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export type TipoId = "tienda" | "web" | "sistema" | "integracion" | "mejora";

export type Servicio = {
  id: TipoId;
  /** Texto del selector de la home: completa la frase "Necesito…" */
  necesito: string;
  titulo: string;
  resumen: string;
  detalle: string;
  incluye: string[];
  tecnologias: string[];
  mensaje: string;
};

export const SERVICIOS: Servicio[] = [
  {
    id: "tienda",
    necesito: "una tienda online",
    titulo: "Tiendas online",
    resumen:
      "Catálogo, pagos, envíos y un panel que tu equipo puede manejar sin llamarnos.",
    detalle:
      "Montamos tu tienda en la plataforma que mejor encaja con tu catálogo y tu forma de trabajar. Si ya vendes en otra, la migramos con sus productos, clientes y pedidos.",
    incluye: [
      "Diseño adaptado a tu marca, pensado para móvil",
      "Pasarelas de pago y métodos de envío configurados",
      "Carga inicial de productos, variantes y categorías",
      "Emails de pedido, facturas e impuestos",
      "Formación para gestionar pedidos y stock",
    ],
    tecnologias: ["WooCommerce", "PrestaShop", "Shopify"],
    mensaje: "Hola Epictecno, necesito una tienda online. Os cuento:",
  },
  {
    id: "web",
    necesito: "una web para mi negocio",
    titulo: "Webs corporativas y landing pages",
    resumen:
      "Una web rápida que explica lo que haces y convierte visitas en contactos.",
    detalle:
      "Desde una landing para una campaña hasta la web completa de tu empresa. La entregamos con un gestor de contenidos para que cambies textos, fotos y páginas por tu cuenta.",
    incluye: [
      "Estructura y textos orientados a que te contacten",
      "Diseño propio, sin plantillas recicladas",
      "SEO técnico: velocidad, metadatos y datos estructurados",
      "Formularios, WhatsApp y analítica conectados",
      "Gestor de contenidos fácil de usar",
    ],
    tecnologias: ["WordPress", "Next.js", "React", "Tailwind CSS"],
    mensaje: "Hola Epictecno, necesito una web para mi negocio. Os cuento:",
  },
  {
    id: "sistema",
    necesito: "un sistema a medida",
    titulo: "Aplicaciones y sistemas a medida",
    resumen:
      "Paneles, inventarios, reservas o la herramienta interna que hoy llevas en hojas de cálculo.",
    detalle:
      "Cuando ningún programa del mercado encaja con tu proceso, lo programamos. Empezamos por entender cómo trabajas hoy y construimos solo lo que vas a usar.",
    incluye: [
      "Análisis del proceso y prototipo antes de programar",
      "Usuarios, roles y permisos",
      "Paneles con informes y exportación de datos",
      "Base de datos y copias de seguridad",
      "Código documentado y tuyo",
    ],
    tecnologias: ["Laravel", "PHP", "Node.js", "React", "PostgreSQL", "MySQL"],
    mensaje: "Hola Epictecno, necesito un sistema a medida. Os cuento:",
  },
  {
    id: "integracion",
    necesito: "conectar mis herramientas",
    titulo: "Integraciones y APIs",
    resumen:
      "Tu web, tu tienda, tu CRM y tu facturación compartiendo datos sin copiar y pegar.",
    detalle:
      "Conectamos los programas que ya usas para que los pedidos, clientes y pagos pasen de uno a otro solos. Si un servicio tiene API, lo podemos integrar.",
    incluye: [
      "Pasarelas de pago y suscripciones",
      "WhatsApp, email y notificaciones automáticas",
      "Sincronización con CRM, ERP y facturación",
      "APIs propias para tu app o tus socios",
      "Registro de errores y avisos si algo falla",
    ],
    tecnologias: ["REST", "Webhooks", "Stripe", "PayPal", "WhatsApp API"],
    mensaje: "Hola Epictecno, necesito conectar mis herramientas. Os cuento:",
  },
  {
    id: "mejora",
    necesito: "mejorar la web que ya tengo",
    titulo: "Mantenimiento, migraciones y mejoras",
    resumen:
      "Tu web actual más rápida, segura y al día, sin tener que rehacerla.",
    detalle:
      "Nos hacemos cargo de webs y tiendas que ya existen: arreglamos lo que falla, las aceleramos, las movemos de servidor o añadimos lo que falta.",
    incluye: [
      "Auditoría de velocidad, seguridad y SEO técnico",
      "Corrección de errores y limpieza de malware",
      "Actualizaciones de plataforma, tema y módulos",
      "Migración de hosting o de plataforma",
      "Copias de seguridad y soporte continuo",
    ],
    tecnologias: ["WordPress", "WooCommerce", "PrestaShop", "Laravel"],
    mensaje: "Hola Epictecno, quiero mejorar la web que ya tengo. Os cuento:",
  },
];

export const PROCESO = [
  {
    titulo: "Nos cuentas la idea",
    texto:
      "Una llamada o unos mensajes por WhatsApp para entender tu negocio, qué necesitas y para cuándo.",
  },
  {
    titulo: "Propuesta cerrada",
    texto:
      "Recibes por escrito qué vamos a hacer, cuánto cuesta y en qué fechas. Sin sorpresas después.",
  },
  {
    titulo: "Desarrollo con avances",
    texto:
      "Ves el proyecto crecer en un enlace de pruebas y opinas en cada entrega, no solo al final.",
  },
  {
    titulo: "Lanzamiento y soporte",
    texto:
      "Publicamos, te enseñamos a usarlo y seguimos disponibles para lo que surja.",
  },
];

export const TECNOLOGIAS = [
  "WordPress",
  "WooCommerce",
  "PrestaShop",
  "Shopify",
  "Laravel",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "PostgreSQL",
];
