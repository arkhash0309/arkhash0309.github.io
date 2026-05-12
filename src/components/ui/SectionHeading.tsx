import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({ index, label, title, description, className }: Props) {
  return (
    <div className={cn('mb-16 max-w-3xl', className)}>
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px flex-1 bg-border-subtle md:flex-none md:w-12" aria-hidden />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-tightest leading-[1.05] text-text-primary">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
