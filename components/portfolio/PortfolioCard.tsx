"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  live: string;
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  technologies,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group
        flex
        h-[560px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_25px_80px_rgba(6,182,212,.18)]
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent" />

        {/* Category */}
        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[2px]
            text-cyan-300
            backdrop-blur-xl
          "
        >
          {category}
        </span>

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">

        {/* Title */}
        <h3 className="text-2xl font-bold leading-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 leading-7 text-slate-400">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </motion.div>
  );
}