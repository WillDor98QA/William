"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ── Animated counter ─────────────────────────────────────── */
function Counter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const val = useMotionValue(0);
  const display = useTransform(val, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  );

  useEffect(() => {
    if (inView) animate(val, target, { duration: 2.2, ease: "easeOut" });
  }, [inView, val, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* ── Data ─────────────────────────────────────────────────── */
const STATS = [
  { value: 2, suffix: "+", label: "Years at Npontu", note: "QA Engineer & WordPress Dev" },
  { value: 575, suffix: "K+", label: "Active Users Served", note: "GKSB national platform" },
  { value: 10000, suffix: "+", label: "Concurrent Users", note: "Load tested via K6" },
  { value: 99.2, suffix: "%", label: "Data Accuracy", note: "Reconciliation match rate", decimals: 1 },
] as const;

const SERVICES = [
  {
    title: "QA & Testing",
    desc: "End-to-end test case design, load testing with K6, Playwright automation, compliance testing for Ghana fintech (PAYE, SSNIT, mobile money).",
  },
  {
    title: "WordPress Development",
    desc: "WooCommerce, Dokan multi-vendor, Paystack integration, Elementor, custom plugins, SEO configuration, and security hardening.",
  },
  {
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind CSS — building responsive, accessible, production-ready interfaces.",
  },
  {
    title: "Data Analysis",
    desc: "Excel automation with openpyxl, SQL queries, transaction reconciliation, compliance reports for corporate clients.",
  },
] as const;

const AWARDS = [
  {
    role: "Quality Assurance Engineer",
    org: "Npontu Technologies · Tse Addo, Accra",
    period: "Oct 2023 – Present",
    note: "Fintech, Insurance, ERP & Government platforms",
  },
  {
    role: "WordPress Engineer",
    org: "Npontu Technologies · Tse Addo, Accra",
    period: "Jul 2024 – Present",
    note: "Government, corporate & eCommerce clients",
  },
  {
    role: "Bachelor of Arts — Information Studies & Music",
    org: "University of Ghana, Legon",
    period: "Aug 2019 – Sept 2025",
    note: "GPA 3.36 / 4.00",
  },
  {
    role: "Music Director",
    org: "UG Jubilee Choir & Pax Romana Choir",
    period: "2020 – 2023",
    note: "Leadership, repertoire & music notation training",
  },
] as const;

const CLIENTS = [
  "Hollard Insurance",
  "CalBank Ghana",
  "Ghana International Bank",
  "Ministry of Youth Development",
  "National Skills Authority",
  "Ghana Birth & Death Registry",
  "Ghana Knowledge & Skills Bank",
  "Jubilare Group",
  "Tumi Music",
  "MTN Ghana",
  "APMT / ICD",
  "Npontu Technologies",
] as const;

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20">

        {/* ── Section label ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.25em] text-[#555] uppercase mb-4">About</p>
          <h2 className="text-5xl md:text-7xl font-black text-[#f0f0f0] leading-none uppercase">
            THE PERSON
            <br />
            BEHIND THE WORK
          </h2>
        </motion.div>

        {/* ── Bio + Image ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          {/* Left: Bio text + services */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5 mb-10">
              <p className="text-[#888] text-base md:text-lg leading-relaxed">
                I&apos;m <span className="text-[#f0f0f0] font-semibold">William Dor</span> — a QA Engineer and WordPress Developer at{" "}
                <span className="text-[#f0f0f0]">Npontu Technologies</span> in Accra, Ghana. My work spans rigorous quality assurance, modern frontend development, and WordPress engineering across Ghana&apos;s fintech and insurance ecosystem.
              </p>
              <p className="text-[#666] text-base leading-relaxed">
                I specialize in Ghana&apos;s fintech ecosystem — designing comprehensive test suites for payroll compliance (PAYE, SSNIT), load-testing payment platforms with K6 against live APIs, and building WooCommerce-powered multi-vendor marketplaces with Paystack integration.
              </p>
              <p className="text-[#666] text-base leading-relaxed">
                Whether I&apos;m writing 500 colour-coded Excel test cases, debugging K6 auth token expiry under burst load, architecting a digital marketplace, or launching a mental health campaign — I bring the same meticulous attention that prevents production incidents.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-0 border-t border-white/[0.06]">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="py-5 border-b border-white/[0.06] group cursor-default"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[#f0f0f0] font-semibold text-sm mb-1 group-hover:text-[#f97316] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#555] text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <span className="text-[#2a2a2a] text-xs mt-0.5 shrink-0 group-hover:text-[#f97316] transition-colors duration-300">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Personal photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#111]">
              <Image
                src="/1711170404521.jpeg"
                alt="William Dor — QA Engineer and Frontend Developer, Accra Ghana"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Subtle corner accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 70%, rgba(10,10,10,0.8) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Caption badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="bg-[#0a0a0a]/85 backdrop-blur-sm border border-white/[0.06] rounded px-4 py-3">
                <p className="text-[#f0f0f0] text-sm font-semibold">William Dor</p>
                <p className="text-[#555] text-xs">QA Engineer · WordPress Dev · Frontend</p>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0a0a0a]/85 backdrop-blur-sm border border-white/[0.06] rounded px-3 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
                <span className="text-[10px] text-[#555]">Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] mb-20"
        >
          {STATS.map(({ value, suffix, label, note, ...rest }) => {
            const decimals = "decimals" in rest ? (rest as { decimals: number }).decimals : 0;
            return (
              <div
                key={label}
                className="bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-300 p-8 group cursor-default"
              >
                <div className="text-3xl md:text-4xl font-black text-[#f97316] mb-2">
                  <Counter target={value} suffix={suffix} decimals={decimals} />
                </div>
                <p className="text-[#f0f0f0] text-sm font-medium mb-1">{label}</p>
                <p className="text-[#444] text-xs leading-tight">{note}</p>
              </div>
            );
          })}
        </motion.div>

        {/* ── Awards & Recognition ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.22em] text-[#555] uppercase mb-8">
              Experience &amp; Education
            </p>
            <div className="space-y-0">
              {AWARDS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-5 border-b border-white/[0.06] last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[#f0f0f0] text-sm font-semibold mb-0.5">{item.role}</p>
                      <p className="text-[#555] text-sm">{item.org}</p>
                      <p className="text-[#f97316] text-xs mt-1">{item.note}</p>
                    </div>
                    <span className="text-[#333] text-xs shrink-0 text-right leading-tight">
                      {item.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[11px] tracking-[0.22em] text-[#555] uppercase mb-8">
              Worked With
            </p>
            <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
              {CLIENTS.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-300 px-5 py-4 group cursor-default"
                >
                  <p className="text-[#888] text-sm group-hover:text-[#f0f0f0] transition-colors duration-300">
                    {client}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Key tools */}
            <div className="mt-10">
              <p className="text-[11px] tracking-[0.22em] text-[#555] uppercase mb-5">
                Key Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "K6 (Load Testing)",
                  "Playwright (TypeScript)",
                  "MySQL / SQL",
                  "WordPress",
                  "WooCommerce",
                  "Dokan",
                  "Paystack",
                  "Postman",
                  "Git / GitHub",
                  "Excel / openpyxl",
                  "Elementor",
                  "Python",
                  "TypeScript",
                  "Figma",
                  "Google Analytics",
                  "Google Search Console",
                  "HTML / CSS / JS",
                  "SVG Graphics",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] text-[#444] border border-[#1a1a1a] rounded px-3 py-1.5 hover:text-[#f0f0f0] hover:border-[#333] transition-colors duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
