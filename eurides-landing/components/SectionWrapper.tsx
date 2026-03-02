import React from "react";
import { cn } from "@/lib/utils";

export function SectionWrapper({
  id,
  className,
  children,
  tone = "plain",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "plain" | "soft";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-14 sm:py-20",
        tone === "soft" && "bg-[var(--soft)]",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-yellow)]" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-fraunces)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-black/70 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
