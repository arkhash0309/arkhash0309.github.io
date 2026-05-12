import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { skillGroups, softSkills } from '@/data/skills';

export function Skills() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.skill-group',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: 'top 80%' },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="skills" className="py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="04"
          label="Skills"
          title="Tools, languages, and platforms."
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.name}
              className="skill-group border-t border-border-subtle pt-6"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                {g.name}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-group mt-16 border-t border-border-subtle pt-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
            Soft skills
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {softSkills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
