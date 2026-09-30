# 🎨 Portfolio Customization Template

Use this template to customize each component for your personal portfolio.

---

## 1. Update Personal Information

### Edit in `portfolio-hero.tsx` and `portfolio-complete.tsx`

```tsx
// BEFORE:
<span className="hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
  Zaheer Abbas
</span>

// AFTER:
<span className="hidden sm:inline font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
  Your Name
</span>
```

### Avatar Initials

```tsx
// BEFORE:
<div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
  ZA
</div>

// AFTER:
<div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
  YN {/* Your initials */}
</div>
```

### Hero Title & Description

```tsx
// BEFORE:
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6...">
  Full-Stack Developer & Designer
</h1>

<p className="text-xl sm:text-2xl text-slate-600...">
  Crafting elegant digital solutions with React, TypeScript, and Node.js.
  Passionate about building beautiful, performant web applications.
</p>

// AFTER:
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6...">
  Your Title (e.g., Frontend Engineer)
</h1>

<p className="text-xl sm:text-2xl text-slate-600...">
  Your description here. Keep it concise and impactful.
</p>
```

---

## 2. Customize Projects

### Edit in `portfolio-projects.tsx` and `portfolio-complete.tsx`

```tsx
// BEFORE:
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and order tracking.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-blue-400 to-cyan-500",
    link: "#",
  },
  // ... more projects
];

// AFTER:
const projects = [
  {
    title: "Your Project 1",
    description:
      "Brief description of what your project does and its impact.",
    tags: ["Tech 1", "Tech 2", "Tech 3"],
    image: "bg-gradient-to-br from-emerald-400 to-cyan-500", // Change gradient
    link: "https://your-project-link.com", // Add real link
  },
  {
    title: "Your Project 2",
    description: "Description of project 2...",
    tags: ["Tech 1", "Tech 2"],
    image: "bg-gradient-to-br from-purple-400 to-pink-500",
    link: "https://your-project-link-2.com",
  },
  // Add or remove projects as needed
];
```

### Gradient Color Options

Choose from these pre-made gradients:

```tsx
// Blue to Cyan
"bg-gradient-to-br from-blue-400 to-cyan-500"

// Purple to Pink
"bg-gradient-to-br from-purple-400 to-pink-500"

// Green to Blue
"bg-gradient-to-br from-green-400 to-blue-500"

// Red to Orange
"bg-gradient-to-br from-red-400 to-orange-500"

// Emerald to Teal
"bg-gradient-to-br from-emerald-400 to-teal-500"

// Amber to Red
"bg-gradient-to-br from-amber-400 to-red-500"

// Indigo to Purple
"bg-gradient-to-br from-indigo-400 to-purple-500"

// Rose to Fuchsia
"bg-gradient-to-br from-rose-400 to-fuchsia-500"
```

---

## 3. Update Technical Skills

### Edit in `portfolio-skills.tsx` and `portfolio-complete.tsx`

```tsx
// BEFORE:
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
  // ... more categories
];

// AFTER:
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Your Skill 1", level: 90 }, // Adjust level 0-100
      { name: "Your Skill 2", level: 85 },
      { name: "Your Skill 3", level: 88 },
      { name: "Your Skill 4", level: 92 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Your Backend Skill 1", level: 85 },
      { name: "Your Backend Skill 2", level: 90 },
      // ... your skills
    ],
  },
  // Add or modify categories as needed
];
```

### Skill Level Guidelines

```
90-100%  → Expert level (professional use for years)
75-89%   → Proficient (used regularly, very comfortable)
60-74%   → Competent (can work independently)
40-59%   → Basic (can complete tasks with help)
Below 40% → Learning (just started)
```

---

## 4. Update Contact Information

### Edit in `portfolio-contact.tsx` and `portfolio-complete.tsx`

```tsx
// BEFORE:
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

// AFTER:
const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@example.com",
    link: "mailto:your-email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 987-6543",
    link: "tel:+15559876543",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
    link: "#", // Or link to your location
  },
];
```

---

## 5. Update Social Media Links

### Edit in `portfolio-hero.tsx`, `portfolio-contact.tsx`, and `portfolio-complete.tsx`

