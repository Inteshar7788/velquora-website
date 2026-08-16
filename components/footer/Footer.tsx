"use client";

import BackgroundEffects from "./BackgroundEffects";
import FooterCTA from "./FooterCTA";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#050D18]"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10">

        {/* CTA */}
        <FooterCTA />

        {/* Main Footer */}
        <FooterMain />

        {/* Bottom */}
        <FooterBottom />

      </div>
    </footer>
  );
}