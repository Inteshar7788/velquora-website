"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingLogo from "./LoadingLogo";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const hasVisited = sessionStorage.getItem("visited");

  if (hasVisited) {
    setLoading(false);
    return;
  }

  sessionStorage.setItem("visited", "true");

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111F]"
        >
          <div className="flex flex-col items-center gap-8">
            <LoadingLogo />
            <LoadingSpinner />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}