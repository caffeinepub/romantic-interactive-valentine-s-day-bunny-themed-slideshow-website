interface ScreenHappyPandaProps {
  onNext: () => void;
}

export function ScreenHappyPanda({ onNext }: ScreenHappyPandaProps) {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <img
        src="/assets/generated/boy-glasses-happy-dance.dim_800x800.png"
        alt="Happy dancing boy with glasses"
        className="w-80 h-80 mx-auto mb-8 animate-dance"
      />
      
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-primary mb-12 animate-fade-in">
        You just made me the happiest person alive!  💞
      </h2>

      <button
        onClick={onNext}
        className="valentine-button valentine-button-sparkle text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 animate-sparkle"
      >
        Continue ✨
      </button>
    </div>
  );
}
