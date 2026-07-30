import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import CurrentBuilds from './components/CurrentBuilds';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import CursorGlow from './components/CursorGlow';

function SectionTransition({ variant }: { variant: 'circuit' | 'cloud' | 'pipeline' | 'mesh' | 'terminal' | 'signal' }) {
  return <div className={`section-transition section-transition--${variant}`} aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300 relative overflow-x-hidden">
      {/* Ambient background glow layers */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-10" />

      {/* Main Layout */}
      <Header />
        <CommandPalette />
        <CursorGlow />
      
      <main id="top" className="relative z-10 flex flex-col gap-8 sm:gap-12">
        <Hero />
        <SectionTransition variant="circuit" />
        <About />
        <SectionTransition variant="cloud" />
        <SelectedWork />
        <SectionTransition variant="pipeline" />
        <CurrentBuilds />
        <SectionTransition variant="mesh" />
        <Skills />
        <SectionTransition variant="terminal" />
        <Experience />
        <SectionTransition variant="signal" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}