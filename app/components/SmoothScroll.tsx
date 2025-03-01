"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { scrollY } = useScroll(); // Track actual scroll position
  const smoothScrollY = useSpring(scrollY, { mass: 0.1 });

  const y = useTransform(smoothScrollY, (value) => -value); // Directly map scroll position

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Reset scroll to top on route change
      window.scrollTo({ top: 0, behavior: "instant" });

      const handleResize = () => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      };

      handleResize(); // Set initial height
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [pathname]);

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
