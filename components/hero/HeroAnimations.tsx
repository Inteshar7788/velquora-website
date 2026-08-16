"use client";

import { motion } from "framer-motion";

export default function HeroAnimations() {
  return (
    <>
      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-52
          top-24
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Top Right Glow */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-52
          top-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-violet-500/20
          blur-[170px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-250px]
          left-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      {/* Floating Blur Balls */}

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[18%]
          top-[28%]
          h-5
          w-5
          rounded-full
          bg-cyan-400/40
          blur-sm
        "
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[20%]
          top-[38%]
          h-6
          w-6
          rounded-full
          bg-blue-500/40
          blur-sm
        "
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[18%]
          left-[28%]
          h-4
          w-4
          rounded-full
          bg-cyan-300/40
          blur-sm
        "
      />
    </>
  );
}