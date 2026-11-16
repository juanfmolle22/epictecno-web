import type { Metadata } from "next";
import { FormularioContacto } from "@/components/FormularioContacto";
import { INSTAGRAM, WHATSAPP_VISIBLE, wa } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp o por el formulario y recibe una propuesta con alcance, precio y fechas.",
};

export default function ContactoPage() {
  return (
    <section className="contenedor pb-20 pt-12 md:pb-28 md:pt-20">
      <h1 className="titular max-w-4xl">Hablemos de tu proyecto.</h1>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <p className="text-xl text-tinta-suave">
            Lo más rápido es WhatsApp. Si prefieres dejarlo por escrito, usa el
            formulario y te respondemos por email.
          </p>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-3xl bg-tinta p-7 text-white transition-colors hover:bg-cobalto"
          >
            <span className="text-white/70">WhatsApp</span>
            <span className="mt-1 block font-display text-3xl font-semibold md:text-4xl">
              {WHATSAPP_VISIBLE}
            </span>
            <span className="mt-3 block">Abrir conversación</span>
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-3xl bg-white p-7 ring-1 ring-bruma transition-colors hover:ring-tinta"
          >
            <span className="text-tinta-suave">Instagram</span>
            <span className="mt-1 block font-display text-3xl font-semibold">
              @epic.tecno
            </span>
          </a>
        </div>
        <FormularioContacto />
      </div>
    </section>
  );
}
