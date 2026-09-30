'use client';

import { useEffect, useState } from 'react';
import { PortfolioHeroMinimal } from './portfolio-hero-minimal';
import { PortfolioWorkMinimal } from './portfolio-work-minimal';
import { PortfolioAboutMinimal } from './portfolio-about-minimal';
import { PortfolioContactMinimal } from './portfolio-contact-minimal';

export function PortfolioCompleteMinimal() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <PortfolioHeroMinimal />
      <PortfolioWorkMinimal />
      <PortfolioAboutMinimal />
      <PortfolioContactMinimal />

      {/* Footer */}
      <footer
        className={`py-8 px-6 border-t transition-colors duration-300 ${
          isDark
            ? 'bg-slate-950 border-slate-800 text-slate-500'
            : 'bg-stone-50 border-stone-200 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>© 2024 Zaheer Abbas. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
