"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";
import BulletList from "@/components/BulletList";
import { experience, type Job } from "@/lib/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-24 sm:scroll-mt-28">
      <div className="page-container section-space">
        <div className="surface-panel p-5 sm:p-8">
          <h3 className="display-title mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-none">Experience:</h3>

          <div className="relative mt-8">
            <TimelineTrack />
            <ol className="space-y-6">
              {experience.map((job) => (
                <li key={`${job.company}-${job.role}`} className="relative pl-8 sm:pl-10">
                  <TimelineMarker />
                  <ScrollCard>
                    <JobDetails job={job} />
                  </ScrollCard>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobDetails({ job }: { job: Job }) {
  return (
    <>
      {job.current && (
        <span className="absolute -top-2.5 left-5 rounded-full bg-[#caa676] px-2.5 py-0.5 font-mono-accent text-[0.6rem] uppercase tracking-[0.1em] text-[#6d4f20]">
          Current focus
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.22em] text-[#7b6d5c]">
          {job.company}
        </p>
        {job.dates && (
          <span className="font-mono-accent border-b border-dashed border-[#2d6a5b]/40 text-[0.66rem] text-[#2d6a5b]">
            {job.dates}
          </span>
        )}
      </div>
      <h4 className="mt-2 text-lg font-semibold text-[#221910]">{job.role}</h4>
      <p className="mt-1 text-sm text-[#685c4e]">{job.focus}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.tech.map(({ name, Icon, color }) => (
          <span
            key={name}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/55 px-2.5 py-1 font-mono-accent text-[0.64rem] text-[#221910]"
          >
            <Icon className="h-3 w-3" style={{ color }} />
            {name}
          </span>
        ))}
      </div>
      <BulletList items={job.bullets} className="mt-3 space-y-2" />
    </>
  );
}

// Vertical line on the left that fills in as the timeline scrolls through the viewport.
function TimelineTrack() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-2 top-0 h-full w-px overflow-hidden bg-[#2d6a5b]/15 sm:left-3"
    >
      <motion.div
        className="h-full w-full bg-[#2d6a5b]"
        style={{ scaleY: reducedMotion ? 1 : progress, transformOrigin: "top" }}
      />
    </div>
  );
}

// Ring beside each card that draws itself as the card scrolls into view.
function TimelineMarker() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "start 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute -left-0.5 top-5 z-10 h-[1.375rem] w-[1.375rem] rounded-full bg-[#f6f1e8] sm:left-0.5"
    >
      <svg className="h-full w-full -rotate-90" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" pathLength="1" stroke="rgba(45, 106, 91, 0.2)" strokeWidth="2.5" />
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          pathLength="1"
          stroke="#2d6a5b"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength: reducedMotion ? 1 : progress }}
        />
      </svg>
    </div>
  );
}

// Card that scales/fades/blurs in and out as it passes through the viewport.
function ScrollCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 });

  const scale = useTransform(progress, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.96]);
  const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0.45, 1, 1, 0.55]);
  const y = useTransform(progress, [0, 0.35, 0.65, 1], [24, 0, 0, -12]);
  const filter = useTransform(
    progress,
    [0, 0.3, 0.7, 1],
    ["blur(3px)", "blur(0px)", "blur(0px)", "blur(2px)"],
  );

  return (
    <motion.article
      ref={ref}
      className="relative rounded-[1.55rem] border border-black/15 bg-[#faf6ec] p-5 shadow-[0_14px_30px_rgba(66,49,34,0.1)]"
      style={
        reducedMotion
          ? undefined
          : { scale, opacity, y, filter, willChange: "transform, opacity, filter" }
      }
    >
      {children}
    </motion.article>
  );
}
