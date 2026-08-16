"use client";

import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function MenuButton({
  isOpen,
  toggle,
}: MenuButtonProps) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:bg-cyan-500/10
        hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl opacity-0 transition duration-300 hover:opacity-100" />

      <div className="relative flex h-5 w-6 flex-col justify-between">

        {/* Top Line */}
        <motion.span
          animate={
            isOpen
              ? {
                  rotate: 45,
                  y: 8,
                }
              : {
                  rotate: 0,
                  y: 0,
                }
          }
          transition={{ duration: 0.25 }}
          className="block h-[2px] w-full rounded-full bg-white"
        />

        {/* Middle Line */}
        <motion.span
          animate={
            isOpen
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 1,
                }
          }
          transition={{ duration: 0.2 }}
          className="block h-[2px] w-full rounded-full bg-cyan-400"
        />

        {/* Bottom Line */}
        <motion.span
          animate={
            isOpen
              ? {
                  rotate: -45,
                  y: -8,
                }
              : {
                  rotate: 0,
                  y: 0,
                }
          }
          transition={{ duration: 0.25 }}
          className="block h-[2px] w-full rounded-full bg-white"
        />

      </div>
    </button>
  );
}