import { useState, useRef, useEffect, useCallback } from 'react';

interface UseAccordionProps {
  isOpen?: boolean;
  duration?: number;
  onToggle?: (isOpen: boolean) => void;
}

const useAccordion = ({
  isOpen: controlledIsOpen,
  duration = 300,
  onToggle,
}: UseAccordionProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen]);

  const toggle = useCallback(() => {
    const newState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onToggle?.(newState);
  }, [isOpen, controlledIsOpen, onToggle]);

  const containerStyle = {
    height: `${height}px`,
    overflow: 'hidden',
    transition: `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: `transform ${duration}ms ease-in-out`,
  };

  return {
    isOpen,
    toggle,
    contentRef,
    containerStyle,
    iconStyle,
  };
};

export default useAccordion;
