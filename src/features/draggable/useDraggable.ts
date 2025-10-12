import { useState, useRef, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseDraggableProps {
  initialPosition?: Position;
  bounds?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  onDragEnd?: (position: Position) => void;
}

const useDraggable = ({
  initialPosition = { x: 0, y: 0 },
  bounds,
  onDragEnd
}: UseDraggableProps = {}) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef<Position>({ x: 0, y: 0 });
  const elementStartPos = useRef<Position>({ x: 0, y: 0 });

  const constrainPosition = useCallback((pos: Position): Position => {
    if (!bounds) return pos;

    return {
      x: Math.max(
        bounds.left ?? -Infinity,
        Math.min(bounds.right ?? Infinity, pos.x)
      ),
      y: Math.max(
        bounds.top ?? -Infinity,
        Math.min(bounds.bottom ?? Infinity, pos.y)
      ),
    };
  }, [bounds]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = position;
  }, [position]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;

    const newPosition = {
      x: elementStartPos.current.x + deltaX,
      y: elementStartPos.current.y + deltaY,
    };

    setPosition(constrainPosition(newPosition));
  }, [isDragging, constrainPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    onDragEnd?.(position);
  }, [position, onDragEnd]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mousedown', handleMouseDown as any);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown as any);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
  };

  return {
    ref: elementRef,
    position,
    isDragging,
    style,
    setPosition,
  };
};

export default useDraggable;
