import Image from "next/image";
import Link from "next/link";
import { getWork, works, SERIES, type Work } from "@/app/lib/works";
import { site } from "@/app/lib/site";
import Reveal from "@/components/reveal";
import WorkCard from "@/components/work-card";

const dirs = ["left", "up", "right", "zoom"] as const;

export default function Home() {
  const hero = getWork(site.heroId) ?? works[0];
  // One representative work per series
  const featured = SERIES.map((s) =>
    works.find((w) => w.series === s)
  ).filter((w): w is Work => Boolean(w));

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#FDFCFB] bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-waves.svg?v=5)" }}
      >
        {/* Halftone dot pattern in the four corners */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[
            { pos: "right-0 top-0", at: "top right" },
            { pos: "bottom-0 left-0", at: "bottom left" },
          ].map((c) => (
            <span
              key={c.at}
              className={`absolute ${c.pos} h-64 w-64 sm:h-96 sm:w-96`}
              style={{
                backgroundImage:
                  "radial-gradient(circle, #e3d9c7 1.5px, transparent 1.7px)",
                backgroundSize: "16px 16px",
                WebkitMaskImage: `radial-gradient(circle at ${c.at}, #000 10%, transparent 82%)`,
                maskImage: `radial-gradient(circle at ${c.at}, #000 10%, transparent 82%)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal dir="left">
            <div className="rounded-3xl bg-paper p-8 text-center shadow-[0_30px_60px_-30px_rgba(38,28,21,0.25)] sm:p-12 lg:py-20 lg:text-left">
              {/* role — sits above the name on desktop */}
              <p className="hidden text-xs uppercase tracking-[0.25em] text-taupe lg:block">
                {site.role}
              </p>
              <h1 className="font-serif text-[clamp(2.75rem,11vw,4rem)] font-bold leading-[0.95] text-ink lg:mt-5 lg:whitespace-nowrap lg:text-7xl">
                Sameer Gorde
              </h1>
              {/* role — sits below the name on mobile/tablet */}
              <p className="mt-4 whitespace-nowrap text-[clamp(0.55rem,2.7vw,0.7rem)] uppercase tracking-[0.12em] text-taupe lg:hidden">
                {site.role}
              </p>
              {/* short tagline on mobile/tablet */}
              <p className="mt-4 whitespace-nowrap text-[clamp(0.85rem,3.6vw,1rem)] leading-relaxed text-cocoa lg:hidden">
                The body, memory &amp; migration.
              </p>
              {/* full tagline on desktop */}
              <p className="mt-6 hidden leading-relaxed text-cocoa lg:block lg:whitespace-nowrap">
                {site.tagline}
              </p>
              <div className="mt-8 flex flex-nowrap justify-center gap-3 sm:gap-4 lg:justify-start">
                <Link
                  href="/works"
                  className="group inline-flex items-center gap-2 whitespace-nowrap bg-ink px-4 py-2.5 text-xs tracking-wide text-cream transition-colors hover:bg-accent sm:px-7 sm:py-3 sm:text-sm"
                >
                  View Works
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 whitespace-nowrap border border-line px-4 py-2.5 text-xs tracking-wide text-cocoa transition-colors hover:border-ink hover:text-ink sm:px-7 sm:py-3 sm:text-sm"
                >
                  About the artist
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal dir="zoom" className="lg:justify-self-end">
            <div className="relative mx-auto max-w-xs lg:mx-0 lg:ml-auto">
              {/* top-left corner bracket */}
              <span className="pointer-events-none absolute -left-5 -top-5 h-16 w-16 border-l-2 border-t-2 border-ink" />
              {/* bottom-right corner bracket */}
              <span className="pointer-events-none absolute -bottom-5 -right-5 h-16 w-16 border-b-2 border-r-2 border-ink" />
              <Image
                src={hero.src}
                alt={`${hero.title} — ${hero.medium}`}
                width={hero.width}
                height={hero.height}
                placeholder="blur"
                blurDataURL={hero.blur}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full border-2 border-ink shadow-[0_30px_60px_-25px_rgba(38,28,21,0.5)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                Selected Works
              </h2>
              <Link
                href="/works"
                className="text-sm text-accent transition-colors hover:text-ink"
              >
                View all →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:auto-rows-[160px] sm:grid-cols-2">
            {featured.map((w, i) => {
              const spans = [
                "sm:row-span-3",
                "sm:row-span-2",
                "sm:row-span-2",
                "sm:row-span-3",
              ];
              return (
                <Reveal
                  key={w.id}
                  dir={dirs[i % dirs.length]}
                  delay={(i % 3) * 60}
                  className={`group relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-auto ${spans[i % spans.length]}`}
                >
                  <Link
                    href={`/works/${w.id}`}
                    className="block h-full w-full"
                  >
                    <Image
                      src={w.src}
                      alt={`${w.title} — ${w.medium}`}
                      fill
                      placeholder="blur"
                      blurDataURL={w.blur}
                      priority={i < 2}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="scale-110 object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    {/* darken + caption on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-serif text-xl leading-tight text-cream">
                        {w.title}
                      </p>
                      <p className="mt-1 text-xs text-cream/80">{w.medium}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <Reveal dir="up">
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              A body of work drawn from daily life and memory — the human body,
              nostalgia, and migration, rendered in ink, charcoal and collage on
              paper.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm text-accent transition-colors hover:text-ink"
            >
              Read more about the artist →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
