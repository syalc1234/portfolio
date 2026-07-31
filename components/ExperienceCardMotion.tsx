"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { type ReactNode, useRef } from "react";

interface ExperienceCardMotionProps {
  children: ReactNode;
  className?: string;
}

export default function ExperienceCardMotion({
  children,
  className,
}: ExperienceCardMotionProps) {
  const cardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.25,
  });

  const scale = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.96]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.45, 1, 1, 0.55]);
  const y = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [24, 0, 0, -12]);
  const filter = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    ["blur(3px)", "blur(0px)", "blur(0px)", "blur(2px)"],
  );

  return (
    <motion.article
      ref={cardRef}
      className={className}
      style={{
        scale: prefersReducedMotion ? 1 : scale,
        opacity: prefersReducedMotion ? 1 : opacity,
        y: prefersReducedMotion ? 0 : y,
        filter: prefersReducedMotion ? "none" : filter,
        transformOrigin: "center",
        willChange: prefersReducedMotion ? undefined : "transform, opacity, filter",
      }}
    >
      {children}
    </motion.article>
  );
}
