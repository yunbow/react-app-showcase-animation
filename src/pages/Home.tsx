import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const animationGroups = [
    {
      category: 'Display & Transition',
      animations: [
        { path: '/fade-in', title: 'Fade In/Out', description: 'フェードイン・フェードアウト' },
        { path: '/blur-reveal', title: 'Blur Reveal', description: 'ブラーリビール' },
        { path: '/line-reveal', title: 'Reveal from Lines', description: 'ラインリビール' },
        { path: '/interpolate', title: 'Color Interpolation', description: '色補間アニメーション' },
        { path: '/transform-interpolation', title: 'Transform Interpolation', description: 'トランスフォーム補間' },
      ],
    },
    {
      category: 'Motion & Movement',
      animations: [
        { path: '/shake', title: 'Shake', description: 'シェイクアニメーション' },
        { path: '/pulse', title: 'Pulse', description: 'パルスエフェクト' },
        { path: '/bounce', title: 'Bounce', description: 'バウンスアニメーション' },
        { path: '/wave-effect', title: 'Wave Effect', description: '波紋エフェクト' },
        { path: '/neon-pulse', title: 'Glow / Neon Pulse', description: 'ネオンパルスエフェクト' },
      ],
    },
    {
      category: 'Interaction',
      animations: [
        { path: '/hover', title: 'Hover', description: 'ホバーエフェクト' },
        { path: '/draggable', title: 'Draggable', description: 'ドラッグ可能要素' },
        { path: '/ripple', title: 'Ripple Effect', description: 'リップルエフェクト' },
        { path: '/magnetic-hover', title: 'Magnetic Hover', description: 'マグネティックホバー' },
        { path: '/follow-cursor', title: 'Follow Cursor', description: 'カーソル追従エフェクト' },
        { path: '/magnetic-drag', title: 'Magnetic Drag / Elastic', description: 'エラスティックドラッグ' },
        { path: '/reveal-on-hover', title: 'Reveal on Hover', description: 'ホバーリビール' },
      ],
    },
    {
      category: 'UI Components',
      animations: [
        { path: '/modal', title: 'Modal', description: 'モーダルダイアログ' },
        { path: '/slide-menu', title: 'Slide Menu', description: 'スライドメニュー' },
        { path: '/carousel', title: 'Carousel', description: 'カルーセル' },
        { path: '/accordion', title: 'Accordion', description: 'アコーディオン' },
        { path: '/flip-card', title: 'Flip Card', description: 'フリップカード' },
        { path: '/loading-spinner', title: 'Loading Spinner', description: 'ローディングスピナー' },
        { path: '/progress-bar', title: 'Progress Bar', description: 'プログレスバー' },
      ],
    },
    {
      category: 'Text & Number',
      animations: [
        { path: '/count-up', title: 'Count Up/Down', description: '数値カウントアップ・ダウン' },
        { path: '/typewriter', title: 'Typewriter', description: 'タイプライター効果' },
        { path: '/number-scramble', title: 'Number Scramble', description: '数字スクランブル' },
        { path: '/text-shuffle', title: 'Text Shuffle / Split Animation', description: 'テキストシャッフル' },
        { path: '/text-reveal', title: 'Text Reveal', description: 'テキストマスクリビール' },
      ],
    },
    {
      category: 'Scroll & List',
      animations: [
        { path: '/scroll-animation', title: 'Scroll Animation', description: 'スクロール連動アニメーション' },
        { path: '/staggered-list', title: 'Staggered List', description: '段階的リストアニメーション' },
        { path: '/scroll-snap', title: 'Scroll Snap Animation', description: 'スクロールスナップ' },
      ],
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>React Animation Hooks Showcase</h1>
        <p>33種類のカスタムHooksアニメーション集</p>
      </header>

      <div className="animation-groups">
        {animationGroups.map((group) => (
          <div key={group.category} className="animation-group">
            <h2 className="group-title">{group.category}</h2>
            <div className="animation-grid">
              {group.animations.map((animation) => (
                <Link key={animation.path} to={animation.path} className="animation-card">
                  <h3>{animation.title}</h3>
                  <p>{animation.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="home-footer">
        <p>Created with React 18 + TypeScript + Custom Hooks</p>
      </footer>
    </div>
  );
};

export default Home;
