import type { Metadata } from "next";
import Link from "next/link";
import {
  bio,
  essay,
  essayEpigraph,
  essayAuthor,
  site,
} from "@/app/lib/site";
import Reveal from "@/components/reveal";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="bg-white">
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal dir="left">
        <p className="text-xs uppercase tracking-[0.25em] text-taupe">
          {site.location}
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">About</h1>
      </Reveal>

      <Reveal dir="up" delay={80}>
        <p className="mt-10 text-lg leading-relaxed text-cocoa">{bio}</p>
      </Reveal>

      {/* Epigraph */}
      <Reveal dir="up" delay={120}>
        <blockquote className="mt-14 border-l-2 border-line pl-6 font-serif text-xl italic leading-relaxed text-ink">
          {essayEpigraph}
        </blockquote>
      </Reveal>

      {/* Critic essay */}
      <div className="mt-12 space-y-6">
        {essay.map((p, i) => (
          <Reveal key={i} dir="up" delay={i * 60}>
            <p className="leading-relaxed text-cocoa">{p}</p>
          </Reveal>
        ))}
        <Reveal dir="up">
          <p className="pt-2 text-sm text-taupe">{essayAuthor}</p>
        </Reveal>
      </div>

      <Reveal dir="up">
        <div className="mt-14 flex flex-wrap gap-4 border-t border-line pt-10">
          <Link
            href="/works"
            className="inline-flex items-center bg-ink px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-accent"
          >
            View Works
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center border border-line px-7 py-3 text-sm tracking-wide text-cocoa transition-colors hover:border-ink hover:text-ink"
          >
            Full CV
          </Link>
        </div>
      </Reveal>
    </section>
    </div>
  );
}
