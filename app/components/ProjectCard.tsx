"use client";
import { motion } from "motion/react";

interface Project {
  image: string;
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

export default function ProjectCard({
  project,
  effect,
}: {
  project: Project;
  effect: boolean;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-white/20 bg-black p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/40 shadow-lg"
      {...(effect
        ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            viewport: { once: true },
          }
        : {})}
    >
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-lg">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="mt-5 space-y-3 text-white">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="border border-white/20 text-xs px-3 py-1 rounded-md text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-4">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              className="text-xs sm:text-sm px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all"
            >
              Live Demo
            </a>
          )}
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              className="text-xs sm:text-sm px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
