import React from "react";

interface DecorativeFrameProps {
  children: React.ReactNode;
  className?: string;
  showEmblem?: boolean;
}

export default function DecorativeFrame({
  children,
  className = "",
  showEmblem = true,
}: DecorativeFrameProps) {
  return (
    <div className={`relative p-8 md:p-12 bg-white/80 backdrop-blur-md rounded-lg border border-gold-500/20 shadow-xl shadow-slate-200/40 gold-glow ${className}`}>
      {/* Triple gold corner brackets (Top-Left) */}
      <div className="absolute top-3 left-3 w-10 h-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/80 rounded-tl-sm"></div>
        <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-gold-600/50 rounded-tl-sm"></div>
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-700/30 rounded-tl-sm"></div>
      </div>

      {/* Triple gold corner brackets (Top-Right) */}
      <div className="absolute top-3 right-3 w-10 h-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-500/80 rounded-tr-sm"></div>
        <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-gold-600/50 rounded-tr-sm"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-700/30 rounded-tr-sm"></div>
      </div>

      {/* Triple gold corner brackets (Bottom-Left) */}
      <div className="absolute bottom-3 left-3 w-10 h-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-500/80 rounded-bl-sm"></div>
        <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-gold-600/50 rounded-bl-sm"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-700/30 rounded-bl-sm"></div>
      </div>

      {/* Triple gold corner brackets (Bottom-Right) */}
      <div className="absolute bottom-3 right-3 w-10 h-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500/80 rounded-br-sm"></div>
        <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-gold-600/50 rounded-br-sm"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-700/30 rounded-br-sm"></div>
      </div>

      {/* Fleur-de-lis Emblem (⚜️) Top Center */}
      {showEmblem && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fdfdfa] px-4 py-1 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gold-600 drop-shadow-[0_2px_4px_rgba(184,151,83,0.2)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,2A3,3 0 0,0 9,5C9,6.08 9.58,7 10.5,7.5C9.58,8 9,8.92 9,10C9,11.38 10.12,12.5 11.5,12.5V17H12.5V12.5C13.88,12.5 15,11.38 15,10C15,8.92 14.42,8 13.5,7.5C14.42,7 15,6.08 15,5A3,3 0 0,0 12,2M12,3A2,2 0 0,1 14,5C14,6.1 13.1,7 12,7C10.9,7 10,6.1 10,5A2,2 0 0,1 12,3M12,8.5C12.83,8.5 13.5,9.17 13.5,10C13.5,10.83 12.83,11.5 12,11.5C11.17,11.5 10.5,10.83 10.5,10C10.5,9.17 11.17,8.5 12,8.5M10.5,18.5H13.5V19.5H10.5V18.5M11.5,13.5H12.5V17H11.5V13.5M8,21V22H16V21C16,19.9 15.1,19 14,19H10C8.9,19 8,19.9 8,21Z" />
          </svg>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
