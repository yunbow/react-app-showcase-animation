import useLineReveal from './useLineReveal';
import PageLayout from '../../components/PageLayout';

const LineRevealPage = () => {
  const { isRevealed, reveal, reset, lineStyle, textStyle } = useLineReveal({
    duration: 1500,
  });

  return (
    <PageLayout title="Reveal from Lines" description="ラインリビール">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '48px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '8px',
            }}>
              <h2 style={{
                ...textStyle,
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'var(--color-primary)',
                margin: 0,
              }}>
                Amazing Animation
              </h2>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '4px',
                backgroundColor: 'var(--color-primary)',
                ...lineStyle,
              }} />
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

export default LineRevealPage;
