import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { additionalProjects, featuredProjects } from '@/data/projects';

export function AllProjects() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.all-card',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: root }
  );

  const startIndex = featuredProjects.length;

  return (
    <section ref={root} className="py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="02"
          label="More work"
          title="Additional projects."
          description="Shorter builds across data engineering, forecasting, NLP, and education."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((p, i) => (
            <div key={p.slug} className="all-card">
              <ProjectCard project={p} index={startIndex + i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
