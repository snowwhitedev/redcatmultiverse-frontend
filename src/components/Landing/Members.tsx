import { useTranslation } from 'next-i18next';
import MemberCard from './MemberCard';
import styles from './Members.module.scss';

const Members = () => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.membersContainer}>
      <p className={styles.membersMessage}>{t('members.title')}</p>
      <div className={styles.cardsContainer}>
        <MemberCard name='test name' color='#e83324' />
      </div>
    </div>
  );
};

export default Members;
