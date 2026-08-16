"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  quickLinks,
  serviceLinks,
  socialLinks,
} from "./footerData";

export default function FooterMain() {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto grid max-w-7xl gap-14 border-b border-white/10 pb-20 lg:grid-cols-4">

        {/* Company */}
        <div>

          {/* Logo */}
          <h2 className="text-3xl font-bold text-white">
            Velquora
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Velquora Technologies helps startups and businesses
            build fast, secure, scalable and modern digital
            products that create real business impact.
          </p>

          {/* Social */}
          <div className="mt-8 flex gap-4">

            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                  "
                >
                  <Icon size={20} />
                </a>
              );
            })}

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            {quickLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
  >
    {link.name}
  </Link>
))}

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold text-white">
            Services
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            {serviceLinks.map((service) => (
              <span
                key={service}
                className="
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                  cursor-pointer
                "
              >
                {service}
              </span>
            ))}

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="mt-6 space-y-6">

            <div className="flex items-start gap-4">
              <Mail
                size={20}
                className="mt-1 text-cyan-400"
              />

              <div>
                <p className="text-slate-400">
                  velquoratechnologies@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                size={20}
                className="mt-1 text-cyan-400"
              />

              <div>
                <p className="text-slate-400">
                  +91 82984 77992
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin
                size={20}
                className="mt-1 text-cyan-400"
              />

              <div>
                <p className="text-slate-400">
                  New Delhi, India
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}