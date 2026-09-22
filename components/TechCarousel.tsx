import { toolkit } from "@/lib/content";

export default function TechCarousel() {
  return (
    <section className="relative left-1/2 -mx-[50vw] w-screen text-[#261f17]">
      <div className="page-container py-8 sm:py-10">
        <div className="surface-panel overflow-hidden px-4 py-5 sm:px-6">
          <h2 className="mb-4 mt-2 text-xl font-semibold text-[#221910] sm:text-2xl">Toolkit:</h2>

          <div className="hairline mb-5" />

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f5eee3] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f5eee3] to-transparent sm:w-20" />

            {/* The list is rendered twice so the marquee can loop seamlessly. */}
            <div className="animate-marquee flex w-[200%] items-center gap-4 motion-reduce:animate-none sm:gap-6">
              {[...toolkit, ...toolkit].map(({ name, Icon, color }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f8f2e7]/82 px-4 py-2.5 text-[#3f3328] backdrop-blur-md sm:px-5"
                  aria-hidden={index >= toolkit.length}
                >
                  <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" style={{ color }} />
                  <span className="font-mono-accent text-[0.68rem] uppercase tracking-[0.22em] sm:text-[0.72rem]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
