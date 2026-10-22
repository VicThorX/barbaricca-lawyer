import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  ChevronDown,
  Phone,
  ArrowRight,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DecorativeFrame from "@/components/DecorativeFrame";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { practiceAreas, getSpecialtyBySlug } from "@/config/specialties";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getSpecialtyBySlug(slug);

  if (!area) {
    return {};
  }

  const canonicalUrl = `/especialidades/${area.slug}`;

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    keywords: area.seoKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `https://mlbestudio.com.ar${canonicalUrl}`,
      siteName: "Estudio Jurídico Martin Barbaricca & Asociados",
      locale: "es_AR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: area.seoTitle,
      description: area.seoDescription,
    },
  };
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getSpecialtyBySlug(slug);

  if (!area) {
    notFound();
  }

  const otherAreas = practiceAreas.filter((item) => item.slug !== area.slug);
  const pageUrl = `https://mlbestudio.com.ar/especialidades/${area.slug}`;
  const whatsappText = encodeURIComponent(
    `Hola Dr. Martín Barbaricca, quisiera realizar una consulta sobre ${area.title}.`
  );

  const specialtyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://mlbestudio.com.ar",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Especialidades",
            item: "https://mlbestudio.com.ar/#especialidades",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: area.h1Title,
        serviceType: area.title,
        description: area.seoDescription,
        url: pageUrl,
        provider: {
          "@id": "https://mlbestudio.com.ar/#estudio",
        },
        areaServed: [
          { "@type": "City", name: "Mar del Plata" },
          { "@type": "City", name: "Batán" },
          {
            "@type": "AdministrativeArea",
            name: "Partido de General Pueyrredón",
          },
          {
            "@type": "AdministrativeArea",
            name: "Provincia de Buenos Aires",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Servicios de ${area.title}`,
          itemListElement: area.items.map((itemText) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: itemText,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: area.faqs.map((faq) => ({
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
    <div className="min-h-screen bg-[#fdfdfa] dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 flex flex-col relative transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />

      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-[50%] h-[20%] bg-gold-400/5 dark:bg-gold-500/8 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Header */}
        <header className="relative pt-28 pb-12 md:pt-36 md:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8 flex-wrap"
          >
            <Link
              href="/"
              className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
            >
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/#especialidades"
              className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
            >
              Especialidades
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-gold-600 dark:text-gold-400 font-semibold">
              {area.title}
            </span>
          </nav>

          <DecorativeFrame showEmblem={true} className="max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center text-center py-4 md:py-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400 font-bold mb-3">
                Estudio Jurídico Martin Barbaricca &amp; Asociados • Mar del Plata
              </span>

              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-slate-900 dark:text-slate-100 leading-tight mb-4 max-w-3xl">
                {area.h1Title}
              </h1>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent my-4"></div>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-6 font-light">
                {area.subtitle}
              </p>

              <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 px-4 py-1.5 rounded-full mb-8">
                <Award className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Dr. Martín Luis Barbaricca
                </span>
                <span className="text-gold-600 dark:text-gold-400">•</span>
                <span>T° XII F° 197 CAMDP (COLPROBA)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <a
                  href={`https://wa.me/5492234264333?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm border border-slate-900 dark:border-slate-800"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Consultar por WhatsApp</span>
                </a>
                <a
                  href="#contacto"
                  className="px-8 py-3.5 border border-gold-500/40 dark:border-gold-400/30 hover:border-gold-600 dark:hover:border-gold-500 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 bg-transparent hover:bg-gold-500/5 dark:hover:bg-gold-400/5 font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
                >
                  Formulario de Consulta
                </a>
              </div>
            </div>
          </DecorativeFrame>
        </header>

        {/* Detailed Overview & Services Included */}
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-slate-200/70 dark:border-slate-800/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Legal Approach & Sub-services */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                  Enfoque Profesional
                </span>
                <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Asesoramiento y Patrocinio en {area.title}
              </h2>

              {area.longDescription.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Servicios específicos que gestionamos en esta área:
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-white dark:bg-[#121723] border border-slate-200/80 dark:border-slate-800 rounded-sm shadow-2xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Requirements Checklist & Credentials */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 bg-white dark:bg-[#121723] border border-gold-500/30 dark:border-gold-400/30 rounded-md shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                    Documentación y Requisitos Habituales
                  </h2>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  Para agilizar la primera consulta o el inicio del trámite en {area.title}, resulta útil contar con los siguientes elementos (si no dispone de alguno, nuestro estudio puede gestionarlo):
                </p>

                <ul className="space-y-3">
                  {area.requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="text-gold-600 dark:text-gold-400 font-bold mt-0.5">
                        ⚜
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    ¿Tiene dudas sobre la documentación de su caso particular?
                  </p>
                  <a
                    href={`https://wa.me/5492234264333?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <span>Consultar Requisitos por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-14 md:py-20 bg-slate-50/70 dark:bg-[#0c101a] border-y border-slate-200/70 dark:border-slate-800/80 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                Metodología de Trabajo
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-3">
                ¿Cómo gestionamos su caso paso a paso?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Proceso estructurado con información clara en cada etapa procesal en Mar del Plata y la Provincia de Buenos Aires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {area.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-base font-bold text-gold-600 dark:text-gold-400 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Specific FAQs */}
        <section
          className="py-14 md:py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full"
          aria-labelledby="heading-specialty-faq"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center text-gold-600 dark:text-gold-400 mb-2 font-serif text-xl">
              ⚜
            </div>
            <h2
              id="heading-specialty-faq"
              className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3"
            >
              Preguntas Frecuentes sobre {area.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Respuestas del Dr. Martín Barbaricca a las consultas más habituales de nuestros clientes.
            </p>
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm shadow-xs transition-all duration-300 hover:border-gold-500/40 dark:hover:border-gold-400/30 overflow-hidden"
              >
                <summary className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base leading-snug tracking-wide group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 ml-4 flex-shrink-0 group-open:rotate-180 group-open:text-gold-600 dark:group-open:text-gold-400" />
                </summary>

                <div className="border-t border-slate-100 dark:border-slate-800 p-5 md:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/40 dark:bg-slate-900/20">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Cross-linking to Other Practice Areas */}
        <section className="py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-slate-200/70 dark:border-slate-800/70">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
            Otras Especialidades de nuestro Estudio Jurídico en Mar del Plata
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/especialidades/${other.slug}`}
                className="p-4 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 dark:hover:border-gold-400/40 rounded-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-1.5">
                    {other.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {other.description}
                  </p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                  <span>Ver especialidad</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form pre-selected with this Specialty */}
        <Contact defaultArea={area.contactFormArea} />
      </main>

      <Footer />
    </div>
  );
}
