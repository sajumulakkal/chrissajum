import data from '../data/profile.json';

export default function Results() {
  return (
    <section className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b pb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-1">Academic Foundation</h2>
          <p className="text-slate-500 font-medium">
            {data.academicResults.institution} — {data.academicResults.examination}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-bold tracking-wide">
            Graduated {data.academicResults.year}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.academicResults.subjects.map((s, i) => (
          <div key={i} className="group p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-red-200 hover:bg-white transition-all duration-300">
            <span className="inline-block px-2 py-0.5 mb-2 bg-red-50 text-red-600 text-[10px] font-black uppercase rounded">
              {s.level}
            </span>
            <p className="text-lg font-bold text-slate-700 group-hover:text-red-700 transition-colors">
              {s.name}
            </p>
          </div>
        ))}
      </div>
      
      <p className="mt-8 text-xs text-slate-400 italic">
        * Completed under the Victoria-Cedar Alliance Integrated Programme (VCA IP).
      </p>
    </section>
  );
}
