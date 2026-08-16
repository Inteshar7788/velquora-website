"use client";

import BackgroundEffects from "./BackgroundEffects";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07111F] py-28"
    >
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <ContactHeader />

        {/* Main Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* Left Side */}
          <ContactInfo />

          {/* Right Side */}
          <ContactForm />

        </div>

      </div>
    </section>
  );
}