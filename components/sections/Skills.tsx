"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SKILLS } from "@/constants/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";
import { SkillCategory } from "@/types";

const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Bases de datos",
  "Cloud",
  "Herramientas",
  "Administración TI",
];

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const filtered = SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack técnico"
          title="Herramientas que domino, ordenadas por criterio."
          description="Frontend en producción, backend en expansión activa, e infraestructura como base — la combinación que define mi perfil."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-300",
                active === cat
                  ? "text-base"
                  : "text-ink-secondary hover:text-ink-primary"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="skills-pill"
                  className="absolute inset-0 rounded-full bg-ink-primary"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-x-10 gap-y-6 sm:grid-cols-2"
        >
          {filtered.map((skill, i) => (
            <RevealOnScroll key={skill.name} delay={i * 0.04} y={12}>
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-ink-primary">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[11px] text-ink-tertiary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-base-surface2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
