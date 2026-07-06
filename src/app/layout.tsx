import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Estudio Jurídico Martin Barbaricca & Asociados | Mar del Plata",
  description: "Estudio Jurídico en Mar del Plata. Dr. Martin Barbaricca & Asociados. Especialistas en Derecho de Familia, Sucesiones, Alquileres, Desalojos, Reclamos Civiles y Contratos. Asesoramiento legal personalizado.",
  keywords: [
    "abogado mar del plata",
    "estudio juridico mar del plata",
    "derecho de familia mar del plata",
    "sucesiones mar del plata",
    "divorcios mar del plata",
    "alquileres mar del plata",
    "desalojos mar del plata",
    "abogado sucesiones mar del plata",
    "martin barbaricca",
    "estudio juridico martin barbaricca"
  ],
  authors: [{ name: "Dr. Martin Barbaricca" }],
  openGraph: {
    title: "Estudio Jurídico Martin Barbaricca & Asociados",
    description: "Estudio Jurídico en Mar del Plata. Especialistas en Derecho de Familia, Sucesiones, Contratos y Reclamos Civiles.",
    url: "https://estudio-barbaricca.vercel.app",
    siteName: "Estudio Jurídico Martin Barbaricca",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070a13] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}

