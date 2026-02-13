interface ScreenIntroHeyProps {
  onNext: () => void;
}

export function ScreenIntroHey({ onNext }: ScreenIntroHeyProps) {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-romantic-primary mb-12 animate-fade-in">
        HEY JAAN ❤️
      </h1>

      <button
        onClick={onNext}
        className="valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
      >
        Continue
      </button>
    </div>
  );
}
