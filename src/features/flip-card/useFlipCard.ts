import { useState, useCallback, useEffect } from 'react';

interface UseFlipCardProps {
  duration?: number;
  autoFlipInterval?: number;
}

const useFlipCard = ({
  duration = 600,
  autoFlipInterval,
}: UseFlipCardProps = {}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const flip = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsFlipped((prev) => !prev);

    setTimeout(() => {
      setIsAnimating(false);
    }, duration);
  }, [isAnimating, duration]);

  const flipTo = useCallback((side: 'front' | 'back') => {
    const shouldFlip = (side === 'back' && !isFlipped) || (side === 'front' && isFlipped);
    if (shouldFlip && !isAnimating) {
      flip();
    }
  }, [isFlipped, isAnimating, flip]);

  useEffect(() => {
    if (!autoFlipInterval) return;

    const interval = setInterval(() => {
      flip();
    }, autoFlipInterval);

    return () => clearInterval(interval);
  }, [autoFlipInterval, flip]);

  const containerStyle = {
    perspective: '1000px',
  };

  const cardStyle = {
    width: '100%',
    height: '100%',
    position: 'relative' as const,
    transformStyle: 'preserve-3d' as const,
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  const faceStyle = {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const,
  };

  const frontStyle = {
    ...faceStyle,
  };

  const backStyle = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  };

  return {
    isFlipped,
    isAnimating,
    flip,
    flipTo,
    containerStyle,
    cardStyle,
    frontStyle,
    backStyle,
  };
};

export default useFlipCard;
