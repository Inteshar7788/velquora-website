"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <Link href="#home" className="group flex items-center gap-4">
      {/* Logo */}
      <motion.div
        whileHover={{
          rotate: -5,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />

        <Image
          src="/logo.png" // public/logo.png
          alt="Velquora Logo"
          width={55}
          height={55}
          priority
          className="relative z-10 h-14 w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,.5)]"
        />
      </motion.div>

      {/* Company Name */}
      <div className="leading-none">
        <motion.h1
          whileHover={{ x: 2 }}
          className="text-[34px] font-black tracking-tight text-white"
        >
          Velquora
        </motion.h1>

        <motion.p
          whileHover={{ letterSpacing: "0.45em" }}
          className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400"
        >
          TECHNOLOGIES
        </motion.p>
      </div>
    </Link>
  );
}