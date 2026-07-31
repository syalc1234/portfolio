"use client"

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from "motion/react"
import {Fragment, useRef} from "react"

const START_OPACITY = 0.15
const SPREAD = 0.8
const WORD_DURATION = 0.2

export interface WordProgressRange {
    start: number
    end: number
}

function getWordProgressRange(
    index: number,
    count: number,
): WordProgressRange {
    const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD

    return {
        start,
        end: Math.min(1, start + WORD_DURATION),
    }
}

export function getWordOpacity(
    progress: number,
    {start, end}: WordProgressRange,
    startOpacity = START_OPACITY,
): number {
    if (progress <= start) return startOpacity
    if (progress >= end) return 1

    const wordProgress = (progress - start) / (end - start)
    return startOpacity + (1 - startOpacity) * wordProgress
}

function Word({
                  children,
                  progress,
                  index,
                  count,
                  reducedMotion,
              }: {
    children: string
    progress: MotionValue<number>
    index: number
    count: number
    reducedMotion: boolean
}) {
    const range = getWordProgressRange(index, count)
    const opacity = useTransform(progress, (latest) =>
        getWordOpacity(latest, range),
    )

    return (
        <motion.span
            aria-hidden="true"
            style={reducedMotion ? undefined : {opacity}}
        >
            {children}
        </motion.span>
    )
}

export default function TextScrollWordReveal(props: { text: string }) {
    const sectionRef = useRef<HTMLElement>(null)
    const reducedMotion = useReducedMotion()
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    })
    const words = props.text.split(" ")

    return (
        <>
            <section ref={sectionRef}>
                    <div className="scroll-word-reveal__layout">

                        <div className="scroll-word-reveal__content">
                            <h2 className=" scroll-word-reveal__heading display-title max-w-[12ch] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95]"
                                id="scroll-word-reveal-heading"
                                aria-label={props.text}
                            >
                                {words.map((word, index) => (
                                    <Fragment key={`${word}-${index}`}>
                                        <Word
                                            progress={scrollYProgress}
                                            index={index}
                                            count={words.length}
                                            reducedMotion={Boolean(reducedMotion)}
                                        >
                                            {word}
                                        </Word>
                                        {index < words.length - 1 ? " " : null}
                                    </Fragment>
                                ))}
                            </h2>
                        </div>
                    </div>
            </section>
            <Stylesheet/>
        </>
    )
}

/**
 * ==============   Styles   ================
 */

function Stylesheet() {
    return (
        <style>{`
      .scroll-word-reveal__layout {
        width: 100%;
        max-width: 1024px;
        display: grid;
        grid-template-columns: 1px minmax(0, 1fr);
        align-items: start;
        gap: 40px;
        margin: 0 auto;
      }

      .scroll-word-reveal__content {
        max-width: 900px;
      }

      .scroll-word-reveal__kicker {
        margin: 0 0 40px;
        color: var(--foreground-feint);
        font-family: var(--font-mono);
        font-size: 11px;
        font-variation-settings: "wght" 560;
        letter-spacing: 0.16em;
        line-height: 1;
        text-transform: uppercase;
      }

      .scroll-word-reveal__heading {
        max-width: 26ch;
        margin: 0;
        color: var(--foreground);
        font-size: clamp(36px, 5.4vw, 56px);
        font-variation-settings: "opsz" 56, "wght" 680;
        letter-spacing: -0.045em;
        line-height: 1.08;
        text-wrap: balance;
      }

      @media (max-width: 600px) {
        .scroll-word-reveal__stage {
          padding: 48px 24px;
        }

        .scroll-word-reveal__layout {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .scroll-word-reveal__progress {
          display: none;
        }

        .scroll-word-reveal__kicker {
          margin-bottom: 28px;
        }
      }
    `}</style>
    )
}
