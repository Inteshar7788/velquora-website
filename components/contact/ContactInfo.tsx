"use client";

import { motion } from "framer-motion";
import { contactInfo } from "./contactData";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
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
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:bg-white/[0.05]
              hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]
            "
          >

            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="flex items-center gap-5">

              {/* Icon */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  text-cyan-400
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon size={28} />
              </div>

              {/* Text */}
              <div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                {item.title === "Email" ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="mt-1 block text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {item.value}
                  </a>
                ) : item.title === "Phone" ? (
                  <a
                    href={`tel:${item.value.replace(/\s/g, "")}`}
                    className="mt-1 block text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-slate-400">
                    {item.value}
                  </p>
                )}

              </div>

            </div>

          </motion.div>
        );
      })}

    </div>
  );
}