"use client";

import TextType from "./TextType";

type TextTypeWrapperProps = {
  className?: string;
};

export default function TextTypeWrapper({ className = "" }: TextTypeWrapperProps) {
  return (
    <TextType
      text={["Software engineer focused on fintech"]}
      typingSpeed={100}
      pauseDuration={1000}
      showCursor
      cursorCharacter="|"
      className={`block w-full ${className}`}
    />
  );
}
