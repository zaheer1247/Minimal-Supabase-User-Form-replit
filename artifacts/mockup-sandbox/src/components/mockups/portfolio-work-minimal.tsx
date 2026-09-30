'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function PortfolioWorkMinimal() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory and payment processing.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      year: '2024',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative productivity tool with real-time updates and team management.',
      tags: ['TypeScript', 'Supabase', 'Tailwind'],
      year: '2024',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization platform for tracking business metrics and KPIs.',
      tags: ['React', 'D3.js', 'API Integration'],
      year: '2023',
    },
  ];

  return (
    <section
      id="work"
      className={`min-h-screen py-20 md:py-32 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-stone-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Work</h2>
          <p
            className={`text-lg max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Selected projects that showcase my approach to solving complex problems with elegant design
            and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group border-t pt-12 transition-all duration-300 ${
                isDark ? 'border-slate-800' : 'border-stone-200'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Project Info */}
                <div className="md:col-span-2">
                  <div
                    className={`text-xs tracking-widest mb-4 ${
                      isDark ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:opacity-60 transition">
                    {project.title}
                  </h3>

                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                          isDark
                            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            : 'bg-stone-200 text-slate-700 hover:bg-stone-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year & Link */}
                <div className="flex flex-col items-start md:items-end justify-start">
                  <div
                    className={`text-sm mb-6 ${
                      isDark ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    {project.year}
                  </div>

                  <a
                    href="#"
                    className={`p-3 rounded-lg transition-all ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
                        : 'bg-stone-200 hover:bg-stone-300 text-emerald-600'
                    }`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>

              {/* Project Visual Placeholder */}
              <div
                className={`mt-8 rounded-xl aspect-video ${
                  isDark ? 'bg-slate-800' : 'bg-stone-200'
                } flex items-center justify-center text-slate-400`}
              >
                <span className="text-sm">Project screenshot</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-20 pt-12 border-t border-stone-200 dark:border-slate-800">
          <a
            href="#"
            className={`inline-flex items-center gap-2 text-lg font-medium transition-all hover:gap-3 ${
              isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            View all projects
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
