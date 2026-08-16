"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  "Custom Website Development",
  "Modern UI/UX Design",
  "SEO & Performance Optimized",
  "Secure & Scalable Solutions",
];

export default function AboutContent() {
  return (
    <div>


      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .15 }}
        className="
          mt-7
          text-4xl
          font-black
          leading-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Building Websites

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          That Drive Real Results
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .3 }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-300
        "
      >
        At Velquora, we design and develop premium websites,
        scalable web applications and digital experiences that
        help businesses attract more customers, improve online
        presence and achieve long-term growth.
      </motion.p>

      {/* Features */}

      <div className="mt-10 space-y-5">

        {features.map((feature, index) => (

          <motion.div
            key={feature}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * .12,
            }}
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
              <CheckCircle2
                size={22}
                className="text-cyan-400"
              />
            </div>

            <span className="text-lg text-slate-200">
              {feature}
            </span>

          </motion.div>

        ))}

      </div>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .6 }}
        className="mt-12 flex flex-wrap gap-5"
      >

        

        <button
          className="
            flex
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
          Our Services

          <ArrowRight size={18} />
        </button>

      </motion.div>

    </div>
  );
}