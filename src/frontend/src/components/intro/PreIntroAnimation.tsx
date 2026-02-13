import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../ambient/usePrefersReducedMotion';
import { Heart } from 'lucide-react';

interface PreIntroAnimationProps {
  onComplete: () => void;
}

export function PreIntroAnimation({ onComplete }: PreIntroAnimationProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState<'fade-in' | 'hold' | 'fade-out'>('fade-in');

  useEffect(() => {
    if (prefersReducedMotion) {
      // Near-instant completion for reduced motion
      const timer = setTimeout(onComplete, 100);
      return () => clearTimeout(timer);
    }

    // Normal animation sequence
    const fadeInTimer = setTimeout(() => {
      setStage('hold');
    }, 800);

    const holdTimer = setTimeout(() => {
      setStage('fade-out');
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-romantic-pink-light via-romantic-white to-romantic-lavender opacity-0 pointer-events-none">
        <Heart className="w-16 h-16 text-romantic-primary" />
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-romantic-pink-light via-romantic-white to-romantic-lavender transition-opacity duration-700 pointer-events-none ${
        stage === 'fade-in' ? 'opacity-0' : stage === 'hold' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Valentine Day text */}
        <div
          className={`transition-all duration-700 mb-4 ${
            stage === 'fade-in'
              ? 'scale-50 opacity-0'
              : stage === 'hold'
                ? 'scale-100 opacity-100'
                : 'scale-150 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-romantic-primary text-center">
            Happy Valentine Day
          </h1>
        </div>

        {/* Main heart with gentle pulse */}
        <div
          className={`transition-all duration-700 ${
            stage === 'fade-in'
              ? 'scale-50 opacity-0'
              : stage === 'hold'
                ? 'scale-100 opacity-100 animate-pre-intro-pulse'
                : 'scale-150 opacity-0'
          }`}
        >
          <Heart className="w-20 h-20 text-romantic-primary fill-romantic-primary drop-shadow-lg" />
        </div>

        {/* Orbiting hearts */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`absolute transition-all duration-700 ${
              stage === 'hold' ? 'animate-pre-intro-orbit-1' : 'opacity-0'
            }`}
          >
            <Heart className="w-8 h-8 text-romantic-lavender fill-romantic-lavender" />
          </div>
          <div
            className={`absolute transition-all duration-700 ${
              stage === 'hold' ? 'animate-pre-intro-orbit-2' : 'opacity-0'
            }`}
          >
            <Heart className="w-6 h-6 text-romantic-pink fill-romantic-pink" />
          </div>
          <div
            className={`absolute transition-all duration-700 ${
              stage === 'hold' ? 'animate-pre-intro-orbit-3' : 'opacity-0'
            }`}
          >
            <Heart className="w-7 h-7 text-romantic-lavender fill-romantic-lavender" />
          </div>
        </div>
      </div>
    </div>
  );
}
