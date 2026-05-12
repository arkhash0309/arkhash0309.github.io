import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';
import { getNextProject } from '@/data/projects';

type Props = { project: Project };

const sections = [
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'results', label: 'Results' },
  { id: 'stack', label: 'Stack' },
  { id: 'links', label: 'Links' },
];

function ExternalLink({ href, label }: { href?: string; label: string }) {
  const valid = href && href !== 'TODO';
  if (!valid) {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
        {label}: <span className="text-text-muted/60">TODO</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-accent"
    >
      {label}
      <ArrowUpRight size={14} />
    </a>
  );
}

export function CaseStudyLayout({ project }: Props) {
  const cs = project.caseStudy;
  const next = getNextProject(project.slug);

  return (
    <article className="pt-32">
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
          <Link to="/#projects" className="hover:text-accent">
            ← Projects
          </Link>
          {project.year ? (
            <>
              <span className="h-px w-8 bg-border-subtle" aria-hidden />
              <span>{project.year}</span>
            </>
          ) : null}
        </div>
        <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tightest text-text-primary">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
          {project.oneLiner}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-wide grid-cols-12 gap-10 px-6 md:px-12 lg:px-24">
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-28 hidden lg:block">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              On this page
            </div>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="col-span-12 space-y-20 lg:col-span-9">
          <Section id="problem" title="Problem" body={cs?.problem} />
          <Section id="approach" title="Approach" body={cs?.approach} />
          <Section
            id="architecture"
            title="Architecture"
            body={cs?.architecture}
          />
          <Section id="results" title="Results" body={cs?.results} />

          <section id="stack" className="scroll-mt-28">
            <SectionTitle>Stack</SectionTitle>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {(cs?.stack ?? []).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </section>

          <section id="links" className="scroll-mt-28">
            <SectionTitle>Links</SectionTitle>
            <div className="mt-6 flex flex-wrap gap-6">
              <ExternalLink href={project.links?.github} label="GitHub" />
              <ExternalLink href={project.links?.demo} label="Demo" />
              <ExternalLink href={project.links?.paper} label="Paper" />
            </div>
          </section>
        </div>
      </div>

      {next ? (
        <div className="mx-auto mt-32 max-w-wide border-t border-border-subtle px-6 py-12 md:px-12 lg:px-24">
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                Next project
              </div>
              <div className="mt-2 font-display text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
                {next.title}
              </div>
            </div>
            <ArrowRight
              size={28}
              className="text-text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
            />
          </Link>
        </div>
      ) : null}
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
      {children}
    </h2>
  );
}

function Section({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-6 max-w-3xl whitespace-pre-line text-base leading-relaxed text-text-secondary md:text-lg">
        {body ?? 'TODO'}
      </p>
    </section>
  );
}
