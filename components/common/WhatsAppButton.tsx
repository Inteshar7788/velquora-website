"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const phone = "919155584212";

const message = encodeURIComponent(`Hi Velquora Technologies,

I visited your website and I'm interested in your services.

I'd like to discuss my project.

Thank you!`);

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-8 left-6 z-[9999]"
    >
      

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

        <span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-30"></span>

        <div
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_15px_45px_rgba(37,211,102,.45)]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <MessageCircle size={30} />

          <span className="absolute left-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-lime-300"></span>
        </div>
      </a>
    </motion.div>
  );
}