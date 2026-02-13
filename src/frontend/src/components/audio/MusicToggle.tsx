import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

export function MusicToggle({ isMuted, onToggle }: MusicToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-romantic flex items-center justify-center text-romantic-primary hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-romantic-primary/50"
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6" />
      ) : (
        <Volume2 className="w-6 h-6" />
      )}
    </button>
  );
}
