import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Download } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button, ButtonLink } from '@/components/ui/Button';
import { RESUME_PATH, LOCATION } from '@/data/social';

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const words = gsap.utils.toArray<HTMLElement>('.hero-word');
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo(
        '.hero-eyebrow',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          words,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.06 },
          '-=0.2'
        )
        .fromTo(
          '.hero-line',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.7, ease: 'power3.inOut' },
          '-=0.3'
        )
        .fromTo(
          '.hero-sub',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        );

      // subtle parallax
      gsap.to('.hero-grid', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  const headlineParts = ['Turning', 'raw', 'data', 'into', 'intelligent', 'systems.'];

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-32"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 20%, rgb(var(--accent) / 0.18), transparent 50%), linear-gradient(rgb(var(--border-subtle) / 0.6) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border-subtle) / 0.6) 1px, transparent 1px)',
          backgroundSize: 'auto, 64px 64px, 64px 64px',
        }}
      />

      <div className="mx-auto w-full max-w-wide px-6 md:px-12 lg:px-24">
        <div className="hero-eyebrow flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          <span className="text-accent">●</span>
          <span>{LOCATION}</span>
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,7vw,6rem)] font-medium leading-[1.02] tracking-tightest text-text-primary">
          {headlineParts.map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <span className={`hero-word inline-block ${w === 'intelligent' ? 'text-accent' : ''}`}>
                {w}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-line mt-8 h-px w-32 origin-left bg-accent" aria-hidden />

        <p className="hero-sub mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          ML engineer and AI researcher building production pipelines, interpretable
          models, and applied NLP — currently completing a BSc in AI & Data Science at
          IIT (Robert Gordon University).
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            className="hero-cta"
            size="lg"
            onClick={() => {
              const el = document.getElementById('projects');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
            <ArrowDown size={16} />
          </Button>
          <ButtonLink
            href={RESUME_PATH}
            download
            variant="secondary"
            size="lg"
            className="hero-cta"
          >
            <Download size={16} />
            Download Resume
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
