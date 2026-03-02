import React from "react";
import { waLink } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#credenciales", label: "Credenciales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--ink)]">
              Eurides Young
            </p>
            <p className="mt-2 text-sm text-black/70">
              Traducciones Inglés ↔ Español con atención directa.
            </p>
            <a
              href={waLink("50766167325", "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-4 py-2 text-sm font-extrabold text-[var(--ink)] shadow-soft"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          <div>
            <p className="text-sm font-extrabold text-[var(--ink)]">Secciones</p>
            <ul className="mt-3 grid gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="text-black/70 hover:text-black" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold text-[var(--ink)]">Contacto</p>
            <div className="mt-3 grid gap-2 text-sm text-black/70">
              <a className="hover:text-black" href="mailto:emyoungab@gmail.com">
                emyoungab@gmail.com
              </a>
              <span>WhatsApp: 66167325 / 60947295</span>
              <span className="text-xs text-black/55">
                Nota: Traducción certificada según requisitos aplicables.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Eurides Melista Young Emanuel</span>
          <span>Hecho con Next.js + Tailwind + Motion</span>
        </div>
      </div>
    </footer>
  );
}
