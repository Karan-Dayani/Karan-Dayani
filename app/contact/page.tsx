"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000); // Reset after 2s
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-6 text-center">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Connect!
      </motion.h1>

      <p className="mt-4 text-lg text-gray-400">
        Feel free to reach out to me directly.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-6">
        {/* Email */}
        <motion.div
          className="flex items-center gap-4 text-lg font-medium text-white bg-gray-900 px-5 py-3 rounded-lg border border-white/10 shadow-md cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:border-white/20 relative"
          onClick={() => handleCopy("karandayani39@gmail.com", "email")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaEnvelope className="text-blue-400 text-2xl" />
          <span>karandayani39@gmail.com</span>

          {/* Copy Confirmation Tooltip */}
          {copied === "email" && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-green-500 text-white py-1 px-2 rounded-md shadow-md">
              Copied!
            </span>
          )}
        </motion.div>

        {/* Phone Number */}
        <motion.div
          className="flex items-center gap-4 text-lg font-medium text-white bg-gray-900 px-5 py-3 rounded-lg border border-white/10 shadow-md cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:border-white/20 relative"
          onClick={() => handleCopy("+91 7020832040", "phone")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaPhoneAlt className="text-green-400 text-2xl" />
          <span>+91 7020832040</span>

          {/* Copy Confirmation Tooltip */}
          {copied === "phone" && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-green-500 text-white py-1 px-2 rounded-md shadow-md">
              Copied!
            </span>
          )}
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex gap-6">
        <a
          href="https://linkedin.com/in/karan-dayani"
          target="_blank"
          className="text-foreground hover:text-blue-500 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Karan-Dayani"
          target="_blank"
          className="text-foreground hover:text-[#2dba4e] transition"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
