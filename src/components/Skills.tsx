import { skillGroups } from '../data/skills';
import Reveal from './Reveal';

// High-impact fallback technical stack tailored to your .NET, Healthcare & AI expertise
const fallbackSkillGroups = [
  {
    id: 'backend',
    title: 'Backend & Architecture',
    items: ['.NET 8 / C#', 'ASP.NET Core', 'Microservices', 'REST & gRPC APIs', 'Domain-Driven Design (DDD)', 'Event-Driven Systems']
  },
  {
    id: 'healthcare-compliance',
    title: 'Compliance & Healthcare',
    items: ['HIPAA / HITECH Compliance', 'EDI (837, 835, 270/271)', 'FHIR / HL7 Standards', 'Audit Logging & Ledgering', 'Data Anonymization']
  },
  {
    id: 'ai-cloud',
    title: 'Applied AI & Cloud',
    items: ['Azure OpenAI Integration', 'RAG Architectures', 'Vector Databases (pgvector)', 'Azure App Services', 'Docker & Kubernetes', 'CI/CD Pipelines']
  },
  {
    id: 'data-messaging',
    title: 'Data & Messaging',
    items: ['SQL Server / T-SQL', 'PostgreSQL', 'Entity Framework Core', 'Azure Service Bus', 'Kafka / RabbitMQ', 'Redis Caching']
  }
];

export default function Skills() {
  const groupsToDisplay = skillGroups && skillGroups.length > 0 ? skillGroups : fallbackSkillGroups;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          04 // SKILLS
        </div>
        <h2 className="section-title text-white">
          Technical Stack & Capabilities
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groupsToDisplay.map((group) => {
          // Support both 'items' and 'skills' property names defensively
          const items = group.items || (group as any).skills || [];

          return (
            <Reveal as="div" className="h-full" key={group.id || group.title}>
              <div className="h-full rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 p-6 shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Category Title */}
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-800/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    {group.title}
                  </h4>

                  {/* Skills Tag Cloud */}
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item: string) => (
                      <li
                        key={item}
                        className="font-mono text-xs px-2.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}