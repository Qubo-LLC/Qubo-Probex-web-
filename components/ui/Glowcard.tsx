"use client";

import { useRef, useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  glowColor?: string;
}

export default function GlowCard({
  children,
  glowColor = "rgba(0,229,255,0.14)",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl overflow-hidden h-full"
    >
      {/* Spotlight glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
