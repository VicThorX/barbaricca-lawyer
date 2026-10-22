import React from "react";
import Link from "next/link";
import PhysicalCard from "@/components/PhysicalCard";

export default function About() {
  return (
    <>
      {/* Intro Bar: Key services short-list with internal links */}
      <section
        aria-label="Áreas principales de práctica jurídica"
        className="bg-slate-50 dark:bg-[#121723] border-y border-slate-200/80 dark:border-slate-800/80 py-6 px-4 sm:px-6 z-10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center">
          <Link
            href="/especialidades/consultoria-juridica-buenos-aires"
            className="flex items-center gap-1.5 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <span className="text-gold-600 dark:text-gold-400">⚜</span> Consultas Verbales y Escritas
          </Link>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/especialidades/derecho-de-familia-mar-del-plata"
            className="flex items-center gap-1.5 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <span className="text-gold-600 dark:text-gold-400">⚜</span> Derecho de Familia y Divorcios
          </Link>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/especialidades/sucesiones-y-herencias-mar-del-plata"
            className="flex items-center gap-1.5 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <span className="text-gold-600 dark:text-gold-400">⚜</span> Sucesiones y Testamentos
          </Link>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/especialidades/derecho-inmobiliario-desalojos-alquileres"
            className="flex items-center gap-1.5 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <span className="text-gold-600 dark:text-gold-400">⚜</span> Contratos y Desalojos
          </Link>
          <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/especialidades/derecho-informatico-propiedad-intelectual"
            className="flex items-center gap-1.5 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <span className="text-gold-600 dark:text-gold-400">⚜</span> Derecho Informático y Marcas
          </Link>
        </div>
      </section>

      {/* About Section & Presentation Image 1 */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-24"
        id="sobre-mi"
        aria-labelledby="heading-sobre-mi"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Card Presentation */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <PhysicalCard variant="family" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                Sobre el Estudio y su Titular
              </span>
              <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
            </div>

            <h2
              id="heading-sobre-mi"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 leading-tight"
            >
              Estudio Jurídico en Mar del Plata: Defensa y Soluciones Legales
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              El <strong>Estudio Jurídico Martin Barbaricca &amp; Asociados</strong> se destaca por un enfoque innovador y altamente especializado en Mar del Plata y el Partido de General Pueyrredón. Su fundador, el <strong>Dr. Martín Luis Barbaricca</strong> (Abogado matriculado al <strong>Tomo XII Folio 197 del Colegio de Abogados de Mar del Plata - CAMDP</strong> desde el año 2007), une casi dos décadas de ejercicio activo del Derecho con su formación en <strong>Ingeniería en Software</strong>. Esta formación dual única permite abordar litigios complejos y consultas preventivas en toda la <strong>Provincia de Buenos Aires</strong> con una precisión lógica que trasciende la práctica jurídica tradicional.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Nuestras áreas principales abarcan el{" "}
              <Link
                href="/especialidades/derecho-de-familia-mar-del-plata"
                className="font-semibold text-slate-800 dark:text-slate-200 underline decoration-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                Derecho de Familia y Divorcios
              </Link>
              ,{" "}
              <Link
                href="/especialidades/sucesiones-y-herencias-mar-del-plata"
                className="font-semibold text-slate-800 dark:text-slate-200 underline decoration-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                Sucesiones y Herencias
              </Link>
              ,{" "}
              <Link
                href="/especialidades/derecho-inmobiliario-desalojos-alquileres"
                className="font-semibold text-slate-800 dark:text-slate-200 underline decoration-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                Desalojos y Derecho Inmobiliario
              </Link>{" "}
              y{" "}
              <Link
                href="/especialidades/derecho-informatico-propiedad-intelectual"
                className="font-semibold text-slate-800 dark:text-slate-200 underline decoration-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                Derecho Informático y Propiedad Intelectual
              </Link>
              , estructurando soluciones adaptadas al Departamento Judicial de Mar del Plata para proteger tanto los vínculos familiares como el patrimonio inmobiliario y los activos digitales.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-bold border-b border-gold-500/30 hover:border-gold-600 pb-0.5 transition-all"
              >
                <span>Verificar Matrícula T° XII F° 197 CAMDP en COLPROBA</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h3 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">
                  ⚖ Trayectoria
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Matriculado desde 2007 (T° XII F° 197 CAMDP) con ejercicio activo de la profesión, máxima dedicación y seriedad.
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h3 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">
                  🏛 Respaldo Local
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Amplio conocimiento de los Juzgados de Familia, Civiles y Comerciales del Departamento Judicial de Mar del Plata y SCBA.
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h3 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">
                  ⚜ Inmediatez
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Canalizamos consultas urgentes por WhatsApp y videollamada para agilizar el diagnóstico legal inicial de su caso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
