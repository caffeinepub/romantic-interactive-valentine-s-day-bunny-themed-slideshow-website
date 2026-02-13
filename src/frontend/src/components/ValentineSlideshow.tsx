import { useState } from 'react';
import { ScreenIntroHey } from './screens/ScreenIntroHey';
import { ScreenIntroMessage } from './screens/ScreenIntroMessage';
import { ScreenValentineQuestion } from './screens/ScreenValentineQuestion';
import { ScreenHappyPanda } from './screens/ScreenHappyPanda';
import { ScreenLoveLetters } from './screens/ScreenLoveLetters';
import { ScreenKissPanda } from './screens/ScreenKissPanda';
import { ScreenProposalPanda } from './screens/ScreenProposalPanda';
import { ScreenMoonriseLetter } from './screens/ScreenMoonriseLetter';
import { ScreenFinalMessage } from './screens/ScreenFinalMessage';
import { ScreenStoryPage } from './screens/ScreenStoryPage';
import { ScreenClosingNote } from './screens/ScreenClosingNote';
import { ScreenTransition } from './transitions/ScreenTransition';

interface ValentineSlideshowProps {
  onUserInteraction: () => void;
}

export function ValentineSlideshow({ onUserInteraction }: ValentineSlideshowProps) {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = async () => {
    if (isTransitioning) return;
    
    onUserInteraction();
    setIsTransitioning(true);
    
    // Wait for exit animation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCurrentScreen(prev => Math.min(prev + 1, 11));
    setIsTransitioning(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <ScreenIntroHey onNext={handleNext} />;
      case 2:
        return <ScreenIntroMessage onNext={handleNext} />;
      case 3:
        return <ScreenValentineQuestion onNext={handleNext} onUserInteraction={onUserInteraction} />;
      case 4:
        return <ScreenHappyPanda onNext={handleNext} />;
      case 5:
        return <ScreenLoveLetters onNext={handleNext} />;
      case 6:
        return <ScreenKissPanda onNext={handleNext} />;
      case 7:
        return <ScreenProposalPanda onNext={handleNext} />;
      case 8:
        return <ScreenMoonriseLetter onNext={handleNext} />;
      case 9:
        return <ScreenFinalMessage onNext={handleNext} />;
      case 10:
        return <ScreenStoryPage onNext={handleNext} />;
      case 11:
        return <ScreenClosingNote />;
      default:
        return <ScreenIntroHey onNext={handleNext} />;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <ScreenTransition isVisible={!isTransitioning}>
        {renderScreen()}
      </ScreenTransition>
    </div>
  );
}
