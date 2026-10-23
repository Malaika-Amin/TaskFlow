import Link from "next/link";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-heading text-3xl font-bold transition hover:text-brand-cream"
          >
            TaskFlow<span className="text-brand-muted">.</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-brand-muted">
            Simple task management for small teams. Stay organized, collaborate
            better, and get more done together.
          </p>

          {/* Social links */}
          <div className="mt-5 flex gap-4 text-sm text-brand-muted">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand-cream"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand-cream"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand-cream"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">
            Quick Links
          </p>

          <ul className="mt-5 space-y-3 text-sm text-brand-muted">
            {pages.map((page) => (
              <li key={page.label}>
                <Link
                  href={page.href}
                  className="transition hover:translate-x-1 hover:text-brand-cream"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </p>

          <div className="mt-5 space-y-3 text-sm text-brand-muted">
            <p>
              Email:{" "}
              <a
                href="mailto:hello@taskflow.example"
                className="transition hover:text-brand-cream"
              >
                hello@taskflow.example
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+923001234567"
                className="transition hover:text-brand-cream"
              >
                +92 300 1234567
              </a>
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-white/50 hover:bg-white/5"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-center text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>

          <p>Built for teams that get things done.</p>
        </div>
      </div>
    </footer>
  );
}