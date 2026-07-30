
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-t from-transparent to-slate-900/60 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-800/60">
              <img src="/passport.jpg" alt="portrait" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-space text-lg font-bold">Egenes.dev</div>
              <div className="text-xs text-slate-400">Senior Software Engineer</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm">© {year} Brandon Egenes — Built with care.</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold text-white">Site</div>
          <a href="#about" className="text-slate-400 hover:text-indigo-400">About</a>
          <a href="#work" className="text-slate-400 hover:text-indigo-400">Selected Work</a>
          <a href="#skills" className="text-slate-400 hover:text-indigo-400">Skills</a>
        </div>

        <div className="flex flex-col items-start gap-3">
          <div className="text-sm font-semibold text-white">Download</div>
          <div className="text-slate-400 text-sm">Download Résumé</div>
          <a href="/resume.pdf" className="inline-block mt-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">Download PDF</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-slate-800/60 pt-6 text-center text-xs text-slate-500">
        Built with React, TypeScript — © {year} Brandon Egenes
      </div>
    </footer>
  );
}