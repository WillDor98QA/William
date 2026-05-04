"use client";

import { motion } from "framer-motion";
import { type CaseStudy } from "@/lib/constants";
import { fadeInUp, fadeInLeft, stagger, staggerSlow, VIEWPORT, T } from "@/lib/animations";

export default function CaseStudyClient({ study }: { study: CaseStudy }) {
  return (
    <div className="max-w-3xl mx-auto px-8 md:px-12 py-16 space-y-16">

      {/* Meta row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-wrap items-center gap-6 py-5 border-b border-white/[0.06]"
      >
        <motion.div variants={fadeInUp}>
          <p className="text-[10px] text-[#444] uppercase tracking-[0.18em] mb-0.5">Duration</p>
          <p className="text-[#888] text-sm">{study.duration}</p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p className="text-[10px] text-[#444] uppercase tracking-[0.18em] mb-0.5">Team</p>
          <p className="text-[#888] text-sm">{study.team}</p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p className="text-[10px] text-[#444] uppercase tracking-[0.18em] mb-0.5">Category</p>
          <p className="text-[#888] text-sm capitalize">
            {study.category === "qa" ? "QA Engineering" : study.category === "frontend" ? "Frontend Dev" : "WordPress"}
          </p>
        </motion.div>
      </motion.div>

      {/* Overview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="overview-heading"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#555] uppercase tracking-[0.22em] mb-4"
        >
          Overview
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          id="overview-heading"
          className="text-2xl md:text-3xl font-black text-[#f0f0f0] mb-5 leading-tight uppercase"
        >
          {study.title}
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-[#777] leading-relaxed text-base">
          {study.overview}
        </motion.p>
      </motion.section>

      {/* Challenge */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="challenge-heading"
        className="border-l-2 border-[#f97316]/40 pl-6 py-1"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#f97316] uppercase tracking-[0.22em] mb-3"
        >
          The Challenge
        </motion.p>
        <motion.p variants={fadeInUp} className="text-[#888] leading-relaxed">
          {study.challenge}
        </motion.p>
      </motion.section>

      {/* Approach */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="approach-heading"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#555] uppercase tracking-[0.22em] mb-6"
        >
          Approach
        </motion.p>
        <div className="space-y-0 border-t border-white/[0.06]">
          {study.approach.map(({ step, detail }, i) => (
            <motion.div
              key={step}
              variants={fadeInLeft}
              className="flex gap-5 py-5 border-b border-white/[0.04] group"
            >
              <span className="text-[#f97316] font-black text-sm shrink-0 w-6 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[#f0f0f0] font-semibold text-sm mb-1">{step}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="results-heading"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#555] uppercase tracking-[0.22em] mb-6"
        >
          Results
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] mb-8">
          {study.results.map(({ label, value, suffix }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              whileHover={{ backgroundColor: "#111" }}
              className="bg-[#0d0d0d] p-5 transition-colors duration-300"
            >
              <div className="text-xl md:text-2xl font-black text-[#f97316] mb-1 tabular-nums">
                {value}{suffix}
              </div>
              <div className="text-[#555] text-xs leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeInUp} className="text-[#777] leading-relaxed">
          {study.solution}
        </motion.p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="tech-heading"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#555] uppercase tracking-[0.22em] mb-5"
        >
          Tech Stack
        </motion.p>
        <motion.div variants={stagger} className="flex flex-wrap gap-2">
          {study.techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={fadeInUp}
              whileHover={{ color: "#f97316", borderColor: "#f97316" }}
              transition={T.fast}
              className="text-[11px] px-3 py-1.5 text-[#666] border border-[#1a1a1a] tracking-wide cursor-default transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerSlow}
        aria-labelledby="learnings-heading"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[10px] text-[#555] uppercase tracking-[0.22em] mb-5"
        >
          Key Learnings
        </motion.p>
        <ul className="space-y-4">
          {study.keyLearnings.map((learning, i) => (
            <motion.li
              key={i}
              variants={fadeInLeft}
              className="flex gap-4 text-[#666] text-sm leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#f97316]/60 shrink-0" aria-hidden="true" />
              {learning}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Bottom CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeInUp}
        className="border-t border-white/[0.06] pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <p className="text-[#f0f0f0] font-semibold mb-1">Interested in working together?</p>
          <p className="text-[#555] text-sm">Open to QA, frontend, and WordPress opportunities.</p>
        </div>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold transition-colors duration-300 shrink-0"
        >
          Get In Touch →
        </motion.a>
      </motion.div>
    </div>
  );
}
