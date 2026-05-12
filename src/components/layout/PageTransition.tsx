import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function PageTransition() {
  const barRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const reduced = useReducedMotion();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (reduced || !barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { scaleX: 0, transformOrigin: 'left center', opacity: 1 },
      {
        scaleX: 1,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(barRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
          });
        },
      }
    );
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, reduced]);

  return (
    <div
      ref={barRef}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[150] h-[2px] origin-left bg-accent"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
