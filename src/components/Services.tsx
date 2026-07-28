"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code2, ShoppingCart, Plug } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones a medida, rápidos, responsive y con SEO cuidado desde el primer commit.",
    accent: "#5B8CFF",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Virtuales",
    description:
      "E-commerce completo: catálogo, pagos, gestión de pedidos y panel de administración propio.",
    accent: "#9D7BFF",
  },
  {
    icon: Plug,
    title: "Integración de APIs",
    description:
      "Conecto tu negocio con pasarelas de pago, WhatsApp, CRMs y cualquier servicio externo que necesites.",
    accent: "#4ADE9C",
  },
];

export function Services() {
  const parallaxRef = useParallax(0.08);

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <div ref={parallaxRef} className="will-change-transform">
        <p className="mb-2 font-mono text-sm text-[#4ADE9C]">// qué hago</p>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Servicios
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="border-white/10 bg-[#12161F] transition-colors hover:border-white/20"
            >
              <CardHeader>
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${service.accent}1A` }}
                >
                  <Icon className="h-5 w-5" style={{ color: service.accent }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#E4E7EC]">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#E4E7EC]/60">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}