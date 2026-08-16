"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Velquora Technologies website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "2. Services",
    content:
      "Velquora Technologies provides website development, web applications, UI/UX design, e-commerce solutions, SEO, and related digital services. The scope of work for each project is defined in the agreed proposal or contract.",
  },
  {
    title: "3. Client Responsibilities",
    content:
      "Clients are responsible for providing accurate information, project requirements, content, and timely approvals. Delays in communication may affect project timelines.",
  },
  {
    title: "4. Payments",
    content:
      "Payments must be made according to the agreed payment schedule. Project work may be paused or delayed if payments are overdue.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "Upon full payment, ownership of the completed project is transferred to the client unless otherwise agreed. Velquora Technologies retains the right to showcase completed projects in its portfolio unless restricted by a written agreement.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "Velquora Technologies shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or website.",
  },
  {
    title: "7. Project Cancellation",
    content:
      "Either party may terminate a project by written notice. Any completed work up to the cancellation date may be billed accordingly.",
  },
  {
    title: "8. Changes to Terms",
    content:
      "We reserve the right to update these Terms & Conditions at any time. Changes become effective immediately after being published on this page.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions regarding these Terms & Conditions, please contact Velquora Technologies through our Contact page or official email.",
  },
];

export default function TermsContent() {
  return (
    <section className="bg-[#07111F] px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="space-y-8">

          {sections.map((section, index) => (

            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
              "
            >
              <h2 className="text-2xl font-bold text-white">
                {section.title}
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                {section.content}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}