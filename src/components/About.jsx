export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-slate-700">
              I’m a Computer Science & Engineering student focused on building performant,
              accessible applications. My interests span full‑stack web, systems programming,
              and machine learning. I love turning ideas into real products and exploring
              how design and engineering intersect.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Core Skills</p>
                <p className="mt-1 text-slate-700">JavaScript, Python, React, FastAPI, MongoDB</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Interests</p>
                <p className="mt-1 text-slate-700">Algorithms, Systems, UI/UX, AI</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 p-[1px] shadow-lg md:h-80">
              <div className="h-full w-full rounded-2xl bg-white"></div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">
              A creative technologist blending engineering with design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
