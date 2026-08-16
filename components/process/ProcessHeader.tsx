"use client";

import { motion } from "framer-motion";

export default function ProcessHeader() {
  return (
    <div className="mb-24 -mt-25 text-center">

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
          OUR PROCESS
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        From Idea to Launch,
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
          We Follow a Proven Process
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
      >
        Every successful project starts with a clear strategy. From understanding
        your vision to deployment and long-term support, our streamlined
        development process ensures quality, transparency, and timely delivery.
      </motion.p>

    </div>
  );
}