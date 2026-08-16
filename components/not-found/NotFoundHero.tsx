"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className="
            text-[120px]
            font-black
            leading-none
            text-transparent
            bg-gradient-to-r
            from-cyan-400
            via-sky-300
            to-blue-500
            bg-clip-text
            md:text-[220px]
          "
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-6 text-4xl font-bold text-white"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
        >
          The page you are looking for doesn't exist, has been moved,
          or the URL is incorrect.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            <Home size={20} />

            Back Home
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
            "
          >
            <ArrowLeft size={20} />

            Contact Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}