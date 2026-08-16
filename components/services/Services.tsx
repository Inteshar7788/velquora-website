"use client";

import BackgroundEffects from "./BackgroundEffects";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07111F] py-28 pb-15"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <ServicesHeader />

        {/* Cards */}
        <ServicesGrid />

      </div>
    </section>
  );
}