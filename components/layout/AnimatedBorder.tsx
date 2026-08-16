"use client";

import { motion } from "framer-motion";

export default function AnimatedBorder() {
  return (
    <>
      {/* TOP LIGHT */}
      <motion.div
        initial={{ x: "-30%" }}
        animate={{ x: "130%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
      />

      {/* BOTTOM LIGHT */}
      <motion.div
        initial={{ x: "130%" }}
        animate={{ x: "-30%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 h-px w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"
      />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-0 top-1/2 h-24 w-px -translate-y-1/2 bg-cyan-400 blur-sm"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute right-0 top-1/2 h-24 w-px -translate-y-1/2 bg-blue-500 blur-sm"
      />
    </>
  );
}