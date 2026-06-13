"use client";

import { useState } from "react";
import { projects } from "../(components)/Projects";
import ProjectCard from "../(components)/ProjectCard";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "client" | "personal">("all");

  const filteredProjects = projects.filter((project) => {
    // 1. Search Query Filter (Title, Desc, Category)
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Category Filter (Paid vs Personal)
    const matchesCategory =
      activeFilter === "all" ||
      (activeFilter === "client" && project.paid === "y") ||
      (activeFilter === "personal" && project.paid === "n");

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="w-full relative min-h-screen bg-background text-foreground overflow-x-hidden pt-28 pb-20">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Blur Glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />


      {/* Decorative Glow elements
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-violet-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-600/5 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" /> */}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 px-4 py-2 rounded-full shadow-sm">
            <span className="text-xs font-bold tracking-[0.15em] text-blue-600 dark:text-blue-400 uppercase">
              Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent pb-2">
            Selected Works
          </h1>

          <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
            Explore a curated selection of systems, web apps, client projects, and full-stack solutions I've architected and implemented.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white/40 dark:bg-neutral-950/40 p-4 rounded-3xl border border-neutral-200/55 dark:border-neutral-800/35 backdrop-blur-md">
          {/* Tabs Filter */}
          <div className="flex bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-2xl w-full md:w-auto">
            {(["all", "client", "personal"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeFilter === filter
                  ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                  }`}
              >
                {filter === "all" && "All Works"}
                {filter === "client" && "Client Work"}
                {filter === "personal" && "Personal Projects"}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400 bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400/80 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <ProjectCard project={project} key={idx} className="w-full" />
            ))}
          </div>
        ) : (
          /* Empty Search Results state */
          <div className="text-center py-20 bg-white/40 dark:bg-neutral-950/40 rounded-3xl border border-dashed border-neutral-200 dark:border-neutral-800/80 p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">No projects found</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto mb-6">
              I couldn't find any projects matching "{searchQuery}" under this category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
