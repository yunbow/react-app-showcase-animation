import useTextReveal from './useTextReveal';
import PageLayout from '../../components/PageLayout';

const TextRevealPage = () => {
  const { isRevealed, reveal, hide, maskStyle } = useTextReveal({
    duration: 1500,
    delay: 0,
  });

  return (
    <PageLayout title="Text Reveal" description="テキストマスクリビール">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '48px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'var(--color-muted-foreground)',
              margin: 0,
            }}>
              Beautiful Animation
            </h2>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'var(--color-primary)',
              margin: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              ...maskStyle,
            }}>
              Beautiful Animation
            </h2>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={reveal} disabled={isRevealed} className="demo-button">
            リビール開始
          </button>
          <button onClick={hide} disabled={!isRevealed} className="demo-button">
            リセット
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default TextRevealPage;
