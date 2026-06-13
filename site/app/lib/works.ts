import data from "@/app/data/works.json";

export type Work = {
  id: string;
  title: string;
  series: string;
  medium: string;
  size: string;
  src: string;
  width: number;
  height: number;
  blur: string;
};

export const works = data as Work[];

// Display order of the series throughout the site
export const SERIES = ["Suffering", "Self Portrait", "Migration", "Other"] as const;
export type Series = (typeof SERIES)[number];

export const getWork = (id: string) => works.find((w) => w.id === id);

export const worksBySeries = (series: string) =>
  works.filter((w) => w.series === series);

// Sequential neighbours for prev / next navigation on the detail page
export function neighbours(id: string) {
  const i = works.findIndex((w) => w.id === id);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? works[i - 1] : works[works.length - 1],
    next: i < works.length - 1 ? works[i + 1] : works[0],
  };
}
