'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

export function PortfolioContactMinimal() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 md:py-32 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-stone-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Get in touch</h2>
          <p
            className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Have a project in mind or just want to chat? I'd love to hear from you. Send me a
            message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white focus:ring-emerald-500'
                      : 'bg-white border-stone-200 text-slate-900 focus:ring-emerald-500'
                  }`}
                  placeholder="Zaheer Abbas"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white focus:ring-emerald-500'
                      : 'bg-white border-stone-200 text-slate-900 focus:ring-emerald-500'
                  }`}
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white focus:ring-emerald-500'
                      : 'bg-white border-stone-200 text-slate-900 focus:ring-emerald-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                Send Message
                <ArrowUpRight size={18} />
              </button>

              {submitted && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    isDark
                      ? 'bg-emerald-900/20 text-emerald-300'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  ✓ Message sent successfully! I'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-12">
              {/* Email */}
              <div>
                <div
                  className={`text-xs tracking-widest mb-4 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  EMAIL
                </div>
                <a
                  href="mailto:hello@example.com"
                  className={`text-2xl font-bold transition-opacity hover:opacity-60 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  hello@example.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div
                  className={`text-xs tracking-widest mb-4 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  PHONE
                </div>
                <a
                  href="tel:+1234567890"
                  className={`text-2xl font-bold transition-opacity hover:opacity-60 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  +1 (234) 567-890
                </a>
              </div>

              {/* Social Links */}
              <div>
                <div
                  className={`text-xs tracking-widest mb-4 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  SOCIAL
                </div>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Mail, href: '#', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-3 rounded-lg transition-all ${
                        isDark
                          ? 'bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-700'
                          : 'bg-stone-200 text-slate-600 hover:text-emerald-600 hover:bg-stone-300'
                      }`}
                      title={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <div
                  className={`text-xs tracking-widest mb-4 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  AVAILABILITY
                </div>
                <p
                  className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                >
                  Available for freelance & full-time roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
