import useCountUp from './useCountUp';
import PageLayout from '../../components/PageLayout';

const CountUpPage = () => {
  const { count, isAnimating, startCountUp, startCountDown, stop, reset } = useCountUp({
    start: 0,
    step: 1,
    interval: 50,
    decimals: 0,
  });

  return (
    <PageLayout title="Count Up/Down" description="数値カウントアップ・ダウンアニメーション">
      <div className="demo-box">
        <p className="demo-value">{count}</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={startCountUp} disabled={isAnimating} className="demo-button">
            カウントアップ開始
          </button>
          <button onClick={startCountDown} disabled={isAnimating} className="demo-button">
            カウントダウン開始
          </button>
          <button onClick={stop} disabled={!isAnimating} className="demo-button">
            停止
          </button>
          <button onClick={reset} className="demo-button">
            リセット
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CountUpPage;
