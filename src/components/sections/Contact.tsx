import { useRef, useState, type FormEvent } from 'react';
import { useGSAP } from '@gsap/react';
import { Copy, Check, Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from '@/data/social';

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        '.contact-el',
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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  }

  return (
    <section ref={root} id="contact" className="py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-wide px-6 md:px-12 lg:px-24">
        <SectionHeading
          index="07"
          label="Contact"
          title="Get in touch."
          description="I'm open to ML/AI internship and graduate roles, research collaborations, and interesting applied projects."
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="contact-el lg:col-span-5">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a
                href={`mailto:${EMAIL}`}
                className="font-display text-xl text-text-primary hover:text-accent"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <Github size={16} />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  GitHub — arkhash0309
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <Linkedin size={16} />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  LinkedIn
                </span>
              </a>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <BookOpen size={16} />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  Medium
                </span>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="contact-el space-y-5 lg:col-span-7"
            aria-live="polite"
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Message" name="message" required textarea />

            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
              {status === 'success' ? (
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Message sent.
                </span>
              ) : null}
              {status === 'error' ? (
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                  {FORMSPREE
                    ? 'Something went wrong — please email directly.'
                    : 'Form not configured. Email directly.'}
                </span>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const inputClass =
    'mt-2 w-full rounded-xl border border-border-subtle bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={inputClass + ' resize-y'}
        />
      ) : (
        <input type={type} name={name} required={required} className={inputClass} />
      )}
    </label>
  );
}
