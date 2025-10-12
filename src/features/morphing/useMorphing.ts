import { useState, useEffect, useCallback } from 'react';

interface UseMorphingProps {
  shapes: string[];
  duration?: number;
  autoPlay?: boolean;
  interval?: number;
}

const useMorphing = ({
  shapes,
  duration = 1000,
  autoPlay = false,
  interval = 3000,
}: UseMorphingProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const morphTo = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;

    setNextIndex(index);
    setIsAnimating(true);

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = rawProgress < 0.5
        ? 2 * rawProgress * rawProgress
        : -1 + (4 - 2 * rawProgress) * rawProgress;

      setProgress(easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentIndex(index);
        setProgress(0);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [currentIndex, duration, isAnimating]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      const next = (currentIndex + 1) % shapes.length;
      morphTo(next);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, shapes.length, morphTo]);

  const interpolatePath = (path1: string, path2: string, progress: number) => {
    // 簡易的なパス補間（実際にはより高度な補間が必要）
    return progress < 0.5 ? path1 : path2;
  };

  const currentPath = isAnimating
    ? interpolatePath(shapes[currentIndex], shapes[nextIndex], progress)
    : shapes[currentIndex];

  return {
    currentPath,
    currentIndex,
    isAnimating,
    morphTo,
    progress,
  };
};

export default useMorphing;
