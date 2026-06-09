"use client";

import { useEffect, useState } from "react";

const POINT_COUNT = 8;
const W = 320;
const H = 70;
const PAD = 6;

function buildPath(data: number[]) {
  const pts = data.map((v, i) => {
    const x = PAD + (i / (POINT_COUNT - 1)) * (W - PAD * 2);
    const y = H - PAD - (v / 100) * (H - PAD * 2);
    return { x, y };
  });

  const polyline = pts.map((p) => `${p.x},${p.y}`).join(" ");

  const area = [
    `${PAD},${H}`,
    ...pts.map((p) => `${p.x},${p.y}`),
    `${W - PAD},${H}`,
  ].join(" ");

  const last = pts[pts.length - 1];

  return { polyline, area, lastX: last.x, lastY: last.y };
}

export default function MiniChart() {
  const [data, setData] = useState<number[] | null>(null);

  // ✅ ONLY RUN ON CLIENT (fixes hydration)
  useEffect(() => {
    const initial = Array.from(
      { length: POINT_COUNT },
      () => 30 + Math.random() * 40
    );
    setData(initial);
  }, []);

  // ✅ animation loop (only runs after mount)
  useEffect(() => {
    if (!data) return;

    const id = setInterval(() => {
      setData((prev) => {
        if (!prev) return prev;
        const last = prev[prev.length - 1];
        const next = Math.max(
          10,
          Math.min(90, last + (Math.random() - 0.48) * 12)
        );
        return [...prev.slice(1), next];
      });
    }, 1400);

    return () => clearInterval(id);
  }, [data]);

  // 🚫 prevent server/client mismatch
  if (!data) return null;

  const { polyline, area, lastX, lastY } = buildPath(data);

  return (
    <div
      className="absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none z-30"
      style={{ width: W, height: H + 10, opacity: 0.32 }}
      aria-hidden="true"
    >
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} overflow="visible">
        <defs>
          <linearGradient id="mc-lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#00e5ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="mc-areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>

          <filter id="mc-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Area fill */}
        <polygon points={area} fill="url(#mc-areaGrad)" />

        {/* Line */}
        <polyline
          fill="none"
          stroke="url(#mc-lineGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={polyline}
          filter="url(#mc-glow)"
        />

        {/* Live end-dot */}
        <circle
          cx={lastX}
          cy={lastY}
          r="2.5"
          fill="#00e5ff"
          opacity="0.9"
          filter="url(#mc-glow)"
        />
      </svg>
    </div>
  );
}