"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SITE } from "@/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

const CONTACT_LINKS = [
  { label: "Correo", value: SITE.email, href: `mailto:${SITE.email}`, icon: Mail },
  { label: "GitHub", value: "github.com", href: SITE.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com", href: SITE.linkedin, icon: Linkedin },
  { label: "Ubicación", value: SITE.location, href: undefined, icon: MapPin },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto."
          description="Respondo en menos de 24 horas. Si prefieres, escríbeme directamente por correo o LinkedIn."
        />

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll>
            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => {
                const Content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-base-surface/40 p-5 transition-colors duration-500 hover:border-border-strong hover:bg-base-surface/70">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-accent">
                      <link.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                        {link.label}
                      </p>
                      <p className="text-sm text-ink-primary">{link.value}</p>
                    </div>
                    {link.href && (
                      <ArrowUpRight className="h-4 w-4 text-ink-tertiary" />
                    )}
                  </div>
                );
                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={link.label}>{Content}</div>
                );
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-base-surface/40 p-7 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-base-surface2 px-4 py-3 text-sm text-ink-primary outline-none transition-colors duration-300 placeholder:text-ink-tertiary focus:border-accent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                    Correo
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-base-surface2 px-4 py-3 text-sm text-ink-primary outline-none transition-colors duration-300 placeholder:text-ink-tertiary focus:border-accent"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-base-surface2 px-4 py-3 text-sm text-ink-primary outline-none transition-colors duration-300 placeholder:text-ink-tertiary focus:border-accent"
                  placeholder="Cuéntame sobre el proyecto o la posición..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {sent ? "Abriendo tu cliente de correo…" : "Enviar mensaje"}
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
