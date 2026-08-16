"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NavButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href="#contact"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl transition-all duration-500 group-hover:bg-cyan-400/50" />

        {/* Button */}
        <div
          className="
            relative
            flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-400/30
            bg-gradient-to-r
            from-cyan-500
            via-blue-600
            to-indigo-600
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/30
            transition-all
            duration-300
            group-hover:shadow-cyan-400/50
          "
        >
          <span>Get Quote</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

        {/* Shine Animation */}
        <div
          className="
            absolute
            -left-20
            top-0
            h-full
            w-10
            rotate-12
            bg-white/30
            blur-md
            transition-all
            duration-700
            group-hover:left-[120%]
          "
        />
      </Link>
    </motion.div>
  );
}