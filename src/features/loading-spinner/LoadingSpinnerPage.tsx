import useLoadingSpinner from './useLoadingSpinner';
import PageLayout from '../../components/PageLayout';

const LoadingSpinnerPage = () => {
  const circular = useLoadingSpinner({ type: 'circular', size: 60, speed: 1 });
  const dots = useLoadingSpinner({ type: 'dots', size: 60, color: 'var(--color-destructive)' });
  const pulse = useLoadingSpinner({ type: 'pulse', size: 60, color: 'var(--color-accent-foreground)' });
  const bars = useLoadingSpinner({ type: 'bars', size: 60, color: 'var(--color-primary)' });

  return (
    <PageLayout title="Loading Spinner" description="ローディングスピナー (4種類)">
      <div style={{ display: 'flex', gap: '60px', padding: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {circular.renderSpinner()}
        {dots.renderSpinner()}
        {pulse.renderSpinner()}
        {bars.renderSpinner()}
      </div>
    </PageLayout>
  );
};

export default LoadingSpinnerPage;
