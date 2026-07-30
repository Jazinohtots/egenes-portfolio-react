import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      aria-hidden
      style={{ transform: `translate3d(${pos.x - 120}px, ${pos.y - 120}px, 0)` }}
      className="pointer-events-none fixed w-[240px] h-[240px] rounded-full bg-gradient-to-r from-indigo-500/20 via-cyan-300/12 to-transparent blur-3xl opacity-60 mix-blend-screen -z-20"
    />
  );
}
