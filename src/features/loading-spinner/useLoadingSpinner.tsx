import { useState, useEffect, CSSProperties } from 'react';

type SpinnerType = 'circular' | 'dots' | 'pulse' | 'bars';

interface UseLoadingSpinnerProps {
  type?: SpinnerType;
  size?: number;
  color?: string;
  speed?: number;
}

const useLoadingSpinner = ({
  type = 'circular',
  size = 40,
  color = '#3b82f6',
  speed = 1,
}: UseLoadingSpinnerProps = {}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 360 * speed / 60) % 360);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [speed]);

  const getSpinnerStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-block',
    };

    switch (type) {
      case 'circular':
        return {
          ...baseStyle,
          border: `${size / 10}px solid ${color}20`,
          borderTopColor: color,
          borderRadius: '50%',
          transform: `rotate(${rotation}deg)`,
        };

      case 'dots':
        return {
          ...baseStyle,
          position: 'relative',
        };

      case 'pulse':
        return {
          ...baseStyle,
          borderRadius: '50%',
          backgroundColor: color,
          transform: `scale(${0.5 + Math.abs(Math.sin(rotation * Math.PI / 180)) * 0.5})`,
          opacity: 0.5 + Math.abs(Math.sin(rotation * Math.PI / 180)) * 0.5,
        };

      case 'bars':
        return {
          ...baseStyle,
          display: 'flex',
          gap: `${size / 10}px`,
          alignItems: 'flex-end',
        };

      default:
        return baseStyle;
    }
  };

  const renderSpinner = () => {
    const style = getSpinnerStyle();

    if (type === 'dots') {
      const dotStyle = (index: number): CSSProperties => ({
        position: 'absolute',
        width: `${size / 4}px`,
        height: `${size / 4}px`,
        borderRadius: '50%',
        backgroundColor: color,
        top: '50%',
        left: '50%',
        transform: `rotate(${index * 45}deg) translateY(-${size / 3}px)`,
        opacity: 0.2 + (Math.sin((rotation + index * 45) * Math.PI / 180) + 1) / 2 * 0.8,
      });

      return (
        <div style={style}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} style={dotStyle(i)} />
          ))}
        </div>
      );
    }

    if (type === 'bars') {
      const barStyle = (index: number): CSSProperties => ({
        width: `${size / 6}px`,
        backgroundColor: color,
        borderRadius: `${size / 12}px`,
        height: `${size / 2 + Math.abs(Math.sin((rotation + index * 30) * Math.PI / 180)) * size / 2}px`,
      });

      return (
        <div style={style}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={barStyle(i)} />
          ))}
        </div>
      );
    }

    return <div style={style} />;
  };

  return {
    renderSpinner,
    style: getSpinnerStyle(),
  };
};

export default useLoadingSpinner;
