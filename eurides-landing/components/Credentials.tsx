"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionWrapper";
import { SmartImage } from "@/components/SmartImage";

const bullets = [
  "Licenciatura en Inglés y Diversificada, Universidad de Panamá",
  "Post grado y Maestría en Administración Educativa, Universidad Latina",
  "Post grado en Docencia Superior, UDI",
  "Más de 20 años ejerciendo como facilitadora de Inglés",
  "Traductor(a) certificado(a) y registrada en el Ministerio de Relaciones Exteriores",
];

export function Credentials() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div>
        <SectionHeader
          eyebrow="Perfil profesional"
          title="Credenciales"
          subtitle="Experiencia docente + traducción certificada. Un servicio cuidado, directo y responsable."
        />

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]">
          <p className="text-sm font-semibold text-black/60">Nombre profesional</p>
          <p className="mt-1 text-xl font-extrabold text-[var(--ink)]">
            Eurides Melista Young Emanuel
          </p>

          <ul className="mt-5 grid gap-3 text-sm text-black/75">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-blue)]" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-black/70">
            Trabajo con un enfoque claro: comprender tu intención, cuidar el tono y asegurar que el texto final se lea
            natural en el idioma destino.
          </p>
        </div>
      </div>

      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="rounded-2xl border border-black/10 bg-[var(--soft)] p-6 shadow-soft"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-black/60">Sello</p>
            <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl text-[var(--ink)]">
              Certificación
            </h3>
          </div>
          <SmartImage
            src="/images/seals/certified-badge.svg"
            alt="Sello placeholder de certificación"
            ratio="badge"
            className="h-20 w-20 bg-white p-2"
            fallbackLabel="Certified Badge Placeholder"
          />
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5">
          <h4 className="text-base font-extrabold text-[var(--ink)]">¿Por qué importa?</h4>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            Cuando un documento requiere formalidad, la consistencia terminológica y el formato importan.
            Si el trámite exige requisitos específicos, se valida antes de entregar.
          </p>
          <p className="mt-3 text-sm font-semibold text-black/60">
            Métodos de pago: <span className="font-extrabold text-black/80">[REEMPLAZAR]</span>
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["Atención humana", "Comunicación directa por WhatsApp o correo."],
            ["Estilo natural", "Cuidando tono, coherencia y claridad."],
            ["Formato cuidado", "Listo para uso académico o profesional."],
            ["Confidencialidad", "Manejo responsable de archivos."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white p-4">
              <p className="text-sm font-extrabold text-[var(--ink)]">{t}</p>
              <p className="mt-1 text-xs leading-relaxed text-black/70">{d}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
