"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SERIES } from "@/app/lib/works";
import { site } from "@/app/lib/site";

const seriesHref = (s: string) => `/works?series=${encodeURIComponent(s)}`;

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setWorksOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-50 bg-white/90 shadow-lg backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-colors"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-v2.png"
            alt={`${site.name} logo`}
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full border-2 border-ink bg-white object-contain p-1"
          />
          <span className="font-serif text-2xl font-bold uppercase leading-none text-ink [-webkit-text-stroke:0.6px_#261C15] group-hover:text-accent">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 text-base font-semibold tracking-wide text-cocoa md:flex">
          <li>
            <Link href="/" className="py-2 transition-colors hover:text-accent">
              Home
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="/works"
              className="py-2 transition-colors hover:text-accent"
            >
              Works
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="min-w-44 border border-line bg-white py-2 shadow-[0_12px_40px_-12px_rgba(38,28,21,0.25)]">
                {SERIES.map((s) => (
                  <Link
                    key={s}
                    href={seriesHref(s)}
                    className="block px-5 py-2 text-cocoa transition-colors hover:bg-cream hover:text-accent"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="py-2 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-6 bg-ink transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>
      </header>

      {/* Mobile full-screen menu — sibling of <header> so it's fixed to the
          viewport (the header's backdrop-blur would otherwise contain it) */}
      <div
        className={`fixed inset-x-0 bottom-0 top-18 z-40 bg-cream transition-all duration-300 md:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8">
          <Link
            href="/"
            className="border-b border-line py-4 font-serif text-3xl text-ink"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={() => setWorksOpen((v) => !v)}
            className="flex items-center justify-between border-b border-line py-4 font-serif text-3xl text-ink"
          >
            Works
            <span
              className={`text-xl transition-transform duration-300 ${
                worksOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              worksOpen ? "max-h-72" : "max-h-0"
            }`}
          >
            <Link
              href="/works"
              className="block py-3 pl-1 text-lg text-cocoa"
            >
              All works
            </Link>
            {SERIES.map((s) => (
              <Link
                key={s}
                href={seriesHref(s)}
                className="block py-3 pl-1 text-lg text-cocoa"
              >
                {s}
              </Link>
            ))}
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-line py-4 font-serif text-3xl text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
