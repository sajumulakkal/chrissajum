import data from '../data/profile.json';

export default function Hero() {
  const { personalInfo } = data;
  
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-10 animate-pulse"></div>
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Chris+Saju&background=ef4444&color=fff&size=128" }}
          />
        </div>

        {/* Text Content */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-lg md:text-xl text-red-600 mb-6 uppercase tracking-[0.25em] font-bold">
          {personalInfo.tagline}
        </p>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed mb-10">
          {personalInfo.summary}
        </p>
        
        {/* Social & Project Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            GitHub
          </a>
          <a href={personalInfo.socials.portfolio} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all">
            ML Engine
          </a>
          <a href={`mailto:${personalInfo.socials.email}`} className="text-slate-400 hover:text-red-600 transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
