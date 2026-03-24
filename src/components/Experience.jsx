import data from '../data/profile.json';

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Leadership & Experience</h2>
      
      {/* 1. Leadership Section */}
      <div className="space-y-6 mb-12">
        {data.experience.leadership.map((item, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
            <p className="text-red-600 font-semibold">{item.organization} | {item.period}</p>
            <ul className="mt-3 list-disc list-inside text-slate-600 space-y-1">
              {item.highlights.map((bullet, i) => <li key={i}>{bullet}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* 2. Community Service Section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Community Service</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {data.experience.communityService.map((item, index) => (
          <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900">{item.project}</h3>
            <p className="text-sm text-slate-500 mb-2">{item.beneficiary} {item.period ? `| ${item.period}` : ''}</p>
            <p className="text-slate-600 text-sm">{item.contribution}</p>
          </div>
        ))}
      </div>

      {/* 3. Sports Section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Sports & Mentorship</h2>
      <div className="space-y-6">
        {data.experience.sports.map((item, index) => (
          <div key={index} className="p-6 bg-white shadow-sm rounded-xl border-l-4 border-red-500">
            <h3 className="text-lg font-bold text-slate-900">{item.activity}</h3>
            <p className="text-slate-500 italic mb-3">{item.role} ({item.period})</p>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              {item.highlights.map((bullet, i) => <li key={i}>{bullet}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
