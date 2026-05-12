import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function LoadingScreen() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(reduced);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reduced) {
        setDone(true);
        return;
      }
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => setDone(true),
      });
      tl.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          barRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: 'power3.inOut' },
          '-=0.2'
        )
        .to(rootRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: 'power3.inOut',
        });
    },
    { scope: rootRef }
  );

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-base"
    >
      <div
        ref={titleRef}
        className="font-display text-3xl font-medium tracking-tightest text-text-primary md:text-5xl"
      >
        Aadhavan<span className="text-accent">.</span>
      </div>
      <div className="mt-8 h-px w-48 origin-left bg-accent" ref={barRef} />
    </div>
  );
}
