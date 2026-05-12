import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeaturedProjectCard } from '@/components/projects/FeaturedProjectCard';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.utils.toArray<HTMLElement>('.featured-row').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
      return () => ScrollTrigger.refresh();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      id="projects"
      className="py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="01"
          label="Projects"
          title="Selected work."
          description="Four research and applied-ML projects with full case studies. Click through for problem, approach, architecture, and results."
        />
      </div>

      <div className="mx-auto max-w-wide border-t border-border-subtle">
        {featuredProjects.map((p, i) => (
          <div key={p.slug} className="featured-row">
            <FeaturedProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
