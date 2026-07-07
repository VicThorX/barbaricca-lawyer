"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfdfa]/90 dark:bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Monogram */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold-500 bg-white dark:bg-slate-900 group-hover:border-gold-600 transition-colors shadow-sm">
            <span className="font-serif text-sm font-bold text-gold-600 dark:text-gold-400 group-hover:text-gold-700 dark:group-hover:text-gold-300 tracking-wider">
              MB
            </span>
            <div className="absolute -inset-1 border border-gold-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base md:text-lg font-semibold tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
              MARTIN BARBARICCA
            </span>
            <span className="text-[10px] text-gold-600 dark:text-gold-400 tracking-[0.25em] leading-none uppercase font-semibold">
              & Asociados • Estudio Jurídico
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5492234264333?text=Hola,%20quisiera%20realizar%20una%20consulta%20legal."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white font-semibold rounded-sm text-xs uppercase tracking-wider transition-all duration-300 shadow-sm border border-slate-900 dark:border-slate-800"
          >
            <Phone className="w-3.5 h-3.5 fill-current text-gold-400" />
            Consulta Directa
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fdfdfa]/98 dark:bg-[#0a0d14]/98 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 py-6 px-8 shadow-2xl flex flex-col gap-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5492234264333?text=Hola,%20quisiera%20realizar%20una%20consulta%20legal."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 dark:bg-slate-850 text-white font-bold rounded-sm text-sm uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-800 transition-colors border border-slate-900 dark:border-slate-800"
          >
            <Phone className="w-4 h-4 fill-current text-gold-400" />
            Consulta por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
