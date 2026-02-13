import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export function HeartParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: 0.8 + Math.random() * 0.4,
    }));
    setParticles(newParticles);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-slow opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            transform: `scale(${particle.size})`,
          }}
        >
          <span className="text-3xl text-romantic-primary">💗</span>
        </div>
      ))}
    </div>
  );
}
