import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#work' },
    { name: 'Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand Row: portrait + brand */}
        <div className="flex items-center gap-4">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="header-portrait w-11 h-11 rounded-full overflow-hidden border border-slate-800/60">
              <img src="/passport.jpg" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight text-white">
              Egenes<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop: small site tagline */}
          <span className="hidden md:inline-block text-xs text-slate-400 font-ibm pl-1">Senior Software Engineer</span>
        </div>

        {/* Nav Row: placed under/next to brand for clarity */}
        <div className="w-full md:w-auto">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-400 transition-colors font-space text-sm uppercase tracking-wider px-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile toggle only on the far-right */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400 py-1 transition-colors"
            >
              // {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}