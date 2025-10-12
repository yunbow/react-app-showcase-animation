import { useState, useEffect, CSSProperties } from 'react';

interface UseStaggeredListOptions {
  itemCount: number;
  staggerDelay?: number;
  animationDuration?: number;
  autoStart?: boolean;
}

interface UseStaggeredListReturn {
  getItemStyle: (index: number) => CSSProperties;
  start: () => void;
  reset: () => void;
  isAnimating: boolean;
}

const useStaggeredList = ({
  itemCount,
  staggerDelay = 100,
  animationDuration = 500,
  autoStart = true,
}: UseStaggeredListOptions): UseStaggeredListReturn => {
  const [hasStarted, setHasStarted] = useState(autoStart);
  const [isAnimating, setIsAnimating] = useState(autoStart);

  useEffect(() => {
    if (!hasStarted) return;

    setIsAnimating(true);

    const totalDuration = staggerDelay * itemCount + animationDuration;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [hasStarted, itemCount, staggerDelay, animationDuration]);

  const getItemStyle = (index: number): CSSProperties => {
    if (!hasStarted) {
      return {
        opacity: 0,
        transform: 'translateY(20px)',
      };
    }

    return {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `all ${animationDuration}ms ease-out`,
      transitionDelay: `${index * staggerDelay}ms`,
    };
  };

  const start = () => {
    setHasStarted(true);
  };

  const reset = () => {
    setHasStarted(false);
    setIsAnimating(false);
  };

  return {
    getItemStyle,
    start,
    reset,
    isAnimating,
  };
};

export default useStaggeredList;
