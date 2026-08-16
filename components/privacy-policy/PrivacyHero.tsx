"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function PrivacyHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#07111F] px-6 pb-20 pt-40">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10"
        >
          <ShieldCheck
            size={42}
            className="text-cyan-400"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-5xl font-black text-white md:text-6xl"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          Your privacy is important to us. This Privacy Policy explains how
          Velquora Technologies collects, uses, and protects your information
          when you use our website and services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-8 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm text-cyan-400"
        >
          Last Updated: July 10, 2026
        </motion.div>

      </div>

    </section>
  );
}