'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function PortfolioHeroMinimal() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-stone-50 text-slate-900'
      }`}
    >
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isDark
            ? 'bg-slate-950/95 border-slate-800'
            : 'bg-stone-50/95 border-stone-200'
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">Zaheer</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm hover:opacity-60 transition">
              Work
            </a>
            <a href="#about" className="text-sm hover:opacity-60 transition">
              About
            </a>
            <a href="#contact" className="text-sm hover:opacity-60 transition">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-stone-100 hover:bg-stone-200'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-stone-100 hover:bg-stone-200'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-stone-100 hover:bg-stone-200'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-colors duration-300 ${
              isDark ? 'border-slate-800 bg-slate-900' : 'border-stone-200 bg-stone-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="#work" className="text-sm hover:opacity-60 transition">
                Work
              </a>
              <a href="#about" className="text-sm hover:opacity-60 transition">
                About
              </a>
              <a href="#contact" className="text-sm hover:opacity-60 transition">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div
            className={`text-xs tracking-widest mb-8 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            CRAFTING DIGITAL EXPERIENCES
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              Design that
            </span>
            <br />
            <span
              className={isDark ? 'text-emerald-400' : 'text-red-600'}
              style={{ fontStyle: 'italic' }}
            >
              moves people
            </span>
            <br />
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              forward
            </span>
          </h1>

          <p
            className={`text-lg leading-relaxed mb-8 max-w-md ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Full-stack developer building beautiful, functional digital products. Currently
            exploring the intersection of design and technology.
          </p>

          {/* Accent Dots */}
          <div className="flex gap-3 mb-12">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <div className="w-4 h-4 rounded-full bg-yellow-400" />
            <div className="w-4 h-4 rounded-full bg-emerald-500" />
          </div>

          <a
            href="#contact"
            className={`inline-block px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 ${
              isDark
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            Let's talk →
          </a>
        </div>

        {/* Right Side - Illustration Placeholder */}
        <div
          className={`rounded-2xl aspect-square ${
            isDark ? 'bg-slate-800' : 'bg-stone-200'
          } flex items-center justify-center`}
        >
          <div
            className={`text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}
          >
            <div className="text-6xl mb-4">⚡</div>
            <p className="text-sm">Your portfolio visual here</p>
          </div>
        </div>
      </section>

      {/* Bottom Text */}
      <div
        className={`max-w-7xl mx-auto px-6 py-12 border-t ${
          isDark ? 'border-slate-800' : 'border-stone-200'
        } flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs tracking-widest ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}
      >
        <div>A MINIMAL BEGINNING</div>
        <div>YOUR PORTFOLIO • YOUR SPACE</div>
      </div>
    </div>
  );
}
