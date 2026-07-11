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
  title: "Abogado en Mar del Plata | Estudio Jurídico Martin Barbaricca & Asociados",
  description: "Estudio Jurídico en Mar del Plata y Partido de General Pueyrredón. Dr. Martin Barbaricca. Especialista en Derecho de Familia, Sucesiones, Desalojos, Contratos y Derecho Informático con cobertura en toda la Provincia de Buenos Aires.",
  keywords: [
    "abogado mar del plata",
    "abogado en mar del plata",
    "estudio juridico mar del plata",
    "estudio juridico general pueyrredon",
    "abogado batan",
    "abogados mar del plata",
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
    title: "Abogado en Mar del Plata | Estudio Jurídico Martin Barbaricca & Asociados",
    description: "Estudio Jurídico especializado en Derecho de Familia, Sucesiones, Desalojos y Derecho Informático. Asesoramiento legal en General Pueyrredón y la Provincia de Buenos Aires.",
    url: "https://mlbestudio.com.ar",
    siteName: "Estudio Jurídico Martin Barbaricca",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado en Mar del Plata | Estudio Jurídico Martin Barbaricca & Asociados",
    description: "Estudio Jurídico especializado en Derecho de Familia, Sucesiones, Desalojos y Derecho Informático. Asesoramiento legal en General Pueyrredón y la Provincia de Buenos Aires.",
  }
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
        "@type": "LegalService",
        "@id": "https://mlbestudio.com.ar/#estudio",
        "name": "Estudio Jurídico Martin Barbaricca & Asociados",
        "image": "https://mlbestudio.com.ar/icon.png",
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
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Mar del Plata"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Batán"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Partido de General Pueyrredón"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Provincia de Buenos Aires"
          }
        ],
        "knowsAbout": [
          "Derecho de Familia",
          "Sucesiones y Planificación Hereditaria",
          "Derecho Informático y Nuevas Tecnologías",
          "Derecho Inmobiliario y Alquileres",
          "Juicios de Desalojo",
          "Contratos y Boleto de Compraventa",
          "Daños y Perjuicios",
          "Recursos de Amparo"
        ],
        "founder": {
          "@type": "Person",
          "name": "Dr. Martin Barbaricca",
          "jobTitle": "Abogado",
          "sameAs": "https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://mlbestudio.com.ar/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo iniciar una sucesión en Mar del Plata o la Provincia de Buenos Aires?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Para iniciar una sucesión en el Departamento Judicial de Mar del Plata se requiere el acta de defunción, las partidas que acrediten el vínculo familiar (matrimonio, nacimiento) y la documentación de los bienes (escrituras, títulos de vehículos). Nuestro estudio gestiona de manera ágil sucesiones ab-intestato y testamentarias en toda la provincia."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto demora un divorcio y qué requisitos tiene en General Pueyrredón?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Desde la reforma del Código Civil, el divorcio en la Provincia de Buenos Aires es directo ('divorcio exprés') y puede ser solicitado de común acuerdo o de manera unilateral. Solo se requiere el acta de matrimonio y de nacimiento de los hijos (si los hubiera). El tiempo promedio del trámite en los Tribunales de Familia de Mar del Plata oscila entre 2 y 5 meses."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué hacer ante un inquilino con falta de pago o si necesito iniciar un desalojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ante la falta de pago, el primer paso legal es intimar al inquilino y fiadores mediante carta documento. Si no se regulariza la situación, se inicia la demanda de desalojo por falta de pago o vencimiento de contrato. En los juzgados civiles de Mar del Plata, aplicamos herramientas procesales para lograr la desocupación del inmueble de la forma más rápida y resguardar el cobro de los alquileres adeudados."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo brinda cobertura el Derecho Informático a mis desarrollos o activos digitales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El Derecho Informático protege sus activos intangibles mediante el registro de marcas ante el INPI, el depósito de código fuente de software en la DNDA, y la redacción de contratos tecnológicos (SaaS, términos y condiciones, NDA). El Dr. Martin Barbaricca, al contar con formación en Ingeniería en Software, ofrece un asesoramiento con precisión técnica único en el país."
            }
          },
          {
            "@type": "Question",
            "name": "¿El estudio atiende casos fuera de Mar del Plata y Batán?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Gracias a la digitalización judicial (sistema MEV y notificaciones electrónicas de la SCBA), representamos a clientes en todo el ámbito de la Provincia de Buenos Aires de manera remota, combinando consultas virtuales por Meet o Zoom y videollamadas con un patrocinio firme en los tribunales correspondientes."
            }
          }
        ]
      }
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

