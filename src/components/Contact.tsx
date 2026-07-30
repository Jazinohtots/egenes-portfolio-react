import { useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const email = 'egenesbj@gmail.com';

  const handleCopyEmail = (): void => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      <Reveal
        as="div"
        className="relative group rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:border-slate-700"
      >
        {/* Cybernetic Panel Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-indigo-500 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-indigo-500 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-indigo-500 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-indigo-500 rounded-br-sm pointer-events-none" />

        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            06 // CONTACT
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's talk.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Open to senior and staff-level roles in healthcare, fintech, or applied AI.
            Email's the fastest way to reach me.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card (With Mailto & Copy Option) */}
          <div className="group/card relative rounded-2xl bg-slate-950/60 border border-slate-800/80 p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold">
                  EMAIL
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copied ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="font-mono text-sm sm:text-base text-white font-bold group-hover/card:text-indigo-300 transition-colors break-all"
              >
                {email}
              </a>
            </div>

            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-indigo-400 hover:underline"
            >
              SEND DIRECT EMAIL ↗
            </a>
          </div>

          {/* LinkedIn Link Card */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/card rounded-2xl bg-slate-950/60 border border-slate-800/80 p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="block font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold mb-3">
                LINKEDIN
              </span>
              <span className="font-mono text-sm text-slate-300 font-medium group-hover/card:text-white transition-colors">
                Connect on LinkedIn
              </span>
            </div>

            <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-indigo-400 group-hover/card:underline">
              VIEW PROFILE ↗
            </span>
          </a>

          {/* GitHub Link Card */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/card rounded-2xl bg-slate-950/60 border border-slate-800/80 p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="block font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold mb-3">
                GITHUB
              </span>
              <span className="font-mono text-sm text-slate-300 font-medium group-hover/card:text-white transition-colors">
                Explore Code Repos
              </span>
            </div>

            <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-indigo-400 group-hover/card:underline">
              VIEW REPOSITORIES ↗
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}