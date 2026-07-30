import { tickerItems } from '../data/ticker';

// Interleave "·" between each keyword, matching how the layout expects
// alternating spans (odd spans as tech tags, even spans as glowing dots)
function withSeparators(items: string[]): string[] {
  return items.flatMap((item, i) => (i === 0 ? [item] : ['·', item]));
}

export default function Ticker() {
  const oneLoop = withSeparators(tickerItems);
  // Rendered twice back-to-back so the CSS animation can loop seamlessly
  const doubled = [...oneLoop, '·', ...oneLoop];

  return (
    <div 
      className="ticker relative w-full overflow-hidden bg-slate-950/60 backdrop-blur-md py-3.5"
      role="presentation"
    >
      {/* Edge Blur Fades for Ultra-Smooth Infinite Loop Visual */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="ticker-track flex items-center whitespace-nowrap space-x-8 animate-marquee">
        {doubled.map((item, i) => {
          const isSeparator = item === '·';
          return (
            <span
              key={`${item}-${i}`}
              className={
                isSeparator
                  ? "text-indigo-500 font-bold text-sm px-1 animate-pulse"
                  : "text-slate-300 font-space text-sm uppercase tracking-wide hover:text-white transition-colors font-semibold"
              }
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}