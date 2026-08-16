"use client";

import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07111F] pt-1 pb-2"
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-no-repeat
          bg-right
          bg-contain
          opacity-[0.5]
          pointer-events-none
          select-none
        "
        style={{
          backgroundImage: "url('/images/about-bg.png')",
        }}
      />

      {/* Optional Blue Glow */}
      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Top Badge */}
        <div className="mb-4 flex items-center gap-6">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
            WHO WE ARE
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* Left */}
          <AboutContent />

          {/* Right */}
          {/* <AboutVisual /> */}

        </div>

        {/* <AboutStats /> */}

      </div>
    </section>
  );
}