import useTypewriter from './useTypewriter';
import PageLayout from '../../components/PageLayout';

const TypewriterPage = () => {
  const { displayText, isComplete } = useTypewriter({
    text: 'Hello, World! Welcome to React Animation Hooks Showcase!',
    speed: 100,
    delay: 500,
  });

  return (
    <PageLayout title="Typewriter" description="タイプライター効果">
      <div className="demo-box">
        <p className="demo-text">{displayText}</p>
        {isComplete && <p className="demo-complete">タイピング完了!</p>}
      </div>
    </PageLayout>
  );
};

export default TypewriterPage;
