import React from "react";
import { FileCheck, Heart, Scale, FileSignature, ShieldAlert, Gavel } from "lucide-react";
import PhysicalCard from "@/components/PhysicalCard";

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Servicios y Compromiso
            </span>
            <div className="h-[1px] w-12 bg-gold-500/50"></div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 leading-tight">
            Combinamos el Rigor Jurídico con la Sensibilidad Humana
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Brindamos soluciones integrales diseñadas para blindar su patrimonio, proteger los vínculos familiares y asegurar sus derechos civiles en cada etapa.
          </p>

          {/* Adapted 6 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            
            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Contratos y Patrimonio</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Redacción experta de contratos de locación, boletos de compraventa y testamentos para asegurar blindaje patrimonial.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Derecho de Familia</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Representación dedicada en divorcios, reclamos de alimentos, régimen de comunicación y cuidado personal con estricta reserva.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Sucesiones y Herencias</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Tramitación rápida de Sucesiones ab-intestato y testamentarias, facilitando la liquidación y adjudicación de bienes.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <FileSignature className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Mediaciones y Acuerdos</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Convenios de cesión de derechos y liquidaciones conyugales para resolver controversias sin recurrir a la vía judicial.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Amparos de Urgencia</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Interposición inmediata de recursos de amparo por salud o vivienda y solicitud de medidas cautelares efectivas.
              </p>
            </div>

            <div className="space-y-1 group">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500/10 text-gold-600 rounded-xs group-hover:scale-110 transition-transform">
                  <Gavel className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-sm">Defensa y Litigios</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                Patrocinio en juicios de desalojo, cobro de pesos y defensa técnica y firme de sus intereses en tribunales civiles.
              </p>
            </div>

          </div>
        </div>

        {/* Card Presentation - Services listing */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <PhysicalCard variant="services" />
        </div>

        {/* Why choose us & CTA footer spanning full width */}
        <div className="lg:col-span-12 border-t border-slate-200/80 pt-12 md:pt-16 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Why choose us left: title */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                  Diferencial
                </span>
                <div className="h-[1px] w-8 bg-gold-500/50"></div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                ¿Por qué elegir nuestro Estudio?
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Combinamos el rigor de la ley con un trato cercano y empático para resolver su situación con el menor desgaste posible.
              </p>
            </div>

            {/* Why choose us right: 2 columns grid for differentiators */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-slate-200 rounded-sm">
                <h4 className="font-serif text-slate-800 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span className="text-gold-600">⚜</span> Enfoque Híbrido Avanzado
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nuestra doble formación en Ingeniería de Software y Derecho nos permite analizar los problemas con un rigor lógico y técnico superior, ofreciendo diagnósticos que van más allá del conocimiento legal tradicional.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-200 rounded-sm">
                <h4 className="font-serif text-slate-800 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span className="text-gold-600">⚜</span> Rigor Analítico y Humano
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Aplicamos metodologías de ingeniería y procesos estructurados en derecho de familia, Sucesiones y contratos para lograr soluciones claras, óptimas y ágiles con empatía.
                </p>
              </div>
            </div>

          </div>

          {/* Call to action button centered */}
          <div className="flex justify-center mt-12">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer border border-slate-900 group"
            >
              <span>¿Dudas con su caso? Consúltenos ahora</span>
              <svg
                className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
