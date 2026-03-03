"use client";

import React from "react";
import { SectionHeader } from "@/components/SectionWrapper";
import { mailtoLink, waLink } from "@/lib/utils";

const EMAIL = "emyoungab@gmail.com";
const WA_1 = "50766167325";
const WA_2 = "50760947295";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  idiomas: string;
  tipoDocumento: string;
  paginas: string;
  fechaDeseada: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  idiomas: "Inglés → Español",
  tipoDocumento: "Documento profesional",
  paginas: "",
  fechaDeseada: "",
  mensaje: "",
};

function buildMessage(s: FormState) {
  return [
    `Hola Eurides, me gustaría cotizar una traducción.`,
    ``,
    `Nombre: ${s.nombre || "[REEMPLAZAR]"}`,
    `Email: ${s.email || "[REEMPLAZAR]"}`,
    `Teléfono: ${s.telefono || "[REEMPLAZAR]"}`,
    `Idioma origen/destino: ${s.idiomas || "[REEMPLAZAR]"}`,
    `Tipo de documento: ${s.tipoDocumento || "[REEMPLAZAR]"}`,
    `Nº páginas/palabras: ${s.paginas || "[REEMPLAZAR]"}`,
    `Fecha deseada: ${s.fechaDeseada || "[REEMPLAZAR]"}`,
    ``,
    `Mensaje:`,
    `${s.mensaje || "[REEMPLAZAR]"}`,
  ].join("\n");
}

export function Contact() {
  const [state, setState] = React.useState<FormState>(initial);

  const message = buildMessage(state);
  const waHref1 = waLink(WA_1, message);
  const waHref2 = waLink(WA_2, message);
  const mailHref = mailtoLink(
    EMAIL,
    "Solicitud de cotización — Traducción Inglés ↔ Español",
    message
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionHeader
          eyebrow="Hablemos"
          title="Contacto"
          subtitle="Envíame tu documento o una muestra y te respondo con tiempo estimado y cotización."
        />

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)]">
          <h3 className="text-base font-extrabold text-[var(--ink)]">Datos</h3>
          <div className="mt-4 grid gap-3 text-sm text-black/70">
            <p>
              <span className="font-semibold text-black/60">Email:</span>{" "}
              <a className="font-extrabold text-[var(--ink)] underline decoration-black/20 underline-offset-4 hover:decoration-black/40" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>
              <span className="font-semibold text-black/60">WhatsApp:</span>{" "}
              <a className="font-extrabold text-[var(--ink)] underline decoration-black/20 underline-offset-4 hover:decoration-black/40" href={waLink(WA_1, "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")} target="_blank" rel="noreferrer">
                66167325
              </a>{" "}
              /{" "}
              <a className="font-extrabold text-[var(--ink)] underline decoration-black/20 underline-offset-4 hover:decoration-black/40" href={waLink(WA_2, "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")} target="_blank" rel="noreferrer">
                60947295
              </a>
            </p>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <a
              href={waLink(WA_1, "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-4 py-3 text-sm font-extrabold text-[var(--ink)] shadow-soft"
            >
              WhatsApp 66167325
            </a>
            <a
              href={waLink(WA_2, "Hola Eurides, me gustaría cotizar una traducción EN↔ES.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm font-extrabold text-[var(--ink)] hover:bg-black/5"
            >
              WhatsApp 60947295
            </a>
          </div>

          <p className="mt-6 text-sm text-black/60">
            Respuesta en <span className="font-extrabold text-black/80">1-5</span> horas.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-[var(--soft)] p-6">
          <h4 className="text-base font-extrabold text-[var(--ink)]">Tip rápido</h4>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            Si el documento es para un trámite, indica el país/entidad que lo solicita. Así verificamos si requiere traducción certificada y formato específico.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--ink)]">
          Formulario de cotización
        </h3>
        <p className="mt-2 text-sm text-black/65">
          No envía nada al servidor. Al presionar, se arma el mensaje para WhatsApp o correo.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <Field
            label="Nombre"
            value={state.nombre}
            onChange={(v) => setState((s) => ({ ...s, nombre: v }))}
            placeholder="Tu nombre"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              value={state.email}
              onChange={(v) => setState((s) => ({ ...s, email: v }))}
              placeholder="tu@email.com"
              inputMode="email"
            />
            <Field
              label="Teléfono"
              value={state.telefono}
              onChange={(v) => setState((s) => ({ ...s, telefono: v }))}
              placeholder="(opcional)"
              inputMode="tel"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              label="Idioma origen/destino"
              value={state.idiomas}
              onChange={(v) => setState((s) => ({ ...s, idiomas: v }))}
              options={["Inglés → Español", "Español → Inglés", "EN ↔ ES (ambos)"]}
            />
            <Select
              label="Tipo de documento"
              value={state.tipoDocumento}
              onChange={(v) => setState((s) => ({ ...s, tipoDocumento: v }))}
              options={[
                "Documento académico",
                "Documento profesional (CV, cartas, perfiles)",
                "Documento personal",
                "Otro"
              ]}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Nº de páginas/palabras"
              value={state.paginas}
              onChange={(v) => setState((s) => ({ ...s, paginas: v }))}
              placeholder="Ej: 3 páginas / 850 palabras"
            />
            <Field
              label="Fecha deseada"
              value={state.fechaDeseada}
              onChange={(v) => setState((s) => ({ ...s, fechaDeseada: v }))}
              placeholder="Ej: 10/04/2026"
            />
          </div>

          <Textarea
            label="Mensaje"
            value={state.mensaje}
            onChange={(v) => setState((s) => ({ ...s, mensaje: v }))}
            placeholder="Describe el objetivo del documento, tono, y cualquier detalle importante."
          />

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <a
              href={waHref1}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-yellow)] px-4 py-3 text-sm font-extrabold text-[var(--ink)] shadow-soft hover:translate-y-[-1px]"
            >
              Enviar por WhatsApp (66167325)
            </a>
            <a
              href={waHref2}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm font-extrabold text-[var(--ink)] hover:bg-black/5"
            >
              Enviar por WhatsApp (60947295)
            </a>
          </div>

          <a
            href={mailHref}
            className="mt-1 inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm font-extrabold text-[var(--ink)] hover:bg-black/5"
          >
            Enviar por Email
          </a>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const id = React.useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-extrabold text-black/70">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="h-11 rounded-2xl border border-black/15 bg-[var(--soft)] px-4 text-sm text-[var(--ink)] placeholder:text-black/40"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const id = React.useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-extrabold text-black/70">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="rounded-2xl border border-black/15 bg-[var(--soft)] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-black/40"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const id = React.useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-extrabold text-black/70">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-2xl border border-black/15 bg-[var(--soft)] px-4 text-sm font-semibold text-[var(--ink)]"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
