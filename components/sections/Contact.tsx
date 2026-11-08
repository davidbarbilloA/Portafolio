"use client";

import { FormEvent, useState } from "react";
import { Check, Copy, Download, Github, Linkedin } from "lucide-react";
import { SITE } from "@/constants/site";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-lg border border-border bg-canvas-surface px-4 py-3 text-base text-ink-primary transition-colors duration-200 placeholder:text-ink-tertiary hover:border-border-strong focus:border-accent";

const labelClass = "mb-2 block text-sm font-medium text-ink-secondary";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="mb-3 text-sm text-ink-tertiary">Contacto</p>
          <h2 className="font-display text-display-2 font-normal text-ink-primary">
            ¿Buscas a alguien para tu equipo?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary">
            Escríbeme por correo o LinkedIn, o descarga mi CV. Estoy en{" "}
            {SITE.location}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex min-h-11 items-center break-all text-lg font-medium text-ink-primary underline decoration-accent decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent md:text-xl"
            >
              {SITE.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copiar correo"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-tertiary transition-colors duration-200 hover:bg-canvas-surface hover:text-ink-primary"
            >
              {copyState === "copied" ? (
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
          <p aria-live="polite" className="mt-1 min-h-5 text-sm text-ink-tertiary">
            {copyState === "copied" && "Correo copiado."}
            {copyState === "failed" && "No se pudo copiar. Selecciona el correo y cópialo."}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href={SITE.resumeUrl} download className={linkClass}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar CV
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-5 lg:col-start-8">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Nombre
            </label>
            <input
              id="contact-name"
              required
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Correo
            </label>
            <input
              id="contact-email"
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Mensaje
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${fieldClass} resize-none`}
              placeholder="Cuéntame sobre la posición o el equipo"
            />
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Enviar mensaje
          </Button>
          <p aria-live="polite" className="min-h-5 text-sm text-ink-tertiary">
            {sent && `Se abrió tu aplicación de correo. Si no aparece, escríbeme a ${SITE.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
