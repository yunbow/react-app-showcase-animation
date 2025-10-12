import useCarousel from './useCarousel';
import PageLayout from '../../components/PageLayout';

const CarouselPage = () => {
  const items = ['スライド 1', 'スライド 2', 'スライド 3', 'スライド 4', 'スライド 5'];
  const { goToNext, goToPrev, getSlideStyle, hasNext, hasPrev } = useCarousel({
    itemCount: items.length,
    autoPlay: true,
    autoPlayInterval: 3000,
  });

  return (
    <PageLayout title="Carousel" description="カルーセル (自動再生)">
      <div style={{ position: 'relative', width: '700px', height: '350px', overflow: 'hidden', maxWidth: '100%', borderRadius: 'var(--radius)' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              ...getSlideStyle(index),
              background: `linear-gradient(135deg, hsl(${index * 60}, 70%, 60%), hsl(${index * 60 + 30}, 70%, 50%))`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {item}
          </div>
        ))}

        <button
          onClick={goToPrev}
          disabled={!hasPrev}
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            padding: '12px 20px',
            backgroundColor: 'var(--color-card)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          ←
        </button>
        <button
          onClick={goToNext}
          disabled={!hasNext}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            padding: '12px 20px',
            backgroundColor: 'var(--color-card)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          →
        </button>
      </div>
    </PageLayout>
  );
};

export default CarouselPage;
