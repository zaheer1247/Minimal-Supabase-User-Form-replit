import { ArrowUpRight, Github, Linkedin, Mail, Fingerprint } from "lucide-react";

// Edit this object to personalise the site.
const profile = {
  brand: "zaheer / abbas",
  name: "Zaheer Abbas",
  role: "Full-stack developer",
  status: "open to work",
  email: "zaheer1247@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  intro:
    "I design and build small, considered web products — from the database up to the last pixel. Currently shipping with React, Express and Supabase.",
};

const projects = [
  {
    no: "01",
    title: "outside / in",
    blurb: "A quiet username sign-up flow saved straight to Supabase.",
    tags: ["React", "Supabase", "Tailwind"],
    href: "#",
  },
  {
    no: "02",
    title: "Task manager",
    blurb: "Hackathon build: fast, keyboard-first task management.",
    tags: ["TypeScript", "Routing", "Vite"],
    href: "#",
  },
  {
    no: "03",
    title: "API server",
    blurb: "Express 5 service with structured Pino logs and health checks.",
    tags: ["Node", "Express", "Pino"],
    href: "#",
  },
];

const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase"] },
  { group: "Craft", items: ["Design systems", "Accessibility", "Motion", "Testing"] },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.19em] text-muted-foreground">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

function Card({
  label,
  title,
  counter,
  children,
}: {
  label: string;
  title: string;
  counter?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-card relative overflow-hidden rounded-[22px] border border-card-border bg-card p-6 sm:p-9">
      <div
        className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-accent/20 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
              {label}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em] text-card-foreground sm:text-[28px]">
              {title}
            </h2>
          </div>
          {counter && (
            <div className="rounded-full border border-border px-2.5 py-1 font-mono-ui text-[10px] text-muted-foreground">
              {counter}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="app-shell relative min-h-[100dvh] overflow-hidden px-5 py-6 text-foreground sm:px-8 sm:py-8">
      <div
        className="grid-texture pointer-events-none absolute inset-x-0 top-0 h-[46rem] opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col">
        {/* Header */}
        <header className="page-rise flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-foreground text-accent shadow-[3px_3px_0_hsl(74_71%_51%_/_0.24)]">
              <Fingerprint size={19} strokeWidth={2.2} aria-hidden="true" />
            </div>
            <span className="font-display text-[17px] font-semibold tracking-[-0.03em]">
              {profile.brand}
            </span>
          </a>
          <nav className="flex items-center gap-6 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <a href="#work" className="hidden hover:text-foreground sm:inline">Work</a>
            <a href="#skills" className="hidden hover:text-foreground sm:inline">Skills</a>
            <a href="#contact" className="hidden hover:text-foreground sm:inline">Contact</a>
            <span className="flex items-center gap-2">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.status}
            </span>
          </nav>
        </header>

        {/* Hero */}
        <section id="top" className="py-16 sm:py-24">
          <div className="page-rise max-w-[760px]">
            <Eyebrow>Hello, I'm {profile.name}</Eyebrow>
            <h1 className="font-display text-[clamp(3.35rem,7.2vw,6.7rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-foreground">
              Software made
              <br />
              <span className="text-[hsl(var(--destructive))]">worth keeping.</span>
            </h1>
            <p className="mt-8 max-w-[460px] text-[15px] leading-7 text-muted-foreground sm:text-base">
              {profile.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="submit-button flex h-14 min-w-[240px] items-center justify-between rounded-[12px] bg-primary px-5 font-medium text-primary-foreground"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
              </a>
              <div className="hidden items-center gap-3 text-muted-foreground sm:flex">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-[hsl(var(--destructive))]" />
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-accent" />
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-[hsl(var(--chart-5))]" />
                </div>
                <span className="text-xs leading-5">
                  {profile.role},
                  <br />
                  building things that last.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="page-rise-delay py-10 sm:py-14">
          <Card label="Selected work" title="Things I've built." counter={`${projects.length.toString().padStart(2, "0")} / ${projects.length.toString().padStart(2, "0")}`}>
            <ul className="divide-y divide-border">
              {projects.map((p) => (
                <li key={p.no}>
                  <a
                    href={p.href}
                    className="group flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="pt-1 font-mono-ui text-[11px] text-muted-foreground">{p.no}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.04em]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{p.blurb}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2.5 py-1 font-mono-ui text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={19}
                      className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Skills */}
        <section id="skills" className="py-10 sm:py-14">
          <Eyebrow>Toolbox</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((s, i) => (
              <div
                key={s.group}
                className="form-card rounded-[22px] border border-card-border bg-card p-6"
              >
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em]">{s.group}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,0.98fr)] lg:gap-24">
            <div>
              <Eyebrow>Say hello</Eyebrow>
              <h2 className="font-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                Let's build
                <br />
                <span className="text-[hsl(var(--destructive))]">something.</span>
              </h2>
            </div>
            <Card label="Contact" title="Start with a hello.">
              <a
                href={`mailto:${profile.email}`}
                className="submit-button flex h-14 w-full items-center justify-between rounded-[12px] bg-primary px-5 font-medium text-primary-foreground"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} aria-hidden="true" />
                  {profile.email}
                </span>
                <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
              </a>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={profile.github}
                  className="hover-elevate flex h-12 items-center justify-center gap-2 rounded-[12px] border border-input bg-background text-sm font-medium"
                >
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  className="hover-elevate flex h-12 items-center justify-center gap-2 rounded-[12px] border border-input bg-background text-sm font-medium"
                >
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </section>

        <footer className="mt-8 flex items-center justify-between border-t border-border/80 pt-5 font-mono-ui text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>your space, your pace</span>
        </footer>
      </div>
    </main>
  );
}
