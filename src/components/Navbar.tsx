"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, wa } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  const activo = (href: string) =>
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/portfolio" && pathname.startsWith("/proyectos"));

  return (
    <header className="sticky top-0 z-50 border-b border-bruma bg-papel/90 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="contenedor flex h-[4.5rem] items-center justify-between gap-6"
      >
        <Link href="/" onClick={() => setAbierto(false)} className="shrink-0">
          <Image
            src="/logo_epictecno.png"
            alt="Epictecno, desarrollo web"
            width={566}
            height={186}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={activo(link.href) ? "page" : undefined}
                className="rounded-full px-4 py-2 font-medium text-tinta transition-colors hover:bg-bruma aria-[current=page]:bg-tinta aria-[current=page]:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="boton hidden bg-cobalto text-white hover:bg-cobalto-oscuro sm:inline-flex"
          >
            Hablar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="grid size-12 place-items-center rounded-full border border-bruma bg-white lg:hidden"
          >
            {abierto ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-bruma bg-papel lg:hidden">
          <ul className="contenedor flex flex-col py-4">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setAbierto(false)}
                  aria-current={activo(link.href) ? "page" : undefined}
                  className="block border-b border-bruma py-4 font-display text-2xl font-semibold aria-[current=page]:text-cobalto"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="boton w-full bg-cobalto text-white"
              >
                Hablar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
