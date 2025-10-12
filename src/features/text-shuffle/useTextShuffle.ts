import { useState, useEffect, useRef } from 'react';

interface UseTextShuffleProps {
  text: string;
  duration?: number;
  characters?: string;
}

interface UseTextShuffleReturn {
  displayText: string;
  isShuffling: boolean;
  shuffle: () => void;
}

const useTextShuffle = ({
  text,
  duration = 2000,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
}: UseTextShuffleProps): UseTextShuffleReturn => {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);
  const intervalRef = useRef<number>();

  const shuffle = () => {
    setIsShuffling(true);
    const startTime = Date.now();
    const shuffleInterval = 50;

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        setDisplayText(text);
        setIsShuffling(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      const revealedLength = Math.floor(text.length * progress);
      const result = text.split('').map((char, index) => {
        if (index < revealedLength) {
          return char;
        }
        if (char === ' ') {
          return ' ';
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      setDisplayText(result);
    }, shuffleInterval);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    displayText,
    isShuffling,
    shuffle,
  };
};

export default useTextShuffle;
