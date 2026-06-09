"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/ui/Reveal";

/* ─── TYPES ──────────────────────────────────────────────────────────── */
interface MarketRow { id: string; event: string; yes: number; no: number; vol: string; trend: "up" | "down" | "flat"; }
interface LogLine   { ts: string; msg: string; level: "info" | "warn" | "ok"; }

/* ─── STATIC SEED DATA ───────────────────────────────────────────────── */
const MARKETS: MarketRow[] = [
  { id: "PRX-001", event: "Fed rate cut before Q3",         yes: 67.4, no: 32.6, vol: "$4.2M",  trend: "up"   },
  { id: "PRX-002", event: "BTC > $120k end of month",       yes: 44.1, no: 55.9, vol: "$8.7M",  trend: "down" },
  { id: "PRX-003", event: "ECB emergency session Jun",      yes: 22.8, no: 77.2, vol: "$1.1M",  trend: "flat" },
  { id: "PRX-004", event: "US CPI below 2.8% for May",      yes: 58.3, no: 41.7, vol: "$3.5M",  trend: "up"   },
  { id: "PRX-005", event: "NVDA earnings beat consensus",   yes: 72.9, no: 27.1, vol: "$6.1M",  trend: "up"   },
  { id: "PRX-006", event: "OPEC+ output cut extended",      yes: 38.5, no: 61.5, vol: "$2.8M",  trend: "down" },
];

const SEED_LOGS: LogLine[] = [
  { ts: "08:42:11.004", msg: "CONSENSUS_COMMIT  PRX-004  p=0.583  Δ=+0.021  validators=87/128",  level: "ok"   },
  { ts: "08:42:10.887", msg: "LIQUIDITY_REBAL   PRX-001  spread=0.038%  depth=L5",                level: "info" },
  { ts: "08:42:10.551", msg: "COMPLIANCE_PASS   PRX-005  jurisdiction=US  flag=none",             level: "ok"   },
  { ts: "08:42:09.993", msg: "SIGNAL_INGEST     sources=840  latency=11ms  checksum=✓",           level: "info" },
  { ts: "08:42:09.210", msg: "OUTLIER_REJECT    PRX-002  validator=0x3f7  deviation=σ3.8",        level: "warn" },
  { ts: "08:42:08.774", msg: "KALMAN_UPDATE     state_dim=48  residual=0.024  cov=stable",        level: "info" },
];

/* ─── SPARKLINE ──────────────────────────────────────────────────────── */
function Sparkline({ values, color }: { values: number[]; color: string }) {
  const w = 60; const h = 24;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) =>
    `${(i / (values.length - 1)) * w},${h - ((v - min) / range) * h}`
  ).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={0.8}
      />
      <circle
        cx={(values.length - 1) / (values.length - 1) * w}
        cy={h - ((values[values.length - 1] - min) / range) * h}
        r="2" fill={color}
      />
    </svg>
  );
}

/* ─── ANIMATED PROBABILITY BAR ───────────────────────────────────────── */
function ProbBar({ yes, trend }: { yes: number; trend: MarketRow["trend"] }) {
  const color = trend === "up" ? "#22d3ee" : trend === "down" ? "#8b5cf6" : "#94a3b8";
  return (
    <div className="flex items-center gap-2 w-full">
      <div
        className="relative flex-1 rounded-full overflow-hidden"
        style={{ height: 4, background: "rgba(148,163,184,0.08)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${yes}%`,
            background: `linear-gradient(to right, ${color}, ${color}99)`,
            transition: "width 0.6s ease",
          }}
        />
      </div>
      <span
        className="text-[10px] tabular-nums shrink-0"
        style={{ fontFamily: "'JetBrains Mono', monospace", color }}
      >
        {yes.toFixed(1)}%
      </span>
    </div>
  );
}

