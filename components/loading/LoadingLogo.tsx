"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingLogo() {
  return (
    <div className="relative flex flex-col items-center">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-36
          w-36
          rounded-full
          bg-cyan-500/30
          blur-[70px]
        "
      />

      {/* Logo */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <Image
          src="/logo.png"
          alt="Velquora Logo"
          width={90}
          height={90}
          priority
          className="drop-shadow-[0_0_30px_rgba(34,211,238,.6)]"
        />
      </motion.div>

      {/* Company Name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          mt-6
          text-3xl
          font-black
          tracking-tight
          text-white
        "
      >
        Velquora
      </motion.h2>

      <p className="mt-2 text-sm tracking-[0.35em] text-cyan-400 uppercase">
        Technologies
      </p>

    </div>
  );
}