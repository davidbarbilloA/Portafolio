"use client";

import * as Icons from "lucide-react";
import { SERVICES } from "@/constants/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Qué puedo ofrecer"
          title="Servicios."
          description="De la interfaz a la infraestructura que la sostiene."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              service.icon
            ];
            return (
              <RevealOnScroll key={service.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-base-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-base-surface/70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent-soft">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                  </span>
                  <h3 className="mt-5 font-display text-base font-medium text-ink-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
