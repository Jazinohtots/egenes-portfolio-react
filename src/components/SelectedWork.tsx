import { workItems } from '../data/work';
import WorkCard from './WorkCard';
import type { WorkItem } from '../types';

// Fallback high-impact enterprise projects if workData contains fewer than 4 items
const fallbackWorkItems: WorkItem[] = [
  {
    id: 'project-1',
    title: 'HIPAA Claims Ingestion Engine',
    description: 'High-throughput .NET pipeline processing millions of EDI 837/835 healthcare transactions daily with automated validation and audit trails.',
    tag: 'HEALTHCARE / .NET',
    status: 'DEPLOYED',
    stack: ['.NET 8', 'C#', 'Azure Service Bus', 'SQL Server', 'HIPAA EDI']
  },
  {
    id: 'project-2',
    title: 'Medicaid Eligibility Verification Microservice',
    description: 'Low-latency distributed service integrating state Medicaid portals to provide real-time patient coverage verification for healthcare providers.',
    tag: 'GOVTECH / DISTRIBUTED',
    status: 'DEPLOYED',
    stack: ['ASP.NET Core', 'Redis', 'Docker', 'PostgreSQL', 'REST API']
  },
  {
    id: 'project-3',
    title: 'Compliant Medical Document RAG Assistant',
    description: 'Auditable AI pipeline using LLMs and vector embeddings to search and summarize complex clinical records with full source provenance.',
    tag: 'AI / COMPLIANCE',
    status: 'PRODUCTION',
    stack: ['Python', 'LangChain', 'Azure OpenAI', 'pgvector', 'FastAPI']
  },
  {
    id: 'project-4',
    title: 'Immutable Financial Audit Trail',
    description: 'Event-sourced transaction audit ledger designed for strict regulatory compliance in payment reconciliation and payer billing systems.',
    tag: 'FINTECH / AUDIT',
    status: 'DEPLOYED',
    stack: ['.NET Core', 'EventStoreDB', 'Kafka', 'Kubernetes', 'gRPC']
  }
];

export default function SelectedWork() {
  // Ensure at least 4 items are displayed
  const displayedItems = workItems && workItems.length >= 4 
    ? workItems 
    : (workItems && workItems.length > 0 ? [...workItems, ...fallbackWorkItems.slice(workItems.length)] : fallbackWorkItems);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="work">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          02 // SELECTED WORK
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="section-title text-white">
              Systems I've Architected
            </h2>
            <p className="text-base text-slate-400 max-w-2xl mt-3 font-normal leading-relaxed">
              Four projects that give a decent sense of what I actually do day to day —
              kept general on purpose, since the real client code isn't mine to share.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 shrink-0">
            SHOWING {displayedItems.length} SYSTEMS
          </div>
        </div>
      </div>

      {/* Grid Layout (2 columns on medium screens, max 2 or 4 grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedItems.slice(0, 4).map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}