import useScrollAnimation from './useScrollAnimation';
import PageLayout from '../../components/PageLayout';

const ScrollAnimationPage = () => {
  const animation1 = useScrollAnimation({ threshold: 0.3 });
  const animation2 = useScrollAnimation({ threshold: 0.3 });
  const animation3 = useScrollAnimation({ threshold: 0.3 });
  const animation4 = useScrollAnimation({ threshold: 0.3 });

  const getStyle = (animation: any) => ({
    opacity: animation.isVisible ? 1 : 0,
    transform: `${animation.getTransform(0.2)} scale(${animation.isVisible ? 1 : 0.8})`,
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  });

  return (
    <PageLayout title="Scroll Animation" description="スクロール連動アニメーション">
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{
          padding: '20px',
          marginBottom: '30px',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-accent-foreground)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          fontWeight: 600,
        }}>
          ↓ 下にスクロールしてください ↓
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '150vh' }}>
          <div ref={animation1.ref} style={getStyle(animation1)} className="demo-box">
            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>アニメーション 1</h3>
            <p style={{ margin: 0, color: 'var(--color-muted-foreground)' }}>スクロールで表示されました！</p>
          </div>

          <div ref={animation2.ref} style={getStyle(animation2)} className="demo-box">
            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>アニメーション 2</h3>
            <p style={{ margin: 0, color: 'var(--color-muted-foreground)' }}>フェードインとスケールで登場</p>
          </div>

          <div ref={animation3.ref} style={getStyle(animation3)} className="demo-box">
            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>アニメーション 3</h3>
            <p style={{ margin: 0, color: 'var(--color-muted-foreground)' }}>スクロール位置で自動的に表示</p>
          </div>

          <div ref={animation4.ref} style={getStyle(animation4)} className="demo-box">
            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>アニメーション 4</h3>
            <p style={{ margin: 0, color: 'var(--color-muted-foreground)' }}>最後の要素です</p>
          </div>
        </div>

        <div style={{
          marginTop: '100px',
          padding: '40px',
          backgroundColor: 'var(--color-muted)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          border: '2px dashed var(--color-border)',
        }}>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
            ページの最後に到達しました
          </p>
          <p style={{ margin: '10px 0 0 0', color: 'var(--color-muted-foreground)' }}>
            上にスクロールして戻ることもできます
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ScrollAnimationPage;
