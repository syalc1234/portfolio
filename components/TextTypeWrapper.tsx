"use client";

import type { ElementType } from "react";
import TextType from "./TextType";

type TextTypeWrapperProps = {
  className?: string;
  as?: ElementType;
};

export default function TextTypeWrapper({ className = "", as }: TextTypeWrapperProps) {
  return (
    <TextType
      as={as}
      text={[
        "Software engineer for fintech systems",
        "Full-stack builder.",
      ]}
      typingSpeed={55}
      pauseDuration={1800}
      deletingSpeed={22}
      showCursor
      cursorCharacter="|"
      className={`block w-full ${className}`}
    />
  );
}
