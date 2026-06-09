"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";

/* ─── THREE.JS POINT SURFACE (internal logic UNCHANGED) ─────────────── */
function LiquiditySurface() {
  const ref = useRef<THREE.Points>(null!);
  const cols = 220;
  const rows = 100;
  const spacingX = 0.13;
  const spacingZ = 0.18;

  const positions = useMemo(() => {
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        arr[i]     = (x - cols / 2) * spacingX;
        arr[i + 1] = 0;
        arr[i + 2] = (z - rows / 2) * spacingZ;
        i += 3;
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t   = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        pos[i + 1] =
          Math.sin(x * 0.18  + t * 0.9)  * 0.55 +
          Math.cos(z * 0.22  + t * 0.7)  * 0.45 +
          Math.sin((x + z) * 0.12 + t * 1.1) * 0.30 +
          Math.sin(x * 0.06  - t * 0.5)  * 0.20;
        i += 3;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#00e5ff"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ─── SVG ORGANIC FLOW PATHS — Framer Motion, ultra-low opacity 0.02-0.04 */
const FLOW_PATHS = [
  { d: "M-80 420 C 120 340, 280 500, 480 380 S 720 260, 960 340 S 1200 460, 1440 360", delay: 0,   dur: 14 },
  { d: "M-80 460 C 100 360, 300 520, 520 400 S 760 300, 1000 390 S 1260 500, 1520 400", delay: 2.5, dur: 18 },
  { d: "M-80 380 C 160 300, 320 460, 540 360 S 780 240, 1040 320 S 1280 440, 1520 340", delay: 5,   dur: 22 },
  { d: "M-80 500 C 80 400, 260 540, 460 420 S 700 280, 940 380 S 1180 480, 1520 440",  delay: 1.5, dur: 16 },
  { d: "M-80 350 C 200 270, 360 430, 580 310 S 820 200, 1080 290 S 1320 400, 1520 310", delay: 4,   dur: 20 },
];

const GRAD_IDS = ["wfg0", "wfg1", "wfg2"];

function SvgFlowLayer() {
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
            <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%"  stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {FLOW_PATHS.map((p, i) => (
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
        ))}
      </svg>
    </div>
  );
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 3.2, 12], fov: 62, near: 0.1, far: 80 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#060b18", 8, 28]} />
        <LiquiditySurface />
      </Canvas>

      {/* Framer Motion SVG organic flow field */}
      <SvgFlowLayer />

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
