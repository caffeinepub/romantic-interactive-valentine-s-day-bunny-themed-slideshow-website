import { useState } from 'react';
import { LoveLetterCard } from '../loveletters/LoveLetterCard';

interface ScreenLoveLettersProps {
  onNext: () => void;
}

interface LetterData {
  id: number;
  image: string;
  caption: string;
  photo?: string;
  notes?: string;
}

const initialLetters: LetterData[] = [
  {
    id: 1,
    image: '/assets/generated/love-letter-1.dim_700x900.png',
    caption: 'My favorite smile',
  },
  {
    id: 2,
    image: '/assets/generated/love-letter-2.dim_700x900.png',
    caption: 'My happy peace',
  },
  {
    id: 3,
    image: '/assets/generated/love-letter-3.dim_700x900.png',
    caption: 'My forever girl',
  },
  {
    id: 4,
    image: '/assets/generated/love-letter-4.dim_700x900.png',
    caption: 'My heart',
  },
  {
    id: 5,
    image: '/assets/generated/love-letter-5.dim_700x900.png',
    caption: 'My life',
  },
  {
    id: 6,
    image: '/assets/generated/love-letter-6.dim_700x900.png',
    caption: 'My future wifey',
  },
];

export function ScreenLoveLetters({ onNext }: ScreenLoveLettersProps) {
  const [letters, setLetters] = useState<LetterData[]>(initialLetters);
  const [openLetterId, setOpenLetterId] = useState<number | null>(null);

  const handlePhotoChange = (id: number, photo: string) => {
    setLetters(prev => prev.map(letter => 
      letter.id === id ? { ...letter, photo } : letter
    ));
  };

  const handleNotesChange = (id: number, notes: string) => {
    setLetters(prev => prev.map(letter => 
      letter.id === id ? { ...letter, notes } : letter
    ));
  };

  const handleToggleOpen = (id: number) => {
    setOpenLetterId(prev => prev === id ? null : id);
  };

  return (
    <div className="text-center max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-primary mb-12 animate-fade-in">
        Love Letters for You 💌
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {letters.map((letter, index) => (
          <LoveLetterCard
            key={letter.id}
            image={letter.image}
            caption={letter.caption}
            photo={letter.photo}
            notes={letter.notes}
            isOpen={openLetterId === letter.id}
            onToggleOpen={() => handleToggleOpen(letter.id)}
            onPhotoChange={(photo) => handlePhotoChange(letter.id, photo)}
            onNotesChange={(notes) => handleNotesChange(letter.id, notes)}
            delay={index * 100}
          />
        ))}
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
