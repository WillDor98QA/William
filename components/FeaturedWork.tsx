"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/constants";

const FEATURED = PROJECTS_DATA.slice(0, 5);

const CAT_LABEL: Record<string, string> = {
  qa: "QA Engineering",
  wordpress: "WordPress",
  frontend: "Frontend Dev",
};

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#0a0a0a]">

      {/* ── Section heading ──────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.25em] text-[#555] uppercase mb-5">
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f0f0f0] leading-none uppercase">
              FEATURED
              <br />
              WORK
            </h2>
            <p className="text-[#555] text-sm max-w-xs md:text-right leading-relaxed">
              QA engineering, load testing, and WordPress development across Ghana&apos;s fintech ecosystem.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Project list: alternating image/text ─────────── */}
      <div className="border-t border-white/[0.04]">
        {FEATURED.map((project, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group border-b border-white/[0.04]"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div
                  className={`flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } md:min-h-[480px]`}
                >
                  {/* ── Image panel ────────────────────── */}
                  <div className="relative w-full md:w-[58%] h-64 md:h-auto overflow-hidden bg-[#111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 58vw"
                    />
                    {/* Dark overlay, lifts on hover */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/45 group-hover:bg-[#0a0a0a]/25 transition-colors duration-500" />
                    {/* Project number (watermark) */}
                    <span
                      className="absolute bottom-4 right-5 text-[#f0f0f0]/10 text-7xl font-black leading-none select-none tabular-nums"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ── Text panel ─────────────────────── */}
                  <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-10 md:py-14 bg-[#0d0d0d] group-hover:bg-[#111] transition-colors duration-400">
                    {/* Category + year */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] text-[#555] tracking-[0.2em] uppercase">
                        {CAT_LABEL[project.category]}
                      </span>
                      <span className="h-px w-4 bg-[#2a2a2a]" aria-hidden="true" />
                      <span className="text-[10px] text-[#333] tracking-widest">2024</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#f0f0f0] text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-[#f97316] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#666] text-sm leading-relaxed max-w-sm mb-6">
                      {project.description}
                    </p>

                    {/* Metric highlight */}
                    <div className="flex items-center gap-3 mb-6 py-3 border-l-2 border-[#f97316]/40 pl-4">
                      <span className="text-[#f97316] font-black text-lg tabular-nums">
                        {project.metricValue.toLocaleString()}
                        {project.metricSuffix}
                      </span>
                      <span className="text-[#444] text-xs">{project.metric}</span>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] text-[#444] border border-[#1a1a1a] rounded px-2.5 py-1 tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#444] group-hover:text-[#f0f0f0] transition-colors duration-300">
                      <span className="text-[11px] tracking-[0.2em] uppercase">View Case Study</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
