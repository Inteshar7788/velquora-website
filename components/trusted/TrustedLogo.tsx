"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  name: string;
  logo: string;
}

export default function TrustedLogo({ name, logo }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      transition={{ duration: 0.25 }}
      className="group flex min-w-[220px] items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
    >
      <Image
        src={logo}
        alt={name}
        width={44}
        height={44}
        className="opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />

      <span className="text-lg font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
}