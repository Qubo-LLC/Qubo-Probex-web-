"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";

/* ─── INLINE SVG DIAGRAMS ───────────────────────────────────────────── */

/** Layer 1: Consensus Verification — node cluster with edges */
function DiagramConsensus() {
  const nodes = [
    { cx: 80,  cy: 36, r: 5 },
    { cx: 148, cy: 20, r: 4 },
    { cx: 200, cy: 48, r: 6 },
    { cx: 148, cy: 76, r: 4 },
    { cx: 80,  cy: 64, r: 4 },
    { cx: 30,  cy: 50, r: 3 },
  ];
  const edges = [
    [0,1],[0,4],[0,5],[1,2],[2,3],[3,4],[1,3],[0,2],
  ];
  return (
    <svg viewBox="0 0 230 96" className="w-full" style={{ height: 96 }}>
      <defs>
        <radialGradient id="cng" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#00e5ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.2" />
        </radialGradient>
        <filter id="cnglow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="rgba(0,229,255,0.22)"
          strokeWidth="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r={n.r}
          fill="url(#cng)"
          filter="url(#cnglow)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.07 + 0.3 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Quorum ring around centre node */}
      <motion.circle
        cx={nodes[2].cx} cy={nodes[2].cy} r={14}
        fill="none"
        stroke="rgba(0,229,255,0.18)"
        strokeWidth="0.8"
        strokeDasharray="4 3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      />
    </svg>
  );
}

