"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string | null;
}

function CardInner({ item }: { item: WorkItem }) {
  return (
    <>
      <div className="relative h-52 overflow-hidden bg-[#111]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <p className="text-[10px] text-[#f97316] tracking-[0.18em] uppercase mb-1">
            {item.category}
          </p>
          <p className="text-[#f0f0f0] text-sm font-semibold leading-tight">{item.title}</p>
          {item.slug && (
            <p className="text-[#888] text-[11px] mt-2 tracking-wide">View case study →</p>
          )}
        </div>
      </div>
      <div className="bg-[#0d0d0d] px-5 py-4 group-hover:bg-[#111] transition-colors duration-300">
        <p className="text-[10px] text-[#444] uppercase tracking-[0.18em] mb-1">
          {item.category}
        </p>
        <p className="text-[#888] text-sm font-medium group-hover:text-[#f0f0f0] transition-colors duration-300 leading-tight">
          {item.title}
        </p>
      </div>
    </>
  );
}

function WorkItemCard({ item }: { item: WorkItem }) {
  if (item.slug) {
    return (
      <Link href={`/projects/${item.slug}`} className="group block">
        <CardInner item={item} />
      </Link>
    );
  }
  return (
    <div className="group block cursor-default">
      <CardInner item={item} />
    </div>
  );
}

const OTHER_WORK: WorkItem[] = [
  {
    id: "cihrm",
    title: "CIHRM MIS & LMS Platform",
    category: "QA Engineering",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "birth-registry",
    title: "Ghana Birth & Death Registry",
    category: "QA Engineering",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "agm",
    title: "AGM Voting Platforms",
    category: "QA · Data Analysis",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "nsa",
    title: "National Skills Authority Website",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "jubilare",
    title: "Jubilare 2026 Mental Health Campaign",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80",
    slug: "jubilare-mental-health",
  },
  {
    id: "tumi-music",
    title: "Tumi Music Promotional Website",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop&q=80",
    slug: "tumi-music",
  },
  {
    id: "atmosphere",
    title: "Atmosphere of Worship Platform",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "cosy-aura",
    title: "COSY Aura eCommerce & Wellness",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
  {
    id: "ministry",
    title: "Ministry of Youth Development Website",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=400&fit=crop&q=80",
    slug: null,
  },
] as const;

export default function OtherWork() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-[11px] tracking-[0.25em] text-[#555] uppercase mb-4">
              Additional Work
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-[#f0f0f0] leading-none uppercase">
              OTHER WORK
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed sm:text-right">
            Government platforms, data analysis, campaigns, and WordPress client sites.
          </p>
        </motion.div>

        {/* 3-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {OTHER_WORK.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.07 }}
            >
              <WorkItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
