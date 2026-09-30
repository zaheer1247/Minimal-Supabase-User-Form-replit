import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function PortfolioSkills() {
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

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Express", level: 90 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
      ],
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
                Skills
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

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Technical Skills
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise and
                proficiency levels across various technologies.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                    {category.category}
                  </h2>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 border border-blue-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Key Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Full-Stack Development",
                    desc: "End-to-end application development with modern tech stacks",
                  },
                  {
                    title: "Performance Optimization",
                    desc: "Building fast, efficient applications with optimal user experience",
                  },
                  {
                    title: "Responsive Design",
                    desc: "Creating beautiful interfaces that work on all devices",
                  },
                  {
                    title: "Database Design",
                    desc: "Architecting scalable database solutions with complex queries",
                  },
                  {
                    title: "API Development",
                    desc: "Building robust RESTful and GraphQL APIs for production",
                  },
                  {
                    title: "DevOps & Deployment",
                    desc: "Containerization, CI/CD pipelines, and cloud deployment",
                  },
                ].map((expertise, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700"
                  >
                    <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">
                      {expertise.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {expertise.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification/Learning Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
                <h3 className="text-xl font-bold mb-6">Currently Learning</h3>
                <ul className="space-y-3">
                  {["Rust", "Machine Learning (Python)", "Kubernetes", "Web3 & Blockchain"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <ul className="space-y-3">
                  {[
                    "AWS Certified Cloud Practitioner",
                    "Professional Scrum Developer",
                    "Google Cloud Associate Cloud Engineer",
                    "MongoDB Developer Certification",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
