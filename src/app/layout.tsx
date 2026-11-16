import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://epictecno.com",
  ),
  title: {
    default: "Epictecno | Desarrollo web y programación a medida",
    template: "%s | Epictecno",
  },
  description:
    "Tiendas online, webs corporativas, sistemas a medida e integraciones. Un equipo de desarrollo con soporte directo en América y Europa.",
  openGraph: {
    siteName: "Epictecno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
