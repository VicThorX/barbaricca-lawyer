import React from "react";
import PhysicalCard from "@/components/PhysicalCard";

export default function About() {
  return (
    <>
      {/* Intro Bar: Key services short-list */}
      <section className="bg-slate-50 dark:bg-[#121723] border-y border-slate-200/80 dark:border-slate-800/80 py-6 px-4 sm:px-6 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center">
          <span className="flex items-center gap-1.5"><span className="text-gold-600 dark:text-gold-400">⚜</span> Consultas Verbales y Escritas</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600 dark:text-gold-400">⚜</span> Derecho de Familia</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600 dark:text-gold-400">⚜</span> Sucesiones y Testamentos</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600 dark:text-gold-400">⚜</span> Contratos y Desalojos</span>
        </div>
      </section>

      {/* About Section & Presentation Image 1 */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10 scroll-mt-24" id="sobre-mi">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Card Presentation from prompt */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <PhysicalCard variant="family" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                Sobre el Estudio
              </span>
              <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 leading-tight">
              Defensa Profesional y Asesoramiento con Sensibilidad Legal
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              El <strong>Estudio Jurídico Martin Barbaricca & Asociados</strong> se destaca por un enfoque innovador y altamente especializado en Mar del Plata. Su fundador, el <strong>Dr. Martín Barbaricca</strong>, une más de 20 años de trayectoria en el ejercicio del derecho con su formación activa en <strong>Ingeniería en Software</strong>. Esta formación dual le permite abordar casos complejos con un método lógico, analítico y técnico que trasciende la interpretación tradicional de las leyes.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Nuestras áreas principales se centran en el <strong>Derecho de Familia</strong>, <strong>Sucesiones</strong> y <strong>Derecho Informático</strong>, espacios donde el rigor de la ingeniería y la precisión del derecho se fusionan para blindar tanto sus activos tangibles como sus desarrollos tecnológicos e intangibles.
            </p>

            <div className="pt-2">
              <a
                href="https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-bold border-b border-gold-500/30 hover:border-gold-600 pb-0.5 transition-all"
              >
                <span>Verificar Matrícula en el Colegio de Abogados (COLPROBA)</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h4 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">⚖ Trayectoria</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Más de 20 años de experiencia y ejercicio activo de la profesión con máxima dedicación and seriedad.
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h4 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">🏛 Respaldo Local</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Operamos con amplio conocimiento de los tribunales de Mar del Plata y del Departamento Judicial provincial.
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm transition-colors duration-300">
                <h4 className="font-serif text-gold-600 dark:text-gold-400 font-bold text-base mb-1.5">⚜ Inmediatez</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Canalizamos consultas urgentes por WhatsApp para agilizar el diagnóstico legal inicial de su situación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
