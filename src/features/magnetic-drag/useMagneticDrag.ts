import { useState, useRef, useEffect } from 'react';

interface UseMagneticDragProps {
  elasticity?: number;
  strength?: number;
}

interface UseMagneticDragReturn {
  position: { x: number; y: number };
  isDragging: boolean;
  dragHandlers: {
    onMouseDown: (e: React.MouseEvent) => void;
  };
  style: React.CSSProperties;
}

const useMagneticDrag = ({
  elasticity = 0.1,
  strength = 1,
}: UseMagneticDragProps = {}): UseMagneticDragReturn => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const animationFrameRef = useRef<number>();
  const initialMousePos = useRef({ x: 0, y: 0 });
  const initialElementPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;

        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && !isDragging) {
          return targetPosition;
        }

        return {
          x: prev.x + dx * elasticity,
          y: prev.y + dy * elasticity,
        };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetPosition, elasticity, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    initialElementPos.current = { x: position.x, y: position.y };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = (moveEvent.clientX - initialMousePos.current.x) * strength;
      const dy = (moveEvent.clientY - initialMousePos.current.y) * strength;

      setTargetPosition({
        x: initialElementPos.current.x + dx,
        y: initialElementPos.current.y + dy,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setTargetPosition({ x: 0, y: 0 });
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const style: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: 'none',
  };

  return {
    position,
    isDragging,
    dragHandlers: {
      onMouseDown: handleMouseDown,
    },
    style,
  };
};

export default useMagneticDrag;
