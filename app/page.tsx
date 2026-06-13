"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { techStack1, techStack2 } from "./(components)/TechStack";
import { projects } from "./(components)/Projects";
import ProjectCard from "./(components)/ProjectCard";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Hero Zoom & Fade Animation
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        heroRef.current.style.setProperty("--scroll-progress", scrollProgress.toString());
      }

      // 2. Horizontal Scroll Showcase Animation
      if (horizontalRef.current && listRef.current) {
        const container = horizontalRef.current;
        const list = listRef.current;
        const rect = container.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;

        // The range of scroll for which the section is sticky
        const totalScrollRange = rect.height - viewHeight;
        const scrollOffset = -rect.top;

        // Calculate progress: 0 when sticky starts, 1 when sticky ends
        const progress = Math.min(Math.max(scrollOffset / totalScrollRange, 0), 1);

        const listWidth = list.scrollWidth;
        const maxTranslate = listWidth - viewWidth;

        if (maxTranslate > 0) {
          list.style.transform = `translateX(-${progress * maxTranslate}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="w-full relative bg-background text-foreground overflow-x-clip">

      {/* Decorative Blur Glow */}
      <div className="absolute top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO SECTION (Zoom-out and Send Behind) */}
      <div
        ref={heroRef}
        className="relative h-[120vh] w-full overflow-clip"
      >
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-all duration-75 ease-out"
          style={{
            transform: "scale(calc(1 + var(--scroll-progress, 0) * 1.5))",
            opacity: "calc(1 - var(--scroll-progress, 0) * 1.3)",
            filter: "blur(calc(var(--scroll-progress, 0) * 12px))",
          }}
        >
          {/* Subtle decorative grid/background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="z-10 text-center px-6 space-y-6">
            <span className="text-sm md:text-xl font-medium tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase block">
              Hi, I'm <strong className="font-extrabold text-neutral-900 dark:text-white">Karan Dayani</strong>
            </span>
            <h1 className="text-[13vw] sm:text-7xl md:text-9xl font-black tracking-tight leading-none bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
              SOFTWARE
              <br />
              DEVELOPER
            </h1>
            <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-4xl mx-auto font-medium">
              I design and build fast, beautiful and scalable software experiences for web and mobile. From sleek front-end interfaces to powerful full-stack solutions, I turn ideas into reality.
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-neutral-400">
            <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. TECH STACK SHOWCASE SECTION (Slides over Hero) */}
      <section className="relative z-20 bg-white dark:bg-neutral-950 border-t border-b border-neutral-200/50 dark:border-neutral-800/30 py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
              My Tech Stack
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Powering modern web experiences.
            </h3>
          </div>
          <div className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
            <p>
              I bridge the gap between design and technology by using a carefully selected stack of frameworks, databases, and tools. Each tool is chosen to deliver high performance, robust scaling, and exceptional user delight.
            </p>
          </div>
        </div>


        {/* Double-row auto-rotating carousel */}
        <div className="space-y-6 pause-hover">
          {/* Row 1: Left Scrolling */}
          <div className="relative flex overflow-x-hidden w-full">
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 shrink-0 animate-marquee-left py-2">
              {[...techStack1, ...techStack1, ...techStack1].map((tech, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/50 px-6 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-sm cursor-default group ${tech.color}`}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.iconClass || ""}`}
                    alt={tech.name}
                  />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Scrolling */}
          <div className="relative flex overflow-x-hidden w-full">
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 shrink-0 animate-marquee-right py-2">
              {[...techStack2, ...techStack2, ...techStack2].map((tech, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/50 px-6 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-sm cursor-default group ${tech.color}`}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.iconClass || ""}`}
                    alt={tech.name}
                  />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL SCROLL SHOWCASE */}
      <div
        ref={horizontalRef}
        className="relative h-[300vh] w-full bg-neutral-50 dark:bg-neutral-900 border-t border-b border-neutral-200/40 dark:border-neutral-800/40 z-20"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* Header info for showcase */}
          <div className="px-6 md:px-24 mb-12 max-w-5xl mx-auto w-full">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 tracking-tight text-neutral-900 dark:text-white">
              Selected Work
            </h2>
          </div>

          {/* Container wrapper for horizontal translation */}
          <div className="relative w-full">
            <div
              ref={listRef}
              className="flex flex-row gap-8 px-6 md:px-24 w-max transition-transform duration-75 ease-out"
            >
              {projects.slice(0, 4).map((project, idx) => (
                <ProjectCard project={project} key={idx} />
              ))}

              {/* VIEW MORE PROJECTS CARD */}
              <div className="w-[85vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] h-[580px] flex-shrink-0 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex flex-col items-center justify-center group transition-all duration-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700">
                <Link
                  href="/projects"
                  className="w-full h-full flex flex-col items-center justify-center space-y-6 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-950 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <div className="text-center space-y-2">
                    <span className="text-2xl font-bold tracking-tight block">View All Projects</span>
                    <span className="text-sm opacity-80 block">Explore the full archive</span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 4. FOOTER / CONTACT SECTION */}
      <section className="relative z-20 bg-white dark:bg-neutral-950 py-20 md:py-32 px-6 border-t border-neutral-200/50 dark:border-neutral-800/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            LET'S WORK
            <br />
            TOGETHER.
          </h2>
          <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
            Have a project in mind or want to talk design, code, or anything else? Reach out.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.03] shadow-md hover:shadow-lg"
            >
              <span>Say Hello</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

