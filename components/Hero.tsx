"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Image moves up slower than scroll → classic parallax */
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative bg-[#0a0a0a] overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">

        {/* ── LEFT: Text panel (wider on md so huge type fits; z-20 keeps headline above image bleed) */}
        <div className="relative z-20 flex flex-col justify-between overflow-visible px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20 md:pt-32 md:pb-16 w-full md:w-[58%] lg:w-[56%] xl:w-[54%] min-h-[85vh] md:min-h-screen shrink-0">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#2a2a2a]" aria-hidden="true" />
            <p className="text-[11px] tracking-[0.25em] text-[#555] uppercase">
              QA Engineering · WordPress · Frontend
            </p>
          </motion.div>

          {/* Main title — fluid size so “WILLIAM” fits the column; reveal uses clip-path (no horizontal overflow clip) */}
          <div className="my-auto py-8 max-w-full">
            <motion.h1
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-[clamp(3.25rem,7.2vw,5.5rem)] lg:text-[clamp(4rem,8.5vw,7rem)] xl:text-[clamp(4.75rem,9vw,8.25rem)] 2xl:text-[9.5rem] font-black leading-[0.95] tracking-tight text-[#f0f0f0] uppercase select-none"
            >
              WILLIAM
            </motion.h1>
            <motion.h1
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-[clamp(3.25rem,7.2vw,5.5rem)] lg:text-[clamp(4rem,8.5vw,7rem)] xl:text-[clamp(4.75rem,9vw,8.25rem)] 2xl:text-[9.5rem] font-black leading-[0.95] tracking-tight text-[#f0f0f0] uppercase select-none"
            >
              DOR
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-7 space-y-3 max-w-md"
            >
              <p className="text-[#777] text-base md:text-lg leading-relaxed">
                Mid-level QA Engineer &amp; WordPress Developer with 2+ years delivering quality
                software across fintech, insurance, and payroll platforms in Ghana.
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] shrink-0" aria-hidden="true" />
                <p className="text-xs text-[#555] tracking-wide">Available · Accra, Ghana · GMT+0</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom: CTAs + scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="flex items-center justify-between"
          >
            {/* Scroll indicator */}
            <motion.a
              href="#work"
              className="inline-flex items-center gap-3 text-[#444] hover:text-[#f0f0f0] transition-colors duration-300"
              aria-label="Scroll to featured work"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-base leading-none"
                aria-hidden="true"
              >
                ↓
              </motion.span>
              <span className="text-[11px] tracking-[0.22em] uppercase">Scroll</span>
            </motion.a>

            {/* Quick links */}
            <div className="hidden sm:flex items-center gap-6">
              <a
                href="#work"
                className="text-[11px] tracking-[0.15em] text-[#444] hover:text-[#f0f0f0] transition-colors uppercase"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-[11px] tracking-[0.15em] text-[#444] hover:text-[#f0f0f0] transition-colors uppercase"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[11px] tracking-[0.15em] text-[#f97316] hover:text-[#ea580c] transition-colors uppercase"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Personal image ────────────────────────── */}
        <div className="relative hidden md:block md:h-auto md:flex-1 overflow-hidden bg-[#111]">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 scale-[1.15] origin-center"
          >
            <Image
              src="/1711170404521.jpeg"
              alt="William Dor — QA Engineer and Frontend Developer based in Accra, Ghana"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>

          {/* Gradient: blends left edge into dark background (desktop) */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.35) 20%, transparent 55%)",
            }}
            aria-hidden="true"
          />
          {/* Bottom gradient on mobile */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 md:hidden"
            style={{
              background: "linear-gradient(to top, #0a0a0a, transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
