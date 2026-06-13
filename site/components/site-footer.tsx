import Link from "next/link";
import { site } from "@/app/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-cream pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-3">
        {/* Brand + bio */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-v2.png"
              alt={`${site.name} logo`}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full border border-line bg-white object-contain p-1"
            />
            <div className="text-left">
              <p className="font-serif text-3xl leading-none text-ink">
                {site.name}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-accent">
                Artist Portfolio
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-taupe">
            Artist based in Pune. Working through ink, charcoal, and collage —
            the body as language, the village as memory.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center text-center">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 font-serif text-lg text-cocoa">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location + socials */}
        <div className="flex flex-col items-center text-center">
          <address className="font-serif text-lg not-italic leading-relaxed text-ink">
            {site.location}
          </address>
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram — @${site.instagramHandle}`}
              className="text-cocoa transition-colors hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp — ${site.phoneDisplay}`}
              className="text-cocoa transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884a9.81 9.81 0 0 1 6.988 2.895 9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
              </svg>
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email — ${site.email}`}
              className="text-cocoa transition-colors hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3.5 6 8.5 7L20.5 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col-reverse items-center justify-between gap-3 border-t border-line px-5 pt-6 text-center text-xs uppercase tracking-[0.25em] text-taupe sm:px-8 md:flex-row md:items-center md:text-left">
        <p>© {year} — All rights reserved.</p>
        <p>
          Designed &amp; built by{" "}
          <a
            href="https://instagram.com/nikhil_thakur_patil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose-500 transition-colors hover:text-rose-400"
          >
            Nik<span aria-hidden>♥</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
