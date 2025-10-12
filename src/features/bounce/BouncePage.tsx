import useBounce from './useBounce';
import PageLayout from '../../components/PageLayout';

const BouncePage = () => {
  const { bounce, isBouncing, style } = useBounce({
    intensity: 40,
    bounces: 4,
    duration: 800,
  });

  return (
    <PageLayout title="Bounce" description="バウンスアニメーション">
      <div
        style={{
          ...style,
          display: 'inline-block',
          padding: '24px 48px',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 600,
          boxShadow: 'var(--shadow-md)',
        }}
        onClick={bounce}
      >
        {isBouncing ? 'バウンス中...' : 'クリックでバウンス'}
      </div>
    </PageLayout>
  );
};

export default BouncePage;
