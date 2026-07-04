"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── LAYER CONFIG ───────────────────────────────────────────────────────
   The wave displacement formula is UNCHANGED from the original single-layer
   implementation — each layer only scales it by `amp` (amplitude) and `speed`
   (time), and offsets its resting height by `yOffset`. This preserves the
   original mathematics while composing two independent, depth-separated
   particle fields.                                                          */
interface LayerConfig {
  cols: number;
  rows: number;
  spacingX: number;
  spacingZ: number;
  speed: number;          // time multiplier
  amp: number;            // amplitude multiplier
  yOffset: number;        // resting height (depth separation)
  size: number;
  opacity: number;
  palette: [string, string, string]; // [low, mid, highlight]
  highlightChance: number;            // fraction of points lifted toward highlight
  updateEvery: number;                // JS position recompute cadence (1 = every frame)
  shimmer?: boolean;                  // subtle global opacity breathing
}

/* Original displacement — factored out so both layers share identical math */
function displace(x: number, z: number, t: number): number {
  return (
    Math.sin(x * 0.18 + t * 0.9) * 0.55 +
    Math.cos(z * 0.22 + t * 0.7) * 0.45 +
    Math.sin((x + z) * 0.12 + t * 1.1) * 0.30 +
    Math.sin(x * 0.06 - t * 0.5) * 0.20
  );
}

function WaveLayer({ cfg }: { cfg: LayerConfig }) {
  const ref = useRef<THREE.Points>(null!);
  const matRef = useRef<THREE.PointsMaterial>(null!);
  const {
    cols, rows, spacingX, spacingZ, speed, amp, yOffset,
    size, opacity, palette, highlightChance, updateEvery, shimmer,
  } = cfg;

  // Resting geometry — pre-displaced at t=0 so a paused/reduced-motion frame
  // already reads as a wave rather than a flat grid.
  const positions = useMemo(() => {
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        arr[i]     = (x - cols / 2) * spacingX;
        arr[i + 1] = yOffset + amp * displace(x, z, 0);
        arr[i + 2] = (z - rows / 2) * spacingZ;
        i += 3;
      }
    }
    return arr;
  }, [cols, rows, spacingX, spacingZ, yOffset, amp]);

  // Per-point colour: horizontal low→mid gradient, subtle brightness jitter,
  // and sparse highlights → depth + lighting without any per-frame cost.
  const colors = useMemo(() => {
    const arr = new Float32Array(cols * rows * 3);
    const cLow = new THREE.Color(palette[0]);
    const cMid = new THREE.Color(palette[1]);
    const cHigh = new THREE.Color(palette[2]);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      const tx = cols > 1 ? x / (cols - 1) : 0;
      const base = cLow.clone().lerp(cMid, tx);
      for (let z = 0; z < rows; z++) {
        const c = base.clone().multiplyScalar(0.82 + Math.random() * 0.18);
        if (Math.random() < highlightChance) c.lerp(cHigh, 0.6);
        arr[i] = c.r; arr[i + 1] = c.g; arr[i + 2] = c.b;
        i += 3;
      }
    }
    return arr;
  }, [cols, rows, palette, highlightChance]);

  const frameRef = useRef(0);

  useFrame(({ clock }) => {
    // Subtle shimmer — gentle opacity breathing (cheap, one value/frame)
    if (shimmer && matRef.current) {
      matRef.current.opacity = opacity * (0.9 + 0.1 * Math.sin(clock.elapsedTime * 1.1));
    }

    frameRef.current += 1;
    if (updateEvery > 1 && frameRef.current % updateEvery !== 0) return;

    const t = clock.getElapsedTime() * speed;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        pos[i + 1] = yOffset + amp * displace(x, z, t);
        i += 3;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        ref={matRef}
        vertexColors
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ─── SVG ORGANIC FLOW PATHS — Framer Motion, ultra-low opacity ────────── */
const FLOW_PATHS = [
  { d: "M-80 420 C 120 340, 280 500, 480 380 S 720 260, 960 340 S 1200 460, 1440 360", delay: 0,   dur: 14 },
  { d: "M-80 460 C 100 360, 300 520, 520 400 S 760 300, 1000 390 S 1260 500, 1520 400", delay: 2.5, dur: 18 },
  { d: "M-80 380 C 160 300, 320 460, 540 360 S 780 240, 1040 320 S 1280 440, 1520 340", delay: 5,   dur: 22 },
  { d: "M-80 500 C 80 400, 260 540, 460 420 S 700 280, 940 380 S 1180 480, 1520 440",  delay: 1.5, dur: 16 },
  { d: "M-80 350 C 200 270, 360 430, 580 310 S 820 200, 1080 290 S 1320 400, 1520 310", delay: 4,   dur: 20 },
];

const GRAD_IDS = ["wfg0", "wfg1", "wfg2"];

function SvgFlowLayer({ animate }: { animate: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <linearGradient id="wfg0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00e5ff" stopOpacity="0" />
            <stop offset="35%"  stopColor="#00e5ff" stopOpacity="0.5" />
            <stop offset="65%"  stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wfg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="45%"  stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wfg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#173bab" stopOpacity="0" />
            <stop offset="50%"  stopColor="#4f46e5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {FLOW_PATHS.map((p, i) =>
          animate ? (
            <motion.path
              key={i}
              d={p.d}
              fill="none"
              stroke={`url(#${GRAD_IDS[i % 3]})`}
              strokeWidth={i % 2 === 0 ? 1.1 : 0.65}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity:    [0, 0.026 + (i % 3) * 0.007, 0],
              }}
              transition={{
                duration: p.dur,
                delay:    p.delay,
                repeat:   Infinity,
                ease:     "easeInOut",
                times:    [0, 0.5, 1],
              }}
            />
          ) : (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke={`url(#${GRAD_IDS[i % 3]})`}
              strokeWidth={i % 2 === 0 ? 1.1 : 0.65}
              opacity={0.03}
            />
          )
        )}
      </svg>
    </div>
  );
}

