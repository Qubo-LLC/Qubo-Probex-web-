"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/ui/Reveal";
import { sectionReveal, defaultViewport } from "@/components/ui/motion";

/* ─── REAL PRODUCT MODEL ──────────────────────────────────────────────────
   The Probex platform is a BTC prediction-market trading-operations console
   (see DASHBOARD-FEATURE-SPEC.md): summary pulse, open positions with live
   PnL, survival/risk state, and component health. This preview recreates that
   presentation with representative data using the shared glass design system.
--------------------------------------------------------------------------- */

interface Position {
  market: string;
  dir: "YES" | "NO";
  size: number;
  edge: number;      // %
  entry: number;     // probability 0–1
  current: number;   // probability 0–1
  pnl: number;       // $
}

const SEED_POSITIONS: Position[] = [
  { market: "BTC above $95k at Fri close",     dir: "YES", size: 4200, edge: 6.2, entry: 0.58, current: 0.63, pnl: 214.6 },
  { market: "BTC below $88k this week",        dir: "NO",  size: 2600, edge: 4.1, entry: 0.71, current: 0.74, pnl: 78.2  },
  { market: "24h realised vol above 4%",       dir: "YES", size: 3100, edge: 5.4, entry: 0.44, current: 0.41, pnl: -63.4 },
  { market: "Funding rate flips negative",     dir: "YES", size: 1800, edge: 3.3, entry: 0.37, current: 0.39, pnl: 41.7  },
  { market: "ETH/BTC below 0.052 at EOD",      dir: "NO",  size: 2200, edge: 4.8, entry: 0.66, current: 0.69, pnl: 66.9  },
];

const HEALTH = [
  { name: "Price Feed", healthy: true,  detail: "42ms" },
  { name: "Main Loop",  healthy: true,  detail: "tick 500ms" },
  { name: "API Access", healthy: true,  detail: "reachable" },
  { name: "Memory",     healthy: true,  detail: "61%" },
];

/* ─── FORMATTERS ─────────────────────────────────────────────────────────── */
const fmtUsd = (n: number) =>
  `${n < 0 ? "-" : ""}$${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
const fmtPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

/* ─── PROBABILITY BAR ────────────────────────────────────────────────────── */
function ProbBar({ p, color }: { p: number; color: string }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex-1 rounded-full overflow-hidden" style={{ height: 4, background: "rgba(148,163,184,0.08)" }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${p * 100}%`, background: `linear-gradient(to right, ${color}, ${color}99)`, transition: "width 0.6s ease" }}
        />
      </div>
      <span className="text-[10px] tabular-nums shrink-0" style={{ fontFamily: "var(--font-mono-stack)", color }}>
        {(p * 100).toFixed(0)}%
      </span>
    </div>
  );
}

