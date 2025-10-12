import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  itemCount: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transition?: number;
  loop?: boolean;
}

const useCarousel = ({
  itemCount,
  autoPlay = false,
  autoPlayInterval = 3000,
  transition = 500,
  loop = true,
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;

    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, transition);
  }, [currentIndex, isAnimating, transition]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;

    const nextIndex = currentIndex + 1;
    if (nextIndex < itemCount) {
      goToSlide(nextIndex);
    } else if (loop) {
      goToSlide(0);
    }
  }, [currentIndex, itemCount, loop, isAnimating, goToSlide]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;

    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      goToSlide(prevIndex);
    } else if (loop) {
      goToSlide(itemCount - 1);
    }
  }, [currentIndex, itemCount, loop, isAnimating, goToSlide]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const translateX = offset * 100;

    return {
      transform: `translateX(${translateX}%)`,
      transition: isAnimating ? `transform ${transition}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    };
  };

  return {
    currentIndex,
    isAnimating,
    direction,
    goToSlide,
    goToNext,
    goToPrev,
    getSlideStyle,
    hasNext: currentIndex < itemCount - 1,
    hasPrev: currentIndex > 0,
  };
};

export default useCarousel;
