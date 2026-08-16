"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedBorder from "./AnimatedBorder";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const mobileLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: showNavbar ? 0 : -120,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 py-5"
      >
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#07111fd9] backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,.45)]">

            {/* Animated Border */}
            <AnimatedBorder />

            {/* Navbar */}
            <div className="flex h-20 items-center px-7">

              {/* Logo */}
              <NavLogo />

              {/* Desktop Menu */}
              <div className="ml-10 flex-1">
                <NavMenu />
              </div>

              {/* Right Side */}
              <div className="ml-8 flex items-center gap-3">

                {/* Desktop Button */}
                <div className="hidden lg:block">
                  <NavButton />
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden">
                  <MenuButton
                    isOpen={isOpen}
                    toggle={() => setIsOpen(!isOpen)}
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed left-5 right-5 top-28 z-40 overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#07111f]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col p-6">

              {mobileLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-4 text-left text-lg text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-5">
                <NavButton />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}