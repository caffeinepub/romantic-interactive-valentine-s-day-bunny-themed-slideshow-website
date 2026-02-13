import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '../ambient/usePrefersReducedMotion';

const storyFrames = [
  {
    id: 1,
    image: '/assets/generated/boy-story-1.dim_900x900.png',
    caption: 'Long distance... but hearts connected',
  },
  {
    id: 2,
    image: '/assets/generated/boy-story-2.dim_900x900.png',
    caption: 'Every call, every message brought us closer',
  },
  {
    id: 3,
    image: '/assets/generated/boy-story-3.dim_900x900.png',
    caption: 'Finally together, making memories',
  },
  {
    id: 4,
    image: '/assets/generated/boy-story-4.dim_900x900.png',
    caption: 'Our happily ever after begins 💍',
  },
  {
    id: 5,
    image: '/assets/generated/boy-story-5.dim_900x900.png',
    caption: 'Our beautiful family of seven 👨‍👩‍👧‍👦❤️',
  },
];

export function LoveStoryAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // In reduced motion mode, don't auto-advance
      return;
    }

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % storyFrames.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleFrameClick = (index: number) => {
    setCurrentFrame(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-romantic p-8 mb-6">
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <img
            src={storyFrames[currentFrame].image}
            alt={storyFrames[currentFrame].caption}
            className={`w-full h-auto ${prefersReducedMotion ? '' : 'animate-fade-in'}`}
            key={currentFrame}
          />
        </div>
        
        <p className="text-xl md:text-2xl font-semibold text-romantic-primary text-center">
          {storyFrames[currentFrame].caption}
        </p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap">
        {storyFrames.map((frame, index) => (
          <button
            key={frame.id}
            onClick={() => handleFrameClick(index)}
            className={`w-16 h-16 rounded-xl overflow-hidden border-3 transition-all focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 ${
              currentFrame === index
                ? 'border-romantic-primary scale-110 shadow-romantic'
                : 'border-romantic-primary/30 hover:border-romantic-primary/60 hover:scale-105'
            }`}
            aria-label={`View frame ${index + 1}: ${frame.caption}`}
          >
            <img
              src={frame.image}
              alt={`Story frame ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
