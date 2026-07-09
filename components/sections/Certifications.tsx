"use client";

import { Award, Clock, ListChecks } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const statusIcon = {
  Completada: Award,
  "En proceso": Clock,
  Planificada: ListChecks,
};

const statusStyle = {
  Completada: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "En proceso": "text-accent-strong border-accent/30 bg-accent-soft",
  Planificada: "text-ink-tertiary border-border bg-base-surface2",
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certificaciones"
          title="Formación continua, verificable."
          description="Certificaciones completadas, en curso y planificadas — actualizado a medida que avanzo."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = statusIcon[cert.status];
            return (
              <RevealOnScroll key={cert.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-base-surface/40 p-6 transition-colors duration-500 hover:border-border-strong hover:bg-base-surface/70">
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${statusStyle[cert.status]}`}
                  >
                    <Icon className="h-3 w-3" />
                    {cert.status}
                  </span>
                  <h3 className="mt-4 flex-1 font-display text-sm font-medium leading-snug text-ink-primary">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-xs text-ink-tertiary">{cert.issuer}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
