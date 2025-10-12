import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

const useTypewriter = ({
  text,
  speed = 100,
  delay = 0,
  loop = false
}: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (loop) {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, text, speed, isTyping, loop]);

  return {
    displayText,
    isComplete: currentIndex === text.length
  };
};

export default useTypewriter;
