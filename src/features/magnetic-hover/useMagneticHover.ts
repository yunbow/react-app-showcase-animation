import { useState, useRef, useEffect } from 'react';

interface UseMagneticHoverProps {
  strength?: number;
  range?: number;
  smoothing?: number;
}

const useMagneticHover = ({
  strength = 0.3,
  range = 100,
  smoothing = 0.15,
}: UseMagneticHoverProps = {}) => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        const force = 1 - distance / range;
        targetPosition.current = {
          x: deltaX * strength * force,
          y: deltaY * strength * force,
        };
      } else {
        targetPosition.current = { x: 0, y: 0 };
      }
    };

    const handleMouseLeave = () => {
      targetPosition.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, range]);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * smoothing,
        y: prev.y + (targetPosition.current.y - prev.y) * smoothing,
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [smoothing]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return {
    ref: elementRef,
    style,
    position,
  };
};

export default useMagneticHover;
