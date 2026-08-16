"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "18%", size: 3, duration: 4 },
  { left: "22%", top: "35%", size: 2, duration: 5 },
  { left: "35%", top: "15%", size: 3, duration: 6 },
  { left: "48%", top: "65%", size: 2, duration: 4 },
  { left: "60%", top: "25%", size: 3, duration: 5 },
  { left: "74%", top: "45%", size: 2, duration: 6 },
  { left: "88%", top: "22%", size: 3, duration: 5 },
  { left: "18%", top: "82%", size: 2, duration: 4 },
  { left: "42%", top: "90%", size: 3, duration: 6 },
  { left: "68%", top: "84%", size: 2, duration: 5 },
  { left: "92%", top: "72%", size: 3, duration: 4 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
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
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-56 top-24 h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.3, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-56 top-10 h-[550px] w-[550px] rounded-full bg-violet-500/20 blur-[180px]"
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
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
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

      {/* Light Streak 1 */}
      <motion.div
        animate={{
          x: [-200, 1200],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 h-px w-72 rotate-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      {/* Light Streak 2 */}
      <motion.div
        animate={{
          x: [1200, -200],
          opacity: [0, 0.12, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 h-px w-96 -rotate-12 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-transparent" />

    </div>
  );
}