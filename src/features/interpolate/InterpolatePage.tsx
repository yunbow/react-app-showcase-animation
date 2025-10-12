import { useState } from 'react';
import useInterpolate, { interpolateColor } from './useInterpolate';
import PageLayout from '../../components/PageLayout';

const InterpolatePage = () => {
  const colors = [
    { from: '#3b82f6', to: '#ef4444', label: '青 → 赤' },
    { from: '#ef4444', to: '#10b981', label: '赤 → 緑' },
    { from: '#10b981', to: '#f59e0b', label: '緑 → オレンジ' },
    { from: '#f59e0b', to: '#8b5cf6', label: 'オレンジ → 紫' },
    { from: '#8b5cf6', to: '#3b82f6', label: '紫 → 青' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentColor = colors[currentIndex];

  const { value, isAnimating, animate } = useInterpolate({
    from: currentColor.from,
    to: currentColor.to,
    duration: 2000,
    interpolate: interpolateColor,
    easing: (t: number) => t,
    onComplete: () => {
      setCurrentIndex((prev) => (prev + 1) % colors.length);
    },
  });

  return (
    <PageLayout title="Color Interpolation" description="色補間アニメーション">
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '300px',
          height: '300px',
          background: `linear-gradient(135deg, ${value}, ${value})`,
          borderRadius: 'var(--radius)',
          marginBottom: '32px',
          boxShadow: 'var(--shadow-xl)',
          border: '4px solid var(--color-card)',
        }} />

        <p style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600, color: 'var(--color-foreground)' }}>
          {currentColor.label}
        </p>

        <button onClick={animate} disabled={isAnimating} className="demo-button">
          {isAnimating ? '変更中...' : '色を変更'}
        </button>
      </div>
    </PageLayout>
  );
};

export default InterpolatePage;
