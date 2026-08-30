"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SuperCoreVisual from "@/components/ui/SuperCoreVisual";

/* ─── MATHEMATICAL FRAMEWORKS ────────────────────────────────────────── */
const FRAMEWORKS = [
  {
    id: "bayesian",
    index: "01",
    tag: "INFERENCE ENGINE",
    title: "Hierarchical Bayesian Inference",
    shortTitle: "Bayesian",
    accent: "#00e5ff",
    accentDim: "rgba(0,229,255,0.08)",
    formula: "P(H|E) = P(E|H) · P(H) / P(E)",
    formulaAnnotation: "Posterior · Likelihood × Prior / Evidence",
    desc: "Probex's core inference layer applies hierarchical Bayesian updating across all consensus inputs. Each new event updates a rolling prior distribution — signal confidence degrades gracefully under sparse data rather than collapsing to binary outcomes.",
    properties: [
      { label: "Update frequency",  value: "50ms rolling" },
      { label: "Prior distribution", value: "Beta(α,β)"   },
      { label: "Convergence",        value: "< 8 epochs"  },
    ],
  },
  {
    id: "kalman",
    index: "02",
    tag: "STATE TRACKING",
    title: "Extended Kalman Filter",
    shortTitle: "Kalman",
    accent: "#8b5cf6",
    accentDim: "rgba(139,92,246,0.08)",
    formula: "x̂ₖ = Fₖ x̂ₖ₋₁ + Kₖ(zₖ − HₖFₖx̂ₖ₋₁)",
    formulaAnnotation: "State · Prediction + Gain × Innovation",
    desc: "Non-linear market state variables are tracked via an Extended Kalman Filter — handling the non-Gaussian residuals common in prediction markets. The filter produces optimal state estimates even under high measurement noise, with covariance bounds surfaced to the compliance layer.",
    properties: [
      { label: "State vector dims", value: "48"        },
      { label: "Process noise",     value: "Q adaptive" },
      { label: "Noise tolerance",   value: "σ ≤ 0.08"  },
    ],
  },
  {
    id: "brier",
    index: "03",
    tag: "CALIBRATION",
    title: "Brier Score Calibration",
    shortTitle: "Brier",
    accent: "#00e5ff",
    accentDim: "rgba(0,229,255,0.08)",
    formula: "BS = (1/N) Σ (fₜ − oₜ)²",
    formulaAnnotation: "Mean Squared Error of Probability Forecasts",
    desc: "All Probex probability outputs are continuously evaluated against resolved outcomes using the Brier Score. Validators whose forecasts systematically underperform are downweighted in future consensus rounds. Calibration curves are published on-chain for independent verification.",
    properties: [
      { label: "Target BS",       value: "< 0.06"     },
      { label: "Rolling window",  value: "2,000 events" },
      { label: "Recalibration",   value: "Every epoch" },
    ],
  },
  {
    id: "shapley",
    index: "04",
    tag: "ATTRIBUTION",
    title: "Shapley Value Attribution",
    shortTitle: "Shapley",
    accent: "#8b5cf6",
    accentDim: "rgba(139,92,246,0.08)",
    formula: "φᵢ = Σ [|S|!(n−|S|−1)!/n!] · [v(S∪{i})−v(S)]",
    formulaAnnotation: "Fair marginal contribution across all coalitions",
    desc: "Payoff distribution across market participants uses Shapley Value attribution — the only allocation mechanism satisfying efficiency, symmetry, dummy, and additivity axioms simultaneously. This ensures no participant can systematically extract value beyond their marginal contribution to consensus accuracy.",
    properties: [
      { label: "Coalitions",       value: "2ⁿ computed"  },
      { label: "Fairness axioms",  value: "4 / 4 met"    },
      { label: "Distribution lag", value: "< 1 epoch"    },
    ],
  },
];

/* ─── FORMULA DISPLAY ────────────────────────────────────────────────── */
function FormulaBlock({ formula, annotation, accent }: { formula: string; annotation: string; accent: string }) {
  return (
    <div
      className="rounded-lg px-4 py-4 my-5 relative overflow-hidden"
      style={{
        background: "rgba(6,11,24,0.7)",
        border: `1px solid ${accent}22`,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-8 h-px"
        style={{ background: accent, opacity: 0.5 }}
      />
      <div
        className="absolute top-0 left-0 w-px h-6"
        style={{ background: accent, opacity: 0.5 }}
      />

      <p
        className="text-sm font-medium mb-1.5 tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: accent }}
      >
        {formula}
      </p>
      <p
        className="text-[10px] tracking-[0.12em]"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
      >
        {annotation}
      </p>
    </div>
  );
}

/* ─── ANIMATED BACKGROUND GRID ───────────────────────────────────────── */
function MathGrid({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
      <svg viewBox="0 0 400 300" className="w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
        {/* Horizontal grid */}
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke={accent} strokeWidth="0.5" />
        ))}
        {/* Vertical grid */}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="300" stroke={accent} strokeWidth="0.5" />
        ))}
        {/* Probability curve */}
        <path
          d="M0 250 C 60 230, 100 180, 140 140 S 240 80, 280 90 S 360 130, 400 120"
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          opacity={0.6}
        />
      </svg>
    </div>
  );
}

/* ─── AUTO-CYCLE TIMING ──────────────────────────────────────────────── */
const AUTO_ADVANCE_MS = 6000;   // dwell time per framework
const RESUME_DELAY_MS = 12000;  // hold after a manual selection before resuming

