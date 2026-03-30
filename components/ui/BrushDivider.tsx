"use client";

import { motion } from "framer-motion";

interface BrushDividerProps {
  className?: string;
  variant?: "default" | "subtle" | "accent";
}

export function BrushDivider({ className = "", variant = "default" }: BrushDividerProps) {
  const strokeColor = {
    default: "rgb(var(--brand))",
    subtle: "rgb(var(--line))",
    accent: "rgb(var(--brand))"
  }[variant];

  const opacity = variant === "subtle" ? 0.5 : 0.3;

  return (
    <div className={`relative h-6 my-8 lg:my-12 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0,12 Q300,4 600,12 T1200,12"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity={opacity}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
