"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Karan-Dayani",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        ),
        color: "hover:text-green-500 dark:hover:text-green-500 hover:bg-green-100 dark:hover:bg-green-900/20",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/karan-dayani/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        color: "hover:text-[#0077b5] dark:hover:text-[#0a66c2] hover:bg-blue-50 dark:hover:bg-blue-950/20",
    },
    {
        name: "Twitter / X",
        href: "https://x.com/KaranDayani1",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        color: "hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/60",
    },
];


export default function ContactPage() {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [copied, setCopied] = useState(false);

    const emailAddress = "karandayani39@gmail.com";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const tempErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) tempErrors.name = "Please tell me your name";

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required to reply back";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) tempErrors.subject = "What is this about?";
        if (!formData.message.trim()) tempErrors.message = "Please type a message";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("submitting");

        // 1. Format the email content cleanly
        const emailSubject = `Portfolio Contact: ${formData.subject}`;
        const emailBody = `Name: ${formData.name}\nReply-To: ${formData.email}\n\nMessage:\n${formData.message}`;

        // 2. Detect if the user is on a mobile device
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        // 3. Route to the appropriate mail handler
        if (isMobile) {
            // Mobile: Open native mail app directly
            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
                emailSubject
            )}&body=${encodeURIComponent(emailBody)}`;
        } else {
            // Desktop: Open Gmail web composer in a new tab
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
                emailSubject
            )}&body=${encodeURIComponent(emailBody)}`;

            window.open(gmailUrl, "_blank");
        }

        // 4. Show success state and clear the form after a tiny simulated delay
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success status back to idle after 4 seconds
            setTimeout(() => setStatus("idle"), 4000);
        }, 600);
    };

    return (
        <main className="w-full relative min-h-screen bg-background text-foreground overflow-x-hidden pt-28 pb-20">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Decorative Blur Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 px-4 py-2 rounded-full shadow-sm hover:scale-[1.02] transition-transform duration-300">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold tracking-wide text-neutral-600 dark:text-neutral-300">
                            Available for Freelance & Contract
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent pb-2">
                        Let's build something <br className="hidden sm:inline" />
                        great together.
                    </h1>

                    <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
                        Have a project concept, general inquiry, or job opportunity? Drop me a message below or reach out directly via email.
                    </p>
                </div>

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Direct Info & Social Media cards */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
                                Contact Details
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                                How to reach me
                            </h3>
                        </div>

                        {/* Direct Information List */}
                        <div className="space-y-4">
                            {/* Email Card with Copy Feature */}
                            <div className="group relative flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                                            Email
                                        </span>
                                        <a
                                            href={`mailto:${emailAddress}`}
                                            className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {emailAddress}
                                        </a>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="p-2.5 rounded-lg border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-all cursor-pointer relative"
                                    aria-label="Copy email to clipboard"
                                >
                                    {copied && (
                                        <span className="absolute bottom-full left-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-md shadow-md pointer-events-none whitespace-nowrap animate-fade-in-up">
                                            Copied!
                                            {/* Triangle pointer */}
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-white" />
                                        </span>
                                    )}
                                    <Copy size={16} />
                                </button>
                            </div>

                            {/* Location Card */}
                            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                                        Location
                                    </span>
                                    <span className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                                        Nagpur, India
                                    </span>
                                </div>
                            </div>

                            {/* Timezone Card */}
                            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/30 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                                        Timezone
                                    </span>
                                    <span className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                                        IST (GMT+5:30)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Grid */}
                        <div className="space-y-4 pt-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                Connect on Social Media
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center space-x-3 p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-800/30 bg-white dark:bg-neutral-950/40 text-neutral-500 dark:text-neutral-400 transition-all duration-300 shadow-sm hover:scale-[1.02] cursor-pointer ${social.color}`}
                                    >
                                        {social.icon}
                                        <span className="text-sm font-semibold">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="w-full bg-white dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/35 rounded-3xl p-6 md:p-8 shadow-sm backdrop-blur-xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">

                            {/* Form Title & Background glow overlay */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                            {status !== "success" ? (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={status === "submitting"}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.name
                                                    ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20"
                                                    : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                                    } bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400/70 focus:outline-none focus:ring-4 transition-all`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="text-xs font-medium text-red-500 mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Input */}
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                disabled={status === "submitting"}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.email
                                                    ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20"
                                                    : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                                    } bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400/70 focus:outline-none focus:ring-4 transition-all`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-xs font-medium text-red-500 mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Input */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            disabled={status === "submitting"}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.subject
                                                ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                                } bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400/70 focus:outline-none focus:ring-4 transition-all`}
                                            placeholder="Project Collaboration, Freelance Work, etc."
                                        />
                                        {errors.subject && (
                                            <p className="text-xs font-medium text-red-500 mt-1">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={status === "submitting"}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.message
                                                ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                                } bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400/70 focus:outline-none focus:ring-4 transition-all resize-none`}
                                            placeholder="Tell me about your project, goals, and timeline..."
                                        />
                                        {errors.message && (
                                            <p className="text-xs font-medium text-red-500 mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full flex items-center justify-center space-x-2 bg-neutral-950 hover:bg-neutral-850 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Sending message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-sm font-semibold text-red-500 text-center mt-2">
                                            An error occurred while sending your message. Please try again.
                                        </p>
                                    )}
                                </form>
                            ) : (
                                /* Success Screen Card */
                                <div className="text-center py-8 px-4 space-y-6 relative z-10 animate-fade-in">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 mb-2 border border-emerald-100 dark:border-emerald-900/30 scale-100 transition-transform duration-500 ease-out">
                                        <svg className="w-10 h-10 animate-[bounce_1s_infinite_alternate]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                                            Thank you for reaching out! I will review your message and get back to you within 24-48 hours.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="inline-flex items-center justify-center space-x-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer"
                                    >
                                        <span>Send Another Message</span>
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
