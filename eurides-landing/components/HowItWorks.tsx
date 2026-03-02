"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const steps = [
  {
    title: "Envía tu documento",
    desc: "Comparte el archivo por WhatsApp o correo. Indica idioma origen/destino y el tipo de documento.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 7h10v10H7z" />
        <path d="M9 3h6" />
        <path d="M12 3v4" />
      </svg>
    ),
  },
  {
    title: "Recibe cotización y tiempo",
    desc: "Te confirmo alcance, precio estimado y entrega. Si hace falta, aclaramos dudas antes de iniciar.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M6 9h12" />
        <path d="M6 13h8" />
        <path d="M6 17h10" />
        <path d="M5 5h14v14H5z" />
      </svg>
    ),
  },
  {
    title: "Entrega y revisión final",
    desc: "Entrego la traducción y realizamos una revisión final. Ajustes razonables incluidos según el plan.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M20 7 10 17l-5-5" />
        <path d="M4 4h16v16H4z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="Proceso simple"
        title="Cómo funciona"
        subtitle="Un flujo claro, sin pasos innecesarios. Atención directa de principio a fin."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: prefersReduced ? 0 : i * 0.05 }}
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--soft)] text-[var(--ink)]">
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{s.desc}</p>
              </div>
            </div>

            <div className="mt-5 h-px w-full bg-black/10" />
            <p className="mt-4 text-xs font-semibold text-black/55">
              Paso {i + 1} de {steps.length}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
