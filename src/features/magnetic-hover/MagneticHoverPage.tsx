import useMagneticHover from './useMagneticHover';
import PageLayout from '../../components/PageLayout';

const MagneticHoverPage = () => {
  const { ref, style } = useMagneticHover({
    strength: 0.5,
    range: 200,
    smoothing: 0.15,
  });

  return (
    <PageLayout title="Magnetic Hover" description="マグネティックホバーエフェクト">
      <div style={{ padding: '150px', textAlign: 'center' }}>
        <button
          ref={ref}
          style={{
            ...style,
            padding: '24px 48px',
            fontSize: '20px',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-primary-foreground)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xl)',
            fontWeight: 600,
          }}
        >
          マウスを近づけてください
        </button>
      </div>
    </PageLayout>
  );
};

export default MagneticHoverPage;
