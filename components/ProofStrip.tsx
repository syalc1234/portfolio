"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { Handshake, Rocket, Users } from "lucide-react";

type ProofItem = {
  org: string;
  role: string;
  href?: string;
  Icon?: ComponentType<{ className?: string }>;
  logoSrc?: string;
  logoAlt?: string;
};

type ProofStripProps = {
  variant?: "full" | "embedded";
  className?: string;
};

const ITEMS: ProofItem[] = [
  {
    org: "Citi",
    role: "Equity Derivs / Custody",
    logoSrc: "/Citi_logo_March_2023.svg.png",
    logoAlt: "Citi logo",
  },
  {
    org: "Allstate",
    role: "QA Engineering",
    logoSrc: "/allstate-insurance-2.svg",
    logoAlt: "Allstate logo",
  },
  {
    org: "AIMA",
    role: "Startup (Client demos / product)",
    logoSrc: "/aima-logo-nobg-qz0s47Vk.png",
    Icon: Rocket,
  },
  {
    org: "QUB Data & AI Society",
    role: "Founder",
    logoSrc: "/DAI.png",
    Icon: Users,
  },
  {
    org: "Consulting & Entrepreneurship Society",
    role: "Co-Founder",
    logoSrc: "/Consulting.png",
    Icon: Handshake,
  },
];

export default function ProofStrip({ variant = "full", className = "" }: ProofStripProps) {
  const inner = (
    
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">

        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
          {ITEMS.map((item) => {
            const Icon = item.Icon;
            const Content = (
              <>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80">
                  {item.logoSrc ? (
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt || `${item.org} logo`}
                      width={40}
                      height={40}
                      className="h-6 w-6 object-contain"
                    />
                  ) : Icon ? (
                    <Icon className="h-5 w-5" />
                  ) : null}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">
                    {item.org}
                  </span>
                  <span className="block text-xs text-white/60">{item.role}</span>
                </span>
              </>
            );

            return (
              <li key={`${item.org}-${item.role}`} className="snap-start">
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex min-w-[240px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 motion-reduce:transform-none motion-reduce:transition-none sm:min-w-[260px]"
                  >
                    {Content}
                  </a>
                ) : (
                  <div className="group flex min-w-[240px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 motion-reduce:transform-none motion-reduce:transition-none sm:min-w-[260px]">
                    {Content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
  );

  if (variant === "embedded") {
    return <div className="w-full">{inner}</div>;
  }

  return (
    <section className="relative left-1/2 -mx-[50vw] w-screen bg-[#05070a] text-white pt-5 pb-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="mt-8 sm:mt-10">{inner}</div>
      </div>
    </section>
  );
}
