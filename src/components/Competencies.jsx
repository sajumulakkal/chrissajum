import data from '../data/profile.json';

export default function Competencies() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 text-center mb-8">
        Core Competencies
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {data.coreCompetencies.map((skill, i) => (
          <div key={i} className="relative group">
            {/* The Tag */}
            <div className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm cursor-help hover:border-red-300 hover:text-red-700 transition-all">
              {skill.name}
            </div>

            {/* The Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none z-50 shadow-xl">
              <div className="relative">
                {skill.desc}
                {/* Little triangle pointer */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
