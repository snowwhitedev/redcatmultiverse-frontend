import { useTranslation } from 'next-i18next';
import RoadmapTimeline from '../Roadmap/RoadmapTimeline';
import styles from './Roadmap.module.scss';

const Roadmap = () => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.roadmapSection}>
      <p className={styles.roadmapTitle}>{t('roadmap.title')}</p>
      <p className={styles.roadmapMessage}>{t('roadmap.message')}</p>
      <RoadmapTimeline showButton={false} />
    </div>
  );
};

export default Roadmap;
