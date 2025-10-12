import { useState, useCallback } from 'react';

interface Wave {
  id: number;
  x: number;
  y: number;
  progress: number;
}

interface UseWaveEffectProps {
  duration?: number;
  maxRadius?: number;
  color?: string;
  count?: number;
}

const useWaveEffect = ({
  duration = 800,
  maxRadius = 200,
  color = 'rgba(59, 130, 246, 0.3)',
  count = 3,
}: UseWaveEffectProps = {}) => {
  const [waves, setWaves] = useState<Wave[]>([]);

  const createWave = useCallback((x: number, y: number) => {
    const waveId = Date.now();

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        setWaves((prev) => [...prev, { id: waveId + i, x, y, progress: 0 }]);

        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          setWaves((prev) =>
            prev.map((wave) =>
              wave.id === waveId + i ? { ...wave, progress } : wave
            )
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setWaves((prev) => prev.filter((wave) => wave.id !== waveId + i));
          }
        };

        requestAnimationFrame(animate);
      }, i * 200);
    }
  }, [duration, count]);

  const renderWaves = () => {
    return waves.map((wave) => {
      const radius = wave.progress * maxRadius;
      const opacity = 1 - wave.progress;

      return (
        <div
          key={wave.id}
          style={{
            position: 'fixed',
            left: wave.x,
            top: wave.y,
            width: radius * 2,
            height: radius * 2,
            border: `2px solid ${color}`,
            borderRadius: '50%',
            opacity,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      );
    });
  };

  return {
    createWave,
    renderWaves,
    waves,
  };
};

export default useWaveEffect;
