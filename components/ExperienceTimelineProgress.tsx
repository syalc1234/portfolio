"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function ExperienceTimelineProgress() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-2 top-0 h-full w-px overflow-hidden bg-[#2d6a5b]/15 sm:left-3"
    >
      <motion.div
        className="h-full w-full bg-[#2d6a5b]"
        style={{
          scaleY: prefersReducedMotion ? 1 : smoothProgress,
          transformOrigin: "top",
        }}
      />
    </div>
  );
}
