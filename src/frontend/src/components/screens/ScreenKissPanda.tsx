import { useState, useEffect } from 'react';
import { HeartParticleField } from '../ambient/HeartParticleField';

interface ScreenKissPandaProps {
  onNext: () => void;
}

export function ScreenKissPanda({ onNext }: ScreenKissPandaProps) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center max-w-2xl mx-auto px-4 relative">
      <HeartParticleField />
      
      <img
        src="/assets/generated/boy-glasses-kiss.dim_800x800.png"
        alt="Boy with glasses blowing kisses"
        className="w-80 h-80 mx-auto mb-8 animate-kiss relative z-10"
      />
      
      <div
        className={`transition-all duration-1000 relative z-10 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-romantic-primary mb-12 leading-relaxed">
          If I could, I'd kiss you a thousand times right now 💋 
        </h2>

        <button
          onClick={onNext}
          className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
