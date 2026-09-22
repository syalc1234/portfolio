'use client';

import { type ElementType, useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface TextTypeProps {
  text: string[];
  as?: ElementType;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

// Types each line out, pauses, deletes it, then moves on to the next line (looping forever).
export default function TextType({
  text,
  as: Component = 'div',
  className = '',
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: TextTypeProps) {
  const reducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const line = text[lineIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && displayed.length < line.length) {
      timeout = setTimeout(() => setDisplayed(line.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting) {
      if (text.length > 1) timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
    } else {
      setIsDeleting(false);
      setLineIndex((i) => (i + 1) % text.length);
    }

    return () => clearTimeout(timeout);
  }, [text, lineIndex, displayed, isDeleting, reducedMotion, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <Component className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
      <span>{reducedMotion ? text[0] : displayed}</span>
      <span className="animate-cursor-blink ml-1 inline-block motion-reduce:animate-none">|</span>
    </Component>
  );
}
