import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import Cravish from "@/public/projects/cravish.png";
import BingeIt from "@/public/projects/Binge-it.png";
import BookShelf from "@/public/projects/BookShelf.png";

const projects = [
  {
    title: "BookShelf",
    description:
      "An online library management system where users can issue books with the permision of the admin, there is a fine system for delayed return. (In Progress)",
    tech: [
      "Next.js",
      "Tailwind",
      "PostgreSql",
      "Next Auth",
      "Node.js",
      "Express.js",
    ],
    image: BookShelf.src,
    live: "https://your-book-shelf.vercel.app/",
    github: "https://github.com/Karan-Dayani/BookShelf",
  },
  {
    title: "Cravish",
    description:
      "A social media platform for users to share their recipies online.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Next Auth"],
    image: Cravish.src,
    live: "https://cravish.vercel.app/",
    github: "https://github.com/Karan-Dayani/Cravish",
  },
  {
    title: "Binge It",
    description:
      "An entertainment platform where users can find new movies and can create there own custom watch lists.",
    tech: ["React", "CSS", "TMDB API"],
    image: BingeIt.src,
    live: "https://binge-it-mu.vercel.app/",
    github: "https://github.com/Karan-Dayani/BingeIt",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20">
      {/* Section Title */}
      <motion.h2
        className="text-[8vw] sm:text-5xl md:text-6xl text-center font-bold tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h2>

      {/* Project Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="btn btn-primary px-6 py-3 text-lg">View More</button>
      </motion.div>
    </section>
  );
}
