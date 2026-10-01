import Link from "next/link";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">TaskFlow</p>
          <p className="mt-3 max-w-xs text-sm text-brand-muted">
            Simple task management for small teams.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Pages</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {pages.map((page) => (
              <li key={page.label}>
                <Link href={page.href} className="hover:text-brand-cream">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">Contact</p>
          <p className="mt-3 text-sm text-brand-muted">hello@taskflow.example</p>
          <p className="mt-2 text-sm text-brand-muted">+92 300 1234567</p>
        </div>
      </div>

      <p className="border-t border-white/10 py-6 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}