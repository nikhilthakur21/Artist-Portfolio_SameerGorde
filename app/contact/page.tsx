import type { Metadata } from "next";
import { site } from "@/app/lib/site";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="bg-white">
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal dir="left">
        <h1 className="font-serif text-5xl font-bold text-ink sm:text-6xl">Contact</h1>
        <p className="mt-4 max-w-md leading-relaxed text-taupe">
          For enquiries about available works, commissions, or exhibitions,
          please get in touch.
        </p>
        <hr className="mt-8 border-t border-line" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal dir="up">
          <ul className="space-y-6">
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="font-serif text-2xl text-ink transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Instagram
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl text-ink transition-colors hover:text-accent"
              >
                @{site.instagramHandle}
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Phone / WhatsApp
              </p>
              <div className="flex items-baseline gap-4">
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="font-serif text-2xl text-ink transition-colors hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent transition-colors hover:text-ink"
                >
                  WhatsApp →
                </a>
              </div>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Studio
              </p>
              <p className="font-serif text-2xl text-ink">{site.location}</p>
            </li>
          </ul>
        </Reveal>

        <Reveal dir="right">
          <ContactForm />
        </Reveal>
      </div>
    </section>
    </div>
  );
}
