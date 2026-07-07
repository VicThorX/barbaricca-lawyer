import React from "react";
import DecorativeFrame from "@/components/DecorativeFrame";

export default function Hero() {
  return (
    <header className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto w-full z-10">
      <DecorativeFrame showEmblem={true} className="max-w-4xl w-full">
        <div className="flex flex-col items-center py-4 md:py-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400 font-bold mb-3">
            Estudio Jurídico & Ingeniería en Software
          </span>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-slate-900 dark:text-slate-100 leading-tight mb-4">
            MARTIN BARBARICCA
            <span className="block text-gold-600 dark:text-gold-400 text-xl sm:text-3xl md:text-4xl mt-2 tracking-[0.2em] font-normal uppercase">
              & Asociados
            </span>
          </h1>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent my-5"></div>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8 font-light">
            Asesoramiento legal con más de 20 años de trayectoria. Fusionamos el rigor del derecho con la precisión de la ingeniería para brindar un enfoque integral que va mucho más allá de simplemente entender las leyes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="#contacto"
              className="px-8 py-3.5 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer border border-slate-900 dark:border-slate-800"
            >
              Solicitar Consulta
            </a>
            <a
              href="#especialidades"
              className="px-8 py-3.5 border border-gold-500/40 dark:border-gold-400/30 hover:border-gold-600 dark:hover:border-gold-500 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 bg-transparent hover:bg-gold-500/5 dark:hover:bg-gold-400/5 font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              Ver Especialidades
            </a>
          </div>
        </div>
      </DecorativeFrame>
    </header>
  );
}
