import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
