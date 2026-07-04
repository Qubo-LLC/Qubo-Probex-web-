"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import Reveal from "@/components/ui/Reveal";
import { staggerContainer, cardReveal, lineGrow, defaultViewport } from "@/components/ui/motion";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const STAGES = [
  {
    index: "01",
    tag: "INGESTION",
    title: "Raw Predictive Feed",
    desc: "Multi-source event streams from prediction markets, liquidity pools, and sentiment oracles are ingested in parallel. Each packet is timestamped at receipt, validated against schema checksums, and queued for normalisation — no data touches consensus without a clean signature.",
    metrics: [
      { label: "Ingestion Latency",  value: "< 14ms"  },
      { label: "Sources Active",    value: "840+"    },
      { label: "Packet Integrity",  value: "99.97%"  },
    ],
    accent: "#00e5ff",
    side: "left",
  },
  {
    index: "02",
    tag: "NORMALISATION",
    title: "Schema & Weight Calibration",
    desc: "Ingested streams are resolved against Probex's unified schema layer. Conflicting signals are probability-weighted using a rolling Bayesian calibration model. Stale events are expired on a per-source TTL; recency decay functions ensure the consensus state always reflects live market reality.",
    metrics: [
      { label: "Normalisation",     value: "< 8ms"   },
      { label: "Calibration Cycle", value: "50ms"    },
      { label: "Decay Precision",   value: "±0.03%"  },
    ],
    accent: "#8b5cf6",
    side: "right",
  },
  {
    index: "03",
    tag: "CONSENSUS ENGINE",
    title: "Probex Consensus Layer",
    desc: "Normalised signals enter the core Probex consensus engine — a distributed probabilistic voter that resolves multi-party event states with cryptographic finality. Quorum thresholds, deviation bands, and outlier rejection rules are enforced deterministically before any state update is committed.",
    metrics: [
      { label: "Consensus Precision", value: "99.42%" },
      { label: "Quorum Latency",      value: "< 22ms" },
      { label: "Finality",            value: "< 40ms" },
    ],
    accent: "#00e5ff",
    side: "left",
  },
  {
    index: "04",
    tag: "COMPLIANCE GATE",
    title: "Regulatory Output & Audit",
    desc: "Every committed state transition is routed through Probex's compliance guardrails before reaching end-consumer APIs. Jurisdiction rules, exposure caps, and mandatory reporting triggers are evaluated in-band. All outputs are written to an immutable audit log with full provenance tracing.",
    metrics: [
      { label: "Gate Latency",   value: "< 6ms"  },
      { label: "Audit Coverage", value: "100%"   },
      { label: "Jurisdictions",  value: "47"     },
    ],
    accent: "#8b5cf6",
    side: "right",
  },
];

const LIVE_METRICS = [
  { label: "End-to-end",     value: "< 90ms" },
  { label: "Consensus P99",  value: "38ms"   },
  { label: "Events/sec",     value: "62,400" },
  { label: "Uptime (30d)",   value: "99.97%" },
];

/* ─── FLOW OVERVIEW STRIP ────────────────────────────────────────────────
   Lightweight institutional summary of the four stages, shown above the
   detailed cards so a scanning reader grasps the full flow at a glance.
   Reuses the STAGES data directly — no duplicated content. */
