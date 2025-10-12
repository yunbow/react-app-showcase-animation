import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import useFadeIn from '../features/fade-in/useFadeIn';
import useCountUp from '../features/count-up/useCountUp';
import useTypewriter from '../features/typewriter/useTypewriter';
import useHover from '../features/hover/useHover';
import useShake from '../features/shake/useShake';
import usePulse from '../features/pulse/usePulse';
import useProgressBar from '../features/progress-bar/useProgressBar';
import useRipple from '../features/ripple/useRipple';
import useBounce from '../features/bounce/useBounce';
import useFlipCard from '../features/flip-card/useFlipCard';

// Fade In Story
const FadeInDemo = ({ duration, delay }: { duration: number; delay: number }) => {
  const { ref, style } = useFadeIn({ duration, delay });
  return (
    <div
      ref={ref}
      style={{
        ...style,
        padding: '40px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      フェードインするコンテンツ
    </div>
  );
};

export const FadeIn: StoryObj<typeof FadeInDemo> = {
  render: (args) => <FadeInDemo {...args} />,
  args: {
    duration: 800,
    delay: 200,
  },
};

// Count Up Story
const CountUpDemo = ({ start, step, interval }: { start: number; step: number; interval: number }) => {
  const { count, isAnimating, startCountUp, stop, reset } = useCountUp({ start, step, interval });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#3b82f6',
          marginBottom: '20px',
        }}
      >
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={startCountUp}
          disabled={isAnimating}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isAnimating ? 'not-allowed' : 'pointer',
            opacity: isAnimating ? 0.6 : 1,
          }}
        >
          カウント開始
        </button>
        <button
          onClick={stop}
          disabled={!isAnimating}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: !isAnimating ? 'not-allowed' : 'pointer',
            opacity: !isAnimating ? 0.6 : 1,
          }}
        >
          停止
        </button>
        <button
          onClick={reset}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          リセット
        </button>
      </div>
    </div>
  );
};

export const CountUp: StoryObj<typeof CountUpDemo> = {
  render: (args) => <CountUpDemo {...args} />,
  args: {
    start: 0,
    step: 1,
    interval: 50,
  },
};

// Typewriter Story
const TypewriterDemo = ({ text, speed }: { text: string; speed: number }) => {
  const { displayText, isComplete } = useTypewriter({ text, speed });

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', minHeight: '40px' }}>
        {displayText}
      </div>
      {isComplete && (
        <div style={{ color: '#10b981', marginTop: '10px' }}>タイピング完了!</div>
      )}
    </div>
  );
};

export const Typewriter: StoryObj<typeof TypewriterDemo> = {
  render: (args) => <TypewriterDemo {...args} />,
  args: {
    text: 'Hello, World! This is a typewriter effect.',
    speed: 100,
  },
};

