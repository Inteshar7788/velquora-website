"use client";

import { motion } from "framer-motion";

import { portfolioData } from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
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
      {portfolioData.map((project) => (
        <motion.div
          key={project.id}
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
          <PortfolioCard
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            live={project.live}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}