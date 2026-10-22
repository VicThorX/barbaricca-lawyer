import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { practiceAreas } from "@/config/specialties";
import { homeFaqList } from "@/components/sections/FAQ";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mlbestudio.com.ar"),
  title: {
    default:
      "Abogado en Mar del Plata | Estudio Jurídico Dr. Martín Barbaricca & Asociados",
    template: "%s",
  },
  description:
    "Estudio Jurídico en Mar del Plata y General Pueyrredón. Dr. Martín Luis Barbaricca (T° XII F° 197 CAMDP). Especialista en Derecho de Familia, Divorcios, Sucesiones, Desalojos, Contratos y Derecho Informático en toda la Provincia de Buenos Aires.",
  keywords: [
    "abogado mar del plata",
    "abogado en mar del plata",
    "estudio juridico mar del plata",
    "estudio juridico general pueyrredon",
    "abogado batan",
    "abogados mar del plata",
    "abogado de familia mar del plata",
    "abogado sucesiones mar del plata",
    "divorcio expres mar del plata",
    "cuota alimentaria mar del plata",
    "abogado desalojos mar del plata",
    "contratos de alquiler mar del plata",
    "abogado derecho informatico",
    "registro de marcas y software inpi dnda",
    "amparos de salud mar del plata",
    "martin barbaricca",
    "martin luis barbaricca abogado",
    "estudio juridico martin barbaricca",
  ],
  authors: [
    {
      name: "Dr. Martín Luis Barbaricca",
      url: "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664",
    },
  ],
  creator: "Dr. Martín Luis Barbaricca",
  publisher: "Estudio Jurídico Martin Barbaricca & Asociados",
  category: "legal",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Abogado en Mar del Plata | Estudio Jurídico Dr. Martín Barbaricca & Asociados",
    description:
      "Especialista en Derecho de Familia, Divorcios, Sucesiones, Desalojos, Amparos y Derecho Informático. Patrocinio letrado en Mar del Plata (T° XII F° 197 CAMDP) y Provincia de Buenos Aires.",
    url: "https://mlbestudio.com.ar",
    siteName: "Estudio Jurídico Martin Barbaricca & Asociados",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abogado en Mar del Plata | Estudio Jurídico Dr. Martín Barbaricca & Asociados",
    description:
      "Especialista en Derecho de Familia, Divorcios, Sucesiones, Desalojos y Derecho Informático en Mar del Plata y Provincia de Buenos Aires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mlbestudio.com.ar/#website",
        url: "https://mlbestudio.com.ar",
        name: "Estudio Jurídico Martin Barbaricca & Asociados",
        description:
          "Abogado en Mar del Plata y Provincia de Buenos Aires: Derecho de Familia, Sucesiones, Desalojos y Derecho Informático.",
        inLanguage: "es-AR",
        publisher: {
          "@id": "https://mlbestudio.com.ar/#estudio",
        },
      },
      {
        "@type": ["LegalService", "Attorney"],
        "@id": "https://mlbestudio.com.ar/#estudio",
        name: "Estudio Jurídico Martin Barbaricca & Asociados",
        alternateName: "Dr. Martín Luis Barbaricca - Abogado",
        image: "https://mlbestudio.com.ar/opengraph-image",
        logo: "https://mlbestudio.com.ar/icon.png",
        url: "https://mlbestudio.com.ar",
        telephone: "+5492234264333",
        priceRange: "$$",
        taxID: "20-28639843-0",
        foundingDate: "2007-10-25",
        hasMap: "https://maps.app.goo.gl/tjyAuKWqnY3DRuzS6",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mar del Plata",
          addressRegion: "Provincia de Buenos Aires",
          postalCode: "7600",
          addressCountry: "AR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -38.005477,
          longitude: -57.542611,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Mar del Plata",
          },
          {
            "@type": "City",
            name: "Batán",
          },
          {
            "@type": "AdministrativeArea",
            name: "Partido de General Pueyrredón",
          },
          {
            "@type": "AdministrativeArea",
            name: "Departamento Judicial de Mar del Plata",
          },
          {
            "@type": "AdministrativeArea",
            name: "Provincia de Buenos Aires",
          },
        ],
        knowsAbout: [
          "Derecho de Familia y Divorcios",
          "Cuota Alimentaria y Cuidado Personal",
          "Sucesiones y Planificación Hereditaria",
          "Derecho Informático y Propiedad Intelectual de Software",
          "Registro de Marcas INPI y Derechos de Autor DNDA",
          "Derecho Inmobiliario y Contratos de Locación",
          "Juicios de Desalojo y Cobro de Alquileres",
          "Amparos de Salud y Daños y Perjuicios",
        ],
        founder: {
          "@type": "Person",
          "@id": "https://mlbestudio.com.ar/#martin-barbaricca",
          name: "Dr. Martín Luis Barbaricca",
          jobTitle: "Abogado",
          identifier: "Matrícula T° XII F° 197 CAMDP - Legajo COLPROBA 30664",
          memberOf: [
            {
              "@type": "Organization",
              name: "Colegio de Abogados del Departamento Judicial de Mar del Plata (CAMDP)",
            },
            {
              "@type": "Organization",
              name: "Colegio de Abogados de la Provincia de Buenos Aires (COLPROBA)",
              url: "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664",
            },
          ],
          sameAs: [
            "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664",
            "https://maps.app.goo.gl/tjyAuKWqnY3DRuzS6",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Especialidades Jurídicas en Mar del Plata y Provincia de Buenos Aires",
          itemListElement: practiceAreas.map((area) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: area.h1Title,
              description: area.seoDescription,
              url: `https://mlbestudio.com.ar/especialidades/${area.slug}`,
            },
          })),
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [
          "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664",
          "https://maps.app.goo.gl/tjyAuKWqnY3DRuzS6",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mlbestudio.com.ar/#faq",
        mainEntity: homeFaqList.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html
      lang="es-AR"
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
