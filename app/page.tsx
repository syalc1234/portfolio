import LetterGlitch from "@/components/LetterGlitch";
import AboutSection from "@/components/AboutSection";
import TextTypeWrapper from "@/components/TextTypeWrapper";
import TechCarousel from "@/components/TechCarousel";
export default function HomePage() {
  return (
    <main className="relative w-full">
      <section className="relative left-1/2 -mx-[50vw] w-screen overflow-hidden m:-0.8em">
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

        <div className="relative z-10 flex min-h-[70vh] w-full items-center justify-center px-6 py-24 text-white sm:px-10">
          <TextTypeWrapper className="w-full text-center text-3xl leading-tight sm:text-4xl md:text-5xl" />
        </div>
      </section>
      <TechCarousel />
      <AboutSection />
    </main>
  );
}
