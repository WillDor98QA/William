import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import CaseStudyClient from "./CaseStudyClient";

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return {};
  return {
    title: `${study.title} | William Dor`,
    description: study.tagline,
  };
}

const CAT_LABEL: Record<string, string> = {
  qa: "QA Engineering",
  frontend: "Frontend Dev",
  wordpress: "WordPress",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">

      {/* ── Hero banner ──────────────────────────────────── */}
      <div className="relative h-80 md:h-[480px] overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/40 to-[#0a0a0a]" />

        {/* Breadcrumb */}
        <div className="absolute top-20 left-8 md:left-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#f0f0f0] text-xs tracking-[0.18em] uppercase transition-colors duration-300"
          >
            <span aria-hidden="true">←</span>
            <span>All Work</span>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
          <span className="inline-block text-[10px] text-[#f97316] tracking-[0.22em] uppercase mb-3">
            {CAT_LABEL[study.category]}
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-[#f0f0f0] leading-tight">
            {study.title}
          </h1>
          <p className="text-[#888] mt-2 text-sm">{study.tagline}</p>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <CaseStudyClient study={study} />
    </div>
  );
}
