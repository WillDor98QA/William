"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-white/[0.04] py-8 px-8 md:px-16 lg:px-20"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-[#333] text-xs tracking-wide">
          © {year} William Dor · Accra, Ghana · All rights reserved
        </p>

        {/* Center: Built with */}
        <p className="text-[#222] text-xs tracking-wide hidden sm:block">
          Built with Next.js + Framer Motion
        </p>

        {/* Right: Back to top */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="text-[#444] hover:text-[#f0f0f0] text-xs tracking-[0.18em] uppercase transition-colors duration-300 flex items-center gap-2"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </motion.button>
      </div>
    </footer>
  );
}
