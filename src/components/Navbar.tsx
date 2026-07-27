"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/servicios", label: "servicios" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/contacto", label: "contacto" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          epic<span className="text-[#5B8CFF]">tecno</span>
          <span className="text-[#4ADE9C]">.</span>
        </Link>

        <ul className="hidden items-center gap-8 font-mono text-sm text-[#E4E7EC]/70 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-[#5B8CFF]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="bg-[#5B8CFF] font-mono text-sm text-white hover:bg-[#5B8CFF]/90"
        >
          <a href="https://wa.me/+34604934086" target="_blank" rel="noopener noreferrer">
            hablemos →
          </a>
        </Button>
      </nav>
    </header>
  );
}