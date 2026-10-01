import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 text-center">
      <p className="font-heading text-6xl text-brand-accent">404</p>
      <h1 className="mt-4 font-heading text-3xl">Page not found</h1>
      <p className="mt-3 text-brand-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand-cream px-6 py-3 text-sm font-medium text-brand-bg"
      >
        Go home
      </Link>
    </section>
  );
}