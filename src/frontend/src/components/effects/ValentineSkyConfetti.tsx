import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../ambient/usePrefersReducedMotion';
import { Heart, Star, Moon } from 'lucide-react';

export function ValentineSkyConfetti() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; type: 'heart' | 'star' | 'moon' }>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.8,
      type: i % 3 === 0 ? 'star' : i % 5 === 0 ? 'moon' : 'heart' as 'heart' | 'star' | 'moon',
    }));
    setParticles(newParticles);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            top: '-10%',
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === 'heart' && (
            <Heart className="w-8 h-8 text-romantic-primary fill-romantic-primary" />
          )}
          {particle.type === 'star' && (
            <Star className="w-7 h-7 text-romantic-accent fill-romantic-accent" />
          )}
          {particle.type === 'moon' && (
            <Moon className="w-6 h-6 text-romantic-lavender fill-romantic-lavender" />
          )}
        </div>
      ))}
    </div>
  );
}
