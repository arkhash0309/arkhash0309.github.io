import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border-subtle bg-bg-subtle px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-text-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}
