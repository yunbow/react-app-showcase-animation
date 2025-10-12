import useRipple from './useRipple';
import PageLayout from '../../components/PageLayout';

const RipplePage = () => {
  const { createRipple, renderRipples, containerStyle } = useRipple({
    duration: 600,
    color: 'rgba(255, 255, 255, 0.5)',
  });

  return (
    <PageLayout title="Ripple Effect" description="リップルエフェクト">
      <button
        onClick={createRipple}
        style={{
          ...containerStyle,
          padding: '20px 40px',
          fontSize: '18px',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          fontWeight: 600,
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {renderRipples()}
        クリックしてリップル効果
      </button>
    </PageLayout>
  );
};

export default RipplePage;
