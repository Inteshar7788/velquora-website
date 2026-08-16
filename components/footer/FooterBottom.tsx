"use client";

import Link from "next/link";

export default function FooterBottom() {
  return (
    <section className="px-6 py-8">

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-5
          border-t
          border-white/10
          pt-8
          text-center
          md:flex-row
        "
      >

        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Velquora Technologies
          </span>
          . All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">

          <Link
            href="/privacy-policy"
            className="
              text-sm
              text-slate-400
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="
              text-sm
              text-slate-400
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            Terms & Conditions
          </Link>

        </div>

        {/* Credit */}
        <p className="text-sm text-slate-400">
          Designed & Developed by{" "}
          <span className="font-semibold text-cyan-400">
            Velquora Technologies
          </span>
        </p>

      </div>

    </section>
  );
}