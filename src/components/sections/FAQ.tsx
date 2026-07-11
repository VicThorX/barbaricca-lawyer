"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: FAQItem[] = [
    {
      question: "¿Cómo iniciar una sucesión en Mar del Plata o la Provincia de Buenos Aires?",
      answer: "Para iniciar una sucesión en el Departamento Judicial de Mar del Plata se requiere el acta de defunción del causante, las partidas que acrediten el vínculo familiar (matrimonio, nacimiento) y la documentación de los bienes a transmitir (escrituras de inmuebles, títulos de vehículos, cuentas bancarias). Nuestro estudio gestiona de manera ágil y digitalizada sucesiones ab-intestato (sin testamento) y testamentarias en toda la provincia.",
    },
    {
      question: "¿Cuánto demora un divorcio y qué requisitos tiene en General Pueyrredón?",
      answer: "Desde la reforma del Código Civil, el divorcio en la Provincia de Buenos Aires es directo ('divorcio exprés') y puede ser solicitado de común acuerdo o de manera unilateral por uno de los cónyuges, sin necesidad de alegar causas. Solo se requiere presentar el acta de matrimonio y el acta de nacimiento de los hijos (si los hubiera). El tiempo promedio del trámite ante los Juzgados de Familia de Mar del Plata oscila entre 2 y 5 meses.",
    },
    {
      question: "¿Qué hacer ante un inquilino con falta de pago o si necesito iniciar un desalojo?",
      answer: "Ante la falta de pago de los alquileres, el primer paso legal obligatorio es intimar formalmente al inquilino y a sus fiadores mediante carta documento, otorgando el plazo legal de ley. Si no se regulariza la deuda, se inicia la demanda de desalojo por falta de pago o vencimiento de contrato. En los tribunales civiles de Mar del Plata, aplicamos herramientas procesales de desocupación inmediata para recuperar el inmueble en el menor tiempo posible y resguardar el cobro de lo adeudado.",
    },
    {
      question: "¿Cómo brinda cobertura el Derecho Informático a mis desarrollos o activos digitales?",
      answer: "El Derecho Informático protege sus desarrollos intangibles mediante el registro de marcas ante el INPI, la inscripción de derechos de autor y depósito de código fuente de software en la DNDA, y la redacción de contratos de tecnología personalizados (contratos SaaS, términos y condiciones, políticas de privacidad, acuerdos de confidencialidad NDA). El Dr. Martin Barbaricca, al contar con formación en Ingeniería en Software, ofrece un asesoramiento con un rigor técnico y entendimiento de código único en el mercado legal argentino.",
    },
    {
      question: "¿El estudio atiende consultas y casos fuera de Mar del Plata y Batán?",
      answer: "Sí. Gracias a la digitalización judicial completa en la Provincia de Buenos Aires (a través del portal SCBA con firmas electrónicas y notificaciones automáticas), representamos a clientes de forma remota en cualquier partido bonaerense. Combinamos el asesoramiento virtual por plataformas como Meet, Zoom y videollamadas de WhatsApp con un patrocinio e impulso constante del expediente digital en los tribunales correspondientes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full z-10 scroll-mt-24" id="preguntas-frecuentes">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <div className="flex justify-center text-gold-600 dark:text-gold-400 mb-2 font-serif text-xl">⚜</div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Respuestas claras sobre los trámites legales y de tecnología más comunes en Mar del Plata, Batán y toda la Provincia de Buenos Aires.
        </p>
      </div>

      <div className="space-y-4">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm shadow-xs transition-all duration-300 hover:border-gold-500/40 dark:hover:border-gold-400/30 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors duration-250 select-none group"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base leading-snug tracking-wide group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 ml-4 flex-shrink-0 ${
                    isOpen ? "transform rotate-180 text-gold-600 dark:text-gold-400" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 border-t border-slate-100 dark:border-slate-800" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 md:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/40 dark:bg-slate-900/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
