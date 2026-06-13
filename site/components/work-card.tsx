import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/lib/works";

export default function WorkCard({
  work,
  priority = false,
}: {
  work: Work;
  priority?: boolean;
}) {
  return (
    <Link href={`/works/${work.id}`} className="group block">
      <div className="overflow-hidden border border-line bg-paper">
        <Image
          src={work.src}
          alt={`${work.title} — ${work.medium}`}
          width={work.width}
          height={work.height}
          placeholder="blur"
          blurDataURL={work.blur}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="zoom-img h-auto w-full"
        />
      </div>
      <div className="mt-3">
        <p className="font-serif text-xl leading-tight text-ink transition-colors group-hover:text-accent">
          {work.title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-taupe">{work.medium}</p>
        <p className="text-xs text-taupe">{work.size}</p>
      </div>
    </Link>
  );
}
