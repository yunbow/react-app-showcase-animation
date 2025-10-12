import { useState, useRef, useEffect } from 'react';

interface UseHoverProps {
  enterDelay?: number;
  leaveDelay?: number;
}

const useHover = ({ enterDelay = 0, leaveDelay = 0 }: UseHoverProps = {}) => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, enterDelay);
    };

    const handleMouseLeave = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, leaveDelay);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [enterDelay, leaveDelay]);

  const hoverStyle = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out',
  };

  return { ref: elementRef, isHovered, hoverStyle };
};

export default useHover;
