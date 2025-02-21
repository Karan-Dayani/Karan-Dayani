import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Section - Name & Tagline */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Karan Dayani</h2>
          <p className="text-gray-400 text-sm mt-1">
            Building modern, scalable, and fast web applications.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <nav className="mt-5 md:mt-0">
          <ul className="flex flex-wrap gap-5 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section - Social Media */}
        <div className="mt-5 md:mt-0 flex gap-4">
          <a
            href="https://github.com/Karan-Dayani"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/karan-dayani"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/karan_dayani_"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <p className="text-gray-500 text-xs text-center mt-6">
        © {new Date().getFullYear()} Karan Dayani. All rights reserved.
      </p>
    </footer>
  );
}
