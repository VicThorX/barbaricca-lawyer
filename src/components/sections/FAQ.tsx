import React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const homeFaqList: FAQItem[] = [
  {
    question: "¿Cómo iniciar una sucesión en Mar del Plata o la Provincia de Buenos Aires?",
    answer:
      "Para iniciar una sucesión en el Departamento Judicial de Mar del Plata se requiere el acta de defunción del causante, las partidas que acrediten el vínculo familiar (matrimonio, nacimiento) y la documentación de los bienes a transmitir (escrituras de inmuebles, títulos de vehículos, cuentas bancarias). Si no posee las partidas físicas, nuestro estudio las gestiona digitalmente y tramita sucesiones ab-intestato (sin testamento) y testamentarias, incluyendo ventas por tracto abreviado.",
    linkHref: "/especialidades/sucesiones-y-herencias-mar-del-plata",
    linkLabel: "Ver guía completa de Sucesiones y Herencias",
  },
  {
    question: "¿Cuánto demora un divorcio exprés y qué requisitos tiene en General Pueyrredón?",
    answer:
      "El divorcio en la Provincia de Buenos Aires es incausado ('divorcio exprés') y puede ser solicitado de común acuerdo o de manera unilateral por uno solo de los cónyuges, sin necesidad de alegar causas ni contar con la conformidad del otro. Solo se requiere presentar DNI, acta de matrimonio y partidas de nacimiento de los hijos (si los hubiera). El tiempo promedio del trámite ante los Juzgados de Familia de Mar del Plata oscila entre 2 y 5 meses.",
    linkHref: "/especialidades/derecho-de-familia-mar-del-plata",
    linkLabel: "Más sobre Divorcios y Derecho de Familia",
  },
  {
    question: "¿Cómo reclamar cuota alimentaria o régimen de comunicación en Mar del Plata?",
    answer:
      "El reclamo de alimentos para hijos menores o hasta los 25 años (si estudian) se inicia ante los Juzgados de Familia de Mar del Plata, pudiendo solicitarse alimentos provisorios urgentes desde el primer escrito. Ante incumplimientos, gestionamos embargos de haberes, retención directa en recibo de sueldo e inscripción en el Registro de Deudores Alimentarios Morosos.",
    linkHref: "/especialidades/derecho-de-familia-mar-del-plata",
    linkLabel: "Ver requisitos de Cuota Alimentaria",
  },
  {
    question: "¿Qué hacer ante un inquilino con falta de pago o si necesito iniciar un desalojo?",
    answer:
      "Ante la falta de pago de dos períodos de alquiler o vencimiento del contrato, el primer paso legal obligatorio es intimar formalmente al inquilino y a sus fiadores mediante carta documento. Si no se regulariza la deuda, se inicia la demanda de desalojo y, en paralelo, el juicio ejecutivo de cobro de alquileres para embargar a inquilinos y garantes. En los tribunales civiles de Mar del Plata impulsamos pedidos de entrega anticipada del inmueble.",
    linkHref: "/especialidades/derecho-inmobiliario-desalojos-alquileres",
    linkLabel: "Ver pasos de Juicio de Desalojo y Alquileres",
  },
  {
    question: "¿Cómo brinda cobertura el Derecho Informático a mis desarrollos, marcas o activos digitales?",
    answer:
      "El Derecho Informático protege sus activos intangibles mediante el registro de marcas ante el INPI, la inscripción de derechos de autor y depósito de código fuente de software en la DNDA, y la redacción de contratos tecnológicos personalizados (contratos SaaS, desarrollo a medida, términos y condiciones, políticas de privacidad y acuerdos de confidencialidad NDA). El Dr. Martín Luis Barbaricca, al contar con formación en Ingeniería en Software, ofrece un asesoramiento con rigor técnico único en el mercado legal argentino.",
    linkHref: "/especialidades/derecho-informatico-propiedad-intelectual",
    linkLabel: "Conocer servicios de Derecho Informático y Software",
  },
  {
    question: "¿Cuándo corresponde presentar un Amparo de Salud contra una obra social o prepaga?",
    answer:
      "Cuando una obra social o empresa de medicina prepaga niega, demora o limita la cobertura de cirugías, tratamientos oncológicos, medicación de alto costo, prótesis, prestaciones por discapacidad (CUD) o internación domiciliaria. Mediante un Amparo de Salud con medida cautelar de urgencia, el juez puede ordenar la cobertura inmediata en un plazo de 48 a 96 horas.",
    linkHref: "/especialidades/amparos-danos-y-perjuicios-mar-del-plata",
    linkLabel: "Más información sobre Amparos de Salud y Reclamos",
  },
  {
    question: "¿Cómo se calculan los honorarios de un abogado en la Provincia de Buenos Aires?",
    answer:
      "En toda la Provincia de Buenos Aires la labor profesional de los abogados se rige por la Ley Arancelaria Provincial N° 14.967, que establece pautas transparentes expresadas en la unidad de medida arancelaria 'Jus'. En nuestro estudio informamos por anticipado los costos y ofrecemos facilidades de pago adaptadas a cada etapa del proceso.",
    linkHref: "/especialidades/consultoria-juridica-buenos-aires",
    linkLabel: "Solicitar presupuesto o consulta jurídica",
  },
  {
    question: "¿El estudio atiende consultas y expedientes fuera de Mar del Plata y Batán?",
    answer:
      "Sí. Gracias a la digitalización judicial completa en la Provincia de Buenos Aires (a través del portal de notificaciones y presentaciones electrónicas de la SCBA), representamos a clientes de forma remota en los 20 Departamentos Judiciales bonaerenses. Combinamos consultas virtuales por Google Meet, Zoom y videollamadas de WhatsApp con un patrocinio e impulso constante del expediente digital.",
    linkHref: "/especialidades/consultoria-juridica-buenos-aires",
    linkLabel: "Coordinar consulta presencial u online",
  },
];

export default function FAQ() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full z-10 scroll-mt-24"
      id="preguntas-frecuentes"
      aria-labelledby="heading-faq"
    >
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <div className="flex justify-center text-gold-600 dark:text-gold-400 mb-2 font-serif text-xl">
          ⚜
        </div>
        <h2
          id="heading-faq"
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 dark:text-slate-100 mb-4"
        >
          Preguntas Frecuentes sobre Trámites Legales en Mar del Plata
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Respuestas claras sobre plazos, requisitos y procedimientos judiciales en Mar del Plata, Batán y toda la Provincia de Buenos Aires.
        </p>
      </div>

      <div className="space-y-4">
        {homeFaqList.map((item, index) => (
          <details
            key={index}
            open={index === 0}
            className="group bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 rounded-sm shadow-xs transition-all duration-300 hover:border-gold-500/40 dark:hover:border-gold-400/30 overflow-hidden"
          >
            <summary className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors duration-250 select-none list-none [&::-webkit-details-marker]:hidden">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base leading-snug tracking-wide group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {item.question}
                </h3>
              </div>
              <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 ml-4 flex-shrink-0 group-open:rotate-180 group-open:text-gold-600 dark:group-open:text-gold-400" />
            </summary>

            <div className="border-t border-slate-100 dark:border-slate-800 p-5 md:p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/40 dark:bg-slate-900/20 space-y-3">
              <p>{item.answer}</p>
              {item.linkHref && item.linkLabel && (
                <div>
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 hover:underline"
                  >
                    <span>{item.linkLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
