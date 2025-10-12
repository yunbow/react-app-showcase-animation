import useHover from './useHover';
import PageLayout from '../../components/PageLayout';

const HoverPage = () => {
  const { ref, isHovered, hoverStyle } = useHover({ enterDelay: 100 });

  return (
    <PageLayout title="Hover" description="ホバーエフェクト">
      <div
        ref={ref}
        style={{
          ...hoverStyle,
          padding: '40px 60px',
          backgroundColor: isHovered ? 'var(--color-muted)' : 'var(--color-card)',
          borderRadius: 'var(--radius)',
          boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
          transition: 'all 0.3s ease-in-out',
          border: `2px solid ${isHovered ? 'var(--color-primary)' : 'var(--color-border)'}`,
        }}
      >
        <h3>マウスカーソルを上に合わせてみてください</h3>
      </div>
    </PageLayout>
  );
};

export default HoverPage;
