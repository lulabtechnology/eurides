"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SmartImage } from "@/components/SmartImage";
import { cn, waLink } from "@/lib/utils";

const chips = ["20+ años", "Registro MIRE", "Docencia Superior", "Entrega puntual"];

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--brand-blue)] text-white">
      {/* subtle pattern + blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[url('/images/patterns/doodles.svg')] bg-cover bg-center"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div className="relative z-10">
          <motion.p
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-yellow)]" aria-hidden />
            Inglés ↔ Español • Traducción profesional
          </motion.p>

          <motion.h1
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReduced ? 0 : 0.04 }}
            className="mt-5 max-w-xl font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight sm:text-5xl"
          >
            Traducciones Inglés ↔ Español
            <span className="block">con respaldo profesional</span>
          </motion.h1>

          <motion.p
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReduced ? 0 : 0.08 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            +20 años de experiencia • Traductora certificada y registrada.
          </motion.p>

          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReduced ? 0 : 0.12 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-5 py-3 text-sm font-extrabold text-[var(--ink)] shadow-soft hover:translate-y-[-1px] hover:shadow-softer active:translate-y-0"
            >
              Cotizar mi traducción
            </a>
            <a
              href={waLink("50766167325", "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/15"
            >
              Hablar por WhatsApp
            </a>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur sm:grid-cols-2">
            <div className="text-sm">
              <p className="font-extrabold">Contacto directo</p>
              <p className="mt-1 text-white/85">emyoungab@gmail.com</p>
              <p className="text-white/85">WhatsApp: 66167325 / 60947295</p>
            </div>
            <div className="text-sm">
              <p className="font-extrabold">Ideal para</p>
              <p className="mt-1 text-white/85">
                documentos académicos, profesionales y traducciones certificadas.
              </p>
            </div>
          </div>

          {/* Logos placeholder (sin agregar sección extra) */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-white/80">
              Logos / instituciones (placeholder) — reemplazar si aplica
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
              {Array.from({ length: 8 }).map((_, idx) => (
                <SmartImage
                  key={idx}
                  src={`/images/clients/logo-${idx + 1}.svg`}
                  alt={`Logo placeholder ${idx + 1}`}
                  ratio="logo"
                  className="h-10 bg-white/10 p-2"
                  imgClassName="object-contain"
                  fallbackLabel={`Logo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Desktop illustration */}
          <div className="hidden lg:block">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReduced ? 0 : 0.08 }}
              className={cn(!prefersReduced && "animate-[floaty_6s_ease-in-out_infinite]")}
            >
              <SmartImage
                src="/images/hero-desktop.svg"
                alt="Ilustración placeholder hero desktop"
                ratio="heroDesktop"
                className="bg-white/10 p-4"
                priority
                fallbackLabel="Hero Desktop Placeholder"
              />
            </motion.div>
          </div>

          {/* Mobile illustration */}
          <div className="lg:hidden">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReduced ? 0 : 0.08 }}
              className={cn(!prefersReduced && "animate-[floaty_6s_ease-in-out_infinite]")}
            >
              <SmartImage
                src="/images/hero-mobile.svg"
                alt="Ilustración placeholder hero mobile"
                ratio="heroMobile"
                className="bg-white/10 p-4"
                priority
                fallbackLabel="Hero Mobile Placeholder"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\[floaty_6s_ease-in-out_infinite\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
