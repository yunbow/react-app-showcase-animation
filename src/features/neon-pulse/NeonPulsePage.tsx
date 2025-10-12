import useNeonPulse from './useNeonPulse';
import PageLayout from '../../components/PageLayout';

const NeonPulsePage = () => {
  const { pulseStyle, isAnimating, start, stop } = useNeonPulse({
    duration: 1500,
    color: '#00ffff',
    intensity: 30,
  });

  return (
    <PageLayout title="Glow / Neon Pulse" description="ネオンパルスエフェクト">
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={start} disabled={isAnimating} className="demo-button">
            開始
          </button>
          <button onClick={stop} disabled={!isAnimating} className="demo-button">
            停止
          </button>
        </div>

        <div style={{
          height: '500px',
          backgroundColor: '#0a0a0a',
          borderRadius: 'var(--radius)',
          border: '2px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            ...pulseStyle,
            width: '200px',
            height: '200px',
            backgroundColor: '#1a1a1a',
            border: '3px solid #00ffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
          }}>
            NEON
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NeonPulsePage;
