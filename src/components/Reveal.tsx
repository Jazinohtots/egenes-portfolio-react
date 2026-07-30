import { ElementType, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Reveal({ children, as: Tag = 'div', className = '' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-[0.98]'
      } ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}