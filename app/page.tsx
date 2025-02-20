"use client";
import React from "react";
import { motion } from "motion/react";
import Hero from "./sections/Hero";
import { Ticker } from "./sections/Ticker";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <Ticker />
        <Projects />
        <Services />
      </motion.div>
    </>
  );
}
