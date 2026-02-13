import { useState } from 'react';
import { Heart } from 'lucide-react';

export function ScreenClosingNote() {
  const [note, setNote] = useState('');

  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <div className="mb-8 flex justify-center gap-2 items-center">
        <Heart className="w-12 h-12 text-romantic-primary fill-romantic-primary animate-pulse-soft" />
        <h1 className="text-4xl md:text-6xl font-bold text-romantic-primary animate-fade-in">
          Happy Valentine Day
        </h1>
        <Heart className="w-12 h-12 text-romantic-primary fill-romantic-primary animate-pulse-soft" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-romantic-dark mb-12 animate-fade-in">
        my love my future wifey
      </h2>

      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-romantic-primary via-romantic-accent to-romantic-lavender rounded-3xl blur opacity-30 animate-pulse-soft" />
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-romantic p-8 border-2 border-romantic-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-romantic-primary mb-6">
            My Last Note to You 💌
          </h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your final message here..."
            className="w-full h-64 p-6 text-lg rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-romantic-primary/30 text-romantic-dark placeholder:text-romantic-dark/40 focus:outline-none focus:ring-4 focus:ring-romantic-primary/50 focus:border-romantic-primary resize-none"
          />
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-romantic-primary/20">
        <p className="text-sm text-romantic-dark/60">
          © {new Date().getFullYear()} • Built with <Heart className="inline w-4 h-4 text-romantic-primary fill-romantic-primary" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
