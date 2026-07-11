import React from "react";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import { practiceAreas } from "@/config/specialties";

export default function PracticeAreas() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#0c101a] border-y border-slate-200/60 dark:border-slate-800/80 px-4 sm:px-6 md:px-12 z-10 scroll-mt-24 transition-colors duration-300" id="especialidades">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="flex justify-center text-gold-600 dark:text-gold-400 mb-2 font-serif text-xl">⚜</div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 mb-4">
            Abogado en Mar del Plata: Especialidades del Estudio
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Consulte nuestros servicios legales en Mar del Plata, Batán y toda la Provincia de Buenos Aires, gestionados con la mayor solvencia técnica y práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practiceAreas.map((area, idx) => (
            <div className="h-full" key={idx}>
              <PracticeAreaCard
                title={area.title}
                description={area.description}
                items={area.items}
                iconName={area.iconName}
                highlighted={area.highlighted}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
