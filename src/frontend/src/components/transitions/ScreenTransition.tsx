import { type ReactNode } from 'react';
import { usePrefersReducedMotion } from '../ambient/usePrefersReducedMotion';

interface ScreenTransitionProps {
  children: ReactNode;
  isVisible: boolean;
}

export function ScreenTransition({ children, isVisible }: ScreenTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={`transition-all duration-500 ${
        prefersReducedMotion ? '' : 'ease-out'
      } ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
}
