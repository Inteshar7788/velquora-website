"use client";

export default function BackgroundGrid() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-transparent" />
    </>
  );
}