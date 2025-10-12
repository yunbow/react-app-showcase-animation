import { useState, useCallback } from 'react';

interface UseShakeProps {
  intensity?: number;
  duration?: number;
  frequency?: number;
}

const useShake = ({
  intensity = 10,
  duration = 500,
  frequency = 50
}: UseShakeProps = {}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);

  const shake = useCallback(() => {
    setIsShaking(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        const currentIntensity = intensity * (1 - progress);
        setOffset({
          x: (Math.random() - 0.5) * currentIntensity * 2,
          y: (Math.random() - 0.5) * currentIntensity * 2,
        });
        setTimeout(() => requestAnimationFrame(animate), frequency);
      } else {
        setOffset({ x: 0, y: 0 });
        setIsShaking(false);
      }
    };

    requestAnimationFrame(animate);
  }, [intensity, duration, frequency]);

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  return { shake, isShaking, style };
};

export default useShake;
