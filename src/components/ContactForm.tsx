"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Derecho de Familia",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const baseText = `Hola Dr. Martín Barbaricca, mi nombre es *${formData.name}* (Tel: ${formData.phone}).\n\nQuiero hacer una consulta sobre *${formData.area}*.\n\n*Mensaje:* ${formData.message}`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/5492234264333?text=${encodedText}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
            className="w-full bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 focus:border-gold-500 dark:focus:border-gold-400 rounded-sm py-3 px-4 text-slate-900 dark:text-slate-100 text-sm outline-none transition-colors shadow-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Teléfono de Contacto *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. 223 1234567"
            className="w-full bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 focus:border-gold-500 dark:focus:border-gold-400 rounded-sm py-3 px-4 text-slate-900 dark:text-slate-100 text-sm outline-none transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Legal Area Dropdown */}
      <div>
        <label htmlFor="area" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Área de Consulta *
        </label>
        <select
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="w-full bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 focus:border-gold-500 dark:focus:border-gold-400 rounded-sm py-3 px-4 text-slate-900 dark:text-slate-100 text-sm outline-none transition-colors appearance-none cursor-pointer shadow-sm"
        >
          <option value="Derecho de Familia" className="dark:bg-[#121723]">Derecho de Familia (Divorcios, Alimentos, Filiación)</option>
          <option value="Sucesiones" className="dark:bg-[#121723]">Sucesiones (Testamentos, Declaratoria de Herederos)</option>
          <option value="Derecho Inmobiliario / Alquileres" className="dark:bg-[#121723]">Derecho Inmobiliario (Desalojos, Contratos, Locación)</option>
          <option value="Reclamos Civiles / Daños y Perjuicios" className="dark:bg-[#121723]">Reclamos Civiles (Daños y Perjuicios, Amparos)</option>
          <option value="Denuncias Penales" className="dark:bg-[#121723]">Denuncias Penales</option>
          <option value="Otro Asunto" className="dark:bg-[#121723]">Otro Asunto / Consulta General</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Detalle de su consulta *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Escriba aquí brevemente su situación para poder asesorarle adecuadamente..."
          className="w-full bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 focus:border-gold-500 dark:focus:border-gold-400 rounded-sm py-3 px-4 text-slate-900 dark:text-slate-100 text-sm outline-none transition-colors resize-none shadow-sm"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 disabled:bg-slate-350 disabled:text-slate-500 text-white font-bold rounded-sm text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md border border-slate-900 dark:border-slate-800"
      >
        {isSubmitting ? (
          <>
            <span className="animate-pulse">Enviando...</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4.5 h-4.5 fill-current text-gold-400" />
            Enviar Consulta por WhatsApp
          </>
        )}
      </button>
      
      <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
        * Al hacer clic se abrirá WhatsApp con el mensaje pre-armado para ser enviado de inmediato al Dr. Barbaricca.
      </p>
    </form>
  );
}
