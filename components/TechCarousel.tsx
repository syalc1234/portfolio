import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiPython,
  SiReact,
  SiRedhat,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const TECH = [
  { name: "Java", Icon: FaJava, color: "#F97316" },
  { name: "Docker", Icon: SiDocker, color: "#38BDF8" },
  { name: "TypeScript", Icon: SiTypescript, color: "#60A5FA" },
  { name: "React", Icon: SiReact, color: "#22D3EE" },
  { name: "Python", Icon: SiPython, color: "#F59E0B" },
  { name: "Angular", Icon: SiAngular, color: "#F43F5E" },
  { name: "RHEL", Icon: SiRedhat, color: "#EE0000" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
];

function Track() {
  return (
    <div className="animate-marquee flex w-[200%] items-center gap-4 motion-reduce:animate-none sm:gap-6">
      {[...TECH, ...TECH].map((item, index) => {
        const Icon = item.Icon;

        return (
        <div
          key={`${item.name}-${index}`}
          className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f8f2e7]/82 px-4 py-2.5 text-[#3f3328] backdrop-blur-md sm:px-5"
          aria-hidden={index >= TECH.length}
        >
            <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" style={{ color: item.color }} />
            <span className="font-mono-accent text-[0.68rem] uppercase tracking-[0.22em] sm:text-[0.72rem]">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function TechCarousel() {
  return (
    <section className="relative left-1/2 -mx-[50vw] w-screen text-[#261f17]">
      <div className="page-container py-8 sm:py-10">
        <div className="surface-panel overflow-hidden px-4 py-5 sm:px-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mt-2 text-xl font-semibold text-[#221910] sm:text-2xl">
              Toolkit:
              </h2>
            </div>
          </div>

          <div className="hairline mb-5" />

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f5eee3] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f5eee3] to-transparent sm:w-20" />
            <Track />
          </div>
        </div>
      </div>
    </section>
  );
}
