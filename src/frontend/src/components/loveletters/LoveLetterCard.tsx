import { useRef } from 'react';
import { Upload } from 'lucide-react';

interface LoveLetterCardProps {
  image: string;
  caption: string;
  photo?: string;
  notes?: string;
  isOpen: boolean;
  onToggleOpen: () => void;
  onPhotoChange: (photo: string) => void;
  onNotesChange: (notes: string) => void;
  delay?: number;
}

export function LoveLetterCard({ 
  image, 
  caption, 
  photo, 
  notes, 
  isOpen, 
  onToggleOpen, 
  onPhotoChange, 
  onNotesChange, 
  delay = 0 
}: LoveLetterCardProps) {
  const photoAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              onPhotoChange(event.target.result as string);
            }
          };
          reader.readAsDataURL(blob);
        }
        break;
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onPhotoChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePhotoAreaClick();
    }
  };

  return (
    <div
      className="relative animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {!isOpen ? (
        <button
          onClick={onToggleOpen}
          className="w-full focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 rounded-2xl transition-transform hover:scale-105"
          aria-label={`Open love letter: ${caption}`}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-romantic bg-white/90 backdrop-blur-sm">
            <img
              src={image}
              alt={caption}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center mt-4 text-lg font-semibold text-romantic-dark">
            {caption}
          </p>
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={onToggleOpen}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-romantic-primary text-white flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
            aria-label="Close letter"
          >
            ✕
          </button>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-romantic p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-romantic-primary mb-4 text-center">
              {caption}
            </h3>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              aria-label="Choose photo"
            />
            
            <div
              ref={photoAreaRef}
              onPaste={handlePaste}
              onClick={handlePhotoAreaClick}
              onKeyDown={handlePhotoAreaKeyDown}
              tabIndex={0}
              role="button"
              aria-label="Photo frame - click to choose or paste an image"
              className="w-full h-64 bg-romantic-pink-light/20 rounded-xl mb-4 flex items-center justify-center border-4 border-dashed border-romantic-primary/30 overflow-hidden cursor-pointer hover:border-romantic-primary/50 transition-colors focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
            >
              {photo ? (
                <img src={photo} alt="Your photo" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <Upload className="w-12 h-12 text-romantic-primary/60 mx-auto mb-2" />
                  <p className="text-romantic-dark/60 text-sm mb-2 font-semibold">📷 Photo Frame</p>
                  <p className="text-romantic-dark/50 text-xs mb-1">Click to choose a photo</p>
                  <p className="text-romantic-dark/40 text-xs">or paste (Ctrl+V / Cmd+V)</p>
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold text-romantic-dark mb-2">
                Your notes:
              </label>
              <textarea
                value={notes || ''}
                onChange={(e) => onNotesChange(e.target.value)}
                placeholder="Write something special..."
                className="w-full h-32 p-3 text-sm rounded-xl bg-white border-2 border-romantic-primary/20 text-romantic-dark placeholder:text-romantic-dark/40 focus:outline-none focus:ring-2 focus:ring-romantic-primary/50 focus:border-romantic-primary resize-none"
              />
            </div>
            
            <div className="flex justify-around pointer-events-none">
              <span className="text-3xl animate-float">💕</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '0.2s' }}>💖</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '0.4s' }}>💗</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
