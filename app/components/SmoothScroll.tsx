"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0); // Store window.innerHeight
  const { scrollY } = useScroll(); // Track actual scroll, not scroll progress
  const smoothScrollY = useSpring(scrollY, { mass: 0.1 });

  const y = useTransform(smoothScrollY, (value) => {
    return value ? -value : 0; // Directly map scroll position to movement
  });

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Reset scroll position to top when route changes
      window.scrollTo({ top: 0, behavior: "instant" });

      const handleResize = () => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
        setViewportHeight(window.innerHeight);
      };

      handleResize(); // Set initial values
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [pathname]); // Runs when pathname changes

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
