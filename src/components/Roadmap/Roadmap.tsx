import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import styles from '../../styles/community.module.scss';
import RoadmapTimeline from './RoadmapTimeline';
import Container from '../container/Container';
import GradientText from '../gradientText/GradientText';

const RoadmapComponent = ({ showTitle }: { showTitle: boolean }) => {
  const { t } = useTranslation('roadmapPage');

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
      <Container className={styles.container}>
        {showTitle && (
          <GradientText
            element='h1'
            text={t('roadmap')}
            innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
            gradient={['#f9c930', '#f2957c', '#7192f3']}
          />
        )}
        <RoadmapTimeline />
      </Container>
    </div>
  );
};

export default RoadmapComponent;
