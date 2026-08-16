"use client";

import BackgroundEffects from "./BackgroundEffects";
import ProcessHeader from "./ProcessHeader";
import ProcessTimeline from "./ProcessTimeline";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#07111F] py-28 pb-15"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <ProcessHeader />

        {/* Timeline */}
        <ProcessTimeline />

      </div>
    </section>
  );
}