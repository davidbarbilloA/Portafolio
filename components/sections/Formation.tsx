import { ArrowUpRight, ChevronDown } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/certifications";
import { EDUCATION } from "@/constants/education";
import { CertificationEntry } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CertificationRow({ cert }: { cert: CertificationEntry }) {
  const content = (
    <>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-ink-primary">{cert.name}</span>
        <span className="mt-0.5 block text-xs text-ink-tertiary">
          {cert.issuer}
          {cert.status !== "Completada" && ` · ${cert.status}`}
        </span>
      </span>
      {cert.url && (
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-ink-tertiary transition-colors duration-200 group-hover:text-accent"
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <li>
      {cert.url ? (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver diploma de ${cert.name}, ${cert.issuer}`}
          className="group flex items-start justify-between gap-4 py-3.5"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-start justify-between gap-4 py-3.5">{content}</div>
      )}
    </li>
  );
}

export function Formation() {
  const featured = CERTIFICATIONS.filter((cert) => cert.featured);
  const others = CERTIFICATIONS.filter((cert) => !cert.featured);

  return (
    <section
      id="formation"
      className="relative border-t border-border bg-canvas-raised py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Formación" title="Lo que sigo aprendiendo." />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-normal text-ink-primary">
              Educación
            </h3>
            <ul className="mt-4 divide-y divide-border border-t border-border">
              {EDUCATION.map((edu) => (
                <li key={edu.degree} className="py-5">
                  <p className="text-base font-medium text-ink-primary">{edu.degree}</p>
                  <p className="mt-1 text-sm text-ink-tertiary">
                    {[edu.institution, edu.period, edu.status]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {edu.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal text-ink-primary">
              Certificaciones
            </h3>
            <ul className="mt-4 divide-y divide-border border-t border-border">
              {featured.map((cert) => (
                <CertificationRow key={cert.name} cert={cert} />
              ))}
            </ul>

            {others.length > 0 && (
              <details className="group/details border-t border-border">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-ink-primary [&::-webkit-details-marker]:hidden">
                  Ver todas ({CERTIFICATIONS.length})
                  <ChevronDown
                    className="h-4 w-4 text-ink-tertiary transition-transform duration-200 group-open/details:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="divide-y divide-border border-t border-border">
                  {others.map((cert) => (
                    <CertificationRow key={cert.name} cert={cert} />
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
