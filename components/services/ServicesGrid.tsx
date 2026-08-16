"use client";

import { motion } from "framer-motion";

import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            },
          }}
        >
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}