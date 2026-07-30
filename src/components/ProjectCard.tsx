import type { CurrentProject } from '../types';
import Reveal from './Reveal';

interface ProjectCardProps {
  project: CurrentProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Defensive check for stack vs tags vs fallback
  const techStack = project.stack || (project as any).tags || [];
  const progressValue = typeof project.progress === 'number' ? project.progress : 65;

  return (
    <Reveal as="article" className="h-full">
      <div className="group h-full flex flex-col justify-between rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 p-6 shadow-xl transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-900/80 hover:-translate-y-1">
        
        {/* Card Header: Tag & Pulsing Status */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            {project.tag && (
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800/50 text-amber-300">
                {project.tag}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              {(project as any).status || 'IN PROGRESS'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>
        </div>

        {/* Progress Section & Tech Stack */}
        <div>
          {/* Progress Bar Container */}
          <div className="mb-6 space-y-2">
            <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-800/80 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressValue}%` }}
              />
            </div>
            <div className="flex justify-between items-center font-mono text-xs text-slate-400">
              <span>Build progress</span>
              <span className="text-amber-400 font-semibold">{progressValue}%</span>
            </div>
          </div>

          {/* Tech Stack Chips */}
          {techStack.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech: string) => (
                <li
                  key={tech}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </Reveal>
  );
}