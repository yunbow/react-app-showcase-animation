import { useState, useCallback, CSSProperties } from 'react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface UseRippleProps {
  duration?: number;
  color?: string;
}

const useRipple = ({
  duration = 600,
  color = 'rgba(255, 255, 255, 0.6)'
}: UseRippleProps = {}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, duration);
  }, [duration]);

  const renderRipples = () => {
    return ripples.map((ripple) => (
      <span
        key={ripple.id}
        style={{
          position: 'absolute',
          left: ripple.x,
          top: ripple.y,
          width: ripple.size,
          height: ripple.size,
          borderRadius: '50%',
          backgroundColor: color,
          transform: 'scale(0)',
          animation: `ripple ${duration}ms ease-out`,
          pointerEvents: 'none',
        }}
      />
    ));
  };

  const containerStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
  };

  return {
    createRipple,
    renderRipples,
    containerStyle,
  };
};

export default useRipple;
