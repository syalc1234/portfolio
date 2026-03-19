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
    title: "Full-Stack Builder",
    icon: Layers,
    bullets: ["API-to-UI delivery for real users.", "Clear frontends for data-heavy workflows."],
  },
  {
    title: "Quality Mindset",
    icon: ShieldCheck,
    bullets: ["QA automation with Selenium + Java.", "Strong focus on reproducibility and edge cases."],
  },
  {
    title: "Startup Execution",
    icon: Rocket,
    bullets: ["Fast iteration from user feedback.", "Demo-ready delivery without losing product discipline."],
  },
  {
    title: "Leadership",
    icon: Users,
    bullets: ["Built student communities and events.", "Comfortable communicating across teams."],
  },
];

const experience = [
  {
    company: "AIMA",
    role: "Full Stack SWE (Python + React)",
    focus: "Product demos and feature delivery",
    bullets: [
      "Built demo-ready features used for investor and client storytelling.",
      "Turned feedback into iterations with tight turnaround cycles.",
    ],
  },
  {
    company: "Citi",
    role: "Full Stack SWE",
    focus: "Equity Derivatives",
    bullets: [
      "Built internal tooling to surface trade lifecycle insights for desks.",
      "Designed an architecture diagram to support intraday trade amendments in order booking.",
    ],
  },
  {
    company: "Citi",
    role: "Full Stack SWE (Angular + TypeScript + Java)",
    focus: "Custody platforms",
    bullets: [
      "Shipped features that improved data visibility across custody flows.",
      "Supported API integrations and front-end views for operations teams.",
    ],
  },
  {
    company: "Allstate",
    role: "QA Engineering (Java + Selenium)",
    focus: "Automation and reliability",
    bullets: [
      "Implemented Selenium test suites to harden critical user flows.",
      "Performed exploratory and regression testing and logged critical defects.",
    ],
  },
];

const nowItems = [
  "Final-year dissertation on GPU-accelerated option pricing.",
  "Sharpening this portfolio into a cleaner project archive.",
];

const outsideTags = ["Running", "Golf", "Volunteering", "Mentoring", "Hackathons",];

const quickFacts = [
  {
    label: "Location",
    value: "Belfast / London",
    icon: Globe,
  },
  {
    label: "Status",
    value: "Final-year CS @ Queen's University Belfast, incoming SWE @ Citi",
    icon: GraduationCap,
  }
];

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),rgba(15,23,42,0.04)_60%,transparent_72%)] blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),rgba(15,23,42,0.03)_55%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(5,7,10,0.28)_40%,#05070a_100%)]" />
      </div>

      <section id="about" className="relative scroll-mt-24 sm:scroll-mt-28">
        <div className="page-container section-space pt-14 sm:pt-20">
          <div className="grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-8">
              <div className="space-y-5">
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" />
                  About
                </span>
                <div className="space-y-4">
                  <h2 className="display-title max-w-[12ch] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95]">
                    Building useful software for complex environments.
                  </h2>
                  <p className="muted-copy max-w-[40rem]">
                    The work I enjoy most is turning messy workflows into reliable interfaces with
                    clean architecture behind them.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://github.com/syalc1234"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-50"
                  >
                    View projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className="surface-panel rounded-[1.45rem] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                      <item.icon className="mt-1 h-5 w-5 text-emerald-200/70" />
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/68">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="surface-panel p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.24em] text-white/52">
                    Quick facts
                  </p>
                  <Gauge className="h-5 w-5 text-white/56" />
                </div>
                <div className="mt-4 grid gap-3">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.2rem] border border-white/10 bg-black/22 px-4 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-white/42">
                            {fact.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-white">
                            {fact.value}
                          </p>
                        </div>
                        <fact.icon className="mt-1 h-5 w-5 text-white/55" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                  >
                    Email
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/seany2004/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.08]"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="surface-panel p-5 sm:p-6">
                <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.24em] text-white/52">
                  Currently
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Current priorities</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {nowItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="experience" className="relative scroll-mt-24 sm:scroll-mt-28">
        <div className="page-container section-space">
          <div className="surface-panel p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="display-title mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-none">
                  Roles that shaped how I build:
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <BadgeCheck className="h-4 w-4" />
                Internships
              </div>
            </div>


            <div className="relative mt-8">
              <div className="absolute left-2 top-0 h-full w-px bg-white/10 sm:left-3" />
              <ol className="space-y-6">
                {experience.map((role) => (
                  <li key={`${role.company}-${role.role}`} className="relative pl-8 sm:pl-10">
                    <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-emerald-300/80" />
                    <article className="rounded-[1.55rem] border border-white/10 bg-black/24 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
                            {role.company}
                          </p>
                          <h4 className="mt-2 text-lg font-semibold text-white">{role.role}</h4>
                          <p className="mt-1 text-sm text-white/58">{role.focus}</p>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 text-white/42" />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-24 sm:scroll-mt-28">
        <div className="page-container pb-20 sm:pb-24">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="surface-panel p-5 sm:p-6">
              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Outside of Work:
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-7 text-white/70">
                I serve on the board of Fence Like an Olympian in Belfast and work as a crew trainer
                at McDonald&apos;s. Outside work, I stay active through golf, running, the gym, and
                mentoring.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {outsideTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-accent inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-panel p-3 sm:p-4">
              <div className="aspect-video w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
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
      </section>
    </section>
  );
}
