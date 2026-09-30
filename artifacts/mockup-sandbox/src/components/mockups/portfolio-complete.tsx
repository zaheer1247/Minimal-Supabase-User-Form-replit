import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

export function PortfolioComplete() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tags: ["TypeScript", "React", "Supabase"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization",
      tags: ["React", "D3.js", "Node.js"],
      gradient: "from-green-400 to-blue-500",
    },
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Next.js", level: 85 },
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        {/* ===== NAVIGATION ===== */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="hidden sm:inline font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Zaheer Abbas
                </span>
              </div>

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
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col space-y-3 pt-4">
                  <a
                    href="#about"
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ===== HERO SECTION ===== */}
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
              Crafting elegant digital solutions with React, TypeScript, and Node.js.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold rounded-lg transition-colors">
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-purple-500/10"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink
                        size={48}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILLS SECTION ===== */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Technical Skills
            </h2>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Let's Work Together
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@zaheerabbas.dev",
                  },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{label}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>© 2024 Zaheer Abbas. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
