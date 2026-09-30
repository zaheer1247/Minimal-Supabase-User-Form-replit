import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";

export function PortfolioProjects() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    updateTheme(prefersDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    updateTheme(!isDark);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and order tracking.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "bg-gradient-to-br from-blue-400 to-cyan-500",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering.",
      tags: ["TypeScript", "React", "Supabase", "Tailwind"],
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization, custom reports, and data export.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      link: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "Full-featured social platform with messaging, notifications, and content moderation system.",
      tags: ["Next.js", "PostgreSQL", "Redis", "GraphQL"],
      image: "bg-gradient-to-br from-red-400 to-orange-500",
      link: "#",
    },
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Projects
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Featured Projects
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                A selection of my recent work showcasing full-stack development,
                UI/UX design, and problem-solving expertise.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-purple-500/10"
                >
                  {/* Project Image */}
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink
                          size={48}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                      >
                        View Project
                        <ArrowRight
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </a>
                      <a
                        href="#"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "10+", label: "Years Experience" },
                { number: "100+", label: "Happy Clients" },
                { number: "15+", label: "Skills Mastered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
