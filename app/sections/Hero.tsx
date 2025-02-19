import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
import { TypingEffect } from "../components/TypingEffect";

const Hero = () => {
  return (
    <section className="py-10 md:h-96 flex flex-col items-center justify-center">
      <div className="md:space-y-4">
        <TypingEffect text="Hi, I'm Karan Dayani." type="head" speed={0.05} />
        <div className="hidden md:block">
          <TypingEffect
            text="I design and build fast, beautiful, and scalable web experiences. From sleek front-end interfaces to powerful full-stack solutions, I turn ideas into reality. Let’s build something amazing together!"
            type="desc"
            speed={0.03}
          />
        </div>
        <div className="md:hidden">
          <TypingEffect
            text="I build interactive, performant, and scalable web applications."
            type="desc"
            speed={0.03}
          />
        </div>
      </div>
      <motion.div
        className="pt-5 md:pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <button className="btn btn-primary">Contact</button>
        <button className="btn btn-text">
          <span>About me</span>
          <IoIosArrowRoundForward className=" size-5 md:size-6 pt-0.5" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
