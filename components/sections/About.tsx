"use client";

import { Code2, Network, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PILLARS = [
  {
    icon: Code2,
    title: "Qué hago",
    text: "Diseño y construyo interfaces en React y TypeScript con estándares de producción, y estoy extendiendo esa base hacia el backend con Java y Spring Boot para moverme con soltura en todo el stack.",
  },
  {
    icon: Network,
    title: "Qué me diferencia",
    text: "Administro la infraestructura real detrás del software: redes, accesos, activos e identidad corporativa. Entiendo cómo se opera un sistema en producción, no solo cómo se construye.",
  },
  {
    icon: Target,
    title: "Qué busco",
    text: "Un equipo de ingeniería donde pueda seguir creciendo como Full Stack Developer, aportando además ese criterio operativo que normalmente solo se adquiere con años de experiencia.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Dos disciplinas, un mismo criterio de ingeniería."
          description="Mi camino no empezó únicamente escribiendo componentes: empezó administrando los sistemas que las empresas dan por sentado. Esa base técnica ahora forma parte de cómo diseño software."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-base-surface/40 p-7 transition-colors duration-500 hover:border-border-strong hover:bg-base-surface/70">
                <pillar.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-medium text-ink-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {pillar.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
