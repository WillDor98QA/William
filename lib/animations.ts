import type { Variants, Transition } from "framer-motion";

/* ── Transitions ──────────────────────────────────────────── */
export const T = {
  default: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } satisfies Transition,
  slow: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } satisfies Transition,
  fast: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } satisfies Transition,
  spring: { type: "spring", stiffness: 300, damping: 28 } satisfies Transition,
  springBouncy: { type: "spring", stiffness: 500, damping: 20 } satisfies Transition,
  springSmooth: { type: "spring", stiffness: 200, damping: 30 } satisfies Transition,
} as const;

/* ── Entrance variants ────────────────────────────────────── */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: T.default },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: T.default },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: T.slow },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: T.slow },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: T.spring },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: T.default },
};

/* ── Stagger containers ───────────────────────────────────── */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

/* ── Common viewport config ───────────────────────────────── */
export const VIEWPORT = { once: true, amount: 0.15 } as const;
export const VIEWPORT_HALF = { once: true, amount: 0.3 } as const;
