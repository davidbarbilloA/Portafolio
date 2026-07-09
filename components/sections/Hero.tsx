"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { SITE } from "@/constants/site";
import { Button, buttonBase, buttonSizes, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 md:pt-24"
    >
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-70" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-tertiary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Disponible para nuevas oportunidades
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-display-1 font-medium leading-[1.02] text-ink-primary"
          >
            David Barbillo.
            <br />
            <span className="text-ink-secondary">
              Construyo software con
            </span>{" "}
            <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              criterio de sistemas.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={SITE.resumeUrl}
              download
              className={cn(
                buttonBase,
                buttonVariants.secondary,
                buttonSizes.lg
              )}
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {SITE.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-ink-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border bg-base-surface">
            {/* TODO: reemplaza este bloque por tu fotografía profesional (recomendado: retrato vertical, fondo neutro) */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-base-surface2 to-base-surface text-center">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-tertiary">
                Foto de perfil
              </span>
              <span className="text-xs text-ink-tertiary">
                1080 × 1350 recomendado
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-6 bottom-6 rounded-xl border border-border bg-base-surface/90 px-4 py-3 shadow-card backdrop-blur-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
              Foco actual
            </p>
            <p className="mt-0.5 text-sm font-medium text-ink-primary">
              React + Java Spring Boot
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
