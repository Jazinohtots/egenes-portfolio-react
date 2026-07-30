import type { WorkItem } from '../types';
import Reveal from './Reveal';

interface WorkCardProps {
  item: WorkItem;
}

export default function WorkCard({ item }: WorkCardProps) {
  // Support both 'stack' or 'tags' depending on how WorkItem is typed
  const techStack = item.stack || item.tags || [];

  return (
    <Reveal as="article" className="h-full">
      <div className="group h-full flex flex-col justify-between rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 p-6 shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/80 hover:-translate-y-1">
        
        {/* Card Header: Category Tag & Status Indicator */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            {item.tag && (
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/50 text-indigo-300">
                {item.tag}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {item.status || 'DEPLOYED'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {item.description}
          </p>
        </div>

        {/* Card Footer: Tech Stack Chips & Direct Links */}
        <div>
          {/* Tech Stack Chips */}
          {techStack.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {/* Links Section (Renders if links exist on the item) */}
          {(item.liveUrl || item.githubUrl || item.link) && (
            <div className="flex items-center gap-4 pt-2 border-t border-slate-800/60 font-mono text-xs">
              {(item.liveUrl || item.link) && (
                <a
                  href={item.liveUrl || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  LIVE SYSTEM ↗
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  SOURCE CODE ↗
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </Reveal>
  );
}