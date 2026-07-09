import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:pointer-events-none";

export const buttonVariants = {
  primary:
    "bg-ink-primary text-base hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-base-surface text-ink-primary border border-border hover:border-border-strong hover:bg-base-surface2 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-secondary hover:text-ink-primary hover:bg-base-surface",
};

export const buttonSizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3.5",
};

const base = buttonBase;
const variants = buttonVariants;
const sizes = buttonSizes;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
