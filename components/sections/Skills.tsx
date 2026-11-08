import { SKILL_GROUPS } from "@/constants/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Con qué trabajo." />

        <div className="divide-y divide-border border-y border-border">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 py-7 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-normal text-ink-primary">
                  {group.title}
                </h3>
                {group.note && (
                  <p className="mt-1 text-sm text-ink-tertiary">{group.note}</p>
                )}
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-8">
                {group.items.map((item) => (
                  <li key={item} className="text-base text-ink-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
