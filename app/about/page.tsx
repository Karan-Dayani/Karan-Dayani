"use client";

import Link from "next/link";

export default function AboutPage() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    backend: ["Node.js", "PostgreSQL", "MongoDB", "Supabase", "Firebase", "Prisma"],
    tools: ["Git & GitHub", "Figma", "Python", "REST APIs", "Agile Workflow"],
  };

  const timeline = [
    {
      year: "2026",
      role: "Lead Software Architect (Independent)",
      project: "Soneraj Distributors",
      desc: "Designed and implemented a full-scale e-commerce and secure inventory tracking system for specialized wholesale distribution, optimising client-side transactions.",
    },
    {
      year: "2025",
      role: "Full-Stack Developer",
      project: "BookShelf",
      desc: "Architected a custom digital library management database. Implemented transaction tracking, fine systems for delayed returns, and administrative override policies.",
    },
    {
      year: "2024",
      role: "Front-End & Collaborative Developer",
      project: "BODZ, Cravish & Binge It",
      desc: "Worked alongside engineering teams to build affiliate platforms, custom watchlist management hubs, and high-performance social recipe sharing apps.",
    },
    {
      year: "2023",
      role: "Aspiring UI/UX Designer & Developer",
      project: "ShoeRack Showcase",
      desc: "Began specialized study in modern responsive design, design systems, and frontend state management, paving the path to production-grade development.",
    },
  ];

  return (
    <main className="w-full relative min-h-screen bg-background text-foreground overflow-x-hidden pt-28 pb-20">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Glow elements */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Image Card & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* AI-generated minimalist workspace image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-violet-600 to-indigo-600 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative rounded-3xl border border-neutral-200/60 dark:border-neutral-800/50 bg-white dark:bg-neutral-950 overflow-hidden shadow-md group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src="/about-illustration.png"
                  alt="Karan Dayani's Workspace Illustration"
                  className="w-full h-auto object-cover aspect-square dark:brightness-90 opacity-95 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md px-4 py-3 rounded-2xl border border-neutral-200/20 dark:border-neutral-800/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase block">Based in</span>
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Nagpur, India</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase block">Timezone</span>
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">IST / GMT+5:30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/30 bg-white/40 dark:bg-neutral-950/40 shadow-sm backdrop-blur-md space-y-4">
              <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-neutral-800 dark:text-neutral-200 leading-snug">
                  B.Tech in Computer Science & Engineering (AI & ML)
                </h4>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  Jhulelal Institute of Technology (JIT)
                </p>
                <span className="inline-block text-[10px] font-extrabold tracking-wide uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded">
                  2023 — 2027
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Intro text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase block">
              About me
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent pb-1">
              Hi, I'm Karan Dayani.
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-200">
              A software developer building beautiful, scalable digital experiences.
            </h2>
            <div className="space-y-4 text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
              <p>
                I specialize in crafting high-quality, production-grade applications that bridge the gap between design and robust full-stack engineering. With expertise spanning TypeScript, Next.js, React, Node.js, and modern databases, I help turn complex concepts into performant user experiences.
              </p>
              <p>
                My process centers on code readability, modular scalability, and fluid UI design. Whether collaborating with engineering teams on deal hubs and social platforms, or architecting custom inventory systems for enterprise clients, I strive to build software that is both elegant and durable.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <section className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              My Core Focus & Principles
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              Every system I build is guided by three core engineering values to ensure long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Clean Architectures</h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                Designing type-safe, modular, and maintainable systems using clean TypeScript architectures and well-structured database schemas.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.944-8.944m-8.944 0L15 3l-.813 5.096m0 0L6 17.056" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Delightful UI/UX</h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                Implementing smooth micro-interactions, responsive fluid grids, and transitions that give users a tactile, high-end digital experience.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3 12h18M12 9h.01M12 15h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Performance & Scaling</h3>
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                Optimizing bundles, queries, and media formats to deliver lightning-fast page loading and robust scalability under heavy database load.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Category Grid */}
        <section className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Tech Stack & Toolset
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              The languages, frameworks, and workflows I use to bring modern applications to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-6">
                Client / Front-End
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/40 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm hover:scale-[1.02] transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm">
              <h3 className="text-base font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-6">
                Server / Back-End
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/40 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm hover:scale-[1.02] transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Workflows */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/40 dark:bg-neutral-950/40 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm">
              <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-6">
                Systems & Design
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/40 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm hover:scale-[1.02] transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Professional Journey
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              A historical look at my roles, collaborations, and project milestones.
            </p>
          </div>

          <div className="relative border-l border-neutral-200 dark:border-neutral-800 max-w-3xl mx-auto pl-8 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot indicator */}
                <div className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-neutral-100 dark:bg-neutral-900 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500">
                      Project: <span className="text-neutral-600 dark:text-neutral-300 font-extrabold">{item.project}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer Block */}
        <section className="relative rounded-3xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200/80 dark:border-neutral-800/40 p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-blue-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Like my work or want to brainstorm?
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed font-medium">
              I'm always open to discussing new projects, design systems, and frontend/full-stack collaborations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-950 hover:bg-neutral-900 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-black text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                View Selected Works
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800/80 text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
