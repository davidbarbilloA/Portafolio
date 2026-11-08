import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-3xl md:mb-16", className)}>
      <p className="mb-3 text-sm text-ink-tertiary">{eyebrow}</p>
      <h2 className="font-display text-display-2 font-normal text-ink-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
