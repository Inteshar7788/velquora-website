"use client";

import { motion } from "framer-motion";

import { processData } from "./processData";
import ProcessCard from "./ProcessCard";

export default function ProcessTimeline() {
  return (
    <div className="relative">

      {/* Vertical Timeline Line (Desktop) */}
      <div
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-cyan-500/40
          via-cyan-400/20
          to-transparent
          lg:block
        "
      />

      <div className="space-y-16">

        {processData.map((item, index) => {

          const Icon = item.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.step}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                relative
                grid
                items-center
                gap-10
                lg:grid-cols-2
              "
            >

              {/* Left Card */}
              {isLeft ? (
                <>
                  <ProcessCard
                    step={item.step}
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                  />

                  <div />
                </>
              ) : (
                <>
                  <div />

                  <ProcessCard
                    step={item.step}
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                  />
                </>
              )}

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  hidden
                  h-6
                  w-6
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border-4
                  border-[#07111F]
                  bg-cyan-400
                  shadow-[0_0_25px_rgba(34,211,238,.8)]
                  lg:block
                "
              />

            </motion.div>
          );

        })}

      </div>

    </div>
  );
}