export default function WaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(true);
  const [docVisible, setDocVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Mount, responsive density, document-visibility
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onMq = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const onVis = () => setDocVisible(!document.hidden);
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Pause render loop when the hero scrolls out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  // reduced-motion → single static frame; otherwise run only while visible
  const frameloop: "always" | "never" | "demand" = reduced
    ? "demand"
    : inView && docVisible
    ? "always"
    : "never";

  const fgCfg: LayerConfig = useMemo(
    () => ({
      cols: isMobile ? 132 : 224,
      rows: isMobile ? 60 : 104,
      spacingX: 0.12,
      spacingZ: 0.17,
      speed: 1.05,
      amp: 1.0,
      yOffset: 0,
      size: 0.05,
      opacity: 0.85,
      // Predominantly cyan: highlights are bright CYAN (low red) so additive
      // overlaps saturate toward cyan, not white.
      palette: ["#00cfff", "#22e5ff", "#7ff2ff"],
      highlightChance: 0.08,
      updateEvery: 1,
      shimmer: true,
    }),
    [isMobile]
  );

  const bgCfg: LayerConfig = useMemo(
    () => ({
      cols: isMobile ? 90 : 150,
      rows: isMobile ? 44 : 76,
      spacingX: 0.18,
      spacingZ: 0.22,
      speed: 0.45,
      amp: 1.65,
      yOffset: -1.4,
      size: 0.05,
      opacity: 0.22,
      palette: ["#173bab", "#4f46e5", "#3b82f6"], // royal blue → indigo → blue
      highlightChance: 0.03,
      updateEvery: 2,
    }),
    [isMobile]
  );

  // Keep the DOM node (and its ref) stable before the Canvas mounts client-side
  if (!mounted) return <div ref={containerRef} className="absolute inset-0" />;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 3.2, 12], fov: 62, near: 0.1, far: 80 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        frameloop={frameloop}
      >
        <fog attach="fog" args={["#060b18", 8, 28]} />
        {/* Background depth field first, foreground on top */}
        <WaveLayer cfg={bgCfg} />
        <WaveLayer cfg={fgCfg} />
      </Canvas>

      {/* Framer Motion SVG organic flow field */}
      <SvgFlowLayer animate={!reduced} />

      {/* CRT scanline grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.008) 3px, rgba(0,229,255,0.008) 4px)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 88% 72% at 50% 62%, transparent 38%, rgba(6,11,24,0.72) 100%)",
        }}
      />
    </div>
  );
}
