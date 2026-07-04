"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import WaveBackground from "@/components/backgrounds/WaveBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import MiniChart from "@/components/ui/MiniChart";

const PROBEX_URL = process.env.NEXT_PUBLIC_PROBEX_URL ?? "#";

const LIVE_STATS = [
  { label: "Consensus",  value: "99.42%"  },
  { label: "Latency",    value: "< 90ms"  },
  { label: "Markets",    value: "840+"    },
];

/* Ambient engine-health readout — native Probex telemetry, not decorative */
const ENGINE_STATUS = [
  { label: "Consensus",      value: "99.42%" },
  { label: "Latency",        value: "< 90ms" },
  { label: "Active Markets", value: "840"    },
];

export default function Hero() {
  const { scrollY }     = useScroll();
  const waveY           = useTransform(scrollY, [0, 600], [0, 90]);
  const waveOpacity     = useTransform(scrollY, [0, 480], [1, 0]);
  const contentY        = useTransform(scrollY, [0, 400], [0, -36]);

  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(springY, [-1, 1], [2.5, -2.5]);
  const rotateY = useTransform(springX, [-1, 1], [-2.5, 2.5]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* ── WAVE BACKGROUND — untouched Three.js + SVG overlay ── */}
      <motion.div
        style={{ y: waveY, opacity: waveOpacity, zIndex: 0 }}
        className="absolute inset-0 pointer-events-none"
      >
        <WaveBackground />
      </motion.div>

      {/* ── DEPTH VEIL ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(6,11,24,0.82) 0%, rgba(6,11,24,0.48) 30%, rgba(6,11,24,0.28) 55%, rgba(6,11,24,0.62) 78%, rgba(6,11,24,0.92) 100%)",
        }}
      />

      {/* ── AMBIENT CENTRE GLOW ── */}
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute pointer-events-none z-[2]"
        style={{
          top: "26%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 750, height: 400,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.15) 0%, rgba(124,58,237,0.06) 55%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── CURSOR GLOW ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <CursorGlow />
      </div>

      {/* ── MINI CHART ── */}
      <div className="absolute inset-0 z-[4] pointer-events-none">
        <MiniChart />
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: contentY, rotateX, rotateY, transformPerspective: 1200 }}
        className="relative z-10 flex flex-col items-center gpu"
      >
        {/* STATUS PILL */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-7"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] tracking-[0.24em] uppercase font-medium"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "rgba(0,229,255,0.06)",
              border: "1px solid rgba(0,229,255,0.18)",
              color: "var(--cyan)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-data-blink" style={{ background: "var(--cyan)" }} />
            Probex Engine · Live
          </span>
        </motion.div>

        {/* HEADLINE + soft radial light for depth (peak ~15% opacity) */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 pointer-events-none"
            style={{
              width: 640,
              height: 340,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, rgba(23,59,171,0.10) 42%, transparent 72%)",
              filter: "blur(64px)",
              zIndex: 0,
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "var(--font-heading-stack)",
              fontWeight: 800,
              fontSize: "clamp(3.2rem, 10vw, 7.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.94,
            }}
          >
            <span className="text-gradient-white">QUBO</span>
            <br />
            <span className="text-gradient-probex">Probex</span>
          </motion.h1>
        </div>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-5 text-lg md:text-xl font-light"
          style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)", fontWeight: 300 }}
        >
          Real-time{" "}
          <span style={{ color: "var(--cyan-dim)", fontWeight: 500 }}>
            probabilistic consensus
          </span>{" "}
          for predictive markets
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-4 max-w-xl text-base md:text-lg leading-8"
          style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)", fontWeight: 450 }}
        >
          Institutional-grade infrastructure built for compliant predictive markets —
          cryptographic finality in under 90ms, embedded across 47 regulatory frameworks.
        </motion.p>

        {/* LIVE STATS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.54 }}
          className="mt-7 flex items-center gap-1"
        >
          {LIVE_STATS.map((s, i) => (
            <div key={i} className="flex items-center">
              <div
                className="px-4 py-2.5"
                style={{ textAlign: "center" }}
              >
                <p
                  className="text-base font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--cyan-dim)" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[9px] mt-0.5 tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
                >
                  {s.label}
                </p>
              </div>
              {i < LIVE_STATS.length - 1 && (
                <div className="w-px h-7" style={{ background: "rgba(148,163,184,0.1)" }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.66 }}
          className="mt-9 flex gap-3 flex-col sm:flex-row items-center"
        >
          {/* Primary */}
          <a href={PROBEX_URL} target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,229,255,0.32), 0 0 80px rgba(124,58,237,0.14)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm tracking-wide gpu"
            >
              Access Probex
              <ExternalLink size={13} />
            </motion.span>
          </a>

          {/* Secondary */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("pipeline")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glass inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm gpu"
          >
            Explore the engine
            <ArrowRight size={13} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── PROBEX ENGINE STATUS — ambient telemetry (lg+) ── */}
      <motion.aside
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        aria-label="Probex engine status"
        className="hidden lg:block absolute bottom-10 left-10 z-10 glass-panel rounded-lg px-4 py-3.5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full animate-data-blink" style={{ background: "#22c55e" }} />
          <span
            className="text-[8px] tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-secondary)" }}
          >
            Probex Engine
          </span>
          <span
            className="text-[8px] tracking-[0.24em] uppercase"
            style={{ fontFamily: "var(--font-mono-stack)", color: "#22c55e" }}
          >
            Live
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {ENGINE_STATUS.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-8">
              <span
                className="text-[9px] tracking-[0.16em] uppercase"
                style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}
              >
                {s.label}
              </span>
              <span
                className="text-[10px] font-semibold tabular-nums"
                style={{ fontFamily: "var(--font-mono-stack)", color: "var(--cyan-dim)" }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </motion.aside>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="text-[8px] tracking-[0.32em] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,229,255,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
