import { currentProjects } from '../data/currentProjects';
import ProjectCard from './ProjectCard';

// High-impact active projects if currentProjects is empty
const fallbackCurrentProjects = [
  {
    id: 'build-1',
    title: '.NET + Azure OpenAI RAG Benchmark Suite',
    description: 'An open-source test harness evaluating retrieval-augmented generation accuracy and response latency across healthcare document datasets.',
    tag: 'AI / .NET 8',
    status: 'ACTIVE BUILD',
    stack: ['.NET 8', 'Azure OpenAI', 'pgvector', 'BenchmarkDotNet']
  },
  {
    id: 'build-2',
    title: 'HIPAA Audit Trail Parser & Anomaly Detector',
    description: 'Lightweight side project using local SLMs (Phi-3) to flag unauthorized access patterns in structured electronic health record logs.',
    tag: 'SECURITY / COMPLIANCE',
    status: 'EXPERIMENTAL',
    stack: ['C#', 'Ollama', 'Docker', 'Elasticsearch']
  }
];

export default function CurrentBuilds() {
  const projectsToDisplay = currentProjects && currentProjects.length > 0 
    ? currentProjects 
    : fallbackCurrentProjects;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="current">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          03 // CURRENT BUILDS
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="section-title text-white">
              What I'm Building Right Now
            </h2>
            <p className="text-base text-slate-400 max-w-2xl mt-3 font-normal leading-relaxed">
              A few things I build on the side, mostly to stay sharp on AI tooling and .NET
              patterns I don't always get to touch at work.
            </p>
          </div>

          <div className="font-mono text-xs text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-full shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            ACTIVE EXPERIMENTS
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsToDisplay.map((project) => (
          <ProjectCard key={project.id || project.title} project={project} />
        ))}
      </div>
    </section>
  );
}