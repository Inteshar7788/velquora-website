"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href="/contact"
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          via-blue-600
          to-indigo-600
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/30
          transition-all
          duration-300
          hover:shadow-cyan-400/50
        "
      >
        Get Quote

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}