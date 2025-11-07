import { Code, Monitor, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Smart Campus Navigator',
    description: 'A web app that guides students across campus using building metadata and shortest-path algorithms.',
    tags: ['React', 'Dijkstra', 'Tailwind'],
    icon: Monitor,
    link: '#'
  },
  {
    title: 'AlgoPlayground',
    description: 'Interactive visualizations for core algorithms and data structures with step-by-step animations.',
    tags: ['JavaScript', 'Graphs', 'Animations'],
    icon: Code,
    link: '#'
  },
  {
    title: 'EdgeVision',
    description: 'Lightweight computer vision inference at the edge with FastAPI + WebAssembly.',
    tags: ['FastAPI', 'WASM', 'Computer Vision'],
    icon: Cpu,
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-700">A selection of things I’ve been building recently.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, icon: Icon, link }) => (
            <a key={title} href={link} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-2 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
