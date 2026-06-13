import Image from "next/image";
import Link from "next/link";
import { getWork, works } from "@/app/lib/works";
import { site, bio } from "@/app/lib/site";
import Reveal from "@/components/reveal";

const dirs = ["left", "up", "right", "zoom"] as const;

// Title + description shown on each collection card
const COLLECTIONS: {
  series: string;
  title: string;
  desc: string;
  img?: string;
  zoom?: boolean;
}[] = [
  {
    series: "Suffering",
    title: "Civic Discourse & Cultural Commentary",
    desc: "My art is a mirror to society, not just decoration. I confront the dark realities of socio-political issues head-on, refusing to soften them with symbolism or superficial beauty. By portraying these truths without a filter, I aim to provoke conversation and inspire genuine change.",
    img: "suffering-6-5",
  },
  {
    series: "Self Portrait",
    title: "The Self & Inner Memory",
    desc: "Turning the gaze inward, these works trace identity, lineage, and the weight of personal history — each portrait a record of memory, the body remembering what words cannot.",
    img: "self-portrait-3-12",
    zoom: true,
  },
  {
    series: "Migration",
    title: "Displacement & Belonging",
    desc: "Born of a farming family that moved to the city, this series follows the journey between village and metropolis — the geographic, cultural, and emotional shifts that reshape the idea of home.",
    img: "migration-3-27",
  },
  {
    series: "Other",
    title: "Studies & Explorations",
    desc: "Drawings, studies, and works beyond the main series — explorations in ink, charcoal, and collage where new forms and ideas are tested.",
    img: "everywhere-is-a-same-22",
  },
];

const seriesHref = (s: string) => `/works?series=${encodeURIComponent(s)}`;

export default function Home() {
  const hero = getWork(site.heroId) ?? works[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
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

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[auto_auto] lg:justify-center lg:gap-44">
          <Reveal dir="left">
            <div className="p-8 text-center sm:p-12 lg:py-20 lg:pr-0 lg:text-left">
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

          <Reveal dir="zoom" className="lg:justify-self-start">
            <div className="relative mx-auto max-w-xs lg:mx-0">
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
                className="h-auto w-full border-2 border-ink"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* A little bit about me */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[auto_auto] lg:justify-center lg:gap-36">
            {/* Left — heading */}
            <Reveal dir="left">
              <h2 className="text-left font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
                A Little Bit
                <br />
                About <strong className="font-bold">Me</strong>
              </h2>
            </Reveal>

            {/* Right — body */}
            <Reveal dir="right">
              <div className="max-w-xl">
                <p className="text-justify text-base leading-relaxed text-cocoa lg:text-left">{bio}</p>
                <p className="mt-8 whitespace-nowrap font-serif text-[clamp(0.72rem,3.7vw,1.125rem)] leading-snug text-ink sm:whitespace-normal sm:text-3xl">
                  Nostalgia. Migration. The body as language.
                </p>
                <div className="mt-10 flex flex-col items-end lg:items-start">
                  <span className="mb-4 block h-px w-full bg-ink lg:w-12" />
                  <Link
                    href="/about"
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:text-accent"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Selected works */}
      <section className="border-t border-line bg-[#faf9fb]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="mb-10">
              <h2 className="font-serif text-5xl text-ink sm:text-6xl">
                Bodies of <strong className="font-bold">Work</strong>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-taupe sm:whitespace-nowrap">
                A selection across the artist&apos;s series — the body, memory,
                and migration.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:auto-rows-fr sm:grid-cols-2">
            {COLLECTIONS.map((c, i) => {
              const w =
                (c.img && works.find((x) => x.id === c.img)) ||
                works.find((x) => x.series === c.series);
              if (!w) return null;
              return (
                <Reveal
                  key={c.series}
                  dir={dirs[i % dirs.length]}
                  delay={(i % 2) * 80}
                >
                  <Link
                    href={seriesHref(c.series)}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-30px_rgba(38,28,21,0.3)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-25px_rgba(38,28,21,0.4)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image
                        src={w.src}
                        alt={`${c.series} — ${w.title}`}
                        fill
                        placeholder="blur"
                        blurDataURL={w.blur}
                        priority={i < 2}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                          c.zoom ? "scale-[1.18] group-hover:scale-[1.24]" : ""
                        }`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                        {c.series}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-cocoa">
                        {c.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors group-hover:text-accent">
                        View series
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* View more button below the collection cards */}
          <Reveal dir="up">
            <div className="mt-12 flex justify-center">
              <Link
                href="/works"
                className="group inline-flex items-center gap-2 rounded-full border border-ink px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                View More
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
