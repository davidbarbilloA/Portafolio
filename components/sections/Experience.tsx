import { EXPERIENCE } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-border bg-canvas-raised py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experiencia" title="Dónde he trabajado." />

        <div className="divide-y divide-border">
          {EXPERIENCE.map((exp) => (
            <article
              key={exp.company + exp.role}
              className="grid gap-4 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-8"
            >
              <div className="text-sm text-ink-tertiary md:col-span-3">
                <p className="font-medium text-ink-secondary">{exp.period}</p>
                {exp.location && <p className="mt-1">{exp.location}</p>}
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-display-3 font-normal text-ink-primary">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-secondary">
                  {exp.company}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="mt-6 max-w-2xl space-y-3">
                    {exp.highlights.map((highlight) => (
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
                )}

                {exp.stack && (
                  <ul
                    aria-label={`Áreas de trabajo como ${exp.role}`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {exp.stack.map((item) => (
                      <li key={item}>
                        <Badge>{item}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
