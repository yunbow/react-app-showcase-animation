import useWaveEffect from './useWaveEffect';
import PageLayout from '../../components/PageLayout';

const WaveEffectPage = () => {
  const { createWave, renderWaves } = useWaveEffect({
    duration: 1200,
    maxRadius: 200,
    color: 'rgba(59, 130, 246, 0.3)',
    count: 3,
  });

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    createWave(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <PageLayout title="Wave Effect" description="波紋エフェクト">
      <div style={{ position: 'relative', width: '100%' }}>
        {renderWaves()}
        <div
          onClick={handleClick}
          style={{
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #1e293b, #334155)',
            borderRadius: 'var(--radius)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ textAlign: 'center', color: 'white', pointerEvents: 'none' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>クリックしてください</h3>
            <p>波紋が広がります</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WaveEffectPage;
