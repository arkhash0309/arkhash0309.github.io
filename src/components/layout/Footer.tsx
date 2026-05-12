import { Github, Linkedin, BookOpen } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from '@/data/social';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-wide flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12 lg:px-24">
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
          © {year} Aadhavan Arkhash Saravanakumar
        </div>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Medium"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <BookOpen size={18} />
          </a>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
          Built with React + GSAP
        </div>
      </div>
    </footer>
  );
}
