"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const items = [
  {
    quote:
      "La traducción quedó clara, muy natural y lista para entregar. Me gustó la comunicación directa y el cuidado del formato.",
    name: "María González",
    role: "Coordinadora Académica",
  },
  {
    quote:
      "Excelente revisión: detectó detalles de tono y coherencia que mejoraron muchísimo el documento final.",
    name: "Carlos Méndez",
    role: "Especialista de Recursos Humanos",
  },
  {
    quote:
      "Entrega puntual y trato muy profesional. Ideal para cartas, CV y documentos que requieren buena presentación.",
    name: "Ana Sofía Paredes",
    role: "Profesional Independiente",
  },
];

export function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="Prueba social"
        title="Testimonios"
        subtitle="Opiniones de clientes (ejemplos de referencia para presentación del sitio)."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: prefersReduced ? 0 : i * 0.05 }}
            className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]"
          >
            <div className="absolute right-5 top-5 text-4xl text-black/10" aria-hidden>
              “
            </div>
            <blockquote className="text-sm leading-relaxed text-black/75">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[var(--ink)]">{t.name}</p>
                <p className="text-xs font-semibold text-black/60">{t.role}</p>
              </div>
              <div className="flex gap-0.5" aria-label="Calificación">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-[var(--brand-yellow)]" aria-hidden>
                    ★
                  </span>
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
