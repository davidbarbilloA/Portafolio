import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold text-ink-primary">
            David Barbillo
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-tertiary">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-tertiary transition-colors hover:text-ink-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-tertiary transition-colors hover:text-ink-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Correo"
            className="text-ink-tertiary transition-colors hover:text-ink-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-tertiary">
          Diseñado y construido por David Barbillo
        </p>
      </div>
    </footer>
  );
}
