import { ArrowUpRight, Sparkles } from "lucide-react";
import BulletList from "@/components/BulletList";
import TextScrollReveal from "@/components/TextScrollReveal";
import { aboutHeadline, currently, highlights, links, quickFacts } from "@/lib/content";

const PRIMARY_BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#2d6a5b] text-sm font-semibold text-[#f8f3eb] transition-colors hover:bg-[#25584b]";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 sm:scroll-mt-28">
      <div className="page-container section-space pt-14 sm:pt-20">
        <div className="grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                About
              </span>
              <TextScrollReveal text={aboutHeadline} />
              <div className="flex flex-col sm:flex-row">
                <a href={links.github} className={`${PRIMARY_BUTTON} px-5 py-3`}>
                  View projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ title, Icon, bullets }) => (
                <article key={title} className="surface-panel rounded-[1.45rem] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="mt-2 text-lg font-semibold text-[#221910]">{title}</h3>
                    <Icon className="mt-1 h-5 w-5 text-[#2d6a5b]/75" />
                  </div>
                  <BulletList items={bullets} className="mt-4 space-y-2" />
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="surface-panel p-5 sm:p-6">
              <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.24em] text-[#7a6b59]">
                Quick facts
              </p>
              <div className="mt-4 grid gap-3">
                {quickFacts.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 rounded-[1.2rem] border border-black/10 bg-[#efe7db]/88 px-4 py-4"
                  >
                    <div>
                      <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[#867664]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#221910]">{value}</p>
                    </div>
                    <Icon className="mt-1 h-5 w-5 text-[#7a6b59]" />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3">
                <a href={`mailto:${links.email}`} className={`${PRIMARY_BUTTON} px-4 py-3`}>
                  Email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#f2ebdf] px-4 py-3 text-sm font-semibold text-[#46392d] transition-colors hover:bg-[#eadfce]"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="surface-panel p-5 sm:p-4">
              <h3 className="mt-2 text-2xl font-semibold text-[#221910]">Currently:</h3>
              <BulletList items={currently} className="mt-4 space-y-3" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
