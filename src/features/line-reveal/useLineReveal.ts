import { useState, useEffect, useRef } from 'react';

interface UseLineRevealProps {
  duration?: number;
}

interface UseLineRevealReturn {
  isRevealed: boolean;
  reveal: () => void;
  reset: () => void;
  lineStyle: React.CSSProperties;
  textStyle: React.CSSProperties;
}

const useLineReveal = ({
  duration = 1000,
}: UseLineRevealProps = {}): UseLineRevealReturn => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isRevealed) {
      setLineProgress(0);
      setTextOpacity(0);
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setLineProgress(progress);

      if (progress > 0.5) {
        const textProgress = (progress - 0.5) * 2;
        setTextOpacity(textProgress);
      }

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
  }, [isRevealed, duration]);

  const reveal = () => setIsRevealed(true);
  const reset = () => setIsRevealed(false);

  const lineStyle: React.CSSProperties = {
    width: `${lineProgress * 100}%`,
    transition: 'none',
  };

  const textStyle: React.CSSProperties = {
    opacity: textOpacity,
    transform: `translateY(${(1 - textOpacity) * 20}px)`,
    transition: 'none',
  };

  return {
    isRevealed,
    reveal,
    reset,
    lineStyle,
    textStyle,
  };
};

export default useLineReveal;
