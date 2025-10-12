import { useState, useCallback } from 'react';

interface UseInterpolateProps<T> {
  from: T;
  to: T;
  duration?: number;
  easing?: (t: number) => number;
  interpolate: (from: T, to: T, progress: number) => T;
  onComplete?: () => void;
}

const useInterpolate = <T,>({
  from,
  to,
  duration = 1000,
  easing = (t: number) => t,
  interpolate,
  onComplete,
}: UseInterpolateProps<T>) => {
  const [value, setValue] = useState<T>(from);
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = useCallback(() => {
    setIsAnimating(true);
    const startTime = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(rawProgress);

      const currentValue = interpolate(from, to, easedProgress);
      setValue(currentValue);

      if (rawProgress < 1) {
        requestAnimationFrame(update);
      } else {
        setIsAnimating(false);
        onComplete?.();
      }
    };

    requestAnimationFrame(update);
  }, [from, to, duration, easing, interpolate, onComplete]);

  const reset = useCallback(() => {
    setValue(from);
  }, [from]);

  return {
    value,
    isAnimating,
    animate,
    reset,
  };
};

// ヘルパー関数
export const interpolateNumber = (from: number, to: number, progress: number) => {
  return from + (to - from) * progress;
};

export const interpolateColor = (from: string, to: string, progress: number) => {
  const fromRgb = hexToRgb(from);
  const toRgb = hexToRgb(to);

  const r = Math.round(interpolateNumber(fromRgb.r, toRgb.r, progress));
  const g = Math.round(interpolateNumber(fromRgb.g, toRgb.g, progress));
  const b = Math.round(interpolateNumber(fromRgb.b, toRgb.b, progress));

  return `rgb(${r}, ${g}, ${b})`;
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : { r: 0, g: 0, b: 0 };
};

export default useInterpolate;
