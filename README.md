# Portfolio

Personal portfolio site built with Next.js, Tailwind CSS v4 and Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

- `lib/content.ts` – **all text, links, experience entries and tech icons.** Most edits only need this file.
- `app/page.tsx` – the order of sections on the home page.
- `app/layout.tsx` – fonts, page background, navbar.
- `app/globals.css` – theme colors and shared classes (`surface-panel`, `eyebrow`, `page-container`, …).
- `components/` – one file per section (`AboutSection`, `ExperienceSection`, `OutsideWorkSection`, `ProofStrip`, `TechCarousel`) plus the animated pieces (`LetterGlitch`, `TextType`, `TextScrollReveal`).
- `public/` – logos and the golf swing video.

To add a navbar link, add the section's `id` to `NAV_ITEMS` in `components/Navbar.tsx`.
