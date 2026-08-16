"use client";

import MouseGlow from "./MouseGlow";
import HeroAnimations from "./HeroAnimations";
import HeroContent from "./HeroContent";
import BackgroundEffects from "./BackgroundEffects";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111F] pt-32 lg:pt-36">

      {/* Background */}
      <BackgroundEffects />
      <HeroAnimations />
      <MouseGlow />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <HeroContent />

      </div>

    </section>
  );
}