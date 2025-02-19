"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMenu } from "react-icons/io5";

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
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Work</a>
                <a href="#">Contact</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        <nav className="gap-6 text-slate-400 hidden md:flex">
          <a className="hover:text-foreground cursor-pointer transition-all duration-300">
            Home
          </a>
          <a className="hover:text-foreground cursor-pointer transition-all duration-300">
            About
          </a>
          <a className="hover:text-foreground cursor-pointer transition-all duration-300">
            Work
          </a>
          <a className="hover:text-foreground cursor-pointer transition-all duration-300">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
