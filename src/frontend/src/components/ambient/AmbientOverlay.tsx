import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  type: 'heart' | 'sparkle';
}

export function AmbientOverlay() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      type: Math.random() > 0.5 ? 'heart' : 'sparkle',
    }));
    setParticles(newParticles);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-ambient opacity-30 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === 'heart' ? (
            <span className="text-2xl text-romantic-primary pointer-events-none">💕</span>
          ) : (
            <span className="text-xl text-romantic-accent pointer-events-none">✨</span>
          )}
        </div>
      ))}
    </div>
  );
}
