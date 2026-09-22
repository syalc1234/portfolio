"use client"

import {motion, useReducedMotion, useScroll, useTransform, type MotionValue} from "motion/react"
import {Fragment, useRef} from "react"

const START_OPACITY = 0.15
// Words start fading in across the first 80% of the scroll range, each taking 20% to reach full opacity.
const SPREAD = 0.8
const WORD_DURATION = 0.2

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
    const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD
    const opacity = useTransform(progress, [start, start + WORD_DURATION], [START_OPACITY, 1])

    return (
        <motion.span aria-hidden="true" style={reducedMotion ? undefined : {opacity}}>
            {children}
        </motion.span>
    )
}

export default function TextScrollReveal({text}: {text: string}) {
    const ref = useRef<HTMLDivElement>(null)
    const reducedMotion = useReducedMotion()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end center"],
    })
    const words = text.split(" ")

    return (
        <>
            <div ref={ref} className="scroll-word-reveal__layout">
                <div className="scroll-word-reveal__content">
                    <h2 className="scroll-word-reveal__heading display-title" aria-label={text}>
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
        .scroll-word-reveal__layout {
          grid-template-columns: 1fr;
          gap: 0;
        }
      }
    `}</style>
        </>
    )
}
