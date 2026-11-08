import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/constants/site";
import { buttonBase, buttonSizes, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconLink =
  "inline-flex min-h-11 items-center gap-2 px-1 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden lg:flex lg:min-h-[100svh] lg:items-center"
    >
      {/* Sin animación de entrada: es el elemento principal de la carga (LCP). */}
      <div className="portrait-mask relative aspect-[5/4] w-full sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[56%]">
        <Image
          src="/profile.jpg"
          alt="Retrato de David Barbillo con gafas, sombrero negro y gabardina beige, mirando hacia un lado"
          fill
          priority
          quality={90}
          // object-cover: en pantallas altas la altura manda (foto 4:5, 100vh de alto → 80vh de ancho).
          sizes="(min-width: 1024px) max(56vw, 80vh), 100vw"
          className="object-cover object-[50%_12%] lg:object-[50%_20%]"
        />
      </div>

      {/* Entrada con CSS: el nombre no debe depender de que hidrate JavaScript. */}
      <div className="relative z-10 mx-auto -mt-16 w-full max-w-6xl animate-hero-in px-6 pb-20 sm:-mt-24 lg:mt-0 lg:py-28">
        <h1 className="font-display text-display-1 font-normal text-ink-primary">
          David
          <br />
          <em>Barbillo</em>
        </h1>

        <p className="mt-6 text-lg font-medium text-ink-primary md:text-xl">
          <span className="block">{SITE.shortRole}</span>
          <span className="block">{SITE.roleStack}</span>
        </p>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-secondary">
          {SITE.tagline}
        </p>

        {SITE.availableForWork && (
          <p className="mt-4 text-sm text-ink-secondary">
            {SITE.location}. Disponible para nuevas oportunidades.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className={cn(buttonBase, buttonVariants.primary, buttonSizes.lg)}
          >
            Ver proyectos
          </a>
          <a
            href={SITE.resumeUrl}
            download
            className={cn(buttonBase, buttonVariants.secondary, buttonSizes.lg)}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </a>
          <div className="flex items-center gap-4 sm:ml-3">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <dl className="mt-10 flex max-w-lg flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
          {SITE.quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-ink-tertiary">{fact.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink-primary">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
