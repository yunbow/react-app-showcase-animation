import useShake from './useShake';
import PageLayout from '../../components/PageLayout';

const ShakePage = () => {
  const { shake, isShaking, style } = useShake({ intensity: 10, duration: 400 });

  return (
    <PageLayout title="Shake" description="シェイクアニメーション">
      <button
        onClick={shake}
        disabled={isShaking}
        style={{
          ...style,
          padding: '16px 32px',
          fontSize: '18px',
          borderRadius: 'var(--radius)',
          border: `2px solid var(--color-destructive)`,
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-destructive)',
          cursor: isShaking ? 'not-allowed' : 'pointer',
          fontWeight: 600,
        }}
        className="demo-button"
      >
        エラー: クリックして再試行
      </button>
    </PageLayout>
  );
};

export default ShakePage;
