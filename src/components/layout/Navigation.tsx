import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border-subtle bg-bg-base/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 md:px-12 lg:px-24">
        <Link
          to="/"
          className="font-display text-base font-medium tracking-tight text-text-primary"
        >
          Aadhavan<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {onHome
            ? links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {l.label}
                </a>
              ))
            : (
                <Link
                  to="/"
                  className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary"
                >
                  ← Home
                </Link>
              )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
