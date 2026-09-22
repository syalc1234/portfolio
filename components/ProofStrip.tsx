import Image from "next/image";
import { proofItems } from "@/lib/content";

export default function ProofStrip() {
  return (
    <section className="relative left-1/2 -mx-[50vw] w-screen text-[#261f17]">
      <div className="page-container py-3 sm:py-5">
        <div className="surface-panel flex flex-col gap-5 px-4 py-4 sm:px-6 sm:py-5">
          <h2 className="mt-2 text-xl font-semibold text-[#221910] sm:text-2xl">Experience:</h2>
          <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {proofItems.map((item) => (
              <li
                key={`${item.org}-${item.role}`}
                className="flex min-w-[220px] snap-start items-center gap-3 rounded-[1.15rem] border border-black/10 bg-[#efe7db]/90 px-4 py-3 sm:min-w-[235px]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f9f3ea]">
                  <Image
                    src={item.logoSrc}
                    alt={`${item.org} logo`}
                    width={44}
                    height={44}
                    sizes="36px"
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#221910]">{item.org}</span>
                  <span className="block text-[0.72rem] text-[#685c4e] sm:text-xs">{item.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
