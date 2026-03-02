"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const services = [
  { title: "Traducción Inglés → Español", tag: "EN → ES" },
  { title: "Traducción Español → Inglés", tag: "ES → EN" },
  { title: "Documentos académicos", tag: "Tesis, ensayos" },
  { title: "Documentos profesionales", tag: "CV, cartas" },
  { title: "Contenido educativo / docencia", tag: "Material didáctico" },
  { title: "Revisión y corrección", tag: "Proofreading" },
];

export function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="Lo que hago"
        title="Servicios"
        subtitle="Traducción y revisión con enfoque en claridad, intención y terminología."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: prefersReduced ? 0 : i * 0.04 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-extrabold text-[var(--ink)]">{s.title}</h3>
              <span className="shrink-0 rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-extrabold text-black/70">
                {s.tag}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Enfoque en naturalidad, coherencia y fidelidad al sentido del texto original.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-black/60">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-yellow)]" aria-hidden />
              Cotización según extensión y complejidad
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
