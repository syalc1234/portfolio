"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function ExperienceProgressCircle() {
  const markerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: markerRef,
    offset: ["start 80%", "start 45%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div
      ref={markerRef}
      aria-hidden="true"
      className="absolute -left-0.5 top-5 z-10 h-[1.375rem] w-[1.375rem] rounded-full bg-[#f6f1e8] sm:left-0.5"
    >
      <svg
        className="h-full w-full -rotate-90"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          pathLength="1"
          stroke="rgba(45, 106, 91, 0.2)"
          strokeWidth="2.5"
        />
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          pathLength="1"
          stroke="#2d6a5b"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            pathLength: prefersReducedMotion ? 1 : smoothProgress,
          }}
        />
      </svg>
    </div>
  );
}
