import Reveal from './Reveal';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      <Reveal as="div" className="relative group rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:border-slate-700">
        
        {/* Modern Cybernetic Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-indigo-500 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-indigo-500 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-indigo-500 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-indigo-500 rounded-br-sm pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                01 // ABOUT
              </div>

              <h2 className="section-title text-white mt-3">About</h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              I'm a senior software engineer who ended up specializing in the systems
              nobody sees — the ingestion pipelines, eligibility engines, and audit
              trails that keep regulated platforms honest. Most of what I build sits at
              the intersection of distributed .NET systems and applied AI: getting large
              language models to do real, auditable work in places where being wrong
              isn't an option.
            </p>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              I'm based in the U.S., currently working in healthcare and payer tech, and
              I like problems that come with real constraints — compliance, uptime,
              other people's data. If it's regulated and hard, I'm probably interested.
            </p>
          </div>

          {/* Metric Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/40 transition-colors">
              <span className="block font-mono text-3xl font-extrabold text-white mb-1">
                10+
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider leading-snug block">
                years in production engineering
              </span>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 hover:border-purple-500/40 transition-colors">
              <span className="block font-mono text-3xl font-extrabold text-white mb-1">
                3
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider leading-snug block">
                regulated industries — health, gov, fintech
              </span>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 hover:border-emerald-500/40 transition-colors">
              <span className="block font-mono text-2xl font-extrabold text-emerald-400 mb-1">
                HIPAA
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider leading-snug block">
                compliant systems shipped to production
              </span>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}