import { useState, useEffect, useRef } from 'react';

interface UseBlurRevealProps {
  duration?: number;
  maxBlur?: number;
}

interface UseBlurRevealReturn {
  isRevealed: boolean;
  reveal: () => void;
  reset: () => void;
  blurStyle: React.CSSProperties;
}

const useBlurReveal = ({
  duration = 2000,
  maxBlur = 20,
}: UseBlurRevealProps = {}): UseBlurRevealReturn => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [blurAmount, setBlurAmount] = useState(maxBlur);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isRevealed) {
      setBlurAmount(maxBlur);
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentBlur = maxBlur * (1 - progress);

      setBlurAmount(currentBlur);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRevealed, duration, maxBlur]);

  const reveal = () => setIsRevealed(true);

  const reset = () => {
    setIsRevealed(false);
    setBlurAmount(maxBlur);
  };

  const blurStyle: React.CSSProperties = {
    filter: `blur(${blurAmount}px)`,
    transition: 'none',
  };

  return {
    isRevealed,
    reveal,
    reset,
    blurStyle,
  };
};

export default useBlurReveal;
