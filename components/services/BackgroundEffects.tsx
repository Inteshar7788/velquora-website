"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "15%", size: 3, duration: 4 },
  { left: "18%", top: "40%", size: 2, duration: 5 },
  { left: "32%", top: "20%", size: 3, duration: 6 },
  { left: "48%", top: "60%", size: 2, duration: 4 },
  { left: "62%", top: "25%", size: 3, duration: 5 },
  { left: "75%", top: "50%", size: 2, duration: 6 },
  { left: "90%", top: "18%", size: 3, duration: 5 },
  { left: "15%", top: "80%", size: 2, duration: 4 },
  { left: "40%", top: "88%", size: 3, duration: 6 },
  { left: "70%", top: "82%", size: 2, duration: 5 },
  { left: "92%", top: "72%", size: 3, duration: 4 },
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
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-52 top-10 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-transparent" />
    </div>
  );
}