"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/nav";
import { SITE } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { buttonBase, buttonSizes, buttonVariants } from "@/components/ui/Button";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeId = useActiveSection(SECTION_IDS);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > previous && latest > 160) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-border bg-canvas/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          onClick={() => setMobileOpen(false)}
          className="flex min-h-11 items-center font-display text-xl text-ink-primary"
        >
          David Barbillo
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex min-h-11 items-center border-b border-transparent text-sm transition-colors duration-200",
                  isActive
                    ? "text-ink-primary"
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href={SITE.resumeUrl}
          download
          className={cn(
            buttonBase,
            buttonVariants.secondary,
            buttonSizes.sm,
            "hidden md:inline-flex"
          )}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Descargar CV
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-ink-primary md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Principal, móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center text-base text-ink-secondary transition-colors hover:text-ink-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.resumeUrl}
                download
                className={cn(buttonBase, buttonVariants.primary, buttonSizes.md, "mt-2")}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
