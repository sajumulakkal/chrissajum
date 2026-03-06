import data from '../data/profile.json';

export default function Project() {
  const project = data.featuredProject;
  
  return (
    <section className="max-w-4xl mx-auto my-12 p-8 bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden relative group">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <div className="relative z-10">
        <h4 className="text-red-500 font-black uppercase tracking-tighter text-sm mb-2">Featured Project</h4>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        
        <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>
        
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all transform hover:scale-105"
        >
          View Live Engine
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
