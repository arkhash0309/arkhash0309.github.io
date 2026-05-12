import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';

export function Education() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.edu-row',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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
      id="education"
      className="py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="06"
          label="Education"
          title="Academic background."
        />

        <ul className="border-t border-border-subtle">
          {education.map((e) => (
            <li
              key={e.qualification}
              className="edu-row grid grid-cols-12 gap-6 border-b border-border-subtle py-8"
            >
              <div className="col-span-12 md:col-span-7">
                <div className="font-display text-xl font-medium text-text-primary">
                  {e.qualification}
                </div>
                {e.detail ? (
                  <div className="mt-2 text-sm text-text-secondary">
                    {e.detail}
                  </div>
                ) : null}
              </div>
              <div className="col-span-12 flex items-center font-mono text-xs uppercase tracking-[0.15em] text-text-muted md:col-span-5 md:justify-end">
                {e.institution}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
