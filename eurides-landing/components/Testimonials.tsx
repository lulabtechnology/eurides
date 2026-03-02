"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const items = [
  {
    quote:
      "La traducción quedó clara y muy bien redactada. La comunicación fue directa y el proceso fue sencillo.",
    name: "[REEMPLAZAR]",
    role: "[REEMPLAZAR]",
  },
  {
    quote:
      "Excelente cuidado del formato y la terminología. Me gustó que validara detalles antes de entregar.",
    name: "[REEMPLAZAR]",
    role: "[REEMPLAZAR]",
  },
  {
    quote:
      "Entrega puntual y trato muy profesional. Recomendada para documentos académicos y profesionales.",
    name: "[REEMPLAZAR]",
    role: "[REEMPLAZAR]",
  },
];

export function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="Prueba social"
        title="Testimonios"
        subtitle="Estos son placeholders hasta que se agreguen testimonios reales (nombre/cargo)."
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
            <blockquote className="text-sm leading-relaxed text-black/75">
              {t.quote}
            </blockquote>
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
