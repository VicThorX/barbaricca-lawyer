import React from "react";

export default function Footer() {
  return (
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
  );
}
