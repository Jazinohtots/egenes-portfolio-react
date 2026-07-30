
export default function TopologyDiagram() {
  return (
    <div className="relative rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden group" aria-hidden="true">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern Cybernetic Grid Line Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <svg viewBox="0 0 420 380" className="w-full max-w-[420px] h-auto relative z-10 filter drop-shadow-xl">
        <defs>
          {/* Node Glow Filters */}
          <filter id="glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Line Gradients */}
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Connecting Edges */}
        <g className="edges" stroke="url(#edgeGradient)" strokeWidth={1.75} fill="none" strokeDasharray="none">
          <path d="M70,60 L210,140" />
          <path d="M350,60 L210,140" />
          <path d="M210,140 L210,210" />
          <path d="M210,210 L90,290" />
          <path d="M210,210 L210,290" />
          <path d="M210,210 L330,290" />
        </g>

        {/* Traveling Data Pulses */}
        {/* Pulse 1: Ingestion to Azure OpenAI */}
        <circle r={4} fill="#22d3ee" className="filter drop-shadow-[0_0_6px_#22d3ee]">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M70,60 L210,140 L210,210 L210,290" />
        </circle>

        {/* Pulse 2: Frontend to PostgreSQL */}
        <circle r={3.5} fill="#818cf8" className="filter drop-shadow-[0_0_6px_#818cf8]">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M350,60 L210,140 L210,210 L330,290" />
        </circle>

        {/* Ingress Nodes (Top) */}
        <g className="node cursor-pointer group/node" transform="translate(70,60)">
          <circle r={22} className="fill-slate-950 stroke-slate-700 stroke-2 group-hover/node:stroke-indigo-400 transition-colors" />
          <text y={42} textAnchor="middle" className="fill-slate-400 font-mono text-[11px] font-medium tracking-wider">React</text>
        </g>

        <g className="node cursor-pointer group/node" transform="translate(350,60)">
          <circle r={22} className="fill-slate-950 stroke-slate-700 stroke-2 group-hover/node:stroke-indigo-400 transition-colors" />
          <text y={42} textAnchor="middle" className="fill-slate-400 font-mono text-[11px] font-medium tracking-wider">Angular</text>
        </g>

        {/* Core Processing Engine Nodes (Center) */}
        <g className="node node-core cursor-pointer group/node" transform="translate(210,140)">
          <circle r={26} className="fill-indigo-950/80 stroke-indigo-500 stroke-2 filter drop-shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover/node:stroke-indigo-400 transition-all" />
          <text y={44} textAnchor="middle" className="fill-indigo-300 font-mono text-[11px] font-bold tracking-wider">API Gateway</text>
        </g>

        <g className="node node-core cursor-pointer group/node" transform="translate(210,210)">
          <circle r={26} className="fill-indigo-900/90 stroke-indigo-400 stroke-2 filter drop-shadow-[0_0_12px_rgba(99,102,241,0.5)] group-hover/node:scale-105 transition-all" />
          <text y={4} textAnchor="middle" dominantBaseline="middle" className="fill-white font-mono text-xs font-extrabold tracking-wide">.NET 8</text>
        </g>

        {/* Data Layer Nodes (Bottom) */}
        <g className="node cursor-pointer group/node" transform="translate(90,290)">
          <circle r={22} className="fill-slate-950 stroke-slate-700 stroke-2 group-hover/node:stroke-cyan-400 transition-colors" />
          <text y={42} textAnchor="middle" className="fill-slate-400 font-mono text-[11px] font-medium tracking-wider">Snowflake</text>
        </g>

        <g className="node cursor-pointer group/node" transform="translate(210,290)">
          <circle r={24} className="fill-cyan-950/80 stroke-cyan-500 stroke-2 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] group-hover/node:stroke-cyan-300 transition-colors" />
          <text y={42} textAnchor="middle" className="fill-cyan-300 font-mono text-[11px] font-bold tracking-wider">Azure OpenAI</text>
        </g>

        <g className="node cursor-pointer group/node" transform="translate(330,290)">
          <circle r={22} className="fill-slate-950 stroke-slate-700 stroke-2 group-hover/node:stroke-cyan-400 transition-colors" />
          <text y={42} textAnchor="middle" className="fill-slate-400 font-mono text-[11px] font-medium tracking-wider">PostgreSQL</text>
        </g>
      </svg>

      {/* Terminal Caption */}
      <div className="mt-4 font-mono text-xs text-slate-500 tracking-wider flex items-center gap-2 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        // representative service topology
      </div>
    </div>
  );
}