/* ─── SUMMARY METRIC CARD ────────────────────────────────────────────────── */
function MetricCard({ label, value, sub, color, flash }: { label: string; value: string; sub?: string; color?: string; flash?: boolean }) {
  return (
    <div className="glass-card px-3.5 py-3" style={{ borderRadius: "0.6rem" }}>
      <p className="text-[8px] tracking-[0.18em] uppercase mb-1.5" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>
        {label}
      </p>
      <motion.p
        key={flash ? value : undefined}
        initial={flash ? { color: "#eafaff" } : false}
        animate={{ color: color ?? "var(--text-primary)" }}
        transition={{ duration: 0.7 }}
        className="text-[15px] font-semibold tabular-nums leading-none"
        style={{ fontFamily: "var(--font-mono-stack)" }}
      >
        {value}
      </motion.p>
      {sub && (
        <p className="text-[8px] mt-1 tracking-wide" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
export default function DashboardPreview() {
  const shellRef = useRef<HTMLDivElement>(null);
  const inView = useInView(shellRef, { margin: "-10% 0px -10% 0px" });
  const [docVisible, setDocVisible] = useState(true);
  const active = inView && docVisible;

  const [time, setTime] = useState("00:00:00");
  const [btc, setBtc] = useState(93482);
  const [btcUp, setBtcUp] = useState(true);
  const btcRef = useRef(93482);
  const [latency, setLatency] = useState(42);
  const [edges, setEdges] = useState(1284);
  const [positions, setPositions] = useState<Position[]>(SEED_POSITIONS);

  useEffect(() => {
    const onVis = () => setDocVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Live loops — only run while the panel is on-screen and the tab is visible
  useEffect(() => {
    if (!active) return;

    const clock = setInterval(() => setTime(new Date().toTimeString().slice(0, 8)), 1000);

    const feed = setInterval(() => {
      const b = btcRef.current;
      const next = Math.round(b + (Math.random() - 0.5) * 60);
      btcRef.current = next;
      setBtcUp(next >= b);
      setBtc(next);
      setLatency(34 + Math.round(Math.random() * 22));
    }, 1800);

    const book = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => {
          const drift = (Math.random() - 0.5) * 0.014;
          const current = Math.min(0.97, Math.max(0.03, p.current + drift));
          const dirMul = p.dir === "YES" ? 1 : -1;
          const pnl = p.pnl + dirMul * drift * p.size * 100;
          return { ...p, current, pnl };
        })
      );
      setEdges((e) => e + (Math.random() > 0.5 ? 1 : 0));
    }, 2200);

    return () => { clearInterval(clock); clearInterval(feed); clearInterval(book); };
  }, [active]);

  const totalPnl = positions.reduce((s, p) => s + p.pnl, 0);
  const posColor = "#22c55e";
  const negColor = "#f87171";

  return (
    <section className="py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <p className="label-tag mb-4">[ PROBEX PLATFORM ]</p>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <h2
              className="text-gradient-white"
              style={{ fontFamily: "var(--font-heading-stack)", fontWeight: 800, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
            >
              Live Trading<br />Operations Console
            </h2>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-heading-stack)", color: "var(--text-secondary)" }}>
              The Probex operator console tracks BTC prediction-market positions,
              live edge and PnL, feed health, and adaptive risk state — the real
              trading surface, streamed in a single dense view.
            </p>
          </div>
        </Reveal>

        {/* ── TERMINAL SHELL ── */}
        <motion.div
          ref={shellRef}
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="glass-card panel-shadow overflow-hidden gpu"
          style={{ borderRadius: "1rem" }}
        >
          {/* CHROME BAR */}
          <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: "1px solid rgba(148,163,184,0.06)", background: "rgba(255,255,255,0.018)" }}>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,68,0.7)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(39,201,63,0.7)" }} />
              <span className="ml-3 text-[10px] tracking-[0.16em]" style={{ fontFamily: "var(--font-mono-stack)", color: "#3d5570" }}>
                probex // trading-ops
              </span>
              <span className="ml-1 text-[8px] px-1.5 py-0.5 rounded tracking-[0.16em] uppercase" style={{ fontFamily: "var(--font-mono-stack)", color: "#f59e0b", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)" }}>
                Paper
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-data-blink" style={{ background: "#22c55e" }} />
                <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.6rem", color: "#22c55e", letterSpacing: "0.18em" }}>FEED LIVE</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.6rem", color: "#3d5570", letterSpacing: "0.12em" }}>{time}</span>
            </div>
          </div>

          {/* SUMMARY METRICS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-4" style={{ borderBottom: "1px solid rgba(148,163,184,0.05)" }}>
            <MetricCard label="BTC Price" value={fmtPrice(btc)} sub={btcUp ? "▲ live" : "▼ live"} color={btcUp ? posColor : negColor} flash />
            <MetricCard label="Feed Latency" value={`${latency}ms`} sub={latency < 60 ? "good" : "warning"} color={latency < 60 ? "#22d3ee" : "#f59e0b"} />
            <MetricCard label="Active Positions" value={`${positions.length}`} sub="tracked" />
            <MetricCard label="Edges Detected" value={edges.toLocaleString()} sub="rolling 24h" color="#22d3ee" />
            <MetricCard label="Orders Exec" value="318" sub="avg 84ms" />
            <MetricCard label="Total PnL" value={fmtUsd(totalPnl)} sub="unrealised" color={totalPnl >= 0 ? posColor : negColor} flash />
          </div>

          {/* BODY GRID */}
          <div className="grid grid-cols-12 gap-0" style={{ minHeight: 420 }}>

            {/* OPEN POSITIONS */}
            <div className="col-span-12 lg:col-span-8 flex flex-col" style={{ borderRight: "1px solid rgba(148,163,184,0.05)" }}>
              <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.01)" }}>
                <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase" }}>Open Positions</span>
                <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.16em", color: "#3d5570", textTransform: "uppercase" }}>read-only</span>
              </div>

              {/* table header */}
              <div className="grid gap-2 px-4 py-2" style={{ gridTemplateColumns: "1fr 3rem 4rem 6rem 5rem", borderBottom: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.008)" }}>
                {["Market", "Dir", "Edge", "Probability", "PnL"].map((h) => (
                  <span key={h} style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.52rem", letterSpacing: "0.2em", color: "#3d5570", textTransform: "uppercase" }}>{h}</span>
                ))}
              </div>

              {/* rows */}
              {positions.map((p) => {
                const dirColor = p.dir === "YES" ? "#22d3ee" : "#8b5cf6";
                return (
                  <motion.div
                    key={p.market}
                    className="grid gap-2 px-4 py-2.5"
                    style={{ gridTemplateColumns: "1fr 3rem 4rem 6rem 5rem", borderBottom: "1px solid rgba(148,163,184,0.03)" }}
                    whileHover={{ background: "rgba(0,229,255,0.025)" }}
                  >
                    <span className="self-center truncate" style={{ fontFamily: "var(--font-heading-stack)", fontSize: "0.72rem", color: "var(--text-secondary)" }}>{p.market}</span>
                    <span className="self-center text-[10px] font-semibold px-1.5 py-0.5 rounded text-center" style={{ fontFamily: "var(--font-mono-stack)", color: dirColor, background: `${dirColor}14`, border: `1px solid ${dirColor}30`, width: "fit-content" }}>{p.dir}</span>
                    <span className="self-center text-[11px] tabular-nums" style={{ fontFamily: "var(--font-mono-stack)", color: "#22d3ee" }}>{p.edge.toFixed(1)}%</span>
                    <div className="self-center"><ProbBar p={p.current} color={dirColor} /></div>
                    <span className="self-center text-right text-[11px] font-semibold tabular-nums" style={{ fontFamily: "var(--font-mono-stack)", color: p.pnl >= 0 ? posColor : negColor }}>{fmtUsd(p.pnl)}</span>
                  </motion.div>
                );
              })}

              <div className="px-4 py-3 mt-auto flex items-center justify-between" style={{ borderTop: "1px solid rgba(148,163,184,0.04)" }}>
                <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.16em", color: "#3d5570", textTransform: "uppercase" }}>Net unrealised</span>
                <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.75rem", fontWeight: 600, color: totalPnl >= 0 ? posColor : negColor }}>{fmtUsd(totalPnl)}</span>
              </div>
            </div>

            {/* RIGHT — SURVIVAL + HEALTH */}
            <div className="col-span-12 lg:col-span-4 flex flex-col">
              {/* survival */}
              <div className="p-4" style={{ borderBottom: "1px solid rgba(148,163,184,0.05)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase" }}>Survival State</span>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-mono-stack)", color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.28)" }}>Healthy</span>
                </div>
                <p className="text-[8px] tracking-[0.16em] uppercase mb-1" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>Capital preserved</p>
                <p className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-primary)" }}>96.8%</p>
                <div className="w-full rounded-full overflow-hidden mb-4" style={{ height: 4, background: "rgba(148,163,184,0.1)" }}>
                  <motion.div className="h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: "96.8%" }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} style={{ background: "linear-gradient(to right, #22c55e, #22d3ee)" }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { l: "Kelly modifier", v: "0.62×" },
                    { l: "Min edge", v: "3.0%" },
                    { l: "Daily target", v: "+1.4%" },
                    { l: "Runway", v: "∞" },
                  ].map((m) => (
                    <div key={m.l}>
                      <p className="text-[8px] tracking-[0.14em] uppercase mb-0.5" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>{m.l}</p>
                      <p className="text-xs font-semibold" style={{ fontFamily: "var(--font-mono-stack)", color: "#22d3ee" }}>{m.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* health */}
              <div className="p-4 flex-1">
                <span className="block mb-3" style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.22em", color: "#3d5570", textTransform: "uppercase" }}>Component Health</span>
                <div className="flex flex-col gap-2.5">
                  {HEALTH.map((h) => (
                    <div key={h.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: h.healthy ? "#22c55e" : "#f59e0b", boxShadow: `0 0 6px ${h.healthy ? "#22c55e" : "#f59e0b"}` }} />
                        <span className="text-[11px]" style={{ fontFamily: "var(--font-heading-stack)", color: "var(--text-secondary)" }}>{h.name}</span>
                      </div>
                      <span className="text-[10px] tabular-nums" style={{ fontFamily: "var(--font-mono-stack)", color: "#4a6680" }}>{h.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STATUS BAR */}
          <div className="flex items-center justify-between px-5 py-2" style={{ borderTop: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.01)" }}>
            <div className="flex items-center gap-5 flex-wrap">
              {[
                { label: "Warnings", value: "0" },
                { label: "Errors", value: "0" },
                { label: "Restarts", value: "0" },
                { label: "Uptime", value: "18d 04h" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#3d5570", textTransform: "uppercase" }}>{s.label}:</span>
                  <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.62rem", color: "#22d3ee", fontWeight: 600 }}>{s.value}</span>
                </div>
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: "0.5rem", color: "#2a3f55", letterSpacing: "0.18em", textTransform: "uppercase" }}>PROBEX::OPS::v3.2.1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
