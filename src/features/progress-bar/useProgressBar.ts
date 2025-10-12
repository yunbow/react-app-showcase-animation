import { useState, useEffect, useRef } from 'react';

interface UseProgressBarProps {
  targetProgress: number;
  duration?: number;
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  onComplete?: () => void;
}

const useProgressBar = ({
  targetProgress,
  duration = 1000,
  easing = 'easeOut',
  onComplete
}: UseProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number>();

  const easingFunctions = {
    linear: (t: number) => t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => t * (2 - t),
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  };

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsAnimating(true);
    const startProgress = progress;
    const startTime = Date.now();
    const progressDelta = targetProgress - startProgress;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](rawProgress);
      const currentProgress = startProgress + progressDelta * easedProgress;

      setProgress(currentProgress);

      if (rawProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        if (targetProgress >= 100) {
          onComplete?.();
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetProgress, duration, easing]);

  const reset = () => setProgress(0);

  return {
    progress: Math.min(Math.max(progress, 0), 100),
    isAnimating,
    reset,
  };
};

export default useProgressBar;
