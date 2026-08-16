"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-6">

      {/* Spinner */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-20
            w-20
            rounded-full
            border-[3px]
            border-cyan-500/20
            border-t-cyan-400
            border-r-blue-500
          "
        />

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-12
            w-12
            rounded-full
            border-2
            border-white/10
            border-b-cyan-300
          "
        />

        {/* Center Dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="
            absolute
            h-3
            w-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_rgba(34,211,238,.8)]
          "
        />

      </div>

      {/* Loading Text */}
      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          text-sm
          font-medium
          tracking-[0.35em]
          uppercase
          text-slate-300
        "
      >
        Loading...
      </motion.p>

    </div>
  );
}