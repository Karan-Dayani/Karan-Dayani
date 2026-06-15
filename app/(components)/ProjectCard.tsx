export default function ProjectCard({
    project,
    className = "w-[85vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] flex-shrink-0"
}: {
    project: any;
    className?: string;
}) {
    return <div
        className={`h-[580px] rounded-3xl border border-neutral-200/50 dark:border-neutral-800/30 overflow-hidden bg-white dark:bg-neutral-950 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 relative ${className}`}
    >
        {/* Subtle Background Glow on Hover */}
        <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-tr ${project.bg} opacity-[0.03] group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

        {/* 1. Main Attraction: Project Image Mockup (Always at top, 300px height) */}
        <div className="relative w-full h-[300px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200/40 dark:border-neutral-800/30">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                }}
            />
            {/* Visual Fallback Gradient with Title Overlay */}
            <div
                className={`absolute inset-0 hidden bg-gradient-to-tr ${project.bg} flex items-center justify-center`}
            >
                <span className="text-white text-3xl font-black tracking-widest opacity-35 select-none uppercase">
                    {project.title}
                </span>
            </div>

            {/* Category & Year Tags Overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-[10px] font-bold tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full uppercase">
                    {project.category}
                </span>
                <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {project.year}
                </span>
            </div>
        </div>

        {/* 2. Text Details & Buttons */}
        <div className="p-6 md:p-8 flex flex-col flex-1 justify-between relative z-10">
            <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {project.desc}
                </p>
                {project.stack && project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.stack.map((tech: string) => (
                            <span
                                key={tech}
                                className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-neutral-100/80 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800/40 backdrop-blur-sm select-none hover:bg-neutral-200/60 dark:hover:bg-neutral-800/90 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* 3. Action Buttons */}
            <div className="flex items-center gap-3 pt-4">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black px-4 py-3 rounded-xl text-md font-semibold transition-all duration-200 shadow-sm cursor-pointer"
                >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
                {project.githubUrl && <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200/50 dark:border-neutral-800/30 px-4 py-3 rounded-xl text-md font-semibold transition-all duration-200 cursor-pointer"
                >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                </a>}
            </div>
        </div>
    </div>;
}