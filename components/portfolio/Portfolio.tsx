"use client";

import BackgroundEffects from "./BackgroundEffects";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioGrid from "./PortfolioGrid";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#07111F] py-28 pb-18"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <PortfolioHeader />

        {/* Filter */}
        <PortfolioFilter />

        {/* Projects */}
        <PortfolioGrid />

      </div>
    </section>
  );
}