/* ─── SHARED MOTION LANGUAGE ──────────────────────────────────────────────
   Reusable framer-motion primitives so every landing-page section animates
   with one consistent rhythm. Sections should consume these rather than
   defining their own durations/easings.

   Usage (staggered card grid):
     <motion.div variants={staggerContainer} initial="hidden"
                 whileInView="show" viewport={defaultViewport}>
       {items.map(x => <motion.div variants={cardReveal} ... />)}
     </motion.div>
--------------------------------------------------------------------------- */
import type { Variants, TargetAndTransition } from "framer-motion";

/** Signature easing used across the site (matches existing Reveal/SectionWrapper). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Default whileInView viewport — reveal once, slightly before fully in frame. */
export const defaultViewport = { once: true, margin: "-80px" } as const;

/** Section-level entrance (fade + rise). */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Parent that reveals its children in sequence. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Child card entrance — pair with staggerContainer on the parent. */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Subtle opacity-only transition for secondary/decorative elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease: EASE } },
};

/** Horizontal connector that grows from the left (flow lines, dividers). */
export const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.55, ease: EASE } },
};

/** Bare hover lift — for cards that don't need a coloured glow. */
export const hoverLift: TargetAndTransition = {
  y: -6,
  transition: { duration: 0.25, ease: EASE },
};

/** Hover lift + accent-tinted elevation glow. Pass the card's accent hex.
    Produces a soft coloured shadow and a 1px accent ring — the shared hover
    lighting for all landing-page cards. */
export function cardHover(accent: string): TargetAndTransition {
  return {
    y: -6,
    boxShadow: `0 22px 48px -20px ${accent}66, 0 0 0 1px ${accent}2e`,
    transition: { duration: 0.25, ease: EASE },
  };
}
