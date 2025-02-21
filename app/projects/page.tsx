import React from "react";
import ProjectCard from "../components/ProjectCard";

import Cravish from "@/public/projects/cravish.png";
import BingeIt from "@/public/projects/Binge-it.png";
import BookShelf from "@/public/projects/BookShelf.png";
import ShoeRack from "@/public/projects/ShoeRack.png";
import SD from "@/public/projects/SD.png";
import BODZ from "@/public/projects/BODZ.png";

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
    title: "Soneraj Distributor",
    description:
      "A website for a liquor distribution company to manage their products, orders, stock and customers. (made for a client, not live)",
    tech: ["Next.js", "Tailwind", "MongoDB", "PWA"],
    image: SD.src,
    live: "#",
    github: "#",
  },
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
    title: "Binge It",
    description:
      "An entertainment platform where users can find new movies and can create there own custom watch lists.",
    tech: ["React", "CSS", "TMDB API"],
    image: BingeIt.src,
    live: "https://binge-it-mu.vercel.app/",
    github: "https://github.com/Karan-Dayani/BingeIt",
  },
  {
    title: "ShoeRack",
    description: "A Simple UI design for a shoe or an e-commerce website.",
    tech: ["React", "Vite", "CSS"],
    image: ShoeRack.src,
    live: "https://monumental-otter-4cd82d.netlify.app/",
    github: "https://github.com/Karan-Dayani/ShoeRack",
  },
];

const Projects = () => {
  return (
    <div className="p-10">
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} effect={false} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
