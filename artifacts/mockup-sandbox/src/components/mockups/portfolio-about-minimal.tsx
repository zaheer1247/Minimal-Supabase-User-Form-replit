'use client';

import { useEffect, useState } from 'react';

export function PortfolioAboutMinimal() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen py-20 md:py-32 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-stone-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">About</h2>

            <div
              className={`space-y-6 text-lg leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <p>
                I'm a full-stack developer with a passion for creating meaningful digital
                experiences. My journey started with a curiosity about how things work, and it's
                evolved into a career building scalable applications.
              </p>

              <p>
                I specialize in React, TypeScript, and Node.js, with a strong foundation in
                database design and API architecture. But beyond the technical skills, I'm deeply
                committed to understanding user needs and translating them into intuitive solutions.
              </p>

              <p>
                When I'm not coding, you'll find me exploring design systems, writing about web
                development, or contributing to open-source projects. I believe in continuous
                learning and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  Years Exp.
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  Dedicated
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-12">Skills & Expertise</h3>

            <div className="space-y-8">
              {/* Frontend */}
              <div>
                <h4 className="font-semibold mb-4">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Vue.js'].map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm px-3 py-1.5 rounded-full ${
                        isDark
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-stone-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="font-semibold mb-4">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'].map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm px-3 py-1.5 rounded-full ${
                        isDark
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-stone-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold mb-4">Tools & Other</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma', 'Vercel'].map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm px-3 py-1.5 rounded-full ${
                        isDark
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-stone-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
