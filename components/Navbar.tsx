"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

const ICON_BUTTON =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-10 sm:w-10";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const listRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const indicatorStyle = useMemo(
    () => ({
      width: `${indicator.width}px`,
      transform: `translateX(${indicator.left}px)`,
    }),
    [indicator.left, indicator.width]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const container = listRef.current;
      const activeEl = linkRefs.current[activeId];
      if (!container || !activeEl) return;

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeId]);

  useEffect(() => {
    if (!drawerOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [drawerOpen]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = drawerOpen ? "hidden" : previous || "";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-3 z-50 flex w-full justify-center px-3 sm:top-4 sm:px-4">
        <nav
          className={`relative isolate flex w-full max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 px-3 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors motion-reduce:transition-none sm:px-6 sm:py-3 sm:shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:backdrop-blur-xl ${
            scrolled ? "bg-[#07111a]/82" : "bg-[#07111a]/58"
          }`}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="font-mono-accent flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold uppercase tracking-[0.2em]">
              SY
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight sm:text-base">
                Sean Yalcin
              </span>
              <span className="font-mono-accent hidden text-[0.62rem] uppercase tracking-[0.22em] text-white/45 sm:block">
                Software Engineer
              </span>
            </div>
          </Link>

          <div className="relative hidden items-center justify-center md:flex">
            <div
              ref={listRef}
              className="relative flex items-center gap-4 rounded-full px-2 py-2 text-sm font-medium text-white/70"
            >
              <span
                className="pointer-events-none absolute left-0 top-1/2 h-9 -translate-y-1/2 rounded-full bg-white/10 transition-transform duration-300 motion-reduce:transition-none"
                style={indicatorStyle}
                aria-hidden
              />
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  ref={(el) => {
                    linkRefs.current[item.id] = el;
                  }}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "page" : undefined}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 px-3 py-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                    activeId === item.id ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              className={ICON_BUTTON}
              href="https://github.com/syalc1234"
              aria-label="GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              className={ICON_BUTTON}
              href="https://www.linkedin.com/in/seany2004/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <button
            type="button"
            className={`md:hidden ${ICON_BUTTON}`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[80vw] max-w-sm flex-col gap-8 border-l border-white/10 bg-[#0b0f14]/95 p-6 text-white shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono-accent text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Menu
          </span>
          <button
            type="button"
            className={ICON_BUTTON}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 text-lg font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-3 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <a
            href="mailto:syalcin01@qub.ac.uk"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <div className="flex items-center gap-3">
            <a
              className={ICON_BUTTON}
              href="https://github.com/syalc1234"
              aria-label="GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              className={ICON_BUTTON}
              href="https://www.linkedin.com/in/seany2004/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
