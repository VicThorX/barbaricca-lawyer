import React from "react";
import Link from "next/link";
import { practiceAreas } from "@/config/specialties";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-14 pb-10 px-4 sm:px-6 md:px-12 text-xs text-slate-400 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-900">
          {/* Brand & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gold-500/40 group-hover:border-gold-400 transition-colors">
                <span className="font-serif text-xs font-bold text-gold-400">
                  MB
                </span>
              </div>
              <div className="text-left">
                <p className="font-serif font-semibold text-slate-200 tracking-wide">
                  MARTIN BARBARICCA &amp; ASOCIADOS
                </p>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest">
                  Estudio Jurídico • Mar del Plata
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dr. Martín Luis Barbaricca — Abogado matriculado al Tomo XII Folio 197 del Colegio de Abogados del Departamento Judicial de Mar del Plata (CAMDP - COLPROBA). Asesoramiento legal en Mar del Plata, Batán (General Pueyrredón) y toda la Provincia de Buenos Aires.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
              <span>CUIT: 20-28639843-0</span>
              <span>•</span>
              <a
                href="https://matricula.colproba.org.ar/index.php/consulta/visualizar/30664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:underline"
              >
                Legajo COLPROBA #30664
              </a>
            </div>
          </div>

          {/* Specialties Directory */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-slate-200 uppercase tracking-wider font-semibold text-xs">
              Especialidades Jurídicas
            </h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/especialidades/${area.slug}`}
                    className="text-slate-400 hover:text-gold-400 transition-colors block"
                  >
                    {area.title} en Mar del Plata
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-slate-200 uppercase tracking-wider font-semibold text-xs">
              Secciones y Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#inicio" className="hover:text-gold-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#sobre-mi" className="hover:text-gold-400 transition-colors">
                  Sobre el Estudio
                </Link>
              </li>
              <li>
                <Link
                  href="/#preguntas-frecuentes"
                  className="hover:text-gold-400 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-gold-400 transition-colors">
                  Solicitar Turno / Consulta
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/5492234264333?text=Hola%20Dr.%20Mart%C3%ADn%20Barbaricca,%20quisiera%20realizar%20una%20consulta%20legal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 font-semibold hover:underline"
                >
                  WhatsApp: +54 9 223 426-4333
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Estudio Jurídico Martin Barbaricca &amp; Asociados. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-slate-600">
            Mar del Plata (CP 7600) • Partido de General Pueyrredón • Provincia de Buenos Aires, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
