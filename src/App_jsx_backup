import { useState } from 'react';
import Hero from './components/Hero';
import Project from './components/Project';
import Education from './components/Education';
import Results from './components/Results';
import Experience from './components/Experience';
import Competencies from './components/Competencies';
import Media from './components/Media';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Media', href: '#media' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900 scroll-smooth">
      {/* Navigation Menu */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <span className="font-bold tracking-tight text-slate-800">Portfolio</span>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-red-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-slate-700 hover:text-red-600 px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <div id="home" className="pt-16">
        <Hero />
      </div>

      <main className="container mx-auto px-4 pb-20">
        <section id="projects" className="scroll-mt-20">
          <Project />
        </section>

        <section id="education" className="scroll-mt-20">
          <Education />
          <Results />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>
        
        <section id="skills" className="scroll-mt-20">
          <Competencies /> 
        </section>

        <section id="media" className="scroll-mt-20">
          <Media /> 
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white text-center">
        <p className="text-slate-400 text-sm italic">
          Built with React & Tailwind CSS v4 | 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
