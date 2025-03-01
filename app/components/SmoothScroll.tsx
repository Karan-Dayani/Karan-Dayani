"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"; // Fixed import
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0); // Store window.innerHeight
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - viewportHeight); // Use viewportHeight state
  });

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
        setViewportHeight(window.innerHeight); // Update viewport height
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
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
