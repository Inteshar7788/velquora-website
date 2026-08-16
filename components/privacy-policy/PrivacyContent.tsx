"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, company details, and project requirements when you contact us or request our services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to respond to inquiries, provide our services, improve user experience, communicate project updates, and maintain the security of our website.",
  },
  {
    title: "3. Cookies",
    content:
      "Our website may use cookies and similar technologies to improve performance, analyze traffic, and enhance your browsing experience. You can disable cookies through your browser settings.",
  },
  {
    title: "4. Data Protection",
    content:
      "We implement industry-standard security measures to protect your personal information against unauthorized access, disclosure, or misuse.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "We may use trusted third-party tools such as Google Analytics, payment providers, or hosting services. These providers maintain their own privacy policies.",
  },
  {
    title: "6. Data Sharing",
    content:
      "Velquora Technologies never sells or rents your personal information. Your data is shared only when required to deliver our services or comply with legal obligations.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to access, update, or request deletion of your personal information. Contact us anytime if you wish to exercise these rights.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. Any changes will be reflected on this page along with the revised effective date.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy, please contact Velquora Technologies through our Contact page or official email.",
  },
];

export default function PrivacyContent() {
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