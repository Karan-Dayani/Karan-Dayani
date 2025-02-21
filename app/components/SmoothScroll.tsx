"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef, pathname]);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div className="scrollBody" ref={contentRef} style={{ y }}>
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
