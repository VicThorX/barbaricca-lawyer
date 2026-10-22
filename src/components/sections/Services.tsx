import React from "react";
import Link from "next/link";
import {
  FileCheck,
  Heart,
  Scale,
  FileSignature,
  ShieldAlert,
  Gavel,
} from "lucide-react";
import PhysicalCard from "@/components/PhysicalCard";

export default function Services() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
      aria-labelledby="heading-servicios"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
              Servicios y Compromiso
            </span>
            <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
          </div>

          <h2
            id="heading-servicios"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 leading-tight"
          >
            Servicios Jurídicos en Mar del Plata: Rigor y Compromiso Profesional
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            Ofrecemos soluciones integrales y patrocinio letrado en todo el Partido de General Pueyrredón (Mar del Plata y Batán) y la Provincia de Buenos Aires, diseñados para blindar su patrimonio, proteger los vínculos familiares y defender sus derechos.
          </p>

          {/* Adapted 6 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/derecho-inmobiliario-desalojos-alquileres">
                    Contratos y Patrimonio
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Redacción experta de contratos de locación, boletos de compraventa, contratos SaaS y testamentos para asegurar blindaje patrimonial.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/derecho-de-familia-mar-del-plata">
                    Derecho de Familia
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Representación dedicada en divorcios exprés, reclamos de alimentos, régimen de comunicación y cuidado personal con estricta reserva.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/sucesiones-y-herencias-mar-del-plata">
                    Sucesiones y Herencias
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Tramitación ágil de sucesiones ab-intestato y testamentarias, declaratoria de herederos e inscripción por tracto abreviado.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <FileSignature className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/derecho-informatico-propiedad-intelectual">
                    Derecho Informático y Marcas
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Registro de marcas en INPI, depósito de software en DNDA, contratos tecnológicos y protección de propiedad intelectual.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/amparos-danos-y-perjuicios-mar-del-plata">
                    Amparos de Urgencia
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Interposición inmediata de recursos de amparo de salud contra obras sociales y prepagas con medidas cautelares efectivas.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 dark:bg-gold-400/10 text-gold-600 dark:text-gold-400 rounded-xs group-hover:scale-110 transition-transform">
                  <Gavel className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  <Link href="/especialidades/derecho-inmobiliario-desalojos-alquileres">
                    Desalojos y Litigios Civiles
                  </Link>
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                Patrocinio en juicios de desalojo, ejecución de alquileres, cobro de pesos y reclamos por daños y perjuicios.
              </p>
            </div>
          </div>
        </div>

        {/* Card Presentation - Services listing */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <PhysicalCard variant="services" />
        </div>

        {/* Why choose us & CTA footer spanning full width */}
        <div className="lg:col-span-12 border-t border-slate-200/80 dark:border-slate-800/80 pt-12 md:pt-16 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Why choose us left: title */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                  Diferencial
                </span>
                <div className="h-[1px] w-8 bg-gold-500/50 dark:bg-gold-400/30"></div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                ¿Por qué elegir nuestro Estudio Jurídico en Mar del Plata?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Combinamos el rigor procesal de la ley con un trato cercano y empático para resolver su situación con el menor desgaste posible.
              </p>
            </div>

            {/* Why choose us right: 2 columns grid for differentiators */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm transition-colors duration-300">
                <h4 className="font-serif text-slate-800 dark:text-slate-200 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span className="text-gold-600 dark:text-gold-400">⚜</span> Enfoque Híbrido: Derecho + Ingeniería
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Nuestra doble formación en Ingeniería en Software y Derecho nos permite analizar litigios, contratos y evidencia digital con un rigor lógico y técnico superior.
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm transition-colors duration-300">
                <h4 className="font-serif text-slate-800 dark:text-gold-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span className="text-gold-600 dark:text-gold-400">⚜</span> Rigor Analítico y Humano
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Aplicamos procesos estructurados en Derecho de Familia, Sucesiones y Contratos para lograr resoluciones claras, ágiles y transparentes en cada etapa del expediente.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action button centered */}
          <div className="flex justify-center mt-12">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer border border-slate-900 dark:border-slate-800 group"
            >
              <span>¿Dudas con su caso? Consúltenos ahora</span>
              <svg
                className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
