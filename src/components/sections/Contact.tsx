import React from "react";
import { MessageSquare, Phone, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 md:px-12 z-10 scroll-mt-24" id="contacto">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          
          {/* Left side: Information and Contact details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                  Contacto y Asesoramiento
                </span>
                <div className="h-[1px] w-12 bg-gold-500/50"></div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-slate-900 mb-4">
                Comience su Consulta Hoy Mismo
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Puede enviarnos un mensaje con los detalles de su consulta utilizando el formulario, o bien comunicarse directamente por llamada o WhatsApp para coordinar una reunión presencial u online.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-sm text-gold-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">WhatsApp de Guardia</h4>
                  <a
                    href="https://wa.me/5492234264333?text=Hola,%20necesito%20realizar%20una%20consulta%20jurídica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-600 font-semibold hover:underline mt-0.5 block"
                  >
                    +54 9 223 426-4333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-sm text-gold-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Teléfono</h4>
                  <a href="tel:02234264333" className="text-sm text-slate-800 font-semibold hover:text-gold-600 transition-colors mt-0.5 block">
                    0223 426-4333
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-sm text-gold-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Atención Personalizada</h4>
                  <p className="text-sm text-slate-800 font-semibold mt-0.5">
                    Consultas Virtuales y Presenciales
                  </p>
                  <span className="text-[11px] text-slate-500">Coordinación de entrevistas presenciales en Mar del Plata u online (Zoom/Meet)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right side: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-10 bg-white border border-slate-200 shadow-xl rounded-md">
              <h3 className="font-serif text-lg md:text-xl font-semibold text-slate-900 mb-2">
                Formulario de Asesoramiento Inicial
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Complete los datos solicitados. Al hacer clic en enviar, será redirigido a WhatsApp para enviar el mensaje estructurado de inmediato.
              </p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
