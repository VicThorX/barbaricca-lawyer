import React from "react";
import { MessageSquare, Phone, Calendar, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface ContactProps {
  defaultArea?: string;
}

export default function Contact({ defaultArea }: ContactProps) {
  return (
    <section
      className="py-16 md:py-24 bg-slate-50 dark:bg-[#0c101a] border-t border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 md:px-12 z-10 scroll-mt-24 transition-colors duration-300"
      id="contacto"
      aria-labelledby="heading-contacto"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Left side: Information and Contact details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
                  Contacto y Asesoramiento
                </span>
                <div className="h-[1px] w-12 bg-gold-500/50 dark:bg-gold-400/30"></div>
              </div>

              <h2
                id="heading-contacto"
                className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-slate-900 dark:text-slate-100 mb-4"
              >
                Contacto con nuestro Abogado en Mar del Plata
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Envíenos los detalles de su consulta legal mediante el formulario, o bien comuníquese directamente por WhatsApp para coordinar una reunión presencial en Mar del Plata y Batán, o una videollamada desde cualquier localidad de la Provincia de Buenos Aires.
              </p>
            </div>

            {/* Contact items */}
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm text-gold-600 dark:text-gold-400 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    WhatsApp de Guardia
                  </h3>
                  <a
                    href="https://wa.me/5492234264333?text=Hola%20Dr.%20Mart%C3%ADn%20Barbaricca,%20necesito%20realizar%20una%20consulta%20jur%C3%ADdica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-600 dark:text-gold-400 font-semibold hover:underline mt-0.5 block"
                  >
                    +54 9 223 426-4333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm text-gold-600 dark:text-gold-400 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Teléfono Directo
                  </h3>
                  <a
                    href="tel:+5492234264333"
                    className="text-sm text-slate-800 dark:text-slate-200 font-semibold hover:text-gold-600 dark:hover:text-gold-400 transition-colors mt-0.5 block"
                  >
                    (0223) 15-426-4333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm text-gold-600 dark:text-gold-400 transition-colors duration-300">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Atención Personalizada (Lunes a Viernes 09:00 a 18:00 hs)
                  </h3>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                    Mar del Plata, Batán y Provincia de Buenos Aires
                  </p>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                    Coordinación de entrevistas presenciales en el Partido de General Pueyrredón y asesoramiento virtual (Zoom / Google Meet / WhatsApp) para los 20 Departamentos Judiciales bonaerenses.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-sm rounded-sm text-gold-600 dark:text-gold-400 transition-colors duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Credenciales Profesionales
                  </h3>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                    Dr. Martín Luis Barbaricca — T° XII F° 197 CAMDP
                  </p>
                  <a
                    href="https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-gold-600 dark:text-gold-400 hover:underline block mt-0.5"
                  >
                    Colegio de Abogados del Depto. Judicial de Mar del Plata (COLPROBA) • CUIT 20-28639843-0
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Right side: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-10 bg-white dark:bg-[#121723] border border-slate-200 dark:border-slate-800 shadow-xl rounded-md transition-colors duration-300">
              <h3 className="font-serif text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Formulario de Asesoramiento Inicial
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Complete los datos solicitados. Al hacer clic en enviar, será redirigido a WhatsApp para enviar el mensaje estructurado de inmediato.
              </p>
              <ContactForm defaultArea={defaultArea} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
