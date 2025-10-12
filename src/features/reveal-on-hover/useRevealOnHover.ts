import { useState } from 'react';

interface UseRevealOnHoverReturn {
  isHovered: boolean;
  hoverHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  maskStyle: React.CSSProperties;
}

const useRevealOnHover = (): UseRevealOnHoverReturn => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const maskStyle: React.CSSProperties = {
    clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
    transition: 'clip-path 0.6s ease',
  };

  return {
    isHovered,
    hoverHandlers,
    maskStyle,
  };
};

export default useRevealOnHover;
