import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient/vignette overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60" />

      {/* Foreground content */}
      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="backdrop-blur-sm/0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-widest text-slate-700 shadow-sm">
            <Rocket className="h-3.5 w-3.5" /> CSE Student • Portfolio
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
            I craft intelligent, user‑centric software. Passionate about algorithms, systems,
            and building delightful experiences with modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow ring-1 ring-slate-200 hover:bg-white transition-colors"
            >
              Contact Me
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="rounded-full bg-white/70 p-2 text-slate-900 shadow ring-1 ring-slate-200 hover:bg-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="rounded-full bg-white/70 p-2 text-slate-900 shadow ring-1 ring-slate-200 hover:bg-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email"
                 className="rounded-full bg-white/70 p-2 text-slate-900 shadow ring-1 ring-slate-200 hover:bg-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
