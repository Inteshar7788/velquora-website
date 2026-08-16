"use client";

import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <div className="mb-20 -mt-20 text-center">

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-6"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
          OUR PORTFOLIO
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        Crafting

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
          Digital Excellence
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
      >
        Explore our latest websites, web applications, and digital
        solutions crafted with cutting-edge technologies to help
        businesses grow and succeed online.
      </motion.p>

    </div>
  );
}