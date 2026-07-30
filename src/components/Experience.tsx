import { experience } from '../data/experience';
import Reveal from './Reveal';

// High-impact fallback career history if experience data is empty
const fallbackExperience = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer (.NET & AI)',
    company: 'Healthcare Payer Platform',
    date: '2022 — PRESENT',
    description: 'Architecting high-throughput HIPAA-compliant .NET ingestion pipelines and integrating Azure OpenAI RAG models for clinical audit automated workflows.',
    isEducation: false
  },
  {
    id: 'exp-2',
    role: 'Staff Systems Architect',
    company: 'Government Medicaid Solutions',
    date: '2018 — 2022',
    description: 'Led core backend engineering for state Medicaid eligibility engines. Scaled microservices to process millions of transactions with strict zero-downtime SLA.',
    isEducation: false
  },
  {
    id: 'exp-3',
    role: 'Backend Software Engineer',
    company: 'Enterprise Fintech Systems',
    date: '2014 — 2018',
    description: 'Developed payment processing microservices, automated ledger reconciliation, and event-sourced transaction audit logging engines.',
    isEducation: false
  },
  {
    id: 'exp-4',
    role: 'B.S. in Computer Science',
    company: 'State University',
    date: '2010 — 2014',
    description: 'Specialized in Distributed Systems, Data Structures & Algorithms, and Software Engineering Principles.',
    isEducation: true
  }
];

export default function Experience() {
  const itemsToDisplay = experience && experience.length > 0 ? experience : fallbackExperience;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="experience">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          05 // EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Career Timeline
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {itemsToDisplay.map((item) => {
          const dateString = item.date || (item as any).period || '';

          return (
            <Reveal
              as="div"
              key={item.id}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.isEducation
                    ? 'bg-slate-950 border-purple-500 group-hover:bg-purple-500 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-950 border-indigo-500 group-hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
                }`} 
              />

              {/* Experience Card */}
              <div className="rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  {/* Date Badge */}
                  <span className={`font-mono text-xs px-3 py-1 rounded-full border inline-flex w-fit ${
                    item.isEducation 
                      ? 'bg-purple-950/60 border-purple-800/50 text-purple-300'
                      : 'bg-indigo-950/60 border-indigo-800/50 text-indigo-300'
                  }`}>
                    {dateString}
                  </span>

                  {item.isEducation && (
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest self-start sm:self-auto">
                      ACADEMIC
                    </span>
                  )}
                </div>

                {/* Role & Company Header */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.role}{' '}
                  <span className="text-indigo-400 font-medium">· {item.company}</span>
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}