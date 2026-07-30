import { useEffect, useState, useMemo, useRef } from 'react';

type Action = { id: string; title: string; subtitle?: string; href?: string; fn?: () => void };

const DEFAULT_ACTIONS: Action[] = [
  { id: 'about', title: 'About', subtitle: 'Open About section', href: '#about' },
  { id: 'work', title: 'Selected Work', subtitle: "Open Selected Work", href: '#work' },
  { id: 'current', title: 'Current Builds', subtitle: "Open Current Builds", href: '#current' },
  { id: 'skills', title: 'Skills', subtitle: "Open Skills section", href: '#skills' },
  { id: 'experience', title: 'Experience', subtitle: "Open Experience section", href: '#experience' },
  { id: 'contact', title: 'Contact', subtitle: "Open Contact", href: '#contact' },
  { id: 'resume', title: 'Download Résumé', subtitle: 'Open résumé PDF', href: '/resume.pdf' }
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery('');
    }
  }, [open]);

  const actions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEFAULT_ACTIONS;
    return DEFAULT_ACTIONS.filter(a => `${a.title} ${a.subtitle ?? ''}`.toLowerCase().includes(q));
  }, [query]);

  const run = (a: Action) => {
    setOpen(false);
    if (a.fn) return a.fn();
    if (a.href?.startsWith('#')) {
      const id = a.href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else location.hash = a.href;
    } else if (a.href) {
      window.open(a.href, '_blank');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl bg-slate-900/70 border border-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl py-4">
        <div className="px-4">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to a section... (Ctrl/Cmd+K)"
              className="w-full bg-transparent outline-none text-white placeholder:text-slate-400 px-3 py-3 text-sm"
              aria-label="Command palette input"
            />
            <div className="text-xs text-slate-400 opacity-90 mr-2">Esc to close</div>
          </div>
        </div>

        <div className="mt-3 max-h-60 overflow-auto">
          {actions.length === 0 && (
            <div className="px-4 py-3 text-slate-400">No results</div>
          )}
          <ul>
            {actions.map((a) => (
              <li key={a.id}>
                <button
                  onClick={() => run(a)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-800/60 transition-colors flex flex-col"
                >
                  <span className="font-space text-sm font-semibold">{a.title}</span>
                  {a.subtitle && <span className="text-xs text-slate-400">{a.subtitle}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
