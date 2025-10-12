import useMagneticDrag from './useMagneticDrag';
import PageLayout from '../../components/PageLayout';

const MagneticDragPage = () => {
  const { dragHandlers, style } = useMagneticDrag({
    elasticity: 0.1,
    strength: 1,
  });

  return (
    <PageLayout title="Magnetic Drag / Elastic" description="エラスティックドラッグ">
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '32px', color: 'var(--color-muted-foreground)' }}>
          ボックスをドラッグしてください。離すと元の位置に戻ります。
        </p>

        <div style={{
          height: '500px',
          backgroundColor: 'var(--color-muted)',
          borderRadius: 'var(--radius)',
          border: '2px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div
            {...dragHandlers}
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: 'var(--shadow-lg)',
              userSelect: 'none',
              ...style,
            }}
          >
            ドラッグ
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MagneticDragPage;
