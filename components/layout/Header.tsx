"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl">
          TaskFlow
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 text-sm text-brand-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-brand-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-brand-cream px-5 py-2 text-sm font-medium text-brand-bg md:block"
        >
          Request a Demo
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 text-brand-muted md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}