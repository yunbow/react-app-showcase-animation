import useRevealOnHover from './useRevealOnHover';
import PageLayout from '../../components/PageLayout';

const RevealOnHoverPage = () => {
  const { hoverHandlers, maskStyle } = useRevealOnHover();

  return (
    <PageLayout title="Reveal on Hover" description="ホバーリビール">
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '32px', color: 'var(--color-muted-foreground)' }}>
          カードにマウスカーソルを合わせてください
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              {...hoverHandlers}
              style={{
                width: '250px',
                height: '350px',
                position: 'relative',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '2px solid var(--color-border)',
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--color-muted-foreground)',
              }}>
                Card {num}
              </div>

              <div style={{
                ...maskStyle,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, var(--color-primary), #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
              }}>
                Revealed!
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default RevealOnHoverPage;
