import useScrollSnap from './useScrollSnap';
import PageLayout from '../../components/PageLayout';

const ScrollSnapPage = () => {
  const { containerRef, containerStyle, itemStyle } = useScrollSnap();

  const items = [
    { color: '#ef4444', label: 'セクション 1' },
    { color: '#f59e0b', label: 'セクション 2' },
    { color: '#10b981', label: 'セクション 3' },
    { color: '#3b82f6', label: 'セクション 4' },
    { color: '#8b5cf6', label: 'セクション 5' },
  ];

  return (
    <PageLayout title="Scroll Snap Animation" description="スクロールスナップ">
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '24px', color: 'var(--color-muted-foreground)' }}>
          コンテナをスクロールすると要素がスナップします
        </p>

        <div
          ref={containerRef}
          style={{
            ...containerStyle,
            borderRadius: 'var(--radius)',
            border: '2px solid var(--color-border)',
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                ...itemStyle,
                height: '500px',
                backgroundColor: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ScrollSnapPage;
