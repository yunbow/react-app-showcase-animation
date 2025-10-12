import { useState, useEffect, useRef } from 'react';

interface UseFadeInProps {
  duration?: number;
  delay?: number;
  trigger?: boolean;
}

interface UseFadeInReturn {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
  fadeIn: () => void;
  fadeOut: () => void;
  isVisible: boolean;
}

const useFadeIn = ({ duration = 500, delay = 0, trigger = true }: UseFadeInProps = {}): UseFadeInReturn => {
  const [opacity, setOpacity] = useState(trigger ? 0 : 0);
  const [isVisible, setIsVisible] = useState(trigger);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      setOpacity(1);
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, delay]);

  const fadeIn = () => {
    setIsVisible(true);
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  };

  const fadeOut = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  };

  const style = {
    opacity,
    transition: `opacity ${duration}ms ease-in-out`,
  };

  return { ref: elementRef, style, fadeIn, fadeOut, isVisible };
};

export default useFadeIn;
