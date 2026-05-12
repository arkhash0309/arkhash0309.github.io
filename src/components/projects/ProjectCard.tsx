import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/cn';

type Props = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: Props) {
  const hasLink = Boolean(project.links?.github && project.links.github !== 'TODO');
  const href = hasLink ? project.links!.github : undefined;

  const inner = (
    <div className="flex h-full flex-col gap-5 p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        {hasLink ? (
          <ArrowUpRight
            size={18}
            className="text-text-muted transition-colors group-hover:text-accent"
          />
        ) : null}
      </div>
      <h3 className="font-display text-xl font-medium leading-tight text-text-primary">
        {project.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-text-secondary">
        {project.oneLiner}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );

  const baseClass = cn(
    'group block h-full rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-border-strong hover:bg-bg-subtle',
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={baseClass}>
        {inner}
      </a>
    );
  }
  return <div className={baseClass}>{inner}</div>;
}
