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
          ? `text-2xl text-center sm:text-4xl font-bold tracking-tighter md:text-5xl md:leading-[3.5rem] lg:text-6xl lg:leading-[4rem]`
          : `text-base text-center sm:text-lg font-medium tracking-tight md:text-xl md:leading-[2rem] lg:text-2xl lg:leading-[2.5rem]`
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
