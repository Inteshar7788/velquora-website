"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "15%", size: 6, delay: 0 },
  { left: "18%", top: "65%", size: 8, delay: 1 },
  { left: "35%", top: "30%", size: 5, delay: 2 },
  { left: "52%", top: "80%", size: 7, delay: 3 },
  { left: "70%", top: "18%", size: 6, delay: 4 },
  { left: "82%", top: "60%", size: 5, delay: 5 },
  { left: "92%", top: "35%", size: 8, delay: 6 },
];

export default function FloatingShapes() {
  return (
    <>
      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-52 top-24 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-52 bottom-0 h-[550px] w-[550px] rounded-full bg-blue-500/20 blur-[180px]"
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
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}