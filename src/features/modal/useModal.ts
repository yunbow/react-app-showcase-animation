import { useState, useEffect, useCallback } from 'react';

interface UseModalProps {
  isOpen: boolean;
  duration?: number;
  onClose?: () => void;
}

const useModal = ({
  isOpen,
  duration = 300,
  onClose
}: UseModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  }, [onClose]);

  const backdropStyle = {
    opacity: isAnimating ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out`,
    pointerEvents: isVisible ? 'auto' as const : 'none' as const,
  };

  const modalStyle = {
    transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(-20px)',
    opacity: isAnimating ? 1 : 0,
    transition: `all ${duration}ms ease-out`,
  };

  return {
    isVisible,
    isAnimating,
    backdropStyle,
    modalStyle,
    handleBackdropClick,
  };
};

export default useModal;
