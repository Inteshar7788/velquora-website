"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.35 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_60px_rgba(6,182,212,.15)]
      "
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          px-8
          py-7
          text-left
        "
      >
        <h3 className="text-lg font-semibold text-white md:text-xl">
          {question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            text-cyan-400
            shrink-0
          "
        >
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-8 pb-8 pt-6">
              <p className="leading-8 text-slate-400">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}