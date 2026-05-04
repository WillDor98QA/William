"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "dwilliametornam@gmail.com";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/william-dor-20463014a/",
    desc: "linkedin.com/in/william-dor-20463014a",
  },
  {
    label: "GitHub",
    href: "https://github.com/WillDor98QA",
    desc: "github.com/WillDor98QA",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    desc: EMAIL,
  },
] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20">

        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.25em] text-[#555] uppercase mb-4">Let&apos;s Talk</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f0f0f0] leading-none uppercase">
            REACH OUT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: Message + availability ────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#777] text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
              Open to QA Engineering, Frontend Development, and WordPress opportunities — remote or
              based in Accra, Ghana. I bring 2+ years of fintech QA experience and a meticulous
              eye for detail to every project.
            </p>
            <p className="text-[#555] text-base leading-relaxed mb-10 max-w-lg">
              Whether you need a QA engineer to define your test strategy, a WordPress developer
              to build your platform, or a frontend developer to ship your interface — let&apos;s talk.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 border border-white/[0.06] rounded px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" aria-hidden="true" />
              <span className="text-[#888] text-sm">Available for new opportunities · GMT+0</span>
            </div>
          </motion.div>

          {/* ── Right: Contact actions ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-0"
          >
            {/* Copy email CTA */}
            <div className="pb-8 mb-8 border-b border-white/[0.06]">
              <p className="text-[11px] tracking-[0.2em] text-[#444] uppercase mb-3">Email</p>
              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center gap-4 text-left w-full"
                aria-label={`Copy email address ${EMAIL}`}
              >
                <span className="text-[#f0f0f0] text-base md:text-lg font-medium group-hover:text-[#f97316] transition-colors duration-300 break-all">
                  {EMAIL}
                </span>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="shrink-0 text-[10px] text-[#22c55e] border border-[#22c55e]/30 rounded px-2.5 py-1 tracking-wide uppercase"
                    >
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="shrink-0 text-[10px] text-[#444] border border-[#222] rounded px-2.5 py-1 tracking-wide uppercase group-hover:text-[#f0f0f0] group-hover:border-[#444] transition-colors duration-300"
                    >
                      Copy
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Social / other links */}
            <div>
              <p className="text-[11px] tracking-[0.2em] text-[#444] uppercase mb-5">Connect</p>
              <div className="space-y-0">
                {LINKS.map(({ label, href, desc }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center justify-between py-4 border-b border-white/[0.05] group"
                  >
                    <div>
                      <p className="text-[#f0f0f0] text-sm font-medium group-hover:text-[#f97316] transition-colors duration-300">
                        {label}
                      </p>
                      <p className="text-[#444] text-xs mt-0.5 break-all">{desc}</p>
                    </div>
                    <span className="text-[#333] group-hover:text-[#f97316] transition-colors duration-300 ml-4 shrink-0">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mt-10">
              <motion.a
                href={`mailto:${EMAIL}?subject=Opportunity%20Inquiry&body=Hi%20William%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0A`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold tracking-wide transition-colors duration-300"
              >
                <span>GET IN TOUCH</span>
                <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
