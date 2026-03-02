"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const plans = [
  {
    name: "Esencial",
    forWho: "Para textos cortos y necesidades puntuales.",
    price: "Desde [REEMPLAZAR]",
    time: "Tiempo estimado: [REEMPLAZAR]",
    items: ["Traducción EN↔ES", "Formato limpio", "Revisión básica"],
    featured: false,
  },
  {
    name: "Profesional",
    forWho: "Para documentos académicos o profesionales con mayor cuidado.",
    price: "Desde [REEMPLAZAR]",
    time: "Tiempo estimado: [REEMPLAZAR]",
    items: ["Traducción EN↔ES", "Revisión y coherencia", "Ajustes razonables"],
    featured: true,
  },
  {
    name: "Certificada / Oficial",
    forWho: "Cuando el documento requiere traducción certificada según requisitos aplicables.",
    price: "Desde [REEMPLAZAR]",
    time: "Tiempo estimado: [REEMPLAZAR]",
    items: ["Traducción certificada", "Formato para trámite", "Validación previa [REEMPLAZAR]"],
    featured: false,
  },
];

export function Pricing() {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      <SectionHeader
        eyebrow="Opciones claras"
        title="Planes / Precios"
        subtitle="No inventamos montos: el precio final depende de extensión, complejidad y requisitos."
        align="center"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: prefersReduced ? 0 : i * 0.04 }}
            className={[
              "relative rounded-2xl border p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]",
              p.featured ? "border-[var(--brand-blue)] bg-[var(--soft)] shadow-soft" : "border-black/10 bg-white",
            ].join(" ")}
          >
            {p.featured ? (
              <div className="absolute -top-3 left-6 rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-xs font-extrabold text-[var(--ink)] shadow-soft">
                Recomendado
              </div>
            ) : null}

            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--ink)]">
              {p.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black/70">{p.forWho}</p>

            <div className="mt-6 rounded-2xl bg-white p-4">
              <p className="text-sm font-extrabold text-[var(--ink)]">{p.price}</p>
              <p className="mt-1 text-xs font-semibold text-black/60">{p.time}</p>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-black/75">
              {p.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]" aria-hidden />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className={[
                "mt-7 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-extrabold",
                p.featured
                  ? "bg-[var(--brand-yellow)] text-[var(--ink)] shadow-soft hover:translate-y-[-1px]"
                  : "border border-black/15 bg-white text-[var(--ink)] hover:bg-black/5",
              ].join(" ")}
            >
              Solicitar cotización
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-black/60">
        Nota: Si necesitas una entrega urgente, indícalo y se evalúa disponibilidad <span className="font-extrabold text-black/80">[REEMPLAZAR]</span>.
      </p>
    </div>
  );
}
