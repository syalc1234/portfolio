// app/layout.tsx (RootLayout)
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Yalcin | Software Engineer",
  description: "Portfolio for Sean Yalcin, a software engineer focused on fintech systems and high-signal product delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${jetBrainsMono.variable} ${fraunces.variable} overflow-x-hidden bg-[#e3ddd3] text-[#261f17] antialiased`}
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(196,157,105,0.28),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(45,106,91,0.14),transparent_20%),linear-gradient(180deg,#efe7db_0%,#e3ddd3_52%,#d8cfc1_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(53,40,28,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(53,40,28,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]"
        />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
