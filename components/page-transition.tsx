"use client";

import { usePathname } from "next/navigation";

// Replays a gentle fade + page-up animation on every route change.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-trans">
      {children}
    </div>
  );
}
