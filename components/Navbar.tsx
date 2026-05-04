"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          /* At top of page, hero photo sits under the right side — keep a light scrim + blur so links stay readable on any background */
          backgroundColor: scrolled ? "rgba(10,10,10,0.94)" : "rgba(10,10,10,0.78)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(14px)",
          borderBottomColor: scrolled ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
        }}
        transition={{ duration: 0.35 }}
        style={{ borderBottom: "1px solid" }}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            aria-label="William Dor — Home"
            className="text-[#f0f0f0] font-black text-xl tracking-tight hover:text-[#f97316] transition-colors duration-300"
          >
            WD
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[11px] text-[#d4d4d4] tracking-[0.22em] hover:text-white transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-[#d4d4d4] hover:text-white transition-colors p-1"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile full-screen menu ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-[#0a0a0a]/90"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer (slides from right) */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-[#0f0f0f] border-l border-white/[0.04] flex flex-col px-8 py-10"
              aria-label="Mobile navigation"
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="self-end text-[#444] hover:text-[#f0f0f0] transition-colors text-xl mb-14"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-10">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className="text-3xl font-black text-[#f0f0f0] hover:text-[#f97316] tracking-tight transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <p className="text-[#333] text-xs tracking-[0.2em]">ACCRA · GHANA · GMT+0</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
