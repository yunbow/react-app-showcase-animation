import { useState, useEffect, useRef } from 'react';

interface UsePulseProps {
  minScale?: number;
  maxScale?: number;
  duration?: number;
  loop?: boolean;
  autoStart?: boolean;
}

const usePulse = ({
  minScale = 1,
  maxScale = 1.2,
  duration = 1000,
  loop = true,
  autoStart = true
}: UsePulseProps = {}) => {
  const [scale, setScale] = useState(minScale);
  const [isPulsing, setIsPulsing] = useState(autoStart);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPulsing) {
      setScale(minScale);
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const loopProgress = (elapsed % duration) / duration;

      // サイン波を使用して滑らかな拡大縮小
      const sineProgress = Math.sin(loopProgress * Math.PI * 2);
      const currentScale = minScale + ((maxScale - minScale) * (sineProgress + 1)) / 2;

      setScale(currentScale);

      if (loop || elapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setScale(minScale);
        setIsPulsing(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPulsing, minScale, maxScale, duration, loop]);

  const start = () => setIsPulsing(true);
  const stop = () => setIsPulsing(false);

  const style = {
    transform: `scale(${scale})`,
  };

  return { scale, isPulsing, style, start, stop };
};

export default usePulse;
