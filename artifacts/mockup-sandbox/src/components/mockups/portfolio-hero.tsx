import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function PortfolioHero() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
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

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Zaheer Abbas
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-4">
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

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {isMenuOpen ? (
                    <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col space-y-3 pt-4">
                  <a
                    href="#about"
                    className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                ZA
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Full-Stack Developer & Designer
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Crafting elegant digital solutions with React, TypeScript, and Node.js. Passionate about building beautiful, performant web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold rounded-lg transition-colors">
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-slate-400 dark:text-slate-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
