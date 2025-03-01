"use client";
import React from "react";
import { motion } from "motion/react";
import { Ticker } from "../sections/Ticker";
import ProjectCard from "../components/ProjectCard";
import SD from "@/public/projects/sd.png";
import BODZ from "@/public/projects/BODZ.png";

const timelineData = [
  {
    year: "2021",
    title: "Started Web Development",
    description:
      "Discovered coding and fell in love with React & Next.js. Built small projects to practice.",
  },
  {
    year: "2022",
    title: "Built Multiple Projects",
    description:
      "Worked on full-stack applications, animations, and optimized web solutions.",
  },
  {
    year: "2023",
    title: "Freelance & Open Source",
    description:
      "Started working with clients and contributed to open-source projects.",
  },
  {
    year: "2024",
    title: "Expanding Knowledge",
    description:
      "Diving deep into advanced concepts like performance optimization, PWAs, and cloud deployment.",
  },
];

const projects = [
  {
    title: "BODZ",
    description:
      "An affiliate website where users can find the best deals on Amazon products. (worked with the client's team on this project)",
    tech: [
      "React",
      "Vite",
      "CSS",
      "Node.js",
      "Express.js",
      "Axios",
      "Amazon AAPI",
    ],
    image: BODZ.src,
    live: "https://best-online-dealz.vercel.app/",
    github: "https://github.com/arush789/Best-Online-Dealz",
  },
  {
    title: "Soneraj Distributor",
    description:
      "A website for a liquor distribution company to manage their products, orders, stock and customers. (made for a client, not live)",
    tech: ["Next.js", "Tailwind", "MongoDB", "PWA"],
    image: SD.src,
    live: "#",
    github: "#",
  },
];

const About = () => {
  return (
    <>
      <section className="p-10 md:h-72 flex flex-col items-center justify-center">
        <motion.h1
          className="text-[8vw] sm:text-5xl md:text-6xl font-bold tracking-tighter text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I’m a passionate front-end & full-stack developer who loves crafting
          **modern, high-performance web experiences**.
        </motion.p>
      </section>
      <section>
        <Ticker />
      </section>
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-[8vw] sm:text-5xl font-bold tracking-tighter mb-8">
          My Journey
        </h2>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
              whileInView={index !== 0 ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-foreground p-6 rounded-xl shadow-md border border-white/20"
            >
              <h3 className="text-xl font-semibold text-background">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              <span className="block mt-3 text-sm text-gray-500">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-[8vw] sm:text-5xl font-bold tracking-tighter mb-8">
          Projects for Clients
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard project={project} effect={false} key={index} />
          ))}
        </div>
      </section>
      <section className="w-full px-6 py-16 md:py-24 text-center bg-background ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-[8vw] sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
            Let&apos;s <span className="text-gray-700">Collaborate</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Have a project in mind? Let&apos;s turn your ideas into reality.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg text-foreground bg-background hover:bg-gray-900 transition-all text-lg font-medium shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg text-background bg-foreground hover:bg-gray-200 transition-all text-lg font-medium shadow-lg"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
