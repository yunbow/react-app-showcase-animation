import { useCallback, useRef } from 'react';

interface UseSmoothScrollProps {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

const useSmoothScroll = ({
  duration = 1000,
  offset = 0,
  easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
}: UseSmoothScrollProps = {}) => {
  const isScrolling = useRef(false);

  const scrollTo = useCallback((target: number | HTMLElement) => {
    if (isScrolling.current) return;

    const targetPosition = typeof target === 'number'
      ? target
      : target.getBoundingClientRect().top + window.pageYOffset;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - offset;
    const startTime = performance.now();

    isScrolling.current = true;

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        isScrolling.current = false;
      }
    };

    requestAnimationFrame(scroll);
  }, [duration, offset, easing]);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  const scrollToElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      scrollTo(element);
    }
  }, [scrollTo]);

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    isScrolling: isScrolling.current,
  };
};

export default useSmoothScroll;
