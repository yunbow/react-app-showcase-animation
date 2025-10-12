import { useState } from 'react';
import useProgressBar from './useProgressBar';
import PageLayout from '../../components/PageLayout';

const ProgressBarPage = () => {
  const [target, setTarget] = useState(0);
  const { progress } = useProgressBar({
    targetProgress: target,
    duration: 1500,
    easing: 'easeInOut',
  });

  return (
    <PageLayout title="Progress Bar" description="プログレスバーアニメーション">
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <div style={{
          width: '100%',
          height: '32px',
          backgroundColor: 'var(--color-muted)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'var(--color-primary)',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 12px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
          }}>
            {Math.round(progress)}%
          </div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => setTarget(25)} className="demo-button">25%</button>
          <button onClick={() => setTarget(50)} className="demo-button">50%</button>
          <button onClick={() => setTarget(75)} className="demo-button">75%</button>
          <button onClick={() => setTarget(100)} className="demo-button">100%</button>
          <button onClick={() => setTarget(0)} className="demo-button">リセット</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProgressBarPage;
