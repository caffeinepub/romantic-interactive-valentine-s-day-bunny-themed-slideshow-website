import { useState, useEffect } from 'react';

interface ScreenMoonriseLetterProps {
  onNext: () => void;
}

export function ScreenMoonriseLetter({ onNext }: ScreenMoonriseLetterProps) {
  const [moonVisible, setMoonVisible] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [letterContent, setLetterContent] = useState('');

  useEffect(() => {
    // Moonrise animation
    const moonTimer = setTimeout(() => setMoonVisible(true), 500);
    
    // Envelope opens
    const envelopeTimer = setTimeout(() => setEnvelopeOpen(true), 2000);
    
    // Letter emerges
    const letterTimer = setTimeout(() => setLetterVisible(true), 3000);
    
    return () => {
      clearTimeout(moonTimer);
      clearTimeout(envelopeTimer);
      clearTimeout(letterTimer);
    };
  }, []);

  return (
    <div className="text-center max-w-4xl mx-auto px-4 relative">
      {/* Moonrise background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/generated/moonrise-scene.dim_1400x900.png"
          alt="Moonrise Scene"
          className={`w-full h-full object-cover transition-opacity duration-2000 ${
            moonVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Envelope animation */}
      <div className="relative mb-8 flex justify-center items-center min-h-[500px]">
        {!letterVisible && (
          <img
            src={
              envelopeOpen
                ? '/assets/generated/envelope-open.dim_900x700.png'
                : '/assets/generated/envelope-closed.dim_900x700.png'
            }
            alt="Envelope"
            className={`w-full max-w-md transition-all duration-1000 ${
              envelopeOpen ? 'animate-envelope-open' : ''
            }`}
          />
        )}

        {/* Letter emerging */}
        {letterVisible && (
          <div
            className={`relative w-full max-w-2xl transition-all duration-1000 ${
              letterVisible ? 'opacity-100 translate-y-0 animate-letter-emerge' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-romantic p-8 border-2 border-romantic-primary/20">
              <div
                className="absolute inset-0 -z-10 opacity-30"
                style={{
                  backgroundImage: 'url(/assets/generated/letter-sheet.dim_900x1100.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              <h3 className="text-2xl md:text-3xl font-bold text-romantic-primary mb-6">
                A Letter From My Heart 💌
              </h3>
              
              <textarea
                value={letterContent}
                onChange={(e) => setLetterContent(e.target.value)}
                placeholder="Write your heart's message here..."
                className="w-full h-64 p-4 text-lg rounded-xl bg-white/60 backdrop-blur-sm border-2 border-romantic-primary/30 text-romantic-dark placeholder:text-romantic-dark/40 focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 focus:border-romantic-primary resize-none"
              />
              
              <button
                onClick={onNext}
                className="mt-6 valentine-button valentine-button-yes text-xl md:text-2xl px-12 py-6 rounded-full font-bold shadow-romantic hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
              >
                Continue ❤️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
