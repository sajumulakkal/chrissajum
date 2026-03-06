import Hero from './components/Hero';
import Project from './components/Project';
import Education from './components/Education'; // New Graduation Component
import Results from './components/Results';
import Experience from './components/Experience';
import Competencies from './components/Competencies';
import './index.css'; 

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* 1. Header & Socials */}
      <Hero />

      <main className="container mx-auto px-4 pb-20">
        {/* 2. Featured Machine Learning Project */}
        <Project />

        {/* 3. IP & A-Level Graduation Details */}
        <Education />

        {/* 4. Academic Subjects (No Grades) */}
        <Results />

        {/* 5. Leadership, ICS, and Cricket */}
        <Experience />
        
        {/* 6. Core Competencies with Tooltips */}
        <Competencies /> 
      </main>

      {/* 7. Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white text-center">
        <p className="text-slate-400 text-sm italic">
          Built with React & Tailwind CSS v4 | 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
