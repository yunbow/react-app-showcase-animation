import { useState, useEffect, useRef } from 'react';

interface UseTextRevealProps {
  duration?: number;
  delay?: number;
}

interface UseTextRevealReturn {
  isRevealed: boolean;
  reveal: () => void;
  hide: () => void;
  maskStyle: React.CSSProperties;
}

const useTextReveal = ({ duration = 1000, delay = 0 }: UseTextRevealProps = {}): UseTextRevealReturn => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [maskPosition, setMaskPosition] = useState(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isRevealed) return;

    const startTime = Date.now() + delay;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      setMaskPosition(progress * 100);

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
  }, [isRevealed, duration, delay]);

  const reveal = () => {
    setIsRevealed(true);
    setMaskPosition(0);
  };

  const hide = () => {
    setIsRevealed(false);
    setMaskPosition(0);
  };

  const maskStyle: React.CSSProperties = {
    clipPath: `inset(0 ${100 - maskPosition}% 0 0)`,
    transition: 'none',
  };

  return {
    isRevealed,
    reveal,
    hide,
    maskStyle,
  };
};

export default useTextReveal;
