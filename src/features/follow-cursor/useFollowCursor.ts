import { useState, useEffect, useRef, CSSProperties } from 'react';

interface UseFollowCursorOptions {
  smoothing?: number;
  type?: 'magnetic' | 'jelly' | 'trail';
  offset?: { x: number; y: number };
}

interface UseFollowCursorReturn {
  cursorStyle: CSSProperties;
  containerRef: React.RefObject<HTMLDivElement>;
  isActive: boolean;
  start: () => void;
  stop: () => void;
}

const useFollowCursor = ({
  smoothing = 0.15,
  type = 'magnetic',
  offset = { x: 0, y: 0 },
}: UseFollowCursorOptions = {}): UseFollowCursorReturn => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({
        x: e.clientX + offset.x,
        y: e.clientY + offset.y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [offset.x, offset.y, isActive]);

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * smoothing,
        y: prev.y + (targetPosition.y - prev.y) * smoothing,
      }));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetPosition, smoothing, isActive]);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);

  const getCursorStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      position: 'fixed',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      transform: `translate(${position.x}px, ${position.y}px)`,
      display: isActive ? 'block' : 'none',
    };

    switch (type) {
      case 'magnetic':
        return {
          ...baseStyle,
          width: '30px',
          height: '30px',
          marginLeft: '-15px',
          marginTop: '-15px',
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderRadius: '50%',
          border: '2px solid rgb(59, 130, 246)',
        };
      case 'jelly':
        return {
          ...baseStyle,
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
          backgroundColor: 'rgba(239, 68, 68, 0.3)',
          borderRadius: '50%',
          border: '3px solid rgb(239, 68, 68)',
          transition: 'width 0.2s, height 0.2s',
        };
      case 'trail':
        return {
          ...baseStyle,
          width: '20px',
          height: '20px',
          marginLeft: '-10px',
          marginTop: '-10px',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
        };
      default:
        return baseStyle;
    }
  };

  return {
    cursorStyle: getCursorStyle(),
    containerRef,
    isActive,
    start,
    stop,
  };
};

export default useFollowCursor;
