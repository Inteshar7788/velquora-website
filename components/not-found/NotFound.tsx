"use client";

import BackgroundGrid from "./BackgroundGrid";
import FloatingShapes from "./FloatingShapes";
import MouseGlow from "./MouseGlow";
import NotFoundHero from "./NotFoundHero";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F]">

      <BackgroundGrid />

      <FloatingShapes />

      <MouseGlow />

      <NotFoundHero />

    </main>
  );
}