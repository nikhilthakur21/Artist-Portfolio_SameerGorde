"use client";

import { ReactLenis } from "lenis/react";

// Buttery smooth scrolling without hijacking the page (light lerp, native feel).
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.4 }}
    >
      {children}
    </ReactLenis>
  );
}
