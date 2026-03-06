import data from '../data/profile.json';

export default function Education() {
  const { integratedProgramme, certificates } = data.education;

  return (
    <section className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-xl rounded-3xl border border-slate-100">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Academic Journey</h2>
        <p className="text-red-600 font-bold tracking-widest uppercase text-sm">
          {integratedProgramme.alliance}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: The Programme */}
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
            Integrated Programme
          </h4>
          <p className="text-slate-600 leading-relaxed mb-4">
            {integratedProgramme.programDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {integratedProgramme.schools.map((school, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">
                {school}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Graduation & Certificates */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="text-lg font-bold text-slate-800 mb-4">Certifications</h4>
          <ul className="space-y-3">
            {certificates.map((cert, i) => (
              <li key={i} className="flex items-start text-sm text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {cert}
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase">Class of {integratedProgramme.graduationYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
