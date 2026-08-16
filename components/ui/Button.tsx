"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "border border-slate-600 bg-transparent text-white hover:border-cyan-400 hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseClasses} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </motion.button>
  );
};

export default Button;