```tsx
// BEFORE:
<a href="#" className="p-3 bg-slate-100... rounded-lg transition-colors"
  aria-label="GitHub">
  <Github size={24} />
</a>

// AFTER:
<a href="https://github.com/yourusername" 
  className="p-3 bg-slate-100... rounded-lg transition-colors"
  aria-label="GitHub"
  target="_blank"
  rel="noopener noreferrer">
  <Github size={24} />
</a>
```

### Social Media URLs

```tsx
// GitHub
href="https://github.com/yourusername"

// LinkedIn
href="https://linkedin.com/in/yourusername"

// Twitter/X
href="https://twitter.com/yourusername"

// Email
href="mailto:your-email@example.com"

// Portfolio/Website
href="https://yourwebsite.com"

// Dev.to
href="https://dev.to/yourusername"

// Medium
href="https://medium.com/@yourusername"
```

---

## 6. Customize Color Scheme

### Update Gradient Colors Globally

Find and replace all instances of this gradient:

```tsx
// SEARCH:
from-blue-600 via-purple-600 to-pink-600
dark:from-blue-400 dark:via-purple-400 dark:to-pink-400

// REPLACE WITH YOUR COLORS:
from-emerald-600 via-cyan-600 to-teal-600
dark:from-emerald-400 dark:via-cyan-400 dark:to-teal-400
```

### Color Scheme Suggestions

**Modern Professional**
```
from-blue-600 via-purple-600 to-pink-600
```

**Tech-Forward**
```
from-cyan-500 via-blue-600 to-purple-700
```

**Warm & Approachable**
```
from-orange-500 via-red-500 to-pink-600
```

**Nature-Inspired**
```
from-emerald-600 via-teal-600 to-cyan-600
```

**Bold & Creative**
```
from-fuchsia-600 via-purple-600 to-blue-600
```

**Minimal & Clean**
```
from-slate-600 via-slate-700 to-slate-800
```

**Vibrant**
```
from-yellow-500 via-orange-600 to-red-700
```

### Accent Color Changes

Update Blue accent colors:

```tsx
// Light mode buttons
// SEARCH: bg-blue-600 hover:bg-blue-700
// REPLACE: bg-purple-600 hover:bg-purple-700
// Or: bg-emerald-600 hover:bg-emerald-700

// Dark mode buttons
// SEARCH: dark:bg-blue-500 dark:hover:bg-blue-600
// REPLACE: dark:bg-purple-500 dark:hover:bg-purple-600
```

---

## 7. Update Expertise & Certifications

### Edit in `portfolio-skills.tsx`

```tsx
// BEFORE:
const [
  {
    title: "Full-Stack Development",
    desc: "End-to-end application development with modern tech stacks",
  },
  {
    title: "Performance Optimization",
    desc: "Building fast, efficient applications with optimal user experience",
  },
  // ... more
]

// AFTER:
const [
  {
    title: "Your Expertise 1",
    desc: "Your description of what you're good at",
  },
  {
    title: "Your Expertise 2",
    desc: "Another area of expertise with specific details",
  },
  // ... update as needed
]
```

### Certifications Section

```tsx
// BEFORE:
{
  "AWS Certified Cloud Practitioner",
  "Professional Scrum Developer",
  "Google Cloud Associate Cloud Engineer",
  "MongoDB Developer Certification",
}

// AFTER:
{
  "Your Certification 1",
  "Your Certification 2",
  "Your Certification 3",
  "Your Certification 4",
}
```

---

## 8. Update FAQ Responses

### Edit in `portfolio-contact.tsx`

```tsx
// BEFORE:
{
  q: "What's your typical response time?",
  a: "I typically respond within 24 hours. For urgent matters, feel free to call.",
},
{
  q: "What's your hourly rate or project pricing?",
  a: "I offer flexible pricing based on project scope and requirements. Let's discuss your needs.",
},

// AFTER:
{
  q: "What's your typical response time?",
  a: "Your response time here.",
},
{
  q: "What's your hourly rate or project pricing?",
  a: "Your pricing information.",
},
```

---

## 9. Update Stats/Metrics

### Edit in `portfolio-projects.tsx`

```tsx
// BEFORE:
{[
  { number: "50+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "100+", label: "Happy Clients" },
  { number: "15+", label: "Skills Mastered" },
]}

// AFTER:
{[
  { number: "Your #", label: "Your Stat 1" },
  { number: "Your #", label: "Your Stat 2" },
  { number: "Your #", label: "Your Stat 3" },
  { number: "Your #", label: "Your Stat 4" },
]}
```

---

