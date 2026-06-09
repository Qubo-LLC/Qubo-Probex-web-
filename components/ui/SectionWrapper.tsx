"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionWrapper({
  children,
  delay = 0,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
