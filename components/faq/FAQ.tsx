"use client";

import BackgroundEffects from "./BackgroundEffects";
import FAQHeader from "./FAQHeader";
import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#07111F] py-28 pb-15"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <FAQHeader />

        {/* FAQ Accordion */}
        <FAQAccordion />

      </div>
    </section>
  );
}