## 10. Update Form Submission

### Add Email Functionality

**Option 1: Formspree**

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  } catch (error) {
    setSubmitMessage("Error sending message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Option 2: Supabase Email**

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Add your Supabase email function call here
  // Example: await supabase.functions.invoke('send-email', { body: formData })

  setIsSubmitting(false);
};
```

---

## 11. Add Images/Photos

### Profile Photo

```tsx
// BEFORE:
<div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
  ZA
</div>

// AFTER (using image):
<div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg">
  <img 
    src="/your-photo.jpg" 
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
```

### Project Images

```tsx
// BEFORE:
<div className={`h-48 ${project.gradient} relative overflow-hidden`}>

// AFTER (using actual images):
<div className="h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
  <img 
    src="/project-thumbnail.jpg"
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

---

## 12. Typography Customization

### Change Font Family

```tsx
// BEFORE (in index.css):
--font-sans: 'Inter', sans-serif;

// AFTER:
--font-sans: 'Plus Jakarta Sans', sans-serif;
// Or: 'Poppins', sans-serif;
// Or: 'Space Grotesk', sans-serif;
```

### Adjust Text Sizes

```tsx
// BEFORE:
className="text-5xl sm:text-6xl md:text-7xl"

// AFTER (smaller):
className="text-4xl sm:text-5xl md:text-6xl"

// AFTER (larger):
className="text-6xl sm:text-7xl md:text-8xl"
```

---

## 13. Spacing & Layout Adjustments

### Increase Padding

```tsx
// BEFORE:
className="px-4 py-20"

// AFTER:
className="px-6 py-32"
```

### Change Container Width

```tsx
// BEFORE:
className="max-w-6xl mx-auto"

// AFTER:
className="max-w-5xl mx-auto" // narrower
// or
className="max-w-7xl mx-auto" // wider
```

### Adjust Grid Columns

```tsx
// BEFORE (3 columns on desktop):
className="grid grid-cols-1 md:grid-cols-3 gap-8"

// AFTER (2 columns):
className="grid grid-cols-1 md:grid-cols-2 gap-8"

// AFTER (4 columns):
className="grid grid-cols-1 md:grid-cols-4 gap-8"
```

---

## 14. Copy-Paste Customization Checklist

- [ ] Update your name in all components
- [ ] Change avatar initials
- [ ] Update hero title and description
- [ ] Replace all placeholder projects with your actual projects
- [ ] Update tech stack in tags
- [ ] Customize colors/gradients to match your brand
- [ ] Update skill categories and levels
- [ ] Add your actual expertise areas
- [ ] Update contact information (email, phone, location)
- [ ] Add your actual social media links
- [ ] Update certifications
- [ ] Customize FAQ answers
- [ ] Update stats/metrics
- [ ] Set up form submission (Formspree, Supabase, etc.)
- [ ] Add your profile photo
- [ ] Test dark mode toggle
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check contrast with accessibility tool

---

## 15. Quick Copy-Paste Commands

### Find & Replace Multiple Items

**In your code editor (VS Code):**

1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. Find: `Zaheer Abbas`
3. Replace: `Your Name`
4. Click "Replace All"

Repeat for:
- Email addresses
- Phone numbers
- Project names
- Skill names
- Color codes
- Any other placeholders

---

## 🎨 Complete Customization Example

Here's a full example of customizing one project:

```tsx
// BEFORE:
{
  title: "E-Commerce Platform",
  description:
    "Full-stack e-commerce solution with real-time inventory management, payment processing, and order tracking.",
  tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  image: "bg-gradient-to-br from-blue-400 to-cyan-500",
  link: "#",
},

// AFTER:
{
  title: "Social Networking App",
  description:
    "Real-time messaging and collaboration platform connecting 50k+ active users globally.",
  tags: ["React", "WebSocket", "MongoDB", "Redis"],
  image: "bg-gradient-to-br from-purple-400 to-pink-500",
  link: "https://github.com/yourname/social-app",
},
```

---

## 📝 Notes

- Keep descriptions concise (1-2 sentences)
- Use real links to your actual projects
- Be honest about skill levels (90%+ is expert level)
- Update your portfolio at least quarterly
- Test all links before deployment
- Verify contrast ratios after color changes

---

**Start customizing now!** 🚀

Replace all placeholder content with your actual information and you'll have a professional portfolio ready to showcase to the world.
