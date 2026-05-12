import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/data/experience';

export function Experience() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.exp-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: 'top 80%' },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="experience"
      className="py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where I've worked."
        />

        <div className="space-y-12">
          {experience.map((item) => (
            <div
              key={item.company}
              className="exp-item grid grid-cols-12 gap-6 border-t border-border-subtle pt-10"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                  {item.start} — {item.end}
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium text-text-primary">
                  {item.company}
                </h3>
                <div className="mt-1 text-sm text-text-secondary">
                  {item.role}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                  {item.type}
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <ul className="space-y-6">
                  {item.achievements.map((a) => (
                    <li key={a.title}>
                      <div className="text-sm font-medium text-accent">
                        {a.title}
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-text-secondary">
                        {a.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
