// Converts Sameer Gorde's source artworks (extracted from the .pptm) into
// optimized WebP files in /public/works and writes the catalog to app/data/works.json
// with dimensions + blur placeholders. Run: node scripts/process-images.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SOURCE = "C:/Users/Admin/Desktop/_gorde_extract_tmp/ppt/media";
const OUT_DIR = path.resolve("public/works");
const DATA_DIR = path.resolve("app/data");
const MAX_W = 1600;
const QUALITY = 82;

// Catalog: source image -> caption (titles/medium/size from the original portfolio)
const catalog = [
  { img: "image2", title: "Suffering 2", series: "Suffering", medium: "Soft Pastel, Watercolour on paper", size: '15" × 20"' },
  { img: "image3", title: "Suffering 3", series: "Suffering", medium: "Ink, Collage, Acrylic on paper", size: '22" × 30"' },
  { img: "image4", title: "Suffering 4", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '22" × 30"' },
  { img: "image5", title: "Suffering 5", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '5" × 7"' },
  { img: "image6", title: "Suffering 6", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '7" × 15"' },
  { img: "image7", title: "Suffering 7", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '15" × 11"' },
  { img: "image8", title: "Suffering 8", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '15" × 11"' },
  { img: "image9", title: "Suffering 9", series: "Suffering", medium: "Ink, Acrylic, Collage on paper", size: '24" × 24"' },
  { img: "image10", title: "Untitled", series: "Other", medium: "Ink, Acrylic on paper", size: '7" × 11"' },
  { img: "image11", title: "Self Portrait 1", series: "Self Portrait", medium: "Ink, Acrylic, Pencil, Collage on paper", size: '24" × 24"' },
  { img: "image12", title: "Self Portrait 2", series: "Self Portrait", medium: "Ink, Acrylic, Pencil, Collage on paper", size: '24" × 24"' },
  { img: "image13", title: "Self Portrait 3", series: "Self Portrait", medium: "Ink, Acrylic, Pencil, Collage on paper", size: '24" × 24"' },
  { img: "image14", title: "Self Portrait 4", series: "Self Portrait", medium: "Ink, Collage, Charcoal on paper", size: '7" × 10.5"' },
  { img: "image15", title: "Self Portrait 5", series: "Self Portrait", medium: "Ink, Collage on paper", size: '7" × 10.5"' },
  { img: "image16", title: "Self Portrait 6", series: "Self Portrait", medium: "Ink, Collage, Charcoal on paper", size: '7" × 10"' },
  { img: "image17", title: "Self Portrait 7", series: "Self Portrait", medium: "Ink, Collage on paper", size: '7" × 10"' },
  { img: "image18", title: "Self Portrait 8", series: "Self Portrait", medium: "Ink, Charcoal, Pastel, Collage on paper", size: '7" × 10"' },
  { img: "image19", title: "Self Portrait 9", series: "Self Portrait", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image20", title: "Self Portrait 12", series: "Self Portrait", medium: "Ink, Charcoal, Acrylic on paper", size: '7" × 11"' },
  { img: "image21", title: "Untitled", series: "Other", medium: "Ink, Pastel Colour on paper", size: '7" × 10.5"' },
  { img: "image22", title: "Gandhi", series: "Other", medium: "Pastel, Ink on paper", size: '7" × 10.5"' },
  { img: "image23", title: "Everywhere is a Same", series: "Other", medium: "Ink, Pencil, Charcoal, Collage on paper", size: '24" × 24"' },
  { img: "image24", title: "Migration 1", series: "Migration", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image25", title: "Migration 2", series: "Migration", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image26", title: "Self Portrait 10", series: "Self Portrait", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image27", title: "Untitled", series: "Other", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image28", title: "Migration 3", series: "Migration", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image29", title: "Migration 4", series: "Migration", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
  { img: "image30", title: "Migration 5", series: "Migration", medium: "Ink, Charcoal, Collage on paper", size: '7" × 10"' },
];

const slug = (s, i) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-" + i;

async function run() {
  if (!existsSync(SOURCE)) {
    console.error("Source folder not found:", SOURCE);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(DATA_DIR, { recursive: true });

  const works = [];
  for (let i = 0; i < catalog.length; i++) {
    const c = catalog[i];
    const id = slug(c.title, i + 1);
    const srcPath = path.join(SOURCE, `${c.img}.jpeg`);
    const outPath = path.join(OUT_DIR, `${id}.webp`);

    const buf = await sharp(srcPath)
      .rotate()
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer();
    await writeFile(outPath, buf);
    const meta = await sharp(buf).metadata();

    const blurBuf = await sharp(srcPath)
      .resize({ width: 16 })
      .webp({ quality: 40 })
      .toBuffer();
    const blur = `data:image/webp;base64,${blurBuf.toString("base64")}`;

    works.push({
      id,
      title: c.title,
      series: c.series,
      medium: c.medium,
      size: c.size,
      src: `/works/${id}.webp`,
      width: meta.width,
      height: meta.height,
      blur,
    });
    console.log(`✓ ${id}  ${meta.width}×${meta.height}`);
  }

  await writeFile(
    path.join(DATA_DIR, "works.json"),
    JSON.stringify(works, null, 2)
  );
  console.log(`\nWrote ${works.length} works to app/data/works.json`);
}

run();
