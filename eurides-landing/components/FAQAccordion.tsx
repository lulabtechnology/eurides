"use client";

import React from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";

const faqs = [
  {
    q: "¿Qué documentos traduces?",
    a: "Documentos académicos, profesionales y textos generales EN↔ES. Si tu documento tiene requisitos especiales, se confirma antes de iniciar.",
  },
  {
    q: "¿Cuánto tardas?",
    a: "Depende de la extensión y complejidad. En la mayoría de casos, la entrega se maneja entre 24 y 72 horas (se confirma al recibir el documento).",
  },
  {
    q: "¿Cómo se envía el documento?",
    a: "Puedes enviarlo por WhatsApp o correo. Formatos comunes: PDF y Word. Si el archivo requiere formato específico, lo indicas y se trabaja en base a eso.",
  },
  {
    q: "¿La traducción es certificada?",
    a: "Sí, cuando aplica. Se valida el requisito del trámite (país/entidad solicitante) y se entrega según lo solicitado.",
  },
  {
    q: "¿Incluye revisión?",
    a: "Sí. Incluye revisión de coherencia, estilo y ortografía. El nivel de revisión varía según el plan y el tipo de documento.",
  },
  {
    q: "¿Cómo se solicita una cotización?",
    a: "Envíame el documento (o una muestra), indica idioma origen/destino y fecha deseada. Te respondo con precio y tiempo estimado.",
  },
  { q: "¿Qué métodos de pago aceptas?", a: "Yappy o transferencia." },
  {
    q: "¿Manejas confidencialidad?",
    a: "Sí. Manejo responsable de archivos y contenido. Si necesitas un acuerdo de confidencialidad, lo coordinamos antes de iniciar.",
  },
];

export function FAQAccordion() {
  const prefersReduced = useReducedMotion();
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div>
      <SectionHeader
        eyebrow="Dudas comunes"
        title="FAQ"
        subtitle="Respuestas cortas y claras. Si algo no aparece aquí, pregunta sin pena."
      />

      <div className="mt-10 grid gap-3">
        {faqs.map((f, idx) => {
          const active = open === idx;
          return (
            <div key={f.q} className="rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,.04)]">
              <button
                type="button"
                onClick={() => setOpen((v) => (v === idx ? null : idx))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={active}
              >
                <span className="text-sm font-extrabold text-[var(--ink)]">{f.q}</span>
                <span
                  className={[
                    "grid h-8 w-8 place-items-center rounded-xl border border-black/10 bg-[var(--soft)] text-[var(--ink)] transition",
                    active ? "rotate-45" : "rotate-0",
                  ].join(" ")}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {active ? (
                  <motion.div
                    initial={prefersReduced ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={prefersReduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: prefersReduced ? 0 : 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed text-black/70">{f.a}</div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
