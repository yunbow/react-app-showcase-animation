import useFadeIn from '../useFadeIn';
import styles from './FadeInComponent.module.css';

interface FadeInComponentProps {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ duration, delay, children }) => {
  const { ref, style } = useFadeIn({ duration, delay });

  return (
    <div ref={ref} style={style} className={styles.container}>
      {children}
    </div>
  );
};

export default FadeInComponent;
