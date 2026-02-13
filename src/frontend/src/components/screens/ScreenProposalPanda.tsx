import { useState } from 'react';

interface ScreenProposalPandaProps {
  onNext: () => void;
}

export function ScreenProposalPanda({ onNext }: ScreenProposalPandaProps) {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleAnswer = () => {
    setShowCelebration(true);
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="text-center max-w-2xl mx-auto px-4 relative">
      <img
        src="/assets/generated/boy-glasses-proposal.dim_800x800.png"
        alt="Boy with glasses proposing"
        className="w-80 h-80 mx-auto mb-8 animate-proposal"
      />
      
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-8xl animate-celebration-bounce">
            🎉💕✨
          </div>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-primary mb-12 animate-fade-in">
        Will you marry me in future? 💍
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          onClick={handleAnswer}
          className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
        >
          👉 Of course ❤️
        </button>
        <button
          onClick={handleAnswer}
          className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
        >
          👉 Always ❤️
        </button>
      </div>
    </div>
  );
}
