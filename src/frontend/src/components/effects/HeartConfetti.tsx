import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../ambient/usePrefersReducedMotion';

export function HeartConfetti() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setHearts(newHearts);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${heart.x}%`,
            top: '-10%',
            animationDelay: `${heart.delay}s`,
          }}
        >
          <span className="text-4xl">💖</span>
        </div>
      ))}
    </div>
  );
}