/* ─── COMPONENT ──────────────────────────────────────────────────────── */
export default function SuperCore() {
  const [active, setActive] = useState(0);
  const fw = FRAMEWORKS[active];
  const reduced = useReducedMotion();

  // Hover state and last-interaction timestamp live in refs so the interval
  // is created once and never restarts mid-cycle.
  const hoveredRef = useRef(false);
  const lastInteractionRef = useRef(0);

  // Manual selection (tabs + dots) — pauses auto-cycling for RESUME_DELAY_MS
  // useCallback keeps this out of the render path: the body only ever runs
  // from an event handler, so reading the clock is not a render-phase effect.
  const select = useCallback((i: number) => {
    lastInteractionRef.current = Date.now();
    setActive(i);
  }, []);

  // Infinite auto-cycle: advances every AUTO_ADVANCE_MS unless the section is
  // hovered or a manual selection happened recently. Disabled under
  // prefers-reduced-motion, matching the site's other carousels.
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      if (hoveredRef.current) return;
      if (Date.now() - lastInteractionRef.current < RESUME_DELAY_MS) return;
      setActive((a) => (a + 1) % FRAMEWORKS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="supercore"
      className="py-28 scroll-mt-20 relative overflow-hidden"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <Reveal>
          <p className="label-tag mb-4">[ MATHEMATICAL FRAMEWORK ]</p>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
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
              The Mathematics<br />Behind Probex
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
            >
              Probex&apos;s predictive accuracy rests on four interlocking mathematical
              frameworks — chosen for their formal guarantees, not their familiarity.
              Every layer can be independently audited against its specification.
            </p>
          </div>
        </Reveal>

        {/* ── SUPER-CORE VISUALIZATION ── */}
        <Reveal delay={0.05}>
          <div className="relative mb-16 flex flex-col items-center">
            <SuperCoreVisual />
            <p
              className="mt-6 text-center max-w-md text-[13px] leading-relaxed"
              style={{ fontFamily: "var(--font-heading-stack)", color: "var(--text-secondary)" }}
            >
              A single deterministic core executes every framework below in
              lockstep — consensus, calibration, and attribution resolved on one
              clock, at institutional throughput.
            </p>
          </div>
        </Reveal>

        {/* ── SELECTOR TABS ── */}
        <Reveal delay={0.05}>
          <div className="flex gap-2 flex-wrap mb-8">
            {FRAMEWORKS.map((f, i) => (
              <button
                key={f.id}
                onClick={() => select(i)}
                aria-pressed={active === i}
                className="px-4 py-2 rounded-md text-xs tracking-widest uppercase transition-all duration-200 gpu"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                  background: active === i ? `${f.accent}16` : "rgba(11,16,32,0.7)",
                  border: active === i ? `1px solid ${f.accent}44` : "1px solid rgba(148,163,184,0.07)",
                  color: active === i ? f.accent : "var(--text-muted)",
                }}
              >
                {f.shortTitle}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── SPOTLIGHT PANEL ── */}
        <motion.div
          key={fw.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-[1fr_380px] gap-5"
        >
          {/* LEFT — Main content */}
          <div
            className="relative rounded-xl overflow-hidden p-8 gpu"
            style={{
              background: "rgba(11,16,32,0.75)",
              border: `1px solid ${fw.accent}1a`,
            }}
          >
            <MathGrid accent={fw.accent} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: `${fw.accent}14`,
                    border: `1px solid ${fw.accent}30`,
                    color: fw.accent,
                  }}
                >
                  {fw.index}
                </span>
                <span
                  className="text-[9px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
                >
                  {fw.tag}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-3 leading-snug"
                style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                {fw.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
              >
                {fw.desc}
              </p>

              <FormulaBlock formula={fw.formula} annotation={fw.formulaAnnotation} accent={fw.accent} />
            </div>
          </div>

          {/* RIGHT — Properties + Probability Bar */}
          <div className="flex flex-col gap-4">
            {/* Properties panel */}
            <div
              className="rounded-xl p-6 gpu"
              style={{
                background: "rgba(11,16,32,0.75)",
                border: "1px solid rgba(148,163,184,0.07)",
                flex: 1,
              }}
            >
              <p
                className="text-[9px] tracking-[0.22em] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
              >
                Specifications
              </p>
              <div className="space-y-4">
                {fw.properties.map((prop, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: i < fw.properties.length - 1 ? "1px solid rgba(148,163,184,0.05)" : "none" }}
                  >
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
                    >
                      {prop.label}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: fw.accent }}
                    >
                      {prop.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accuracy gauge */}
            <div
              className="rounded-xl p-6 gpu"
              style={{
                background: "rgba(11,16,32,0.75)",
                border: "1px solid rgba(148,163,184,0.07)",
              }}
            >
              <p
                className="text-[9px] tracking-[0.22em] uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
              >
                Consensus Precision
              </p>
              <p
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: fw.accent }}
              >
                99.42%
              </p>
              {/* Progress bar */}
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 4, background: "rgba(148,163,184,0.1)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "99.42%" }}
                  transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
                  style={{
                    background: `linear-gradient(to right, ${fw.accent}, ${active % 2 === 0 ? "#8b5cf6" : "#00e5ff"})`,
                  }}
                />
              </div>
              <p
                className="text-[9px] mt-2"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
              >
                Rolling 2,000 resolved events
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── FRAMEWORK NAVIGATION DOTS ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {FRAMEWORKS.map((f, i) => (
            <button
              key={f.id}
              onClick={() => select(i)}
              className="transition-all duration-200 rounded-full gpu"
              style={{
                width: active === i ? 20 : 6,
                height: 6,
                background: active === i ? f.accent : "rgba(148,163,184,0.2)",
              }}
              aria-label={`Select ${f.shortTitle}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
