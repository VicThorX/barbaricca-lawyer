import PhysicalCard from "@/components/PhysicalCard";
import { Phone, MessageSquare, Calendar, FileCheck, Heart, Scale, FileSignature, ShieldAlert, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import DecorativeFrame from "@/components/DecorativeFrame";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const practiceAreas = [
    {
      title: "Derecho de Familia",
      description: "Asesoramiento legal empático y riguroso para proteger las relaciones familiares y los derechos de los niños y adolescentes.",
      items: [
        "Divorcios vinculares y de común acuerdo",
        "Reclamo de alimentos y cuota alimentaria",
        "Régimen de comunicación y cuidado personal",
        "Filiación y reclamación de paternidad",
        "Responsabilidad parental y curatela",
        "Reconocimiento de hijos e impugnación de paternidad"
      ],
      iconName: "Heart" as const,
      highlighted: true,
    },
    {
      title: "Sucesiones",
      description: "Tramitación y planificación sucesoria integral para resguardar y organizar el patrimonio familiar ante fallecimientos.",
      items: [
        "Sucesiones intestadas (sin testamento)",
        "Sucesiones testamentarias",
        "Redacción de testamentos y legados",
        "Planificación hereditaria y adjudicación de bienes"
      ],
      iconName: "FileText" as const,
      highlighted: false,
    },
    {
      title: "Derecho Inmobiliario y Alquileres",
      description: "Protección integral para propietarios, locadores e inquilinos. Redacción y gestión de contratos y cobranzas.",
      items: [
        "Redacción de contratos de locación (vivienda y comercial)",
        "Redacción de boleto de compraventa",
        "Juicios de desalojos rápidos",
        "Administración de alquileres y gestión de cobranzas",
        "Asesoramiento en transacciones inmobiliarias"
      ],
      iconName: "HomeIcon" as const,
      highlighted: false,
    },
    {
      title: "Reclamos Civiles y Amparos",
      description: "Defensa activa de sus derechos patrimoniales y civiles ante daños, perjuicios o incumplimientos contractuales.",
      items: [
        "Demandas por daños y perjuicios (accidentes, incumplimientos)",
        "Amparos de salud y constitucionales",
        "Negociación y acuerdos extrajudiciales",
        "Redacción de cartas documento y notificaciones"
      ],
      iconName: "Shield" as const,
      highlighted: false,
    },
    {
      title: "Derecho Penal",
      description: "Asistencia técnica preliminar para la radicación formal de denuncias ante la comisión de hechos delictivos.",
      items: [
        "Redacción de denuncias penales (sin firma de letrado)",
        "Asesoramiento inicial sobre derechos del damnificado",
        "Estudio y análisis de encuadre penal"
      ],
      iconName: "ShieldAlert" as const,
      highlighted: false,
    },
    {
      title: "Consultoría y Asesoramiento",
      description: "Consultas inmediatas y dictámenes detallados sobre la viabilidad de acciones judiciales y administrativas.",
      items: [
        "Consultas verbales en despacho o virtuales",
        "Consultas evacuadas por escrito",
        "Estudio e información de actuaciones judiciales o administrativas",
        "Dictámenes jurídicos preventivos"
      ],
      iconName: "BookOpen" as const,
      highlighted: false,
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfa] text-slate-900 flex flex-col relative" id="inicio">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-[50%] h-[20%] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[20%] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto w-full z-10">
        <DecorativeFrame showEmblem={true} className="max-w-4xl w-full">
          <div className="flex flex-col items-center py-4 md:py-6">
            <span className="text-xs uppercase tracking-[0.35em] text-gold-600 font-bold mb-3">
              Estudio Jurídico de Prestigio
            </span>
            
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-slate-900 leading-tight mb-4">
              MARTIN BARBARICCA
              <span className="block text-gold-600 text-xl sm:text-3xl md:text-4xl mt-2 tracking-[0.2em] font-normal uppercase">
                & Asociados
              </span>
            </h1>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent my-5"></div>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8 font-light">
              Asesoramiento legal integral con más de 20 años de trayectoria, experiencia judicial y defensa de sus intereses en la ciudad de Mar del Plata. Compromiso absoluto con la justicia y la tranquilidad de su familia y patrimonio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href="#contacto"
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer border border-slate-900"
              >
                Solicitar Consulta
              </a>
              <a
                href="#especialidades"
                className="px-8 py-3.5 border border-gold-500/40 hover:border-gold-600 text-gold-600 hover:text-gold-700 bg-transparent hover:bg-gold-500/5 font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Ver Especialidades
              </a>
            </div>
          </div>
        </DecorativeFrame>
      </header>

      {/* Intro Bar: Key services short-list */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-6 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-widest text-center">
          <span className="flex items-center gap-1.5"><span className="text-gold-600">⚜</span> Consultas Verbales y Escritas</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600">⚜</span> Derecho de Familia</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600">⚜</span> Sucesiones y Testamentos</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5"><span className="text-gold-600">⚜</span> Contratos y Desalojos</span>
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
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Sobre el Estudio
              </span>
              <div className="h-[1px] w-12 bg-gold-500/50"></div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 leading-tight">
              Defensa Profesional y Asesoramiento con Sensibilidad Legal
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              El <strong>Estudio Jurídico Martin Barbaricca & Asociados</strong> se erige sobre pilares de seriedad, discreción y eficacia en la ciudad de Mar del Plata. Entendemos que enfrentar un proceso judicial o legal puede ser complejo y estresante; por ello, brindamos un acompañamiento cercano y transparente desde la primera consulta.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nuestra especialización se centra principalmente en el <strong>Derecho de Familia</strong> y <strong>Sucesiones</strong>, áreas donde no solo se requiere rigor técnico de excelencia, sino también una profunda comprensión humana y confidencialidad para guiar a nuestros clientes hacia soluciones equitativas y duraderas.
            </p>

            <div className="pt-2">
              <a
                href="https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 hover:text-gold-700 font-bold border-b border-gold-500/30 hover:border-gold-600 pb-0.5 transition-all"
              >
                <span>Verificar Matrícula en el Colegio de Abogados (COLPROBA)</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="p-5 bg-white border border-slate-200 shadow-sm rounded-sm">
                <h4 className="font-serif text-gold-600 font-bold text-base mb-1.5">⚖ Trayectoria</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Más de 20 años de experiencia y ejercicio activo de la profesión con máxima dedicación y seriedad.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-200 shadow-sm rounded-sm">
                <h4 className="font-serif text-gold-600 font-bold text-base mb-1.5">🏛 Respaldo Local</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Operamos con amplio conocimiento de los tribunales de Mar del Plata y del Departamento Judicial provincial.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-200 shadow-sm rounded-sm">
                <h4 className="font-serif text-gold-600 font-bold text-base mb-1.5">⚜ Inmediatez</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Canalizamos consultas urgentes por WhatsApp para agilizar el diagnóstico legal inicial de su situación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-200/60 px-4 sm:px-6 md:px-12 z-10 scroll-mt-24" id="especialidades">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="flex justify-center text-gold-600 mb-2 font-serif text-xl">⚜</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 mb-4">
              Áreas de Especialización Jurídica
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Consulte nuestro abanico de servicios legales redactados y gestionados con la mayor solvencia técnica y práctica.
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

      {/* Metodología y Compromiso Profesional Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
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
                  Tramitación rápida de sucesiones ab-intestato y testamentarias, facilitando la liquidación y adjudicación de bienes.
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
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
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
                    <span className="text-gold-600">⚜</span> Enfoque Humano y Dedicado
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    A diferencia de la frialdad corporativa, entendemos el valor emocional detrás de cada conflicto familiar o sucesorio, brindando contención real y asesoramiento comprensivo.
                  </p>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-sm">
                  <h4 className="font-serif text-slate-800 font-bold text-sm mb-1.5 flex items-center gap-2">
                    <span className="text-gold-600">⚜</span> Visión Ágil y Resolutiva
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Priorizamos soluciones consensuadas para reducir tiempos y costos emocionales, actuando con máxima firmeza en tribunales cuando los acuerdos extrajudiciales no son viables.
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

      {/* Map, Location and Form Section */}
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

      {/* Footer (Carbón Oscuro para balance visual final) */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 md:px-12 text-center text-xs text-slate-400 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gold-500/40">
              <span className="font-serif text-xs font-bold text-gold-400">MB</span>
            </div>
            <div className="text-left">
              <p className="font-serif font-semibold text-slate-200 tracking-wide">
                MARTIN BARBARICCA & ASOCIADOS
              </p>
              <p className="text-[10px] text-slate-500">Estudio Jurídico • Mar del Plata</p>
            </div>
          </div>

          <div className="flex gap-6 uppercase tracking-wider font-semibold text-[10px]">
            <a href="#inicio" className="hover:text-gold-400 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-gold-400 transition-colors">Sobre Mí</a>
            <a href="#especialidades" className="hover:text-gold-400 transition-colors">Especialidades</a>
            <a href="#contacto" className="hover:text-gold-400 transition-colors">Contacto</a>
          </div>

          <div className="text-slate-500">
            <p>© {new Date().getFullYear()} Estudio Jurídico Martin Barbaricca. Todos los derechos reservados.</p>
            <p className="text-[10px] text-slate-600 mt-1">Diseñado profesionalmente en Next.js. Optimizado para Vercel.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
