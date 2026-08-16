"use client";

import { ArrowUpRight, Crown, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Md Inteshar",
    role: "Founder & CEO",
    badge: "Founder",
    bio: "Passionate about building modern digital experiences and scalable technology solutions. As the founder of Velquora Technologies, he focuses on product vision, business growth, and creating technology that delivers real value to businesses.",
    skills: [
      "Product Strategy",
      "Full Stack Development",
      "Business & Growth",
    ],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Fahad Nomani",
    role: "Co-Founder & CTO",
    badge: "Co-Founder",
    bio: "Focused on technology, system architecture, and building reliable digital solutions. As the technical co-founder, he works on engineering strategy, scalable architecture, and turning ideas into robust products.",
    skills: [
      "System Architecture",
      "Backend Development",
      "Technology Strategy",
    ],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#07111F] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-6"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
          Meet the Team
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </motion.div>


          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Velquora
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            The people behind our vision, technology, and commitment to
            building meaningful digital experiences.
          </p>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Team Cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 opacity-0 blur transition duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/25 group-hover:bg-white/[0.04] sm:p-6">
                {/* Top Badge */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                    <Crown size={13} />
                    {member.badge}
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                    <Sparkles size={16} />
                  </div>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-base font-semibold text-cyan-400">
                    {member.role}
                  </p>

                  <div className="mt-4 h-px w-14 bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>

                {/* Bio */}
                <p className="mt-5 text-sm leading-6 text-slate-400">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mt-5 space-y-2">
                  {member.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.025] px-3 py-2 text-xs text-slate-300 transition-all duration-300 group-hover:border-cyan-400/10"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                  >
                    <FaLinkedinIn size={15} />

                    <span>LinkedIn</span>

                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5"
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    <FaGithub size={15} />

                    <span>GitHub</span>

                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            <span className="text-slate-300">
              One vision. One team. Endless possibilities.
            </span>{" "}
            We are building Velquora Technologies with a focus on innovation,
            quality, and long-term impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}