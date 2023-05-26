import { useTranslation } from 'next-i18next';
import styles from './AboutRCM.module.scss';

const AboutRCM = () => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutTitle}>{t('aboutRCM.aboutRCMTitle')}</p>
        <p className={styles.aboutMessage}>{t('aboutRCM.aboutRCMMessage')}</p>
        <img src="/images/Landing/cat_about.png" />
      </div>
    </div>
  );
};

export default AboutRCM;
