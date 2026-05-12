import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Award } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/certifications';

export function Certifications() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.cert-card',
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
    <section ref={root} className="py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Continuing study."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="cert-card flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
            >
              <Award size={20} className="text-accent" />
              <div className="font-display text-lg font-medium leading-snug text-text-primary">
                {c.title}
              </div>
              <div className="mt-auto font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                {c.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
