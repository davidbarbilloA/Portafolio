import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import { ProjectEntry } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { buttonBase, buttonSizes, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function ProjectMeta({ project }: { project: ProjectEntry }) {
  return (
    <p className="text-sm text-ink-tertiary">
      {project.category} · {project.status}
    </p>
  );
}

function ProjectHighlights({ project }: { project: ProjectEntry }) {
  return (
    <ul className="space-y-2.5">
      {project.highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex gap-3 text-sm leading-relaxed text-ink-secondary"
        >
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-tertiary"
          />
          {highlight}
        </li>
      ))}
    </ul>
  );
}

function ProjectStack({ project }: { project: ProjectEntry }) {
  return (
    <ul aria-label={`Tecnologías de ${project.title}`} className="flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <li key={tech}>
          <Badge>{tech}</Badge>
        </li>
      ))}
    </ul>
  );
}

function ProjectFacts({ project }: { project: ProjectEntry }) {
  if (!project.facts) return null;
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-8 md:grid-cols-4">
      {project.facts.map((fact) => (
        <div key={fact.label} className="flex flex-col-reverse justify-end gap-1">
          <dt className="text-sm text-ink-tertiary">{fact.label}</dt>
          <dd className="font-display text-display-2 text-ink-primary">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectLinks({ project }: { project: ProjectEntry }) {
  if (project.privateNote) {
    return (
      <p className="flex gap-2 text-sm leading-relaxed text-ink-tertiary">
        <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {project.privateNote}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver el código de ${project.title} en GitHub`}
          className={cn(buttonBase, buttonVariants.secondary, buttonSizes.md)}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Ver código
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonBase, buttonVariants.ghost, buttonSizes.md)}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {project.demoLabel ?? "Ver demo"}
        </a>
      )}
    </div>
  );
}

function ProjectShot({ project, sizes }: { project: ProjectEntry; sizes: string }) {
  if (!project.image) return null;
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-canvas-surface">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}

function FeaturedProject({ project }: { project: ProjectEntry }) {
  return (
    <article>
      <RevealOnScroll>
        <ProjectShot project={project} sizes="(min-width: 1152px) 1104px, 100vw" />
        <ProjectFacts project={project} />
      </RevealOnScroll>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ProjectMeta project={project} />
          <h3 className="mt-2 font-display text-display-3 font-normal text-ink-primary">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-secondary">
            {project.description}
          </p>
          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-6 lg:col-start-7">
          <ProjectHighlights project={project} />
          <ProjectStack project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ project, flip }: { project: ProjectEntry; flip: boolean }) {
  return (
    <article className="grid items-start gap-8 lg:grid-cols-12">
      <RevealOnScroll className={cn("lg:col-span-7", flip && "lg:order-2")}>
        <ProjectShot project={project} sizes="(min-width: 1024px) 640px, 100vw" />
      </RevealOnScroll>
      <div className={cn("space-y-5 lg:col-span-5", flip && "lg:order-1")}>
        <div>
          <ProjectMeta project={project} />
          <h3 className="mt-2 font-display text-display-3 font-normal text-ink-primary">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-secondary">
            {project.description}
          </p>
        </div>
        <ProjectHighlights project={project} />
        <ProjectStack project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Proyectos" title="Lo que he construido." />

        <div className="space-y-20 md:space-y-28">
          {featured && <FeaturedProject project={featured} />}
          {rest.map((project, i) => (
            <ProjectRow key={project.title} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
