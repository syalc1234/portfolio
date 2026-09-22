import LetterGlitch from "@/components/LetterGlitch";
import TextType from "@/components/TextType";
import ProofStrip from "@/components/ProofStrip";
import TechCarousel from "@/components/TechCarousel";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import OutsideWorkSection from "@/components/OutsideWorkSection";
import { heroLines } from "@/lib/content";

export default function HomePage() {
  return (
    <main id="top" className="relative w-full">
      {/* Hero */}
      <section className="relative left-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LetterGlitch glitchSpeed={70} glitchColors={["#8f6f49", "#2d6a5b", "#b48356"]} />
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(246,239,228,0.42)_0%,rgba(234,226,213,0.68)_45%,rgba(227,221,211,0.94)_100%)]" />

        <div className="relative z-20 flex min-h-[72vh] items-center px-4 py-24 text-[#261f17] sm:min-h-[82vh] sm:px-6 sm:py-32">
          <div className="page-container flex justify-center text-center">
            <TextType
              as="p"
              text={heroLines}
              typingSpeed={55}
              pauseDuration={1800}
              deletingSpeed={22}
              className="font-mono-accent block w-full max-w-5xl text-[clamp(1.35rem,2.8vw,2.25rem)] uppercase tracking-[0.16em] text-[#5d5246] sm:leading-[1.35]"
            />
          </div>
        </div>
      </section>

      <ProofStrip />
      <TechCarousel />

      <div className="relative w-full overflow-hidden">
        {/* Soft background glow behind the lower sections */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(205,165,112,0.22),rgba(227,221,211,0.04)_60%,transparent_72%)] blur-3xl" />
          <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,106,91,0.16),rgba(227,221,211,0.03)_55%,transparent_70%)] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(188,173,153,0.18)_46%,rgba(221,211,198,0.54)_100%)]" />
        </div>

        <AboutSection />
        <ExperienceSection />
        <OutsideWorkSection />
      </div>
    </main>
  );
}
