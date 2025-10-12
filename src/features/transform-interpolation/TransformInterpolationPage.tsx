import useTransformInterpolation from './useTransformInterpolation';
import PageLayout from '../../components/PageLayout';

const TransformInterpolationPage = () => {
  const { transform, animate, reset, isAnimating } = useTransformInterpolation({
    from: { x: 0, y: 0, rotation: 0, scale: 1 },
    to: { x: 200, y: 100, rotation: 360, scale: 1.5 },
    duration: 1500,
  });

  return (
    <PageLayout title="Transform Interpolation" description="トランスフォーム補間アニメーション">
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <div style={{ marginBottom: '32px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={animate} disabled={isAnimating} className="demo-button">
            アニメーション開始
          </button>
          <button onClick={reset} className="demo-button">
            リセット
          </button>
        </div>

        <div
          style={{
            position: 'relative',
            height: '400px',
            backgroundColor: 'var(--color-muted)',
            borderRadius: 'var(--radius)',
            border: '2px dashed var(--color-border)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '100px',
              left: '50px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              boxShadow: 'var(--shadow-xl)',
              transform: `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotation}deg) scale(${transform.scale})`,
              transition: 'transform 0.05s linear',
            }}
          >
            BOX
          </div>
        </div>

        <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'var(--color-card)', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
          <h4 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>現在の値:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '14px' }}>
            <div>X: {Math.round(transform.x)}px</div>
            <div>Y: {Math.round(transform.y)}px</div>
            <div>回転: {Math.round(transform.rotation)}°</div>
            <div>スケール: {transform.scale.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TransformInterpolationPage;
