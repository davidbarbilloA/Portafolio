"use client";

import { ExternalLink, Github, Plus } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";

const statusColor: Record<string, string> = {
  "En producción": "text-emerald-400",
  "En desarrollo": "text-accent-strong",
  Archivado: "text-ink-tertiary",
  Próximamente: "text-amber-400",
};

export function Projects() {
  const isEmpty = PROJECTS.length === 0;

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo seleccionado."
          description="Cada proyecto incluye su contexto, stack y enlaces. Esta grilla está lista para crecer."
        />

        {isEmpty ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-8 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-tertiary">
                    <Plus className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-ink-secondary">
                    Espacio para tu próximo proyecto
                  </p>
                  <p className="max-w-[220px] text-xs leading-relaxed text-ink-tertiary">
                    Agrega título, stack, enlaces y estado en{" "}
                    <code className="font-mono">constants/projects.ts</code>
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <RevealOnScroll key={project.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-base-surface/40 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:bg-base-surface/70">
                  <div className="relative aspect-video w-full overflow-hidden bg-base-surface2">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-ink-tertiary">
                        Vista previa
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider ${
                          statusColor[project.status]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-medium text-ink-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3 border-t border-border pt-5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                        >
                          <Github className="h-4 w-4" />
                          Código
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
