import LetterGlitch from "@/components/LetterGlitch";
import AboutSection from "@/components/AboutSection";
import TextTypeWrapper from "@/components/TextTypeWrapper";
import TechCarousel from "@/components/TechCarousel";
import ProofStrip from "@/components/ProofStrip";
import Link from "next/link";

const stats = [
  { label: "Internships", value: "4" },
  { label: "Focus", value: "Fintech" },
  { label: "Base", value: "Belfast / London" },
];

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

        <div className="relative z-20 px-4 pb-18 pt-24 text-white sm:px-6 sm:pb-24 sm:pt-30">
          <div className="page-container">
            <div className="surface-panel overflow-hidden">
              <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-10 lg:py-12">
                <div className="space-y-6">
                  <span className="eyebrow font-mono-accent">Incoming SWE @ Citi</span>
                  <div className="space-y-4">
                    <h1 className="display-title max-w-[11ch] text-[clamp(3.1rem,10vw,6.4rem)] leading-[0.92]">
                      Clean systems. Sharp product thinking.
                    </h1>
                    <TextTypeWrapper
                      as="p"
                      className="font-mono-accent text-sm uppercase tracking-[0.22em] text-emerald-200/80 sm:text-base"
                    />
                    <p className="max-w-[38rem] text-base leading-7 text-white/72 sm:text-lg">
                      I build internal tools and product surfaces that make complex financial
                      workflows clearer, faster, and easier to trust.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#experience"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-50"
                    >
                      View experience
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/84 transition-colors hover:bg-white/[0.08]"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-4"
                      >
                        <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.4rem] border border-emerald-300/14 bg-emerald-300/[0.06] p-5">
                    <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.22em] text-emerald-100/55">
                      What stands out
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/76">
                      Full-stack internships across Citi, Allstate, and AIMA with experience in
                      pricing-adjacent systems, dashboards, QA automation, and delivery for real
                      users.
                    </p>
                  </div>
                </div>
              </div>
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
