"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  project: "Website Development",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "Website Development",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }

  setLoading(false);
};

  return (
    <motion.form
    onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      {/* Name + Email */}
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:bg-white/10
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="you@example.com"
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-5
    py-4
    text-white
    placeholder:text-slate-500
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:bg-white/10
    focus:ring-2
    focus:ring-cyan-400/20
  "
/>
        </div>

      </div>

      {/* Phone + Project */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Phone Number
          </label>

          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 9876543210"
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-5
    py-4
    text-white
    placeholder:text-slate-500
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:bg-white/10
    focus:ring-2
    focus:ring-cyan-400/20
  "
/>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Type
          </label>

          <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:bg-white/10
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              >
                <option className="bg-[#07111F]">Website Development</option>
                <option className="bg-[#07111F]">Web Application</option>
                <option className="bg-[#07111F]">E-Commerce</option>
                <option className="bg-[#07111F]">UI / UX Design</option>
                <option className="bg-[#07111F]">SEO Optimization</option>
                <option className="bg-[#07111F]">Maintenance</option>
              </select>
        </div>

      </div>

      {/* Message */}
      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Your Message
        </label>

        <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your project..."
  className="
    w-full
    resize-none
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-5
    py-4
    text-white
    placeholder:text-slate-500
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400
    focus:bg-white/10
    focus:ring-2
    focus:ring-cyan-400/20
  "
/>

      </div>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        type="submit"
        className="
          mt-8
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/30
          transition-all
          duration-300
          hover:shadow-cyan-500/50
        "
      >
        {loading ? "Sending..." : "Send Message"}

        <Send
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.button>

    </motion.form>
  );
}