function FlowOverview() {
  return (
    <motion.div
      role="list"
      aria-label="Processing flow overview"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      className="mb-14 flex flex-col md:flex-row md:items-center gap-3 md:gap-0"
    >
      {STAGES.map((s, i) => (
        <Fragment key={s.index}>
          <motion.div
            role="listitem"
            variants={cardReveal}
            className="glass-panel rounded-lg px-3.5 py-2.5 flex items-center gap-2.5 shrink-0"
          >
            <span
              className="grid place-items-center w-6 h-6 rounded-md text-[10px] font-semibold shrink-0"
              style={{
                fontFamily: "var(--font-mono-stack)",
                color: s.accent,
                background: `${s.accent}14`,
                border: `1px solid ${s.accent}33`,
              }}
            >
              {s.index}
            </span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-mono-stack)", color: s.accent }}
            >
              {s.tag}
            </span>
          </motion.div>

          {i < STAGES.length - 1 && (
            <motion.div
              aria-hidden
              variants={lineGrow}
              className="hidden md:block flex-1 h-px mx-2 origin-left"
              style={{ background: `linear-gradient(to right, ${s.accent}66, ${STAGES[i + 1].accent}66)` }}
            />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
}

/* ─── STAGE CARD ───────────────────────────────────────────────────── */
function StageCard({ stage, i }: { stage: typeof STAGES[0]; i: number }) {
  const isRight = stage.side === "right";

  return (
    <Reveal delay={i * 0.09} direction={isRight ? "right" : "left"}>
      <div className={`flex gap-0 md:gap-10 items-stretch ${isRight ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}>

        {/* ── INDEX + CONNECTOR ── */}
        <div className="hidden md:flex flex-col items-center shrink-0 w-16">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 gpu"
            style={{
              border: `1px solid ${stage.accent}44`,
              background: `${stage.accent}0d`,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                fontWeight: 600,
                color: stage.accent,
                letterSpacing: "0.1em",
              }}
            >
              {stage.index}
            </span>
          </div>
          {i < STAGES.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 w-px origin-top mt-2"
              style={{ background: `linear-gradient(to bottom, ${stage.accent}44, transparent)` }}
            />
          )}
        </div>

        {/* ── CARD ── */}
        <div
          className="flex-1 mb-8 md:mb-10 p-7 rounded-xl gpu transition-colors duration-250 group"
          style={{
            background: "rgba(11,16,32,0.7)",
            border: `1px solid rgba(148,163,184,0.07)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${stage.accent}33`;
            (e.currentTarget as HTMLElement).style.background = "rgba(13,20,42,0.85)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(148,163,184,0.07)";
            (e.currentTarget as HTMLElement).style.background = "rgba(11,16,32,0.7)";
          }}
        >
          {/* Mobile index */}
          <span
            className="md:hidden text-[10px] tracking-[0.22em] mb-3 block"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: stage.accent, opacity: 0.7 }}
          >
            {stage.index}
          </span>

          {/* Tag */}
          <span
            className="text-[10px] tracking-[0.22em] uppercase font-medium mb-3 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: stage.accent,
            }}
          >
            {stage.tag}
          </span>

          {/* Title */}
          <h3
            className="text-base font-semibold mb-3 leading-snug"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {stage.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "var(--text-secondary)",
              fontWeight: 400,
            }}
          >
            {stage.desc}
          </p>

          {/* Metrics row */}
          <div
            className="grid grid-cols-3 gap-3 pt-5"
            style={{ borderTop: "1px solid rgba(148,163,184,0.06)" }}
          >
            {stage.metrics.map((m, j) => (
              <div key={j}>
                <p
                  className="text-[9px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
                >
                  {m.label}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: stage.accent }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SPACER (mirror side) ── */}
        <div className="hidden md:block w-16 shrink-0" />
      </div>
    </Reveal>
  );
}

/* ─── COMPONENT ────────────────────────────────────────────────────── */
export default function Pipeline() {
  return (
    <section id="pipeline" className="relative py-28 scroll-mt-20 overflow-hidden">

      <div className="divider-cyan absolute top-0 inset-x-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* ── HEADER ── */}
        <Reveal>
          <p className="label-tag mb-4">[ DATA PIPELINE ]</p>
          <h2
            className="mb-5 text-gradient-white"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            From Raw Signal<br />to Consensus Truth
          </h2>
          <p
            className="max-w-lg text-sm leading-relaxed mb-16"
            style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
          >
            Probex's four-stage processing architecture transforms noisy, multi-origin
            predictive feeds into cryptographically finalised consensus states in under
            90 milliseconds end-to-end.
          </p>
        </Reveal>

        {/* ── FLOW OVERVIEW STRIP ── */}
        <FlowOverview />

        {/* ── STAGES ── */}
        <div>
          {STAGES.map((stage, i) => (
            <StageCard key={i} stage={stage} i={i} />
          ))}
        </div>

        {/* ── LIVE STATUS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 flex items-center justify-between px-5 py-3.5 rounded-xl"
          style={{
            background: "rgba(11,16,32,0.8)",
            border: "1px solid rgba(0,229,255,0.1)",
          }}
        >
          <div className="flex items-center gap-1.5 mr-4">
            <span
              className="w-1.5 h-1.5 rounded-full animate-data-blink"
              style={{ background: "#22c55e" }}
            />
            <span
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase" }}
            >
              Live
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            {LIVE_METRICS.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase" }}
                >
                  {m.label}:
                </span>
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 600, color: "var(--cyan-dim)" }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="divider-cyan absolute bottom-0 inset-x-0" />
    </section>
  );
}
