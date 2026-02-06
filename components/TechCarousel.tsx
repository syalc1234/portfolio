import { FaJava } from "react-icons/fa";
import { SiAngular, SiDocker, SiPython, SiReact, SiTypescript } from "react-icons/si";

const TECH = [
  { name: "Java", Icon: FaJava, color: "#F97316" },
  { name: "Docker", Icon: SiDocker, color: "#38BDF8" },
  { name: "TypeScript", Icon: SiTypescript, color: "#60A5FA" },
  { name: "React", Icon: SiReact, color: "#22D3EE" },
  { name: "Python", Icon: SiPython, color: "#F59E0B" },
  { name: "Angular", Icon: SiAngular, color: "#F43F5E" }
];

function Track({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-[200%] items-center gap-6 sm:gap-10 motion-reduce:animate-none ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...TECH, ...TECH].map((item, index) => {
        const Icon = item.Icon;
        return (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 backdrop-blur-md sm:px-6 sm:py-3 sm:backdrop-blur-xl"
            aria-hidden={index >= TECH.length}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: item.color }} />
            <span className="text-xs uppercase tracking-[0.24em] sm:text-sm">
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
    <section className="relative left-1/2 -mx-[50vw] w-screen bg-[#05070a] text-white pt-8 sm:pt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="page-container section-space pt-0">
        <div className="mb-6 flex items-center justify-center gap-6 sm:mb-8">
          <h2 className="text-balance text-xl font-semibold tracking-tight sm:text-3xl">
            Tech Stack 
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#05070a] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#05070a] to-transparent sm:w-24" />

          <div className="flex flex-col gap-6">
            <Track />
          </div>
        </div>
      </div>
    </section>
  );
}
