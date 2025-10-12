import { useState, useEffect, useRef } from 'react';

interface Transform {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface UseTransformInterpolationOptions {
  from: Transform;
  to: Transform;
  duration?: number;
  easing?: (t: number) => number;
}

interface UseTransformInterpolationReturn {
  transform: Transform;
  animate: () => void;
  reset: () => void;
  isAnimating: boolean;
}

const defaultEasing = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const useTransformInterpolation = ({
  from,
  to,
  duration = 1000,
  easing = defaultEasing,
}: UseTransformInterpolationOptions): UseTransformInterpolationReturn => {
  const [transform, setTransform] = useState<Transform>(from);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const lerp = (start: number, end: number, t: number): number => {
    return start + (end - start) * t;
  };

  const animate = () => {
    setIsAnimating(true);
    startTimeRef.current = performance.now();

    const step = (currentTime: number) => {
      if (!startTimeRef.current) return;

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      setTransform({
        x: lerp(from.x, to.x, easedProgress),
        y: lerp(from.y, to.y, easedProgress),
        rotation: lerp(from.rotation, to.rotation, easedProgress),
        scale: lerp(from.scale, to.scale, easedProgress),
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setTransform(from);
    setIsAnimating(false);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    transform,
    animate,
    reset,
    isAnimating,
  };
};

export default useTransformInterpolation;
