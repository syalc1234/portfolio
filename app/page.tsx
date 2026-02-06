import LetterGlitch from "@/components/LetterGlitch";
import AboutSection from "@/components/AboutSection";
import TextTypeWrapper from "@/components/TextTypeWrapper";
import TechCarousel from "@/components/TechCarousel";
export default function HomePage() {
  return (
    <main id="top" className="relative w-full">
      <section className="relative left-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"}
          />
        </div>
        {/* Contrast overlay keeps hero text readable on small screens. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80 sm:from-black/60 sm:via-black/40 sm:to-black/70" />

        <div className="relative z-20 flex min-h-[60vh] w-full items-center justify-center px-4 py-20 text-white sm:min-h-[70vh] sm:px-10 sm:py-24">
          <TextTypeWrapper
            as="h1"
            className="mx-auto w-full max-w-[22ch] text-balance text-center text-[clamp(1.85rem,6vw,3.6rem)] leading-tight sm:max-w-[28ch]"
          />
        </div>
      </section>
      <TechCarousel />
      <AboutSection />
    </main>
  );
}
