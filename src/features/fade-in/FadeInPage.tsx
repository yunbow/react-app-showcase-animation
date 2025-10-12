import useFadeIn from './useFadeIn';
import PageLayout from '../../components/PageLayout';

const FadeInPage = () => {
  const { ref, style, fadeIn, fadeOut, isVisible } = useFadeIn({
    duration: 800,
    delay: 0,
    trigger: false
  });

  return (
    <PageLayout title="Fade In/Out" description="フェードイン・フェードアウトアニメーション">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center' }}>
          {isVisible && (
            <div ref={ref} style={style} className="demo-box">
              フェードイン・アウトするコンテンツ
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={fadeIn} disabled={isVisible} className="demo-button">
            フェードイン
          </button>
          <button onClick={fadeOut} disabled={!isVisible} className="demo-button">
            フェードアウト
          </button>
        </div>

        <p style={{ color: 'var(--color-muted-foreground)', fontSize: '14px' }}>
          {isVisible ? 'コンテンツが表示されています' : 'コンテンツが非表示です'}
        </p>
      </div>
    </PageLayout>
  );
};

export default FadeInPage;
