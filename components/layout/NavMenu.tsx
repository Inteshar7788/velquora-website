"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function NavMenu() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-10">
      {navItems.map((item, index) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="relative group"
          >
            <Link
              href={item.href}
              className={`relative text-[17px] font-medium transition-colors duration-300 ${
                isActive
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}

              {isActive && (
                <motion.span
                  layoutId="activeNavbar"
                  className="absolute left-0 -bottom-3 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              )}
            </Link>

            {!isActive && (
              <span className="absolute left-0 -bottom-3 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            )}

            <div className="absolute left-1/2 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />
          </motion.div>
        );
      })}
    </div>
  );
}