"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { nav, parish } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-cream/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/main-pic.png"
            alt="Holy Family Parish Kamias logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-bold transition-colors ${
                scrolled ? "text-navy" : "text-navy"
              }`}
            >
              {parish.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-teal">
              {parish.location}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-navy/10 bg-cream/98 px-5 py-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/5 py-3 text-sm font-medium text-navy/80 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