/** Layer 2: Compliance Guardrails — layered shield / filter funnel */
function DiagramCompliance() {
  const bands = [0, 10, 20, 30];
  return (
    <svg viewBox="0 0 230 96" className="w-full" style={{ height: 96 }}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Shield body */}
      <motion.path
        d="M115 8 L165 28 L165 56 Q165 82 115 90 Q65 82 65 56 L65 28 Z"
        fill="none"
        stroke="rgba(124,58,237,0.35)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      {/* Stacked filter bands */}
      {bands.map((offset, i) => (
        <motion.path
          key={i}
          d={`M${80 + offset} ${38 + i * 11} L${150 - offset} ${38 + i * 11}`}
          stroke={`rgba(139,92,246,${0.45 - i * 0.09})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          style={{ originX: "50%" }}
          transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Tick mark */}
      <motion.path
        d="M105 62 L112 70 L128 52"
        fill="none"
        stroke="rgba(139,92,246,0.8)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      />
      {/* Jurisdiction dots */}
      {[40, 70, 100, 130, 160, 190].map((x, i) => (
        <motion.circle
          key={i}
          cx={x} cy={88} r={2.5}
          fill={i < 4 ? "rgba(139,92,246,0.6)" : "rgba(148,163,184,0.15)"}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8 + i * 0.07 }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  );
}

/** Layer 3: Liquidity Engine — order book bars + flow lines */
function DiagramLiquidity() {
  const bars = [
    { x: 22, h: 28, fill: "rgba(0,229,255,0.6)" },
    { x: 38, h: 42, fill: "rgba(0,229,255,0.75)" },
    { x: 54, h: 34, fill: "rgba(0,229,255,0.55)" },
    { x: 70, h: 50, fill: "rgba(0,229,255,0.8)" },
    { x: 86, h: 30, fill: "rgba(0,229,255,0.5)" },
  ];
  const asks = [
    { x: 116, h: 26, fill: "rgba(124,58,237,0.6)" },
    { x: 132, h: 44, fill: "rgba(124,58,237,0.75)" },
    { x: 148, h: 32, fill: "rgba(124,58,237,0.55)" },
    { x: 164, h: 48, fill: "rgba(124,58,237,0.7)" },
    { x: 180, h: 22, fill: "rgba(124,58,237,0.45)" },
  ];
  const baseY = 76;
  return (
    <svg viewBox="0 0 230 96" className="w-full" style={{ height: 96 }}>
      {/* Mid spread line */}
      <line x1="100" y1="20" x2="100" y2="76" stroke="rgba(148,163,184,0.15)" strokeWidth="0.8" strokeDasharray="3 3" />
      {/* Bids */}
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x} y={baseY - b.h} width={10} height={b.h}
          fill={b.fill} rx="1"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          style={{ originY: "bottom", originX: `${b.x + 5}px` }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Asks */}
      {asks.map((a, i) => (
        <motion.rect
          key={i}
          x={a.x} y={baseY - a.h} width={10} height={a.h}
          fill={a.fill} rx="1"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          style={{ originY: "bottom" }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Matched flow arc */}
      <motion.path
        d="M 100 50 Q 115 32, 130 50"
        fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      />
      {/* Spread label */}
      <text x="96" y="90" textAnchor="middle"
        style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 7, fill: "rgba(148,163,184,0.4)" }}>
        SPREAD
      </text>
    </svg>
  );
}

/* ─── LAYER CONFIG ──────────────────────────────────────────────────── */
const LAYERS = [
  {
    index: "L1",
    tag: "CONSENSUS VERIFICATION",
    title: "Distributed Truth Resolution",
    desc: "Multi-node quorum validation with cryptographic finality. Probex resolves contested event states by aggregating validator votes against deviation bounds, rejecting outliers, and committing only when a configurable quorum threshold is met.",
    diagram: DiagramConsensus,
    stats: [
      { label: "Quorum threshold", value: "67%"   },
      { label: "Validator nodes",  value: "128"   },
      { label: "Finality",         value: "< 40ms" },
    ],
    accent: "#00e5ff",
    glowColor: "rgba(0,229,255,0.1)",
  },
  {
    index: "L2",
    tag: "COMPLIANCE GUARDRAILS",
    title: "In-Band Regulatory Layer",
    desc: "Jurisdiction rules, position caps, mandatory reporting, and KYC/AML hooks are evaluated inline — never as a post-process. Probex supports 47 regulatory frameworks with live rule updates and full immutable audit trail per state transition.",
    diagram: DiagramCompliance,
    stats: [
      { label: "Frameworks",    value: "47"    },
      { label: "Gate latency",  value: "< 6ms" },
      { label: "Audit coverage",value: "100%"  },
    ],
    accent: "#8b5cf6",
    glowColor: "rgba(124,58,237,0.12)",
  },
  {
    index: "L3",
    tag: "LIQUIDITY ENGINE",
    title: "Predictive Market Depth",
    desc: "Real-time synthetic order book construction from aggregated position flows, automated market-maker liquidity, and institutional participation tiers. Spread optimisation and depth balancing run continuously to minimise slippage on large position changes.",
    diagram: DiagramLiquidity,
    stats: [
      { label: "Book depth",     value: "L5"    },
      { label: "AMM refresh",    value: "200ms" },
      { label: "Slippage (avg)", value: "0.04%" },
    ],
    accent: "#00e5ff",
    glowColor: "rgba(0,229,255,0.08)",
  },
];

/* ─── SPOTLIGHT CARD ─────────────────────────────────────────────── */
function LayerCard({ layer, i }: { layer: typeof LAYERS[0]; i: number }) {
  const Diagram = layer.diagram;
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={i * 0.1}>
      <div
        ref={ref}
        className="relative rounded-xl overflow-hidden gpu transition-colors duration-250 h-full"
        style={{
          background: "rgba(11,16,32,0.72)",
          border: `1px solid rgba(148,163,184,0.07)`,
        }}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); (ref.current as HTMLElement).style.borderColor = "rgba(148,163,184,0.07)"; }}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = `${layer.accent}28`)}
        onMouseOut={(e)  => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.07)")}
      >
        {/* Spotlight radial */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, ${layer.glowColor}, transparent 65%)`,
          }}
        />

        <div className="relative z-10 p-6 flex flex-col h-full">
          {/* Index + tag */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: `${layer.accent}14`,
                border: `1px solid ${layer.accent}30`,
                color: layer.accent,
              }}
            >
              {layer.index}
            </span>
            <span
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
            >
              {layer.tag}
            </span>
          </div>

          {/* SVG diagram */}
          <div
            className="rounded-lg mb-5 overflow-hidden px-3 py-2"
            style={{
              background: "rgba(6,11,24,0.6)",
              border: "1px solid rgba(148,163,184,0.05)",
              minHeight: 96,
            }}
          >
            <Diagram />
          </div>

          {/* Title */}
          <h3
            className="text-sm font-bold mb-2 leading-snug"
            style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-primary)", letterSpacing: "-0.01em" }}
          >
            {layer.title}
          </h3>

          {/* Description */}
          <p
            className="text-xs leading-relaxed mb-5 flex-1"
            style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)", fontWeight: 400 }}
          >
            {layer.desc}
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-2 pt-4"
            style={{ borderTop: "1px solid rgba(148,163,184,0.05)" }}
          >
            {layer.stats.map((s, j) => (
              <div key={j}>
                <p
                  className="text-[8px] tracking-[0.16em] uppercase mb-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: layer.accent }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── COMPONENT ─────────────────────────────────────────────────────── */
export default function Architecture() {
  return (
    <section id="architecture" className="py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <p className="label-tag mb-4">[ PROBEX ARCHITECTURE ]</p>
              <h2
                className="text-gradient-white"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Three Operational<br />Layers. One Engine.
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
            >
              Probex separates concerns into three independently verifiable layers —
              consensus, compliance, and liquidity — each with its own failure domain,
              latency budget, and monitoring surface. They compose to produce a single,
              auditable predictive market infrastructure.
            </p>
          </div>
        </Reveal>

        {/* ── 3-LAYER GRID ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {LAYERS.map((layer, i) => (
            <LayerCard key={i} layer={layer} i={i} />
          ))}
        </div>

        {/* ── SYSTEM DIAGRAM CONNECTOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-between px-6"
        >
          {LAYERS.map((layer, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div
                className="flex-1 h-px"
                style={{
                  background: i === 0
                    ? `linear-gradient(to right, transparent, ${layer.accent}40)`
                    : i === 1
                    ? `linear-gradient(to right, ${LAYERS[0].accent}40, ${layer.accent}40)`
                    : `linear-gradient(to right, ${layer.accent}40, transparent)`,
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full mx-2 shrink-0"
                style={{ background: layer.accent, boxShadow: `0 0 6px ${layer.accent}80` }}
              />
              {i === LAYERS.length - 1 && <div className="flex-1" />}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
