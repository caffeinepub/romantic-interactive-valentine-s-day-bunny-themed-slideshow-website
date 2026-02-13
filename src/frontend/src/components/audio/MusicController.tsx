import { useEffect, useRef, useState } from 'react';
import { MusicToggle } from './MusicToggle';

interface MusicControllerProps {
  hasInteracted: boolean;
}

export function MusicController({ hasInteracted }: MusicControllerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/music/romantic-loop.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (hasInteracted && !isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, user will need to unmute
      });
      setIsPlaying(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasInteracted, isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return <MusicToggle isMuted={isMuted} onToggle={toggleMute} />;
}
