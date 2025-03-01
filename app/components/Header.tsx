"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-semibold px-6 h-12">
      <div className="flex justify-between items-center h-full">
        <h1 className="text-xl">Karan</h1>
        <IoMenu
          className="h-5 w-5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute top-10 right-6 w-36 max-h-48 rounded-md bg-[#F5F5F5] p-6 z-10 flex flex-col origin-top-right"
            >
              <nav className="flex flex-col text-black gap-2">
                <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        <nav className="gap-6 text-slate-400 hidden md:flex">
          <Link
            href="/"
            className="hover:text-foreground cursor-pointer transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground cursor-pointer transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground cursor-pointer transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground cursor-pointer transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