// Hover Story
const HoverDemo = ({ enterDelay }: { enterDelay: number }) => {
  const { ref, isHovered, hoverStyle } = useHover({ enterDelay });

  return (
    <div
      ref={ref}
      style={{
        ...hoverStyle,
        padding: '40px',
        backgroundColor: isHovered ? '#f0f0f0' : '#ffffff',
        borderRadius: '12px',
        boxShadow: isHovered
          ? '0 8px 25px rgba(0,0,0,0.15)'
          : '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease-in-out',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      ホバーしてみてください
    </div>
  );
};

export const Hover: StoryObj<typeof HoverDemo> = {
  render: (args) => <HoverDemo {...args} />,
  args: {
    enterDelay: 100,
  },
};

// Shake Story
const ShakeDemo = ({ intensity, duration }: { intensity: number; duration: number }) => {
  const { shake, isShaking, style } = useShake({ intensity, duration });

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={shake}
        disabled={isShaking}
        style={{
          ...style,
          padding: '16px 32px',
          fontSize: '18px',
          borderRadius: '8px',
          border: '2px solid #ef4444',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          cursor: isShaking ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
        }}
      >
        エラー: クリックして再試行
      </button>
    </div>
  );
};

export const Shake: StoryObj<typeof ShakeDemo> = {
  render: (args) => <ShakeDemo {...args} />,
  args: {
    intensity: 10,
    duration: 500,
  },
};

// Pulse Story
const PulseDemo = ({
  minScale,
  maxScale,
  duration,
}: {
  minScale: number;
  maxScale: number;
  duration: number;
}) => {
  const { isPulsing, style, start, stop } = usePulse({
    minScale,
    maxScale,
    duration,
    autoStart: false,
  });

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <div
        style={{
          ...style,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#ef4444',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        3
      </div>
      <div>
        <button
          onClick={isPulsing ? stop : start}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          {isPulsing ? '停止' : '開始'}
        </button>
      </div>
    </div>
  );
};

export const Pulse: StoryObj<typeof PulseDemo> = {
  render: (args) => <PulseDemo {...args} />,
  args: {
    minScale: 1,
    maxScale: 1.2,
    duration: 1000,
  },
};

// Progress Bar Story
const ProgressBarDemo = ({ duration }: { duration: number }) => {
  const [target, setTarget] = useState(0);
  const { progress } = useProgressBar({
    targetProgress: target,
    duration,
    easing: 'easeInOut',
  });

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          width: '100%',
          height: '30px',
          backgroundColor: '#e5e7eb',
          borderRadius: '15px',
          overflow: 'hidden',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 12px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setTarget(33)}>33%</button>
        <button onClick={() => setTarget(66)}>66%</button>
        <button onClick={() => setTarget(100)}>100%</button>
        <button onClick={() => setTarget(0)}>リセット</button>
      </div>
    </div>
  );
};

export const ProgressBar: StoryObj<typeof ProgressBarDemo> = {
  render: (args) => <ProgressBarDemo {...args} />,
  args: {
    duration: 1500,
  },
};

// Ripple Story
const RippleDemo = ({ duration, color }: { duration: number; color: string }) => {
  const { createRipple, renderRipples, containerStyle } = useRipple({ duration, color });

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={createRipple}
        style={{
          ...containerStyle,
          padding: '16px 32px',
          fontSize: '18px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {renderRipples()}
        クリックしてリップル効果
      </button>
    </div>
  );
};

export const Ripple: StoryObj<typeof RippleDemo> = {
  render: (args) => <RippleDemo {...args} />,
  args: {
    duration: 600,
    color: 'rgba(255, 255, 255, 0.6)',
  },
};

// Bounce Story
const BounceDemo = ({
  intensity,
  bounces,
  duration,
}: {
  intensity: number;
  bounces: number;
  duration: number;
}) => {
  const { bounce, isBouncing, style } = useBounce({ intensity, bounces, duration });

  return (
    <div style={{ padding: '60px', textAlign: 'center' }}>
      <div
        style={{
          ...style,
          display: 'inline-block',
          padding: '24px 48px',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        onClick={bounce}
      >
        {isBouncing ? 'バウンス中...' : 'クリックでバウンス'}
      </div>
    </div>
  );
};

export const Bounce: StoryObj<typeof BounceDemo> = {
  render: (args) => <BounceDemo {...args} />,
  args: {
    intensity: 20,
    bounces: 3,
    duration: 600,
  },
};

// Flip Card Story
const FlipCardDemo = ({ duration }: { duration: number }) => {
  const { flip, containerStyle, cardStyle, frontStyle, backStyle } = useFlipCard({ duration });

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ ...containerStyle, width: '300px', height: '200px' }} onClick={flip}>
        <div style={cardStyle}>
          <div
            style={{
              ...frontStyle,
              backgroundColor: '#3b82f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            表面 - クリックして反転
          </div>
          <div
            style={{
              ...backStyle,
              backgroundColor: '#ef4444',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            裏面 - もう一度クリック
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlipCard: StoryObj<typeof FlipCardDemo> = {
  render: (args) => <FlipCardDemo {...args} />,
  args: {
    duration: 600,
  },
};

// Meta configuration
const meta: Meta = {
  title: 'Animations/All Hooks',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
