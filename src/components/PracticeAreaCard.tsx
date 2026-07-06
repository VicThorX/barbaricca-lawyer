import React from "react";
import * as Icons from "lucide-react";

interface PracticeAreaCardProps {
  title: string;
  description: string;
  items: string[];
  iconName: keyof typeof Icons;
  highlighted?: boolean;
}

export default function PracticeAreaCard({
  title,
  description,
  items,
  iconName,
  highlighted = false,
}: PracticeAreaCardProps) {
  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons[iconName] as React.ComponentType<{ className?: string }>) || Icons.Scale;

  return (
    <div
      className={`group relative p-8 rounded-md transition-all duration-500 flex flex-col justify-between h-full ${
        highlighted
          ? "bg-amber-50/40 border border-gold-500/30 gold-glow"
          : "bg-white/95 border border-slate-200/80 shadow-sm shadow-slate-100/50 hover:border-gold-500/20 hover:bg-slate-50/50 hover:shadow-md"
      }`}
    >
      {/* Decorative accent line for hovered cards */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div>
        {/* Header Icon and Title */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`p-3 rounded-sm ${
              highlighted ? "bg-gold-500/10 text-gold-600" : "bg-slate-100 text-gold-600 group-hover:bg-gold-500/5 transition-all"
            } transition-colors`}
          >
            <IconComponent className="w-8 h-8" />
          </div>
          
          {/* Subtle gold ornamentation in the card corner */}
          <span className="text-slate-300 group-hover:text-gold-500/20 transition-colors font-serif select-none text-2xl font-bold">
            ⚜
          </span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3 tracking-wide group-hover:text-gold-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Services List */}
        <ul className="space-y-2.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
              <span className="text-gold-600 mt-1 select-none text-xs">⚜</span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {highlighted && (
        <div className="mt-8 pt-4 border-t border-slate-200">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Área de Enfoque Principal
          </span>
        </div>
      )}
    </div>
  );
}
