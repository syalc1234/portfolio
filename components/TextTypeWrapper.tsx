"use client";

import TextType from "./TextType";

export default function TextTypeWrapper() {
  return (
    <TextType
      text={["Welcome to my Portfolio", "Have a look around!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor
      cursorCharacter="|"
      onSentenceComplete={() => {
        console.log("Sentence finished typing!");
      }}
    />
  );
}
