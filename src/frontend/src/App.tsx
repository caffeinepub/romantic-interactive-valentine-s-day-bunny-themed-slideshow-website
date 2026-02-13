import { useState } from 'react';
import { ValentineSlideshow } from './components/ValentineSlideshow';
import { MusicController } from './components/audio/MusicController';
import { AmbientOverlay } from './components/ambient/AmbientOverlay';
import { PreIntroAnimation } from './components/intro/PreIntroAnimation';

function App() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPreIntro, setShowPreIntro] = useState(true);

  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handlePreIntroComplete = () => {
    setShowPreIntro(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {showPreIntro && <PreIntroAnimation onComplete={handlePreIntroComplete} />}
      <AmbientOverlay />
      <div className="relative z-10">
        <MusicController hasInteracted={hasInteracted} />
        <ValentineSlideshow onUserInteraction={handleUserInteraction} />
      </div>
    </div>
  );
}

export default App;
