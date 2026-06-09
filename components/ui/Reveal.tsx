"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const directionMap = {
    up:    { y: 32, x: 0 },
    down:  { y: -32, x: 0 },
    left:  { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none:  { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
