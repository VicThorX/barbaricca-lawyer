import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  FileText,
  HelpCircle,
  ChevronDown,
  Phone,
  ArrowRight,
  Award,
  Heart,
  Code,
  Home as HomeIcon,
  Shield,
  BookOpen,
  Scale,
  MapPin,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import {
  practiceAreas,
  getSpecialtyBySlug,
  type SpecialtyIconName,
} from "@/config/specialties";

const iconMap: Record<
  SpecialtyIconName,
  React.ComponentType<{ className?: string }>
> = {
  Heart,
  Code,
  FileText,
  HomeIcon,
  Shield,
  BookOpen,
};

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

  const IconComponent = iconMap[area.iconName] || Scale;
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

      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Top Sub-Navigation Bar: Back button, Breadcrumbs & Specialty Switcher */}
        <div className="pt-24 md:pt-28 bg-slate-100/80 dark:bg-[#0d121f] border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Back link + Breadcrumb */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/#especialidades"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 bg-white dark:bg-[#121723] border border-gold-500/30 dark:border-gold-400/30 px-3 py-1.5 rounded-sm shadow-2xs transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Volver al Inicio</span>
                </Link>

                <nav
                  aria-label="Ruta de navegación"
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
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
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">
                    {area.shortTitle}
                  </span>
                </nav>
              </div>

              {/* Specialty Switcher Pills */}
              <div
                aria-label="Cambiar de especialidad"
                className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar"
              >
                {practiceAreas.map((item) => {
                  const isActive = item.slug === area.slug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/especialidades/${item.slug}`}
                      className={`text-[11px] whitespace-nowrap px-3 py-1.5 rounded-sm font-semibold transition-all ${
                        isActive
                          ? "bg-gold-500 text-slate-950 shadow-xs"
                          : "bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-gold-600 dark:hover:text-gold-400 border border-slate-200/70 dark:border-slate-800"
                      }`}
                    >
                      {item.shortTitle}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Hero (Distinct from Home Page) */}
        <header className="relative py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-slate-50/90 to-transparent dark:from-[#0d121f]/60 dark:to-transparent border-b border-slate-200/70 dark:border-slate-800/70">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial H1 & Direct Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-gold-500/10 dark:bg-gold-400/10 border border-gold-500/30 dark:border-gold-400/30 text-gold-600 dark:text-gold-400">
                <IconComponent className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.18em] font-bold">
                  Área de Práctica Especializada • {area.title}
                </span>
              </div>

              <div className="border-l-4 border-gold-500 pl-5 sm:pl-6">
                <h1 className="font-serif text-2xl sm:text-4xl md:text-[42px] font-bold tracking-wide text-slate-900 dark:text-slate-100 leading-tight">
                  {area.h1Title}
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {area.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href={`https://wa.me/5492234264333?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-slate-900 dark:bg-gold-500 hover:bg-slate-800 dark:hover:bg-gold-400 text-white dark:text-slate-950 font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-gold-400 dark:text-slate-950" />
                  <span>Iniciar Consulta de {area.shortTitle}</span>
                </a>
                <a
                  href="#requisitos-y-proceso"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 dark:border-slate-700 hover:border-gold-500 dark:hover:border-gold-400 text-slate-700 dark:text-slate-200 hover:text-gold-600 dark:hover:text-gold-400 font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
                >
                  <span>Ver Requisitos y Etapas</span>
                </a>
              </div>
            </div>

            {/* Right Column: Executive Summary Dossier Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-md p-6 sm:p-7 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600"></div>

                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
                      Ficha de Especialidad
                    </span>
                    <h2 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      Información del Servicio Legal
                    </h2>
                  </div>
                  <div className="p-2.5 rounded-sm bg-gold-500/10 text-gold-600 dark:text-gold-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Abogado Titular a Cargo
                      </dt>
                      <dd className="text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                        Dr. Martín Luis Barbaricca (T° XII F° 197 CAMDP)
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Jurisdicción y Cobertura
                      </dt>
                      <dd className="text-slate-700 dark:text-slate-300 mt-0.5">
                        Tribunales de Mar del Plata, Batán y gestión digital SCBA en toda la Provincia de Buenos Aires.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Modalidad de Atención
                      </dt>
                      <dd className="text-slate-700 dark:text-slate-300 mt-0.5">
                        Consultas presenciales y por videollamada (Meet / Zoom / WhatsApp).
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    Atención directa sin intermediarios
                  </span>
                  <a
                    href="#preguntas-frecuentes-especialidad"
                    className="text-gold-600 dark:text-gold-400 font-bold hover:underline"
                  >
                    Ver FAQs ({area.faqs.length}) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Detailed Overview & Services Included */}
        <section
          id="requisitos-y-proceso"
          className="py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Legal Approach & Sub-services */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                  Alcance del Patrocinio
                </span>
                <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                ¿En qué casos de {area.title} intervenimos?
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
                  Trámites y representaciones que gestionamos en esta especialidad:
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

            {/* Right Column: Requirements Checklist */}
            <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
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
                Hoja de Ruta Legal
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
          id="preguntas-frecuentes-especialidad"
          className="py-14 md:py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full scroll-mt-24"
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
