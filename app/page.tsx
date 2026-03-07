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
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(4,8,13,0.58)_0%,rgba(4,8,13,0.76)_40%,rgba(4,8,13,0.97)_100%)]" />

        <div className="relative z-20 flex min-h-[72vh] items-center px-4 py-24 text-white sm:min-h-[82vh] sm:px-6 sm:py-32">
          <div className="page-container flex justify-center">
            <div className="flex w-full max-w-5xl justify-center text-center">
              <TextTypeWrapper
                as="p"
                className="font-mono-accent w-full text-sm uppercase tracking-[0.22em] text-emerald-200/80 sm:text-base"
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
