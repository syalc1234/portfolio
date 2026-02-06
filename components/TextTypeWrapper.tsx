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
      text={["Software engineer focused on fintech"]}
      typingSpeed={100}
      pauseDuration={1000}
      showCursor
      cursorCharacter="|"
      className={`block w-full ${className}`}
    />
  );
}
