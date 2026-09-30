import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "./.generated/mockup-components";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getPreviewExamplePath(): string {
  const basePath = getBasePath();
  return `${basePath}/preview/ComponentName`;
}

function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-slate-300 transition">Home</a>
            <a href="#" className="hover:text-slate-300 transition">Projects</a>
            <a href="#" className="hover:text-slate-300 transition">About</a>
            <a href="#" className="hover:text-slate-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Welcome to Your Portfolio
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          A modern, fast, and fully functional full-stack application. Built with React, Express, and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-2">🚀 Fast</h3>
            <p className="text-slate-400">Optimized performance with Vite and Express</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-2">💻 Modern</h3>
            <p className="text-slate-400">Built with latest React, TypeScript, and Tailwind</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-2">🔧 Flexible</h3>
            <p className="text-slate-400">Easy to customize and extend</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-4">📦 API Status</p>
          <div className="flex justify-center gap-4">
            <a href="http://localhost:5000/api/healthz" className="text-blue-400 hover:text-blue-300">
              API Health Check
            </a>
            <span className="text-slate-600">•</span>
            <a href="/preview/ComponentName" className="text-blue-400 hover:text-blue-300">
              Component Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <Gallery />;
}

export default App;
