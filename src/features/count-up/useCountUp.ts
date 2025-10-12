import { useState, useRef, useCallback } from 'react';

interface UseCountUpProps {
  start?: number;
  step?: number;
  interval?: number;
  decimals?: number;
}

const useCountUp = ({
  start = 0,
  step = 1,
  interval = 50,
  decimals = 0,
}: UseCountUpProps = {}) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number>();

  const startCountUp = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    intervalRef.current = window.setInterval(() => {
      setCount((prev) => Number((prev + step).toFixed(decimals)));
    }, interval);
  }, [isAnimating, step, interval, decimals]);

  const startCountDown = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    intervalRef.current = window.setInterval(() => {
      setCount((prev) => Number((prev - step).toFixed(decimals)));
    }, interval);
  }, [isAnimating, step, interval, decimals]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsAnimating(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setCount(start);
  }, [start, stop]);

  return { count, isAnimating, startCountUp, startCountDown, stop, reset };
};

export default useCountUp;
