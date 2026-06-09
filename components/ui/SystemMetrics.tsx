"use client";

import { useEffect, useState } from "react";

interface Metric {
  label: string;
  value: string;
  unit: string;
  color?: string;
}

function useTicker(
  initial: number,
  delta: number,
  interval: number,
  decimals = 2
) {
  const [val, setVal] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setVal((prev) =>
        parseFloat((prev + (Math.random() - 0.5) * delta).toFixed(decimals))
      );
    }, interval);
    return () => clearInterval(id);
  }, [delta, interval, decimals]);
  return val;
}

export default function SystemMetrics() {
  const latency    = useTicker(1.42, 0.18, 1400, 2);
  const throughput = useTicker(1284, 60,   1600, 0);

  const metrics: Metric[] = [
    { label: "Latency",    value: latency.toFixed(2), unit: "ms",    color: "var(--cyan-dim)" },
    { label: "Throughput", value: Math.floor(throughput).toLocaleString(), unit: " ops/s", color: "var(--cyan-dim)" },
    { label: "Status",     value: "ACTIVE",            unit: "",      color: "#00e5a0" },
  ];

  return (
    <div
      className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 items-end"
      aria-label="Live system metrics"
    >
      {metrics.map((m, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="text-[9px] tracking-[0.15em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {m.label}
          </span>
          <span
            className="text-[10px] font-semibold font-mono tabular-nums"
            style={{ color: m.color }}
          >
            {m.value}{m.unit}
          </span>
          {m.label === "Status" && (
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00e5a0", boxShadow: "0 0 6px #00e5a0" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
