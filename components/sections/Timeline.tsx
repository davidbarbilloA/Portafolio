"use client";

import { TIMELINE } from "@/constants/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="De los fundamentos a Full Stack."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-4">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((entry, i) => (
              <RevealOnScroll key={entry.title} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-2 pl-12 md:w-1/2 ${i % 2 === 0
                      ? "md:ml-0 md:pr-10 md:text-right"
                      : "md:ml-auto md:pl-10 md:text-left"
                    }`}
                >
                  <span
                    className={`absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-base bg-accent ${i % 2 === 0 ? "md:left-auto md:-right-1.5" : "md:-left-1.5"
                      }`}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {entry.year}
                  </span>
                  <h3 className="font-display text-base font-medium text-ink-primary">
                    {entry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {entry.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
