import { outsideOfWork, outsideTags } from "@/lib/content";

export default function OutsideWorkSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 sm:scroll-mt-28">
      <div className="page-container pb-20 sm:pb-24">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-panel p-5 sm:p-6">
            <h2 className="mt-2 text-xl font-semibold text-[#221910] sm:text-2xl">Outside of Work:</h2>
            <p className="mt-3 max-w-prose text-sm leading-7 text-[#5d5246]">{outsideOfWork}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {outsideTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-accent inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#efe7db] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#66594b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-panel p-3 sm:p-4">
            <div className="aspect-video w-full overflow-hidden rounded-[1.35rem] border border-black/10 bg-[#e8dece] shadow-[0_12px_30px_rgba(78,60,42,0.12)]">
              <video className="h-full w-full object-cover" src="/swing.mp4" controls playsInline preload="metadata">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
