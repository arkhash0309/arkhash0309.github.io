import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          404
        </div>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tightest text-text-primary md:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-text-secondary">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-accent hover:text-accent-dim"
        >
          ← Return home
        </Link>
      </div>
    </main>
  );
}
