import { motion } from "motion/react";
import Link from "next/link";
import { FaCode, FaRocket, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Front-end Development",
    description:
      "I craft high-performance, interactive, and scalable web applications.",
    icon: <FaCode className="text-white text-4xl" />,
  },
  {
    title: "Full-stack Solutions",
    description:
      "End-to-end development, from UI to backend and database integration.",
    icon: <FaRocket className="text-white text-4xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly designs optimized for all devices.",
    icon: <FaPaintBrush className="text-white text-4xl" />,
  },
];

export default function Services() {
  return (
    <section className="py-10 px-8 text-center">
      <h2 className="text-[8vw] sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
        What I Do
      </h2>
      <p className="text-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3">
        I specialize in designing and building scalable, high-performance web
        applications.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center justify-center p-6 border border-white/20 rounded-xl bg-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-white/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contact"
          className="inline-block mt-5 px-6 py-3 border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all"
        >
          Let&apos;s Work Together
        </Link>
      </motion.div>
    </section>
  );
}
