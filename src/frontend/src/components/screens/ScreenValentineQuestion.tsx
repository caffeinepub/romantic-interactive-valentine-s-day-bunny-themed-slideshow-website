import { useState, useEffect } from 'react';
import { ValentineSkyConfetti } from '../effects/ValentineSkyConfetti';

interface ScreenValentineQuestionProps {
  onNext: () => void;
  onUserInteraction: () => void;
}

export function ScreenValentineQuestion({ onNext, onUserInteraction }: ScreenValentineQuestionProps) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAngryBoy, setShowAngryBoy] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleNo = () => {
    onUserInteraction();
    
    if (noAttempts === 0) {
      // First NO: show angry boy with glasses
      setNoAttempts(1);
      setShowAngryBoy(true);
      setTimeout(() => {
        setShowAngryBoy(false);
      }, 2500);
    } else if (noAttempts === 1) {
      // Second NO: fade out the button
      setNoAttempts(2);
    }
  };

  const handleYes = () => {
    onUserInteraction();
    setShowConfetti(true);
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  if (showAngryBoy) {
    return (
      <div className="text-center max-w-2xl mx-auto px-4 animate-shake">
        <img
          src="/assets/generated/boy-glasses-angry.dim_800x800.png"
          alt="Angry boy with glasses"
          className="w-64 h-64 mx-auto mb-8 animate-bounce"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark mb-4">
          Wrong answer! Try again 😤
        </h2>
      </div>
    );
  }

  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      {showConfetti && <ValentineSkyConfetti />}
      
      <div
        className={`transition-all duration-1000 ${
          showQuestion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-romantic-dark mb-12">
          Will you be my Valentine?
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleYes}
            className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
          >
            👉 YES 💖
          </button>
          <button
            onClick={handleNo}
            disabled={noAttempts >= 2}
            className={`valentine-button valentine-button-no text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-romantic-accent/50 ${
              noAttempts >= 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            👉 NO 😠
          </button>
        </div>
      </div>
    </div>
  );
}
