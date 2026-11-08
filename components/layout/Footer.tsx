import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/site";

const iconClass =
  "flex h-11 w-11 items-center justify-center text-ink-tertiary transition-colors duration-200 hover:text-ink-primary";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-ink-tertiary">
          © {new Date().getFullYear()} {SITE.name}. Diseñado y construido por mí.
        </p>

        <div className="flex items-center gap-1">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Correo" className={iconClass}>
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
