import useStaggeredList from './useStaggeredList';
import PageLayout from '../../components/PageLayout';

const StaggeredListPage = () => {
  const items = [
    'React Hooks',
    'TypeScript',
    'Animation',
    'Staggered Effect',
    'CSS Transitions',
    'Web Development',
    'UI/UX Design',
    'Performance',
  ];

  const { getItemStyle, start, reset, isAnimating } = useStaggeredList({
    itemCount: items.length,
    staggerDelay: 80,
    animationDuration: 600,
    autoStart: false,
  });

  return (
    <PageLayout title="Staggered List / Group Animation" description="段階的なリストアニメーション">
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={start} disabled={isAnimating} className="demo-button">
            開始
          </button>
          <button onClick={reset} className="demo-button">
            リセット
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                ...getItemStyle(index),
                padding: '20px 24px',
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                fontSize: '16px',
                fontWeight: 500,
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default StaggeredListPage;
