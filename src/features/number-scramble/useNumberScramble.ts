import { useState, useEffect, useRef } from 'react';

interface UseNumberScrambleProps {
  targetValue: number | string;
  duration?: number;
  characters?: string;
}

interface UseNumberScrambleReturn {
  displayValue: string;
  isScrambling: boolean;
  scramble: () => void;
}

const useNumberScramble = ({
  targetValue,
  duration = 2000,
  characters = '0123456789',
}: UseNumberScrambleProps): UseNumberScrambleReturn => {
  const [displayValue, setDisplayValue] = useState(String(targetValue));
  const [isScrambling, setIsScrambling] = useState(false);
  const animationFrameRef = useRef<number>();
  const intervalRef = useRef<number>();

  const scramble = () => {
    setIsScrambling(true);
    const target = String(targetValue);
    const startTime = Date.now();
    const scrambleInterval = 50;

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        setDisplayValue(target);
        setIsScrambling(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      const revealedLength = Math.floor(target.length * progress);
      const scrambledPart = target
        .slice(revealedLength)
        .split('')
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join('');

      setDisplayValue(target.slice(0, revealedLength) + scrambledPart);
    }, scrambleInterval);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    displayValue,
    isScrambling,
    scramble,
  };
};

export default useNumberScramble;
