import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with interactive Spline cover */}
      <Hero />

      {/* Subtle parallax sections */}
      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Your Name — Built with love and lots of coffee.
      </footer>
    </div>
  );
}

export default App;
