"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/20
          bg-cyan-500/10
          text-cyan-400
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-8 text-slate-400">
        {description}
      </p>

      {/* Learn More */}
      <button
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-cyan-400
          transition-all
          duration-300
          group-hover:gap-4
        "
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </motion.div>
  );
}