"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const stats = [
  { k: "20+ años", v: "de experiencia" },
  { k: "EN ↔ ES", v: "traducción bidireccional" },
  { k: "Certificada", v: "según requisitos aplicables" },
  { k: "Atención directa", v: "sin intermediarios" },
];

export function Stats() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="En números"
        title="Confianza que se nota"
        subtitle="Indicadores claros (sin promesas vacías). Si necesitas un dato específico, se confirma."
        align="center"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: prefersReduced ? 0 : i * 0.04 }}
            className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-[0_1px_0_rgba(0,0,0,.04)]"
          >
            <p className="font-[family-name:var(--font-fraunces)] text-3xl text-[var(--ink)]">{s.k}</p>
            <p className="mt-2 text-sm font-semibold text-black/70">{s.v}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-black/60">
        Proyectos entregados: <span className="font-extrabold text-black/80">[REEMPLAZAR]</span> •
        Promedio de respuesta: <span className="font-extrabold text-black/80">[REEMPLAZAR]</span>
      </p>
    </div>
  );
}
