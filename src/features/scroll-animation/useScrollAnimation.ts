import { useState, useEffect, useRef, useCallback } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
}

const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px'
}: UseScrollAnimationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, handleScroll]);

  const getTransform = useCallback((parallaxSpeed = 0.5) => {
    return `translateY(${scrollY * parallaxSpeed}px)`;
  }, [scrollY]);

  return {
    ref: elementRef,
    isVisible,
    scrollY,
    getTransform
  };
};

export default useScrollAnimation;
