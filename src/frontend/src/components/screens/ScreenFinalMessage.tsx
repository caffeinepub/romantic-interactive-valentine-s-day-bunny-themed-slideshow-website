import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ScreenFinalMessageProps {
  onNext: () => void;
}

export function ScreenFinalMessage({ onNext }: ScreenFinalMessageProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="text-center max-w-5xl mx-auto px-4">
      <div className="mb-8 flex justify-center">
        <img
          src="/assets/generated/boy-glasses-final.dim_800x800.png"
          alt="Boy with glasses"
          className="w-64 h-64 animate-fade-in"
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-romantic-primary mb-8 animate-fade-in">
        My message to you…
      </h2>

      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-romantic-primary via-romantic-accent to-romantic-lavender rounded-3xl blur opacity-30 animate-pulse-soft" />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your heart out..."
          className="relative w-full h-64 p-6 text-lg rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-romantic-primary/30 text-romantic-dark placeholder:text-romantic-dark/40 focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 focus:border-romantic-primary shadow-glow resize-none"
        />
      </div>

      <div className="flex items-center justify-center gap-3 mb-12">
        <Heart className="w-8 h-8 text-romantic-primary fill-romantic-primary animate-pulse-soft" />
        <p className="text-3xl md:text-4xl font-bold text-romantic-primary">
          Forever yours.
        </p>
        <Heart className="w-8 h-8 text-romantic-primary fill-romantic-primary animate-pulse-soft" />
      </div>

      <button
        onClick={onNext}
        className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
      >
        Continue ❤️
      </button>
    </div>
  );
}
