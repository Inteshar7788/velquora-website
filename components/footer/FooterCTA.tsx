"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="px-6 pt-24">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          border
          border-cyan-400/20
          bg-gradient-to-br
          from-cyan-500/10
          via-white/[0.04]
          to-blue-500/10
          px-10
          py-20
          backdrop-blur-2xl
        "
      >

        {/* Glow */}
        <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 text-center">

          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[4px]
              text-cyan-300
            "
          >
            LET'S WORK TOGETHER
          </span>

          {/* Heading */}
          <h2
            className="
              mt-8
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            Ready to Build Your
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Dream Project?
            </span>

          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Whether you're a startup, business, or enterprise,
            we create modern websites and web applications
            that help your brand grow faster.
          </p>

          {/* Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              shadow-cyan-500/30
              transition-all
              duration-300
              hover:shadow-cyan-500/50
            "
          >
            Start Your Project

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}