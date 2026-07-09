"use client";

import { MapPin } from "lucide-react";
import { EXPERIENCE } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experiencia"
          title="Trayectoria profesional."
          description="Cada rol suma tanto código como criterio de sistemas — la combinación que sostiene mi forma de construir software."
        />

        <div className="relative space-y-8 border-l border-border pl-8 md:pl-10">
          {EXPERIENCE.map((exp, i) => (
            <RevealOnScroll key={exp.company + exp.role} delay={i * 0.1}>
              <div className="relative">
                <span
                  className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full md:-left-[calc(2.5rem+5px)] ${
                    exp.current ? "bg-accent" : "bg-border-strong"
                  }`}
                />
                <div className="rounded-2xl border border-border bg-base-surface/40 p-6 transition-colors duration-500 hover:border-border-strong hover:bg-base-surface/70 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink-primary md:text-xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-accent-strong">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs uppercase tracking-wider text-ink-tertiary">
                        {exp.period}
                      </p>
                      {exp.location && (
                        <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-tertiary">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-ink-secondary"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
