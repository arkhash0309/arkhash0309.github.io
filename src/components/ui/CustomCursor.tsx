import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('cursor-none-root');

    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power2.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power2.out' });

    const onMove = (e: MouseEvent) => {
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"]')) {
        gsap.to(ring, { scale: 1.6, duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { opacity: 0, duration: 0.2 });
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"]')) {
        gsap.to(ring, { scale: 1, duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('cursor-none-root');
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 md:block"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
        aria-hidden
      />
    </>
  );
}
