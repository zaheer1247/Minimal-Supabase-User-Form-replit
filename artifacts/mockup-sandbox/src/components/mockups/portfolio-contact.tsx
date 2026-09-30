import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Phone,
  Moon,
  Sun,
  ArrowRight,
  Send,
} from "lucide-react";

export function PortfolioContact() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@zaheerabbas.dev",
      link: "mailto:hello@zaheerabbas.dev",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socials = [
    { icon: Github, label: "GitHub", link: "#" },
    { icon: Linkedin, label: "LinkedIn", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" },
    { icon: Mail, label: "Email", link: "#" },
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
                Contact
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

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Let's Work Together
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a
              message and I'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors mt-1">
                      <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {contact.label}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold mb-4">Follow me</h3>
                <div className="flex gap-3">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors group"
                        aria-label={social.label}
                      >
                        <Icon
                          size={20}
                          className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <span className="font-semibold">Response time:</span> Usually
                  within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                    required
                  />
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-900 dark:text-green-300">
                      ✓ {submitMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-slate-400 dark:disabled:bg-slate-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin">
                        <Send size={18} />
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What's your typical response time?",
                  a: "I typically respond within 24 hours. For urgent matters, feel free to call.",
                },
                {
                  q: "What's your hourly rate or project pricing?",
                  a: "I offer flexible pricing based on project scope and requirements. Let's discuss your needs.",
                },
                {
                  q: "Do you work on remote projects?",
                  a: "Absolutely! I work with clients worldwide and prefer remote collaboration.",
                },
                {
                  q: "Can you provide references?",
                  a: "Yes, I'm happy to provide references from previous clients upon request.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <summary className="font-semibold flex justify-between items-center select-none">
                    {faq.q}
                    <span className="transform group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's create something amazing together.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
