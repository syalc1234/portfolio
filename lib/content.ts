// All site copy and links live here, so most content edits only touch this file.
import type { ComponentType, CSSProperties } from "react";
import { Briefcase, Globe, GraduationCap, Layers, Rocket, ShieldCheck, Users } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiJavascript,
  SiKotlin,
  SiLangchain,
  SiOpenai,
  SiPython,
  SiReact,
  SiRedhat,
  SiSelenium,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Icon = ComponentType<{ className?: string; style?: CSSProperties }>;

type Tech = { name: string; Icon: Icon; color: string };

export const links = {
  email: "syalcin01@qub.ac.uk",
  github: "https://github.com/syalc1234",
  linkedin: "https://www.linkedin.com/in/seany2004/",
};

const tech = {
  java: { name: "Java", Icon: FaJava, color: "#F97316" },
  docker: { name: "Docker", Icon: SiDocker, color: "#38BDF8" },
  typescript: { name: "TypeScript", Icon: SiTypescript, color: "#60A5FA" },
  javascript: { name: "JavaScript", Icon: SiJavascript, color: "#EAB308" },
  react: { name: "React", Icon: SiReact, color: "#22D3EE" },
  python: { name: "Python", Icon: SiPython, color: "#F59E0B" },
  angular: { name: "Angular", Icon: SiAngular, color: "#F43F5E" },
  kotlin: { name: "Kotlin", Icon: SiKotlin, color: "#A855F7" },
  langchain: { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  openai: { name: "OpenAI", Icon: SiOpenai, color: "#10A37F" },
  selenium: { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
  rhel: { name: "RHEL", Icon: SiRedhat, color: "#EE0000" },
  vercel: { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
} satisfies Record<string, Tech>;

// ---- Hero ----

export const heroLines = ["Software engineer for fintech systems", "Full-stack builder."];

// ---- "Experience" logo strip ----

export const proofItems: { org: string; role: string; logoSrc: string }[] = [
  { org: "Citi", role: "Equity Derivatives & Custody", logoSrc: "/Citi_logo_March_2023.svg.png" },
  { org: "Allstate", role: "QA Engineering", logoSrc: "/allstate-insurance-2.svg" },
  { org: "AIMA", role: "SWE & Product", logoSrc: "/aima-logo-nobg-qz0s47Vk.png" },
  { org: "Data & AI Society", role: "Co-Founder & Treasurer", logoSrc: "/DAI.png" },
  { org: "Consulting & Entrepreneurship Society", role: "Co-founder & VP", logoSrc: "/Consulting.png" },
];

// ---- Toolkit carousel ----

export const toolkit: Tech[] = [
  tech.java,
  tech.docker,
  tech.typescript,
  tech.react,
  tech.python,
  tech.angular,
  tech.rhel,
  tech.vercel,
];

// ---- About ----

export const aboutHeadline = "Building useful software for complex environments.";

export const highlights: { title: string; Icon: Icon; bullets: string[] }[] = [
  {
    title: "Full-Stack Builder",
    Icon: Layers,
    bullets: ["API-to-UI delivery for real users.", "Clear frontends for data-heavy workflows."],
  },
  {
    title: "Quality Mindset",
    Icon: ShieldCheck,
    bullets: ["QA automation with Selenium + Java.", "Strong focus on reproducibility and edge cases."],
  },
  {
    title: "Startup Execution",
    Icon: Rocket,
    bullets: ["Fast iteration from user feedback.", "Demo-ready delivery without losing product discipline."],
  },
  {
    title: "Leadership",
    Icon: Users,
    bullets: ["Built student communities and events.", "Comfortable communicating across teams."],
  },
];

export const quickFacts: { label: string; value: string; Icon: Icon }[] = [
  { label: "Location", value: "London", Icon: Globe },
  {
    label: "Status",
    value: "SWE @ Citi",
    Icon: Briefcase,
  },
  {
    label: "Education",
    value: "First Class Honours Graduate From Queen's University Belfast",
    Icon: GraduationCap
  }
];

export const currently = [
  "Working at Citi as a Graduate Software Engineer"
];

// ---- Experience timeline ----

export type Job = {
  company: string;
  role: string;
  focus: string;
  dates?: string;
  current?: boolean;
  tech: Tech[];
  bullets: string[];
};

export const experience: Job[] = [
    {
    company: "APRIL AI HUB",
    role: "AI Researcher",
    focus: "Agentic AI for Triboelectric Nanogenerators",
    dates: "Jun 2026 – Jul 2026",
    current: false,
    tech: [tech.python, tech.langchain, tech.openai],
    bullets: [
      "Built a RAG + multi-agent pipeline (LangGraph, ChromaDB) that extracted 400+ metrics from 24 research papers at 80% precision and recall.",
      "Research accepted for presentation at the UK AI Research Symposium (UKAIRS).",
    ],
  },
  {
    company: "AIMA",
    role: "Full Stack SWE (Python + React)",
    focus: "Product demos and feature delivery",
    dates: "Jun 2025 – Jan 2026",
    current: false,
    tech: [tech.python, tech.react, tech.javascript],
    bullets: [
      "Shipped investor-facing demo features on cycles measured in days, not sprints.",
      "Closed the loop between client feedback sessions and the next release.",
    ],
  },
  {
    company: "Citi",
    role: "Full Stack (React + TypeScript + Kotlin)",
    focus: "Equity Derivatives",
    tech: [tech.react, tech.typescript, tech.kotlin],
    bullets: [
      "Built internal tooling to surface trade lifecycle insights for desks.",
      "Designed an architecture diagram to support intraday trade amendments in order booking.",
    ],
  },
  {
    company: "Citi",
    role: "Full Stack SWE (Angular + TypeScript + Java)",
    focus: "Custody platforms",
    tech: [tech.angular, tech.typescript, tech.java],
    bullets: [
      "Shipped features that improved data visibility across custody flows.",
      "Supported API integrations and front-end views for operations teams.",
    ],
  },
  {
    company: "Allstate",
    role: "QA Engineering (Java + Selenium)",
    focus: "Automation and reliability",
    tech: [tech.java, tech.selenium],
    bullets: [
      "Implemented Selenium test suites to harden critical user flows.",
      "Performed exploratory and regression testing and logged critical defects.",
    ],
  },
];

// ---- Outside of work ----

export const outsideOfWork =
  "I serve on the board of Fence Like an Olympian in Belfast and work as a crew trainer at McDonald's. Outside work, I stay active through golf, running, the gym, and mentoring.";

export const outsideTags = ["Running", "Golf", "Volunteering", "Mentoring", "Hackathons"];
