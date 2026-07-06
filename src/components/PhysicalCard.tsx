import React from "react";

interface PhysicalCardProps {
  variant: "family" | "services";
}

export default function PhysicalCard({ variant }: PhysicalCardProps) {
  if (variant === "family") {
    const specialties = [
      "DIVORCIOS",
      "ALIMENTOS",
      "REGIMEN DE COMUNICACION",
      "CUIDADO PERSONAL",
      "FILIACION",
      "RESPONSABILIDAD PARENTAL",
      "CURATELA",
    ];

    return (
      <div className="relative w-full aspect-[2/3] max-w-[360px] bg-[#0c0d12] text-slate-100 flex flex-col justify-between p-10 md:p-12 shadow-2xl rounded-sm border border-slate-950 overflow-hidden select-none">
        
        {/* Lady Justice Silhouette Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none z-0">
          <svg className="w-[85%] h-[85%] text-gold-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.4 2 11 2.4 11 3v.6C8.8 4.2 7 6.1 7 8.5c0 1.2.5 2.3 1.3 3.1l-.8 1.6C6.5 13.5 5.5 14.5 5.1 16l-.1.4c-.1.3 0 .6.2.8.2.2.5.3.8.2l.4-.1c1.5-.4 2.5-1.4 2.8-2.4l.6-1.3C10 14.2 10.9 14.8 12 14.8c1.1 0 2-.6 2.2-1.2l.6 1.3c.3 1 1.3 2 2.8 2.4l.4.1c.3.1.6 0 .8-.2.2-.2.3-.5.2-.8l-.1-.4c-.4-1.5-1.4-2.5-2.4-2.8l-.8-1.6c.8-.8 1.3-1.9 1.3-3.1 0-2.4-1.8-4.3-4-4.9V3c0-.6-.4-1-1-1zm0 3.5c1.4 0 2.5 1.1 2.5 2.5S13.4 10.5 12 10.5 9.5 9.4 9.5 8 10.6 5.5 12 5.5zM6 19.5h12v1H6v-1zm2.5 2h7v1h-7v-1z" />
          </svg>
        </div>

        {/* Double Gold Corner Brackets (Top-Left) */}
        <div className="absolute top-4 left-4 w-12 h-12 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#bfa276] rounded-tl-xs"></div>
          <div className="absolute top-1 left-1 w-8 h-8 border-t border-l border-[#bfa276]/60 rounded-tl-xs"></div>
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#bfa276]/30 rounded-tl-xs"></div>
        </div>

        {/* Double Gold Corner Brackets (Top-Right) */}
        <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none z-10">
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#bfa276] rounded-tr-xs"></div>
          <div className="absolute top-1 right-1 w-8 h-8 border-t border-r border-[#bfa276]/60 rounded-tr-xs"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#bfa276]/30 rounded-tr-xs"></div>
        </div>

        {/* Double Gold Corner Brackets (Bottom-Left) */}
        <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#bfa276] rounded-bl-xs"></div>
          <div className="absolute bottom-1 left-1 w-8 h-8 border-b border-l border-[#bfa276]/60 rounded-bl-xs"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#bfa276]/30 rounded-bl-xs"></div>
        </div>

        {/* Double Gold Corner Brackets (Bottom-Right) */}
        <div className="absolute bottom-4 right-4 w-12 h-12 pointer-events-none z-10">
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#bfa276] rounded-br-xs"></div>
          <div className="absolute bottom-1 right-1 w-8 h-8 border-b border-r border-[#bfa276]/60 rounded-br-xs"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#bfa276]/30 rounded-br-xs"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col justify-between h-full items-center text-center">
          
          {/* Header Title */}
          <div className="mt-4">
            <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-[0.12em] text-[#f5f2eb] border-b border-[#bfa276]/20 pb-4 uppercase">
              Derecho de
              <span className="block text-2xl md:text-3xl font-medium tracking-[0.12em] mt-1 font-serif">Familia</span>
            </h3>
          </div>

          {/* Specialties Centered List */}
          <div className="flex flex-col gap-3.5 my-8">
            {specialties.map((item, idx) => (
              <span
                key={idx}
                className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] text-[#d6bda4] hover:text-[#f5f2eb] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Footer Branding */}
          <div className="mb-4">
            <p className="text-[9px] md:text-[10px] text-[#bfa276] tracking-[0.22em] uppercase font-semibold leading-relaxed">
              Dr. Martin Barbaricca
            </p>
            <p className="text-[8px] text-[#bfa276]/80 tracking-[0.22em] uppercase mt-0.5">
              & Asociados
            </p>
          </div>

        </div>

      </div>
    );
  } else {
    // Services version (card 2)
    const services = [
      "Divorcios",
      "Regimen de comunicación",
      "Alimentos",
      "Impugnacion de paternidad",
      "Reconocimiento de hijos",
      "Desalojos",
      "Amparos",
      "Daños y perjuicios",
      "Sucesiones",
    ];

    return (
      <div className="relative w-full aspect-[2/3] max-w-[360px] bg-[#0d0f14] text-slate-100 flex flex-col justify-between p-10 md:p-12 shadow-2xl rounded-sm border border-slate-950 overflow-hidden select-none">
        
        {/* Open Book and Fountain Pen Vector Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none z-0">
          <svg className="w-[80%] h-[80%] text-gold-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 2H5C3.9 2 3 2.9 3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 18H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z" />
          </svg>
        </div>

        {/* Elegant Minimal Corner Accent lines */}
        <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-gold-500/30 pointer-events-none z-10"></div>
        <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-gold-500/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-gold-500/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-gold-500/30 pointer-events-none z-10"></div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col justify-center h-full items-center text-center">
          
          {/* Header Icon */}
          <div className="mb-6 text-gold-500/60 flex justify-center">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
            </svg>
          </div>

          {/* Specialties Centered List */}
          <div className="flex flex-col gap-4">
            {services.map((item, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-sans font-light tracking-[0.15em] text-slate-100 hover:text-gold-400 transition-colors py-0.5"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Mini Gold Emblem separator */}
          <div className="mt-8 text-gold-500/40 text-xs tracking-widest select-none">
            ⚜ ⚜ ⚜
          </div>

        </div>

      </div>
    );
  }
}
