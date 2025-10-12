import { useState } from 'react';
import useTextShuffle from './useTextShuffle';
import PageLayout from '../../components/PageLayout';

const TextShufflePage = () => {
  const [selectedText, setSelectedText] = useState('Hello World!');

  const { displayText, isShuffling, shuffle } = useTextShuffle({
    text: selectedText,
    duration: 2000,
  });

  const presetTexts = [
    'Hello World!',
    'React Animation',
    'Custom Hooks',
    'TypeScript Magic',
  ];

  return (
    <PageLayout title="Text Shuffle / Split Animation" description="テキストシャッフル">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '48px', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'var(--color-primary)',
            fontFamily: 'monospace',
            letterSpacing: '4px',
          }}>
            {displayText}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '12px', fontWeight: 600, color: 'var(--color-foreground)' }}>
            テキストを選択:
          </label>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {presetTexts.map((text) => (
              <button
                key={text}
                onClick={() => setSelectedText(text)}
                className="demo-button"
                style={{
                  opacity: selectedText === text ? 1 : 0.6,
                }}
                disabled={isShuffling}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        <button onClick={shuffle} disabled={isShuffling} className="demo-button">
          {isShuffling ? 'シャッフル中...' : 'シャッフル開始'}
        </button>
      </div>
    </PageLayout>
  );
};

export default TextShufflePage;
