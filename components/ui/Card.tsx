import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-base-surface/60 p-6 shadow-card backdrop-blur-sm transition-all duration-500 ease-premium hover:border-border-strong hover:bg-base-surface",
        className
      )}
      {...props}
    />
  );
}
