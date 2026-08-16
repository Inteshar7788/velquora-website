"use client";

import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "12%", size: 2, duration: 3 },
  { left: "18%", top: "28%", size: 3, duration: 4 },
  { left: "30%", top: "16%", size: 2, duration: 5 },
  { left: "42%", top: "38%", size: 2, duration: 3.5 },
  { left: "55%", top: "10%", size: 3, duration: 4.5 },
  { left: "68%", top: "30%", size: 2, duration: 3 },
  { left: "82%", top: "18%", size: 3, duration: 5 },
  { left: "92%", top: "40%", size: 2, duration: 4 },
  { left: "12%", top: "78%", size: 2, duration: 3.5 },
  { left: "32%", top: "88%", size: 3, duration: 4.5 },
  { left: "60%", top: "82%", size: 2, duration: 4 },
  { left: "86%", top: "72%", size: 3, duration: 5 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-44 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-44 top-0 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-transparent" />
    </div>
  );
}