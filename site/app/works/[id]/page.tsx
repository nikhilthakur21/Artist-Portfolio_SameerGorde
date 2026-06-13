import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works, getWork, neighbours } from "@/app/lib/works";
import Reveal from "@/components/reveal";

export function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = getWork(id);
  return { title: work ? work.title : "Work" };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = getWork(id);
  if (!work) notFound();

  const { prev, next } = neighbours(id);

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <Link
        href="/works"
        className="text-sm text-accent transition-colors hover:text-ink"
      >
        ← All works
      </Link>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal dir="zoom">
          <div className="overflow-hidden border border-line bg-paper">
            <Image
              src={work.src}
              alt={`${work.title} — ${work.medium}`}
              width={work.width}
              height={work.height}
              placeholder="blur"
              blurDataURL={work.blur}
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal dir="right" className="lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe">
            {work.series}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {work.title}
          </h1>
          <dl className="mt-7 space-y-4 text-sm">
            <div>
              <dt className="text-taupe">Medium</dt>
              <dd className="mt-0.5 text-cocoa">{work.medium}</dd>
            </div>
            <div>
              <dt className="text-taupe">Size</dt>
              <dd className="mt-0.5 text-cocoa">{work.size}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-ink px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-accent"
          >
            Enquire about this work
          </Link>
        </Reveal>
      </div>

      {/* Prev / Next */}
      <div className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? (
          <Link
            href={`/works/${prev.id}`}
            className="group flex-1 text-taupe transition-colors hover:text-ink"
          >
            <span className="block text-xs">← Previous</span>
            <span className="font-serif text-lg text-cocoa group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/works/${next.id}`}
            className="group flex-1 text-right text-taupe transition-colors hover:text-ink"
          >
            <span className="block text-xs">Next →</span>
            <span className="font-serif text-lg text-cocoa group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </section>
  );
}
