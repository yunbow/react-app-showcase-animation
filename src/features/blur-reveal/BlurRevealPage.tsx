import useBlurReveal from './useBlurReveal';
import PageLayout from '../../components/PageLayout';

const BlurRevealPage = () => {
  const { isRevealed, reveal, reset, blurStyle } = useBlurReveal({
    duration: 2000,
    maxBlur: 20,
  });

  return (
    <PageLayout title="Blur Reveal" description="ブラーリビール">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '48px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={blurStyle}>
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius)',
              border: '2px solid var(--color-border)',
              maxWidth: '600px',
            }}>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-foreground)' }}>
                Blur Reveal Animation
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--color-muted-foreground)' }}>
                ブラーが徐々に解除され、コンテンツが鮮明に表示されます。
                この効果により、ユーザーの注目を集めることができます。
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={reveal} disabled={isRevealed} className="demo-button">
            リビール開始
          </button>
          <button onClick={reset} disabled={!isRevealed} className="demo-button">
            リセット
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlurRevealPage;
