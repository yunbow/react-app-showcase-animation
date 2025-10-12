import { useState, useCallback, useRef } from 'react';

interface UseBounceProps {
  intensity?: number;
  bounces?: number;
  duration?: number;
  direction?: 'vertical' | 'horizontal';
}

const useBounce = ({
  intensity = 20,
  bounces = 3,
  duration = 600,
  direction = 'vertical',
}: UseBounceProps = {}) => {
  const [offset, setOffset] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const animationRef = useRef<number | null>(null);

  const bounce = useCallback(() => {
    if (isBouncing) return;

    setIsBouncing(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // バウンスの計算
      const bounceProgress = progress * Math.PI * bounces;
      const dampening = 1 - progress;
      const currentOffset = Math.sin(bounceProgress) * intensity * dampening;

      setOffset(currentOffset);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setOffset(0);
        setIsBouncing(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [intensity, bounces, duration, isBouncing]);

  const stop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setOffset(0);
    setIsBouncing(false);
  }, []);

  const style = {
    transform: direction === 'vertical'
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`,
  };

  return {
    bounce,
    stop,
    isBouncing,
    style,
  };
};

export default useBounce;
