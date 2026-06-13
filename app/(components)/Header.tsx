"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const currentTheme = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
        setTheme(currentTheme);
    }, []);

    const toggleTheme = () => {
        if (!theme) return;
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
            <div
                className={`w-full max-w-5xl rounded-3xl md:rounded-full border transition-all duration-300 ease-in-out ${scrolled
                    ? "bg-white/75 dark:bg-neutral-900/75 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border-neutral-200/70 dark:border-neutral-800/50 py-3 px-6"
                    : "bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.02)] dark:shadow-none border-neutral-200/35 dark:border-neutral-800/30 py-4 px-8"
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo / Brand */}
                    <Link href="/" className="group flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
                            Karan
                        </span>
                    </Link>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.02] ${isActive
                                            ? "text-neutral-950 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="h-4 w-[1px] bg-neutral-200/50 dark:bg-neutral-800/50 hidden md:block" />

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all focus:outline-none w-9 h-9 flex items-center justify-center cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="text-neutral-950 dark:text-neutral-50" />
                            ) : theme === "dark" ? (
                                <Sun className="text-neutral-950 dark:text-neutral-50" />
                            ) : (
                                <div className="w-5 h-5" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-neutral-200/20 dark:border-neutral-800/20 flex flex-col space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? "text-neutral-950 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </header>
    );
}