import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CandlestickChart,
  Gauge,
  Globe,
  GraduationCap,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import ProofStrip from "@/components/ProofStrip";

const contactEmail = "syalcin01@qub.ac.uk";



const highlights = [
  {
    title: "FinTech SWE",
    icon: CandlestickChart,
    bullets: [
      "Pricing, trade capture, and risk tooling exposure.",
      "Comfortable with regulated, audit-friendly environments.",
    ],
  },
  {
    title: "Full-Stack Builder",
    icon: Layers,
    bullets: [
      "Own API-to-UI delivery for real internal users.",
      "Data-heavy dashboards with clear interaction design.",
    ],
  },
  {
    title: "Quality Mindset",
    icon: ShieldCheck,
    bullets: [
      "QA engineering with Selenium + Java.",
      "Edge cases, reproducibility, and test automation.",
    ],
  },
  {
    title: "Startup Execution",
    icon: Rocket,
    bullets: [
      "Customer demos that inform roadmap direction.",
      "Iterate quickly while staying production-aware.",
    ],
  },
  {
    title: "Leadership",
    icon: Users,
    bullets: [
      "Student society leadership and community building.",
      "Confident communicator and cross-team collaborator.",
    ],
  },
];

const experience = [
  {
    company: "AIMA",
    role: "Startup Intern / Builder",
    focus: "Product demos and feature delivery",
    bullets: [
      "Built demo-ready features used for investor and client storytelling.",
      "Turned feedback into iterations with tight turnaround cycles.",
    ],
  },
  {
    company: "Citi",
    role: "Equity Derivatives Intern",
    focus: "Trading & risk workflows",
    bullets: [
      "Built internal tooling to surface trade lifecycle insights for desks.",
      "Worked with quants and engineers to align model outputs with UI.",
    ],
  },
  {
    company: "Citi",
    role: "Custody Full Stack Intern",
    focus: "Operational platforms",
    bullets: [
      "Shipped features that improved data visibility across custody flows.",
      "Supported API integrations and front-end views for operations teams.",
    ],
  },
  {
    company: "Allstate",
    role: "QA Engineering Intern",
    focus: "Automation and reliability",
    bullets: [
      "Implemented Selenium test suites to harden critical user flows.",
      "Partnered with developers to close gaps in regression coverage.",
    ],
  },

];

const nowItems = [
  "Final-year dissertation exploring GPU-accelerated option pricing.",
  "Building out a clean, high-signal portfolio and project archive.",
  "Deepening my knowledge of market microstructure and quant tooling.",
];

const outsideTags = [
  "Running",
  "Golf",
  "Volunteering",
  "Student societies",
  "Mentoring",
];

const quickFacts = [
  {
    label: "Location",
    value: "Belfast / London",
    icon: Globe,
  },
  {
    label: "Status",
    value: "Final-year CS @ Queen's University Belfast",
    icon: GraduationCap,
  },
  {
    label: "Focus",
    value: "Fintech and High-Performance Systems",
    icon: LineChart,
  },
];

const cardBase =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:backdrop-blur-xl sm:shadow-[0_20px_60px_rgba(0,0,0,0.35)]";

const pillBase =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70 sm:px-4 sm:text-xs";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),rgba(15,23,42,0.05)_60%,transparent_70%)] blur-2xl sm:blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),rgba(15,23,42,0.06)_55%,transparent_70%)] blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.16),rgba(15,23,42,0.08)_55%,transparent_75%)] blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(5,7,10,0.6)_40%,#05070a_100%)]" />
      </div>

      <section id="about" className="relative scroll-mt-24 sm:scroll-mt-28">
        <div className="page-container section-space pt-20 sm:pt-28">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className={pillBase}>
                  <Sparkles className="h-3.5 w-3.5" />
                  About me
                </span>
                <div className="space-y-4">
                  <h2 className="text-balance text-[clamp(1.75rem,6vw,3rem)] font-semibold tracking-tight text-white">
                    Systems Builder
                  </h2>
                  <p className="max-w-prose text-sm leading-relaxed text-white/70 sm:text-base">
                    I am Sean Yalcin, a final-year Computer Science student at &apos;s
                    University Belfast and incoming SWE at Citi.
                  </p>
                </div>

                <div
                  id="projects"
                  className="mt-6 grid gap-3 scroll-mt-24 sm:grid-cols-2 sm:gap-4 sm:scroll-mt-28 xl:grid-cols-3"
                >
                  {highlights.map((item) => (
                    <div key={item.title} className={`${cardBase} p-4 sm:p-5`}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/80">
                            <item.icon className="h-5 w-5" />
                          </span>
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/50" />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Stack CTAs on mobile for comfortable taps. */}
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 motion-reduce:transition-none sm:w-auto"
                  >
                    Contact
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="https://github.com/syalc1234"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 motion-reduce:transition-none sm:w-auto"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div id="contact" className={`${cardBase} space-y-5 p-5 sm:p-6 scroll-mt-24`}>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                    Quick facts
                  </p>
                  <Gauge className="h-5 w-5 text-white/60" />
                </div>
                <div className="grid gap-4">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          {fact.label}
                        </p>
                        <p className="text-sm font-semibold text-white">{fact.value}</p>
                      </div>
                      <fact.icon className="h-5 w-5 text-white/60" />
                    </div>
                  ))}
                </div>
                <div className="grid gap-3">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 motion-reduce:transition-none"
                  >
                    Email
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/seany2004/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 motion-reduce:transition-none"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className={`${cardBase} p-5 sm:p-6`}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Currently
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  What I am working on now
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {nowItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400/80" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>


      <section className="relative">
        <div className="page-container section-space">

          <div className={`${cardBase} p-5 sm:p-8`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Experience snapshot
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Roles that shaped my approach to building.
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <BadgeCheck className="h-4 w-4" />
                Internships
              </div>
            </div>
            <div className="mt-6">
              {/* Embedded proof strip keeps experience context within the same card on mobile. */}
              <ProofStrip
                variant="embedded"
                className="bg-white/0 shadow-none border-white/0 backdrop-blur-none"
              />
            </div>
            <div className="relative mt-8">
              <div className="absolute left-2 top-0 h-full w-px bg-white/10 sm:left-3" />
              <ol className="space-y-6">
                {experience.map((role) => (
                  <li key={`${role.company}-${role.role}`} className="relative pl-8 sm:pl-10">
                    <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-emerald-400/80" />
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                            {role.company}
                          </p>
                          <h4 className="mt-2 text-lg font-semibold text-white">
                            {role.role}
                          </h4>
                          <p className="mt-1 text-sm text-white/60">{role.focus}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/50" />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="page-container pb-20 sm:pb-24">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
            <div className={`${cardBase} p-5 sm:p-6`}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Outside of work
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Balanced energy, clear head.
              </h3>
              <p className="mt-3 max-w-prose text-sm text-white/70">
                I stay sharp by keeping the routine simple and the community close.
                Running keeps me grounded, golf keeps me patient, and volunteering
                keeps me connected.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {outsideTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-3">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <video
                    className="h-full w-full object-cover"
                    src="/swing.mp4"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
