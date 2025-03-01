"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (storedTheme) {
        setTheme(storedTheme as "light" | "dark");
        document.documentElement.setAttribute("data-theme", storedTheme);
      } else {
        // Default to light mode but fallback to system preference
        const defaultTheme = systemPrefersDark ? "dark" : "light";
        setTheme(defaultTheme);
        document.documentElement.setAttribute("data-theme", defaultTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "light" ? (
        <FaMoon className="text-xl" />
      ) : (
        <FaSun className="text-xl text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
