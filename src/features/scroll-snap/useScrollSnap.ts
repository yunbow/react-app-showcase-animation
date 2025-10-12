import { useRef } from 'react';

interface UseScrollSnapReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  containerStyle: React.CSSProperties;
  itemStyle: React.CSSProperties;
}

const useScrollSnap = (): UseScrollSnapReturn => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerStyle: React.CSSProperties = {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '500px',
  };

  const itemStyle: React.CSSProperties = {
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
  };

  return {
    containerRef,
    containerStyle,
    itemStyle,
  };
};

export default useScrollSnap;
