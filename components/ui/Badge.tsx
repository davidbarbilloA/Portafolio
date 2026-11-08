import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

const variants = {
  default: "bg-canvas-surface2 text-ink-secondary border border-border",
  accent: "bg-accent-soft text-accent-strong border border-accent/30",
  outline: "bg-transparent text-ink-tertiary border border-border",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
