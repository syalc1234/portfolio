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
    role: "Equity Derivatives & Custody",
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
    role: "Product demos and engineering",
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
    org: "Consulting & Entrepreneurship",
    role: "Co-founder",
    logoSrc: "/Consulting.png",
    Icon: Handshake,
  },
];

export default function ProofStrip({ variant = "full", className = "" }: ProofStripProps) {
  const inner = (
    <div className={`surface-panel px-4 py-4 sm:px-6 sm:py-5 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono-accent text-[0.68rem] uppercase tracking-[0.24em] text-white/48">
            Selected experience
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">
            Teams and organisations that shaped how I build.
          </p>
        </div>

        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
          {ITEMS.map((item) => {
            const Icon = item.Icon;

            return (
              <li key={`${item.org}-${item.role}`} className="snap-start">
                <div className="flex min-w-[220px] items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 sm:min-w-[235px]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80">
                    {item.logoSrc ? (
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt || `${item.org} logo`}
                        width={44}
                        height={44}
                        sizes="36px"
                        className="h-7 w-7 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="h-5 w-5" />
                    ) : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">{item.org}</span>
                    <span className="block text-[0.72rem] text-white/58 sm:text-xs">
                      {item.role}
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  if (variant === "embedded") {
    return <div className="w-full">{inner}</div>;
  }

  return (
    <section className="relative left-1/2 -mx-[50vw] w-screen text-white">
      <div className="page-container py-3 sm:py-5">
        {inner}
      </div>
    </section>
  );
}
