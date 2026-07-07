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
  metadataBase: new URL("https://mlbestudio.com.ar"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Estudio Jurídico Martin Barbaricca & Asociados",
    description: "Estudio Jurídico en Mar del Plata. Especialistas en Derecho de Familia, Sucesiones, Contratos y Reclamos Civiles.",
    url: "https://mlbestudio.com.ar",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Jurídico Martin Barbaricca & Asociados",
    "image": "https://mlbestudio.com.ar/icon.png",
    "@id": "https://mlbestudio.com.ar/#estudio",
    "url": "https://mlbestudio.com.ar",
    "telephone": "+5492234264333",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mar del Plata",
      "addressRegion": "Buenos Aires",
      "postalCode": "7600",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-38.005477",
      "longitude": "-57.542611"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Mar del Plata"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
    ]
  };

  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdfdfa] dark:bg-[#070a13] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

