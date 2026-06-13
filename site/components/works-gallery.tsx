"use client";

import { useMemo, useState } from "react";
import { works, SERIES } from "@/app/lib/works";
import WorkCard from "./work-card";
import Reveal from "./reveal";

const FILTERS = ["All", ...SERIES] as const;
const dirs = ["left", "up", "right", "zoom"] as const;

export default function WorksGallery({
  initialSeries,
}: {
  initialSeries?: string;
}) {
  const valid = initialSeries && SERIES.includes(initialSeries as never);
  const [active, setActive] = useState<string>(valid ? (initialSeries as string) : "All");

  const filtered = useMemo(
    () => (active === "All" ? works : works.filter((w) => w.series === active)),
    [active]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-5 text-sm">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`relative pb-1 tracking-wide transition-colors ${
              active === f
                ? "text-ink after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-accent"
                : "text-taupe hover:text-cocoa"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gap-8 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {filtered.map((w, i) => (
          <Reveal
            key={w.id}
            dir={dirs[i % dirs.length]}
            delay={(i % 3) * 60}
            className="mb-8 break-inside-avoid"
          >
            <WorkCard work={w} priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
