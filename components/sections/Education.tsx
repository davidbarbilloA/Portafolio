"use client";

import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/constants/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Educación"
          title="Formación académica."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <RevealOnScroll key={edu.institution + edu.degree} delay={i * 0.1}>
              <div className="flex h-full gap-5 rounded-2xl border border-border bg-base-surface/40 p-7 transition-colors duration-500 hover:border-border-strong hover:bg-base-surface/70">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-accent">
                  <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-medium text-ink-primary">
                      {edu.degree}
                    </h3>
                    <Badge variant={edu.status === "Completado" ? "accent" : "default"}>
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-ink-secondary">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-tertiary">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
