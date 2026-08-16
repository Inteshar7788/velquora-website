"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
            y: -5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            fixed
            bottom-16
            right-6
            z-[9998]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-[#07111F]/90
            text-cyan-400
            shadow-[0_10px_35px_rgba(6,182,212,.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-cyan-500
            hover:text-white
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}