import Image from "next/image";
import { MapPin, Phone, MessageSquare } from "lucide-react";
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
    <div className="min-h-screen bg-[#fdfdfa] text-slate-900 flex flex-col relative overflow-hidden" id="inicio">
      
      {/* Background radial glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

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
              Asesoramiento legal integral, experiencia judicial y defensa de sus intereses en la ciudad de Mar del Plata. Compromiso absoluto con la justicia y la tranquilidad de su familia y patrimonio.
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
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10" id="sobre-mi">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Card Presentation image from prompt */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2.5 bg-white border border-slate-200 shadow-xl rounded-sm max-w-[340px] md:max-w-[380px] w-full overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* Outer gold line border inside the card block */}
              <div className="relative border border-gold-500/10 p-2">
                <Image
                  src="/images/presentacion-familia.png"
                  alt="Dr. Martin Barbaricca & Asociados - Derecho de Familia"
                  width={360}
                  height={500}
                  className="w-full h-auto object-cover rounded-sm border border-gold-500/20 filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                  priority
                />
              </div>
            </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="p-5 bg-white border border-slate-200 shadow-sm rounded-sm">
                <h4 className="font-serif text-gold-600 font-bold text-base mb-1.5">⚖ Respaldo Local</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Operamos con amplio conocimiento de los tribunales de Mar del Plata y del Departamento Judicial de la Provincia de Buenos Aires.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-200 shadow-sm rounded-sm">
                <h4 className="font-serif text-gold-600 font-bold text-base mb-1.5">⚜ Atención Inmediata</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Canalizamos consultas urgentes a través de WhatsApp para agilizar el diagnóstico legal inicial de su caso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-200/60 px-4 sm:px-6 md:px-12 z-10" id="especialidades">
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

      {/* Services presentation Section & Image 2 */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Nuestros Valores Profesionales
              </span>
              <div className="h-[1px] w-12 bg-gold-500/50"></div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-slate-900 leading-tight">
              Instrumentos Jurídicos a Medida de sus Necesidades
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              La correcta redacción de un boleto de compraventa, un contrato de alquiler o un testamento es la única garantía para resguardar su tranquilidad a futuro y evitar disputas legales complejas.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-600 font-bold shrink-0 mt-0.5 text-xs">✓</span>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-sm">Prevención del Conflicto</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Planificamos las cláusulas contractuales anticipando cualquier escenario de controversia posterior.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-600 font-bold shrink-0 mt-0.5 text-xs">✓</span>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-sm">Administración y Cobranzas</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Nos encargamos de la gestión diaria de cobros, intimaciones y renovaciones para locadores comerciales y residenciales.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-600 font-bold shrink-0 mt-0.5 text-xs">✓</span>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-sm">Trámites Judiciales Ágiles</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Impulsamos procesos de desalojo y reclamos civiles con un seguimiento diario y notificaciones de avance continuas.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card Presentation image from prompt - Services listing */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative p-2.5 bg-white border border-slate-200 shadow-xl rounded-sm max-w-[340px] md:max-w-[380px] w-full overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              <div className="relative border border-gold-500/10 p-2">
                <Image
                  src="/images/presentacion-servicios.png"
                  alt="Servicios Legales - Sucesiones, Desalojos, Alimentos"
                  width={360}
                  height={500}
                  className="w-full h-auto object-cover rounded-sm border border-gold-500/20 filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map, Location and Form Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 md:px-12 z-10" id="contacto">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Left side: Information and Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                      Contacto y Ubicación
                    </span>
                    <div className="h-[1px] w-12 bg-gold-500/50"></div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-slate-900 mb-4">
                    Comience su Consulta Hoy Mismo
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Puede enviarnos un mensaje con los detalles de su consulta utilizando el formulario, o bien comunicarse directamente mediante llamada o WhatsApp para coordinar una entrevista en nuestro despacho.
                  </p>
                </div>

                {/* Contact items */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-sm text-gold-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Dirección</h4>
                      <p className="text-sm text-slate-800 font-semibold mt-0.5">
                        9 de Julio 4008, B7600 Mar del Plata
                      </p>
                      <span className="text-[11px] text-slate-400">Provincia de Buenos Aires, Argentina</span>
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
                </div>
              </div>

              {/* Polished custom map placeholder linking to Google Maps */}
              <div className="relative w-full h-[220px] rounded-md overflow-hidden border border-slate-200 bg-white shadow-sm group">
                <div className="absolute inset-0 bg-gold-500/5 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/90 z-20 hover:bg-white/80 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-gold-600 mb-3 animate-bounce" />
                  <h4 className="font-serif text-slate-800 font-bold text-sm">Ver Ubicación en Google Maps</h4>
                  <p className="text-xs text-slate-500 max-w-[240px] mt-1 mb-4">
                    9 de Julio 4008, Mar del Plata
                  </p>
                  <a
                    href="https://maps.google.com/?q=9+de+Julio+4008,+B7600+Mar+del+Plata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-slate-950 font-bold rounded-sm text-xs uppercase tracking-wider transition-colors"
                  >
                    Cómo Llegar
                  </a>
                </div>
                {/* Visual grid pattern for maps aesthetics */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#b89753_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
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
