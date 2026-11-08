import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none";

export const buttonVariants = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong",
  secondary:
    "bg-canvas-surface text-ink-primary border border-border hover:border-border-strong hover:bg-canvas-surface2",
  ghost: "text-ink-secondary hover:text-ink-primary hover:bg-canvas-surface",
};

export const buttonSizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
