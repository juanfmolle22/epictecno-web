import Link from "next/link";
import { wa } from "@/content/site";

/** Bloque final de llamada a la acción, compartido por todas las páginas. */
export function Cierre({
  titulo = "Cuéntanos qué necesitas y preparamos tu propuesta.",
  mensaje,
}: {
  titulo?: string;
  mensaje?: string;
}) {
  return (
    <section className="contenedor pb-20 md:pb-28">
      <div className="rounded-[2rem] bg-cobalto px-6 py-14 text-white md:px-14 md:py-20">
        <h2 className="subtitular max-w-3xl">{titulo}</h2>
        <p className="mt-5 max-w-xl text-lg text-white/85">
          Escríbenos por WhatsApp o déjanos los detalles en el formulario.
          Recibirás una propuesta con alcance, precio y fechas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={wa(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="boton bg-white text-tinta hover:bg-papel"
          >
            Hablar por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="boton border border-white/50 text-white hover:bg-white/10"
          >
            Ir al formulario
          </Link>
        </div>
      </div>
    </section>
  );
}
