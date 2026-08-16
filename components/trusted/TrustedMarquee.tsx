"use client";

import { motion } from "framer-motion";
import TrustedLogo from "./TrustedLogo";
import { trustedData } from "./trustedData";

const items = [...trustedData, ...trustedData];

export default function TrustedMarquee() {
  return (
    <div className="relative overflow-hidden py-4">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#0B1220] via-[#0B1220]/90 to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max gap-8"
      >
        {items.map((item, index) => (
          <TrustedLogo
            key={index}
            name={item.name}
            logo={item.logo}
          />
        ))}
      </motion.div>
    </div>
  );
}