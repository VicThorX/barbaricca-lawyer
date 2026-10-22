import React from "react";
import Link from "next/link";
import {
  Heart,
  Code,
  FileText,
  Home as HomeIcon,
  Shield,
  BookOpen,
  Scale,
  ArrowRight,
} from "lucide-react";
import type { SpecialtyIconName } from "@/config/specialties";

interface PracticeAreaCardProps {
  slug: string;
  title: string;
  description: string;
  items: string[];
  iconName: SpecialtyIconName;
  highlighted?: boolean;
}

const iconMap: Record<
  SpecialtyIconName,
  React.ComponentType<{ className?: string }>
> = {
  Heart,
  Code,
  FileText,
  HomeIcon,
  Shield,
  BookOpen,
};

export default function PracticeAreaCard({
  slug,
  title,
  description,
  items,
  iconName,
  highlighted = false,
}: PracticeAreaCardProps) {
  const IconComponent = iconMap[iconName] || Scale;
  const href = `/especialidades/${slug}`;

  return (
    <article
      className={`group relative p-8 rounded-md transition-all duration-500 flex flex-col justify-between h-full ${
        highlighted
          ? "bg-amber-50/40 dark:bg-[#161d2d] border border-gold-500/30 dark:border-gold-400/40 gold-glow"
          : "bg-white/95 dark:bg-[#121723] border border-slate-200/80 dark:border-slate-800 shadow-sm shadow-slate-100/50 dark:shadow-none hover:border-gold-500/20 dark:hover:border-gold-400/20 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 hover:shadow-md"
      }`}
    >
      {/* Decorative accent line for hovered cards */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div>
        {/* Header Icon and Title */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`p-3 rounded-sm ${
              highlighted
                ? "bg-gold-500/10 text-gold-600 dark:text-gold-400"
                : "bg-slate-100 dark:bg-slate-800 text-gold-600 dark:text-gold-400 group-hover:bg-gold-500/5 dark:group-hover:bg-gold-400/5 transition-all"
            } transition-colors`}
          >
            <IconComponent className="w-8 h-8" />
          </div>

          <div className="flex items-center gap-2">
            {highlighted && (
              <span className="text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold bg-gold-500/10 dark:bg-gold-400/10 px-2.5 py-1 rounded-xs">
                Enfoque Principal
              </span>
            )}
            <span className="text-slate-300 dark:text-slate-700 group-hover:text-gold-500/20 transition-colors font-serif select-none text-2xl font-bold">
              ⚜
            </span>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-wide group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
          <Link href={href} className="focus:outline-none">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Services List */}
        <ul className="space-y-2.5">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
            >
              <span className="text-gold-600 dark:text-gold-400 mt-1 select-none text-xs">
                ⚜
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-bold group/link transition-colors"
        >
          <span>Requisitos y preguntas frecuentes</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
