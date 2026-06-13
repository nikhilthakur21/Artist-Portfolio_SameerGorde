import type { Metadata } from "next";
import WorksGallery from "@/components/works-gallery";

export const metadata: Metadata = { title: "Works" };

export default async function WorksPage({
  searchParams,
}: {
  searchParams: Promise<{ series?: string }>;
}) {
  const { series } = await searchParams;

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="mb-2 font-serif text-5xl text-ink sm:text-6xl">Works</h1>
      <p className="mb-10 max-w-xl leading-relaxed text-taupe">
        Drawings and paintings on paper — selected works across the Suffering,
        Self Portrait and Migration series.
      </p>
      <WorksGallery key={series ?? "all"} initialSeries={series} />
    </section>
  );
}
