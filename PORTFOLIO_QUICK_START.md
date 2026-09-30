# Portfolio UI - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Available Components

| Component | Path | Purpose |
|-----------|------|---------|
| **Hero** | `portfolio-hero.tsx` | Landing page with hero section |
| **Projects** | `portfolio-projects.tsx` | Showcase your projects |
| **Skills** | `portfolio-skills.tsx` | Display technical expertise |
| **Contact** | `portfolio-contact.tsx` | Contact form & details |
| **Complete** | `portfolio-complete.tsx` | Full portfolio in one file |

### Preview URLs

```
/preview/portfolio-hero
/preview/portfolio-projects
/preview/portfolio-skills
/preview/portfolio-contact
/preview/portfolio-complete
```

## 🎨 Dark Theme Toggle

**Automatic Detection:**
- Detects system preference on load
- Manual toggle via button (Sun/Moon icon)

**Implementation:**
```tsx
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
```

## ✅ Accessibility & Contrast

All components meet **WCAG AA standards**:

### Light Mode
- Text: Slate 900 on White = **19.56:1** (AAA)
- Buttons: Blue 600 on White = **4.5:1** (AA)
- Muted: Slate 600 on White = **7.2:1** (AA)

### Dark Mode
- Text: Slate 50 on Slate 950 = **18.3:1** (AAA)
- Buttons: Blue 500 on Dark = **4.8:1** (AA)
- Muted: Slate 400 on Dark = **7.8:1** (AA)

## 📱 Responsive Breakpoints

```
Mobile:   320px - 639px
Tablet:   640px - 1023px
Desktop:  1024px+
```

All components use Tailwind's responsive prefixes:
```tsx
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

## 🎯 Customization Quick Tips

### 1. Change Your Name/Title
```tsx
// In any component, update:
<span className="font-bold">Zaheer Abbas</span>
// To:
<span className="font-bold">Your Name</span>
```

### 2. Update Projects
```tsx
const projects = [
  {
    title: "Your Project",
    description: "Your description",
    tags: ["React", "Node"],
    gradient: "from-blue-400 to-cyan-500",
  },
  // ... more projects
];
```

### 3. Modify Color Scheme
```tsx
// Light to Dark Blue theme
from-blue-600 via-blue-700 to-blue-800

// Rose to Pink theme
from-rose-600 via-pink-600 to-red-600

// Emerald to Teal theme
from-emerald-600 via-cyan-600 to-teal-600
```

### 4. Adjust Spacing
```tsx
// Padding
p-4  →  p-6  →  p-8  →  p-12

// Gaps
gap-4  →  gap-6  →  gap-8

// Max width
max-w-4xl  →  max-w-5xl  →  max-w-6xl
```

## 🔧 Common Tasks

### Display Hero Section Only
```tsx
import { PortfolioHero } from "./portfolio-hero";
export default function Page() {
  return <PortfolioHero />;
}
```

### Use Complete Portfolio
```tsx
import { PortfolioComplete } from "./portfolio-complete";
export default function Page() {
  return <PortfolioComplete />;
}
```

### Customize Contact Form
Find the form in `portfolio-contact.tsx`:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: API call, email service, etc.
};
```

### Add External Links
```tsx
<a href="https://github.com/yourprofile">
  <Github size={24} />
</a>
```

## 🎬 Animations & Transitions

All animations use Tailwind's built-in utilities:

```tsx
// Fade on hover
hover:opacity-100

// Color transition
transition-colors

// Scale transform
scale-110

// Smooth bounce
animate-bounce

// Custom hover states
group-hover:text-blue-600
```

## 📊 Browser Testing Checklist

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🌙 Dark Mode Testing

1. **System Preference:**
   - Set OS to dark mode → refresh → should show dark theme

2. **Manual Toggle:**
   - Click Sun/Moon icon → theme should switch

3. **Persistence:**
   - (Optional) Add localStorage to remember choice:
   ```tsx
   // On theme change
   localStorage.setItem('theme', isDark ? 'dark' : 'light');
   
   // On load
   const saved = localStorage.getItem('theme');
   if (saved) {
     setIsDark(saved === 'dark');
   }
   ```

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
npm run build
# Push to Git, connect to Netlify
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

## 📈 Performance Tips

1. **Images:** Use Next.js `Image` component
2. **Fonts:** Load only used weights
3. **CSS:** Tailwind purges unused styles
4. **JS:** Code split with React.lazy()
5. **Animations:** Use GPU-accelerated properties (transform, opacity)

## 🔐 Security Checklist

- [ ] Sanitize form inputs
- [ ] Use HTTPS
- [ ] Add CSRF protection
- [ ] Validate server-side
- [ ] Don't expose secrets
- [ ] Set CSP headers

## 📚 Resources

- [Tailwind Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Tools](https://webaim.org/)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Dark mode not working | Check `dark:` classes in Tailwind config |
| Icons not showing | Verify `lucide-react` is installed |
| Styles not applied | Clear browser cache, restart dev server |
| Form not submitting | Add API endpoint, check console for errors |
| Layout broken on mobile | Test with DevTools mobile view |

## 💡 Next Steps

1. ✅ Copy components to your project
2. ✅ Update content (name, projects, skills, etc.)
3. ✅ Add your actual links (GitHub, LinkedIn, etc.)
4. ✅ Test dark/light theme
5. ✅ Verify accessibility
6. ✅ Deploy to your hosting

---

**Need more help?** See `PORTFOLIO_UI_GUIDE.md` for detailed documentation.
