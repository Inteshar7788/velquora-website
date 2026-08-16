"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "12%", size: 3, duration: 4 },
  { left: "18%", top: "35%", size: 2, duration: 5 },
  { left: "30%", top: "20%", size: 3, duration: 6 },
  { left: "45%", top: "65%", size: 2, duration: 4 },
  { left: "60%", top: "25%", size: 3, duration: 5 },
  { left: "75%", top: "45%", size: 2, duration: 6 },
  { left: "88%", top: "18%", size: 3, duration: 5 },
  { left: "15%", top: "82%", size: 2, duration: 4 },
  { left: "40%", top: "88%", size: 3, duration: 6 },
  { left: "70%", top: "80%", size: 2, duration: 5 },
  { left: "92%", top: "72%", size: 3, duration: 4 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

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
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-56 top-20 h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.32, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-56 top-0 h-[550px] w-[550px] rounded-full bg-blue-500/20 blur-[180px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
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
            scale: [1, 2, 1],
            y: [0, -12, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizontal Light */}
      <motion.div
        animate={{
          x: [-300, 1500],
          opacity: [0, 0.18, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 h-px w-96 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      {/* Vertical Light */}
      <motion.div
        animate={{
          y: [-400, 1200],
          opacity: [0, 0.12, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-1/4 w-px h-96 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-transparent" />

    </div>
  );
}