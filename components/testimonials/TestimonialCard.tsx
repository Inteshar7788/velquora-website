"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  designation: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  company,
  designation,
  image,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        flex
        h-full
        flex-col
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
        hover:shadow-[0_25px_80px_rgba(6,182,212,.18)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Quote Icon */}
      <div className="absolute right-6 top-6 text-cyan-400/20">
        <Quote size={70} />
      </div>

      {/* Stars */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="flex-1 text-lg leading-8 text-slate-300 italic">
        "{review}"
      </p>

      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Client */}
      <div className="flex items-center gap-4">

        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-cyan-400/30">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">
            {name}
          </h4>

          <p className="text-sm text-cyan-400">
            {designation}
          </p>

          <p className="text-sm text-slate-400">
            {company}
          </p>
        </div>

      </div>
    </motion.div>
  );
}