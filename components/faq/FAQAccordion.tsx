"use client";

import { motion } from "framer-motion";

import { faqData } from "./faqData";
import FAQItem from "./FAQItem";

export default function FAQAccordion() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        mx-auto
        max-w-5xl
        space-y-6
      "
    >
      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            },
          }}
        >
          <FAQItem
            question={faq.question}
            answer={faq.answer}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}