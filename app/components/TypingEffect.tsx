"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({
  text = "Typing Effect",
  type,
  speed = 0.2,
}: {
  text: string;
  type: string;
  speed: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      className={
        type === "head"
          ? `text-[8vw] sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold tracking-tighter md:leading-[3.5rem] lg:leading-[4rem]`
          : `text-[5vw] sm:text-xl md:text-2xl lg:text-3xl text-center font-medium tracking-tight leading-[1.5] sm:leading-[1.6] md:leading-[2rem] lg:leading-[2.5rem]`
      }
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: speed, delay: index * speed }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
