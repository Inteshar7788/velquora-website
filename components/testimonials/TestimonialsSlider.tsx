"use client";

import { motion } from "framer-motion";

import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSlider() {
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
        xl:grid-cols-2
      "
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.name}
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
          className="h-full"
        >
          <TestimonialCard
            name={testimonial.name}
            company={testimonial.company}
            designation={testimonial.designation}
            image={testimonial.image}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}