/* ─── MINI LINE CHART ────────────────────────────────────────────────── */
function VolumeChart() {
  const data = [2.1, 3.4, 2.8, 4.2, 3.9, 5.1, 4.7, 6.3, 5.8, 7.1, 6.4, 8.2];
  const w = 280; const h = 72;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const pts = data.map((v, i) =>
    `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * (h - 8)}`
  ).join(" ");
  const areaBase = `${0},${h} ${pts} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: h }}>
      <defs>
        <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00e5ff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0"    />
        </linearGradient>
      </defs>
      <polygon points={areaBase} fill="url(#volGrad)" />
      <polyline
        points={pts}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── LOG LINE ───────────────────────────────────────────────────────── */
function LogEntry({ line }: { line: LogLine }) {
  const col = { ok: "#22c55e", warn: "#f59e0b", info: "#3d5570" }[line.level];
  const bracket = { ok: "OK", warn: "WN", info: "--" }[line.level];
  return (
    <div className="flex items-baseline gap-3 py-0.5">
      <span
        className="shrink-0 text-[9px] tabular-nums"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3d5570" }}
      >
        {line.ts}
      </span>
      <span
        className="shrink-0 text-[9px] font-semibold px-1 rounded"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: col,
          background: `${col}14`,
          border: `1px solid ${col}30`,
        }}
      >
        {bracket}
      </span>
      <span
        className="text-[10px] leading-relaxed break-all"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#4a6680" }}
      >
        {line.msg}
      </span>
    </div>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────────────────── */
export default function DashboardPreview() {
  const [time, setTime] = useState("08:42:11");
  const [logs, setLogs] = useState<LogLine[]>(SEED_LOGS);
  const [markets, setMarkets] = useState<MarketRow[]>(MARKETS);
  const tickRef = useRef(0);

  /* Live clock */
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTime(now.toTimeString().slice(0, 8));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  /* Drift market probabilities subtly every 2s */
  useEffect(() => {
    const id = setInterval(() => {
      setMarkets((prev) =>
        prev.map((m) => {
          const drift = (Math.random() - 0.5) * 0.6;
          const newYes = Math.min(99, Math.max(1, m.yes + drift));
          const trend: MarketRow["trend"] = drift > 0.1 ? "up" : drift < -0.1 ? "down" : "flat";
          return { ...m, yes: newYes, no: 100 - newYes, trend };
        })
      );
    }, 2200);
    return () => clearInterval(id);
  }, []);

  /* Append a log line every 3.5s */
  useEffect(() => {
    const msgs: LogLine[] = [
      { ts: "", msg: "BRIER_EVAL        window=2000  BS=0.048  target=<0.060  ✓",        level: "ok"   },
      { ts: "", msg: "SHAPLEY_DISTRIB   epoch=8274  recipients=312  lag=0.3ms",           level: "info" },
      { ts: "", msg: "KALMAN_UPDATE     state_dim=48  residual=0.019  cov=stable",        level: "info" },
      { ts: "", msg: "COMPLIANCE_PASS   PRX-001  jurisdiction=EU  AML=clear",             level: "ok"   },
      { ts: "", msg: "STALE_EXPIRE      PRX-003  source=oracle_7  TTL=exceeded",          level: "warn" },
    ];
    let idx = 0;
    const id = setInterval(() => {
      const now = new Date().toTimeString().slice(0, 12).replace(" ", ".").slice(0, 12);
      const line = { ...msgs[idx % msgs.length], ts: now };
      idx++;
      setLogs((prev) => [line, ...prev].slice(0, 8));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  /* Sparkline seeds per market */
  const sparkSeeds = useRef(
    MARKETS.map(() => Array.from({ length: 10 }, () => 40 + Math.random() * 40))
  );

  return (
    <section className="py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <p className="label-tag mb-4">[ PROBEX PLATFORM ]</p>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
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
              High-Density Operator<br />Interface
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
            >
              The Probex operator terminal surfaces live market states, consensus logs,
              and compliance status in a single unified view — updating in real time
              with zero polling delay.
            </p>
          </div>
        </Reveal>

        {/* ── TERMINAL SHELL ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl overflow-hidden gpu"
          style={{
            background: "var(--bg-terminal)",
            border: "1px solid rgba(148,163,184,0.08)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,229,255,0.04)",
          }}
        >
          {/* ── CHROME BAR ── */}
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{ borderBottom: "1px solid rgba(148,163,184,0.06)", background: "rgba(255,255,255,0.018)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)"  }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,68,0.7)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(39,201,63,0.7)"  }} />
              <span
                className="ml-3 text-[10px] tracking-[0.18em]"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3d5570" }}
              >
                probex.platform / operator
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-data-blink" style={{ background: "#22c55e" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#22c55e", letterSpacing: "0.18em" }}>
                  LIVE
                </span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#3d5570", letterSpacing: "0.12em" }}>
                {time}
              </span>
            </div>
          </div>

          {/* ── BODY GRID ── */}
          <div className="grid grid-cols-12 gap-0" style={{ minHeight: 520 }}>

            {/* ── LEFT SIDEBAR — system metrics ── */}
            <div
              className="col-span-2 py-4 px-3 hidden lg:flex flex-col gap-3"
              style={{ borderRight: "1px solid rgba(148,163,184,0.05)" }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase", marginBottom: 4 }}>
                System
              </p>
              {[
                { label: "Consensus",  value: "ACTIVE", color: "#22c55e" },
                { label: "Liquidity",  value: "ACTIVE", color: "#22c55e" },
                { label: "Compliance", value: "ACTIVE", color: "#22c55e" },
                { label: "Kalman",     value: "SYNC",   color: "#22d3ee" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "#3d5570", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: s.color, fontWeight: 600 }}>
                    {s.value}
                  </span>
                </div>
              ))}

              <div className="mt-auto">
                {[
                  { label: "Events/s", value: "62.4K" },
                  { label: "P99",      value: "38ms"  },
                  { label: "Nodes",    value: "128"   },
                ].map((m, i) => (
                  <div key={i} className="mb-2">
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", color: "#3d5570", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {m.label}
                    </p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", fontWeight: 600 }}>
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MAIN — market table ── */}
            <div
              className="col-span-12 lg:col-span-7 flex flex-col"
              style={{ borderRight: "1px solid rgba(148,163,184,0.05)" }}
            >
              {/* Table header */}
              <div
                className="grid gap-2 px-4 py-2.5"
                style={{
                  gridTemplateColumns: "5rem 1fr 7rem 3.5rem",
                  borderBottom: "1px solid rgba(148,163,184,0.05)",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                {["ID", "MARKET EVENT", "PROBABILITY", "VOL"].map((h) => (
                  <span
                    key={h}
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase" }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {markets.map((m, i) => (
                <motion.div
                  key={m.id}
                  className="grid gap-2 px-4 py-2.5 transition-colors duration-200"
                  style={{
                    gridTemplateColumns: "5rem 1fr 7rem 3.5rem",
                    borderBottom: "1px solid rgba(148,163,184,0.03)",
                  }}
                  whileHover={{ background: "rgba(0,229,255,0.025)" }}
                >
                  <span
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#3d5570", alignSelf: "center" }}
                  >
                    {m.id}
                  </span>
                  <span
                    className="self-center truncate"
                    style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 400 }}
                  >
                    {m.event}
                  </span>
                  <div className="self-center">
                    <ProbBar yes={m.yes} trend={m.trend} />
                  </div>
                  <span
                    className="self-center text-right"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#4a6680" }}
                  >
                    {m.vol}
                  </span>
                </motion.div>
              ))}

              {/* Volume chart */}
              <div
                className="px-4 pt-4 pb-2 mt-auto"
                style={{ borderTop: "1px solid rgba(148,163,184,0.04)" }}
              >
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.2em", color: "#3d5570", textTransform: "uppercase", marginBottom: 8 }}>
                  Aggregate volume 12h
                </p>
                <VolumeChart />
              </div>
            </div>

            {/* ── RIGHT PANEL — log stream ── */}
            <div className="col-span-12 lg:col-span-3 flex flex-col">
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.01)" }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase" }}>
                  Consensus Log
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full animate-data-blink" style={{ background: "#22c55e" }} />
                </div>
              </div>
              <div className="flex-1 px-3 py-3 overflow-hidden space-y-0.5">
                {logs.map((line, i) => (
                  <motion.div
                    key={`${line.ts}-${i}`}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LogEntry line={line} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STATUS BAR ── */}
          <div
            className="flex items-center justify-between px-5 py-2"
            style={{ borderTop: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.01)" }}
          >
            <div className="flex items-center gap-5 flex-wrap">
              {[
                { label: "Consensus precision", value: "99.42%" },
                { label: "End-to-end latency",  value: "< 90ms" },
                { label: "Active markets",      value: "840"    },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#3d5570", textTransform: "uppercase" }}>
                    {s.label}:
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: "#22d3ee", fontWeight: 600 }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", color: "#2a3f55", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              PROBEX::v3.2.1
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
