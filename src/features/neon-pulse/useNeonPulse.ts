import { useState, useEffect, useRef } from 'react';

interface UseNeonPulseProps {
  duration?: number;
  color?: string;
  intensity?: number;
}

interface UseNeonPulseReturn {
  pulseStyle: React.CSSProperties;
  isAnimating: boolean;
  start: () => void;
  stop: () => void;
}

const useNeonPulse = ({
  duration = 1500,
  color = '#00ffff',
  intensity = 20,
}: UseNeonPulseProps = {}): UseNeonPulseReturn => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isAnimating) {
      setGlowIntensity(0);
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const cycle = (elapsed % duration) / duration;
      const pulse = Math.sin(cycle * Math.PI * 2) * 0.5 + 0.5;

      setGlowIntensity(pulse * intensity);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAnimating, duration, intensity]);

  const start = () => setIsAnimating(true);
  const stop = () => setIsAnimating(false);

  const pulseStyle: React.CSSProperties = {
    boxShadow: `0 0 ${glowIntensity}px ${color}, 0 0 ${glowIntensity * 2}px ${color}, inset 0 0 ${glowIntensity / 2}px ${color}`,
    transition: 'none',
  };

  return {
    pulseStyle,
    isAnimating,
    start,
    stop,
  };
};

export default useNeonPulse;
