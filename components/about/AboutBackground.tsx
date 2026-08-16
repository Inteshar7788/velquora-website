"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "15%", size: 3 },
  { left: "20%", top: "35%", size: 2 },
  { left: "35%", top: "20%", size: 4 },
  { left: "52%", top: "60%", size: 3 },
  { left: "68%", top: "18%", size: 2 },
  { left: "82%", top: "42%", size: 4 },
  { left: "92%", top: "70%", size: 3 },
  { left: "15%", top: "82%", size: 2 },
];

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Floating Particles */}
      {particles.map((item, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-300/70"
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#07111F] to-transparent" />
    </div>
  );
}