import { useState } from 'react';
import useNumberScramble from './useNumberScramble';
import PageLayout from '../../components/PageLayout';

const NumberScramblePage = () => {
  const [targetValue, setTargetValue] = useState('1234567890');

  const { displayValue, isScrambling, scramble } = useNumberScramble({
    targetValue,
    duration: 2000,
    characters: '0123456789',
  });

  const presetValues = [
    '1234567890',
    '9876543210',
    '2024102512',
    '4208675309',
  ];

  return (
    <PageLayout title="Number Scramble" description="数字スクランブル">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '48px', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'var(--color-primary)',
            fontFamily: 'monospace',
            letterSpacing: '8px',
          }}>
            {displayValue}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '12px', fontWeight: 600, color: 'var(--color-foreground)' }}>
            目標値を選択:
          </label>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {presetValues.map((value) => (
              <button
                key={value}
                onClick={() => setTargetValue(value)}
                className="demo-button"
                style={{
                  opacity: targetValue === value ? 1 : 0.6,
                  fontFamily: 'monospace',
                }}
                disabled={isScrambling}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <button onClick={scramble} disabled={isScrambling} className="demo-button">
          {isScrambling ? 'スクランブル中...' : 'スクランブル開始'}
        </button>
      </div>
    </PageLayout>
  );
};

export default NumberScramblePage;
