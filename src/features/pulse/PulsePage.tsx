import usePulse from './usePulse';
import PageLayout from '../../components/PageLayout';

const PulsePage = () => {
  const { isPulsing, style, start, stop } = usePulse({
    minScale: 1,
    maxScale: 1.2,
    duration: 800,
    autoStart: false,
  });

  return (
    <PageLayout title="Pulse" description="パルスエフェクト">
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexDirection: 'column' }}>
        <div
          style={{
            ...style,
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-destructive)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          3
        </div>
        <button onClick={isPulsing ? stop : start} className="demo-button">
          {isPulsing ? '停止' : '開始'}
        </button>
      </div>
    </PageLayout>
  );
};

export default PulsePage;
