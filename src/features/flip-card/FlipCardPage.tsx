import useFlipCard from './useFlipCard';
import PageLayout from '../../components/PageLayout';

const FlipCardPage = () => {
  const { flip, containerStyle, cardStyle, frontStyle, backStyle } = useFlipCard({ duration: 600 });

  return (
    <PageLayout title="Flip Card" description="フリップカードアニメーション">
      <div style={{ ...containerStyle, width: '350px', height: '250px' }} onClick={flip}>
        <div style={cardStyle}>
          <div style={{
            ...frontStyle,
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            borderRadius: 'var(--radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎴</div>
              表面 - クリックして反転
            </div>
          </div>
          <div style={{
            ...backStyle,
            background: 'linear-gradient(135deg, var(--color-destructive), var(--color-accent))',
            borderRadius: 'var(--radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>✨</div>
              裏面 - もう一度クリック
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FlipCardPage;
