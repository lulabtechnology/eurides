"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn, waLink } from "@/lib/utils";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#credenciales", label: "Credenciales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const prefersReduced = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Saltar al contenido
      </a>

      <div className="border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <a href="#" className="group inline-flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-fraunces)] text-lg tracking-tight text-[var(--ink)]">
                Eurides Young
              </span>
              <span className="hidden text-sm font-medium text-black/60 sm:inline">
                Traducciones
              </span>
              <span
                className="ml-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-yellow)]"
                aria-hidden
              />
            </a>
          </div>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-black/70 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={waLink("50766167325", "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
              className={cn(
                "inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_1px_0_rgba(0,0,0,.04)] hover:bg-black/5"
              )}
              aria-label="Abrir WhatsApp para cotizar"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-4 py-2 text-sm font-extrabold text-[var(--ink)] shadow-soft hover:translate-y-[-1px] hover:shadow-softer active:translate-y-0"
            >
              Cotizar ahora
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-3 py-2 text-sm font-semibold text-[var(--ink)] lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <div className="grid gap-1.5" aria-hidden>
              <span className={cn("block h-0.5 w-6 bg-[var(--ink)] transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-6 bg-[var(--ink)] transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-6 bg-[var(--ink)] transition", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-b border-black/10 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-black/80 hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a
                href={waLink("50766167325", "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
                className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm font-extrabold text-[var(--ink)]"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-4 py-3 text-sm font-extrabold text-[var(--ink)] shadow-soft"
              >
                Cotizar ahora
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
