import { LoveStoryAnimation } from '../story/LoveStoryAnimation';

interface ScreenStoryPageProps {
  onNext: () => void;
}

export function ScreenStoryPage({ onNext }: ScreenStoryPageProps) {
  return (
    <div className="text-center max-w-5xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-primary mb-8 animate-fade-in">
        Our Love Story 💑
      </h2>

      <div className="mb-12">
        <LoveStoryAnimation />
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
