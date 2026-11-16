import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM, NAV, SERVICIOS, WHATSAPP_VISIBLE, wa } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-tinta text-white">
      <div className="contenedor grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/epictecno-logo.png"
            alt="Epictecno"
            width={566}
            height={186}
            className="h-11 w-auto invert"
          />
          <p className="mt-5 max-w-xs text-white/70">
            Desarrollo web y programación a medida, con soporte directo en
            América y Europa.
          </p>
        </div>

        <div>
          <h2 className="font-body text-sm font-semibold tracking-normal text-white/60">
            Servicios
          </h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICIOS.map((s) => (
              <li key={s.id}>
                <Link href={`/servicios#${s.id}`} className="hover:underline">
                  {s.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-sm font-semibold tracking-normal text-white/60">
            Epictecno
          </h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-sm font-semibold tracking-normal text-white/60">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp {WHATSAPP_VISIBLE}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram @epic.tecno
              </a>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline">
                Formulario de contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="contenedor py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Epictecno. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
