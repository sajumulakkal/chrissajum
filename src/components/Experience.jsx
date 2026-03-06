import data from '../data/profile.json';

const Card = ({ title, subtitle, period, items, color }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${color} mb-6`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-600 font-medium">{subtitle}</p>
      </div>
      <span className="text-sm font-bold text-slate-400">{period}</span>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-slate-600 flex items-start">
          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
        Leadership & Impact
      </h2>
      
      {/* Leadership Section */}
      <div className="mb-10">
        <h4 className="text-sm font-black uppercase tracking-widest text-red-600 mb-4">Leadership Roles</h4>
        {data.experience.leadership.map((exp, i) => (
          <Card 
            key={i}
            title={exp.organization}
            subtitle={exp.role}
            period={exp.period}
            items={exp.highlights}
            color="border-red-600"
          />
        ))}
      </div>

      {/* Sports Section */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-4">Co-Curricular & Mentorship</h4>
        {data.experience.sports.map((sport, i) => (
          <Card 
            key={i}
            title={sport.activity}
            subtitle={sport.role}
            period={sport.period}
            items={sport.highlights}
            color="border-blue-600"
          />
        ))}
      </div>
    </section>
  );
}
