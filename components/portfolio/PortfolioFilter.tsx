"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const filters = [
  "All",
  "Website",
  "E-Commerce",
  "Web App",
  "Dashboard",
];

export default function PortfolioFilter() {
  const [active, setActive] = useState("All");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mb-20 flex flex-wrap items-center justify-center gap-4"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`
            relative
            overflow-hidden
            rounded-full
            border
            px-6
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              active === filter
                ? "border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,.25)]"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:text-white"
            }
          `}
        >
          {active === filter && (
            <motion.span
              layoutId="activePortfolioFilter"
              className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}

          {filter}
        </button>
      ))}
    </motion.div>
  );
}