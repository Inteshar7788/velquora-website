"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  BriefcaseBusiness,
  Headphones,
  TrendingUp,
  Code2,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: BriefcaseBusiness,
    value: "100+",
    label: "Projects Delivered",
  },
  {
    icon: Star,
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
  },
  {
    icon: TrendingUp,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
];

export default function HeroContent() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

      

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          mt-2
          max-w-6xl
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-8xl
        "
      >
        We Build

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
          Digital Experiences
        </span>

        <br />

        That Grow Brands.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
        }}
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-slate-300
        "
      >
        We create premium websites, scalable web applications and digital
        experiences that help startups and businesses generate more leads,
        increase conversions and grow faster.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
        }}
        className="mt-10 flex flex-wrap justify-center gap-5"
      >
        <Link 
        href="#contact"
        scroll={true}
        aria-label="Get Free Consultation"
          className="
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-[0_10px_35px_rgba(6,182,212,.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          Get Free Consultation
        </Link>

        <Link 
        href="#portfolio"
        scroll={true}
        aria-label="View Portfolio"
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
            transition-all
            duration-300
            hover:bg-white/10
            hover:-translate-y-1
          "
        >
          View Portfolio

          <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="mt-8 flex items-center gap-3"
      >
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
            />
          ))}
        </div>

        <span className="text-slate-300">
          Rated <b className="text-white">4.9/5</b> by our clients
        </span>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
        }}
        className="
          mt-16
          grid
          w-full
          grid-cols-2
          gap-5
          md:grid-cols-3
          xl:grid-cols-6
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
}