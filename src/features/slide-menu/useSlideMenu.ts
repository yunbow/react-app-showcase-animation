import { useState, useEffect, useRef } from 'react';

type SlideDirection = 'left' | 'right' | 'top' | 'bottom';

interface UseSlideMenuProps {
  isOpen: boolean;
  direction?: SlideDirection;
  duration?: number;
  overlayClose?: boolean;
  onClose?: () => void;
}

const useSlideMenu = ({
  isOpen,
  direction = 'left',
  duration = 300,
  overlayClose = true,
  onClose
}: UseSlideMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  const getTransform = () => {
    const transforms = {
      left: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
      right: isAnimating ? 'translateX(0)' : 'translateX(100%)',
      top: isAnimating ? 'translateY(0)' : 'translateY(-100%)',
      bottom: isAnimating ? 'translateY(0)' : 'translateY(100%)',
    };
    return transforms[direction];
  };

  const menuStyle = {
    transform: getTransform(),
    transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  const overlayStyle = {
    opacity: isAnimating ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out`,
    pointerEvents: isVisible ? 'auto' as const : 'none' as const,
  };

  const handleOverlayClick = () => {
    if (overlayClose) {
      onClose?.();
    }
  };

  return {
    isVisible,
    isAnimating,
    menuRef,
    menuStyle,
    overlayStyle,
    handleOverlayClick,
  };
};

export default useSlideMenu;
