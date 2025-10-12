import useFollowCursor from './useFollowCursor';
import PageLayout from '../../components/PageLayout';

const FollowCursorPage = () => {
  const { cursorStyle, containerRef, isActive, start, stop } = useFollowCursor({
    smoothing: 0.15,
    type: 'magnetic',
  });

  return (
    <PageLayout title="Follow Cursor (Magnetic/Jelly Cursor)" description="カーソル追従エフェクト">
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
          <button onClick={start} disabled={isActive} className="demo-button">
            開始
          </button>
          <button onClick={stop} disabled={!isActive} className="demo-button">
            停止
          </button>
        </div>

        <div
          ref={containerRef}
          style={{
            height: '500px',
            backgroundColor: 'var(--color-muted)',
            borderRadius: 'var(--radius)',
            border: '2px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: isActive ? 'none' : 'default',
          }}
        >
          <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--color-foreground)' }}>
              マウスを動かしてください
            </h3>
            <p style={{ color: 'var(--color-muted-foreground)' }}>
              カスタムカーソルがマウスに追従します
            </p>
          </div>

          {/* Custom cursor */}
          <div style={cursorStyle} />
        </div>
      </div>
    </PageLayout>
  );
};

export default FollowCursorPage;
