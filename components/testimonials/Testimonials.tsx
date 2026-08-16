"use client";

import BackgroundEffects from "./BackgroundEffects";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSlider from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#07111F] py-28 pb-15"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <TestimonialsHeader />

        {/* Testimonials Slider */}
        <TestimonialsSlider />

      </div>
    </section>
  );
}