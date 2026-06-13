import type { Metadata } from "next";
import { cv, site } from "@/app/lib/site";
import Reveal from "@/components/reveal";

export const metadata: Metadata = { title: "CV" };

function Row({ year, detail }: { year: string; detail: string }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] gap-4 border-t border-line py-4 sm:grid-cols-[6rem_1fr]">
      <span className="text-sm text-taupe">{year}</span>
      <span className="text-cocoa">{detail}</span>
    </div>
  );
}

export default function CVPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal dir="left">
        <h1 className="font-serif text-5xl text-ink sm:text-6xl">
          Curriculum Vitae
        </h1>
        <p className="mt-4 text-cocoa">
          {site.fullName} · {site.qualification}
        </p>
      </Reveal>

      <Reveal dir="up" delay={80}>
        <div className="mt-12">
          <h2 className="mb-2 font-serif text-2xl text-ink">Born</h2>
          <p className="border-t border-line py-4 text-cocoa">{cv.born}</p>
        </div>
      </Reveal>

      <Reveal dir="up" delay={120}>
        <div className="mt-10">
          <h2 className="mb-2 font-serif text-2xl text-ink">Education</h2>
          {cv.education.map((e) => (
            <Row key={e.year + e.detail} year={e.year} detail={e.detail} />
          ))}
        </div>
      </Reveal>

      <Reveal dir="up" delay={160}>
        <div className="mt-10">
          <h2 className="mb-2 font-serif text-2xl text-ink">Exhibitions</h2>
          {cv.exhibitions.map((e) => (
            <Row key={e.year + e.detail} year={e.year} detail={e.detail} />
          ))}
        </div>
      </Reveal>

      <Reveal dir="up" delay={200}>
        <div className="mt-10">
          <h2 className="mb-2 font-serif text-2xl text-ink">Mediums</h2>
          <p className="border-t border-line py-4 text-cocoa">{cv.mediums}</p>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-taupe">
          <p>{site.location}</p>
          <a
            href={`mailto:${site.email}`}
            className="text-accent transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
