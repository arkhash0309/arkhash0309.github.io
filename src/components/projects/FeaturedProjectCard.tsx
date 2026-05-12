import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';

type Props = {
  project: Project;
  index: number;
};

export function FeaturedProjectCard({ project, index }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border-b border-border-subtle py-10 transition-colors hover:bg-bg-subtle/40 md:py-14"
    >
      <div className="grid grid-cols-12 items-start gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {String(index + 1).padStart(2, '0')} / Featured
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display text-2xl font-medium leading-[1.15] tracking-tight text-text-primary md:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {project.oneLiner}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-end md:col-span-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-muted transition-colors group-hover:text-accent">
            <span>Read case study</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
