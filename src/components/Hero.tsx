import TopologyDiagram from './TopologyDiagram';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 px-6 max-w-7xl mx-auto overflow-hidden" id="hero">
      {/* Radial Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full mb-16">
        
        {/* Left Column: Domain Copy & Passport Headshot */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Headline Metadata Eyebrow */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono text-xs tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SENIOR SOFTWARE ENGINEER — 10+ YRS — USA
          </div>

          {/* Portrait Headshot + Core Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            {/* Passport Headshot Frame */}
            <div className="relative group w-24 h-24 sm:w-28 sm:h-28 shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="/passport.jpg"
                  alt="Personal Portrait"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              I build the backend healthcare systems <em className="not-italic bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">run on.</em>
            </h1>
          </div>

          {/* Value Proposition Copy */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Most of my career has been backend work for industries that can't afford to get it wrong — healthcare, government Medicaid, and payments. I build the .NET systems and AI integrations underneath those platforms: the parts that have to be secure, compliant, and boring in the best way.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
            >
              View Selected Work
            </a>
            <a
              href="#download-resume"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all duration-200"
            >
              Download Résumé
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Interactive Architecture Topology */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-4 shadow-2xl">
            <TopologyDiagram />
          </div>
        </div>

      </div>

      {/* Integrated Live Ticker Strip */}
      <div className="w-full z-10">
        <Ticker />
      </div>

      {/* Download Resume anchor: centered under hero CTAs */}
      <div id="download-resume" className="z-10 mt-8 w-full flex justify-center">
        <div className="max-w-xl w-full text-center">
          <div className="border-t border-slate-800/60 pt-6">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-space mb-2">Download Résumé</div>
            <a href="/resume.pdf" className="inline-block text-sm font-semibold text-indigo-300 hover:text-indigo-400">Download PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
}