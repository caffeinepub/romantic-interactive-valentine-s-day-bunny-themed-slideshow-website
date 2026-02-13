import { useState, useEffect } from 'react';

interface ScreenIntroMessageProps {
  onNext: () => void;
}

export function ScreenIntroMessage({ onNext }: ScreenIntroMessageProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <div
        className={`transition-all duration-1000 mb-12 ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-xl md:text-2xl text-romantic-dark leading-relaxed">
          You make my world brighter every day… and I want to ask you something special.
        </p>
      </div>

      <button
        onClick={onNext}
        className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
      >
        Continue
      </button>
    </div>
  );
}
