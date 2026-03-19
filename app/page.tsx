import LetterGlitch from "@/components/LetterGlitch";
import AboutSection from "@/components/AboutSection";
import TextTypeWrapper from "@/components/TextTypeWrapper";
import TechCarousel from "@/components/TechCarousel";
import ProofStrip from "@/components/ProofStrip";

export default function HomePage() {
  return (
    <main id="top" className="relative w-full">
      <section className="relative left-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={70}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            glitchColors={["#8f6f49", "#2d6a5b", "#b48356"]}
            characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(246,239,228,0.42)_0%,rgba(234,226,213,0.68)_45%,rgba(227,221,211,0.94)_100%)]" />

        <div className="relative z-20 flex min-h-[72vh] items-center px-4 py-24 text-[#261f17] sm:min-h-[82vh] sm:px-6 sm:py-32">
          <div className="page-container flex justify-center">
            <div className="flex w-full max-w-5xl justify-center text-center">
              <TextTypeWrapper
                as="p"
                className="font-mono-accent w-full text-sm uppercase tracking-[0.22em] text-[#5c6d61] sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>
      <ProofStrip />
      <TechCarousel />
      <AboutSection />
    </main>
  );
}
