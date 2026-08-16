"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 3, duration: 5 },
  { left: "20%", top: "40%", size: 2, duration: 6 },
  { left: "35%", top: "25%", size: 3, duration: 7 },
  { left: "50%", top: "70%", size: 2, duration: 5 },
  { left: "65%", top: "30%", size: 3, duration: 6 },
  { left: "78%", top: "50%", size: 2, duration: 7 },
  { left: "90%", top: "22%", size: 3, duration: 5 },
  { left: "15%", top: "82%", size: 2, duration: 6 },
  { left: "45%", top: "88%", size: 3, duration: 7 },
  { left: "72%", top: "84%", size: 2, duration: 5 },
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
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]"
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
            y: [0, -10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Horizontal Light */}
      <motion.div
        animate={{
          x: [-400, 1600],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 h-px w-80 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#050D18] via-[#050D18]/80 to-transparent" />

    </div>
  );
}